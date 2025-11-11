import { NextResponse } from 'next/server';

// Données statiques temporaires
const stations = [
  { id: 1, name: 'Yangambi', location: 'Tshopo' },
  { id: 2, name: 'Mulungu', location: 'Sud-Kivu' },
  { id: 3, name: 'Kipopo', location: 'Haut-Katanga' },
  { id: 4, name: 'Mvuazi', location: 'Kongo Central' },
  { id: 5, name: 'Luki', location: 'Kongo Central' },
];

export async function GET() {
  return NextResponse.json(stations);
}
