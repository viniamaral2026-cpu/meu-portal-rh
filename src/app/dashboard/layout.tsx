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
  SidebarFooter,
} from '@/components/ui/sidebar';
import {
  BarChart,
  Home,
  Users,
  Clock,
  Settings,
  Puzzle,
  LogOut,
} from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { GPWayLogo } from '@/components/icons';
import { Button } from '@/components/ui/button';

const menuItems = [
  { href: '/dashboard', label: 'Dashboard', icon: <Home /> },
  { href: '/dashboard/performance', label: 'Desempenho', icon: <BarChart /> },
  { href: '/dashboard/attendance', label: 'Ponto', icon: <Clock /> },
  { href: '/dashboard/integration', label: 'Integração', icon: <Puzzle /> },
  { href: '/dashboard/settings', label: 'Personalização', icon: <Settings /> },
];

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  return (
    <SidebarProvider>
      <Sidebar collapsible="icon" className="border-r">
        <SidebarHeader className="p-4">
          <GPWayLogo className="w-24 group-data-[collapsible=icon]:hidden" />
          <GPWayLogo className="w-8 hidden group-data-[collapsible=icon]:block" />
        </SidebarHeader>
        <SidebarContent>
          <SidebarMenu>
            {menuItems.map((item) => (
              <SidebarMenuItem key={item.href}>
                <SidebarMenuButton
                  asChild
                  isActive={pathname === item.href}
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
        <SidebarFooter>
            <SidebarMenu>
                <SidebarMenuItem>
                    <SidebarMenuButton asChild tooltip="Sair">
                        <Link href="/">
                            <LogOut />
                            <span>Sair</span>
                        </Link>
                    </SidebarMenuButton>
                </SidebarMenuItem>
            </SidebarMenu>
        </SidebarFooter>
      </Sidebar>
      <SidebarInset className="bg-secondary">
        <header className="flex h-14 items-center gap-4 border-b bg-background px-4 lg:px-6">
          <SidebarTrigger />
          <div className="w-full flex-1">
            <h1 className="text-lg font-semibold md:text-xl">
              {menuItems.find(item => item.href === pathname)?.label || 'Dashboard'}
            </h1>
          </div>
          <Button variant="secondary" size="icon" className="rounded-full">
            <Users className="h-5 w-5" />
            <span className="sr-only">Toggle user menu</span>
          </Button>
        </header>
        <main className="flex-1 p-4 lg:p-6">{children}</main>
      </SidebarInset>
    </SidebarProvider>
  );
}
