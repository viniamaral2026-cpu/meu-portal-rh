
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { RefreshCw, Send } from 'lucide-react';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Label } from '@/components/ui/label';

const events = [
    { code: 'S-2200', description: 'Admissão', employee: 'Mariana Costa', status: 'sucesso', date: '2024-07-04' },
    { code: 'S-2230', description: 'Afastamento Temporário', employee: 'Pedro Santos', status: 'processando', date: '2024-07-03' },
    { code: 'S-1200', description: 'Remuneração', employee: 'João da Silva', status: 'erro', date: '2024-07-01' },
    { code: 'S-1210', description: 'Pagamentos', employee: 'Todos', status: 'sucesso', date: '2024-07-05' },
    { code: 'S-2299', description: 'Desligamento', employee: 'Carlos Pereira', status: 'aguardando', date: '2024-07-06' },
];

const statusVariant: { [key: string]: 'default' | 'secondary' | 'destructive' } = {
  sucesso: 'default',
  processando: 'secondary',
  erro: 'destructive',
  aguardando: 'secondary'
};

export default function EsocialPage() {
    return (
        <div className="p-4 space-y-4">
             <Card>
                <CardHeader className='flex-row items-center justify-between'>
                    <div>
                        <CardTitle>Painel do eSocial</CardTitle>
                        <CardDescription>Monitore, envie e consulte os eventos do eSocial.</CardDescription>
                    </div>
                     <div className='flex gap-2'>
                        <Button variant='outline'><RefreshCw className='mr-2 h-4 w-4' /> Consultar Status</Button>
                        <Button><Send className='mr-2 h-4 w-4' /> Enviar Pendentes</Button>
                    </div>
                </CardHeader>
                <CardContent>
                     <div className="flex items-end gap-4 mb-4">
                        <div className='space-y-2'>
                            <Label htmlFor='status'>Filtrar por Status</Label>
                            <Select>
                                <SelectTrigger id="status" className="w-48">
                                    <SelectValue placeholder="Todos" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="todos">Todos</SelectItem>
                                    <SelectItem value="sucesso">Sucesso</SelectItem>
                                    <SelectItem value="processando">Processando</SelectItem>
                                    <SelectItem value="erro">Com Erro</SelectItem>
                                    <SelectItem value="aguardando">Aguardando Envio</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>
                    </div>
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead>Evento</TableHead>
                                <TableHead>Descrição</TableHead>
                                <TableHead>Colaborador</TableHead>
                                <TableHead>Data</TableHead>
                                <TableHead>Status</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {events.map(event => (
                                <TableRow key={event.code + event.employee}>
                                    <TableCell className="font-medium">{event.code}</TableCell>
                                    <TableCell>{event.description}</TableCell>
                                    <TableCell>{event.employee}</TableCell>
                                    <TableCell>{new Date(event.date).toLocaleDateString()}</TableCell>
                                    <TableCell>
                                        <Badge variant={statusVariant[event.status] || 'secondary'} className="capitalize">{event.status}</Badge>
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
