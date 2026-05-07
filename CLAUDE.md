# Academy Beauty Gate

## Stack
- Next.js 16 App Router, React 19, TypeScript strict
- Tailwind CSS v4, shadcn/ui
- Prisma 5 + MySQL (Hostinger)
- FedaPay (paiement)
- Zustand (panier)

## Commandes
- `npm run dev` — dev server
- `npm run build` — build prod
- `npm run seed` — peupler les produits MySQL

## Base de données
- MySQL sur Hostinger : `u864814652_gate` @ `srv2115.hstgr.io`
- Tables : `Product`, `Order`
- Schéma : `prisma/schema.prisma`

## Admin
- URL : `/admin` — mot de passe via `ADMIN_SECRET`
- Produits CRUD, commandes, dashboard stats
