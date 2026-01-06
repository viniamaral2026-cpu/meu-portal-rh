'use client';
import { Card, CardHeader, CardTitle, CardContent, CardDescription, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Switch } from '@/components/ui/switch';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { Link, Save, Power, PowerOff, RefreshCw, CheckCircle, AlertTriangle } from 'lucide-react';
import Image from 'next/image';

const logs = [
    {id: 1, data: '26/07/2024 10:00', tipo: 'Importação', entidade: 'Funcionários', status: 'Sucesso', detalhes: '5 novos registros importados.'},
    {id: 2, data: '26/07/2024 09:30', tipo: 'Exportação', entidade: 'Apontamentos de Ponto', status: 'Sucesso', detalhes: '150 registros exportados.'},
    {id: 3, data: '25/07/2024 18:00', tipo: 'Importação', entidade: 'Ordens de Produção', status: 'Erro', detalhes: 'Timeout na conexão com o endpoint.'},
];

export default function RmConectorPage() {
  return (
    <div className="space-y-6">
       <Card>
        <CardHeader className="flex flex-row items-center gap-4">
            <Image src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_3_Bw7EltI9vXzP_L9Y7eC_qKjXkP-s_jlw&s" alt="Senior Logo" width={48} height={48} />
            <div>
                <CardTitle>Conector de Integração (ERP Senior)</CardTitle>
                <CardDescription>Configure e monitore a sincronização de dados com seu ERP.</CardDescription>
            </div>
        </CardHeader>
        <CardContent className="flex items-center justify-between p-4 bg-muted/50 rounded-b-lg">
            <div className="flex items-center gap-2">
                <Power className="h-5 w-5 text-green-500" />
                <span className="font-semibold">Serviço de Sincronização: Ativo</span>
            </div>
            <div className="flex gap-2">
                <Button variant="destructive"><PowerOff className="mr-2 h-4 w-4"/> Parar Serviço</Button>
                <Button><RefreshCw className="mr-2 h-4 w-4"/> Sincronizar Agora</Button>
            </div>
        </CardContent>
      </Card>
      
       <Card>
        <CardHeader>
            <CardTitle>Configuração da Conexão</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
            <div className="space-y-2">
                <Label htmlFor="endpoint">Endpoint da API (REST/SOAP)</Label>
                <Input id="endpoint" defaultValue="https://api.senior.com.br/gestaopessoal/v1" />
            </div>
            <div className="grid grid-cols-2 gap-4">
                 <div className="space-y-2">
                    <Label htmlFor="user">Usuário</Label>
                    <Input id="user" />
                </div>
                 <div className="space-y-2">
                    <Label htmlFor="pass">Senha</Label>
                    <Input id="pass" type="password" />
                </div>
            </div>
             <div className="flex items-center space-x-2 pt-2">
                <Switch id="auto-sync" defaultChecked/>
                <Label htmlFor="auto-sync">Habilitar sincronização automática (a cada 1 hora)</Label>
            </div>
        </CardContent>
        <CardFooter className="gap-2">
            <Button variant="secondary">Testar Conexão</Button>
            <Button><Save className="mr-2 h-4 w-4"/> Salvar Configuração</Button>
        </CardFooter>
      </Card>

       <Card>
        <CardHeader>
            <CardTitle>Logs de Integração</CardTitle>
        </CardHeader>
        <CardContent>
            <Table>
                <TableHeader><TableRow>
                    <TableHead>Data/Hora</TableHead>
                    <TableHead>Tipo</TableHead>
                    <TableHead>Entidade</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Detalhes</TableHead>
                </TableRow></TableHeader>
                <TableBody>
                    {logs.map(log => (
                        <TableRow key={log.id}>
                            <TableCell>{log.data}</TableCell>
                            <TableCell>{log.tipo}</TableCell>
                            <TableCell className="font-medium">{log.entidade}</TableCell>
                            <TableCell>
                               <Badge variant={log.status === 'Sucesso' ? 'default' : 'destructive'} className="flex items-center w-fit">
                                    {log.status === 'Sucesso' ? <CheckCircle className="h-3 w-3 mr-1"/> : <AlertTriangle className="h-3 w-3 mr-1"/>}
                                    {log.status}
                                </Badge>
                            </TableCell>
                            <TableCell>{log.detalhes}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </CardContent>
      </Card>

    </div>
  );
}
