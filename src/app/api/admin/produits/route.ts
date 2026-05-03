import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET() {
  const products = await prisma.product.findMany({ orderBy: { createdAt: "desc" } });
  return NextResponse.json(products);
}

export async function POST(req: NextRequest) {
  const data = await req.json();

  const product = await prisma.product.create({
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

  return NextResponse.json(product, { status: 201 });
}
