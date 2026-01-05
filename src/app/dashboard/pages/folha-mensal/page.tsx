'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Search, FileDown, Calculator, Printer } from 'lucide-react';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';

const payrollData = [
  {
    id: 1,
    matricula: 'MAT001',
    name: 'João da Silva',
    role: 'Cortador',
    grossSalary: 3500.00,
    discounts: 450.50,
    netSalary: 3049.50,
    status: 'calculated',
  },
  {
    id: 2,
    matricula: 'MAT002',
    name: 'Maria Oliveira',
    role: 'Costureira',
    grossSalary: 3200.00,
    discounts: 380.00,
    netSalary: 2820.00,
    status: 'calculated',
  },
  {
    id: 3,
    matricula: 'MAT003',
    name: 'Pedro Santos',
    role: 'Montador',
    grossSalary: 3300.00,
    discounts: 410.00,
    netSalary: 2890.00,
    status: 'pending',
  },
   {
    id: 4,
    matricula: 'MAT004',
    name: 'Ana Souza',
    role: 'Acabador',
    grossSalary: 3100.00,
    discounts: 350.00,
    netSalary: 2750.00,
    status: 'calculated',
  },
   {
    id: 5,
    matricula: 'MAT005',
    name: 'Carlos Pereira',
    role: 'Costureiro',
    grossSalary: 3250.00,
    discounts: 395.50,
    netSalary: 2854.50,
    status: 'pending',
  },
];

export default function FolhaMensalPage() {
  const { toast } = useToast();

  const handleActionClick = (action: 'calculate' | 'export' | 'print') => {
    switch (action) {
      case 'calculate':
        toast({ title: 'Cálculo da Folha', description: 'O cálculo da folha para a competência selecionada foi iniciado.' });
        break;
      case 'export':
        toast({ title: 'Exportação de PDF', description: 'A geração do PDF da folha de pagamento foi iniciada.' });
        break;
      case 'print':
        toast({ title: 'Impressão de Holerites', description: 'Os holerites estão sendo preparados para impressão.' });
        break;
    }
  };


  return (
    <div className="flex flex-col gap-4 p-4">
       <Card>
        <CardHeader>
          <CardTitle>Folha de Pagamento Mensal</CardTitle>
          <CardDescription>Calcule e gerencie a folha de pagamento dos colaboradores.</CardDescription>
        </CardHeader>
        <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 items-end">
                <div className='space-y-2'>
                    <Label htmlFor='year'>Ano</Label>
                    <Select defaultValue='2024'>
                        <SelectTrigger id="year">
                            <SelectValue placeholder="Selecione o Ano" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="2024">2024</SelectItem>
                            <SelectItem value="2023">2023</SelectItem>
                            <SelectItem value="2022">2022</SelectItem>
                        </SelectContent>
                    </Select>
                </div>
                <div className='space-y-2'>
                    <Label htmlFor='month'>Mês</Label>
                     <Select defaultValue='06'>
                        <SelectTrigger id="month">
                            <SelectValue placeholder="Selecione o Mês" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="01">Janeiro</SelectItem>
                            <SelectItem value="02">Fevereiro</SelectItem>
                            <SelectItem value="03">Março</SelectItem>
                            <SelectItem value="04">Abril</SelectItem>
                            <SelectItem value="05">Maio</SelectItem>
                            <SelectItem value="06">Junho</SelectItem>
                            <SelectItem value="07">Julho</SelectItem>
                            <SelectItem value="08">Agosto</SelectItem>
                            <SelectItem value="09">Setembro</SelectItem>
                            <SelectItem value="10">Outubro</SelectItem>
                            <SelectItem value="11">Novembro</SelectItem>
                            <SelectItem value="12">Dezembro</SelectItem>
                        </SelectContent>
                    </Select>
                </div>
                 <div className='space-y-2'>
                    <Label htmlFor='employee'>Colaborador</Label>
                    <Input id='employee' placeholder="Nome ou matrícula..." />
                </div>
                <div className="flex gap-2">
                    <Button className='w-full'>
                    <Search className="mr-2 h-4 w-4" />
                    Buscar
                    </Button>
                    <Button className='w-full' variant='outline'>Limpar</Button>
                </div>
            </div>
        </CardContent>
       </Card>

      <div className='border rounded-lg'>
        <div className='p-4'>
           <h3 className="text-lg font-semibold">Resultado da Folha - Junho/2024</h3>
           <p className="text-sm text-muted-foreground">Lista de colaboradores com a folha processada.</p>
        </div>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Matrícula</TableHead>
              <TableHead>Nome</TableHead>
              <TableHead>Cargo</TableHead>
              <TableHead>Salário Bruto</TableHead>
              <TableHead>Descontos</TableHead>
              <TableHead>Salário Líquido</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {payrollData.map((employee) => (
              <TableRow key={employee.id}>
                <TableCell>{employee.matricula}</TableCell>
                <TableCell className="font-medium">{employee.name}</TableCell>
                <TableCell>{employee.role}</TableCell>
                <TableCell>R$ {employee.grossSalary.toFixed(2)}</TableCell>
                <TableCell>R$ {employee.discounts.toFixed(2)}</TableCell>
                <TableCell className="font-bold">R$ {employee.netSalary.toFixed(2)}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        <div className='flex justify-end items-center p-4 gap-2 border-t'>
            <Button variant="outline" size="sm" onClick={() => handleActionClick('calculate')}><Calculator className='mr-2' />Calcular Folha</Button>
            <Button variant="secondary" size="sm" onClick={() => handleActionClick('export')}><FileDown className='mr-2'/>Exportar PDF</Button>
            <Button variant="default" size="sm" onClick={() => handleActionClick('print')}><Printer className='mr-2'/>Imprimir Holerites</Button>
        </div>
      </div>
    </div>
  );
}
