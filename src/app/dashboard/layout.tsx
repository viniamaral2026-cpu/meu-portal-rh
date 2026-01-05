import { Suspense } from 'react';
import GeradorSaidasPage from '../gerador-saidas/page';
import { HeaderTop } from '@/components/layout/header-top';
import { HeaderPrimary } from '@/components/layout/header-primary';
import { Toolbar } from '@/components/layout/toolbar';
import { TabsNav } from '@/components/layout/tabs-nav';

export default function DashboardLayout() {
  return (
    <div className="flex flex-col h-screen bg-background">
      <HeaderTop />
      <HeaderPrimary />
      <Toolbar />
      <main className="flex-1 overflow-auto p-4">
        <TabsNav />
        <Suspense fallback={<div>Carregando...</div>}>
          <GeradorSaidasPage />
        </Suspense>
      </main>
    </div>
  );
}
