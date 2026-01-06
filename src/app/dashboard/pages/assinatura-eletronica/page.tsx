'use client';
import { Card, CardHeader, CardTitle, CardContent, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { FileSignature, Send, UserCheck, UserX, Clock } from 'lucide-react';

const documentos = [
  { id: 'DOC001', nome: 'Contrato de Trabalho - João Silva', enviadoEm: '20/07/2024', status: 'Assinado', assinadoEm: '21/07/2024' },
  { id: 'DOC002', nome: 'Política de Home Office', enviadoEm: '15/07/2024', status: 'Pendente', assinadoEm: '-' },
  { id: 'DOC003', nome: 'Termo de Confidencialidade - Maria Costa', enviadoEm: '10/07/2024', status: 'Assinado', assinadoEm: '10/07/2024' },
  { id: 'DOC004', nome: 'Aditivo Contratual - Todos', enviadoEm: '01/07/2024', status: 'Pendente', assinadoEm: '-' },
];

const getStatusVariant = (status: string) => {
    switch (status) {
        case 'Assinado': return 'default';
        case 'Pendente': return 'secondary';
        default: return 'outline';
    }
}


export default function AssinaturaEletronicaPage() {
  return (
    <div className="space-y-6">
       <Card>
        <CardHeader>
            <CardTitle>Painel de Assinatura Eletrônica</CardTitle>
            <CardDescription>Envie documentos e monitore o status das assinaturas dos colaboradores.</CardDescription>
        </CardHeader>
        <CardContent>
            <Button><Send className="mr-2 h-4 w-4" /> Enviar Novo Documento para Assinatura</Button>
        </CardContent>
      </Card>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium">Documentos Assinados</CardTitle>
                <UserCheck className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
                <div className="text-2xl font-bold">2</div>
                <p className="text-xs text-muted-foreground">de 4 documentos enviados</p>
            </CardContent>
        </Card>
         <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium">Assinaturas Pendentes</CardTitle>
                <UserX className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
                <div className="text-2xl font-bold">2</div>
                 <p className="text-xs text-muted-foreground">Aguardando ação do colaborador</p>
            </CardContent>
        </Card>
         <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium">Tempo Médio de Assinatura</CardTitle>
                <Clock className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
                <div className="text-2xl font-bold">18 Horas</div>
                 <p className="text-xs text-muted-foreground">Desde o envio do documento</p>
            </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
            <CardTitle>Histórico de Envios</CardTitle>
        </CardHeader>
        <CardContent>
             <Table>
                <TableHeader>
                    <TableRow>
                        <TableHead>Documento</TableHead>
                        <TableHead>Enviado em</TableHead>
                        <TableHead>Assinado em</TableHead>
                        <TableHead>Status</TableHead>
                        <TableHead>Ações</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {documentos.map(doc => (
                        <TableRow key={doc.id}>
                            <TableCell className="font-medium">{doc.nome}</TableCell>
                            <TableCell>{doc.enviadoEm}</TableCell>
                            <TableCell>{doc.assinadoEm}</TableCell>
                            <TableCell>
                               <Badge variant={getStatusVariant(doc.status) as any}>{doc.status}</Badge>
                            </TableCell>
                            <TableCell>
                                <Button variant="outline" size="sm">Ver Detalhes</Button>
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
