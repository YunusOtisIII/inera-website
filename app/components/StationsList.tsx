// import type { stations as Station } from '@prisma/client';
type Station = any;
import { prisma } from '@/app/lib/prisma';

async function getStations(): Promise<Station[]> {
  try {
    return await prisma.stations.findMany({
      orderBy: {
        name: 'asc'
      }
    });
  } catch (error) {
    console.error('Database Error:', error);
    return [];
  }
}

export default async function StationsList(): Promise<JSX.Element> {
  const stations: Station[] = await getStations();

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
      {stations.map((station) => (
        <div
          key={station.id}
          className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow"
        >
          <h3 className="text-xl font-semibold text-gray-800 mb-2">
            {station.name}
          </h3>
          <p className="text-gray-600 mb-2">
            <span className="font-medium">Location:</span> {station.location}
          </p>
          <p className="text-gray-600 mb-4">
            <span className="font-medium">Spécialité:</span> {station.specialty}
          </p>
          <p className="text-gray-700">{station.description}</p>
        </div>
      ))}
    </div>
  );
}
