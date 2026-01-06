'use client';
import { Card, CardHeader, CardTitle, CardContent, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Checkbox } from '@/components/ui/checkbox';
import { Move, Copy, SlidersHorizontal, BarChart2 } from 'lucide-react';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

const dados = [
  { filial: 'Matriz', setor: 'Costura', cargo: 'Costureira', salario: 3200, absenteismo: 2.5 },
  { filial: 'Matriz', setor: 'Corte', cargo: 'Cortador', salario: 3500, absenteismo: 1.0 },
  { filial: 'Filial Sul', setor: 'Costura', cargo: 'Costureira', salario: 3100, absenteismo: 3.0 },
  { filial: 'Filial Sul', setor: 'Acabamento', cargo: 'Acabador', salario: 2900, absenteismo: 1.5 },
  { filial: 'Matriz', setor: 'Costura', cargo: 'Costureira', salario: 3250, absenteismo: 2.0 },
];

const dimensoes = ['Filial', 'Setor', 'Cargo'];
const metricas = ['Salário', 'Absenteísmo (%)'];

export default function CuboPage() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 h-full">
      <div className="lg:col-span-1">
        <Card className="h-full">
          <CardHeader>
            <CardTitle>Construtor do Cubo</CardTitle>
            <CardDescription>Arraste e solte para montar sua análise.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
              <h4 className="font-semibold text-sm mb-2">Dimensões (Linhas/Colunas)</h4>
              <div className="space-y-2 p-2 border rounded-md bg-muted/50">
                {dimensoes.map(d => (
                  <div key={d} className="flex items-center gap-2 p-2 bg-background rounded-md cursor-grab border">
                    <Move className="h-4 w-4 text-muted-foreground" />
                    <span>{d}</span>
                  </div>
                ))}
              </div>
            </div>
             <div>
              <h4 className="font-semibold text-sm mb-2">Métricas (Valores)</h4>
              <div className="space-y-2 p-2 border rounded-md bg-muted/50">
                {metricas.map(m => (
                  <div key={m} className="flex items-center gap-2 p-2 bg-background rounded-md cursor-grab border">
                     <Move className="h-4 w-4 text-muted-foreground" />
                    <span>{m}</span>
                  </div>
                ))}
              </div>
            </div>
            <div>
                <h4 className="font-semibold text-sm mb-2">Filtros</h4>
                <div className="space-y-3">
                    <Select>
                        <SelectTrigger><SelectValue placeholder="Filtrar por Filial..." /></SelectTrigger>
                    </Select>
                    <Select>
                        <SelectTrigger><SelectValue placeholder="Filtrar por Setor..." /></SelectTrigger>
                    </Select>
                </div>
            </div>
             <Button className="w-full"><SlidersHorizontal className="mr-2 h-4 w-4"/> Aplicar</Button>
          </CardContent>
        </Card>
      </div>

      <div className="lg:col-span-3">
        <Card className="h-full">
          <CardHeader>
            <div className="flex justify-between items-center">
                <div>
                    <CardTitle>Análise Dinâmica</CardTitle>
                    <CardDescription>Média Salarial por Setor e Filial</CardDescription>
                </div>
                <div className="flex gap-2">
                    <Button variant="outline"><BarChart2 className="mr-2 h-4 w-4"/> Ver como Gráfico</Button>
                    <Button variant="outline"><Copy className="mr-2 h-4 w-4"/> Exportar</Button>
                </div>
            </div>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Filial</TableHead>
                  <TableHead>Setor</TableHead>
                  <TableHead className="text-right">Salário Médio</TableHead>
                  <TableHead className="text-right">Absenteísmo Médio (%)</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell className="font-medium">Matriz</TableCell>
                  <TableCell>Costura</TableCell>
                  <TableCell className="text-right">R$ 3.225,00</TableCell>
                  <TableCell className="text-right">2.25%</TableCell>
                </TableRow>
                 <TableRow>
                  <TableCell className="font-medium">Matriz</TableCell>
                  <TableCell>Corte</TableCell>
                  <TableCell className="text-right">R$ 3.500,00</TableCell>
                  <TableCell className="text-right">1.00%</TableCell>
                </TableRow>
                 <TableRow>
                  <TableCell className="font-medium">Filial Sul</TableCell>
                  <TableCell>Costura</TableCell>
                  <TableCell className="text-right">R$ 3.100,00</TableCell>
                  <TableCell className="text-right">3.00%</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">Filial Sul</TableCell>
                  <TableCell>Acabamento</TableCell>
                  <TableCell className="text-right">R$ 2.900,00</TableCell>
                  <TableCell className="text-right">1.50%</TableCell>
                </TableRow>
                 <TableRow className="bg-muted/80 font-bold">
                  <TableCell colSpan={2}>Total Geral</TableCell>
                  <TableCell className="text-right">R$ 3.187,50</TableCell>
                  <TableCell className="text-right">1.88%</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
