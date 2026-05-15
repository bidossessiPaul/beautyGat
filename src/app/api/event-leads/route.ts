import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, phone, email, service, price } = body as {
      name: string;
      phone: string;
      email?: string;
      service: string;
      price: number;
    };

    if (!name?.trim() || !phone?.trim() || !service || !price) {
      return NextResponse.json({ error: "Données manquantes" }, { status: 400 });
    }

    const lead = await prisma.eventLead.create({
      data: {
        name: name.trim(),
        phone: phone.trim(),
        email: email?.trim() || null,
        service,
        price,
        stepReached: 2,
      },
    });

    return NextResponse.json({ id: lead.id });
  } catch (err) {
    console.error("[event-leads POST]", err);
    return NextResponse.json({ error: "Erreur serveur" }, { status: 500 });
  }
}
