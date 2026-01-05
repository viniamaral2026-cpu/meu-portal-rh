
'use client';
import { ChevronDown, LayoutGrid } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
  DropdownMenuSub,
  DropdownMenuSubTrigger,
  DropdownMenuSubContent,
} from '@/components/ui/dropdown-menu';
import { useToast } from '@/hooks/use-toast';

const menuItems = [
  { id: 'administracao-pessoal', label: 'Administração de Pessoal' },
  { id: 'folha-mensal', label: 'Folha Mensal' },
  { id: 'ferias', label: 'Férias' },
  { id: 'rescisao', label: 'Rescisão' },
  { id: 'encargos', label: 'Encargos' },
  { id: 'anuais', label: 'Anuais' },
  { id: 'esocial', label: 'eSocial' },
  { id: 'orcamento', label: 'Orçamento (beta)' },
  { id: 'configuracoes', label: 'Configurações' },
  { id: 'assinatura-eletronica', label: 'Assinatura Eletrônica' },
  { id: 'customizacao', label: 'Customização' },
];

export function HeaderPrimary({ openTab }: { openTab: (id: string, title?: string) => void }) {
  const { toast } = useToast();

  const handleLimparCache = () => {
    toast({
      title: "Cache Limpo",
      description: "O cache do ambiente foi limpo com sucesso.",
    })
  }

  return (
    <header className="bg-card shadow-sm border-b h-9">
      <nav className="px-4 h-full flex items-center justify-between text-foreground">
        <div className="flex items-center gap-1">
          <a href="#" className="flex items-center gap-2 px-2 py-1 rounded-md hover:bg-accent">
            <LayoutGrid className="h-4 w-4" />
          </a>
          {menuItems.map((item) => (
            <button
              key={item.id}
              onClick={() => openTab(item.id, item.label)}
              className="px-2 py-1 rounded-md text-sm font-medium hover:bg-accent"
            >
              {item.label}
            </button>
          ))}
        </div>
        <div className="flex items-center gap-2 text-sm">
           <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <div className="flex items-center gap-1 cursor-pointer px-2 py-1 rounded-md hover:bg-accent">
                <span>Gestão</span>
                <ChevronDown className="h-3.5 w-3.5" />
              </div>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem onClick={() => openTab('gestao-pessoas', 'Gestão de Pessoas')}>Gestão de Pessoas</DropdownMenuItem>
              <DropdownMenuItem onClick={() => openTab('gestao-financeira', 'Gestão Financeira/Contábil')}>Gestão Financeira/Contábil</DropdownMenuItem>
              <DropdownMenuItem onClick={() => openTab('gestao-producao', 'Gestão de Produção')}>Gestão de Produção</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <div className="flex items-center gap-1 cursor-pointer px-2 py-1 rounded-md hover:bg-accent">
                <span>Ambiente</span>
                <ChevronDown className="h-3.5 w-3.5" />
              </div>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuLabel>Selecionar Ambiente</DropdownMenuLabel>
              <DropdownMenuItem>Produção</DropdownMenuItem>
              <DropdownMenuItem>Homologação</DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem onClick={() => openTab('status-servicos', 'Status dos Serviços')}>Status dos Serviços</DropdownMenuItem>
              <DropdownMenuItem onClick={handleLimparCache}>Limpar Cache do Ambiente</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </nav>
    </header>
  );
}
