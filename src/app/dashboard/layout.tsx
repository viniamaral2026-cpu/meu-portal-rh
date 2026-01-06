'use client';
import {
  Users,
  Clock,
  FileDown,
  Settings,
  ChevronDown,
  X,
  Globe,
  HelpCircle,
  ChevronUp,
  LayoutGrid,
  Calculator,
  CalendarDays,
  Share2,
  Cuboid,
  Sheet,
  FunctionSquare,
  FilePlus2,
  Database,
  LayoutDashboard,
  Mail,
  BarChart,
  ClipboardList,
  Rss,
  PlayCircle,
  Link as LinkIcon,
  BookUser,
  Wrench,
  ExternalLink,
  Sigma,
  Minimize,
  Maximize,
} from 'lucide-react';
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Separator } from '@/components/ui/separator';
import { DropdownMenu, DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';

// Import all page components
import DashboardPage from '../dashboard-principal/page';
import EmployeesPage from './employees/page';
import AdministracaoPessoalPage from './pages/administracao-pessoal/page';
import FolhaMensalPage from './pages/folha-mensal/page';
import FeriasPage from './pages/ferias/page';
import RescisaoPage from './pages/rescisao/page';
import EncargosPage from './pages/encargos/page';
import AnuaisPage from './pages/anuais/page';
import EsocialPage from './pages/esocial/page';
import OrcamentoPage from './pages/orcamento/page';
import ConfiguracoesPage from './pages/configuracoes/page';
import AssinaturaEletronicaPage from './pages/assinatura-eletronica/page';
import CustomizacaoPage from './pages/customizacao/page';
import CalculadoraPage from './pages/calculadora/page';
import AgendaPage from './pages/agenda/page';
import CalendariosPage from './pages/calendarios/page';
import CompartilhamentoPage from './pages/compartilhamento/page';
import CuboPage from './pages/cubo/page';
import PlanilhaPage from './pages/planilha/page';
import FormulaPage from './pages/formula/page';
import RelatoriosPage from './pages/relatorios/page';
import GeradorRelatoriosPage from './pages/gerador-relatorios/page';
import VisoesDadosPage from './pages/visoes-dados/page';
import GeradorSaidaPage from './pages/gerador-saida/page';
import GraficoPage from './pages/grafico/page';
import CategoriasPage from './pages/categorias/page';
import FontesGraficosPage from './pages/fontes-graficos/page';
import LeitorRssPage from './pages/leitor-rss/page';
import IniciarServicoRssPage from './pages/iniciar-servico-rss/page';
import ConfiguracaoRssPage from './pages/configuracao-rss/page';
import CanaisRssPage from './pages/canais-rss/page';
import MeusCanaisPage from './pages/meus-canais/page';
import RmConectorPage from './pages/rm-conector/page';
import FontesComunicacaoPage from './pages/fontes-comunicacao/page';
import ContasComunicacaoPage from './pages/contas-comunicacao/page';
import AplicativosExternosPage from './pages/aplicativos-externos/page';
import AplicativosSamlPage from './pages/aplicativos-saml/page';
import GestaoPage from './pages/gestao/page';
import AmbientePage from './pages/ambiente/page';
import GeradorSaidasPage from '../gerador-saidas/page';

const topBarIcons = [
  { icon: Clock },
  { icon: Users },
  { icon: FileDown },
  { icon: LayoutGrid },
];

const navMenuItems = [
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

const navRightIcons = [
    { icon: ChevronUp },
    { icon: Globe },
    { icon: FileText },
    { icon: ChevronDown },
    { icon: HelpCircle },
];

const toolbarItems = [
    {
        group: 'Utilitários',
        items: [
            { id: 'calculadora', icon: Calculator, label: 'Calculadora' },
            { id: 'agenda', icon: BookUser, label: 'Agenda' },
            { id: 'calendarios', icon: CalendarDays, label: 'Calendários' },
            { id: 'compartilhamento', icon: Share2, label: 'Compartilhamento' },
            { id: 'cubo', icon: Cuboid, label: 'Cubo' },
            { id: 'planilha', icon: Sheet, label: 'Planilha' },
            { id: 'formula', icon: FunctionSquare, label: 'Fórmula' },
        ]
    },
    {
        group: 'Ferramentas de Análise',
        items: [
            { id: 'employees', icon: Users, label: 'Colaboradores' },
            { id: 'relatorios', icon: FileText, label: 'Relatórios' },
            { id: 'gerador-relatorios', icon: FilePlus2, label: 'Gerador' },
            { id: 'visoes-dados', icon: Database, label: 'Visões de Dados' },
        ]
    },
    {
        group: 'Gráficos',
        items: [
            { id: 'gerador-saida', icon: Mail, label: 'Gerador Saída' },
            { id: 'grafico', icon: BarChart, label: 'Gráfico' },
            { id: 'categorias', icon: ClipboardList, label: 'Categorias' },
            { id: 'fontes-graficos', icon: Sigma, label: 'Fontes' },
        ]
    },
    {
        group: 'RSS',
        items: [
            { id: 'leitor-rss', icon: Rss, label: 'Leitor RSS' },
            { id: 'iniciar-servico-rss', icon: PlayCircle, label: 'Iniciar Serviço' },
            { id: 'configuracao-rss', icon: Settings, label: 'Configuração' },
            { id: 'canais-rss', icon: Rss, label: 'Canais RSS' },
        ]
    },
];

const paineisMenuItems = [
    {
        group: 'RM Conec',
        items: [
            { id: 'meus-canais', icon: Users, label: 'Meus Canais' },
            { id: 'rm-conector', icon: LinkIcon, label: 'RM Conector' },
        ]
    },
    {
        group: 'Comunicação',
        items: [
            { id: 'fontes-comunicacao', icon: Wrench, label: 'Fontes' },
            { id: 'contas-comunicacao', icon: Users, label: 'Contas' },
            { id: 'aplicativos-externos', icon: ExternalLink, label: 'Aplicativos Externos' },
            { id: 'aplicativos-saml', icon: ExternalLink, label: 'Aplicativos SAML' },
        ]
    },
];

const pageComponents: { [key: string]: React.LazyExoticComponent<React.ComponentType<any>> } = {
  'dashboard': React.lazy(() => import('../dashboard-principal/page')),
  'employees': React.lazy(() => import('./employees/page')),
  'administracao-pessoal': AdministracaoPessoalPage,
  'folha-mensal': FolhaMensalPage,
  'ferias': FeriasPage,
  'rescisao': RescisaoPage,
  'encargos': EncargosPage,
  'anuais': AnuaisPage,
  'esocial': EsocialPage,
  'orcamento': OrcamentoPage,
  'configuracoes': ConfiguracoesPage,
  'assinatura-eletronica': AssinaturaEletronicaPage,
  'customizacao': CustomizacaoPage,
  'calculadora': CalculadoraPage,
  'agenda': AgendaPage,
  'calendarios': CalendariosPage,
  'compartilhamento': CompartilhamentoPage,
  'cubo': CuboPage,
  'planilha': PlanilhaPage,
  'formula': FormulaPage,
  'relatorios': RelatoriosPage,
  'gerador-relatorios': GeradorRelatoriosPage,
  'visoes-dados': VisoesDadosPage,
  'gerador-saida': GeradorSaidaPage,
  'grafico': GraficoPage,
  'categorias': CategoriasPage,
  'fontes-graficos': FontesGraficosPage,
  'leitor-rss': LeitorRssPage,
  'iniciar-servico-rss': IniciarServicoRssPage,
  'configuracao-rss': ConfiguracaoRssPage,
  'canais-rss': CanaisRssPage,
  'meus-canais': MeusCanaisPage,
  'rm-conector': RmConectorPage,
  'fontes-comunicacao': FontesComunicacaoPage,
  'contas-comunicacao': ContasComunicacaoPage,
  'aplicativos-externos': AplicativosExternosPage,
  'aplicativos-saml': AplicativosSamlPage,
  'gestao': GestaoPage,
  'ambiente': AmbientePage,
  'report-generator': GeradorSaidasPage,
  'output-generator': GeradorSaidasPage,
  'chart': GraficoPage,
  'data-views': VisoesDadosPage,
};


export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [openTabs, setOpenTabs] = useState([
    { id: 'dashboard', title: 'Dashboard Principal' },
  ]);
  const [activeTab, setActiveTab] = useState('dashboard');

  const openTab = (tab: { id: string, title: string }) => {
    if(!pageComponents[tab.id]) {
      console.warn(`No page component for ${tab.id}`);
      return;
    }
    if (!openTabs.find(t => t.id === tab.id)) {
      setOpenTabs(prev => [...prev, tab]);
    }
    setActiveTab(tab.id);
  };

  const closeTab = (e: React.MouseEvent, tabId: string) => {
    e.stopPropagation();
    setOpenTabs(prev => {
      const newTabs = prev.filter(t => t.id !== tabId);
      if (activeTab === tabId && newTabs.length > 0) {
        setActiveTab(newTabs[newTabs.length - 1]?.id);
      } else if (newTabs.length === 0) {
        setActiveTab(''); 
      }
      return newTabs;
    });
  };

  return (
    <div className="flex flex-col h-screen bg-secondary text-sm text-white">
      <header className="flex flex-col bg-primary">
        {/* Top Bar */}
        <div className="flex h-8 items-center px-2 justify-between bg-[hsl(var(--primary-darker))]">
            <div className='flex items-center gap-2'>
                {topBarIcons.map((Item, index) => (
                    <Button variant='ghost' size='icon' key={index} className='h-6 w-6'>
                        <Item.icon size={16} />
                    </Button>
                ))}
            </div>
            <div className='text-xs opacity-80'>
                Minha Empresa Calçados | Unidade Matriz | Usuário: Admin
            </div>
            <div className='flex items-center gap-2'>
                <Button variant='ghost' className='h-auto px-3 py-1 text-xs'>Sistema</Button>
                <div className='flex items-center'>
                    <Button variant='ghost' size='icon' className='h-6 w-6'><Minimize size={16}/></Button>
                    <Button variant='ghost' size='icon' className='h-6 w-6'><Maximize size={16}/></Button>
                    <Button variant='ghost' size='icon' className='h-6 w-6 hover:bg-destructive'><X size={16}/></Button>
                </div>
            </div>
        </div>
        {/* Main Navigation Bar */}
        <div className='flex h-10 items-center px-2 justify-between'>
            <nav className='flex items-center gap-2'>
                <Button variant='ghost' size='icon' className='h-7 w-7'>
                    <LayoutGrid size={16} />
                </Button>
                {navMenuItems.map(item => (
                    <Button variant='ghost' key={item.id} onClick={() => openTab({ id: item.id, title: item.label })} className='h-auto py-1 px-2 text-xs font-normal'>
                        {item.label}
                    </Button>
                ))}
            </nav>
            <div className='flex items-center gap-2'>
                <Tabs defaultValue="gestao" className='text-xs'>
                    <TabsList className='bg-transparent p-0 gap-0.5'>
                        <TabsTrigger value="gestao" className='data-[state=active]:bg-card data-[state=active]:text-card-foreground rounded-sm h-6 px-4 text-xs'>Gestão</TabsTrigger>
                        <TabsTrigger value="ambiente" className='data-[state=active]:bg-card data-[state=active]:text-card-foreground rounded-sm h-6 px-4 text-xs'>Ambiente</TabsTrigger>
                    </TabsList>
                </Tabs>
                <div className='flex items-center'>
                     {navRightIcons.map((Item, index) => (
                        <Button variant='ghost' size='icon' key={index} className='h-6 w-6'>
                            <Item.icon size={16} />
                        </Button>
                    ))}
                </div>
            </div>
        </div>
         {/* Sub-header Toolbar */}
        <div className="bg-card text-card-foreground flex h-[70px] items-center justify-between px-2 border-b border-t border-border overflow-x-auto">
          <div className="flex h-full items-start">
            {toolbarItems.map((group, groupIndex) => (
              <div key={group.group} className="flex h-full items-center">
                <div className="flex flex-col items-center justify-center h-full px-1">
                    <div className='flex items-center justify-center gap-0.5 h-full'>
                    {group.items.map((item) => (
                    <Button 
                      variant="ghost" 
                      key={item.id}
                      onClick={() => openTab({ id: item.id, title: item.label })}
                      className="flex flex-col items-center justify-center h-full p-1 w-14 text-xs font-normal gap-1"
                    >
                        <item.icon size={20} />
                        <span className='w-full text-center truncate'>{item.label}</span>
                    </Button>
                    ))}
                    </div>
                    <p className="text-xs -mt-2 mb-1">{group.group}</p>
                </div>
                {groupIndex < toolbarItems.length - 1 && <Separator orientation="vertical" className="h-4/5 my-auto" />}
              </div>
            ))}
          </div>

          <div className="flex h-full items-start">
            <Separator orientation="vertical" className="h-4/5 my-auto" />
            <DropdownMenu>
                <DropdownMenuTrigger asChild>
                    <div className='flex flex-col items-center justify-center h-full px-1 cursor-pointer'>
                         <div className='flex items-center justify-center h-full p-1 w-14 text-xs font-normal gap-1 flex-col'>
                            <LayoutDashboard size={20} />
                            <span className='w-full text-center truncate'>Painéis</span>
                        </div>
                        <p className="text-xs -mt-8 mb-1 invisible">Painéis</p>
                    </div>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-56">
                    {paineisMenuItems.map((group, index) => (
                        <React.Fragment key={group.group}>
                            <DropdownMenuLabel>{group.group}</DropdownMenuLabel>
                            <DropdownMenuGroup>
                            {group.items.map(item => (
                                <DropdownMenuItem key={item.id} onClick={() => openTab({ id: item.id, title: item.label })}>
                                <item.icon className="mr-2 h-4 w-4" />
                                <span>{item.label}</span>
                                </DropdownMenuItem>
                            ))}
                            </DropdownMenuGroup>
                            {index < paineisMenuItems.length - 1 && <DropdownMenuSeparator />}
                        </React.Fragment>
                    ))}
                </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </header>

      <main className="flex-1 p-4 overflow-auto bg-background text-foreground">
       {openTabs.length > 0 ? (
          <React.Suspense fallback={<div className="p-4">Carregando...</div>}>
            <Tabs value={activeTab} onValueChange={setActiveTab} className="h-full flex flex-col">
              <TabsList className="bg-transparent p-0 justify-start h-auto rounded-none border-b-0">
                {openTabs.map((tab) => (
                  <TabsTrigger
                    key={tab.id}
                    value={tab.id}
                    className="relative pr-8 h-10 rounded-none rounded-t-md border-b-0 data-[state=inactive]:bg-muted data-[state=active]:bg-card data-[state=active]:shadow-none data-[state=inactive]:border data-[state=inactive]:border-b-0"
                  >
                    {tab.title}
                    <Button
                      variant="ghost"
                      size="icon"
                      className="absolute top-1/2 right-1 h-5 w-5 -translate-y-1/2 rounded-full"
                      onClick={(e) => closeTab(e, tab.id)}
                    >
                      <X className="h-3 w-3" />
                    </Button>
                  </TabsTrigger>
                ))}
              </TabsList>
              {openTabs.map((tab) => {
                const PageComponent = pageComponents[tab.id];
                return (
                  <TabsContent
                    key={tab.id}
                    value={tab.id}
                    className="bg-card border border-t-0 rounded-b-lg mt-0 flex-1 p-4"
                  >
                    {activeTab === tab.id && PageComponent ? <PageComponent /> : null}
                  </TabsContent>
                );
              })}
            </Tabs>
          </React.Suspense>
        ) : (
          <div className="flex items-center justify-center h-full text-muted-foreground">
            Selecione um item no menu para começar.
          </div>
        )}
      </main>
    </div>
  );
}
