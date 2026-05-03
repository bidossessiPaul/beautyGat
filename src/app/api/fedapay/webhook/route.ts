import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

// FedaPay envoie un POST sur cette URL quand le statut d'une transaction change.
// Configurer cette URL dans le dashboard FedaPay : /api/fedapay/webhook
export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    const event = body?.name;
    const transactionData = body?.data?.object;

    if (!transactionData?.id) {
      return NextResponse.json({ received: true });
    }

    const transactionId = String(transactionData.id);

    let status = "pending";
    if (event === "transaction.approved") status = "paid";
    else if (event === "transaction.canceled" || event === "transaction.declined") status = "failed";

    await prisma.order.updateMany({
      where: { transactionId },
      data: { status },
    });

    return NextResponse.json({ received: true });
  } catch (err) {
    console.error("[fedapay webhook] error:", err);
    return NextResponse.json({ error: "Webhook error" }, { status: 500 });
  }
}
