import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { serviceTitle, serviceSlug, date, time, firstName, lastName, phone, email, message } = body;

    if (!serviceTitle || !date || !time || !firstName || !lastName || !phone) {
      return NextResponse.json({ error: "Champs requis manquants" }, { status: 400 });
    }

    const appointment = await prisma.appointment.create({
      data: { serviceTitle, serviceSlug: serviceSlug ?? null, date, time, firstName, lastName, phone, email: email || null, message: message || null },
    });

    return NextResponse.json(appointment, { status: 201 });
  } catch (err) {
    console.error("[api/rdv] error:", err);
    return NextResponse.json({ error: "Erreur serveur" }, { status: 500 });
  }
}

export async function GET() {
  try {
    const appointments = await prisma.appointment.findMany({
      orderBy: [{ date: "desc" }, { time: "asc" }],
    });
    return NextResponse.json(appointments);
  } catch {
    return NextResponse.json({ error: "Erreur serveur" }, { status: 500 });
  }
}
