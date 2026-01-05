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
  Home,
  Users,
  Clock,
  Puzzle,
  LogOut,
  Boxes,
  Factory,
  CheckCircle,
  FileText,
  Bell,
  PanelLeft,
  Search,
  Printer,
  FileDown,
  UserPlus,
  Settings,
} from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { MeuRHLogo } from '@/components/icons';
import { Button } from '@/components/ui/button';
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarShortcut,
  MenubarTrigger,
} from '@/components/ui/menubar';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import EmployeesPage from './employees/page';
import DashboardPage from './page';

const menuItems = [
  { href: '/dashboard', label: 'Dashboard', icon: <Home /> },
  { href: '/dashboard/employees', label: 'Colaboradores', icon: <Users /> },
  { href: '/dashboard/production', label: 'Produção', icon: <Factory /> },
  { href: '/dashboard/inventory', label: 'Estoque', icon: <Boxes /> },
  { href: '/dashboard/performance', label: 'Desempenho', icon: <CheckCircle /> },
  { href: '/dashboard/attendance', label: 'Ponto', icon: <Clock /> },
  { href: '/dashboard/documents', label: 'Documentos', icon: <FileText /> },
  { href: '/dashboard/notices', label: 'Avisos', icon: <Bell /> },
  { href: '/dashboard/integration', label: 'Integração', icon: <Puzzle /> },
];

const toolbarItems = [
  { label: 'Consultar', icon: <Search /> },
  { label: 'Novo', icon: <UserPlus /> },
  { label: 'Imprimir', icon: <Printer /> },
  { label: 'Exportar', icon: <FileDown /> },
  { label: 'Configurações', icon: <Settings /> },
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
  };

  return (
    <div className="flex flex-col h-screen bg-secondary text-sm">
      <header className="flex h-14 items-center gap-4 border-b bg-background px-4 lg:px-6">
        <Link href="#" className="flex items-center gap-2 font-semibold">
          <MeuRHLogo className="w-20" />
        </Link>
        <div className="flex-1">
          <Menubar className="border-none shadow-none rounded-none">
            <MenubarMenu>
              <MenubarTrigger>Arquivo</MenubarTrigger>
              <MenubarContent>
                <MenubarItem>Novo Colaborador</MenubarItem>
                <MenubarItem>Nova Produção</MenubarItem>
                <MenubarSeparator />
                <MenubarItem>Sair</MenubarItem>
              </MenubarContent>
            </MenubarMenu>
            <MenubarMenu>
              <MenubarTrigger>Editar</MenubarTrigger>
              <MenubarContent>
                <MenubarItem>Desfazer</MenubarItem>
                <MenubarItem>Refazer</MenubarItem>
              </MenubarContent>
            </MenubarMenu>
            <MenubarMenu>
              <MenubarTrigger>Exibir</MenubarTrigger>
               <MenubarContent>
                <MenubarItem>Tela Cheia</MenubarItem>
              </MenubarContent>
            </MenubarMenu>
            <MenubarMenu>
              <MenubarTrigger>Lançamentos</MenubarTrigger>
               <MenubarContent>
                <MenubarItem>Ponto</MenubarItem>
                <MenubarItem>Produção</MenubarItem>
              </MenubarContent>
            </MenubarMenu>
             <MenubarMenu>
              <MenubarTrigger>Relatórios</MenubarTrigger>
               <MenubarContent>
                <MenubarItem>Folha de Ponto</MenubarItem>
                <MenubarItem>Produtividade</MenubarItem>
              </MenubarContent>
            </MenubarMenu>
            <MenubarMenu>
              <MenubarTrigger>Ferramentas</MenubarTrigger>
               <MenubarContent>
                <MenubarItem>Integração ERP</MenubarItem>
              </MenubarContent>
            </MenubarMenu>
            <MenubarMenu>
              <MenubarTrigger>Ajuda</MenubarTrigger>
               <MenubarContent>
                <MenubarItem>Documentação</MenubarItem>
                <MenubarItem>Sobre</MenubarItem>
              </MenubarContent>
            </MenubarMenu>
          </Menubar>
        </div>
        <Button asChild variant="ghost" size="icon" className="rounded-full">
          <Link href="/">
            <LogOut className="h-5 w-5" />
            <span className="sr-only">Sair</span>
          </Link>
        </Button>
      </header>
       <div className='flex items-center p-2 bg-background border-b'>
          {toolbarItems.map((item, index) => (
            <Button variant='ghost' size='sm' key={index} className='flex-col h-auto gap-1 px-3 py-1'>
              {item.icon}
              <span className='text-xs'>{item.label}</span>
            </Button>
          ))}
       </div>

      <main className="flex-1 p-4 overflow-auto">
        <Tabs defaultValue="employees">
          <TabsList>
            <TabsTrigger value="employees">Consulta de Colaboradores</TabsTrigger>
             <TabsTrigger value="dashboard">Dashboard Principal</TabsTrigger>
          </TabsList>
          <TabsContent value="employees" className='bg-background border rounded-b-lg mt-0'>
            <EmployeesPage />
          </TabsContent>
           <TabsContent value="dashboard" className='bg-background border rounded-b-lg mt-0 p-4'>
            <DashboardPage />
          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
}
