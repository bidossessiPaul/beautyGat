/* eslint-disable @typescript-eslint/no-explicit-any */
import FedaPay from "fedapay";

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

  const transaction = await (FedaPay as any).Transaction.create({
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
    const transaction = await (FedaPay as any).Transaction.retrieve(transactionId);
    return transaction?.status === APPROVED;
  } catch (err) {
    console.error(`[fedapay] vérification impossible pour ${transactionId}:`, err);
    return false;
  }
}
