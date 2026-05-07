import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

interface Params {
  params: Promise<{ id: string }>;
}

export async function GET(_req: NextRequest, { params }: Params) {
  const { id } = await params;
  try {
    const service = await prisma.service.findUnique({ where: { id } });
    if (!service) return NextResponse.json({ error: "Not found" }, { status: 404 });
    return NextResponse.json(service);
  } catch (err) {
    console.error("[api/admin/services/[id]] GET error:", err);
    return NextResponse.json({ error: "DB error" }, { status: 500 });
  }
}

export async function PUT(req: NextRequest, { params }: Params) {
  const { id } = await params;
  try {
    const body = await req.json();
    const { slug, title, metaDescription, category, active, sortOrder, hero, badges, intro, benefits, pricing, faq, cta } = body;

    const service = await prisma.service.update({
      where: { id },
      data: {
        slug,
        title,
        metaDescription,
        category,
        active,
        sortOrder,
        hero,
        badges,
        intro,
        benefits,
        pricing,
        faq,
        cta,
      },
    });

    return NextResponse.json(service);
  } catch (err: unknown) {
    console.error("[api/admin/services/[id]] PUT error:", err);
    if (typeof err === "object" && err !== null && "code" in err && (err as { code: string }).code === "P2002") {
      return NextResponse.json({ error: "Ce slug existe déjà" }, { status: 409 });
    }
    return NextResponse.json({ error: "DB error" }, { status: 500 });
  }
}

export async function DELETE(_req: NextRequest, { params }: Params) {
  const { id } = await params;
  try {
    await prisma.service.delete({ where: { id } });
    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("[api/admin/services/[id]] DELETE error:", err);
    return NextResponse.json({ error: "DB error" }, { status: 500 });
  }
}
