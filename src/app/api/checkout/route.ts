import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { createTransaction } from "@/lib/fedapay";

interface CartItemInput {
  productId?: string;
  name?: string;
  price?: number;
  quantity?: number;
}

export async function POST(req: NextRequest) {
  try {
    const { customer, items } = await req.json();

    if (!customer?.firstname || !customer?.lastname || !customer?.email || !customer?.phone) {
      return NextResponse.json({ error: "Informations client incomplètes" }, { status: 400 });
    }

    if (!Array.isArray(items) || items.length === 0) {
      return NextResponse.json({ error: "Panier invalide" }, { status: 400 });
    }

    // Le montant envoyé par le navigateur est ignoré : il est recalculé à
    // partir des prix en base, sinon n'importe qui pourrait payer 1 FCFA.
    const productIds = (items as CartItemInput[])
      .map((i) => i.productId)
      .filter((id): id is string => typeof id === "string");

    if (productIds.length !== items.length) {
      return NextResponse.json({ error: "Panier invalide" }, { status: 400 });
    }

    const products = await prisma.product.findMany({
      where: { id: { in: productIds }, active: true },
      select: { id: true, name: true, price: true },
    });

    const priceById = new Map(products.map((p) => [p.id, p]));

    let totalAmount = 0;
    const verifiedItems = [];

    for (const item of items as CartItemInput[]) {
      const product = priceById.get(item.productId!);
      if (!product) {
        return NextResponse.json(
          { error: "Un produit de votre panier n'est plus disponible" },
          { status: 409 },
        );
      }

      const quantity = Number(item.quantity);
      if (!Number.isInteger(quantity) || quantity < 1 || quantity > 100) {
        return NextResponse.json({ error: "Quantité invalide" }, { status: 400 });
      }

      totalAmount += product.price * quantity;
      verifiedItems.push({
        productId: product.id,
        name: product.name,
        price: product.price,
        quantity,
      });
    }

    if (totalAmount <= 0) {
      return NextResponse.json({ error: "Panier invalide" }, { status: 400 });
    }

    const { id: transactionId, paymentUrl } = await createTransaction({
      description: `Commande Academy Beauty Gate — ${verifiedItems.length} article(s)`,
      amount: totalAmount,
      callbackUrl: `${process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000"}/boutique/confirmation`,
      firstName: customer.firstname,
      lastName: customer.lastname,
      phone: customer.phone,
      email: customer.email,
    });

    await prisma.order.create({
      data: {
        transactionId,
        status: "pending",
        customerName: `${customer.firstname} ${customer.lastname}`,
        customerEmail: customer.email,
        customerPhone: customer.phone,
        items: JSON.stringify(verifiedItems),
        totalAmount,
      },
    });

    return NextResponse.json({ paymentUrl });
  } catch (err) {
    console.error("[checkout] error:", err);
    return NextResponse.json(
      { error: "Erreur lors de la création de la transaction" },
      { status: 500 },
    );
  }
}
