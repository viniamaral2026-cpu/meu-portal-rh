import { ChevronDown, LayoutGrid } from 'lucide-react';

const menuItems = [
  'Administração de Pessoal',
  'Folha Mensal',
  'Férias',
  'Rescisão',
  'Encargos',
  'Anuais',
  'eSocial',
  'Orçamento (beta)',
  'Configurações',
  'Assinatura Eletrônica',
  'Customização',
];

export function HeaderPrimary() {
  return (
    <header className="bg-card shadow-sm border-b h-9">
      <nav className="px-4 h-full flex items-center justify-between text-foreground">
        <div className="flex items-center gap-1">
          <a href="#" className="flex items-center gap-2 px-2 py-1 rounded-md hover:bg-accent">
            <LayoutGrid className="h-4 w-4" />
          </a>
          {menuItems.map((item, index) => (
            <a
              key={index}
              href="#"
              className={`px-2 py-1 rounded-md text-sm font-medium ${
                item === 'Folha Mensal'
                  ? 'bg-muted'
                  : ''
              } hover:bg-accent`}
            >
              {item}
            </a>
          ))}
        </div>
        <div className="flex items-center gap-2 text-sm">
           <div className="flex items-center gap-1 cursor-pointer px-2 py-1 rounded-md hover:bg-accent">
              <span>Gestão</span>
              <ChevronDown className="h-3.5 w-3.5" />
            </div>
            <div className="flex items-center gap-1 cursor-pointer px-2 py-1 rounded-md hover:bg-accent">
              <span>Ambiente</span>
              <ChevronDown className="h-3.5 w-3.5" />
            </div>
        </div>
      </nav>
    </header>
  );
}
