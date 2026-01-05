'use client';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { FilePlus, Search } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Progress } from '@/components/ui/progress';

const avaliacoes = [
  {
    colaborador: 'Ana Beatriz',
    cargo: 'Desenvolvedor Pleno',
    lider: 'Carlos Silva',
    data: '2024-06-15',
    nota: 92,
    status: 'Finalizada',
  },
  {
    colaborador: 'Bruno Gomes',
    cargo: 'Analista de RH',
    lider: 'Fernanda Lima',
    data: '2024-06-20',
    nota: 88,
    status: 'Finalizada',
  },
  {
    colaborador: 'Clara Martins',
    cargo: 'Designer UX/UI',
    lider: 'Ricardo Souza',
    data: '2024-07-01',
    nota: null,
    status: 'Em Andamento',
  },
  {
    colaborador: 'Daniel Farias',
    cargo: 'Desenvolvedor Júnior',
    lider: 'Carlos Silva',
    data: '2024-07-05',
    nota: null,
    status: 'Pendente',
  },
];

const getStatusBadge = (status: string) => {
  switch (status) {
    case 'Finalizada':
      return 'bg-green-500';
    case 'Em Andamento':
      return 'bg-blue-500';
    case 'Pendente':
      return 'bg-yellow-500';
    default:
      return 'bg-gray-500';
  }
};

export default function DesempenhoPage() {
  return (
    <div className="p-4 space-y-4">
      <Card>
        <CardHeader>
          <div className="flex justify-between items-center">
            <div>
              <CardTitle>Avaliação de Desempenho</CardTitle>
              <CardDescription>
                Acompanhe o ciclo de avaliações de desempenho.
              </CardDescription>
            </div>
            <Button>
              <FilePlus className="mr-2 h-4 w-4" /> Novo Ciclo de Avaliação
            </Button>
          </div>
          <div className="mt-4 flex items-center gap-2">
            <Input
              placeholder="Buscar por colaborador ou líder..."
              className="max-w-sm"
            />
            <Button variant="outline">
              <Search className="mr-2 h-4 w-4" /> Buscar
            </Button>
          </div>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Colaborador</TableHead>
                <TableHead>Cargo</TableHead>
                <TableHead>Líder Avaliador</TableHead>
                <TableHead>Data Limite</TableHead>
                <TableHead>Nota Final</TableHead>
                <TableHead>Status</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {avaliacoes.map(avaliacao => (
                <TableRow key={avaliacao.colaborador}>
                  <TableCell className="font-medium">
                    {avaliacao.colaborador}
                  </TableCell>
                  <TableCell>{avaliacao.cargo}</TableCell>
                  <TableCell>{avaliacao.lider}</TableCell>
                  <TableCell>{avaliacao.data}</TableCell>
                  <TableCell>
                    {avaliacao.nota ? (
                      <div className="flex items-center gap-2">
                        <Progress value={avaliacao.nota} className="w-24" />
                        <span>{avaliacao.nota}%</span>
                      </div>
                    ) : (
                      'N/A'
                    )}
                  </TableCell>
                  <TableCell>
                    <Badge className={getStatusBadge(avaliacao.status)}>
                      {avaliacao.status}
                    </Badge>
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
