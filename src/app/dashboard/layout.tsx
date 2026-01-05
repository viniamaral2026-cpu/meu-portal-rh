'use client';
import {
  SidebarProvider,
  Sidebar,
  SidebarHeader,
  SidebarContent,
  SidebarTrigger,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarInset,
} from '@/components/ui/sidebar';
import {
  BarChart,
  Home,
  Users,
  Clock,
  Settings,
  Puzzle,
  LogOut,
  Boxes,
  Factory,
  CheckCircle,
} from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { MeuRHLogo } from '@/components/icons';
import { Button } from '@/components/ui/button';

const menuItems = [
  { href: '/dashboard', label: 'Dashboard', icon: <Home /> },
  { href: '/dashboard/employees', label: 'Colaboradores', icon: <Users /> },
  { href: '/dashboard/production', label: 'Produção', icon: <Factory /> },
  { href: '/dashboard/inventory', label: 'Estoque', icon: <Boxes /> },
  { href: '/dashboard/performance', label: 'Desempenho', icon: <CheckCircle /> },
  { href: '/dashboard/attendance', label: 'Ponto', icon: <Clock /> },
  { href: '/dashboard/integration', label: 'Integração', icon: <Puzzle /> },
];

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  const getPageTitle = () => {
    const currentItem = menuItems.find(item => pathname.startsWith(item.href));
    return currentItem?.label || 'Dashboard';
  }

  return (
    <SidebarProvider>
      <Sidebar collapsible="icon" className="border-r">
        <SidebarHeader className="p-4">
          <MeuRHLogo className="w-24 group-data-[collapsible=icon]:hidden" />
          <MeuRHLogo className="w-8 hidden group-data-[collapsible=icon]:block" />
        </SidebarHeader>
        <SidebarContent>
          <SidebarMenu>
            {menuItems.map((item) => (
              <SidebarMenuItem key={item.href}>
                <SidebarMenuButton
                  asChild
                  isActive={pathname.startsWith(item.href)}
                  tooltip={item.label}
                >
                  <Link href={item.href}>
                    {item.icon}
                    <span>{item.label}</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            ))}
          </SidebarMenu>
        </SidebarContent>
      </Sidebar>
      <SidebarInset className="bg-secondary">
        <header className="flex h-14 items-center gap-4 border-b bg-background px-4 lg:px-6">
          <SidebarTrigger />
          <div className="w-full flex-1">
            <h1 className="text-lg font-semibold md:text-xl">
              {getPageTitle()}
            </h1>
          </div>
          <Button asChild variant="ghost" size="icon" className="rounded-full">
            <Link href="/">
              <LogOut className="h-5 w-5" />
              <span className="sr-only">Sair</span>
            </Link>
          </Button>
        </header>
        <main className="flex-1 p-4 lg:p-6">{children}</main>
      </SidebarInset>
    </SidebarProvider>
  );
}
