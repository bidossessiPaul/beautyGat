import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function PATCH(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const body = await req.json() as Record<string, unknown>;

    const lead = await prisma.eventLead.update({
      where: { id },
      data: {
        ...(typeof body.date === "string" && { date: body.date }),
        ...(typeof body.paid === "boolean" && { paid: body.paid }),
        ...(typeof body.paymentId === "string" && { paymentId: body.paymentId }),
        ...(typeof body.stepReached === "number" && { stepReached: body.stepReached }),
      },
    });

    return NextResponse.json({ id: lead.id });
  } catch (err) {
    console.error("[event-leads PATCH]", err);
    return NextResponse.json({ error: "Erreur serveur" }, { status: 500 });
  }
}
