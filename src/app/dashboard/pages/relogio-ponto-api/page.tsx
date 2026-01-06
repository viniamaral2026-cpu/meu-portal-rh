'use client';

import { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Clock, HardDrive, CheckCircle, AlertTriangle, RefreshCw, Terminal } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { ScrollArea } from '@/components/ui/scroll-area';

type PunchLog = {
  timestamp: string;
  employeeId: string;
  employeeName: string;
  deviceId: string;
};

const initialPunches: PunchLog[] = [
  { timestamp: '08:02:15', employeeId: '001', employeeName: 'Ana Silva', deviceId: 'TERM-01' },
  { timestamp: '08:01:58', employeeId: '004', employeeName: 'Daniela Souza', deviceId: 'TERM-02' },
  { timestamp: '07:59:45', employeeId: '005', employeeName: 'Eduardo Lima', deviceId: 'TERM-01' },
];


export default function RelogioPontoApiPage() {
    const [punches, setPunches] = useState<PunchLog[]>(initialPunches);
    const [logs, setLogs] = useState<string[]>(['[INFO] Conexão com API do terminal de ponto estabelecida.']);
    const { toast } = useToast();

    useEffect(() => {
        const interval = setInterval(() => {
            const newLog = `[PONTO] Novo registro recebido do TERM-01 - Matrícula: 00${Math.floor(Math.random() * 5) + 1}`;
            setLogs(prev => [newLog, ...prev.slice(0, 100)]);
        }, 8000); // Adiciona um novo log a cada 8 segundos para simular a API
        return () => clearInterval(interval);
    }, []);
    
    const handleSync = () => {
        toast({
            title: "Sincronização Manual Iniciada",
            description: "Forçando a busca por novos registros nos terminais."
        });
        const newLog = `[SYNC] Sincronização manual iniciada pelo usuário.`;
        setLogs(prev => [newLog, ...prev]);
    }

    return (
        <div className="p-4 space-y-4">
            <Card>
                <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                        <Clock /> Integração com Relógio de Ponto (API)
                    </CardTitle>
                    <CardDescription>
                        Monitore a comunicação e os registros recebidos dos terminais de ponto físicos.
                    </CardDescription>
                </CardHeader>
                <CardContent>
                     <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <Card>
                            <CardHeader className="flex flex-row items-center justify-between pb-2">
                                <CardTitle className="text-sm font-medium">Status da Conexão</CardTitle>
                                <CheckCircle className="h-4 w-4 text-green-500" />
                            </CardHeader>
                            <CardContent>
                                <div className="text-xl font-bold text-green-600">Conectado</div>
                                <p className="text-xs text-muted-foreground">2 terminais online</p>
                            </CardContent>
                        </Card>
                         <Card>
                            <CardHeader className="flex flex-row items-center justify-between pb-2">
                                <CardTitle className="text-sm font-medium">Última Sincronização</CardTitle>
                                <RefreshCw className="h-4 w-4 text-muted-foreground" />
                            </CardHeader>
                            <CardContent>
                                <div className="text-xl font-bold">1 minuto atrás</div>
                                <p className="text-xs text-muted-foreground">Sincronização automática</p>
                            </CardContent>
                        </Card>
                         <Card>
                            <CardHeader className="flex flex-row items-center justify-between pb-2">
                                <CardTitle className="text-sm font-medium">Registros Hoje</CardTitle>
                                <HardDrive className="h-4 w-4 text-muted-foreground" />
                            </CardHeader>
                            <CardContent>
                                <div className="text-xl font-bold">342 Registros</div>
                                <p className="text-xs text-muted-foreground">3 com erro de leitura</p>
                            </CardContent>
                        </Card>
                    </div>
                </CardContent>
            </Card>

             <div className="grid grid-cols-1 lg:grid-cols-5 gap-4">
                <Card className="lg:col-span-3">
                    <CardHeader>
                        <CardTitle>Registros de Ponto Recentes</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <Table>
                            <TableHeader>
                                <TableRow>
                                    <TableHead>Horário</TableHead>
                                    <TableHead>Matrícula</TableHead>
                                    <TableHead>Colaborador</TableHead>
                                    <TableHead>Terminal</TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                {punches.map((p, i) => (
                                    <TableRow key={i}>
                                        <TableCell>{p.timestamp}</TableCell>
                                        <TableCell>{p.employeeId}</TableCell>
                                        <TableCell className="font-medium">{p.employeeName}</TableCell>
                                        <TableCell><Badge variant="outline">{p.deviceId}</Badge></TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </CardContent>
                </Card>
                 <Card className="lg:col-span-2 flex flex-col">
                    <CardHeader>
                        <CardTitle className="flex items-center gap-2"><Terminal /> Log da API</CardTitle>
                    </CardHeader>
                    <CardContent className="flex-grow">
                        <ScrollArea className="h-64 w-full rounded-md border bg-muted/30 p-4">
                            <div className="font-mono text-xs space-y-2">
                                {logs.map((log, index) => (
                                    <p key={index}>{log}</p>
                                ))}
                            </div>
                        </ScrollArea>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}
