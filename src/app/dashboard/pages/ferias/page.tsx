
'use client';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { CalendarClock, FilePlus2, Search } from 'lucide-react';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Label } from '@/components/ui/label';

const vacationData = [
  { id: 1, employee: 'João da Silva', period: '2022/2023', startDate: '2024-08-01', endDate: '2024-08-30', status: 'programada' },
  { id: 2, employee: 'Maria Oliveira', period: '2021/2022', startDate: '2024-06-01', endDate: '2024-06-30', status: 'gozada' },
  { id: 3, employee: 'Pedro Santos', period: '2023/2024', startDate: null, endDate: null, status: 'vencida' },
  { id: 4, employee: 'Ana Souza', period: '2022/2023', startDate: '2024-07-15', endDate: '2024-08-13', status: 'programada' },
  { id: 5, employee: 'Carlos Pereira', period: '2023/2024', startDate: null, endDate: null, status: 'a vencer' },
];

const statusVariant: { [key: string]: 'default' | 'secondary' | 'destructive' } = {
  programada: 'default',
  gozada: 'secondary',
  vencida: 'destructive',
  'a vencer': 'secondary'
};

export default function FeriasPage() {
    return (
        <div className="p-4 space-y-4">
            <Card>
                <CardHeader className='flex-row items-center justify-between'>
                    <div>
                        <CardTitle>Gestão de Férias</CardTitle>
                        <CardDescription>Controle períodos aquisitivos, programe e calcule férias.</CardDescription>
                    </div>
                     <Button><FilePlus2 className='mr-2 h-4 w-4' /> Programar Férias em Lote</Button>
                </CardHeader>
                <CardContent>
                    <div className="flex items-end gap-4 mb-4">
                        <div className='space-y-2'>
                            <Label htmlFor='period'>Período Aquisitivo</Label>
                            <Select>
                                <SelectTrigger id="period" className="w-48">
                                    <SelectValue placeholder="Todos" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="2023/2024">2023/2024</SelectItem>
                                    <SelectItem value="2022/2023">2022/2023</SelectItem>
                                    <SelectItem value="2021/2022">2021/2022</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>
                        <div className='space-y-2'>
                            <Label htmlFor='status'>Status</Label>
                             <Select>
                                <SelectTrigger id="status" className="w-48">
                                    <SelectValue placeholder="Todos" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="programada">Programada</SelectItem>
                                    <SelectItem value="gozada">Gozada</SelectItem>
                                    <SelectItem value="vencida">Vencida</SelectItem>
                                    <SelectItem value="a vencer">A Vencer</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>
                        <Button><Search className="mr-2 h-4 w-4"/> Buscar</Button>
                    </div>

                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead>Colaborador</TableHead>
                                <TableHead>Período Aquisitivo</TableHead>
                                <TableHead>Data de Início</TableHead>
                                <TableHead>Data de Fim</TableHead>
                                <TableHead>Status</TableHead>
                                <TableHead className="text-right">Ações</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {vacationData.map(item => (
                                <TableRow key={item.id}>
                                    <TableCell className="font-medium">{item.employee}</TableCell>
                                    <TableCell>{item.period}</TableCell>
                                    <TableCell>{item.startDate ? new Date(item.startDate).toLocaleDateString() : '-'}</TableCell>
                                    <TableCell>{item.endDate ? new Date(item.endDate).toLocaleDateString() : '-'}</TableCell>
                                    <TableCell>
                                        <Badge variant={statusVariant[item.status] || 'secondary'} className="capitalize">{item.status}</Badge>
                                    </TableCell>
                                    <TableCell className="text-right">
                                        <Button variant="outline" size="sm">
                                            <CalendarClock className="mr-2 h-4 w-4"/>
                                            Programar
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
