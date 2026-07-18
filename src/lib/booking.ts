/**
 * Constantes et validations partagées du parcours de réservation.
 *
 * Ce module est importé par le formulaire client ET par les routes API :
 * les règles (créneaux, jours fermés, montant de l'acompte) ne doivent
 * exister qu'à un seul endroit.
 */

export const TIME_SLOTS = [
  "09:00", "10:00", "11:00", "12:00", "14:00",
  "15:00", "16:00", "17:00", "18:00", "19:00",
] as const;

/**
 * Montant de l'acompte en FCFA.
 * Lu côté serveur uniquement — le navigateur ne doit jamais pouvoir l'imposer.
 */
export function getDepositAmount(): number {
  const raw = Number(process.env.RDV_DEPOSIT_AMOUNT);
  return Number.isFinite(raw) && raw > 0 ? Math.floor(raw) : 5000;
}

/** Montant affiché dans l'interface (le serveur reste seul juge du vrai montant). */
export const DEPOSIT_DISPLAY_AMOUNT = 5000;

/**
 * Date du jour au Bénin (UTC+1, sans heure d'été).
 * Le serveur Vercel tourne en UTC : sans ce décalage, un créneau du jour
 * serait refusé à tort en début de soirée.
 */
export function todayInBenin(): string {
  const now = new Date();
  const benin = new Date(now.getTime() + 60 * 60 * 1000);
  return benin.toISOString().slice(0, 10);
}

export interface AppointmentInput {
  serviceTitle: string;
  serviceSlug?: string | null;
  servicePrice?: string | null;
  date: string;
  time: string;
  firstName: string;
  lastName: string;
  phone: string;
  email?: string | null;
  message?: string | null;
}

/** Longueurs maximales, alignées sur les colonnes MySQL (VARCHAR(191)). */
const MAX_LENGTHS: Record<string, number> = {
  serviceTitle: 191,
  serviceSlug: 191,
  servicePrice: 191,
  firstName: 80,
  lastName: 80,
  phone: 40,
  email: 191,
  message: 2000,
};

function isNonEmptyString(v: unknown): v is string {
  return typeof v === "string" && v.trim().length > 0;
}

/**
 * Valide un numéro de téléphone et le normalise au format attendu par FedaPay.
 *
 * FedaPay rejette les numéros mal formés avec une simple erreur 400, sans
 * indiquer le champ fautif au client. On filtre donc en amont, en particulier
 * les numéros béninois d'une longueur incorrecte (un chiffre en trop ou en
 * moins) qui passeraient un contrôle naïf sur le nombre de chiffres.
 *
 * Bénin : 10 chiffres en local (01 XX XX XX XX), soit 13 avec l'indicatif 229.
 * Les numéros étrangers restent acceptés, avec un contrôle de longueur souple.
 */
export function validatePhone(
  raw: string,
): { ok: true; phone: string } | { ok: false; error: string } {
  const digits = raw.replace(/\D/g, "");

  if (digits.length < 8) {
    return { ok: false, error: "Numéro de téléphone trop court" };
  }

  // Numéro local béninois : 10 chiffres commençant par 0.
  if (digits.length === 10 && digits.startsWith("0")) {
    return { ok: true, phone: `229${digits}` };
  }

  // Numéro béninois avec indicatif : 229 + 10 chiffres.
  if (digits.startsWith("229")) {
    const local = digits.slice(3);
    if (local.length !== 10) {
      return {
        ok: false,
        error: "Numéro béninois invalide : il doit comporter 10 chiffres après l'indicatif 229 (ex. 229 01 68 41 11 11)",
      };
    }
    return { ok: true, phone: digits };
  }

  // Autres pays : contrôle de longueur souple (norme E.164).
  if (digits.length > 15) {
    return { ok: false, error: "Numéro de téléphone trop long" };
  }

  return { ok: true, phone: digits };
}

/**
 * Valide et normalise les données reçues du navigateur.
 * Retourne soit les données propres, soit le premier message d'erreur.
 */
export function validateAppointmentInput(
  body: unknown,
): { ok: true; data: AppointmentInput } | { ok: false; error: string } {
  if (typeof body !== "object" || body === null) {
    return { ok: false, error: "Requête invalide" };
  }

  const b = body as Record<string, unknown>;

  for (const field of ["serviceTitle", "date", "time", "firstName", "lastName", "phone"]) {
    if (!isNonEmptyString(b[field])) {
      return { ok: false, error: "Champs requis manquants" };
    }
  }

  const date = (b.date as string).trim();
  const time = (b.time as string).trim();

  if (!/^\d{4}-\d{2}-\d{2}$/.test(date)) {
    return { ok: false, error: "Date invalide" };
  }
  if (Number.isNaN(new Date(`${date}T12:00:00`).getTime())) {
    return { ok: false, error: "Date invalide" };
  }
  // Comparaison lexicographique : le format ISO le permet.
  if (date < todayInBenin()) {
    return { ok: false, error: "Cette date est déjà passée" };
  }
  if (new Date(`${date}T12:00:00`).getDay() === 0) {
    return { ok: false, error: "Le salon est fermé le dimanche" };
  }
  if (!TIME_SLOTS.includes(time as (typeof TIME_SLOTS)[number])) {
    return { ok: false, error: "Créneau horaire invalide" };
  }

  const email = isNonEmptyString(b.email) ? (b.email as string).trim() : null;
  if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email)) {
    return { ok: false, error: "Adresse email invalide" };
  }

  const phoneCheck = validatePhone((b.phone as string).trim());
  if (!phoneCheck.ok) return { ok: false, error: phoneCheck.error };
  const phone = phoneCheck.phone;

  const data: AppointmentInput = {
    serviceTitle: (b.serviceTitle as string).trim(),
    serviceSlug: isNonEmptyString(b.serviceSlug) ? (b.serviceSlug as string).trim() : null,
    servicePrice: isNonEmptyString(b.servicePrice) ? (b.servicePrice as string).trim() : null,
    date,
    time,
    firstName: (b.firstName as string).trim(),
    lastName: (b.lastName as string).trim(),
    phone,
    email,
    message: isNonEmptyString(b.message) ? (b.message as string).trim() : null,
  };

  for (const [field, max] of Object.entries(MAX_LENGTHS)) {
    const value = data[field as keyof AppointmentInput];
    if (typeof value === "string" && value.length > max) {
      return { ok: false, error: `Le champ ${field} est trop long` };
    }
  }

  return { ok: true, data };
}
