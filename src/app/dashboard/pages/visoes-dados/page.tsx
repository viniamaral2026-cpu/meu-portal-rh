'use client';
import { Card, CardHeader, CardTitle, CardContent, CardDescription, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Database, PlusCircle, Play, Eye, Trash2 } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

const visoes = [
  { id: '1', nome: 'VW_PROD_MENSAL', descricao: 'Visão consolidada da produção mensal por linha.', tabelas: ['production_lines', 'products'] },
  { id: '2', nome: 'VW_CUSTO_FOLHA_SETOR', descricao: 'Custo total da folha (salário + encargos) agrupado por setor.', tabelas: ['users', 'attendance'] },
  { id: '3', nome: 'VW_PERFORMANCE_GERAL', descricao: 'Média de performance dos colaboradores por filial e setor.', tabelas: ['users', 'performance'] },
];

export default function VisoesDadosPage() {
  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <div className="flex justify-between items-center">
            <div>
              <CardTitle>Visões de Dados</CardTitle>
              <CardDescription>Crie e gerencie visões de dados customizadas usando SQL.</CardDescription>
            </div>
            <Button><PlusCircle className="mr-2 h-4 w-4"/> Criar Nova Visão</Button>
          </div>
        </CardHeader>
      </Card>
      
      <Card>
        <CardHeader>
          <h3 className="text-xl font-bold">Editor de Visão de Dados</h3>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            <div className="md:col-span-3 space-y-2">
                <label className="font-medium">Consulta SQL</label>
                <textarea 
                    className="w-full h-64 p-4 rounded-md border bg-slate-900 text-green-400 font-mono text-sm"
                    defaultValue="SELECT\n  pl.lineId,\n  p.model,\n  SUM(pl.quantityProduced) AS total_produzido\nFROM\n  production_lines pl\nJOIN\n  products p ON pl.productId = p.productId\nWHERE\n  pl.endDate BETWEEN '2024-07-01' AND '2024-07-31'\nGROUP BY\n  pl.lineId, p.model;"
                />
            </div>
             <div className="md:col-span-2 space-y-4">
                <div>
                    <label className="font-medium">Nome da Visão</label>
                    <input className="w-full p-2 border rounded-md" defaultValue="VW_PROD_MENSAL_JULHO" />
                </div>
                 <div>
                    <label className="font-medium">Descrição</label>
                    <textarea className="w-full p-2 border rounded-md h-24" defaultValue="Produção consolidada do mês de Julho." />
                </div>
                <div className="flex gap-2">
                    <Button variant="secondary" className="w-full"><Play className="mr-2 h-4 w-4"/> Executar SQL</Button>
                    <Button className="w-full">Salvar Visão</Button>
                </div>
            </div>
          </div>
        </CardContent>
      </Card>
      
      <Card>
        <CardHeader><h3 className="text-lg font-semibold">Visões Salvas</h3></CardHeader>
        <CardContent>
            <Table>
                <TableHeader>
                    <TableRow>
                        <TableHead>Nome</TableHead>
                        <TableHead>Descrição</TableHead>
                        <TableHead>Tabelas Envolvidas</TableHead>
                        <TableHead className="text-right">Ações</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {visoes.map(v => (
                        <TableRow key={v.id}>
                            <TableCell className="font-medium font-mono">{v.nome}</TableCell>
                            <TableCell>{v.descricao}</TableCell>
                            <TableCell>
                                <div className="flex gap-1">
                                    {v.tabelas.map(t => <Badge key={t} variant="outline">{t}</Badge>)}
                                </div>
                            </TableCell>
                            <TableCell className="text-right">
                                <Button variant="ghost" size="icon"><Eye className="h-4 w-4" /></Button>
                                <Button variant="ghost" size="icon" className="text-destructive"><Trash2 className="h-4 w-4" /></Button>
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
