import Link from 'next/link';

const tabs = [
  { id: 'dashboard-principal', name: 'Dashboard Principal' },
  { id: 'bi', name: 'BI' },
  { id: 'cargos-salarios', name: 'Cargos e Salários' },
  { id: 'controle-jornada', name: 'Controle de Jornada' },
  { id: 'curriculos', name: 'Gestão de Currículos' },
  { id: 'monitoramento-usuarios', name: 'Monitoramento' },
  { id: 'filiais', name: 'Filiais' },
  { id: 'gerador-saidas', name: 'Gerador Saída' },
  { id: 'portal-colaborador/login', name: 'Portal do Colaborador' },
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
              whitespace-nowrap py-3 px-4 border-b-2 font-medium text-sm transition-colors
              ${
                activeTab === tab.id
                  ? 'bg-card text-foreground border-border'
                  : 'bg-muted/50 text-muted-foreground hover:bg-muted/80 border-transparent hover:text-foreground'
              }
            `}
          >
            {tab.name}
          </Link>
        ))}
      </nav>
    </div>
  );
}
