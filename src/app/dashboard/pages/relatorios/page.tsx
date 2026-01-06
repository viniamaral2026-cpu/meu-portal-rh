'use client';
import { Card, CardHeader, CardTitle, CardContent, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { FileText, Filter, Download, PlusCircle } from 'lucide-react';
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from '@/components/ui/select';
import { Input } from '@/components/ui/input';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

const relatorios = [
    { id: "REL001", nome: "Relatório de Horas Extras por Setor", categoria: "Ponto", dataCriacao: "20/07/2024" },
    { id: "REL002", nome: "Listagem de Aniversariantes do Mês", categoria: "RH", dataCriacao: "18/07/2024" },
    { id: "REL003", nome: "Posição de Estoque de Matéria-Prima", categoria: "Produção", dataCriacao: "15/07/2024" },
    { id: "REL004", nome: "Colaboradores por Faixa Salarial", categoria: "Financeiro", dataCriacao: "10/07/2024" },
]

export default function RelatoriosPage() {
  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <div className="flex justify-between items-center">
            <div>
              <CardTitle>Central de Relatórios</CardTitle>
              <CardDescription>Gere, visualize e exporte relatórios customizados.</CardDescription>
            </div>
            <Button><PlusCircle className="mr-2 h-4 w-4"/> Novo Relatório Customizado</Button>
          </div>
        </CardHeader>
        <CardContent>
          <div className="flex gap-4 p-4 border rounded-lg items-end">
            <div className="flex-1 space-y-2">
                <label className="text-sm font-medium">Relatório</label>
                 <Select>
                    <SelectTrigger>
                        <SelectValue placeholder="Selecione um relatório para gerar..." />
                    </SelectTrigger>
                    <SelectContent>
                        {relatorios.map(r => <SelectItem key={r.id} value={r.id}>{r.nome}</SelectItem>)}
                    </SelectContent>
                </Select>
            </div>
             <div className="space-y-2">
                <label className="text-sm font-medium">Competência</label>
                <Input type="month" defaultValue="2024-07" />
            </div>
             <Button variant="outline"><Filter className="mr-2 h-4 w-4"/> Mais Filtros</Button>
             <Button size="lg"><Download className="mr-2 h-4 w-4"/> Gerar</Button>
          </div>
        </CardContent>
      </Card>
      
      <Card>
        <CardHeader>
            <CardTitle>Relatórios Gerados Recentemente</CardTitle>
        </CardHeader>
        <CardContent>
            <Table>
                <TableHeader>
                    <TableRow>
                        <TableHead>Nome do Relatório</TableHead>
                        <TableHead>Categoria</TableHead>
                        <TableHead>Data de Geração</TableHead>
                        <TableHead className="text-right">Ações</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {relatorios.map(r => (
                        <TableRow key={r.id}>
                            <TableCell className="font-medium">{r.nome}</TableCell>
                            <TableCell>{r.categoria}</TableCell>
                            <TableCell>{r.dataCriacao}</TableCell>
                            <TableCell className="text-right">
                                <Button variant="outline" size="sm">
                                    <Download className="mr-2 h-4 w-4"/> Baixar
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
