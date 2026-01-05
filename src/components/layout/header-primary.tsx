import { ChevronDown } from 'lucide-react';

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
    <header className="bg-header-primary-background shadow-sm border-b">
      <nav className="px-4 py-1 flex items-center justify-between text-sm">
        <div className="flex items-center gap-1">
          <div className="p-2 hover:bg-gray-200 rounded-md">
            <svg
              className="h-5 w-5 text-gray-700"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </div>
          {menuItems.map((item, index) => (
            <a
              key={index}
              href="#"
              className={`px-3 py-2 rounded-md font-medium ${
                item === 'Folha Mensal'
                  ? 'text-primary-600'
                  : 'text-gray-600'
              } hover:text-primary-600 hover:bg-blue-100/50`}
            >
              {item}
            </a>
          ))}
        </div>
      </nav>
    </header>
  );
}
