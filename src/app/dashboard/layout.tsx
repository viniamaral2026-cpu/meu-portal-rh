'use client';
import {
  useState,
  createContext,
  useContext,
  useMemo,
  lazy,
  Suspense,
} from 'react';
import {
  Home,
  BarChart2,
  Users,
  Layers,
  FileText,
  Briefcase,
  Calendar,
  Settings,
  User,
  LogOut,
  ChevronDown,
  Bell,
  Menu as MenuIcon,
  ChevronsLeft,
  ChevronsRight,
  Globe,
  FileDown,
  LayoutGrid,
  UserSquare,
  Factory,
  Video,
  Clock,
  X,
} from 'lucide-react';
import Image from 'next/image';

import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from '@/components/ui/avatar';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { cn } from '@/lib/utils';
import { Skeleton } from '@/components/ui/skeleton';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from '@/components/ui/dialog';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

const navItems = [
  { icon: Home, title: 'Início', page: 'inicio' },
  { icon: BarChart2, title: 'BI', page: 'bi' },
  { icon: Briefcase, title: 'Cargos', page: 'cargos' },
  { icon: FileText, title: 'Currículos', page: 'curriculos' },
  { icon: Layers, title: 'Cubo', page: 'cubo' },
  { icon: Users, title: 'Compartilhamento', page: 'compartilhamento' },
  { icon: Calendar, title: 'Desempenho', page: 'desempenho' },
  { icon: Settings, title: 'Treinamentos', page: 'treinamentos' },
];

const PageSkeleton = () => (
  <div className="p-4 space-y-4">
    <Skeleton className="h-12 w-1/3" />
    <Skeleton className="h-32 w-full" />
    <div className="flex gap-4">
      <Skeleton className="h-64 w-1/2" />
      <Skeleton className="h-64 w-1/2" />
    </div>
  </div>
);

// Lazy load pages
const InicioPage = lazy(() => import('./pages/inicio/page'));
const BIPage = lazy(() => import('./pages/bi/page'));
const CargosPage = lazy(() => import('./pages/cargos/page'));
const CurriculosPage = lazy(() => import('./pages/curriculos/page'));
const CuboPage = lazy(() => import('./pages/cubo/page'));
const CompartilhamentoPage = lazy(() => import('./pages/compartilhamento/page'));
const DesempenhoPage = lazy(() => import('./pages/desempenho/page'));
const TreinamentosPage = lazy(() => import('./pages/treinamentos/page'));
const AtualizacaoSistemaPage = lazy(() => import('./pages/atualizacao-sistema/page'));
const DocumentacaoPage = lazy(() => import('./pages/documentacao/page'));
const ControleJornadaPage = lazy(() => import('./pages/controle-jornada/page'));
const MonitoramentoUsuariosPage = lazy(() => import('./pages/monitoramento-usuarios/page'));
const FiliaisPage = lazy(() => import('./pages/filiais/page'));
const PortalColaboradorPage = lazy(() => import('./pages/portal-colaborador/page'));
const PortalCarreirasPage = lazy(() => import('./pages/portal-carreiras/page'));


const pageComponents: { [key: string]: React.ComponentType<any> } = {
  inicio: InicioPage,
  bi: BIPage,
  cargos: CargosPage,
  curriculos: CurriculosPage,
  cubo: CuboPage,
  compartilhamento: CompartilhamentoPage,
  desempenho: DesempenhoPage,
  treinamentos: TreinamentosPage,
  'atualizacao-sistema': AtualizacaoSistemaPage,
  'documentacao': DocumentacaoPage,
  'controle-jornada': ControleJornadaPage,
  'monitoramento-usuarios': MonitoramentoUsuariosPage,
  'filiais': FiliaisPage,
  'portal-colaborador': PortalColaboradorPage,
  'portal-carreiras': PortalCarreirasPage,
};

const topBarIcons = [
    { icon: Globe, tooltip: 'Atualização do Sistema', page: 'atualizacao-sistema' },
    { icon: FileText, tooltip: 'Documentação do Sistema', page: 'documentacao' },
    { icon: Clock, tooltip: 'Controle de Jornada', page: 'controle-jornada' },
    { icon: Users, tooltip: 'Monitoramento de Usuários', page: 'monitoramento-usuarios' },
    { icon: FileDown, tooltip: 'Baixar Relatório Técnico', action: 'downloadReport' },
    { icon: Factory, tooltip: 'Gestão de Filiais', page: 'filiais' },
    { icon: UserSquare, tooltip: 'Portal do Colaborador', page: 'portal-colaborador' },
    { icon: Briefcase, tooltip: 'Portal de Carreiras', page: 'portal-carreiras' },
];

type DashboardContextType = {
  openTabs: { id: string; title: string; page: string }[];
  addTab: (page: string, title: string) => void;
  removeTab: (id: string) => void;
  activeTab: string;
  setActiveTab: (id: string) => void;
  openModal: (candidate: any) => void;
};

const DashboardContext = createContext<DashboardContextType | null>(null);

export const useDashboard = () => {
  const context = useContext(DashboardContext);
  if (!context) {
    throw new Error('useDashboard must be used within a DashboardProvider');
  }
  return context;
};

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isSidebarMinimized, setIsSidebarMinimized] = useState(false);
  const [openTabs, setOpenTabs] = useState([
    { id: 'inicio-1', title: 'Início', page: 'inicio' },
  ]);
  const [activeTab, setActiveTab] = useState('inicio-1');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedCandidate, setSelectedCandidate] = useState<any>(null);

  const addTab = (page: string, title: string) => {
    // Check if a tab for this page already exists
    const existingTab = openTabs.find(tab => tab.page === page);
    if (existingTab) {
      setActiveTab(existingTab.id);
      return;
    }

    // If we're opening a new tab from an icon, don't just use page
    if (page === 'atualizacao-sistema' || page === 'documentacao' || page === 'controle-jornada' || page === 'monitoramento-usuarios' || page === 'filiais' || page === 'portal-colaborador' || page === 'portal-carreiras') {
        const newTabId = `${page}-${Date.now()}`;
        const newTab = { id: newTabId, title: title, page: page };
        setOpenTabs(prevTabs => [...prevTabs, newTab]);
        setActiveTab(newTabId);
        return;
    }

    const newTabId = `${page}-${Date.now()}`;
    const newTab = { id: newTabId, title: title, page: page };
    setOpenTabs(prevTabs => [...prevTabs, newTab]);
    setActiveTab(newTabId);
  };

  const removeTab = (id: string) => {
    setOpenTabs(prevTabs => {
      const newTabs = prevTabs.filter(tab => tab.id !== id);
      if (activeTab === id) {
        setActiveTab(newTabs[newTabs.length - 1]?.id || '');
      }
      return newTabs;
    });
  };

  const handleIconClick = (action: string, page?: string, title?: string) => {
    if (action === 'downloadReport') {
      const reportContent = `
Relatório Técnico do Sistema MeuRH
===================================
Data de Geração: ${new Date().toLocaleString()}

Versão do Sistema: 1.0.0
Ambiente: Produção
Servidor: next-gen-server-01

Status dos Serviços:
--------------------
- API Principal: Online
- Banco de Dados: Online
- Serviço de BI: Online
- Autenticação: Online

Uso de Recursos:
----------------
- CPU: 45%
- Memória: 60%
- Disco: 75%

Relatório de Uso:
-----------------
- Usuários Ativos: 42
- Relatórios Gerados (Últimas 24h): 120
- Média de Sessão: 25 minutos

Este é um relatório gerado automaticamente para fins de diagnóstico e monitoramento.
      `;
      const blob = new Blob([reportContent.trim()], { type: 'text/plain' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = 'relatorio-tecnico-meurh.txt';
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
    } else if (page && title) {
        addTab(page, title)
    }
  };

  const openModal = (candidate: any) => {
    setSelectedCandidate(candidate);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedCandidate(null);
  };


  const contextValue = useMemo(
    () => ({ openTabs, addTab, removeTab, activeTab, setActiveTab, openModal }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [openTabs, activeTab]
  );

  return (
    <div className="flex h-screen w-full bg-muted/40">
      {/* Sidebar */}
      <aside
        className={cn(
          'flex flex-col text-foreground transition-all duration-300 ease-in-out',
          isSidebarMinimized ? 'w-20' : 'w-64'
        )}
      >
        <div className="flex h-16 shrink-0 items-center justify-between border-b px-4">
          {!isSidebarMinimized && (
            <div className="flex items-center gap-2">
              <Image src="/logo.svg" alt="MeuRH Logo" width={32} height={32} />
              <span className="text-lg font-semibold">MeuRH</span>
            </div>
          )}
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsSidebarMinimized(!isSidebarMinimized)}
          >
            {isSidebarMinimized ? (
              <ChevronsRight className="h-5 w-5" />
            ) : (
              <ChevronsLeft className="h-5 w-5" />
            )}
          </Button>
        </div>
        <nav className="flex-1 space-y-2 overflow-y-auto p-4">
          {navItems.map(item => (
            <Button
              key={item.title}
              variant="ghost"
              className={cn(
                'w-full justify-start gap-3',
                isSidebarMinimized && 'justify-center'
              )}
              onClick={() => addTab(item.page, item.title)}
            >
              <item.icon className="h-5 w-5" />
              {!isSidebarMinimized && <span>{item.title}</span>}
            </Button>
          ))}
        </nav>
        <div className="mt-auto border-t p-4">
          <Button
            variant="ghost"
            className={cn(
              'w-full justify-start gap-3',
              isSidebarMinimized && 'justify-center'
            )}
          >
            <LogOut className="h-5 w-5" />
            {!isSidebarMinimized && <span>Sair</span>}
          </Button>
        </div>
      </aside>

      {/* Main Content */}
      <div className="flex flex-1 flex-col">
        <header className="flex h-16 items-center justify-between border-b bg-background px-4">
          {/* Sub Header */}
          <div className="flex items-center gap-1">
             {topBarIcons.map((item, index) => (
               <Button 
                key={index} 
                variant="ghost" 
                size="icon" 
                title={item.tooltip}
                onClick={() => handleIconClick(item.action || 'openPage', item.page, item.tooltip)}
                >
                 <item.icon className="h-5 w-5" />
               </Button>
             ))}
           </div>
          
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="icon">
              <Bell className="h-5 w-5" />
            </Button>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="flex items-center gap-2">
                  <Avatar className="h-8 w-8">
                    <AvatarImage src="/avatar.jpg" alt="User" />
                    <AvatarFallback>AJ</AvatarFallback>
                  </Avatar>
                  <div className="text-left">
                    <p className="text-sm font-medium">Alexandre</p>
                    <p className="text-xs text-muted-foreground">Admin</p>
                  </div>
                  <ChevronDown className="h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuLabel>Minha Conta</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  <User className="mr-2 h-4 w-4" />
                  <span>Perfil</span>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Settings className="mr-2 h-4 w-4" />
                  <span>Configurações</span>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  <LogOut className="mr-2 h-4 w-4" />
                  <span>Sair</span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </header>

        <main className="flex-1 flex flex-col">
          <DashboardContext.Provider value={contextValue}>
            <Tabs
              value={activeTab}
              onValueChange={setActiveTab}
              className="flex h-full flex-col"
            >
              <div className="border-b">
                <TabsList className="h-auto bg-transparent p-0">
                  {openTabs.map(tab => (
                    <TabsTrigger
                      key={tab.id}
                      value={tab.id}
                      className="relative h-10 rounded-none border-b-2 border-transparent bg-transparent px-4 text-muted-foreground shadow-none data-[state=active]:border-primary data-[state=active]:text-primary data-[state=active]:shadow-none"
                    >
                      {tab.title}
                      <Button
                        variant="ghost"
                        size="icon"
                        className="ml-2 h-5 w-5"
                        onClick={e => {
                          e.stopPropagation();
                          removeTab(tab.id);
                        }}
                      >
                        <X className="h-4 w-4" />
                      </Button>
                    </TabsTrigger>
                  ))}
                </TabsList>
              </div>
              {openTabs.map(tab => {
                const PageComponent = pageComponents[tab.page];
                const props = tab.page === 'curriculos' ? { openInterviewModal: openModal } : {};
                return (
                    <TabsContent
                        key={tab.id}
                        value={tab.id}
                        className="flex-1 overflow-y-auto bg-background ring-offset-0 focus-visible:ring-0"
                    >
                      <Suspense fallback={<PageSkeleton />}>
                        {PageComponent ? <PageComponent {...props} /> : <div className="p-4">Conteúdo para {tab.title}</div>}
                      </Suspense>
                    </TabsContent>
                )
                })}
            </Tabs>
          </DashboardContext.Provider>
        </main>
      </div>

       {/* Interview Modal */}
      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogContent className="max-w-4xl h-[90vh] flex flex-col p-0">
          <DialogHeader className="p-6 pb-0">
            <DialogTitle>Entrevista com {selectedCandidate?.name}</DialogTitle>
            <DialogDescription>
              Vaga: {selectedCandidate?.vaga} | Candidato ID: {selectedCandidate?.id}
            </DialogDescription>
          </DialogHeader>
          <div className="flex-1 grid grid-cols-3 gap-4 p-6 overflow-hidden">
            {/* Video and Candidate Info */}
            <div className="col-span-2 flex flex-col gap-4">
              <div className="flex-1 rounded-lg bg-slate-900 flex items-center justify-center text-slate-400">
                <div className='text-center'>
                  <Video className="h-16 w-16 mx-auto" />
                  <p className='mt-2'>A videochamada seria exibida aqui.</p>
                  <p className='text-sm text-slate-500'>Cole o link do Google Meet no navegador.</p>
                </div>
              </div>
              <div className="p-4 border rounded-lg">
                <h3 className='font-semibold'>Informações do Candidato</h3>
                <p><strong>Nome:</strong> {selectedCandidate?.name}</p>
                <p><strong>Email:</strong> {selectedCandidate?.email}</p>
                <p><strong>Telefone:</strong> {selectedCandidate?.phone}</p>
              </div>
            </div>

            {/* Interviewer Notes & Guide */}
            <div className="col-span-1 flex flex-col gap-4 overflow-y-auto">
               <div className="p-4 border rounded-lg">
                <Label htmlFor="interview-notes">Anotações do Entrevistador</Label>
                <Textarea id="interview-notes" rows={8} placeholder="Digite suas anotações sobre o candidato..." />
              </div>
               <div className="p-4 border rounded-lg bg-muted/50">
                <h3 className='font-semibold mb-2'>Guia de Entrevista</h3>
                <ul className="list-disc list-inside space-y-1 text-sm">
                  <li>Fale sobre sua experiência anterior.</li>
                  <li>Qual seu maior desafio técnico?</li>
                  <li>Por que você quer trabalhar aqui?</li>
                  <li>Qual sua pretensão salarial?</li>
                </ul>
              </div>
            </div>
          </div>
          <DialogFooter className="p-6 pt-0">
            <Button variant="outline" onClick={closeModal}>Cancelar</Button>
            <Button>Finalizar Entrevista</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}
