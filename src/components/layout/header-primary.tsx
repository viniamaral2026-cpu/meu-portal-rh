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
    <header className="bg-header-primary-background shadow-sm border-b border-black/10">
      <nav className="px-4 h-10 flex items-center justify-between text-header-foreground">
        <div className="flex items-center gap-2">
          <a href="#" className="flex items-center gap-2 px-2 py-1.5 rounded-md hover:bg-black/10">
            <LayoutGrid className="h-5 w-5" />
          </a>
          {menuItems.map((item, index) => (
            <a
              key={index}
              href="#"
              className={`px-3 py-1.5 rounded-md text-sm font-medium ${
                item === 'Folha Mensal'
                  ? 'bg-black/20'
                  : ''
              } hover:bg-black/10`}
            >
              {item}
            </a>
          ))}
        </div>
        <div className="flex items-center gap-4 text-sm">
           <div className="flex items-center gap-2 cursor-pointer px-3 py-1.5 rounded-md hover:bg-black/10">
              <span>Gestão</span>
              <ChevronDown className="h-4 w-4" />
            </div>
            <div className="flex items-center gap-2 cursor-pointer px-3 py-1.5 rounded-md hover:bg-black/10">
              <span>Ambiente</span>
              <ChevronDown className="h-4 w-4" />
            </div>
        </div>
      </nav>
    </header>
  );
}
