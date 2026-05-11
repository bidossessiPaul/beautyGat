import { NextResponse } from "next/server";
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
