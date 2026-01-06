'use client';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Clock, PlusCircle } from 'lucide-react';

const registros = [
    { dia: '10/07/2024', registros: '08:02, 12:05, 13:08, 18:01', horas: '09h 04m', saldo: '+0h 04m', corSaldo: 'text-green-600' },
    { dia: '09/07/2024', registros: 'Feriado', horas: '-', saldo: '-', corSaldo: '' },
    { dia: '08/07/2024', registros: '08:10, 12:00, 13:00, 17:50', horas: '08h 40m', saldo: '-0h 20m', corSaldo: 'text-red-600' },
    { dia: '07/07/2024', registros: 'Ausência Justificada', horas: '-', saldo: '-', corSaldo: '' },
    { dia: '06/07/2024', registros: '08:00, 12:00, 13:00, 18:00', horas: '09h 00m', saldo: '0h 00m', corSaldo: '' },
    { dia: '05/07/2024', registros: '08:05, 12:05, 13:05, 18:05', horas: '09h 00m', saldo: '0h 00m', corSaldo: '' },
];


export default function PontoPage() {
    return (
        <div className="space-y-6">
            <div className="flex items-center justify-between">
                <h1 className="text-3xl font-bold">Espelho de Ponto</h1>
                 <Button><PlusCircle className="mr-2 h-4 w-4" /> Solicitar Ajuste</Button>
            </div>
            <Card>
                <CardHeader>
                    <div className='flex items-center justify-between'>
                        <div>
                            <CardTitle>Meus Registros</CardTitle>
                            <CardDescription>Consulte suas marcações de ponto e o banco de horas.</CardDescription>
                        </div>
                        <div className="flex items-center gap-2">
                             <Select defaultValue="2024">
                                <SelectTrigger className="w-32">
                                    <SelectValue />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="2024">2024</SelectItem>
                                    <SelectItem value="2023">2023</SelectItem>
                                </SelectContent>
                            </Select>
                             <Select defaultValue="07">
                                <SelectTrigger className="w-40">
                                    <SelectValue />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="07">Julho</SelectItem>
                                    <SelectItem value="06">Junho</SelectItem>
                                    <SelectItem value="05">Maio</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>
                    </div>
                </CardHeader>
                <CardContent>
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead>Dia</TableHead>
                                <TableHead>Registros</TableHead>
                                <TableHead>Total de Horas</TableHead>
                                <TableHead>Banco de Horas (Saldo do Dia)</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {registros.map(reg => (
                                <TableRow key={reg.dia}>
                                    <TableCell className="font-medium">{reg.dia}</TableCell>
                                    <TableCell className="text-muted-foreground">{reg.registros}</TableCell>
                                    <TableCell>{reg.horas}</TableCell>
                                    <TableCell className={reg.corSaldo}>{reg.saldo}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </CardContent>
            </Card>
            <Card>
                <CardHeader>
                    <CardTitle className='flex items-center gap-2'><Clock/> Banco de Horas Total</CardTitle>
                </CardHeader>
                <CardContent>
                    <p className="text-4xl font-bold text-green-600">+12h 35m</p>
                    <p className="text-sm text-muted-foreground">Saldo acumulado positivo até o momento.</p>
                </CardContent>
            </Card>
        </div>
    );
}
