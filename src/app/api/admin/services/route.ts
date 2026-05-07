import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET() {
  try {
    const services = await prisma.service.findMany({
      orderBy: [{ sortOrder: "asc" }, { createdAt: "desc" }],
    });
    return NextResponse.json(services);
  } catch (err) {
    console.error("[api/admin/services] GET error:", err);
    return NextResponse.json({ error: "DB error" }, { status: 500 });
  }
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { slug, title, metaDescription, category, active, sortOrder, hero, badges, intro, benefits, pricing, faq, cta, gallery } = body;

    if (!slug || !title) {
      return NextResponse.json({ error: "slug et title sont requis" }, { status: 400 });
    }

    const service = await prisma.service.create({
      data: {
        slug,
        title,
        metaDescription: metaDescription ?? "",
        category: category ?? "visage",
        active: active ?? true,
        sortOrder: sortOrder ?? 0,
        hero: hero ?? {},
        badges: badges ?? [],
        intro: intro ?? {},
        benefits: benefits ?? [],
        pricing: pricing ?? {},
        faq: faq ?? [],
        cta: cta ?? {},
        gallery: gallery ?? [],
      },
    });

    return NextResponse.json(service, { status: 201 });
  } catch (err: unknown) {
    console.error("[api/admin/services] POST error:", err);
    if (typeof err === "object" && err !== null && "code" in err && (err as { code: string }).code === "P2002") {
      return NextResponse.json({ error: "Ce slug existe déjà" }, { status: 409 });
    }
    return NextResponse.json({ error: "DB error" }, { status: 500 });
  }
}
