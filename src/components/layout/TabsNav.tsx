import Link from 'next/link';

const tabs = [
  { id: 'dashboard-principal', name: 'Dashboard Principal' },
  { id: 'consulta-colaboradores', name: 'Consulta de Colaboradores' },
  { id: 'gerador-saidas', name: 'Gerador Saída' },
];

export function TabsNav({ activeTab }: { activeTab: string }) {
  return (
    <div className="bg-muted/50 border-b">
      <nav className="-mb-px flex" aria-label="Tabs">
        {tabs.map((tab) => (
          <Link
            key={tab.id}
            href={`/?tab=${tab.id}`}
            className={`
              ${
                activeTab === tab.id
                  ? 'bg-card text-foreground border-border'
                  : 'bg-muted/50 text-muted-foreground hover:bg-muted border-transparent hover:text-foreground'
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
