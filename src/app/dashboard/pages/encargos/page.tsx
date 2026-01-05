
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Label } from '@/components/ui/label';
import { FileDown, Search } from 'lucide-react';

const chargesData = [
    { type: 'INSS', value: 25430.50, guideStatus: 'gerada' },
    { type: 'FGTS', value: 32890.00, guideStatus: 'pendente' },
    { type: 'IRRF', value: 12500.75, guideStatus: 'gerada' },
];

export default function EncargosPage() {
    return (
        <div className="p-4 space-y-4">
            <Card>
                <CardHeader>
                    <CardTitle>Apuração de Encargos</CardTitle>
                    <CardDescription>Apure e emita as guias de recolhimento de encargos.</CardDescription>
                </CardHeader>
                <CardContent className="flex items-end gap-4">
                    <div className='space-y-2'>
                        <Label htmlFor='month'>Competência</Label>
                        <Select defaultValue='06/2024'>
                            <SelectTrigger id="month" className="w-48">
                                <SelectValue placeholder="Selecione" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="06/2024">Junho/2024</SelectItem>
                                <SelectItem value="05/2024">Maio/2024</SelectItem>
                                <SelectItem value="04/2024">Abril/2024</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>
                    <Button><Search className="mr-2 h-4 w-4"/> Apurar Encargos</Button>
                </CardContent>
            </Card>

             <Card>
                <CardHeader>
                    <CardTitle>Resumo da Competência: Junho/2024</CardTitle>
                </CardHeader>
                <CardContent>
                     <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead>Tipo de Encargo</TableHead>
                                <TableHead className="text-right">Valor Total (R$)</TableHead>
                                <TableHead className="text-center">Status da Guia</TableHead>
                                <TableHead className="text-right">Ação</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {chargesData.map((charge) => (
                            <TableRow key={charge.type}>
                                <TableCell className="font-medium">{charge.type}</TableCell>
                                <TableCell className="text-right">{charge.value.toFixed(2)}</TableCell>
                                <TableCell className="text-center capitalize">{charge.guideStatus}</TableCell>
                                <TableCell className="text-right">
                                    <Button variant="outline" size="sm">
                                        <FileDown className="mr-2 h-4 w-4" />
                                        {charge.guideStatus === 'gerada' ? 'Baixar Guia' : 'Gerar Guia'}
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
