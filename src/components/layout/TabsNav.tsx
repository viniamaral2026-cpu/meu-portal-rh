import Link from 'next/link';

const tabs = [
  { id: 'dashboard-principal', name: 'Dashboard Principal' },
  { id: 'consulta-colaboradores', name: 'Consulta de Colaboradores' },
  { id: 'gerador-saidas', name: 'Gerador Saída' },
];

export function TabsNav({ activeTab }: { activeTab: string }) {
  return (
    <div className="bg-card border-b">
      <nav className="-mb-px flex" aria-label="Tabs">
        {tabs.map((tab) => (
          <Link
            key={tab.id}
            href={`/?tab=${tab.id}`}
            className={`
              ${
                activeTab === tab.id
                  ? 'border-blue-500 text-blue-600 bg-blue-50/50'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }
              whitespace-nowrap py-3 px-4 border-b-2 font-medium text-sm transition-colors
            `}
          >
            {tab.name}
          </Link>
        ))}
      </nav>
    </div>
  );
}
