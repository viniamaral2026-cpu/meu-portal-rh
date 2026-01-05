
'use client';
import {
  Suspense,
  lazy,
  useState,
  createContext,
  useContext,
  useEffect,
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

type Tab = {
  id: string;
  title: string;
  component: React.ReactNode;
};

const pagesMap: { [key: string]: React.LazyExoticComponent<any> } = {
  'dashboard-principal': InicioPage,
  'gerador-saidas': GeradorSaidasPage,
  bi: BiPage,
  'cargos-salarios': CargosSalariosPage,
  'controle-jornada': ControleJornadaPage,
  curriculos: CurriculosPage,
  filiais: FiliaisPage,
  'monitoramento-usuarios': MonitoramentoUsuariosPage,
};

type DashboardContextType = {
  openTab: (id: string, title: string, data?: any) => void;
};

const DashboardContext = createContext<DashboardContextType | null>(null);
export const useDashboard = () => useContext(DashboardContext);

export default function DashboardLayout({
  searchParams,
}: {
  searchParams?: { tab: string };
}) {
  const [tabs, setTabs] = useState<Tab[]>([
    {
      id: 'dashboard-principal',
      title: 'Dashboard Principal',
      component: <InicioPage />,
    },
  ]);
  const [activeTab, setActiveTab] = useState('dashboard-principal');
  const [nextTabId, setNextTabId] = useState(1);

  useEffect(() => {
    if (searchParams?.tab) {
      openTab(searchParams.tab);
    }
  }, [searchParams]);

  const openTab = (id: string, title?: string, data: any = {}) => {
    const existingTab = tabs.find((tab) => tab.id.startsWith(id));
    if (existingTab) {
      setActiveTab(existingTab.id);
      return;
    }

    const PageComponent = pagesMap[id];
    if (!PageComponent) {
      console.error(`Page component for id "${id}" not found.`);
      return;
    }

    const newTabId = `${id}-${nextTabId}`;
    setNextTabId(nextTabId + 1);
    const newTab: Tab = {
      id: newTabId,
      title: title || id.replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase()),
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
        // If all tabs are closed, maybe open a default one or handle empty state
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
      <div className="flex flex-col h-screen bg-background text-sm">
        <HeaderTop />
        <HeaderPrimary />
        <Toolbar openTab={openTab} />
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
              {tabs.map((tab) => (
                <TabsContent key={tab.id} value={tab.id} className="p-4 h-full">
                  {tab.id === activeTab && tab.component}
                </TabsContent>
              ))}
            </Suspense>
          </main>
        </Tabs>
      </div>
    </DashboardContext.Provider>
  );
}
