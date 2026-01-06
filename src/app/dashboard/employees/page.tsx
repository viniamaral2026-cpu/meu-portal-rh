'use client';

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Input } from '@/components/ui/input';
import { Search, FileDown, Trash2, Edit, Eye } from 'lucide-react';
import { Label } from '@/components/ui/label';
import { useDashboard } from '../layout';
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from '@/components/ui/alert-dialog';
import { useToast } from '@/hooks/use-toast';
import { colaboradores } from '@/data/database';

export type Employee = (typeof colaboradores)[0];

export default function EmployeesPage() {
  const dashboard = useDashboard();
  const { toast } = useToast();

  const [filters, setFilters] = useState({ cod: '', name: '', cpf: '', matricula: '' });
  const [employees, setEmployees] = useState(colaboradores);
  const [filteredEmployees, setFilteredEmployees] = useState(colaboradores);
  const [selectedEmployee, setSelectedEmployee] = useState<Employee | null>(null);

  const handleFilterChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setFilters(prev => ({ ...prev, [id]: value }));
  };

  const handleSearch = () => {
    let result = employees;
    // O CPF e a matrícula não existem no modelo Colaborador, então vamos filtrar pelos campos disponíveis.
    if (filters.cod) {
      result = result.filter(emp => emp.id.includes(filters.cod));
    }
    if (filters.name) {
      result = result.filter(emp => emp.nome.toLowerCase().includes(filters.name.toLowerCase()));
    }
    setFilteredEmployees(result);
  };

  const handleClear = () => {
    setFilters({ cod: '', name: '', cpf: '', matricula: '' });
    setFilteredEmployees(employees);
  };

  const handleRowClick = (employee: Employee) => {
    setSelectedEmployee(employee);
  };

  const handleDelete = () => {
    if (!selectedEmployee) return;
    setEmployees(prev => prev.filter(emp => emp.id !== selectedEmployee.id));
    setFilteredEmployees(prev => prev.filter(emp => emp.id !== selectedEmployee.id));
    toast({ title: "Colaborador excluído", description: `${selectedEmployee.nome} foi removido do sistema.` });
    setSelectedEmployee(null);
  };

  const handleDownload = () => {
    const csvContent = "data:text/csv;charset=utf-8,"
      + "Código,Nome,ID Cargo,ID Setor,Status,ID Filial\n"
      + filteredEmployees.map(e => `${e.id},${e.nome},${e.cargoId},${e.setorId},${e.status},${e.filialId}`).join("\n");
    
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", "colaboradores.csv");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    toast({ title: "Download iniciado", description: "O arquivo de colaboradores está sendo baixado." });
  }

  const handleActionClick = (action: 'view' | 'edit') => {
    if (!selectedEmployee) {
      toast({ variant: 'destructive', title: "Nenhum colaborador selecionado", description: "Por favor, selecione um colaborador na tabela." });
      return;
    }
    if (!dashboard) return;

    const pageId = action === 'view' ? 'visualizar-colaborador' : 'editar-colaborador';
    const tabId = `${pageId}-${selectedEmployee.id}`;
    const title = `${action === 'view' ? 'Vis.' : 'Edt.'} ${selectedEmployee.nome.split(' ')[0]}`;
    dashboard.openTab({id: tabId, title, data: { employee: selectedEmployee }});
  };


  return (
    <div className="flex flex-col gap-4 p-4">
      <div className="border rounded-lg p-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 mb-4 items-end">
          <div className='space-y-2'>
            <Label htmlFor='cod'>Código</Label>
            <Input id='cod' placeholder="Código..." value={filters.cod} onChange={handleFilterChange} />
          </div>
          <div className='space-y-2'>
            <Label htmlFor='name'>Nome</Label>
            <Input id='name' placeholder="Nome do colaborador..." value={filters.name} onChange={handleFilterChange} />
          </div>
          <div className='space-y-2'>
            <Label htmlFor='cpf'>CPF</Label>
            <Input id='cpf' placeholder="CPF..." value={filters.cpf} onChange={handleFilterChange} />
          </div>
          <div className='space-y-2'>
            <Label htmlFor='matricula'>Matrícula</Label>
            <Input id='matricula' placeholder="Matrícula..." value={filters.matricula} onChange={handleFilterChange} />
          </div>
          <div className="flex gap-2">
            <Button className='w-full' onClick={handleSearch}>
              <Search className="mr-2 h-4 w-4" />
              Pesquisar
            </Button>
            <Button className='w-full' variant='outline' onClick={handleClear}>Limpar</Button>
          </div>
        </div>
      </div>

      <div className='border rounded-lg'>
        <div className='p-4'>
          <h3 className="text-lg font-semibold">Resultado da Busca</h3>
          <p className="text-sm text-muted-foreground">Selecione um colaborador para ver as opções.</p>
        </div>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Código</TableHead>
              <TableHead>Nome</TableHead>
              <TableHead>ID Cargo</TableHead>
              <TableHead>ID Setor</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredEmployees.map((employee) => (
              <TableRow 
                key={employee.id} 
                onClick={() => handleRowClick(employee)}
                onDoubleClick={() => handleActionClick('view')}
                className={selectedEmployee?.id === employee.id ? 'bg-muted/80' : 'cursor-pointer'}
              >
                <TableCell>{employee.id}</TableCell>
                <TableCell className="font-medium">{employee.nome}</TableCell>
                <TableCell>{employee.cargoId}</TableCell>
                <TableCell>{employee.setorId}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        <div className='flex justify-end items-center p-4 gap-2 border-t'>
          <Button variant="outline" size="sm" onClick={() => handleActionClick('edit')} disabled={!selectedEmployee}><Edit className='mr-2' />Alterar</Button>
          <AlertDialog>
            <AlertDialogTrigger asChild>
              <Button variant="destructive" size="sm" disabled={!selectedEmployee}><Trash2 className='mr-2' />Excluir</Button>
            </AlertDialogTrigger>
            <AlertDialogContent>
              <AlertDialogHeader>
                <AlertDialogTitle>Você tem certeza?</AlertDialogTitle>
                <AlertDialogDescription>
                  Esta ação não pode ser desfeita. Isso irá remover permanentemente o colaborador
                  "{selectedEmployee?.nome}" do sistema.
                </AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter>
                <AlertDialogCancel>Cancelar</AlertDialogCancel>
                <AlertDialogAction onClick={handleDelete}>Confirmar</AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
          <Button variant="outline" size="sm" onClick={() => handleActionClick('view')} disabled={!selectedEmployee}>
            <Eye className='mr-2' />Visualizar
          </Button>
          <Button variant="secondary" size="sm" onClick={handleDownload}><FileDown className='mr-2' />Baixar Arquivo</Button>
        </div>
      </div>
    </div>
  );
}
