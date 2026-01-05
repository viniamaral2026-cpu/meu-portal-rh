import DashboardLayout from './dashboard/layout';

export default function Home({
  searchParams,
}: {
  searchParams?: { tab: string };
}) {
  return <DashboardLayout searchParams={searchParams} />;
}
