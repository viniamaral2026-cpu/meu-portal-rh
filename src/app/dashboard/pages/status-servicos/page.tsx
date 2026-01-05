'use client';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ScrollArea } from '@/components/ui/scroll-area';
import { cn } from '@/lib/utils';
import { CheckCircle, AlertTriangle, XCircle, Clock, Server, Settings, RefreshCw, Database, Mail } from 'lucide-react';
import { AreaChart, Area, ResponsiveContainer, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

type ServiceStatus = 'operational' | 'degraded' | 'outage';

type Service = {
    name: string;
    description: string;
    status: ServiceStatus;
    responseTime: number;
    icon: React.ReactNode;
};

const services: Service[] = [
    { name: 'API Principal', description: 'Serviço central de backend', status: 'operational', responseTime: 80, icon: <Server /> },
    { name: 'Banco de Dados', description: 'PostgreSQL - Cluster Primário', status: 'operational', responseTime: 120, icon: <Database /> },
    { name: 'Serviço de Email', description: 'Envio de notificações e relatórios', status: 'degraded', responseTime: 850, icon: <Mail /> },
    { name: 'Conector RM', description: 'Integração com TOTVS RM', status: 'operational', responseTime: 250, icon: <Settings /> },
    { name: 'Serviço de Fila', description: 'Processamento de tarefas em background', status: 'outage', responseTime: 0, icon: <Clock /> },
];

const statusConfig: { [key in ServiceStatus]: { text: string; icon: React.ReactNode; badgeClass: string } } = {
    operational: { text: 'Operacional', icon: <CheckCircle className="h-4 w-4" />, badgeClass: 'bg-green-500 hover:bg-green-500' },
    degraded: { text: 'Performance Degradada', icon: <AlertTriangle className="h-4 w-4" />, badgeClass: 'bg-yellow-500 hover:bg-yellow-500' },
    outage: { text: 'Fora do Ar', icon: <XCircle className="h-4 w-4" />, badgeClass: 'bg-red-500 hover:bg-red-500' },
};

const uptimeData = [
  { date: '10/07', uptime: 100 },
  { date: '11/07', uptime: 100 },
  { date: '12/07', uptime: 99.8 },
  { date: '13/07', uptime: 100 },
  { date: '14/07', uptime: 99.5 },
  { date: '15/07', uptime: 98.2 },
  { date: '16/07', uptime: 100 },
];

const incidentLogs = [
  { time: '10/07/2024 15:45', service: 'Serviço de Fila', message: 'Serviço não responde. Investigando a causa raiz.', status: 'outage' },
  { time: '10/07/2024 15:30', service: 'Serviço de Email', message: 'Latência aumentada detectada no envio de emails. Possível sobrecarga.', status: 'degraded' },
  { time: '09/07/2024 08:00', service: 'API Principal', message: 'Todos os sistemas operacionais.', status: 'operational' },
]

export default function StatusServicosPage() {
    const overallStatus: ServiceStatus = services.some(s => s.status === 'outage') ? 'outage' : services.some(s => s.status === 'degraded') ? 'degraded' : 'operational';

    return (
        <div className="p-4 space-y-6">
            <Card>
                <CardHeader className="flex-row items-center justify-between">
                    <div>
                        <CardTitle className="text-2xl">Status dos Serviços</CardTitle>
                        <CardDescription>Visão em tempo real da saúde de todos os componentes do sistema.</CardDescription>
                    </div>
                    <Button variant="outline"><RefreshCw className="mr-2 h-4 w-4" /> Atualizar</Button>
                </CardHeader>
                <CardContent>
                    <div className={cn("p-4 rounded-lg flex items-center gap-4", 
                        overallStatus === 'operational' && 'bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-200',
                        overallStatus === 'degraded' && 'bg-yellow-100 dark:bg-yellow-900/30 text-yellow-800 dark:text-yellow-200',
                        overallStatus === 'outage' && 'bg-red-100 dark:bg-red-900/30 text-red-800 dark:text-red-200',
                    )}>
                        {statusConfig[overallStatus].icon}
                        <span className="text-lg font-semibold">{overallStatus === 'operational' ? 'Todos os sistemas operacionais' : overallStatus === 'degraded' ? 'Performance degradada em alguns serviços' : 'Interrupção crítica em um ou mais serviços'}</span>
                    </div>
                </CardContent>
            </Card>

            <div className="space-y-4">
                {services.map(service => (
                    <Card key={service.name} className="flex items-center justify-between p-4">
                        <div className="flex items-center gap-4">
                            <div className="text-muted-foreground">{service.icon}</div>
                            <div>
                                <p className="font-semibold">{service.name}</p>
                                <p className="text-xs text-muted-foreground">{service.description}</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-6">
                            <p className="text-sm font-medium">{service.status === 'outage' ? 'N/A' : `${service.responseTime} ms`}</p>
                            <Badge className={statusConfig[service.status].badgeClass}>
                                {statusConfig[service.status].text}
                            </Badge>
                        </div>
                    </Card>
                ))}
            </div>

            <Card>
                <CardHeader>
                    <CardTitle>Uptime da API Principal (Últimos 7 dias)</CardTitle>
                </CardHeader>
                <CardContent className="h-64">
                    <ResponsiveContainer width="100%" height="100%">
                        <AreaChart data={uptimeData} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                            <defs>
                                <linearGradient id="colorUptime" x1="0" y1="0" x2="0" y2="1">
                                    <stop offset="5%" stopColor="hsl(var(--chart-1))" stopOpacity={0.8}/>
                                    <stop offset="95%" stopColor="hsl(var(--chart-1))" stopOpacity={0}/>
                                </linearGradient>
                            </defs>
                            <CartesianGrid strokeDasharray="3 3" vertical={false} />
                            <XAxis dataKey="date" fontSize={12} tickLine={false} axisLine={false} />
                            <YAxis domain={[95, 100]} unit="%" fontSize={12} tickLine={false} axisLine={false} />
                            <Tooltip formatter={(value: number) => `${value.toFixed(2)}%`} />
                            <Area type="monotone" dataKey="uptime" stroke="hsl(var(--chart-1))" fill="url(#colorUptime)" />
                        </AreaChart>
                    </ResponsiveContainer>
                </CardContent>
            </Card>
            
            <Card>
                <CardHeader>
                    <CardTitle>Incidentes Recentes</CardTitle>
                    <CardDescription>Log dos últimos eventos de status dos serviços.</CardDescription>
                </CardHeader>
                 <CardContent>
                    <ScrollArea className="h-48 w-full">
                        <div className="font-mono text-xs space-y-2">
                        {incidentLogs.map((log, index) => (
                            <div key={index} className="flex items-start gap-3 p-2 rounded-md bg-muted/50">
                                <span className="text-muted-foreground">{log.time}</span>
                                <div className={cn("w-2 h-2 rounded-full mt-1 flex-shrink-0", 
                                    log.status === 'operational' && 'bg-green-500',
                                    log.status === 'degraded' && 'bg-yellow-500',
                                    log.status === 'outage' && 'bg-red-500',
                                )}></div>
                                <p><span className='font-semibold'>[{log.service}]</span> {log.message}</p>
                            </div>
                        ))}
                        </div>
                    </ScrollArea>
                </CardContent>
            </Card>
        </div>
    );
}
