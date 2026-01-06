'use client';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Search, PlusCircle, FileUp, FileDown } from 'lucide-react';
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
import { Badge } from '@/components/ui/badge';
import { colaboradores, cargos as allCargos, departamentos as allDepartamentos, filiais as allFiliais } from '@/data/database';

export default function AdministracaoPessoalPage() {
  
  const getCargoNome = (cargoId: string) => allCargos.find(c => c.id === cargoId)?.nome || 'N/A';
  const getFilialNome = (filialId: string) => allFiliais.find(f => f.id === filialId)?.nome || 'N/A';

  return (
    <Card>
      <CardHeader>
        <div className="flex justify-between items-center">
          <div>
            <CardTitle>Administração de Pessoal</CardTitle>
            <CardDescription>Gerencie todos os colaboradores da sua empresa.</CardDescription>
          </div>
          <div className="flex gap-2">
            <Button variant="outline"><FileUp className="mr-2 h-4 w-4" /> Importar</Button>
            <Button variant="outline"><FileDown className="mr-2 h-4 w-4" /> Exportar</Button>
            <Dialog>
              <DialogTrigger asChild>
                <Button>
                  <PlusCircle className="mr-2 h-4 w-4" />
                  Novo Colaborador
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[500px]">
                <DialogHeader>
                  <DialogTitle>Cadastrar Novo Colaborador</DialogTitle>
                  <DialogDescription>
                    Preencha os dados do novo membro da equipe.
                  </DialogDescription>
                </DialogHeader>
                <div className="grid gap-4 py-4">
                  <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="nome" className="text-right">Nome</Label>
                    <Input id="nome" placeholder="Nome completo" className="col-span-3" />
                  </div>
                  <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="cargo" className="text-right">Cargo</Label>
                    <Input id="cargo" placeholder="Ex: Costureira" className="col-span-3" />
                  </div>
                  <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="setor" className="text-right">Setor</Label>
                     <Select>
                      <SelectTrigger className="col-span-3">
                        <SelectValue placeholder="Selecione o setor" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="producao">Produção</SelectItem>
                        <SelectItem value="rh">Recursos Humanos</SelectItem>
                        <SelectItem value="ti">TI</SelectItem>
                        <SelectItem value="administrativo">Administrativo</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                   <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="filial" className="text-right">Filial</Label>
                     <Select>
                      <SelectTrigger className="col-span-3">
                        <SelectValue placeholder="Selecione a filial" />
                      </SelectTrigger>
                      <SelectContent>
                        {allFiliais.map(f => <SelectItem key={f.id} value={f.id}>{f.nome}</SelectItem>)}
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                <DialogFooter>
                  <Button type="submit">Salvar Colaborador</Button>
                </DialogFooter>
              </DialogContent>
            </Dialog>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <div className="flex items-center pb-4">
            <div className="relative w-full">
                <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input placeholder="Buscar por nome, cargo ou setor..." className="pl-8" />
            </div>
        </div>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>ID</TableHead>
              <TableHead>Nome</TableHead>
              <TableHead>Cargo</TableHead>
              <TableHead>Setor</TableHead>
              <TableHead>Filial</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Ações</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {colaboradores.map(c => {
                const cargo = allCargos.find(ca => ca.id === c.cargoId);
                const departamento = allDepartamentos.find(d => d.id === cargo?.departamentoId);
                
                return (
                    <TableRow key={c.id}>
                        <TableCell className="font-mono text-xs">{c.id}</TableCell>
                        <TableCell className="font-medium">{c.nome}</TableCell>
                        <TableCell>{cargo?.nome || 'N/A'}</TableCell>
                        <TableCell>{departamento?.nome || 'N/A'}</TableCell>
                        <TableCell>{getFilialNome(c.filialId)}</TableCell>
                        <TableCell>
                        <Badge variant={c.status === 'Ativo' ? 'default' : 'secondary'}>{c.status}</Badge>
                        </TableCell>
                        <TableCell>
                            <Button variant="outline" size="sm">Ver Perfil</Button>
                        </TableCell>
                    </TableRow>
                )
            })}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  )
}
