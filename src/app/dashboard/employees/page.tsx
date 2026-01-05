'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Search, FileDown, Trash2, Edit, Eye } from 'lucide-react';
import { Label } from '@/components/ui/label';
import { useDashboard } from '../layout';


const employees = [
  {
    id: 1,
    code: '001',
    name: 'João da Silva',
    cpf: '123.456.789-00',
    matricula: 'MAT001',
    role: 'Cortador',
    sector: 'Corte',
    attendance: 'present',
    documents: 'ok',
  },
  {
    id: 2,
    code: '002',
    name: 'Maria Oliveira',
    cpf: '234.567.890-11',
    matricula: 'MAT002',
    role: 'Costureira',
    sector: 'Costura',
    attendance: 'absent',
    documents: 'pending',
  },
  {
    id: 3,
    code: '003',
    name: 'Pedro Santos',
    cpf: '345.678.901-22',
    matricula: 'MAT003',
    role: 'Montador',
    sector: 'Montagem',
    attendance: 'present',
    documents: 'ok',
  },
  {
    id: 4,
    code: '004',
    name: 'Ana Souza',
    cpf: '456.789.012-33',
    matricula: 'MAT004',
    role: 'Acabador',
    sector: 'Acabamento',
    attendance: 'present',
    documents: 'ok',
  },
  {
    id: 5,
    code: '005',
    name: 'Carlos Pereira',
    cpf: '567.890.123-44',
    matricula: 'MAT005',
    role: 'Costureiro',
    sector: 'Costura',
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
  const { openTab } = useDashboard();

  const handleViewClick = (employee: any) => {
    // Aqui usamos um ID dinâmico para garantir que podemos abrir várias abas de visualização
    // No futuro, podemos passar o ID real do colaborador
    const tabId = `visualizar-colaborador-${employee.id}`;
    openTab({ id: tabId, title: `Vis. ${employee.name}` });
  };

  return (
    <div className="flex flex-col gap-4 p-4">
      <div className="border rounded-lg p-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 mb-4 items-end">
            <div className='space-y-2'>
                <Label htmlFor='cod'>Código</Label>
                <Input id='cod' placeholder="Código..." />
            </div>
            <div className='space-y-2'>
                <Label htmlFor='name'>Nome</Label>
                <Input id='name' placeholder="Nome do colaborador..." />
            </div>
            <div className='space-y-2'>
                <Label htmlFor='cpf'>CPF</Label>
                <Input id='cpf' placeholder="CPF..." />
            </div>
             <div className='space-y-2'>
                <Label htmlFor='matricula'>Matrícula</Label>
                <Input id='matricula' placeholder="Matrícula..." />
            </div>
            <div className="flex gap-2">
                <Button className='w-full'>
                  <Search className="mr-2 h-4 w-4" />
                  Pesquisar
                </Button>
                <Button className='w-full' variant='outline'>Limpar</Button>
            </div>
        </div>
      </div>

      <div className='border rounded-lg'>
        <div className='p-4'>
           <h3 className="text-lg font-semibold">Resultado da Busca</h3>
           <p className="text-sm text-muted-foreground">Lista de colaboradores encontrados.</p>
        </div>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Código</TableHead>
              <TableHead>Nome</TableHead>
              <TableHead>CPF</TableHead>
              <TableHead>Matrícula</TableHead>
              <TableHead>Cargo</TableHead>
              <TableHead>Setor</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {employees.map((employee) => (
              <TableRow key={employee.id}>
                <TableCell>{employee.code}</TableCell>
                <TableCell className="font-medium">{employee.name}</TableCell>
                <TableCell>{employee.cpf}</TableCell>
                <TableCell>{employee.matricula}</TableCell>
                <TableCell>{employee.role}</TableCell>
                <TableCell>{employee.sector}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        <div className='flex justify-end items-center p-4 gap-2 border-t'>
            <Button variant="outline" size="sm"><Edit className='mr-2' />Alterar</Button>
            <Button variant="destructive" size="sm"><Trash2 className='mr-2'/>Excluir</Button>
            <Button variant="outline" size="sm" onClick={() => handleViewClick(employees[0])}>
                <Eye className='mr-2'/>Visualizar
            </Button>
            <Button variant="secondary" size="sm"><FileDown className='mr-2'/>Baixar Arquivo</Button>
        </div>
      </div>
    </div>
  );
}
