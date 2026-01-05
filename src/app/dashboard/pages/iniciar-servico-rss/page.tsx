'use client';

import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Play, Square, RefreshCw, Power, Server, Clock, Rss } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { cn } from '@/lib/utils';

type ServiceStatus = 'running' | 'stopped' | 'error';

const statusConfig = {
  running: { text: 'Ativo', variant: 'default', className: 'bg-green-500 hover:bg-green-600' },
  stopped: { text: 'Inativo', variant: 'destructive', className: 'bg-red-500 hover:bg-red-600' },
  error: { text: 'Erro', variant: 'destructive', className: '' },
};

const initialLogs = [
  { timestamp: new Date().toISOString(), level: 'INFO', message: 'Serviço RSS inicializado. Aguardando comando para iniciar.' },
];

const stats = [
    { title: "Última Atualização", value: "Aguardando", icon: RefreshCw },
    { title: "Próxima Atualização", value: "Pausado", icon: Clock },
    { title: "Feeds Monitorados", value: "5", icon: Rss },
    { title: "Novos Artigos (24h)", value: "0", icon: Rss },
];

export default function IniciarServicoRssPage() {
  const [status, setStatus] = useState<ServiceStatus>('stopped');
  const [logs, setLogs] = useState(initialLogs);
  const [serviceStats, setServiceStats] = useState(stats);
  const { toast } = useToast();

  const addLog = (level: string, message: string) => {
    setLogs(prev => [{ timestamp: new Date().toISOString(), level, message }, ...prev]);
  };

  const handleStart = () => {
    setStatus('running');
    addLog('INFO', 'Serviço iniciado pelo usuário.');
    toast({ title: 'Serviço RSS Iniciado', description: 'O serviço começará a buscar notícias em segundo plano.' });
  };

  const handleStop = () => {
    setStatus('stopped');
    addLog('WARN', 'Serviço parado pelo usuário.');
    toast({ variant: 'destructive', title: 'Serviço RSS Parado', description: 'A busca de notícias foi interrompida.' });
  };
  
  const handleRefresh = () => {
    if (status !== 'running') {
         toast({ variant: 'destructive', title: 'Serviço Inativo', description: 'Inicie o serviço antes de forçar uma atualização.' });
         return;
    }
    addLog('INFO', 'Atualização manual solicitada...');
    toast({ title: 'Atualização Forçada', description: 'Buscando novos artigos em todos os feeds.' });
    // Simulate finding new articles
    setTimeout(() => {
        addLog('SUCCESS', "Busca concluída. 4 novos artigos encontrados no feed 'Portal eSocial'.");
    }, 2000);
  };

  return (
    <div className="p-4 space-y-4">
      <Card>
        <CardHeader className="flex-row items-start justify-between">
          <div>
            <CardTitle className="text-2xl flex items-center gap-2">
              <Server /> Painel de Controle do Serviço RSS
            </CardTitle>
            <CardDescription>
              Monitore o status, inicie ou pare o serviço de atualização de notícias e veja os logs de atividade.
            </CardDescription>
          </div>
          <div className="flex items-center gap-4">
            <span className='text-sm text-muted-foreground'>Status do Serviço:</span>
            <Badge variant={statusConfig[status].variant} className={cn('text-sm', statusConfig[status].className)}>
                <Power className="mr-2 h-4 w-4" />
                {statusConfig[status].text}
            </Badge>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
            <div className="grid gap-4 md:grid-cols-4">
                {serviceStats.map((stat) => (
                    <Card key={stat.title}>
                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                            <CardTitle className="text-sm font-medium">{stat.title}</CardTitle>
                            <stat.icon className="h-4 w-4 text-muted-foreground" />
                        </CardHeader>
                        <CardContent>
                            <div className="text-2xl font-bold">{stat.value}</div>
                        </CardContent>
                    </Card>
                ))}
            </div>

          <Card>
            <CardHeader>
              <CardTitle>Controles do Serviço</CardTitle>
              <CardDescription>Use os botões abaixo para gerenciar o estado do serviço.</CardDescription>
            </CardHeader>
            <CardContent className="flex gap-4">
              <Button onClick={handleStart} disabled={status === 'running'} className="bg-green-600 hover:bg-green-700">
                <Play className="mr-2 h-4 w-4" /> Iniciar Serviço
              </Button>
              <Button onClick={handleStop} disabled={status === 'stopped'} variant="destructive">
                <Square className="mr-2 h-4 w-4" /> Parar Serviço
              </Button>
              <Button onClick={handleRefresh} disabled={status !== 'running'} variant="outline">
                <RefreshCw className="mr-2 h-4 w-4" /> Forçar Atualização Agora
              </Button>
            </CardContent>
          </Card>

          <Card className="flex-grow flex flex-col">
            <CardHeader>
              <CardTitle>Logs de Atividade</CardTitle>
              <CardDescription>Registros de eventos do serviço em tempo real.</CardDescription>
            </CardHeader>
            <CardContent className="flex-grow">
                <ScrollArea className="h-64 w-full rounded-md border bg-muted/30 p-4">
                    <div className="font-mono text-xs space-y-2">
                    {logs.map((log, index) => (
                        <div key={index} className="flex gap-2">
                        <span className="text-muted-foreground">{new Date(log.timestamp).toLocaleTimeString()}</span>
                        <span className={cn('font-bold', 
                            log.level === 'INFO' && 'text-blue-500',
                            log.level === 'WARN' && 'text-yellow-500',
                            log.level === 'ERROR' && 'text-red-500',
                            log.level === 'SUCCESS' && 'text-green-500'
                        )}>[{log.level}]</span>
                        <p>{log.message}</p>
                        </div>
                    ))}
                    </div>
                </ScrollArea>
            </CardContent>
          </Card>
        </CardContent>
      </Card>
    </div>
  );
}
