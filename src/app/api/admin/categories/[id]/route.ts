import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

interface Props {
  params: Promise<{ id: string }>;
}

export async function PATCH(req: NextRequest, { params }: Props) {
  try {
    const { id } = await params;
    const body = await req.json();
    const { label, image, sortOrder } = body;

    const updated = await prisma.serviceCategory.update({
      where: { id },
      data: {
        ...(label !== undefined && { label }),
        ...(image !== undefined && { image: image || null }),
        ...(sortOrder !== undefined && { sortOrder: Number(sortOrder) }),
      },
    });

    return NextResponse.json(updated);
  } catch (err) {
    console.error("[api/admin/categories/[id]] PATCH error:", err);
    return NextResponse.json({ error: "DB error" }, { status: 500 });
  }
}
