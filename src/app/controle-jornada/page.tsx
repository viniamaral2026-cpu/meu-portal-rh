
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Search, FileDown } from 'lucide-react';
import { Badge } from '@/components/ui/badge';


const registros = [
    { nome: 'Ana Silva', data: '20/07/2024', entrada: '09:02', saidaAlmoco: '12:30', retornoAlmoco: '13:35', saida: '18:05', status: 'Presente' },
    { nome: 'Carlos Souza', data: '20/07/2024', entrada: '-', saidaAlmoco: '-', retornoAlmoco: '-', saida: '-', status: 'Falta' },
    { nome: 'Beatriz Costa', data: '20/07/2024', entrada: '08:55', saidaAlmoco: '12:00', retornoAlmoco: '13:00', saida: '17:30', status: 'Presente' },
    { nome: 'Daniel Almeida', data: '20/07/2024', entrada: '10:00', saidaAlmoco: '13:00', retornoAlmoco: '14:00', saida: '19:00', status: 'Atraso' },
]

const getStatusVariant = (status: string) => {
    switch (status) {
        case 'Presente': return 'default';
        case 'Falta': return 'destructive';
        case 'Atraso': return 'secondary';
        default: return 'outline';
    }
}


export default function ControleJornadaPage() {
  return (
    <Card>
      <CardHeader>
        <div className="flex justify-between items-center">
          <div>
            <CardTitle>Controle de Jornada</CardTitle>
            <CardDescription>Visualize os registros de ponto dos colaboradores.</CardDescription>
          </div>
          <Button>
            <FileDown className="mr-2 h-4 w-4" />
            Exportar
          </Button>
        </div>
      </CardHeader>
      <CardContent>
        <div className="flex items-center pb-4 gap-4">
            <div className="relative w-1/2">
                <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input placeholder="Buscar por nome..." className="pl-8" />
            </div>
            <Input type="date" className="w-1/4" />
        </div>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Nome</TableHead>
              <TableHead>Data</TableHead>
              <TableHead>Entrada</TableHead>
              <TableHead>Saída Almoço</TableHead>
              <TableHead>Retorno Almoço</TableHead>
              <TableHead>Saída</TableHead>
              <TableHead>Status</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {registros.map(r => (
                <TableRow key={r.nome}>
                    <TableCell>{r.nome}</TableCell>
                    <TableCell>{r.data}</TableCell>
                    <TableCell>{r.entrada}</TableCell>
                    <TableCell>{r.saidaAlmoco}</TableCell>
                    <TableCell>{r.retornoAlmoco}</TableCell>
                    <TableCell>{r.saida}</TableCell>
                    <TableCell><Badge variant={getStatusVariant(r.status)}>{r.status}</Badge></TableCell>
                </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  )
}
