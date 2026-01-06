'use client';
import { Card, CardHeader, CardTitle, CardContent, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Input } from '@/components/ui/input';
import { PlusCircle, Link, Database, Trash2 } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from '@/components/ui/select';

const fontes = [
  { id: '1', nome: 'Headcount por Setor', tipo: 'Consulta SQL', origem: 'Tabela: users', status: 'Ativa' },
  { id: '2', nome: 'Produção Mensal', tipo: 'Visão de Dados', origem: 'Visão: VW_PROD_MENSAL', status: 'Ativa' },
  { id: '3', nome: 'Receita de Vendas', tipo: 'API Externa', origem: 'https://api.erp.com/vendas', status: 'Inativa' },
  { id: '4', nome: 'Absenteísmo', tipo: 'Consulta SQL', origem: 'Tabela: attendance', status: 'Ativa' },
];

export default function FontesGraficosPage() {
  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <div className="flex justify-between items-center">
            <div>
              <CardTitle>Fontes de Dados para Gráficos</CardTitle>
              <CardDescription>Conecte seus gráficos a fontes de dados internas ou externas.</CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent>
            <div className="p-4 border rounded-lg space-y-4">
                <h3 className="font-semibold">Adicionar Nova Fonte de Dados</h3>
                 <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                    <Input placeholder="Nome da Fonte" />
                    <Select>
                        <SelectTrigger><SelectValue placeholder="Tipo de Fonte..." /></SelectTrigger>
                        <SelectContent>
                            <SelectItem value="sql">Consulta SQL</SelectItem>
                            <SelectItem value="view">Visão de Dados</SelectItem>
                            <SelectItem value="api">API Externa</SelectItem>
                        </SelectContent>
                    </Select>
                    <Input placeholder="Origem (tabela, visão, URL)" className="md:col-span-2" />
                 </div>
                 <Button><PlusCircle className="mr-2 h-4 w-4"/> Adicionar Fonte</Button>
            </div>
        </CardContent>
      </Card>
      
      <Card>
        <CardHeader><h3 className="font-semibold">Fontes Cadastradas</h3></CardHeader>
        <CardContent>
            <Table>
                <TableHeader>
                    <TableRow>
                        <TableHead>Nome da Fonte</TableHead>
                        <TableHead>Tipo</TableHead>
                        <TableHead>Origem</TableHead>
                        <TableHead>Status</TableHead>
                        <TableHead className="text-right">Ações</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {fontes.map(fonte => (
                        <TableRow key={fonte.id}>
                            <TableCell className="font-medium">{fonte.nome}</TableCell>
                            <TableCell>
                                <Badge variant="outline" className="flex items-center w-fit">
                                    {fonte.tipo === 'Consulta SQL' && <Database className="h-3 w-3 mr-1"/>}
                                    {fonte.tipo === 'API Externa' && <Link className="h-3 w-3 mr-1"/>}
                                    {fonte.tipo}
                                </Badge>
                            </TableCell>
                            <TableCell className="font-mono text-xs">{fonte.origem}</TableCell>
                            <TableCell><Badge variant={fonte.status === 'Ativa' ? 'default' : 'secondary'}>{fonte.status}</Badge></TableCell>
                            <TableCell className="text-right">
                                <Button variant="ghost" size="icon" className="text-destructive"><Trash2 className="h-4 w-4"/></Button>
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
