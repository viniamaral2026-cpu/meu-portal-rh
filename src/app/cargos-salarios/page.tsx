
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { PlusCircle, Search } from 'lucide-react';

const cargos = [
    { cargo: 'Desenvolvedor Frontend Jr', departamento: 'TI', salarioMin: 'R$ 3.000', salarioMax: 'R$ 5.000' },
    { cargo: 'Desenvolvedor Frontend Pl', departamento: 'TI', salarioMin: 'R$ 5.000', salarioMax: 'R$ 9.000' },
    { cargo: 'Analista de RH', departamento: 'Recursos Humanos', salarioMin: 'R$ 4.000', salarioMax: 'R$ 7.000' },
    { cargo: 'Gerente de Vendas', departamento: 'Vendas', salarioMin: 'R$ 8.000', salarioMax: 'R$ 15.000' },
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
          <Button>
            <PlusCircle className="mr-2 h-4 w-4" />
            Novo Cargo
          </Button>
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
                    <TableCell>{c.cargo}</TableCell>
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
