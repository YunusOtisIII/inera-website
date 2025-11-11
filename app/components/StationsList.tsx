// Composant simplifié sans Prisma
type Station = {
  id: number;
  name: string;
  location: string;
  specialty?: string;
  description?: string;
};

const stations: Station[] = [
  { id: 1, name: 'Yangambi', location: 'Tshopo', specialty: 'Forêt tropicale', description: 'Centre de recherche en biodiversité' },
  { id: 2, name: 'Mulungu', location: 'Sud-Kivu', specialty: 'Agriculture de montagne', description: 'Recherche sur cultures d\'altitude' },
  { id: 3, name: 'Kipopo', location: 'Haut-Katanga', specialty: 'Élevage', description: 'Centre d\'élevage et nutrition animale' },
  { id: 4, name: 'Mvuazi', location: 'Kongo Central', specialty: 'Cultures vivrières', description: 'Recherche sur manioc et légumes' },
  { id: 5, name: 'Luki', location: 'Kongo Central', specialty: 'Agroforesterie', description: 'Réserve de biosphère UNESCO' },
];

export default function StationsList() {
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
          {station.specialty && (
            <p className="text-gray-600 mb-4">
              <span className="font-medium">Spécialité:</span> {station.specialty}
            </p>
          )}
          {station.description && <p className="text-gray-700">{station.description}</p>}
        </div>
      ))}
    </div>
  );
}
