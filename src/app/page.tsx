import DashboardLayout from './dashboard/layout';
import InicioPage from './dashboard/pages/inicio/page';

export default function Home() {
  return (
    <DashboardLayout>
      <InicioPage />
    </DashboardLayout>
  );
}
