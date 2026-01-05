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
  Server,
  Cloud,
} from 'lucide-react';
import React, { useState, createContext, useContext, lazy, Suspense, ComponentType } from 'react';
import { MeuRHLogo } from '@/components/icons';
import { Button, buttonVariants } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Separator } from '@/components/ui/separator';
import { DropdownMenu, DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger, DropdownMenuRadioGroup, DropdownMenuRadioItem } from '@/components/ui/dropdown-menu';
import Image from 'next/image';
import type { Employee } from './employees/page';
import { Skeleton } from '@/components/ui/skeleton';
import { useRouter } from 'next/navigation';
import { cn } from '@/lib/utils';

// Lazy load all page components for better performance
const DashboardPage = lazy(() => import('./page'));
const EmployeesPage = lazy(() => import('./employees/page'));
const AdministracaoPessoalPage = lazy(() => import('./pages/administracao-pessoal/page'));
const FolhaMensalPage = lazy(() => import('./pages/folha-mensal/page'));
const FeriasPage = lazy(() => import('./pages/ferias/page'));
const RescisaoPage = lazy(() => import('./pages/rescisao/page'));
const EncargosPage = lazy(() => import('./pages/encargos/page'));
const AnuaisPage = lazy(() => import('./pages/anuais/page'));
const EsocialPage = lazy(() => import('./pages/esocial/page'));
const OrcamentoPage = lazy(() => import('./pages/orcamento/page'));
const ConfiguracoesPage = lazy(() => import('./pages/configuracoes/page'));
const AssinaturaEletronicaPage = lazy(() => import('./pages/assinatura-eletronica/page'));
const CustomizacaoPage = lazy(() => import('./pages/customizacao/page'));
const CalculadoraPage = lazy(() => import('./pages/calculadora/page'));
const AgendaPage = lazy(() => import('./pages/agenda/page'));
const CalendariosPage = lazy(() => import('./pages/calendarios/page'));
const CompartilhamentoPage = lazy(() => import('./pages/compartilhamento/page'));
const CuboPage = lazy(() => import('./pages/cubo/page'));
const PlanilhaPage = lazy(() => import('./pages/planilha/page'));
const FormulaPage = lazy(() => import('./pages/formula/page'));
const RelatoriosPage = lazy(() => import('./pages/relatorios/page'));
const GeradorRelatoriosPage = lazy(() => import('./pages/gerador-relatorios/page'));
const VisoesDadosPage = lazy(() => import('./pages/visoes-dados/page'));
const GeradorSaidaPage = lazy(() => import('./pages/gerador-saida/page'));
const GraficoPage = lazy(() => import('./pages/grafico/page'));
const CategoriasPage = lazy(() => import('./pages/categorias/page'));
const FontesGraficosPage = lazy(() => import('./pages/fontes-graficos/page'));
const LeitorRssPage = lazy(() => import('./pages/leitor-rss/page'));
const IniciarServicoRssPage = lazy(() => import('./pages/iniciar-servico-rss/page'));
const ConfiguracaoRssPage = lazy(() => import('./pages/configuracao-rss/page'));
const CanaisRssPage = lazy(() => import('./pages/canais-rss/page'));
const MeusCanaisPage = lazy(() => import('./pages/meus-canais/page'));
const RmConectorPage = lazy(() => import('./pages/rm-conector/page'));
const FontesComunicacaoPage = lazy(() => import('./pages/fontes-comunicacao/page'));
const ContasComunicacaoPage = lazy(() => import('./pages/contas-comunicacao/page'));
const AplicativosExternosPage = lazy(() => import('./pages/aplicativos-externos/page'));
const AplicativosSamlPage = lazy(() => import('./pages/aplicativos-saml/page'));
const VisualizarColaboradorPage = lazy(() => import('./pages/visualizar-colaborador/page'));
const EditarColaboradorPage = lazy(() => import('./pages/editar-colaborador/page'));
const WordPage = lazy(() => import('./pages/word/page'));
const AssistenteAiPage = lazy(() => import('./pages/assistente-ai/page'));
const SistemaPage = lazy(() => import('./pages/sistema/page'));


const topBarIcons = [
  { icon: <Clock size={16} /> },
  { icon: <Users size={16} /> },
  { icon: <FileDown size={16} /> },
  { icon: <LayoutGrid size={16} /> },
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
            { id: 'calculadora', icon: <Calculator size={20} />, label: 'Calculadora' },
            { id: 'agenda', icon: <BookUser size={20} />, label: 'Agenda' },
            { id: 'calendarios', icon: <CalendarDays size={20} />, label: 'Calendários' },
            { id: 'compartilhamento', icon: <Share2 size={20} />, label: 'Compartilhamento' },
            { id: 'cubo', icon: <Cuboid size={20} />, label: 'Cubo' },
            { id: 'planilha', icon: <Sheet size={20} />, label: 'Planilha' },
            { id: 'formula', icon: <FunctionSquare size={20} />, label: 'Fórmula' },
        ]
    },
    {
        group: 'Ferramentas de Análise',
        items: [
            { id: 'employees', icon: <Users size={20} />, label: 'Colaboradores' },
            { id: 'relatorios', icon: <FileText size={20} />, label: 'Relatórios' },
            { id: 'gerador-relatorios', icon: <FilePlus2 size={20} />, label: 'Gerador' },
            { id: 'visoes-dados', icon: <Database size={20} />, label: 'Visões de Dados' },
        ]
    },
    {
        group: 'Gráficos',
        items: [
            { id: 'gerador-saida', icon: <Mail size={20} />, label: 'Gerador Saída' },
            { id: 'grafico', icon: <BarChart size={20} />, label: 'Gráfico' },
            { id: 'categorias', icon: <ClipboardList size={20} />, label: 'Categorias' },
            { id: 'fontes-graficos', icon: <Sigma size={20} />, label: 'Fontes' },
        ]
    },
    {
        group: 'RSS',
        items: [
            { id: 'leitor-rss', icon: <Rss size={20} />, label: 'Leitor RSS' },
            { id: 'iniciar-servico-rss', icon: <PlayCircle size={20} />, label: 'Iniciar Serviço' },
            { id: 'configuracao-rss', icon: <Settings size={20} />, label: 'Configuração' },
            { id: 'canais-rss', icon: <Rss size={20} />, label: 'Canais RSS' },
            { id: 'planilha', icon: <Image src="https://cdn-icons-png.flaticon.com/512/1/1396.png" width={20} height={20} alt="Excel Icon" />, label: 'Excel' },
            { id: 'word', icon: <Image src="https://img.icons8.com/?size=50&id=11571&format=png" width={20} height={20} alt="Word Icon" />, label: 'Word' },
            { id: 'assistente-ai', icon: <Image src="https://www.gstatic.com/apps/signup/resources/gemini-color-v3-24dp.svg" width={20} height={20} alt="Gemini Icon" />, label: 'Gemini' },
        ]
    },
];

const paineisMenuItems = [
    {
        group: 'RM Conec',
        items: [
            { id: 'meus-canais', icon: <Users size={20} />, label: 'Meus Canais' },
            { id: 'rm-conector', icon: <LinkIcon size={20} />, label: 'RM Conector' },
        ]
    },
    {
        group: 'Comunicação',
        items: [
            { id: 'fontes-comunicacao', icon: <Wrench size={20} />, label: 'Fontes' },
            { id: 'contas-comunicacao', icon: <Users size={20} />, label: 'Contas' },
            { id: 'aplicativos-externos', icon: <ExternalLink size={20} />, label: 'Aplicativos Externos' },
            { id: 'aplicativos-saml', icon: <ExternalLink size={20} />, label: 'Aplicativos SAML' },
        ]
    },
];

type PageComponentProps = {
    tab: Tab;
    employee?: Employee;
};

const pageComponents: { [key: string]: ComponentType<PageComponentProps> } = {
  dashboard: DashboardPage,
  employees: EmployeesPage,
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
  'word': WordPage,
  'assistente-ai': AssistenteAiPage,
  'sistema': SistemaPage,
  // Dynamic pages need a regex-like match
  'visualizar-colaborador': VisualizarColaboradorPage,
  'editar-colaborador': EditarColaboradorPage,
};

type Tab = {
  id: string;
  title: string;
  data?: any;
};

type DashboardContextType = {
  openTab: (tab: Tab) => void;
};

const DashboardContext = createContext<DashboardContextType | null>(null);

export const useDashboard = () => {
  const context = useContext(DashboardContext);
  if (!context) {
    throw new Error('useDashboard must be used within a DashboardProvider');
  }
  return context;
};

function PageSkeleton() {
  return (
    <div className="p-4 space-y-4">
      <Skeleton className="h-32 w-full" />
      <div className="grid grid-cols-2 gap-4">
        <Skeleton className="h-48 w-full" />
        <Skeleton className="h-48 w-full" />
      </div>
    </div>
  );
}


export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();
  const [openTabs, setOpenTabs] = useState<Tab[]>([
    { id: 'dashboard', title: 'Dashboard Principal' },
    { id: 'employees', title: 'Consulta de Colaboradores' },
  ]);
  const [activeTab, setActiveTab] = useState('dashboard');
  const [currentEnvironment, setCurrentEnvironment] = useState('production');

  const openTab = (tab: Tab) => {
    if (!openTabs.find(t => t.id === tab.id)) {
      setOpenTabs(prev => [...prev, tab]);
    }
    setActiveTab(tab.id);
  };

  const closeTab = (e: React.MouseEvent, tabId: string) => {
    e.stopPropagation();
    // Prevent closing the main dashboard tab
    if (tabId === 'dashboard') return;

    setOpenTabs(prev => {
      const newTabs = prev.filter(t => t.id !== tabId);
      if (activeTab === tabId && newTabs.length > 0) {
        setActiveTab(newTabs[newTabs.length - 1]?.id);
      } else if (newTabs.length === 0) {
         // If all tabs are closed, open the default dashboard
         setOpenTabs([{ id: 'dashboard', title: 'Dashboard Principal' }]);
         setActiveTab('dashboard');
         return [];
      }
      return newTabs;
    });
  };
  
  const handleLogout = () => {
    // Here you would typically clear session, tokens, etc.
    router.push('/');
  };

  const dashboardContextValue = {
    openTab,
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
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                  <Button variant="ghost" className="text-xs opacity-80 h-auto py-1 px-3">
                    Minha Empresa Calçados | Unidade Matriz | Usuário: Admin
                    <ChevronDown className="ml-2 h-3 w-3" />
                  </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuLabel>Minha Conta</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem onClick={handleLogout}>
                  <LogOut className="mr-2 h-4 w-4" />
                  <span>Sair</span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            <div className='flex items-center gap-2'>
                <Button variant='ghost' className='h-auto px-3 py-1 text-xs' onClick={() => openTab({ id: 'sistema', title: 'Configurações do Sistema'})}>Sistema</Button>
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
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant='ghost' className='h-auto px-3 py-1 text-xs data-[state=open]:bg-card data-[state=open]:text-card-foreground'>Gestão <ChevronDown className='ml-1 h-3 w-3'/></Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent>
                    <DropdownMenuLabel>Painéis de Gestão</DropdownMenuLabel>
                    <DropdownMenuSeparator/>
                    <DropdownMenuItem>Gestão de Pessoas</DropdownMenuItem>
                    <DropdownMenuItem>Gestão Financeira/Contábil</DropdownMenuItem>
                    <DropdownMenuItem>Gestão de Produção</DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button variant='ghost' className='h-auto px-3 py-1 text-xs data-[state=open]:bg-card data-[state=open]:text-card-foreground'>
                            Ambiente
                            <ChevronDown className='ml-1 h-3 w-3'/>
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent>
                        <DropdownMenuLabel>Selecionar Ambiente</DropdownMenuLabel>
                        <DropdownMenuRadioGroup value={currentEnvironment} onValueChange={setCurrentEnvironment}>
                            <DropdownMenuRadioItem value="production">
                                <Server className="mr-2" /> Produção
                            </DropdownMenuRadioItem>
                            <DropdownMenuRadioItem value="staging">
                                <Cloud className="mr-2" /> Homologação
                            </DropdownMenuRadioItem>
                        </DropdownMenuRadioGroup>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem>
                            <Settings className="mr-2" /> Status dos Serviços
                        </DropdownMenuItem>
                         <DropdownMenuItem>
                            <ExternalLink className="mr-2" /> Limpar Cache do Ambiente
                        </DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
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
        <div className="bg-card text-card-foreground flex h-[70px] items-center px-2 border-b border-t border-border overflow-x-auto">
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
                        {item.icon}
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

          <div className="flex h-full items-start ml-auto">
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
                                {item.icon}
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
          <Tabs value={activeTab} onValueChange={setActiveTab} className='h-full flex flex-col'>
            <TabsList className="bg-transparent p-0 justify-start h-auto rounded-none border-b-0">
              {openTabs.map(tab => (
                <TabsTrigger 
                  key={tab.id} 
                  value={tab.id} 
                  className="relative pr-8 h-10 rounded-none rounded-t-md border-b-0 data-[state=inactive]:bg-muted data-[state=active]:bg-card data-[state=active]:shadow-none data-[state=inactive]:border data-[state=inactive]:border-b-0"
                >
                  {tab.title}
                  <div
                    role="button"
                    aria-label="Fechar aba"
                    onClick={(e) => closeTab(e, tab.id)}
                    className={cn(
                        buttonVariants({ variant: "ghost", size: "icon" }),
                        "absolute top-1/2 right-1 h-5 w-5 -translate-y-1/2 rounded-full",
                        tab.id === 'dashboard' && 'pointer-events-none opacity-50'
                    )}
                  >
                    <X className="h-3 w-3" />
                  </div>
                </TabsTrigger>
              ))}
            </TabsList>
            <DashboardContext.Provider value={dashboardContextValue}>
                {openTabs.map(tab => {
                const pageId = tab.id.startsWith('visualizar-colaborador') ? 'visualizar-colaborador' : tab.id.startsWith('editar-colaborador') ? 'editar-colaborador' : tab.id;
                const PageComponent = pageComponents[pageId as keyof typeof pageComponents];
                
                const props: PageComponentProps = { tab };
                if ((pageId === 'visualizar-colaborador' || pageId === 'editar-colaborador') && tab.data) {
                    props.employee = tab.data as Employee;
                }

                return (
                    <TabsContent key={tab.id} value={tab.id} className='bg-card border border-t-0 rounded-b-lg mt-0 flex-1'>
                      <Suspense fallback={<PageSkeleton />}>
                        {PageComponent ? <PageComponent {...props} /> : <div className="p-4">Conteúdo para {tab.title}</div>}
                      </Suspense>
                    </TabsContent>
                )
                })}
            </DashboardContext.Provider>
          </Tabs>
        ) : (
          <div className="flex items-center justify-center h-full text-muted-foreground">
            Selecione um item no menu para começar.
          </div>
        )}
      </main>
      <footer className="p-1 text-center text-xs bg-card text-card-foreground border-t">
        Desenvolvido por Tech Ops 2026 | Versão 0.0.1
      </footer>
    </div>
  );
}
