'use client';
import {
  Suspense,
  lazy,
  useState,
  createContext,
  useContext,
} from 'react';
import { HeaderTop } from '@/components/layout/header-top';
import { HeaderPrimary } from '@/components/layout/header-primary';
import { Toolbar } from '@/components/layout/toolbar';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { X } from 'lucide-react';
import { Skeleton } from '@/components/ui/skeleton';

const InicioPage = lazy(() => import('../dashboard-principal/page'));
const GeradorSaidasPage = lazy(() => import('../gerador-saidas/page'));
const BiPage = lazy(() => import('../bi/page'));
const CargosSalariosPage = lazy(() => import('../cargos-salarios/page'));
const ControleJornadaPage = lazy(
  () => import('../controle-jornada/page')
);
const CurriculosPage = lazy(() => import('../curriculos/page'));
const FiliaisPage = lazy(() => import('../filiais/page'));
const MonitoramentoUsuariosPage = lazy(
  () => import('../monitoramento-usuarios/page')
);

// Import all the other pages that were created
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
const GestaoPage = lazy(() => import('./pages/gestao/page'));
const AmbientePage = lazy(() => import('./pages/ambiente/page'));
const CalculadoraPage = lazy(() => import('./pages/calculadora/page'));
const AgendaPage = lazy(() => import('./pages/agenda/page'));
const CompartilhamentoPage = lazy(() => import('./pages/compartilhamento/page'));
const CuboPage = lazy(() => import('./pages/cubo/page'));
const PlanilhaPage = lazy(() => import('./pages/planilha/page'));
const FormulaPage = lazy(() => import('./pages/formula/page'));
const RelatoriosPage = lazy(() => import('./pages/relatorios/page'));
const VisoesDadosPage = lazy(() => import('./pages/visoes-dados/page'));
const CategoriasPage = lazy(() => import('./pages/categorias/page'));
const FontesGraficosPage = lazy(() => import('./pages/fontes-graficos/page'));
const LeitorRssPage = lazy(() => import('./pages/leitor-rss/page'));
const IniciarServicoRssPage = lazy(() => import('./pages/iniciar-servico-rss/page'));
const ConfiguracaoRssPage = lazy(() => import('./pages/configuracao-rss/page'));
const CanaisRssPage = lazy(() => import('./pages/canais-rss/page'));
const WordPage = lazy(() => import('./pages/word/page'));
const AssistenteAiPage = lazy(() => import('./pages/assistente-ai/page'));
const PortalColaboradorPage = lazy(() => import('@/app/portal-colaborador/page'));
const PortalCarreirasPage = lazy(() => import('./pages/portal-carreiras/page'));
const GestaoPessoasPage = lazy(() => import('./pages/gestao-pessoas/page'));
const GestaoFinanceiraPage = lazy(() => import('./pages/gestao-financeira/page'));
const GestaoProducaoPage = lazy(() => import('./pages/gestao-producao/page'));
const StatusServicosPage = lazy(() => import('./pages/status-servicos/page'));
const AtualizacaoSistemaPage = lazy(() => import('./pages/atualizacao-sistema/page'));
const DocumentacaoPage = lazy(() => import('./pages/documentacao/page'));
const MeusCanaisPage = lazy(() => import('./pages/meus-canais/page'));
const RmConectorPage = lazy(() => import('./pages/rm-conector/page'));
const ContasComunicacaoPage = lazy(() => import('./pages/contas-comunicacao/page'));
const AplicativosExternosPage = lazy(() => import('./pages/aplicativos-externos/page'));
const AplicativosSamlPage = lazy(() => import('./pages/aplicativos-saml/page'));
const SistemaPage = lazy(() => import('./pages/sistema/page'));
const VisualizarColaboradorPage = lazy(() => import('./pages/visualizar-colaborador/page'));
const EditarColaboradorPage = lazy(() => import('./pages/editar-colaborador/page'));


type Tab = {
  id: string;
  title: string;
  component: React.ReactNode;
};

const pagesMap: { [key: string]: React.LazyExoticComponent<any> } = {
  'dashboard-principal': InicioPage,
  'gerador-saidas': GeradorSaidasPage,
  'bi': BiPage,
  'cargos-salarios': CargosSalariosPage,
  'controle-jornada': ControleJornadaPage,
  'curriculos': CurriculosPage,
  'filiais': FiliaisPage,
  'monitoramento-usuarios': MonitoramentoUsuariosPage,
  'employees': EmployeesPage,
  'administracao-pessoal': AdministracaoPessoalPage,
  'colaboradores': AdministracaoPessoalPage,
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
  'gestao': GestaoPage,
  'ambiente': AmbientePage,
  'calculadora': CalculadoraPage,
  'agenda': AgendaPage,
  'compartilhamento': CompartilhamentoPage,
  'cubo': CuboPage,
  'planilha': PlanilhaPage,
  'formula': FormulaPage,
  'relatorios': RelatoriosPage,
  'visoes-dados': VisoesDadosPage,
  'categorias': CategoriasPage,
  'fontes-graficos': FontesGraficosPage,
  'leitor-rss': LeitorRssPage,
  'iniciar-servico-rss': IniciarServicoRssPage,
  'configuracao-rss': ConfiguracaoRssPage,
  'canais-rss': CanaisRssPage,
  'word': WordPage,
  'assistente-ai': AssistenteAiPage,
  'portal-colaborador': PortalColaboradorPage,
  'portal-carreiras': PortalCarreirasPage,
  'gestao-pessoas': GestaoPessoasPage,
  'gestao-financeira': GestaoFinanceiraPage,
  'gestao-producao': GestaoProducaoPage,
  'status-servicos': StatusServicosPage,
  'atualizacao-sistema': AtualizacaoSistemaPage,
  'documentacao': DocumentacaoPage,
  'meus-canais': MeusCanaisPage,
  'rm-conector': RmConectorPage,
  'contas-comunicacao': ContasComunicacaoPage,
  'aplicativos-externos': AplicativosExternosPage,
  'aplicativos-saml': AplicativosSamlPage,
  'sistema': SistemaPage,
  'visualizar-colaborador': VisualizarColaboradorPage,
  'editar-colaborador': EditarColaboradorPage,
};

type DashboardContextType = {
  openTab: (id: string, title: string, data?: any) => void;
};

const DashboardContext = createContext<DashboardContextType | null>(null);
export const useDashboard = () => useContext(DashboardContext);

export function DashboardClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [tabs, setTabs] = useState<Tab[]>([
    {
      id: 'dashboard-principal',
      title: 'Dashboard Principal',
      component: <InicioPage />,
    },
  ]);
  const [activeTab, setActiveTab] = useState('dashboard-principal');

  const openTab = (id: string, title?: string, data: any = {}) => {
    // Check if a tab with the exact same ID already exists
    const existingTab = tabs.find((tab) => tab.id === id);
    
    if (existingTab) {
      setActiveTab(existingTab.id);
      return;
    }

    // Determine the base component to use
    const baseId = id.split('-')[0];
    const PageComponent = pagesMap[baseId];
    
    if (!PageComponent) {
      console.error(`Page component for baseId "${baseId}" not found.`);
      return;
    }

    const newTabId = id; 
    const newTab: Tab = {
      id: newTabId,
      title: title || baseId.replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase()),
      component: <PageComponent data={data} />,
    };

    setTabs([...tabs, newTab]);
    setActiveTab(newTabId);
  };

  const closeTab = (e: React.MouseEvent, id: string) => {
    e.stopPropagation();
    const tabIndex = tabs.findIndex((tab) => tab.id === id);
    if (tabIndex === -1) return;

    const newTabs = tabs.filter((tab) => tab.id !== id);
    setTabs(newTabs);

    if (activeTab === id) {
      if (newTabs.length > 0) {
        const newActiveIndex = Math.max(0, tabIndex - 1);
        setActiveTab(newTabs[newActiveIndex].id);
      } else {
        const defaultTab = {
          id: 'dashboard-principal',
          title: 'Dashboard Principal',
          component: <InicioPage />,
        };
        setTabs([defaultTab]);
        setActiveTab(defaultTab.id);
      }
    }
  };

  const dashboardContextValue = {
    openTab,
  };

  return (
    <DashboardContext.Provider value={dashboardContextValue}>
      <div className="flex flex-col h-screen">
        <HeaderTop />
        <HeaderPrimary openTab={openTab} />
        <Toolbar openTab={openTab} />
        <div className="flex-1 flex flex-col min-h-0">
          <Tabs
            value={activeTab}
            onValueChange={setActiveTab}
            className="flex-1 flex flex-col"
          >
            <div className="bg-muted/50 border-b">
              <TabsList className="justify-start -mb-px rounded-none bg-transparent border-b p-0 h-auto">
                {tabs.map((tab) => (
                  <TabsTrigger
                    key={tab.id}
                    value={tab.id}
                    className="whitespace-nowrap py-3 px-4 text-sm font-medium transition-colors data-[state=active]:bg-card data-[state=active]:text-foreground data-[state=active]:border-border border-b-2 border-transparent hover:bg-muted/80 data-[state=active]:rounded-t-md data-[state=active]:border-b-card relative"
                  >
                    {tab.title}
                    {tabs.length > 1 && (
                      <div
                        role="button"
                        aria-label="Fechar aba"
                        onClick={(e) => closeTab(e, tab.id)}
                        className="ml-2 p-0.5 rounded-full hover:bg-muted-foreground/20"
                      >
                        <X className="h-3.5 w-3.5" />
                      </div>
                    )}
                  </TabsTrigger>
                ))}
              </TabsList>
            </div>
            <main className="flex-1 overflow-auto bg-gray-100/50">
              <Suspense fallback={<div className="p-6"><Skeleton className="h-48 w-full" /></div>}>
                <DashboardContext.Provider value={dashboardContextValue}>
                  {tabs.map((tab) => (
                    <TabsContent key={tab.id} value={tab.id} className="p-4 h-full">
                      {tab.id === activeTab && tab.component}
                    </TabsContent>
                  ))}
                </DashboardContext.Provider>
              </Suspense>
            </main>
          </Tabs>
        </div>
        <footer className="bg-card border-t p-2 text-center text-xs text-muted-foreground">
          Desenvolvido por Tech Ops 2026 | Versão 0.0.1
        </footer>
      </div>
    </DashboardContext.Provider>
  );
}
