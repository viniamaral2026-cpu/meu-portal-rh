'use client';
import { Card, CardHeader, CardTitle, CardContent, CardDescription, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { Rocket, FileText, Download, Upload, AlertCircle } from 'lucide-react';
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from '@/components/ui/select';
import { Progress } from '@/components/ui/progress';

const proventos = [
  { evento: '001', descricao: 'Salário Base', valor: 'R$ 550.000,00' },
  { evento: '010', descricao: 'Horas Extras 50%', valor: 'R$ 25.000,00' },
  { evento: '015', descricao: 'Adicional Noturno', valor: 'R$ 8.500,00' },
];

const descontos = [
  { evento: '101', descricao: 'INSS', valor: 'R$ 45.300,00' },
  { evento: '102', descricao: 'IRRF', valor: 'R$ 32.100,00' },
  { evento: '105', descricao: 'Vale Transporte', valor: 'R$ 15.800,00' },
];

export default function FolhaMensalPage() {
  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <div className="flex justify-between items-center">
            <div>
              <CardTitle>Processamento da Folha Mensal</CardTitle>
              <CardDescription>Calcule, confira e finalize a folha de pagamento da competência.</CardDescription>
            </div>
             <div className="flex items-center gap-2">
                <Button variant="outline"><Upload className="mr-2 h-4 w-4"/> Importar Eventos</Button>
                <Button><Rocket className="mr-2 h-4 w-4"/> Processar Folha</Button>
             </div>
          </div>
        </CardHeader>
        <CardContent className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="space-y-2">
                <label className="text-sm font-medium">Competência</label>
                <Input type="month" defaultValue="2024-07" />
            </div>
            <div className="space-y-2">
                <label className="text-sm font-medium">Tipo da Folha</label>
                <Select defaultValue="mensal">
                    <SelectTrigger><SelectValue/></SelectTrigger>
                    <SelectContent>
                        <SelectItem value="mensal">Folha Mensal</SelectItem>
                        <SelectItem value="adiantamento">Adiantamento</SelectItem>
                        <SelectItem value="13-salario">13º Salário</SelectItem>
                    </SelectContent>
                </Select>
            </div>
            <div className="space-y-2">
                <label className="text-sm font-medium">Status</label>
                 <div className="flex items-center h-10 px-3 border rounded-md bg-muted">
                    <Badge variant="secondary">Aberta</Badge>
                 </div>
            </div>
        </CardContent>
         <CardFooter>
            <div className="w-full space-y-2">
                <Progress value={25} />
                <p className="text-sm text-muted-foreground">Etapa 1 de 4: Aguardando processamento...</p>
            </div>
         </CardFooter>
      </Card>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
            <CardHeader><CardTitle>Resumo de Proventos</CardTitle></CardHeader>
            <CardContent>
                <Table>
                    <TableHeader><TableRow><TableHead>Evento</TableHead><TableHead>Descrição</TableHead><TableHead className="text-right">Valor</TableHead></TableRow></TableHeader>
                    <TableBody>
                        {proventos.map(p=><TableRow key={p.evento}><TableCell>{p.evento}</TableCell><TableCell>{p.descricao}</TableCell><TableCell className="text-right text-green-600 font-medium">{p.valor}</TableCell></TableRow>)}
                    </TableBody>
                </Table>
            </CardContent>
        </Card>
         <Card>
            <CardHeader><CardTitle>Resumo de Descontos</CardTitle></CardHeader>
            <CardContent>
                 <Table>
                    <TableHeader><TableRow><TableHead>Evento</TableHead><TableHead>Descrição</TableHead><TableHead className="text-right">Valor</TableHead></TableRow></TableHeader>
                    <TableBody>
                        {descontos.map(d=><TableRow key={d.evento}><TableCell>{d.evento}</TableCell><TableCell>{d.descricao}</TableCell><TableCell className="text-right text-red-600 font-medium">{d.valor}</TableCell></TableRow>)}
                    </TableBody>
                </Table>
            </CardContent>
        </Card>
      </div>

       <Card>
        <CardHeader>
            <CardTitle>Relatórios e Exportações</CardTitle>
            <CardDescription>Gere os relatórios e arquivos necessários após o fechamento da folha.</CardDescription>
        </CardHeader>
        <CardContent className="flex flex-wrap gap-4">
            <Button variant="outline"><FileText className="mr-2 h-4 w-4"/> Resumo da Folha (.pdf)</Button>
            <Button variant="outline"><FileText className="mr-2 h-4 w-4"/> Relação de Líquidos (.pdf)</Button>
            <Button variant="outline"><Download className="mr-2 h-4 w-4"/> Arquivo Bancário (.txt)</Button>
            <Button variant="outline"><Download className="mr-2 h-4 w-4"/> Lançamento Contábil (.csv)</Button>
            <Button variant="destructive" className="bg-red-50 hover:bg-red-100 text-red-700 border border-red-200">
                <AlertCircle className="mr-2 h-4 w-4"/> Relatório de Inconsistências
            </Button>
        </CardContent>
      </Card>

    </div>
  );
}
