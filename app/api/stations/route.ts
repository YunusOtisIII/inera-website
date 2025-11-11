import { prisma } from '@/lib/prisma';
import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const stations = await prisma.station.findMany({
      orderBy: {
        name: 'asc'
      }
    });
    
    return NextResponse.json(stations);
  } catch (error) {
    console.error('Error fetching stations:', error);
    return NextResponse.json(
      { error: 'Erreur lors de la récupération des stations' },
      { status: 500 }
    );
  }
}
