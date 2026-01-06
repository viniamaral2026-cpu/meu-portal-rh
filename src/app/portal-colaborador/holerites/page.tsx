'use client';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Button } from '@/components/ui/button';
import { Download, FileText } from 'lucide-react';

const holerites = [
    { competencia: 'Junho/2024', tipo: 'Mensal', valor: 'R$ 3.850,21' },
    { competencia: 'Maio/2024', tipo: 'Mensal', valor: 'R$ 3.820,50' },
    { competencia: 'Abril/2024', tipo: 'Mensal', valor: 'R$ 3.910,00' },
    { competencia: 'Março/2024', tipo: 'Mensal', valor: 'R$ 3.780,90' },
    { competencia: 'Fevereiro/2024', tipo: 'Mensal', valor: 'R$ 3.800,00' },
    { competencia: 'Janeiro/2024', tipo: 'Mensal', valor: 'R$ 3.795,00' },
];

export default function HoleritesPage() {
    return (
        <div className="space-y-6">
             <h1 className="text-3xl font-bold">Meus Holerites</h1>
             <Card>
                <CardHeader>
                     <div className='flex items-center justify-between'>
                        <div>
                            <CardTitle>Histórico de Pagamentos</CardTitle>
                            <CardDescription>Acesse e baixe seus recibos de pagamento.</CardDescription>
                        </div>
                         <Select defaultValue="2024">
                            <SelectTrigger className="w-40">
                                <SelectValue />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="2024">Ano de 2024</SelectItem>
                                <SelectItem value="2023">Ano de 2023</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>
                </CardHeader>
                <CardContent className='space-y-3'>
                    {holerites.map(h => (
                        <Card key={h.competencia} className="p-4 flex items-center justify-between bg-muted/50">
                            <div className='flex items-center gap-4'>
                                <FileText className="h-6 w-6 text-primary" />
                                <div>
                                    <p className="font-semibold">{`Holerite - ${h.tipo} ${h.competencia}`}</p>
                                    <p className="text-sm text-muted-foreground">Valor líquido: {h.valor}</p>
                                </div>
                            </div>
                            <Button variant="outline">
                                <Download className="mr-2 h-4 w-4" />
                                Baixar PDF
                            </Button>
                        </Card>
                    ))}
                </CardContent>
             </Card>
        </div>
    );
}
