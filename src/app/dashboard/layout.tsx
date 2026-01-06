import { HeaderTop } from '@/components/layout/header-top';
import { HeaderPrimary } from '@/components/layout/header-primary';
import { Toolbar } from '@/components/layout/toolbar';
import { DashboardClientLayout } from './client-layout';

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col h-screen bg-background text-sm">
      <DashboardClientLayout>
        {children}
      </DashboardClientLayout>
    </div>
  );
}
