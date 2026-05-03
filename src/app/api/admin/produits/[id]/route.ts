import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function PUT(req: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const data = await req.json();

  const product = await prisma.product.update({
    where: { id },
    data: {
      slug: data.slug,
      name: data.name,
      shortDescription: data.shortDescription,
      description: data.description,
      price: Number(data.price),
      comparePrice: data.comparePrice ? Number(data.comparePrice) : null,
      image: data.image,
      category: data.category,
      categoryLabel: data.categoryLabel,
      stock: Number(data.stock ?? 0),
      badge: data.badge || null,
      ingredients: data.ingredients || null,
      howToUse: data.howToUse || null,
      active: data.active ?? true,
    },
  });

  return NextResponse.json(product);
}

export async function DELETE(_req: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  await prisma.product.delete({ where: { id } });
  return NextResponse.json({ ok: true });
}
