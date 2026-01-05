'use client';
import { useState } from 'react';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  CardFooter,
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
import { Factory, PlusCircle, Search, MoreHorizontal, BarChart, Download, Settings } from 'lucide-react';
import { Input } from '@/components/ui/input';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from '@/components/ui/dialog';
import { Label } from '@/components/ui/label';
import { Switch } from '@/components/ui/switch';

const filiais = [
  {
    id: 'FIL-001',
    name: 'Filial São Paulo',
    cnpj: '11.222.333/0001-44',
    location: 'São Paulo, SP',
    status: 'Ativa',
    employees: 150,
  },
  {
    id: 'FIL-002',
    name: 'Filial Rio de Janeiro',
    cnpj: '44.555.666/0001-77',
    location: 'Rio de Janeiro, RJ',
    status: 'Ativa',
    employees: 80,
  },
  {
    id: 'FIL-003',
    name: 'Filial Belo Horizonte',
    cnpj: '77.888.999/0001-00',
    location: 'Belo Horizonte, MG',
    status: 'Inativa',
    employees: 0,
  },
];

const getStatusBadge = (status: string) => {
  return status === 'Ativa' ? 'bg-green-500' : 'bg-red-500 text-white';
};

export default function FiliaisPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="p-4 space-y-4">
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total de Filiais</CardTitle>
            <Factory className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{filiais.length}</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Filiais Ativas</CardTitle>
            <Factory className="h-4 w-4 text-green-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{filiais.filter(f => f.status === 'Ativa').length}</div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <div className="flex justify-between items-center">
            <div>
              <CardTitle>Gestão de Filiais</CardTitle>
              <CardDescription>
                Cadastre e gerencie as unidades da sua empresa.
              </CardDescription>
            </div>
            <Button onClick={() => setIsModalOpen(true)}>
              <PlusCircle className="mr-2 h-4 w-4" /> Cadastrar Filial
            </Button>
          </div>
          <div className="mt-4 flex items-center gap-2">
            <Input
              placeholder="Buscar por nome ou CNPJ..."
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
                <TableHead>Nome da Filial</TableHead>
                <TableHead>CNPJ</TableHead>
                <TableHead>Localização</TableHead>
                <TableHead>Colaboradores</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Ações</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filiais.map(filial => (
                <TableRow key={filial.id}>
                  <TableCell className="font-medium">{filial.name}</TableCell>
                  <TableCell>{filial.cnpj}</TableCell>
                  <TableCell>{filial.location}</TableCell>
                  <TableCell>{filial.employees}</TableCell>
                  <TableCell>
                    <Badge className={getStatusBadge(filial.status)}>
                      {filial.status}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" className="h-8 w-8 p-0">
                          <MoreHorizontal className="h-4 w-4" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuItem><BarChart className="mr-2 h-4 w-4" /> Ver Painel</DropdownMenuItem>
                        <DropdownMenuItem><Download className="mr-2 h-4 w-4" /> Gerar Relatórios</DropdownMenuItem>
                        <DropdownMenuItem><Settings className="mr-2 h-4 w-4" /> Configurações</DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Cadastrar Nova Filial</DialogTitle>
            <DialogDescription>
              Preencha os dados para registrar uma nova unidade.
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="name" className="text-right">
                Nome
              </Label>
              <Input id="name" placeholder="Ex: Filial Curitiba" className="col-span-3" />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="cnpj" className="text-right">
                CNPJ
              </Label>
              <Input id="cnpj" placeholder="00.000.000/0001-00" className="col-span-3" />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="location" className="text-right">
                Localização
              </Label>
              <Input id="location" placeholder="Cidade, UF" className="col-span-3" />
            </div>
            <div className="flex items-center space-x-2 pl-[110px]">
                <Switch id="airplane-mode" />
                <Label htmlFor="airplane-mode">Espelhar configurações da matriz</Label>
            </div>
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={() => setIsModalOpen(false)}>Cancelar</Button>
            <Button type="submit">Salvar Filial</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}
