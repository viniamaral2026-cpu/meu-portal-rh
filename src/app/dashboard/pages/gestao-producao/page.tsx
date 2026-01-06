'use client';
import { Card, CardHeader, CardTitle, CardContent, CardDescription } from '@/components/ui/card';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, LineChart, Line } from 'recharts';
import { Factory, PackageCheck, AlertTriangle, Boxes } from 'lucide-react';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Badge } from '@/components/ui/badge';

const producaoPorLinha = [
  { name: 'Linha A (Corte)', Produzido: 4500, Meta: 5000 },
  { name: 'Linha B (Costura)', Produzido: 8200, Meta: 8000 },
  { name: 'Linha C (Montagem)', Produzido: 7500, Meta: 7500 },
  { name: 'Linha D (Acabamento)', Produzido: 7800, Meta: 8000 },
];

const oeeData = [
  { month: 'Jan', OEE: 82 },
  { month: 'Fev', OEE: 85 },
  { month: 'Mar', OEE: 83 },
  { month: 'Abr', OEE: 88 },
  { month: 'Mai', OEE: 90 },
  { month: 'Jun', OEE: 89 },
]

const ordens = [
    { id: 'OP-7891', produto: 'Sapato Social Couro Preto', status: 'Em Produção', progresso: 75 },
    { id: 'OP-7892', produto: 'Bota Coturno Marrom', status: 'Atrasada', progresso: 40 },
    { id: 'OP-7893', produto: 'Tênis Casual Branco', status: 'Concluída', progresso: 100 },
    { id: 'OP-7894', produto: 'Sandália Feminina', status: 'Aguardando Início', progresso: 0 },
]

export default function GestaoProducaoPage() {
  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
            <CardTitle>Dashboard de Gestão de Produção</CardTitle>
            <CardDescription>Acompanhe em tempo real a eficiência e o status da sua fábrica.</CardDescription>
        </CardHeader>
      </Card>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Produção Total (Hoje)</CardTitle>
            <Factory className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">1.254 pares</div>
            <p className="text-xs text-muted-foreground">Meta diária: 1.500 pares</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Eficiência Geral (OEE)</CardTitle>
            <PackageCheck className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">89%</div>
            <p className="text-xs text-muted-foreground">+2% em relação a ontem</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Ordens Atrasadas</CardTitle>
            <AlertTriangle className="h-4 w-4 text-destructive" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">3</div>
            <p className="text-xs text-muted-foreground">Linha B com maior criticidade</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Estoque de Matéria-Prima</CardTitle>
            <Boxes className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">OK</div>
            <p className="text-xs text-muted-foreground">Nenhum item em nível crítico</p>
          </CardContent>
        </Card>
      </div>

       <Card>
        <CardHeader>
            <CardTitle>Status das Ordens de Produção</CardTitle>
        </CardHeader>
        <CardContent>
             <Table>
                <TableHeader><TableRow><TableHead>Ordem</TableHead><TableHead>Produto</TableHead><TableHead>Status</TableHead><TableHead>Progresso</TableHead></TableRow></TableHeader>
                <TableBody>
                    {ordens.map(o => (
                        <TableRow key={o.id}>
                            <TableCell className="font-mono text-xs">{o.id}</TableCell>
                            <TableCell className="font-medium">{o.produto}</TableCell>
                            <TableCell><Badge variant={o.status === 'Atrasada' ? 'destructive' : o.status === 'Concluída' ? 'default' : 'secondary'}>{o.status}</Badge></TableCell>
                            <TableCell>
                                <div className="w-full bg-muted rounded-full h-2.5">
                                    <div className="bg-primary h-2.5 rounded-full" style={{width: `${o.progresso}%`}}></div>
                                </div>
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
