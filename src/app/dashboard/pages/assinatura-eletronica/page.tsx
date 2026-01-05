
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { FilePlus2, RefreshCw } from 'lucide-react';

const documents = [
  { id: 'DOC001', name: 'Holerite - Junho/2024', employee: 'João da Silva', status: 'assinado', date: '2024-07-05' },
  { id: 'DOC002', name: 'Contrato de Trabalho', employee: 'Mariana Costa', status: 'pendente', date: '2024-07-04' },
  { id: 'DOC003', name: 'Aviso de Férias', employee: 'Carlos Pereira', status: 'visualizado', date: '2024-07-03' },
  { id: 'DOC004', name: 'Holerite - Junho/2024', employee: 'Ana Souza', status: 'assinado', date: '2024-07-05' },
  { id: 'DOC005', name: 'Termo de Confidencialidade', employee: 'Pedro Santos', status: 'recusado', date: '2024-07-02' },
];

const statusVariant: { [key: string]: 'default' | 'secondary' | 'destructive' } = {
  assinado: 'default',
  pendente: 'secondary',
  visualizado: 'secondary',
  recusado: 'destructive'
};

export default function AssinaturaEletronicaPage() {
    return (
        <div className="p-4">
            <Card>
                <CardHeader className='flex-row items-center justify-between'>
                    <div>
                        <CardTitle>Assinatura Eletrônica</CardTitle>
                        <CardDescription>Gerencie e acompanhe documentos enviados para assinatura.</CardDescription>
                    </div>
                    <div className='flex gap-2'>
                        <Button variant='outline'><RefreshCw className='mr-2 h-4 w-4' /> Atualizar Status</Button>
                        <Button><FilePlus2 className='mr-2 h-4 w-4' /> Novo Envio em Lote</Button>
                    </div>
                </CardHeader>
                <CardContent>
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead>Documento</TableHead>
                                <TableHead>Colaborador</TableHead>
                                <TableHead>Data de Envio</TableHead>
                                <TableHead>Status</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {documents.map(doc => (
                                <TableRow key={doc.id}>
                                    <TableCell className="font-medium">{doc.name}</TableCell>
                                    <TableCell>{doc.employee}</TableCell>
                                    <TableCell>{new Date(doc.date).toLocaleDateString()}</TableCell>
                                    <TableCell>
                                        <Badge variant={statusVariant[doc.status] || 'secondary'} className="capitalize">{doc.status}</Badge>
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
