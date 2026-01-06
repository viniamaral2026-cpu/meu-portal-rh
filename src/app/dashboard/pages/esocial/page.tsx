'use client';
import { Card, CardHeader, CardTitle, CardContent, CardDescription } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { CheckCircle, AlertTriangle, Clock, Send } from 'lucide-react';
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from '@/components/ui/select';
import { Button } from '@/components/ui/button';

const eventos = [
  { id: 'S-2200', descricao: 'Cadastramento Inicial do Vínculo e Admissão', status: 'Sucesso', data: '25/07/2024 10:30', recibo: '1.2.123456789' },
  { id: 'S-1200', descricao: 'Remuneração de Trabalhador vinculado ao RGPS', status: 'Sucesso', data: '24/07/2024 18:00', recibo: '1.2.987654321' },
  { id: 'S-1210', descricao: 'Pagamentos de Rendimentos do Trabalho', status: 'Processando', data: '26/07/2024 09:15', recibo: '-' },
  { id: 'S-2230', descricao: 'Afastamento Temporário - Carlos Dias', status: 'Erro', data: '23/07/2024 14:00', recibo: '-' },
];

const getStatusInfo = (status: string) => {
    switch(status) {
        case 'Sucesso': return { icon: <CheckCircle className="text-green-500"/>, variant: 'default' };
        case 'Processando': return { icon: <Clock className="text-yellow-500"/>, variant: 'secondary' };
        case 'Erro': return { icon: <AlertTriangle className="text-red-500"/>, variant: 'destructive' };
        default: return { icon: <Clock />, variant: 'outline' };
    }
}

export default function EsocialPage() {
  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <div className="flex justify-between items-center">
            <div>
              <CardTitle>Painel de Monitoramento eSocial</CardTitle>
              <CardDescription>Acompanhe o status de envio dos eventos para o eSocial.</CardDescription>
            </div>
             <div className="flex items-center gap-4">
                <Select defaultValue="2024-07">
                    <SelectTrigger className="w-[180px]">
                        <SelectValue placeholder="Competência"/>
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="2024-07">Julho/2024</SelectItem>
                        <SelectItem value="2024-06">Junho/2024</SelectItem>
                    </SelectContent>
                </Select>
                 <Button><Send className="mr-2 h-4 w-4"/> Sincronizar Eventos</Button>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Status</TableHead>
                <TableHead>Evento</TableHead>
                <TableHead>Descrição</TableHead>
                <TableHead>Data de Envio</TableHead>
                <TableHead>Recibo</TableHead>
                <TableHead>Ação</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {eventos.map((e) => {
                  const statusInfo = getStatusInfo(e.status);
                  return (
                    <TableRow key={e.id}>
                        <TableCell>
                            <div className="flex items-center gap-2">
                                {statusInfo.icon}
                                <Badge variant={statusInfo.variant as any}>{e.status}</Badge>
                            </div>
                        </TableCell>
                        <TableCell className="font-medium">{e.id}</TableCell>
                        <TableCell>{e.descricao}</TableCell>
                        <TableCell>{e.data}</TableCell>
                        <TableCell className="font-mono text-xs">{e.recibo}</TableCell>
                        <TableCell>
                            <Button variant="outline" size="sm">
                                {e.status === 'Erro' ? 'Ver Erro' : 'Detalhes'}
                            </Button>
                        </TableCell>
                    </TableRow>
                  )
              })}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}
