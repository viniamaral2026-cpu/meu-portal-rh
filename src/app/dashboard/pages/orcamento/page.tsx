'use client';
import { Card, CardHeader, CardTitle, CardContent, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { FilePlus, Copy, BarChart2 } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from '@/components/ui/select';

const orcamentoData = [
  { setor: 'Produção', orcado: 4200000, realizado: 4350000, variacao: 3.57 },
  { setor: 'Administrativo', orcado: 960000, realizado: 950000, variacao: -1.04 },
  { setor: 'Vendas', orcado: 780000, realizado: 810000, variacao: 3.85 },
  { setor: 'RH', orcado: 540000, realizado: 535000, variacao: -0.93 },
  { setor: 'TI', orcado: 660000, realizado: 680000, variacao: 3.03 },
];

export default function OrcamentoPage() {
  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <div className="flex justify-between items-center">
            <div>
              <CardTitle>Orçamento de Pessoal (Beta)</CardTitle>
              <CardDescription>Planeje e acompanhe os custos com pessoal para o ano fiscal.</CardDescription>
            </div>
             <div className="flex items-center gap-4">
                <Select defaultValue="2024">
                    <SelectTrigger className="w-[180px]">
                        <SelectValue placeholder="Ano Fiscal"/>
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="2024">Ano de 2024</SelectItem>
                        <SelectItem value="2023">Ano de 2023</SelectItem>
                    </SelectContent>
                </Select>
                 <Button variant="outline"><FilePlus className="mr-2 h-4 w-4"/> Nova Revisão</Button>
            </div>
          </div>
        </CardHeader>
      </Card>

      <Card>
        <CardHeader>
            <div className="flex justify-between items-center">
                <CardTitle>Orçado vs. Realizado - Acumulado do Ano</CardTitle>
                <div className="flex gap-2">
                    <Button variant="outline"><Copy className="mr-2 h-4 w-4"/> Exportar</Button>
                    <Button variant="outline"><BarChart2 className="mr-2 h-4 w-4"/> Ver Gráfico</Button>
                </div>
            </div>
        </CardHeader>
        <CardContent>
            <Table>
                <TableHeader>
                    <TableRow>
                        <TableHead>Setor</TableHead>
                        <TableHead className="text-right">Orçado (R$)</TableHead>
                        <TableHead className="text-right">Realizado (R$)</TableHead>
                        <TableHead className="text-right">Variação (%)</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {orcamentoData.map(item => (
                        <TableRow key={item.setor}>
                            <TableCell className="font-medium">{item.setor}</TableCell>
                            <TableCell className="text-right">{item.orcado.toLocaleString('pt-BR')}</TableCell>
                            <TableCell className="text-right">{item.realizado.toLocaleString('pt-BR')}</TableCell>
                            <TableCell className="text-right">
                                <Badge variant={item.variacao < 0 ? 'default' : 'destructive'}>
                                    {item.variacao.toFixed(2)}%
                                </Badge>
                            </TableCell>
                        </TableRow>
                    ))}
                    <TableRow className="font-bold bg-muted/50">
                        <TableCell>Total</TableCell>
                        <TableCell className="text-right">7.140.000</TableCell>
                        <TableCell className="text-right">7.325.000</TableCell>
                        <TableCell className="text-right">
                             <Badge variant={'destructive'}>2.59%</Badge>
                        </TableCell>
                    </TableRow>
                </TableBody>
            </Table>
        </CardContent>
      </Card>
    </div>
  );
}
