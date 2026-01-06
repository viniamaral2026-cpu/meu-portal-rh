'use client';

import { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Clock, HardDrive, CheckCircle, AlertTriangle, RefreshCw, Terminal, Users, ListFilter, FileDown } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { ScrollArea } from '@/components/ui/scroll-area';

type RawPunch = {
  nsr: string; // Número Sequencial de Registro (do AFD)
  timestamp: string;
  pis_cpf: string;
  deviceId: string;
};

const initialPunches: RawPunch[] = [
  { nsr: '000158974', timestamp: '10/07/2024 08:02:15', pis_cpf: '123.456.789-00', deviceId: 'TERM-01' },
  { nsr: '000158973', timestamp: '10/07/2024 08:01:58', pis_cpf: '456.789.012-33', deviceId: 'TERM-02' },
  { nsr: '000158972', timestamp: '10/07/2024 07:59:45', pis_cpf: '567.890.123-44', deviceId: 'TERM-01' },
];

export default function RelogioPontoApiPage() {
    const [punches, setPunches] = useState<RawPunch[]>(initialPunches);
    const [logs, setLogs] = useState<string[]>([
        `[INFO] Worker Service de ponto iniciado. Aguardando eventos...`,
        `[SYNC] Enviando 1 novo colaborador para o terminal TERM-01...`,
        `[API] Conexão com API do terminal de ponto estabelecida.`,
    ]);
    const { toast } = useToast();

    useEffect(() => {
        const interval = setInterval(() => {
            const newLog = `[PONTO] Novo registro (NSR: 0001589${Math.floor(Math.random() * 900) + 100}) recebido do TERM-01.`;
            setLogs(prev => [newLog, ...prev.slice(0, 100)]);
        }, 12000); 
        return () => clearInterval(interval);
    }, []);
    
    const handleSync = () => {
        toast({
            title: "Sincronização Manual Iniciada",
            description: "Forçando a busca por novos registros no arquivo AFD dos terminais."
        });
        const newLog = `[SYNC] Sincronização manual (leitura de AFD) iniciada pelo usuário.`;
        setLogs(prev => [newLog, ...prev]);
    }
    
     const handleGenerateAEJ = () => {
        toast({
            title: "Geração do AEJ Iniciada",
            description: "O Arquivo Eletrônico de Jornada está sendo gerado para a competência atual."
        });
        const newLog = `[LEGAL] Geração do Arquivo Eletrônico de Jornada (AEJ) solicitada pelo usuário.`;
        setLogs(prev => [newLog, ...prev]);
    }

    return (
        <div className="p-4 space-y-4">
            <Card>
                <CardHeader>
                    <CardTitle className="flex items-center gap-3">
                        <Clock className="h-6 w-6"/> Integração com Relógio de Ponto (REP-P)
                    </CardTitle>
                    <CardDescription>
                        Monitore a comunicação com os terminais de ponto, o recebimento de batidas (via API e leitura de AFD) e o status do Worker Service de tratamento, conforme Portaria 671 do MTE.
                    </CardDescription>
                </CardHeader>
                <CardContent>
                     <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <Card>
                            <CardHeader className="flex flex-row items-center justify-between pb-2">
                                <CardTitle className="text-sm font-medium">Terminais Online</CardTitle>
                                <CheckCircle className="h-4 w-4 text-green-500" />
                            </CardHeader>
                            <CardContent>
                                <div className="text-2xl font-bold text-green-600">2 / 2</div>
                                <p className="text-xs text-muted-foreground">TERM-01, TERM-02</p>
                            </CardContent>
                        </Card>
                         <Card>
                            <CardHeader className="flex flex-row items-center justify-between pb-2">
                                <CardTitle className="text-sm font-medium">Batidas Brutas na Fila</CardTitle>
                                <HardDrive className="h-4 w-4 text-muted-foreground" />
                            </CardHeader>
                            <CardContent>
                                <div className="text-2xl font-bold">18</div>
                                <p className="text-xs text-muted-foreground">Aguardando processamento pelo motor de cálculo.</p>
                            </CardContent>
                        </Card>
                         <Card>
                            <CardHeader className="flex flex-row items-center justify-between pb-2">
                                <CardTitle className="text-sm font-medium">Erros de Sincronização (24h)</CardTitle>
                                <AlertTriangle className="h-4 w-4 text-destructive" />
                            </CardHeader>
                             <CardContent>
                                <div className="text-2xl font-bold text-red-600">1</div>
                                <p className="text-xs text-muted-foreground">CPF não encontrado no cadastro.</p>
                            </CardContent>
                        </Card>
                    </div>
                </CardContent>
            </Card>

             <div className="grid grid-cols-1 lg:grid-cols-5 gap-4">
                <Card className="lg:col-span-3">
                    <CardHeader className='flex-row items-center justify-between'>
                         <div>
                            <CardTitle>Batidas Brutas Recebidas (AFD)</CardTitle>
                            <CardDescription>Registros como vieram do relógio, antes do tratamento.</CardDescription>
                         </div>
                         <div className="flex items-center gap-2">
                            <Button variant="outline" size="sm" onClick={handleSync}><RefreshCw className="mr-2 h-4 w-4"/> Ler Arquivo AFD</Button>
                         </div>
                    </CardHeader>
                    <CardContent>
                        <Table>
                            <TableHeader>
                                <TableRow>
                                    <TableHead>NSR</TableHead>
                                    <TableHead>Data/Hora</TableHead>
                                    <TableHead>CPF / PIS</TableHead>
                                    <TableHead>Terminal</TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                {punches.map((p, i) => (
                                    <TableRow key={i}>
                                        <TableCell className="font-mono text-xs">{p.nsr}</TableCell>
                                        <TableCell>{p.timestamp}</TableCell>
                                        <TableCell className="font-medium">{p.pis_cpf}</TableCell>
                                        <TableCell><Badge variant="outline">{p.deviceId}</Badge></TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </CardContent>
                </Card>
                 <Card className="lg:col-span-2 flex flex-col">
                    <CardHeader>
                        <CardTitle className="flex items-center gap-2"><Terminal /> Log do Worker Service</CardTitle>
                        <CardDescription>Atividades do serviço de backend que processa os pontos.</CardDescription>
                    </CardHeader>
                    <CardContent className="flex-grow flex flex-col">
                        <ScrollArea className="h-64 w-full rounded-md border bg-black p-4 text-green-400">
                            <div className="font-mono text-xs space-y-2">
                                {logs.map((log, index) => (
                                    <p key={index}>{log}</p>
                                ))}
                            </div>
                        </ScrollArea>
                         <div className="flex gap-2 mt-4">
                             <Button variant="outline" size="sm" className='w-full'><Users className='mr-2 h-4 w-4'/> Sinc. Colaboradores</Button>
                             <Button variant="outline" size="sm" className='w-full' onClick={handleGenerateAEJ}><FileDown className='mr-2 h-4 w-4'/> Gerar Arquivo de Jornada (AEJ)</Button>
                         </div>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}
