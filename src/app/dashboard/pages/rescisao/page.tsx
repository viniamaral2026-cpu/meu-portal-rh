
'use client';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { UserX, FilePlus2, Search, Printer, FileDown } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

const terminationData = [
  { id: 1, employee: 'Ana Souza', date: '2024-06-28', type: 'Pedido de demissão', status: 'calculada' },
  { id: 2, employee: 'Roberto Lima', date: '2024-06-15', type: 'Demissão sem justa causa', status: 'paga' },
  { id: 3, employee: 'Marcos Rocha', date: '2024-05-30', type: 'Fim de contrato', status: 'paga' },
];

export default function RescisaoPage() {
    return (
        <div className="p-4 space-y-4">
            <Card>
                <CardHeader className='flex-row items-center justify-between'>
                    <div>
                        <CardTitle>Gestão de Rescisão</CardTitle>
                        <CardDescription>Calcule, controle e emita a documentação de rescisões de contrato.</CardDescription>
                    </div>
                     <Button><UserX className='mr-2 h-4 w-4' /> Calcular Nova Rescisão</Button>
                </CardHeader>
                <CardContent>
                    <div className="flex items-end gap-4 mb-4">
                         <div className='space-y-2'>
                            <Label htmlFor='employee'>Colaborador</Label>
                            <Input id='employee' placeholder="Nome ou matrícula..." />
                        </div>
                        <Button><Search className="mr-2 h-4 w-4"/> Buscar</Button>
                    </div>
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead>Colaborador</TableHead>
                                <TableHead>Data da Rescisão</TableHead>
                                <TableHead>Tipo</TableHead>
                                <TableHead>Status</TableHead>
                                <TableHead className="text-right">Ações</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {terminationData.map(item => (
                                <TableRow key={item.id}>
                                    <TableCell className="font-medium">{item.employee}</TableCell>
                                    <TableCell>{new Date(item.date).toLocaleDateString()}</TableCell>
                                    <TableCell>{item.type}</TableCell>
                                    <TableCell>
                                        <Badge variant={item.status === 'paga' ? 'default' : 'secondary'} className="capitalize">{item.status}</Badge>
                                    </TableCell>
                                    <TableCell className="text-right space-x-2">
                                        <Button variant="outline" size="sm"><Printer className="h-4 w-4"/></Button>
                                        <Button variant="outline" size="sm"><FileDown className="h-4 w-4"/></Button>
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
