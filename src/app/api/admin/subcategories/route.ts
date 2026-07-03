import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

// GET — structure complète : { [category]: { [catGroup]: { key, subcats: [{key, count}] } } }
export async function GET() {
  try {
    const rows = await prisma.service.groupBy({
      by: ["category", "catGroup", "subcategory"],
      where: { active: true },
      _count: { id: true },
      orderBy: [{ category: "asc" }],
    });

    // Structure : { category: { catGroup: [ { key: subcategory, count } ] } }
    const result: Record<string, Record<string, { key: string; count: number }[]>> = {};

    for (const row of rows) {
      const cat = row.category;
      const grp = row.catGroup ?? "__none__";
      const sub = row.subcategory ?? "__none__";

      if (!result[cat]) result[cat] = {};
      if (!result[cat][grp]) result[cat][grp] = [];
      result[cat][grp].push({ key: sub, count: row._count.id });
    }

    return NextResponse.json(result);
  } catch (err) {
    console.error("[api/admin/subcategories] GET error:", err);
    return NextResponse.json({ error: "DB error" }, { status: 500 });
  }
}

// PATCH — renommer une sous-catégorie
export async function PATCH(req: NextRequest) {
  try {
    const { category, catGroup, oldKey, newKey } = await req.json();
    if (!category || !oldKey || !newKey?.trim()) {
      return NextResponse.json({ error: "category, oldKey et newKey requis" }, { status: 400 });
    }
    const slug = newKey.trim().toLowerCase().replace(/\s+/g, "-");
    const where = catGroup
      ? { category, catGroup, subcategory: oldKey }
      : { category, subcategory: oldKey };
    const result = await prisma.service.updateMany({ where, data: { subcategory: slug } });
    return NextResponse.json({ updated: result.count });
  } catch (err) {
    console.error("[api/admin/subcategories] PATCH error:", err);
    return NextResponse.json({ error: "DB error" }, { status: 500 });
  }
}

// DELETE — supprimer une sous-catégorie (remet à null)
export async function DELETE(req: NextRequest) {
  try {
    const { category, catGroup, key } = await req.json();
    if (!category || !key) {
      return NextResponse.json({ error: "category et key requis" }, { status: 400 });
    }
    const where = catGroup
      ? { category, catGroup, subcategory: key }
      : { category, subcategory: key };
    const result = await prisma.service.updateMany({ where, data: { subcategory: null } });
    return NextResponse.json({ updated: result.count });
  } catch (err) {
    console.error("[api/admin/subcategories] DELETE error:", err);
    return NextResponse.json({ error: "DB error" }, { status: 500 });
  }
}
