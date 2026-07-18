# Academy Beauty Gate

## Stack
- Next.js 16 App Router, React 19, TypeScript strict
- Tailwind CSS v4, shadcn/ui
- Prisma 5 + MySQL (Railway)
- FedaPay (paiement)
- Brevo API REST (emails transactionnels)
- Zustand (panier)

## Commandes
- `npm run dev` — dev server
- `npm run build` — build prod
- `npm run seed` — peupler les produits MySQL

## Base de données
- MySQL sur Railway (l'ancienne base Hostinger est conservée en commentaire dans `.env.local`)
- Tables : `Product`, `Order`, `Service`, `ServiceCategory`, `Appointment`, `EventLead`
- Schéma : `prisma/schema.prisma`
- Pas de dossier `migrations/` : les évolutions se poussent avec `npx prisma db push`

## Admin
- URL : `/admin` — mot de passe via `ADMIN_SECRET`
- Produits CRUD, commandes, rendez-vous, dashboard stats
- `src/proxy.ts` ne protège que le rendu des pages `/admin`. Les routes API
  doivent appeler `isAdminRequest()` (`src/lib/admin-auth.ts`) elles-mêmes.

## Réservation de rendez-vous
- Parcours : `/rendez-vous` → soin, date/heure, coordonnées, puis choix entre
  acompte « Garantir ma place » (FedaPay) ou réservation sans paiement.
- Le montant de l'acompte vient de `RDV_DEPOSIT_AMOUNT` côté serveur
  (`getDepositAmount()`), jamais du navigateur.
- `depositPaid` n'est mis à true qu'après vérification du statut de la
  transaction auprès de FedaPay (`isTransactionApproved`). Une visite de la page
  de confirmation ne suffit pas.
- Les emails partent une seule fois, protégés par le champ `notifiedAt`
  (le retour navigateur et le webhook peuvent se déclencher tous les deux).

## Emails
- Module unique : `src/lib/email.ts` — SMTP Hostinger via nodemailer, depuis
  la boîte `contact@academybeautygatee.com`.
- Aucune fonction du module ne lève : une panne d'email ne doit jamais faire
  échouer une réservation déjà enregistrée. Le transport est isolé dans
  `sendMail()`, changer de prestataire ne touche pas aux gabarits.
- Variables : `SMTP_HOST`, `SMTP_PORT` (465), `SMTP_USER`, `SMTP_PASSWORD`,
  `SMTP_SENDER_NAME`, `ADMIN_NOTIFICATION_EMAIL`.
- `from` doit rester la boîte authentifiée, sinon Hostinger rejette l'envoi.
- Brevo a été écarté : son compte restreint les IP appelantes, incompatible avec
  les IP dynamiques de Vercel (401 systématiques).
- Le SPF du domaine autorise déjà Hostinger, aucun réglage DNS n'est requis.
