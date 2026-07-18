import { cookies } from "next/headers";
import { timingSafeEqual } from "crypto";

/**
 * Vérifie que la requête provient d'un administrateur connecté.
 *
 * Le middleware (src/proxy.ts) ne couvre que le rendu des pages /admin :
 * les routes API doivent donc contrôler l'accès elles-mêmes.
 */
export async function isAdminRequest(): Promise<boolean> {
  const secret = process.env.ADMIN_SECRET;
  if (!secret) return false;

  const token = (await cookies()).get("admin_token")?.value;
  if (!token) return false;

  // Comparaison à temps constant : évite de laisser fuiter le secret
  // via le temps de réponse.
  const a = Buffer.from(token);
  const b = Buffer.from(secret);
  return a.length === b.length && timingSafeEqual(a, b);
}
