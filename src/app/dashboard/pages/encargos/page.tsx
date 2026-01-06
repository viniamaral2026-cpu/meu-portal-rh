'use client';
import { Card, CardHeader, CardTitle, CardContent, CardDescription } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { FileDown, Percent } from 'lucide-react';
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from '@/components/ui/select';
import { Button } from '@/components/ui/button';

const encargos = [
  { encargo: 'INSS Patronal', aliquota: '20.00%', base: 'R$ 450.000,00', valor: 'R$ 90.000,00' },
  { encargo: 'FGTS', aliquota: '8.00%', base: 'R$ 450.000,00', valor: 'R$ 36.000,00' },
  { encargo: 'RAT (Risco Ambiental do Trabalho)', aliquota: '2.00%', base: 'R$ 450.000,00', valor: 'R$ 9.000,00' },
  { encargo: 'Terceiros (Sistema S)', aliquota: '5.80%', base: 'R$ 450.000,00', valor: 'R$ 26.100,00' },
  { encargo: 'Provisão de Férias', aliquota: '11.11%', base: 'R$ 450.000,00', valor: 'R$ 49.995,00' },
  { encargo: 'Provisão de 13º Salário', aliquota: '8.33%', base: 'R$ 450.000,00', valor: 'R$ 37.485,00' },
];

const totalBase = 450000;
const totalEncargos = 248580;

export default function EncargosPage() {
  return (
    <Card>
      <CardHeader>
        <div className="flex justify-between items-center">
            <div>
                <CardTitle className="flex items-center"><Percent className="mr-2"/> Gestão de Encargos Sociais</CardTitle>
                <CardDescription>Visualize os encargos calculados para a competência selecionada.</CardDescription>
            </div>
            <div className="flex items-center gap-4">
                <Select defaultValue="2024-07">
                    <SelectTrigger className="w-[180px]">
                        <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="2024-07">Julho/2024</SelectItem>
                        <SelectItem value="2024-06">Junho/2024</SelectItem>
                        <SelectItem value="2024-05">Maio/2024</SelectItem>
                    </SelectContent>
                </Select>
                 <Button variant="outline"><FileDown className="mr-2 h-4 w-4"/> Exportar Guia</Button>
            </div>
        </div>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Encargo</TableHead>
              <TableHead>Alíquota</TableHead>
              <TableHead>Base de Cálculo</TableHead>
              <TableHead className="text-right">Valor do Encargo</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {encargos.map((e) => (
                <TableRow key={e.encargo}>
                    <TableCell className="font-medium">{e.encargo}</TableCell>
                    <TableCell>{e.aliquota}</TableCell>
                    <TableCell>{e.base}</TableCell>
                    <TableCell className="text-right">{e.valor}</TableCell>
                </TableRow>
            ))}
          </TableBody>
           <TableRow className="bg-muted/50 font-bold">
              <TableCell colSpan={2}>Totais</TableCell>
              <TableCell>{totalBase.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</TableCell>
              <TableCell className="text-right">{totalEncargos.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</TableCell>
            </TableRow>
        </Table>
        <div className="mt-6 p-4 bg-blue-50 border border-blue-200 rounded-lg text-center">
            <h4 className="font-semibold text-blue-800">Custo Total da Folha</h4>
            <p className="text-2xl font-bold text-blue-900 mt-1">
                {(totalBase + totalEncargos).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
            </p>
            <p className="text-sm text-blue-700">(Salário Base + Total de Encargos)</p>
        </div>
      </CardContent>
    </Card>
  );
}
