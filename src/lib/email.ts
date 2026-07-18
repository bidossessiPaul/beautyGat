/**
 * Envoi des emails transactionnels via l'API REST Brevo (v3).
 *
 * On utilise l'API HTTP plutôt que le SMTP : le site tourne sur Vercel, où les
 * connexions SMTP persistantes sont peu fiables (cold starts, timeouts).
 *
 * Règle : aucune fonction de ce module ne lève d'exception. Une panne d'email
 * ne doit jamais faire échouer une réservation déjà enregistrée en base.
 */

const BREVO_ENDPOINT = "https://api.brevo.com/v3/smtp/email";

const BORDEAUX = "#6D071A";

interface MailRecipient {
  email: string;
  name?: string;
}

interface SendMailParams {
  to: MailRecipient[];
  subject: string;
  html: string;
  replyTo?: MailRecipient;
}

/** Données minimales d'une réservation nécessaires aux emails. */
export interface AppointmentMailData {
  id: string;
  serviceTitle: string;
  servicePrice?: string | null;
  date: string;
  time: string;
  firstName: string;
  lastName: string;
  phone: string;
  email?: string | null;
  message?: string | null;
  depositPaid: boolean;
  depositAmount?: number | null;
}

/* ────────────────────────────────────────────────── transport Brevo */

async function sendMail({ to, subject, html, replyTo }: SendMailParams): Promise<boolean> {
  const apiKey = process.env.BREVO_API_KEY;
  const senderEmail = process.env.BREVO_SENDER_EMAIL;

  if (!apiKey || !senderEmail) {
    console.error("[email] BREVO_API_KEY ou BREVO_SENDER_EMAIL manquant — envoi ignoré");
    return false;
  }

  try {
    const res = await fetch(BREVO_ENDPOINT, {
      method: "POST",
      headers: {
        "api-key": apiKey,
        "content-type": "application/json",
        accept: "application/json",
      },
      body: JSON.stringify({
        sender: {
          email: senderEmail,
          name: process.env.BREVO_SENDER_NAME || "Academy Beauty Gate",
        },
        to,
        subject,
        htmlContent: html,
        ...(replyTo ? { replyTo } : {}),
      }),
    });

    if (!res.ok) {
      // Brevo renvoie un JSON explicite ({ code, message }) très utile au debug.
      const detail = await res.text().catch(() => "");
      console.error(`[email] Brevo a répondu ${res.status}:`, detail);
      return false;
    }

    return true;
  } catch (err) {
    console.error("[email] échec de l'appel à Brevo:", err);
    return false;
  }
}

/* ────────────────────────────────────────────────────────── helpers */

/** "2026-07-20" → "lundi 20 juillet 2026" */
function formatDate(date: string): string {
  try {
    return new Date(`${date}T12:00:00`).toLocaleDateString("fr-FR", {
      weekday: "long",
      day: "numeric",
      month: "long",
      year: "numeric",
    });
  } catch {
    return date;
  }
}

function formatAmount(amount: number): string {
  return `${amount.toLocaleString("fr-FR")} FCFA`;
}

/** Neutralise le HTML des champs saisis par le client. */
function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

/** Rendu d'une ligne "libellé / valeur" du récapitulatif. */
function row(label: string, value: string, strong = false): string {
  return `
    <tr>
      <td style="padding:10px 0;border-bottom:1px solid #eeeeee;color:#888888;font-size:13px;">${label}</td>
      <td style="padding:10px 0;border-bottom:1px solid #eeeeee;color:${strong ? BORDEAUX : "#1a1a1a"};font-size:13px;font-weight:${strong ? 700 : 600};text-align:right;">${value}</td>
    </tr>`;
}

/** Gabarit commun : en-tête bordeaux, contenu, pied de page. */
function layout(title: string, intro: string, body: string, footer: string): string {
  return `<!DOCTYPE html>
<html lang="fr">
<body style="margin:0;padding:0;background-color:#faf8f6;font-family:Arial,Helvetica,sans-serif;">
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color:#faf8f6;padding:32px 16px;">
    <tr>
      <td align="center">
        <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="max-width:540px;background-color:#ffffff;border:1px solid #e8e8e8;">

          <tr>
            <td style="background-color:${BORDEAUX};padding:28px 32px;text-align:center;">
              <p style="margin:0 0 6px;color:#f5c2c2;font-size:10px;letter-spacing:3px;text-transform:uppercase;font-weight:bold;">Academy Beauty Gate</p>
              <h1 style="margin:0;color:#ffffff;font-size:22px;font-weight:bold;">${title}</h1>
            </td>
          </tr>

          <tr>
            <td style="padding:28px 32px;">
              <p style="margin:0 0 22px;color:#555555;font-size:14px;line-height:1.7;">${intro}</p>
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0">${body}</table>
            </td>
          </tr>

          <tr>
            <td style="padding:0 32px 28px;">
              <p style="margin:0;color:#999999;font-size:12px;line-height:1.7;">${footer}</p>
            </td>
          </tr>

          <tr>
            <td style="background-color:#faf8f6;border-top:1px solid #e8e8e8;padding:18px 32px;text-align:center;">
              <p style="margin:0;color:#bbbbbb;font-size:11px;">Academy Beauty Gate — Cadjehoun, Cotonou · Lun–Sam 9h–19h</p>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>`;
}

/** Bloc récapitulatif partagé par les deux emails. */
function recapRows(rdv: AppointmentMailData): string {
  const deposit = rdv.depositPaid && rdv.depositAmount
    ? row("Acompte réglé", formatAmount(rdv.depositAmount), true)
    : row("Acompte", "Aucun — à régler sur place");

  return [
    row("Soin", escapeHtml(rdv.serviceTitle)),
    rdv.servicePrice ? row("Tarif", escapeHtml(rdv.servicePrice)) : "",
    row("Date", formatDate(rdv.date)),
    row("Heure", rdv.time),
    deposit,
  ].join("");
}

/* ──────────────────────────────────────────── email → administration */

export async function sendAdminNotification(rdv: AppointmentMailData): Promise<boolean> {
  const adminEmail = process.env.ADMIN_NOTIFICATION_EMAIL;
  if (!adminEmail) {
    console.error("[email] ADMIN_NOTIFICATION_EMAIL manquant — alerte admin ignorée");
    return false;
  }

  const client = `${rdv.firstName} ${rdv.lastName}`;
  const statusLabel = rdv.depositPaid ? "Acompte payé" : "Sans acompte";

  const body = [
    recapRows(rdv),
    row("Client", escapeHtml(client)),
    row("Téléphone", escapeHtml(rdv.phone)),
    rdv.email ? row("Email", escapeHtml(rdv.email)) : "",
    rdv.message ? row("Message", escapeHtml(rdv.message)) : "",
  ].join("");

  const waNumber = rdv.phone.replace(/[^0-9]/g, "");
  const footer = `
    <a href="https://wa.me/${waNumber}" style="color:${BORDEAUX};font-weight:bold;text-decoration:none;">
      Contacter ${escapeHtml(rdv.firstName)} sur WhatsApp
    </a><br/>
    Retrouvez cette demande dans l'espace admin, rubrique Rendez-vous.`;

  return sendMail({
    to: [{ email: adminEmail, name: "Academy Beauty Gate" }],
    subject: `Nouvelle réservation — ${client} · ${formatDate(rdv.date)} ${rdv.time} (${statusLabel})`,
    html: layout(
      "Nouvelle réservation",
      `<strong>${escapeHtml(client)}</strong> vient de réserver un rendez-vous.`,
      body,
      footer,
    ),
    // Répondre à l'email ouvre directement une réponse au client.
    ...(rdv.email ? { replyTo: { email: rdv.email, name: client } } : {}),
  });
}

/* ─────────────────────────────────────────────────── email → cliente */

export async function sendClientConfirmation(rdv: AppointmentMailData): Promise<boolean> {
  if (!rdv.email) return false;

  const intro = rdv.depositPaid
    ? `Bonjour ${escapeHtml(rdv.firstName)}, votre acompte a bien été reçu et <strong>votre créneau est garanti</strong>. Voici le récapitulatif de votre rendez-vous.`
    : `Bonjour ${escapeHtml(rdv.firstName)}, nous avons bien reçu votre demande de rendez-vous. Voici le récapitulatif.`;

  const footer = rdv.depositPaid
    ? `Votre acompte sera déduit du prix de votre soin. En cas d'imprévu, prévenez-nous au moins 24h à l'avance au +229 01 68 41 11 11.`
    : `Notre équipe vous contactera rapidement au <strong>${escapeHtml(rdv.phone)}</strong> pour confirmer ce créneau. Ce rendez-vous n'est pas encore garanti.`;

  return sendMail({
    to: [{ email: rdv.email, name: `${rdv.firstName} ${rdv.lastName}` }],
    subject: rdv.depositPaid
      ? `Votre place est garantie — ${formatDate(rdv.date)} à ${rdv.time}`
      : `Votre demande de rendez-vous du ${formatDate(rdv.date)}`,
    html: layout(
      rdv.depositPaid ? "Place garantie" : "Demande reçue",
      intro,
      recapRows(rdv),
      footer,
    ),
  });
}

/* ────────────────────────────────────────────────────── orchestration */

/**
 * Envoie l'alerte admin et la confirmation cliente en parallèle.
 * Ne lève jamais. Le retour permet à l'interface de n'annoncer un email
 * que s'il est réellement parti.
 */
export async function notifyNewAppointment(
  rdv: AppointmentMailData,
): Promise<{ adminSent: boolean; clientSent: boolean }> {
  const [admin, client] = await Promise.allSettled([
    sendAdminNotification(rdv),
    sendClientConfirmation(rdv),
  ]);

  const ok = (r: PromiseSettledResult<boolean>) => r.status === "fulfilled" && r.value;
  const adminSent = ok(admin);
  const clientSent = ok(client);

  console.log(
    `[email] rdv ${rdv.id} — admin: ${adminSent ? "envoyé" : "échec"}, client: ${
      rdv.email ? (clientSent ? "envoyé" : "échec") : "pas d'email fourni"
    }`,
  );

  return { adminSent, clientSent };
}
