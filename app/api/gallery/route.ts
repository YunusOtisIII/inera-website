import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

export const runtime = 'nodejs';

export async function GET() {
  try {
    const galleryDir = path.join(process.cwd(), 'public', 'images', 'gallery');

    const files = fs.existsSync(galleryDir) ? fs.readdirSync(galleryDir) : [];
    const allowed = new Set(['.jpg', '.jpeg', '.png', '.webp', '.avif', '.gif', '.svg']);

    const images = files
      .filter((f) => allowed.has(path.extname(f).toLowerCase()))
      .map((f) => ({
        url: `/images/gallery/${encodeURIComponent(f)}`,
        title: path.parse(f).name,
        description: '',
      }));

    return NextResponse.json({ images });
  } catch (error: any) {
    return NextResponse.json(
      { images: [], error: String(error?.message || error) },
      { status: 500 }
    );
  }
}
