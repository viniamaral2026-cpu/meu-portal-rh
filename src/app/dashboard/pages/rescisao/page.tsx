'use client';
import { Card, CardHeader, CardTitle, CardContent, CardDescription, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Rocket, FileText } from 'lucide-react';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

const verbas = [
    { tipo: 'Provento', descricao: 'Saldo de Salário (15 dias)', valor: 'R$ 2.500,00' },
    { tipo: 'Provento', descricao: 'Aviso Prévio Indenizado', valor: 'R$ 5.000,00' },
    { tipo: 'Provento', descricao: 'Férias Vencidas + 1/3', valor: 'R$ 6.666,67' },
    { tipo: 'Provento', descricao: '13º Salário Proporcional', valor: 'R$ 2.916,67' },
    { tipo: 'Desconto', descricao: 'INSS sobre 13º Salário', valor: 'R$ 218,75' },
    { tipo: 'Desconto', descricao: 'IRRF sobre Férias', valor: 'R$ 750,00' },
];

export default function RescisaoPage() {
  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Cálculo de Rescisão Contratual</CardTitle>
          <CardDescription>Simule e processe a rescisão de um colaborador.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                 <div className="space-y-2">
                    <Label htmlFor="colaborador">Colaborador</Label>
                    <Input id="colaborador" placeholder="Digite o nome..." />
                </div>
                 <div className="space-y-2">
                    <Label htmlFor="motivo">Motivo da Rescisão</Label>
                     <Select>
                        <SelectTrigger id="motivo"><SelectValue placeholder="Selecione..."/></SelectTrigger>
                        <SelectContent>
                            <SelectItem value="pedido">Pedido de Demissão</SelectItem>
                            <SelectItem value="dispensa-sem-justa-causa">Dispensa sem Justa Causa</SelectItem>
                            <SelectItem value="dispensa-com-justa-causa">Dispensa com Justa Causa</SelectItem>
                        </SelectContent>
                    </Select>
                </div>
                <div className="space-y-2">
                    <Label htmlFor="data-desligamento">Data de Desligamento</Label>
                    <Input id="data-desligamento" type="date" />
                </div>
            </div>
             <Button><Rocket className="mr-2 h-4 w-4"/> Calcular Rescisão</Button>
        </CardContent>
      </Card>
      
      <Card>
        <CardHeader>
            <CardTitle>Termo de Rescisão do Contrato de Trabalho (TRCT)</CardTitle>
            <CardDescription>Colaborador: João da Silva | Data do Cálculo: 26/07/2024</CardDescription>
        </CardHeader>
        <CardContent>
            <Table>
                <TableHeader>
                    <TableRow>
                        <TableHead>Tipo</TableHead>
                        <TableHead>Descrição da Verba</TableHead>
                        <TableHead className="text-right">Valor (R$)</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {verbas.map(v => (
                        <TableRow key={v.descricao}>
                            <TableCell><span className={v.tipo === 'Provento' ? 'text-green-600' : 'text-red-600'}>{v.tipo}</span></TableCell>
                            <TableCell>{v.descricao}</TableCell>
                            <TableCell className={`text-right font-medium ${v.tipo === 'Provento' ? 'text-green-600' : 'text-red-600'}`}>{v.valor}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </CardContent>
        <CardFooter className="flex justify-between items-center bg-muted p-4 rounded-b-lg">
            <div className="text-lg">
                <span className="font-semibold">Valor Líquido da Rescisão: </span>
                <span className="font-bold text-primary">R$ 16.114,59</span>
            </div>
            <Button variant="outline"><FileText className="mr-2 h-4 w-4" /> Gerar TRCT em PDF</Button>
        </CardFooter>
      </Card>

    </div>
  );
}
