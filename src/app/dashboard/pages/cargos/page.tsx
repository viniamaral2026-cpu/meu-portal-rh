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
import { FilePlus, Search, Edit, Trash2 } from 'lucide-react';
import { Input } from '@/components/ui/input';

const cargos = [
  {
    codigo: 'DEV-JR',
    nome: 'Desenvolvedor Júnior',
    setor: 'Tecnologia',
    salarioBase: 'R$ 3.500,00',
    status: 'Ativo',
  },
  {
    codigo: 'DEV-PL',
    nome: 'Desenvolvedor Pleno',
    setor: 'Tecnologia',
    salarioBase: 'R$ 6.000,00',
    status: 'Ativo',
  },
  {
    codigo: 'UX-DSG',
    nome: 'Designer UX/UI',
    setor: 'Produto',
    salarioBase: 'R$ 5.500,00',
    status: 'Ativo',
  },
  {
    codigo: 'ANAL-RH',
    nome: 'Analista de RH',
    setor: 'Recursos Humanos',
    salarioBase: 'R$ 4.000,00',
    status: 'Ativo',
  },
  {
    codigo: 'GER-VEND',
    nome: 'Gerente de Vendas',
    setor: 'Comercial',
    salarioBase: 'R$ 8.000,00',
    status: 'Inativo',
  },
];

export default function CargosPage() {
  return (
    <div className="p-4 space-y-4">
      <Card>
        <CardHeader>
          <div className="flex justify-between items-center">
            <div>
              <CardTitle>Gestão de Cargos</CardTitle>
              <CardDescription>
                Visualize e gerencie os cargos da sua empresa.
              </CardDescription>
            </div>
            <Button>
              <FilePlus className="mr-2 h-4 w-4" /> Novo Cargo
            </Button>
          </div>
          <div className="mt-4 flex items-center gap-2">
            <Input placeholder="Buscar por nome ou código..." className="max-w-sm" />
            <Button variant="outline">
              <Search className="mr-2 h-4 w-4" /> Buscar
            </Button>
          </div>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Código</TableHead>
                <TableHead>Nome do Cargo</TableHead>
                <TableHead>Setor</TableHead>
                <TableHead>Salário Base</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Ações</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {cargos.map(cargo => (
                <TableRow key={cargo.codigo}>
                  <TableCell className="font-medium">{cargo.codigo}</TableCell>
                  <TableCell>{cargo.nome}</TableCell>
                  <TableCell>{cargo.setor}</TableCell>
                  <TableCell>{cargo.salarioBase}</TableCell>
                  <TableCell>
                    <Badge
                      variant={cargo.status === 'Ativo' ? 'default' : 'destructive'}
                      className={cargo.status === 'Ativo' ? 'bg-green-500' : ''}
                    >
                      {cargo.status}
                    </Badge>
                  </TableCell>
                  <TableCell className="flex gap-2">
                     <Button variant="outline" size="icon">
                        <Edit className="h-4 w-4" />
                      </Button>
                      <Button variant="destructive" size="icon">
                        <Trash2 className="h-4 w-4" />
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
