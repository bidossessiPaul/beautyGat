/* eslint-disable @typescript-eslint/no-explicit-any */
// Le paquet fedapay n'a PAS d'export par défaut : il expose { FedaPay,
// Transaction, ... }. Un `import FedaPay from "fedapay"` récupère l'objet
// module entier, sur lequel setApiKey n'existe pas — l'appel échouait
// silencieusement sur undefined. Les imports nommés sont obligatoires.
import { FedaPay, Transaction } from "fedapay";

/**
 * Accès centralisé à FedaPay.
 *
 * Le SDK n'expose pas de types : on isole les `any` ici plutôt que de les
 * disperser dans les routes.
 */

/** Seul statut valant paiement encaissé. */
const APPROVED = "approved";

export function configureFedaPay(): void {
  const key = process.env.FEDAPAY_SECRET_KEY;
  if (!key) throw new Error("FEDAPAY_SECRET_KEY manquante");

  (FedaPay as any).setApiKey(key);
  (FedaPay as any).setEnvironment(process.env.FEDAPAY_ENV ?? "sandbox");
}

/**
 * Erreur de validation renvoyée par FedaPay (HTTP 400).
 * Distinguée d'une panne réseau : elle est due aux données envoyées et doit
 * être corrigée par le client, pas réessayée.
 */
export class FedaPayValidationError extends Error {
  constructor(message: string) {
    super(message);
    this.name = "FedaPayValidationError";
  }
}

/** Traduit les erreurs de champ FedaPay en message lisible. */
function describeFieldErrors(errors: Record<string, string[]>): string | null {
  if (errors["phone_number.number"] || errors["phone_number"]) {
    return "Le numéro de téléphone n'est pas accepté par notre prestataire de paiement. Vérifiez-le (ex. 01 68 41 11 11).";
  }
  if (errors["customer.email"] || errors["email"]) {
    return "L'adresse email n'est pas valide.";
  }
  const first = Object.keys(errors)[0];
  return first ? `Champ invalide : ${first}` : null;
}

export interface CreateTransactionParams {
  description: string;
  amount: number;
  callbackUrl: string;
  firstName: string;
  lastName: string;
  phone: string;
  email?: string | null;
}

/** Crée une transaction et renvoie son identifiant + l'URL de paiement. */
export async function createTransaction(
  params: CreateTransactionParams,
): Promise<{ id: string; paymentUrl: string }> {
  configureFedaPay();

  let transaction: any;
  try {
    transaction = await (Transaction as any).create({
      description: params.description,
      amount: params.amount,
      currency: { iso: "XOF" },
      callback_url: params.callbackUrl,
      customer: {
        firstname: params.firstName,
        lastname: params.lastName,
        phone_number: { number: params.phone, country: "BJ" },
        ...(params.email ? { email: params.email } : {}),
      },
    });
  } catch (err: any) {
    // FedaPay renvoie le détail des champs fautifs dans err.errors ; sans cette
    // traduction, le client ne voit qu'une panne générique et ne peut rien corriger.
    const fieldErrors = err?.errors as Record<string, string[]> | undefined;
    if (fieldErrors) {
      const message = describeFieldErrors(fieldErrors);
      console.error("[fedapay] données refusées:", JSON.stringify(fieldErrors));
      if (message) throw new FedaPayValidationError(message);
    }
    throw err;
  }

  const token = await transaction.generateToken();
  return { id: String(transaction.id), paymentUrl: token.url };
}

/**
 * Interroge FedaPay pour connaître le statut réel d'une transaction.
 *
 * C'est la seule source de vérité : ni le retour du navigateur ni le corps
 * d'un webhook ne suffisent à considérer un paiement comme encaissé.
 * Renvoie false en cas d'erreur réseau — on préfère un faux négatif,
 * rattrapable, à un faux positif.
 */
export async function isTransactionApproved(transactionId: string): Promise<boolean> {
  try {
    configureFedaPay();
    const transaction = await (Transaction as any).retrieve(transactionId);
    return transaction?.status === APPROVED;
  } catch (err) {
    console.error(`[fedapay] vérification impossible pour ${transactionId}:`, err);
    return false;
  }
}
