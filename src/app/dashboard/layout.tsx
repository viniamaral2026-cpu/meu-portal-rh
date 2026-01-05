import { Suspense, lazy } from 'react';
import { HeaderTop } from '@/components/layout/header-top';
import { HeaderPrimary } from '@/components/layout/header-primary';
import { Toolbar } from '@/components/layout/toolbar';
import { TabsNav } from '@/components/layout/TabsNav';

const InicioPage = lazy(() => import('../dashboard-principal/page'));
const GeradorSaidasPage = lazy(() => import('../gerador-saidas/page'));
const BiPage = lazy(() => import('../bi/page'));
const CargosSalariosPage = lazy(() => import('../cargos-salarios/page'));
const ControleJornadaPage = lazy(() => import('../controle-jornada/page'));
const CurriculosPage = lazy(() => import('../curriculos/page'));
const FiliaisPage = lazy(() => import('../filiais/page'));
const MonitoramentoUsuariosPage = lazy(() => import('../monitoramento-usuarios/page'));


const pages = {
  'dashboard-principal': <InicioPage />,
  'gerador-saidas': <GeradorSaidasPage />,
  'bi': <BiPage />,
  'cargos-salarios': <CargosSalariosPage />,
  'controle-jornada': <ControleJornadaPage />,
  'curriculos': <CurriculosPage />,
  'filiais': <FiliaisPage />,
  'monitoramento-usuarios': <MonitoramentoUsuariosPage />,
};

export default function DashboardLayout({
  searchParams,
}: {
  searchParams?: { tab: string };
}) {
  const activeTab = searchParams?.tab || 'dashboard-principal';
  const ActivePage = pages[activeTab as keyof typeof pages] || <InicioPage />;

  return (
    <div className="flex flex-col h-screen bg-background text-sm">
      <HeaderTop />
      <HeaderPrimary />
      <Toolbar />
      <TabsNav activeTab={activeTab} />
      <main className="flex-1 overflow-auto p-4 bg-gray-100/50">
        <Suspense fallback={<div className="p-6">Carregando...</div>}>
          {ActivePage}
        </Suspense>
      </main>
    </div>
  );
}
