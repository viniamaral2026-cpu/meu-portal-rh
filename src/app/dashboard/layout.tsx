'use client';
import {
  Home,
  Users,
  Clock,
  Puzzle,
  LogOut,
  Boxes,
  Factory,
  CheckCircle,
  FileText,
  Bell,
  PanelLeft,
  Search,
  Printer,
  FileDown,
  UserPlus,
  Settings,
  ChevronDown,
  Minimize,
  Maximize,
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
} from 'lucide-react';
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Separator } from '@/components/ui/separator';
import { DropdownMenu, DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';

// Lazy load all page components
const AdministracaoPessoalPage = React.lazy(() => import('./pages/administracao-pessoal/page'));
const FolhaMensalPage = React.lazy(() => import('./pages/folha-mensal/page'));
const FeriasPage = React.lazy(() => import('./pages/ferias/page'));
const RescisaoPage = React.lazy(() => import('./pages/rescisao/page'));
const EncargosPage = React.lazy(() => import('./pages/encargos/page'));
const AnuaisPage = React.lazy(() => import('./pages/anuais/page'));
const EsocialPage = React.lazy(() => import('./pages/esocial/page'));
const OrcamentoPage = React.lazy(() => import('./pages/orcamento/page'));
const ConfiguracoesPage = React.lazy(() => import('./pages/configuracoes/page'));
const AssinaturaEletronicaPage = React.lazy(() => import('./pages/assinatura-eletronica/page'));
const CustomizacaoPage = React.lazy(() => import('./pages/customizacao/page'));
const GestaoPage = React.lazy(() => import('./pages/gestao/page'));
const AmbientePage = React.lazy(() => import('./pages/ambiente/page'));
const CalculadoraPage = React.lazy(() => import('./pages/calculadora/page'));
const AgendaPage = React.lazy(() => import('./pages/agenda/page'));
const CompartilhamentoPage = React.lazy(() => import('./pages/compartilhamento/page'));
const CuboPage = React.lazy(() => import('./pages/cubo/page'));
const PlanilhaPage = React.lazy(() => import('./pages/planilha/page'));
const FormulaPage = React.lazy(() => import('./pages/formula/page'));
const RelatoriosPage = React.lazy(() => import('./pages/relatorios/page'));
const VisoesDadosPage = React.lazy(() => import('./pages/visoes-dados/page'));
const CategoriasPage = React.lazy(() => import('./pages/categorias/page'));
const FontesGraficosPage = React.lazy(() => import('./pages/fontes-graficos/page'));
const LeitorRssPage = React.lazy(() => import('./pages/leitor-rss/page'));
const IniciarServicoRssPage = React.lazy(() => import('./pages/iniciar-servico-rss/page'));
const ConfiguracaoRssPage = React.lazy(() => import('./pages/configuracao-rss/page'));
const CanaisRssPage = React.lazy(() => import('./pages/canais-rss/page'));
const WordPage = React.lazy(() => import('./pages/word/page'));
const AssistenteAiPage = React.lazy(() => import('./pages/assistente-ai/page'));
const MeusCanaisPage = React.lazy(() => import('./pages/meus-canais/page'));
const RmConectorPage = React.lazy(() => import('./pages/rm-conector/page'));
const ContasComunicacaoPage = React.lazy(() => import('./pages/contas-comunicacao/page'));
const AplicativosExternosPage = React.lazy(() => import('./pages/aplicativos-externos/page'));
const AplicativosSamlPage = React.lazy(() => import('./pages/aplicativos-saml/page'));
const DashboardPage = React.lazy(() => import('./dashboard/page'));
const GeradorSaidasPage = React.lazy(() => import('../gerador-saidas/page'));


const topBarIcons = [
  { icon: <Clock size={16} /> },
  { icon: <Users size={16} /> },
  { icon: <FileDown size={16} /> },
  { icon: <LayoutGrid size={16} /> },
];

const navMenuItems = [
    { label: 'Administração de Pessoal' },
    { label: 'Folha Mensal' },
    { label: 'Férias' },
    { label: 'Rescisão' },
    { label: 'Encargos' },
    { label: 'Anuais' },
    { label: 'eSocial' },
    { label: 'Orçamento (beta)' },
    { label: 'Configurações' },
    { label: 'Assinatura Eletrônica' },
    { label: 'Customização' },
];

const navRightIcons = [
    { icon: <ChevronUp size={16} /> },
    { icon: <Globe size={16} /> },
    { icon: <FileText size={16} /> },
    { icon: <ChevronDown size={16} /> },
    { icon: <HelpCircle size={16} /> },
];

const toolbarItems = [
    {
        group: 'Utilitários',
        items: [
            { id: 'calculator', icon: Calculator, label: 'Calculadora' },
            { id: 'agenda', icon: BookUser, label: 'Agenda' },
            { id: 'calendars', icon: CalendarDays, label: 'Calendários' },
            { id: 'sharing', icon: Share2, label: 'Compartilhamento' },
            { id: 'cube', icon: Cuboid, label: 'Cubo' },
            { id: 'spreadsheet', icon: Sheet, label: 'Planilha' },
            { id: 'formula', icon: FunctionSquare, label: 'Fórmula' },
        ]
    },
    {
        group: 'Ferramentas de Análise',
        items: [
            { id: 'employees', icon: Users, label: 'Colaboradores' },
            { id: 'reports', icon: FileText, label: 'Relatórios' },
            { id: 'report-generator', icon: FilePlus2, label: 'Gerador' },
            { id: 'data-views', icon: Database, label: 'Visões de Dados' },
        ]
    },
    {
        group: 'Gráficos',
        items: [
            { id: 'output-generator', icon: Mail, label: 'Gerador Saída' },
            { id: 'chart', icon: BarChart, label: 'Gráfico' },
            { id: 'categories', icon: ClipboardList, label: 'Categorias' },
            { id: 'chart-sources', icon: Sigma, label: 'Fontes' },
        ]
    },
    {
        group: 'RSS',
        items: [
            { id: 'rss-reader', icon: Rss, label: 'Leitor RSS' },
            { id: 'start-service', icon: PlayCircle, label: 'Iniciar Serviço' },
            { id: 'rss-config', icon: Settings, label: 'Configuração' },
            { id: 'rss-channels', icon: Rss, label: 'Canais RSS' },
        ]
    },
];

const paineisMenuItems = [
    {
        group: 'RM Conec',
        items: [
            { id: 'my-channels', icon: Users, label: 'Meus Canais' },
            { id: 'rm-connector', icon: LinkIcon, label: 'RM Conector' },
        ]
    },
    {
        group: 'Comunicação',
        items: [
            { id: 'comm-sources', icon: Wrench, label: 'Fontes' },
            { id: 'comm-accounts', icon: Users, label: 'Contas' },
            { id: 'external-apps', icon: ExternalLink, label: 'Aplicativos Externos' },
            { id: 'saml-apps', icon: ExternalLink, label: 'Aplicativos SAML' },
        ]
    },
];

const pageComponents: { [key: string]: React.ComponentType<any> } = {
  'employees': AdministracaoPessoalPage,
  'dashboard': DashboardPage,
  'calculator': CalculadoraPage,
  'agenda': AgendaPage,
  'sharing': CompartilhamentoPage,
  'cube': CuboPage,
  'spreadsheet': PlanilhaPage,
  'formula': FormulaPage,
  'reports': RelatoriosPage,
  'report-generator': GeradorSaidasPage,
  'data-views': VisoesDadosPage,
  'dashboards': DashboardPage,
  'output-generator': GeradorSaidasPage,
  'chart': () => <div>Gráfico</div>,
  'categories': CategoriasPage,
  'chart-sources': FontesGraficosPage,
  'rss-reader': LeitorRssPage,
  'start-service': IniciarServicoRssPage,
  'rss-config': ConfiguracaoRssPage,
  'rss-channels': CanaisRssPage,
  'my-channels': MeusCanaisPage,
  'rm-connector': RmConectorPage,
  'comm-sources': () => <div>Fontes de Comunicação</div>,
  'comm-accounts': ContasComunicacaoPage,
  'external-apps': AplicativosExternosPage,
  'saml-apps': AplicativosSamlPage,
  'calendars': () => <div>Calendários</div>,
};

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [openTabs, setOpenTabs] = useState([
    { id: 'dashboard', title: 'Dashboard Principal' },
    { id: 'employees', title: 'Consulta de Colaboradores' },
  ]);
  const [activeTab, setActiveTab] = useState('dashboard');

  const openTab = (tab: { id: string, title: string }) => {
    const PageComponent = pageComponents[tab.id];
    if (!PageComponent) {
      console.error(`Page component for id "${tab.id}" not found.`);
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
                {topBarIcons.map((item, index) => (
                    <Button variant='ghost' size='icon' key={index} className='h-6 w-6'>
                        {item.icon}
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
                    <Button variant='ghost' key={item.label} className='h-auto py-1 px-2 text-xs font-normal'>
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
                     {navRightIcons.map((item, index) => (
                        <Button variant='ghost' size='icon' key={index} className='h-6 w-6'>
                            {item.icon}
                        </Button>
                    ))}
                </div>
            </div>
        </div>
         {/* Sub-header Toolbar */}
        <div className="bg-card text-card-foreground flex h-[70px] items-center px-2 border-b border-t border-border overflow-x-hidden">
          <div className="flex h-full items-start">
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
                    {paineisMenuItems.map(group => (
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
                            <DropdownMenuSeparator />
                        </React.Fragment>
                    ))}
                </DropdownMenuContent>
            </DropdownMenu>
            <Separator orientation="vertical" className="h-4/5 my-auto" />
            
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
                        <item.icon />
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
        </div>
      </header>

      <main className="flex-1 p-4 overflow-auto bg-background text-foreground">
        {openTabs.length > 0 ? (
          <React.Suspense fallback={<div className="p-4">Carregando...</div>}>
          <Tabs value={activeTab} onValueChange={setActiveTab} className='h-full flex flex-col'>
            <TabsList>
              {openTabs.map(tab => (
                <TabsTrigger key={tab.id} value={tab.id} className="relative pr-8">
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
            {openTabs.map(tab => {
              const PageComponent = pageComponents[tab.id as keyof typeof pageComponents];
              return (
                <TabsContent key={tab.id} value={tab.id} className='bg-card border rounded-b-lg mt-0 flex-1 p-4'>
                  {activeTab === tab.id && PageComponent ? <PageComponent /> : null}
                </TabsContent>
              )
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
