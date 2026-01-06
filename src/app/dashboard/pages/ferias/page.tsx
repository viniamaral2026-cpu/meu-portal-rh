'use client';
import { Card, CardHeader, CardTitle, CardContent, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { CalendarPlus, Check, X, Hourglass } from 'lucide-react';
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
import { Input } from '@/components/ui/input';

const solicitacoes = [
  { id: 'SOL001', colaborador: 'Carlos Dias', setor: 'Produção', dataInicio: '10/08/2024', dias: 15, status: 'Aprovada' },
  { id: 'SOL002', colaborador: 'Daniela Souza', setor: 'TI', dataInicio: '01/09/2024', dias: 10, status: 'Pendente' },
  { id: 'SOL003', colaborador: 'Fernanda Alves', setor: 'Administrativo', dataInicio: '15/08/2024', dias: 5, status: 'Rejeitada' },
  { id: 'SOL004', colaborador: 'Ana Silva', setor: 'Produção', dataInicio: '20/09/2024', dias: 20, status: 'Pendente' },
];

const getStatusVariant = (status: string) => {
    switch (status) {
        case 'Aprovada': return 'default';
        case 'Pendente': return 'secondary';
        case 'Rejeitada': return 'destructive';
        default: return 'outline';
    }
}

export default function FeriasPage() {
  return (
    <Card>
      <CardHeader>
        <div className="flex justify-between items-center">
          <div>
            <CardTitle>Gestão de Férias</CardTitle>
            <CardDescription>Aprove ou rejeite solicitações de férias dos colaboradores.</CardDescription>
          </div>
          <Dialog>
              <DialogTrigger asChild>
                <Button>
                  <CalendarPlus className="mr-2 h-4 w-4" />
                  Programar Férias
                </Button>
              </DialogTrigger>
              <DialogContent>
                  <DialogHeader>
                    <DialogTitle>Programar Férias para Colaborador</DialogTitle>
                    <DialogDescription>Preencha os detalhes para agendar as férias.</DialogDescription>
                  </DialogHeader>
                   <div className="grid gap-4 py-4">
                        <div className="space-y-2">
                            <Label htmlFor="colaborador">Colaborador</Label>
                            <Input id="colaborador" placeholder="Digite o nome do colaborador"/>
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                            <div className="space-y-2">
                                <Label htmlFor="data-inicio">Data de Início</Label>
                                <Input id="data-inicio" type="date"/>
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="dias">Quantidade de Dias</Label>
                                <Input id="dias" type="number" placeholder="Ex: 20"/>
                            </div>
                        </div>
                   </div>
                   <DialogFooter>
                        <Button type="submit">Agendar Férias</Button>
                   </DialogFooter>
              </DialogContent>
          </Dialog>
        </div>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Colaborador</TableHead>
              <TableHead>Setor</TableHead>
              <TableHead>Data de Início</TableHead>
              <TableHead>Dias Solicitados</TableHead>
              <TableHead>Status</TableHead>
              <TableHead className="text-right">Ações</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {solicitacoes.map((s) => (
                <TableRow key={s.id}>
                    <TableCell className="font-medium">{s.colaborador}</TableCell>
                    <TableCell>{s.setor}</TableCell>
                    <TableCell>{s.dataInicio}</TableCell>
                    <TableCell>{s.dias}</TableCell>
                    <TableCell><Badge variant={getStatusVariant(s.status) as any}>{s.status}</Badge></TableCell>
                    <TableCell className="text-right">
                        {s.status === 'Pendente' && (
                            <div className="flex gap-2 justify-end">
                                <Button variant="outline" size="sm" className="bg-green-50 hover:bg-green-100 text-green-700 border-green-200"><Check className="mr-1 h-4 w-4"/> Aprovar</Button>
                                <Button variant="outline" size="sm" className="bg-red-50 hover:bg-red-100 text-red-700 border-red-200"><X className="mr-1 h-4 w-4"/> Rejeitar</Button>
                            </div>
                        )}
                        {s.status !== 'Pendente' && (
                            <Button variant="ghost" size="sm"><Hourglass className="mr-1 h-4 w-4"/> Ver Histórico</Button>
                        )}
                    </TableCell>
                </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}
