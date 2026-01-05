
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { PlusCircle } from 'lucide-react';

const employees = [
  {
    id: 1,
    name: 'João da Silva',
    sector: 'Corte',
    attendance: 'present',
    performance: 4.5,
    documents: 'ok',
  },
  {
    id: 2,
    name: 'Maria Oliveira',
    sector: 'Costura',
    attendance: 'absent',
    performance: 4.8,
    documents: 'pending',
  },
  {
    id: 3,
    name: 'Pedro Santos',
    sector: 'Montagem',
    attendance: 'present',
    performance: 3.9,
    documents: 'ok',
  },
  {
    id: 4,
    name: 'Ana Souza',
    sector: 'Acabamento',
    attendance: 'present',
    performance: 4.2,
    documents: 'ok',
  },
  {
    id: 5,
    name: 'Carlos Pereira',
    sector: 'Costura',
    attendance: 'late',
    performance: 4.0,
    documents: 'pending',
  },
];

const attendanceStatus: { [key: string]: { label: string, variant: 'default' | 'secondary' | 'destructive' } } = {
  present: { label: 'Presente', variant: 'default' },
  absent: { label: 'Ausente', variant: 'destructive' },
  late: { label: 'Atrasado', variant: 'secondary' },
};

const documentStatus: { [key: string]: { label: string, variant: 'default' | 'secondary' | 'destructive' } } = {
  ok: { label: 'Em Dia', variant: 'default' },
  pending: { label: 'Pendente', variant: 'secondary' },
};


export default function EmployeesPage() {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between">
        <div>
          <CardTitle>Gestão de Colaboradores</CardTitle>
          <CardDescription>Visualize e gerencie todos os funcionários da fábrica.</CardDescription>
        </div>
        <Button>
          <PlusCircle className="mr-2 h-4 w-4" />
          Adicionar Colaborador
        </Button>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Nome</TableHead>
              <TableHead>Setor</TableHead>
              <TableHead>Status de Presença</TableHead>
              <TableHead>Performance (Nota)</TableHead>
              <TableHead>Documentos</TableHead>
              <TableHead className="text-right">Ações</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {employees.map((employee) => (
              <TableRow key={employee.id}>
                <TableCell className="font-medium">{employee.name}</TableCell>
                <TableCell>{employee.sector}</TableCell>
                <TableCell>
                  <Badge variant={attendanceStatus[employee.attendance].variant}>
                    {attendanceStatus[employee.attendance].label}
                  </Badge>
                </TableCell>
                <TableCell>{employee.performance.toFixed(1)}</TableCell>
                <TableCell>
                  <Badge variant={documentStatus[employee.documents].variant}>
                    {documentStatus[employee.documents].label}
                  </Badge>
                </TableCell>
                <TableCell className="text-right">
                  <Button variant="outline" size="sm">Ver Detalhes</Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}
