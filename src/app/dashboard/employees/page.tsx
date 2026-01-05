'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { PlusCircle, Search } from 'lucide-react';

const employees = [
  {
    id: 1,
    name: 'João da Silva',
    sector: 'Corte',
    role: 'Cortador',
    attendance: 'present',
    documents: 'ok',
  },
  {
    id: 2,
    name: 'Maria Oliveira',
    sector: 'Costura',
    role: 'Costureira',
    attendance: 'absent',
    documents: 'pending',
  },
  {
    id: 3,
    name: 'Pedro Santos',
    sector: 'Montagem',
    role: 'Montador',
    attendance: 'present',
    documents: 'ok',
  },
  {
    id: 4,
    name: 'Ana Souza',
    sector: 'Acabamento',
    role: 'Acabador',
    attendance: 'present',
    documents: 'ok',
  },
  {
    id: 5,
    name: 'Carlos Pereira',
    sector: 'Costura',
    role: 'Costureiro',
    attendance: 'late',
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
    <div className="flex flex-col gap-4">
      <Card>
        <CardHeader>
          <CardTitle>Buscar Colaborador</CardTitle>
          <CardDescription>Utilize os filtros para encontrar um colaborador específico.</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
            <Input placeholder="Buscar por nome, matrícula..." />
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Todos os Setores" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Todos os Setores</SelectItem>
                <SelectItem value="corte">Corte</SelectItem>
                <SelectItem value="costura">Costura</SelectItem>
                <SelectItem value="montagem">Montagem</SelectItem>
                <SelectItem value="acabamento">Acabamento</SelectItem>
              </SelectContent>
            </Select>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Status Documentos" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Todos os Status</SelectItem>
                <SelectItem value="ok">Em Dia</SelectItem>
                <SelectItem value="pending">Pendente</SelectItem>
              </SelectContent>
            </Select>
            <Button className='w-full md:w-auto'>
              <Search className="mr-2 h-4 w-4" />
              Pesquisar
            </Button>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="flex flex-row items-center justify-between">
          <div>
            <CardTitle>Resultado da Busca</CardTitle>
            <CardDescription>Lista de colaboradores encontrados.</CardDescription>
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
                <TableHead>Cargo</TableHead>
                <TableHead>Status Presença</TableHead>
                <TableHead>Documentos</TableHead>
                <TableHead className="text-right">Ações</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {employees.map((employee) => (
                <TableRow key={employee.id}>
                  <TableCell className="font-medium">{employee.name}</TableCell>
                  <TableCell>{employee.sector}</TableCell>
                  <TableCell>{employee.role}</TableCell>
                  <TableCell>
                    <Badge variant={attendanceStatus[employee.attendance].variant}>
                      {attendanceStatus[employee.attendance].label}
                    </Badge>
                  </TableCell>
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
    </div>
  );
}