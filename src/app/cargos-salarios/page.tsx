
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { PlusCircle, Search } from 'lucide-react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

const cargos = [
    { cargo: 'Desenvolvedor Frontend Jr', departamento: 'TI', salarioMin: 'R$ 3.000', salarioMax: 'R$ 5.000' },
    { cargo: 'Desenvolvedor Frontend Pl', departamento: 'TI', salarioMin: 'R$ 5.000', salarioMax: 'R$ 9.000' },
    { cargo: 'Analista de RH', departamento: 'Recursos Humanos', salarioMin: 'R$ 4.000', salarioMax: 'R$ 7.000' },
    { cargo: 'Gerente de Vendas', departamento: 'Vendas', salarioMin: 'R$ 8.000', salarioMax: 'R$ 15.000' },
    { cargo: 'Costureira', departamento: 'Produção', salarioMin: 'R$ 2.200', salarioMax: 'R$ 3.500' },
    { cargo: 'Operador de Máquinas', departamento: 'Produção', salarioMin: 'R$ 2.500', salarioMax: 'R$ 4.000' },
    { cargo: 'Analista Financeiro', departamento: 'Financeiro', salarioMin: 'R$ 4.500', salarioMax: 'R$ 8.000' },
]

export default function CargosSalariosPage() {
  return (
    <Card>
      <CardHeader>
        <div className="flex justify-between items-center">
          <div>
            <CardTitle>Cargos e Salários</CardTitle>
            <CardDescription>Gerencie os cargos e faixas salariais da sua empresa.</CardDescription>
          </div>
          <Dialog>
            <DialogTrigger asChild>
              <Button>
                <PlusCircle className="mr-2 h-4 w-4" />
                Novo Cargo
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
              <DialogHeader>
                <DialogTitle>Adicionar Novo Cargo</DialogTitle>
                <DialogDescription>
                  Preencha as informações do novo cargo e suas faixas salariais.
                </DialogDescription>
              </DialogHeader>
              <div className="grid gap-4 py-4">
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="cargo" className="text-right">
                    Cargo
                  </Label>
                  <Input id="cargo" placeholder="Nome do cargo" className="col-span-3" />
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="departamento" className="text-right">
                    Departamento
                  </Label>
                   <Select>
                    <SelectTrigger className="col-span-3">
                      <SelectValue placeholder="Selecione o departamento" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="ti">TI</SelectItem>
                      <SelectItem value="rh">Recursos Humanos</SelectItem>
                      <SelectItem value="vendas">Vendas</SelectItem>
                      <SelectItem value="producao">Produção</SelectItem>
                      <SelectItem value="financeiro">Financeiro</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                 <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="salarioMin" className="text-right">
                    Salário Mín.
                  </Label>
                  <Input id="salarioMin" type="number" placeholder="R$ 0,00" className="col-span-3" />
                </div>
                 <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="salarioMax" className="text-right">
                    Salário Máx.
                  </Label>
                  <Input id="salarioMax" type="number" placeholder="R$ 0,00" className="col-span-3" />
                </div>
              </div>
              <DialogFooter>
                <Button type="submit">Salvar Cargo</Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </div>
      </CardHeader>
      <CardContent>
        <div className="flex items-center pb-4">
            <div className="relative w-full">
                <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input placeholder="Buscar cargo..." className="pl-8" />
            </div>
        </div>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Cargo</TableHead>
              <TableHead>Departamento</TableHead>
              <TableHead>Salário Mínimo</TableHead>
              <TableHead>Salário Máximo</TableHead>
              <TableHead>Ações</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {cargos.map(c => (
                <TableRow key={c.cargo}>
                    <TableCell className="font-medium">{c.cargo}</TableCell>
                    <TableCell>{c.departamento}</TableCell>
                    <TableCell>{c.salarioMin}</TableCell>
                    <TableCell>{c.salarioMax}</TableCell>
                    <TableCell>
                        <Button variant="outline" size="sm">Editar</Button>
                    </TableCell>
                </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  )
}
