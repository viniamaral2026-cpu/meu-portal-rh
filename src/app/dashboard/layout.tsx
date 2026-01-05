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
  Link as LinkIcon,
  BookUser,
  Wrench,
  ExternalLink,
  Sigma,
} from 'lucide-react';
import React, { useState } from 'react';
import { MeuRHLogo } from '@/components/icons';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import EmployeesPage from './employees/page';
import DashboardPage from './page';
import { Separator } from '@/components/ui/separator';
import { DropdownMenu, DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';

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
            { id: 'calculator', icon: <Calculator size={20} />, label: 'Calculadora' },
            { id: 'agenda', icon: <BookUser size={20} />, label: 'Agenda' },
            { id: 'calendars', icon: <CalendarDays size={20} />, label: 'Calendários' },
            { id: 'sharing', icon: <Share2 size={20} />, label: 'Compartilhamento' },
            { id: 'cube', icon: <Cuboid size={20} />, label: 'Cubo' },
            { id: 'spreadsheet', icon: <Sheet size={20} />, label: 'Planilha' },
            { id: 'formula', icon: <FunctionSquare size={20} />, label: 'Fórmula' },
        ]
    },
    {
        group: 'Ferramentas de Análise',
        items: [
            { id: 'employees', icon: <Users size={20} />, label: 'Colaboradores' },
            { id: 'reports', icon: <FileText size={20} />, label: 'Relatórios' },
            { id: 'report-generator', icon: <FilePlus2 size={20} />, label: 'Gerador' },
            { id: 'data-views', icon: <Database size={20} />, label: 'Visões de Dados' },
        ]
    },
    {
        group: 'Gráficos',
        items: [
            { id: 'output-generator', icon: <Mail size={20} />, label: 'Gerador Saída' },
            { id: 'chart', icon: <BarChart size={20} />, label: 'Gráfico' },
            { id: 'categories', icon: <ClipboardList size={20} />, label: 'Categorias' },
            { id: 'chart-sources', icon: <Sigma size={20} />, label: 'Fontes' },
        ]
    },
    {
        group: 'RSS',
        items: [
            { id: 'rss-reader', icon: <Rss size={20} />, label: 'Leitor RSS' },
            { id: 'start-service', icon: <PlayCircle size={20} />, label: 'Iniciar Serviço' },
            { id: 'rss-config', icon: <Settings size={20} />, label: 'Configuração' },
            { id: 'rss-channels', icon: <Rss size={20} />, label: 'Canais RSS' },
        ]
    },
];

const paineisMenuItems = [
    {
        group: 'RM Conec',
        items: [
            { id: 'my-channels', icon: <Users size={20} />, label: 'Meus Canais' },
            { id: 'rm-connector', icon: <LinkIcon size={20} />, label: 'RM Conector' },
        ]
    },
    {
        group: 'Comunicação',
        items: [
            { id: 'comm-sources', icon: <Wrench size={20} />, label: 'Fontes' },
            { id: 'comm-accounts', icon: <Users size={20} />, label: 'Contas' },
            { id: 'external-apps', icon: <ExternalLink size={20} />, label: 'Aplicativos Externos' },
            { id: 'saml-apps', icon: <ExternalLink size={20} />, label: 'Aplicativos SAML' },
        ]
    },
];

const pageComponents: { [key: string]: React.ComponentType } = {
  employees: EmployeesPage,
  dashboard: DashboardPage,
};


export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [openTabs, setOpenTabs] = useState([
    { id: 'dashboard', title: 'Dashboard Principal' },
    { id: 'employees', title: 'Consulta de Colaboradores' },
  ]);
  const [activeTab, setActiveTab] = useState('dashboard');

  const openTab = (tab: { id: string, title: string }) => {
    if (!openTabs.find(t => t.id === tab.id)) {
      setOpenTabs(prev => [...prev, tab]);
    }
    setActiveTab(tab.id);
  };

  const closeTab = (e: React.MouseEvent, tabId: string) => {
    e.stopPropagation();
    setOpenTabs(prev => {
      const newTabs = prev.filter(t => t.id !== tabId);
      if (activeTab === tabId && newTabs.length > 0) {
        setActiveTab(newTabs[newTabs.length - 1]?.id);
      } else if (newTabs.length === 0) {
        // If no tabs are left, maybe open a default one or set to a null state
        setActiveTab(''); 
      }
      return newTabs;
    });
  };

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
                Minha Empresa Calçados | Unidade Matriz | Usuário: Admin
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
        <div className="bg-card text-card-foreground flex h-[70px] items-center justify-between px-2 border-b border-t border-border overflow-x-auto">
          <div className="flex h-full items-start">
            {toolbarItems.map((group, groupIndex) => (
              <div key={group.group} className="flex h-full items-center">
                <div className="flex flex-col items-center justify-center h-full px-1">
                    <div className='flex items-center justify-center gap-0.5 h-full'>
                    {group.items.map((item) => (
                    <Button 
                      variant="ghost" 
                      key={item.id}
                      onClick={() => openTab({ id: item.id, title: item.label })}
                      className="flex flex-col items-center justify-center h-full p-1 w-14 text-xs font-normal gap-1"
                    >
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

          <div className="flex h-full items-start">
            <Separator orientation="vertical" className="h-4/5 my-auto" />
            <DropdownMenu>
                <DropdownMenuTrigger asChild>
                    <div className='flex flex-col items-center justify-center h-full px-1 cursor-pointer'>
                         <div className='flex items-center justify-center h-full p-1 w-14 text-xs font-normal gap-1 flex-col'>
                            <LayoutDashboard size={20} />
                            <span className='w-full text-center truncate'>Painéis</span>
                        </div>
                        <p className="text-xs -mt-8 mb-1 invisible">Painéis</p>
                    </div>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-56">
                    {paineisMenuItems.map((group, index) => (
                        <React.Fragment key={group.group}>
                            <DropdownMenuLabel>{group.group}</DropdownMenuLabel>
                            <DropdownMenuGroup>
                            {group.items.map(item => (
                                <DropdownMenuItem key={item.id} onClick={() => openTab({ id: item.id, title: item.label })}>
                                {item.icon}
                                <span>{item.label}</span>
                                </DropdownMenuItem>
                            ))}
                            </DropdownMenuGroup>
                            {index < paineisMenuItems.length - 1 && <DropdownMenuSeparator />}
                        </React.Fragment>
                    ))}
                </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </header>

      <main className="flex-1 p-4 overflow-auto bg-background text-foreground">
        {openTabs.length > 0 ? (
          <Tabs value={activeTab} onValueChange={setActiveTab} className='h-full flex flex-col'>
            <TabsList className="bg-transparent p-0 justify-start h-auto rounded-none border-b-0">
              {openTabs.map(tab => (
                <TabsTrigger 
                  key={tab.id} 
                  value={tab.id} 
                  className="relative pr-8 h-10 rounded-none rounded-t-md border-b-0 data-[state=inactive]:bg-muted data-[state=active]:bg-card data-[state=active]:shadow-none data-[state=inactive]:border data-[state=inactive]:border-b-0"
                >
                  {tab.title}
                  <Button
                    variant="ghost"
                    size="icon"
                    className="absolute top-1/2 right-1 h-5 w-5 -translate-y-1/2 rounded-full"
                    onClick={(e) => closeTab(e, tab.id)}
                  >
                    <X className="h-3 w-3" />
                  </Button>
                </TabsTrigger>
              ))}
            </TabsList>
            {openTabs.map(tab => {
              const PageComponent = pageComponents[tab.id as keyof typeof pageComponents];
              return (
                <TabsContent key={tab.id} value={tab.id} className='bg-card border border-t-0 rounded-b-lg mt-0 flex-1'>
                  {PageComponent ? <PageComponent /> : <div className="p-4">Conteúdo para {tab.title}</div>}
                </TabsContent>
              )
            })}
          </Tabs>
        ) : (
          <div className="flex items-center justify-center h-full text-muted-foreground">
            Selecione um item no menu para começar.
          </div>
        )}
      </main>
    </div>
  );
}
