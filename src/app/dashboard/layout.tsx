'use client';
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
  ChevronDown,
  Minimize,
  Maximize,
  X,
  Globe,
  HelpCircle,
  ChevronUp,
  LayoutGrid,
  Calculator,
  CalendarDays,
  Share2,
  Cuboid,
  Sheet,
  FunctionSquare,
  FilePlus2,
  Database,
  LayoutDashboard,
  Mail,
  BarChart,
  ClipboardList,
  Rss,
  PlayCircle,
  Link,
  BookUser,
  Wrench,
  ExternalLink,
  Sigma,
} from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { MeuRHLogo } from '@/components/icons';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import EmployeesPage from './employees/page';
import DashboardPage from './page';
import { Separator } from '@/components/ui/separator';

const topBarIcons = [
  { icon: <Clock size={16} /> },
  { icon: <Users size={16} /> },
  { icon: <FileDown size={16} /> },
  { icon: <LayoutGrid size={16} /> },
];

const navMenuItems = [
    { label: 'Administração de Pessoal' },
    { label: 'Folha Mensal' },
    { label: 'Férias' },
    { label: 'Rescisão' },
    { label: 'Encargos' },
    { label: 'Anuais' },
    { label: 'eSocial' },
    { label: 'Orçamento (beta)' },
    { label: 'Configurações' },
    { label: 'Assinatura Eletrônica' },
    { label: 'Customização' },
];

const navRightIcons = [
    { icon: <ChevronUp size={16} /> },
    { icon: <Globe size={16} /> },
    { icon: <FileText size={16} /> },
    { icon: <ChevronDown size={16} /> },
    { icon: <HelpCircle size={16} /> },
];

const toolbarItems = [
    {
        group: 'Utilitários',
        items: [
            { icon: <Calculator size={24} />, label: 'Calculadora' },
            { icon: <BookUser size={24} />, label: 'Agenda' },
            { icon: <CalendarDays size={24} />, label: 'Calendários' },
            { icon: <Share2 size={24} />, label: 'TOTVS Compartilhamento' },
            { icon: <Cuboid size={24} />, label: 'Cubo' },
            { icon: <Sheet size={24} />, label: 'Planilha Net' },
            { icon: <FunctionSquare size={24} />, label: 'Fórmula Visual' },
        ]
    },
    {
        group: 'Ferramentas de Análise',
        items: [
            { icon: <FileText size={24} />, label: 'RM Reports' },
            { icon: <FilePlus2 size={24} />, label: 'Gerador de Relatórios' },
            { icon: <Database size={24} />, label: 'Visões de Dados' },
            { icon: <LayoutDashboard size={24} />, label: 'Painéis de Cenários' },
        ]
    },
    {
        group: 'Gráficos',
        items: [
            { icon: <Mail size={24} />, label: 'Gerador de Saída' },
            { icon: <BarChart size={24} />, label: 'Gráfico' },
            { icon: <ClipboardList size={24} />, label: 'Categorias' },
            { icon: <Sigma size={24} />, label: 'Fontes de Gráficos' },
        ]
    },
    {
        group: 'RSS',
        items: [
            { icon: <Rss size={24} />, label: 'Leitor RSS' },
            { icon: <PlayCircle size={24} />, label: 'Iniciar Serviço' },
            { icon: <Settings size={24} />, label: 'Configuração' },
            { icon: <Rss size={24} />, label: 'Canais RSS' },
        ]
    },
    {
        group: 'RM Conec',
        items: [
             { icon: <Users size={24} />, label: 'Meus Canais' },
             { icon: <Link size={24} />, label: 'RM Conector' },
        ]
    },
    {
        group: 'Comunicação',
        items: [
             { icon: <Wrench size={24} />, label: 'Fontes' },
             { icon: <Users size={24} />, label: 'Contas' },
             { icon: <ExternalLink size={24} />, label: 'Aplicativos Externos' },
             { icon: <ExternalLink size={24} />, label: 'Aplicativos SAML' },
        ]
    },
];

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  return (
    <div className="flex flex-col h-screen bg-secondary text-sm text-white">
      <header className="flex flex-col bg-primary">
        {/* Top Bar */}
        <div className="flex h-8 items-center px-2 justify-between bg-[hsl(var(--primary-darker))]">
            <div className='flex items-center gap-2'>
                {topBarIcons.map((item, index) => (
                    <Button variant='ghost' size='icon' key={index} className='h-6 w-6'>
                        {item.icon}
                    </Button>
                ))}
            </div>
            <div className='text-xs opacity-80'>
                TOTVS Compartilhamento - 03.9.0507 - TOTVS Linha RM - Serviços Alias: CorporeRM | 1-TOTVS SA
            </div>
            <div className='flex items-center gap-2'>
                <Button variant='ghost' className='h-auto px-3 py-1 text-xs'>Sistema</Button>
                <div className='flex items-center'>
                    <Button variant='ghost' size='icon' className='h-6 w-6'><Minimize size={16}/></Button>
                    <Button variant='ghost' size='icon' className='h-6 w-6'><Maximize size={16}/></Button>
                    <Button variant='ghost' size='icon' className='h-6 w-6 hover:bg-destructive'><X size={16}/></Button>
                </div>
            </div>
        </div>
        {/* Main Navigation Bar */}
        <div className='flex h-10 items-center px-2 justify-between'>
            <nav className='flex items-center gap-2'>
                <Button variant='ghost' size='icon' className='h-7 w-7'>
                    <LayoutGrid size={16} />
                </Button>
                {navMenuItems.map(item => (
                    <Button variant='ghost' key={item.label} className='h-auto py-1 px-2 text-xs font-normal'>
                        {item.label}
                    </Button>
                ))}
            </nav>
            <div className='flex items-center gap-2'>
                <Tabs defaultValue="gestao" className='text-xs'>
                    <TabsList className='bg-transparent p-0 gap-0.5'>
                        <TabsTrigger value="gestao" className='data-[state=active]:bg-card data-[state=active]:text-card-foreground rounded-sm h-6 px-4 text-xs'>Gestão</TabsTrigger>
                        <TabsTrigger value="ambiente" className='data-[state=active]:bg-card data-[state=active]:text-card-foreground rounded-sm h-6 px-4 text-xs'>Ambiente</TabsTrigger>
                    </TabsList>
                </Tabs>
                <div className='flex items-center'>
                     {navRightIcons.map((item, index) => (
                        <Button variant='ghost' size='icon' key={index} className='h-6 w-6'>
                            {item.icon}
                        </Button>
                    ))}
                </div>
            </div>
        </div>
         {/* Sub-header Toolbar */}
        <div className="bg-card text-card-foreground flex h-[70px] items-center px-2 border-b border-t border-border">
          <div className="flex h-full items-start">
            {toolbarItems.map((group, groupIndex) => (
              <div key={group.group} className="flex h-full items-center">
                <div className="flex flex-col items-center justify-center h-full px-2">
                    <div className='flex items-center justify-center gap-2 h-full'>
                    {group.items.map((item) => (
                    <Button variant="ghost" key={item.label} className="flex flex-col items-center justify-center h-full p-1 w-20 text-xs font-normal gap-1">
                        {item.icon}
                        <span className='w-full text-center truncate'>{item.label}</span>
                    </Button>
                    ))}
                    </div>
                    <p className="text-xs -mt-2 mb-1">{group.group}</p>
                </div>
                {groupIndex < toolbarItems.length - 1 && <Separator orientation="vertical" className="h-4/5 my-auto" />}
              </div>
            ))}
          </div>
        </div>
      </header>

      <main className="flex-1 p-4 overflow-auto bg-background text-foreground">
        <Tabs defaultValue="employees" className='h-full flex flex-col'>
          <TabsList>
            <TabsTrigger value="employees">Consulta de Colaboradores</TabsTrigger>
            <TabsTrigger value="dashboard">Dashboard Principal</TabsTrigger>
          </TabsList>
          <TabsContent value="employees" className='bg-card border rounded-b-lg mt-0 flex-1'>
            <EmployeesPage />
          </TabsContent>
          <TabsContent value="dashboard" className='bg-card border rounded-b-lg mt-0 p-4 flex-1'>
            <DashboardPage />
          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
}
