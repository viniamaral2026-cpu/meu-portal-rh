'use client';

import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { Switch } from '@/components/ui/switch';
import { useToast } from '@/hooks/use-toast';
import { PlusCircle, Edit, Trash2, TestTube2, History, Database, Webhook, FileCode, CheckCircle, XCircle, Loader2, Link } from 'lucide-react';

type ChannelType = 'database' | 'webhook' | 'file';
type ChannelStatus = 'active' | 'inactive' | 'error' | 'processing';

type Channel = {
    id: string;
    name: string;
    type: ChannelType;
    frequency: string;
    lastRun: string;
    status: ChannelStatus;
    enabled: boolean;
};

const initialChannels: Channel[] = [
    { id: 'ch1', name: 'Sincronizar Admissões do RM', type: 'database', frequency: 'A cada 1 hora', lastRun: '10/07/2024 14:00:05', status: 'active', enabled: true },
    { id: 'ch2', name: 'Exportar marcações de ponto', type: 'file', frequency: 'Diariamente às 02:00', lastRun: '10/07/2024 02:00:10', status: 'active', enabled: true },
    { id: 'ch3', name: 'Receber Férias do Portal RH', type: 'webhook', frequency: 'Tempo Real', lastRun: '10/07/2024 14:35:02', status: 'active', enabled: true },
    { id: 'ch4', name: 'Conector Contábil Senior', type: 'database', frequency: 'A cada 4 horas', lastRun: '10/07/2024 12:00:25', status: 'error', enabled: true },
    { id: 'ch5', name: 'Integração Legado (Desativado)', type: 'file', frequency: 'Manualmente', lastRun: 'N/A', status: 'inactive', enabled: false },
];

const typeConfig: { [key in ChannelType]: { text: string; icon: React.ReactNode } } = {
    database: { text: 'Banco de Dados', icon: <Database className="h-4 w-4" /> },
    webhook: { text: 'Webhook', icon: <Webhook className="h-4 w-4" /> },
    file: { text: 'Arquivo', icon: <FileCode className="h-4 w-4" /> },
};

const statusConfig: { [key in ChannelStatus]: { text: string; icon: React.ReactNode; badgeVariant: 'default' | 'destructive' | 'secondary' | 'outline' } } = {
    active: { text: 'Ativo', icon: <CheckCircle className="h-4 w-4 text-green-500" />, badgeVariant: 'default' },
    inactive: { text: 'Inativo', icon: <XCircle className="h-4 w-4 text-gray-500" />, badgeVariant: 'secondary' },
    error: { text: 'Erro', icon: <XCircle className="h-4 w-4 text-red-500" />, badgeVariant: 'destructive' },
    processing: { text: 'Processando', icon: <Loader2 className="h-4 w-4 animate-spin" />, badgeVariant: 'outline' },
};

const summaryCards = [
    { title: "Canais Ativos", value: initialChannels.filter(c => c.enabled).length, icon: Link },
    { title: "Sincronizações com Erro", value: initialChannels.filter(c => c.status === 'error').length, icon: XCircle },
    { title: "Eventos Processados (Hoje)", value: "1,482", icon: History },
];


export default function MeusCanaisPage() {
    const [channels, setChannels] = useState<Channel[]>(initialChannels);
    const { toast } = useToast();

    const handleToggle = (channelId: string, enabled: boolean) => {
        setChannels(prev =>
            prev.map(c => (c.id === channelId ? { ...c, enabled, status: enabled ? 'active' : 'inactive' } : c))
        );
        toast({
            title: `Canal ${enabled ? 'Ativado' : 'Desativado'}`,
            description: `O canal foi ${enabled ? 'reativado' : 'pausado'} com sucesso.`,
        });
    };
    
    const handleTest = (channelName: string) => {
        toast({
            title: "Testando Conexão...",
            description: `Iniciando teste de conexão para o canal "${channelName}".`
        });
        setTimeout(() => {
            toast({
                title: "Conexão Bem-Sucedida!",
                description: "O sistema conseguiu se conectar com a origem e o destino dos dados."
            });
        }, 2000);
    }

    return (
        <div className="p-4 space-y-4">
             <div className="grid gap-4 md:grid-cols-3">
                 {summaryCards.map((stat) => (
                    <Card key={stat.title}>
                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                            <CardTitle className="text-sm font-medium">{stat.title}</CardTitle>
                            <stat.icon className={`h-4 w-4 text-muted-foreground ${stat.title.includes('Erro') && stat.value > 0 ? 'text-destructive' : '' }`} />
                        </CardHeader>
                        <CardContent>
                            <div className="text-2xl font-bold">{stat.value}</div>
                        </CardContent>
                    </Card>
                ))}
            </div>
            
            <Card>
                <CardHeader className="flex-row items-center justify-between">
                    <div>
                        <CardTitle>Meus Canais de Integração (RM Conector)</CardTitle>
                        <CardDescription>Gerencie, monitore e configure os canais de comunicação.</CardDescription>
                    </div>
                    <Button>
                        <PlusCircle className="mr-2 h-4 w-4" /> Configurar Novo Canal
                    </Button>
                </CardHeader>
                <CardContent>
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead className="w-12"></TableHead>
                                <TableHead>Nome do Canal</TableHead>
                                <TableHead>Tipo</TableHead>
                                <TableHead>Frequência</TableHead>
                                <TableHead>Última Execução</TableHead>
                                <TableHead>Status</TableHead>
                                <TableHead className="text-right">Ações</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {channels.map((channel) => (
                                <TableRow key={channel.id} className={!channel.enabled ? 'opacity-50' : ''}>
                                    <TableCell>
                                        <Switch
                                            checked={channel.enabled}
                                            onCheckedChange={(checked) => handleToggle(channel.id, checked)}
                                            aria-label={`Ativar/desativar canal ${channel.name}`}
                                        />
                                    </TableCell>
                                    <TableCell className="font-medium">{channel.name}</TableCell>
                                    <TableCell>
                                        <div className="flex items-center gap-2">
                                            {typeConfig[channel.type].icon}
                                            {typeConfig[channel.type].text}
                                        </div>
                                    </TableCell>
                                    <TableCell>{channel.frequency}</TableCell>
                                    <TableCell>{channel.lastRun}</TableCell>
                                    <TableCell>
                                        <Badge variant={statusConfig[channel.status].badgeVariant} className="flex items-center gap-2 w-fit">
                                            {statusConfig[channel.status].icon}
                                            {statusConfig[channel.status].text}
                                        </Badge>
                                    </TableCell>
                                    <TableCell className="text-right space-x-2">
                                        <Button variant="outline" size="sm" onClick={() => handleTest(channel.name)}>
                                            <TestTube2 className="mr-2 h-4 w-4" /> Testar
                                        </Button>
                                         <Button variant="outline" size="sm">
                                            <History className="mr-2 h-4 w-4" /> Logs
                                        </Button>
                                        <Button variant="outline" size="icon">
                                            <Edit className="h-4 w-4" />
                                        </Button>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </CardContent>
            </Card>
        </div>
    );
}
