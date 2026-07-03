import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { CATEGORY_LABELS, CATEGORY_FALLBACK_IMAGES } from "@/app/nos-soins/config";

// Retourne toutes les catégories, en créant automatiquement celles qui manquent
export async function GET() {
  try {
    // Récupère les clés de catégories actives dans les services
    const serviceCategories = await prisma.service.findMany({
      where: { active: true },
      select: { category: true },
      distinct: ["category"],
    });
    const activeKeys = serviceCategories.map((s) => s.category);

    // Auto-crée les catégories manquantes avec les valeurs par défaut
    for (const key of activeKeys) {
      await prisma.serviceCategory.upsert({
        where: { key },
        create: {
          key,
          label: CATEGORY_LABELS[key] ?? key,
          image: CATEGORY_FALLBACK_IMAGES[key] ?? null,
          sortOrder: 0,
        },
        update: {},
      });
    }

    const categories = await prisma.serviceCategory.findMany({
      orderBy: [{ sortOrder: "asc" }, { key: "asc" }],
    });

    return NextResponse.json(categories);
  } catch (err) {
    console.error("[api/admin/categories] GET error:", err);
    return NextResponse.json({ error: "DB error" }, { status: 500 });
  }
}

// Créer une nouvelle catégorie
export async function POST(req: NextRequest) {
  try {
    const { key, label, image, sortOrder } = await req.json();
    if (!key?.trim() || !label?.trim()) {
      return NextResponse.json({ error: "key et label requis" }, { status: 400 });
    }
    const cat = await prisma.serviceCategory.create({
      data: {
        key: key.trim().toLowerCase().replace(/\s+/g, "-"),
        label: label.trim(),
        image: image || null,
        sortOrder: Number(sortOrder) || 0,
      },
    });
    return NextResponse.json(cat, { status: 201 });
  } catch (err: unknown) {
    const msg = err instanceof Error ? err.message : "";
    if (msg.includes("Unique constraint")) {
      return NextResponse.json({ error: "Cette clé existe déjà" }, { status: 409 });
    }
    return NextResponse.json({ error: "DB error" }, { status: 500 });
  }
}
