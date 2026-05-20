import { NextRequest, NextResponse } from "next/server";
import { v2 as cloudinary } from "cloudinary";

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

export async function POST(req: NextRequest) {
  try {
    const formData = await req.formData();
    const file = formData.get("file") as File | null;

    if (!file) {
      return NextResponse.json({ error: "Aucun fichier reçu" }, { status: 400 });
    }

    const allowed = ["image/jpeg", "image/jpg", "image/png", "image/webp", "image/gif"];
    if (!allowed.includes(file.type)) {
      return NextResponse.json({ error: "Format non supporté (jpg, png, webp uniquement)" }, { status: 400 });
    }

    const folder = new URL(req.url).searchParams.get("folder") ?? "categories";

    const buffer = Buffer.from(await file.arrayBuffer());
    const base64 = `data:${file.type};base64,${buffer.toString("base64")}`;

    const result = await cloudinary.uploader.upload(base64, {
      folder: `beautygate/${folder}`,
      resource_type: "image",
    });

    return NextResponse.json({ url: result.secure_url });
  } catch (err) {
    console.error("[api/admin/upload] error:", err);
    return NextResponse.json({ error: "Erreur upload" }, { status: 500 });
  }
}
