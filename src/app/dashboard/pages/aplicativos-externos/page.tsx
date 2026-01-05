'use client';

import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { useToast } from '@/hooks/use-toast';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import {
  PlusCircle,
  Trash2,
  List,
  History,
  Link,
  KeyRound,
  CheckCircle,
  XCircle,
  Settings,
  Eye,
  File,
  MessageSquare,
  Calendar,
} from 'lucide-react';
import Image from 'next/image';

type AppStatus = 'connected' | 'revoked';

type AppIntegration = {
  id: string;
  name: string;
  description: string;
  logo: React.ReactNode;
  status: AppStatus;
  connectionDate?: string;
  permissions: string[];
  activityLogs: { timestamp: string; action: string }[];
};

const initialApps: AppIntegration[] = [
  {
    id: 'google-drive',
    name: 'Google Drive',
    description: 'Armazene e acesse relatórios, holerites e documentos diretamente no seu Google Drive.',
    logo: <Image src="https://img.icons8.com/?size=48&id=132&format=png" width={40} height={40} alt="Google Drive Icon" />,
    status: 'connected',
    connectionDate: '2023-10-15',
    permissions: ['Ver, editar, criar e excluir apenas os arquivos que você usar com este app', 'Ver seu endereço de e-mail principal'],
    activityLogs: [
      { timestamp: '10/07/2024 15:30', action: 'Arquivo "Relatorio_Mensal.pdf" salvo na pasta /MeuRH.' },
      { timestamp: '08/07/2024 10:00', action: 'Acesso autorizado pelo usuário admin.' },
    ],
  },
  {
    id: 'slack',
    name: 'Slack',
    description: 'Receba notificações importantes sobre aprovações, novos documentos e alertas de RH em seus canais do Slack.',
    logo: <Image src="https://img.icons8.com/?size=48&id=20977&format=png" width={40} height={40} alt="Slack Icon" />,
    status: 'connected',
    connectionDate: '2024-01-20',
    permissions: ['Enviar mensagens para os canais que você autorizar', 'Ver informações básicas do workspace'],
     activityLogs: [
      { timestamp: '10/07/2024 16:00', action: 'Notificação enviada para o canal #rh-alertas.' },
    ],
  },
  {
    id: 'ms-calendar',
    name: 'Microsoft Outlook Calendar',
    description: 'Sincronize agendamentos de férias, afastamentos e eventos corporativos com seu calendário do Outlook.',
    logo: <Image src="https://img.icons8.com/?size=48&id=VgV22n7i1s1C&format=png" width={40} height={40} alt="Outlook Calendar Icon" />,
    status: 'revoked',
    permissions: [],
    activityLogs: [],
  },
];

export default function AplicativosExternosPage() {
  const [apps, setApps] = useState<AppIntegration[]>(initialApps);
  const [selectedApp, setSelectedApp] = useState<AppIntegration | null>(null);
  const [isPermDialogOpen, setIsPermDialogOpen] = useState(false);
  const [isLogDialogOpen, setIsLogDialogOpen] = useState(false);
  const { toast } = useToast();

  const handleConnect = (appId: string) => {
    setApps(prev => prev.map(app => app.id === appId ? { ...app, status: 'connected', connectionDate: new Date().toISOString().split('T')[0] } : app));
    toast({ title: "Aplicativo Conectado!", description: "A autorização foi concedida com sucesso. (Simulação)" });
  };

  const handleRevoke = (appId: string) => {
    setApps(prev => prev.map(app => app.id === appId ? { ...app, status: 'revoked' } : app));
    toast({ variant: 'destructive', title: "Acesso Revogado", description: "O aplicativo não tem mais acesso aos seus dados." });
  };
  
  const openPermDialog = (app: AppIntegration) => {
    setSelectedApp(app);
    setIsPermDialogOpen(true);
  };
  
  const openLogDialog = (app: AppIntegration) => {
    setSelectedApp(app);
    setIsLogDialogOpen(true);
  };

  return (
    <div className="p-4 space-y-4">
      <Card>
        <CardHeader>
          <CardTitle className='flex items-center gap-2'><Link className='w-6 h-6'/> Aplicativos Externos (OAuth)</CardTitle>
          <CardDescription>Conecte, autorize e gerencie o acesso de serviços externos aos dados da sua empresa.</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {apps.map((app) => (
              <Card key={app.id} className="flex flex-col">
                <CardHeader className="flex-row gap-4 items-start">
                  <div className='flex-shrink-0'>{app.logo}</div>
                  <div>
                    <CardTitle className="text-xl">{app.name}</CardTitle>
                    <Badge variant={app.status === 'connected' ? 'default' : 'secondary'} className='mt-1'>
                      {app.status === 'connected' ? <CheckCircle className="mr-2 h-4 w-4" /> : <XCircle className="mr-2 h-4 w-4" />}
                      {app.status === 'connected' ? 'Conectado' : 'Acesso Revogado'}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent className="flex-grow">
                  <p className="text-sm text-muted-foreground">{app.description}</p>
                </CardContent>
                <div className='p-4 border-t space-y-2'>
                    {app.status === 'connected' ? (
                         <div className="space-y-2">
                            <p className="text-xs text-muted-foreground">Conectado em: {app.connectionDate ? new Date(app.connectionDate).toLocaleDateString() : 'N/A'}</p>
                            <div className="flex gap-2">
                                <Button variant="outline" size="sm" onClick={() => openPermDialog(app)}><KeyRound className='mr-2 h-4 w-4'/> Permissões</Button>
                                <Button variant="outline" size="sm" onClick={() => openLogDialog(app)}><History className='mr-2 h-4 w-4'/> Atividade</Button>
                                <AlertDialog>
                                    <AlertDialogTrigger asChild>
                                        <Button variant="destructive" size="sm"><Trash2 className='mr-2 h-4 w-4'/> Revogar</Button>
                                    </AlertDialogTrigger>
                                    <AlertDialogContent>
                                        <AlertDialogHeader>
                                            <AlertDialogTitle>Revogar acesso para {app.name}?</AlertDialogTitle>
                                            <AlertDialogDescription>
                                                Esta ação irá desconectar o aplicativo e impedir que ele acesse seus dados. Você poderá reconectá-lo a qualquer momento.
                                            </AlertDialogDescription>
                                        </AlertDialogHeader>
                                        <AlertDialogFooter>
                                            <AlertDialogCancel>Cancelar</AlertDialogCancel>
                                            <AlertDialogAction onClick={() => handleRevoke(app.id)}>Confirmar Revogação</AlertDialogAction>
                                        </AlertDialogFooter>
                                    </AlertDialogContent>
                                </AlertDialog>
                            </div>
                         </div>
                    ) : (
                        <Button className='w-full' onClick={() => handleConnect(app.id)}>
                            <Link className='mr-2 h-4 w-4'/> Conectar
                        </Button>
                    )}
                </div>
              </Card>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Permissions Dialog */}
      <Dialog open={isPermDialogOpen} onOpenChange={setIsPermDialogOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle className='flex items-center gap-2'><KeyRound /> Permissões para {selectedApp?.name}</DialogTitle>
            <DialogDescription>
              Este aplicativo tem permissão para realizar as seguintes ações:
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-2 py-4">
            {selectedApp?.permissions.map((perm, i) => (
              <div key={i} className="flex items-start gap-3">
                <CheckCircle className="h-4 w-4 text-green-500 mt-1 flex-shrink-0" />
                <p className="text-sm text-muted-foreground">{perm}</p>
              </div>
            ))}
          </div>
        </DialogContent>
      </Dialog>
      
      {/* Activity Log Dialog */}
      <Dialog open={isLogDialogOpen} onOpenChange={setIsLogDialogOpen}>
        <DialogContent className="sm:max-w-lg">
          <DialogHeader>
            <DialogTitle className='flex items-center gap-2'><History /> Atividade Recente de {selectedApp?.name}</DialogTitle>
            <DialogDescription>
              Logs das últimas ações realizadas por este aplicativo.
            </DialogDescription>
          </DialogHeader>
           <div className="py-4 max-h-96 overflow-y-auto">
             <div className="relative pl-6">
                {selectedApp?.activityLogs.map((log, i) => (
                    <div key={i} className="mb-6">
                        <div className="absolute left-0 h-full w-px bg-border -translate-x-1/2"></div>
                        <div className="absolute left-0 h-3 w-3 rounded-full bg-primary -translate-x-1/2 mt-1"></div>
                        <p className="text-xs text-muted-foreground">{log.timestamp}</p>
                        <p className="text-sm">{log.action}</p>
                    </div>
                ))}
             </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
