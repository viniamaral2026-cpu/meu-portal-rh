
import DashboardLayout from './dashboard/layout';

export default function Home() {
  return <DashboardLayout>
    <div className="flex items-center justify-center h-full text-muted-foreground">
        Selecione um item no menu para começar.
    </div>
  </DashboardLayout>;
}
