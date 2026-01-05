'use client';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge }from '@/components/ui/badge';
import { cn } from '@/lib/utils';
import { Area, AreaChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';
import { CheckCircle, AlertTriangle, XCircle, Clock, Server, Settings, GitBranch, History } from 'lucide-react';
import { Separator } from '@/components/ui/separator';

const connectorStatus = {
    status: 'connected', // 'connected', 'error', 'disconnected'
    latency: '85ms',
    successRate: '99.8%',
    lastSync: '10/07/2024 15:30:02',
};

const statusConfig = {
    connected: { text: 'Conectado', icon: <CheckCircle className="h-6 w-6 text-green-500" />, variant: 'default' as const, badgeClass: 'bg-green-100 text-green-800' },
    error: { text: 'Com Erros', icon: <AlertTriangle className="h-6 w-6 text-yellow-500" />, variant: 'destructive' as const, badgeClass: 'bg-yellow-100 text-yellow-800' },
    disconnected: { text: 'Desconectado', icon: <XCircle className="h-6 w-6 text-red-500" />, variant: 'destructive' as const, badgeClass: 'bg-red-100 text-red-800' },
};

const activityData = [
  { time: '14:00', read: 1200, written: 800 },
  { time: '14:30', read: 1500, written: 950 },
  { time: '15:00', read: 1300, written: 1100 },
  { time: '15:30', read: 1800, written: 1400 },
  { time: '16:00', read: 1600, written: 1300 },
  { time: '16:30', read: 2100, written: 1800 },
  { time: '17:00', read: 1900, written: 1750 },
];

const recentLogs = [
  { level: 'INFO', message: 'Canal [Sincronizar Admissões] executado com sucesso. 2 novos registros processados.', time: '15:30:05' },
  { level: 'INFO', message: 'Canal [Exportar Marcações de Ponto] iniciado.', time: '15:00:10' },
  { level: 'SUCCESS', message: 'Canal [Exportar Marcações de Ponto] concluído. 1450 registros exportados.', time: '15:01:25' },
  { level: 'WARN', message: 'Conexão com o serviço de férias do RM apresentou latência elevada (250ms).', time: '14:45:15' },
  { level: 'ERROR', message: 'Falha ao processar o registro de colaborador ID 5587. Campo "CPF" inválido no RM.', time: '14:30:12' },
];

export default function RmConectorPage() {
    return (
        <div className="p-4 space-y-6">
            <Card>
                <CardHeader>
                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-4">
                            {statusConfig[connectorStatus.status as keyof typeof statusConfig].icon}
                            <div>
                                <CardTitle className="text-2xl">Status do RM Conector</CardTitle>
                                <CardDescription>Visão geral da saúde e performance da integração com o TOTVS RM.</CardDescription>
                            </div>
                        </div>
                         <Badge className={cn("text-base px-4 py-2", statusConfig[connectorStatus.status as keyof typeof statusConfig].badgeClass)}>
                            {statusConfig[connectorStatus.status as keyof typeof statusConfig].text}
                        </Badge>
                    </div>
                </CardHeader>
                <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-3 divide-x border rounded-lg p-4 bg-muted/50">
                        <div className='px-4'>
                            <p className='text-sm text-muted-foreground'>Latência da API</p>
                            <p className='text-2xl font-bold'>{connectorStatus.latency}</p>
                        </div>
                         <div className='px-4'>
                            <p className='text-sm text-muted-foreground'>Taxa de Sucesso (24h)</p>
                            <p className='text-2xl font-bold'>{connectorStatus.successRate}</p>
                        </div>
                        <div className='px-4'>
                            <p className='text-sm text-muted-foreground'>Última Sincronização</p>
                            <p className='text-2xl font-bold'>{connectorStatus.lastSync}</p>
                        </div>
                    </div>
                </CardContent>
            </Card>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <Card className="flex flex-col">
                    <CardHeader>
                        <CardTitle>Atividade da Integração (Últimas 3 Horas)</CardTitle>
                    </CardHeader>
                    <CardContent className="flex-grow">
                        <ResponsiveContainer width="100%" height={250}>
                            <AreaChart data={activityData}>
                                <defs>
                                    <linearGradient id="colorRead" x1="0" y1="0" x2="0" y2="1">
                                        <stop offset="5%" stopColor="hsl(var(--chart-1))" stopOpacity={0.8}/>
                                        <stop offset="95%" stopColor="hsl(var(--chart-1))" stopOpacity={0}/>
                                    </linearGradient>
                                    <linearGradient id="colorWritten" x1="0" y1="0" x2="0" y2="1">
                                        <stop offset="5%" stopColor="hsl(var(--chart-2))" stopOpacity={0.8}/>
                                        <stop offset="95%" stopColor="hsl(var(--chart-2))" stopOpacity={0}/>
                                    </linearGradient>
                                </defs>
                                <CartesianGrid strokeDasharray="3 3" vertical={false} />
                                <XAxis dataKey="time" fontSize={12} tickLine={false} axisLine={false} />
                                <YAxis fontSize={12} tickLine={false} axisLine={false} />
                                <Tooltip
                                  contentStyle={{
                                    backgroundColor: "hsl(var(--background))",
                                    borderColor: "hsl(var(--border))"
                                  }}
                                />
                                <Area type="monotone" dataKey="read" name="Registros Lidos" stroke="hsl(var(--chart-1))" fill="url(#colorRead)" />
                                <Area type="monotone" dataKey="written" name="Registros Escritos" stroke="hsl(var(--chart-2))" fill="url(#colorWritten)" />
                            </AreaChart>
                        </ResponsiveContainer>
                    </CardContent>
                </Card>

                <Card>
                    <CardHeader>
                        <CardTitle>Ações e Configurações</CardTitle>
                        <CardDescription>Gerencie as configurações e o comportamento do conector.</CardDescription>
                    </CardHeader>
                    <CardContent className="grid grid-cols-2 gap-4">
                        <Button variant="outline" className='h-20 flex-col items-start p-4 gap-2'>
                            <div className='flex items-center gap-2'><Server size={18}/> <span className='font-bold'>Credenciais de Acesso</span></div>
                            <p className='text-xs text-muted-foreground text-left'>Gerenciar tokens e senhas de API</p>
                        </Button>
                         <Button variant="outline" className='h-20 flex-col items-start p-4 gap-2'>
                            <div className='flex items-center gap-2'><GitBranch size={18}/> <span className='font-bold'>Mapeamento de Dados</span></div>
                            <p className='text-xs text-muted-foreground text-left'>Configurar "De-Para" de campos</p>
                        </Button>
                         <Button variant="outline" className='h-20 flex-col items-start p-4 gap-2'>
                            <div className='flex items-center gap-2'><Clock size={18}/> <span className='font-bold'>Agendamentos</span></div>
                            <p className='text-xs text-muted-foreground text-left'>Definir frequência das sincronizações</p>
                        </Button>
                         <Button variant="outline" className='h-20 flex-col items-start p-4 gap-2'>
                            <div className='flex items-center gap-2'><Settings size={18}/> <span className='font-bold'>Parâmetros Gerais</span></div>
                            <p className='text-xs text-muted-foreground text-left'>Ajustar timeouts e comportamento</p>
                        </Button>
                    </CardContent>
                </Card>
            </div>

            <Card>
                <CardHeader>
                    <CardTitle className="flex items-center gap-2"><History size={18}/> Logs Recentes do Conector</CardTitle>
                </CardHeader>
                <CardContent>
                    <div className="font-mono text-xs space-y-3 bg-muted/50 p-4 rounded-lg h-64 overflow-y-auto">
                        {recentLogs.map((log, i) => (
                             <div key={i} className="flex items-start gap-3">
                                <span className='text-muted-foreground/80'>{log.time}</span>
                                 <span className={cn('font-bold', {
                                    'text-blue-500': log.level === 'INFO',
                                    'text-green-500': log.level === 'SUCCESS',
                                    'text-yellow-500': log.level === 'WARN',
                                    'text-red-500': log.level === 'ERROR',
                                 })}>[{log.level}]</span>
                                <p className="break-all">{log.message}</p>
                             </div>
                        ))}
                    </div>
                </CardContent>
            </Card>
        </div>
    );
}
