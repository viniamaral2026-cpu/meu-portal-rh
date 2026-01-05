
'use client';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Search, FileDown, Calendar, AlertCircle } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { useState } from 'react';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Calendar as CalendarIcon } from '@/components/ui/calendar';
import { format } from 'date-fns';

const registros = [
    { id: 1, nome: 'Ana Silva', data: '2024-07-26', entrada: '09:02', saidaAlmoco: '12:30', retornoAlmoco: '13:35', saida: '18:05', status: 'Presente', horas: '08:08' },
    { id: 2, nome: 'Carlos Souza', data: '2024-07-26', entrada: '-', saidaAlmoco: '-', retornoAlmoco: '-', saida: '-', status: 'Falta', horas: '00:00' },
    { id: 3, nome: 'Beatriz Costa', data: '2024-07-26', entrada: '08:55', saidaAlmoco: '12:00', retornoAlmoco: '13:00', saida: '17:30', status: 'Presente', horas: '07:35' },
    { id: 4, nome: 'Daniel Almeida', data: '2024-07-26', entrada: '10:00', saidaAlmoco: '13:00', retornoAlmoco: '14:00', saida: '19:00', status: 'Atraso', horas: '08:00' },
    { id: 5, nome: 'Fernanda Lima', data: '2024-07-26', entrada: '09:00', saidaAlmoco: '12:00', retornoAlmoco: '-', saida: '-', status: 'Incompleto', horas: '03:00' },

]

const getStatusVariant = (status: string) => {
    switch (status) {
        case 'Presente': return 'default';
        case 'Falta': return 'destructive';
        case 'Atraso': return 'secondary';
        case 'Incompleto': return 'outline';
        default: return 'outline';
    }
}


export default function ControleJornadaPage() {
  const [date, setDate] = useState<Date | undefined>(new Date());

  return (
    <Card>
      <CardHeader>
        <div className="flex justify-between items-center">
          <div>
            <CardTitle>Controle de Jornada</CardTitle>
            <CardDescription>Visualize e gerencie os registros de ponto dos colaboradores.</CardDescription>
          </div>
          <div className='flex gap-2'>
            <Button variant="outline">
              <AlertCircle className="mr-2 h-4 w-4" />
              Justificar Ausência
            </Button>
            <Button>
              <FileDown className="mr-2 h-4 w-4" />
              Exportar Registros
            </Button>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <div className="flex items-center pb-4 gap-4">
            <div className="relative w-1/2">
                <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input placeholder="Buscar por nome do colaborador..." className="pl-8" />
            </div>
            <Popover>
              <PopoverTrigger asChild>
                <Button variant={"outline"} className="w-[240px] justify-start text-left font-normal">
                  <Calendar className="mr-2 h-4 w-4" />
                  {date ? format(date, "PPP") : <span>Escolha uma data</span>}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0" align="start">
                <CalendarIcon
                  mode="single"
                  selected={date}
                  onSelect={setDate}
                  initialFocus
                />
              </PopoverContent>
            </Popover>
        </div>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Colaborador</TableHead>
              <TableHead>Data</TableHead>
              <TableHead>Entrada</TableHead>
              <TableHead>Início Intervalo</TableHead>
              <TableHead>Fim Intervalo</TableHead>
              <TableHead>Saída</TableHead>
              <TableHead>Horas Trabalhadas</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Ações</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {registros.map(r => (
                <TableRow key={r.id}>
                    <TableCell className="font-medium">{r.nome}</TableCell>
                    <TableCell>{format(new Date(r.data), "dd/MM/yyyy")}</TableCell>
                    <TableCell>{r.entrada}</TableCell>
                    <TableCell>{r.saidaAlmoco}</TableCell>
                    <TableCell>{r.retornoAlmoco}</TableCell>
                    <TableCell>{r.saida}</TableCell>
                    <TableCell className="font-medium">{r.horas}</TableCell>
                    <TableCell><Badge variant={getStatusVariant(r.status) as any}>{r.status}</Badge></TableCell>
                    <TableCell>
                      <Button variant="outline" size="sm">Ajustar</Button>
                    </TableCell>
                </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  )
}
