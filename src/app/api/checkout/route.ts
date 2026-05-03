import { NextRequest, NextResponse } from "next/server";
import FedaPay from "fedapay";
import { prisma } from "@/lib/prisma";

export async function POST(req: NextRequest) {
  try {
    const { customer, items, totalAmount } = await req.json();

    if (!customer?.firstname || !customer?.lastname || !customer?.email || !customer?.phone) {
      return NextResponse.json({ error: "Informations client incomplètes" }, { status: 400 });
    }

    if (!items?.length || totalAmount <= 0) {
      return NextResponse.json({ error: "Panier invalide" }, { status: 400 });
    }

    const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

    // Initialiser FedaPay
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (FedaPay as any).setApiKey(process.env.FEDAPAY_SECRET_KEY!);
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (FedaPay as any).setEnvironment(process.env.FEDAPAY_ENV ?? "sandbox");

    // Créer la transaction FedaPay
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const transaction = await (FedaPay as any).Transaction.create({
      description: `Commande Academy Beauty Gate — ${items.length} article(s)`,
      amount: totalAmount,
      currency: { iso: "XOF" },
      callback_url: `${siteUrl}/boutique/confirmation`,
      customer: {
        firstname: customer.firstname,
        lastname: customer.lastname,
        email: customer.email,
        phone_number: {
          number: customer.phone,
          country: "BJ",
        },
      },
    });

    const token = await transaction.generateToken();

    // Sauvegarder la commande en base
    await prisma.order.create({
      data: {
        transactionId: String(transaction.id),
        status: "pending",
        customerName: `${customer.firstname} ${customer.lastname}`,
        customerEmail: customer.email,
        customerPhone: customer.phone,
        items: JSON.stringify(items),
        totalAmount,
      },
    });

    return NextResponse.json({ paymentUrl: token.url });
  } catch (err) {
    console.error("[checkout] error:", err);
    return NextResponse.json(
      { error: "Erreur lors de la création de la transaction" },
      { status: 500 }
    );
  }
}
