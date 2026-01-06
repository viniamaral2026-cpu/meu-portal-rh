'use client';
import { Card, CardHeader, CardTitle, CardContent, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Share2, Link, Trash2, PlusCircle } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

const sharedLinks = [
  { id: '1', relatorio: 'Relatório de Produção - Jul/24', criadoEm: '25/07/2024', expiraEm: '01/08/2024', acessos: 12 },
  { id: '2', relatorio: 'Dashboard de Absenteísmo - Q2', criadoEm: '15/07/2024', expiraEm: '15/08/2024', acessos: 5 },
  { id: '3', relatorio: 'Análise de Headcount por Setor', criadoEm: '01/07/2024', expiraEm: 'N/A', acessos: 34 },
];

export default function CompartilhamentoPage() {
  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center">
            <Share2 className="mr-2 h-6 w-6" />
            Compartilhamento de Relatórios e Dashboards
          </CardTitle>
          <CardDescription>Crie e gerencie links públicos e seguros para compartilhar seus dados.</CardDescription>
        </CardHeader>
        <CardContent>
            <div className="p-4 border rounded-lg space-y-4">
                <h3 className="font-semibold">Gerar novo link de compartilhamento</h3>
                 <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                     <Select>
                        <SelectTrigger>
                            <SelectValue placeholder="Selecione o relatório ou dashboard..." />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="rel-prod">Relatório de Produção - Jul/24</SelectItem>
                            <SelectItem value="dash-abs">Dashboard de Absenteísmo - Q2</SelectItem>
                            <SelectItem value="analise-headcount">Análise de Headcount por Setor</SelectItem>
                        </SelectContent>
                    </Select>
                     <Select>
                        <SelectTrigger>
                            <SelectValue placeholder="Definir expiração..." />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="1">Expira em 1 dia</SelectItem>
                            <SelectItem value="7">Expira em 7 dias</SelectItem>
                            <SelectItem value="30">Expira em 30 dias</SelectItem>
                             <SelectItem value="never">Nunca expira</SelectItem>
                        </SelectContent>
                    </Select>
                    <Button className="w-full"><PlusCircle className="mr-2 h-4 w-4"/> Gerar Link</Button>
                 </div>
            </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
            <h3 className="font-semibold">Links Ativos</h3>
        </CardHeader>
        <CardContent>
            <Table>
                <TableHeader>
                    <TableRow>
                        <TableHead>Relatório / Dashboard</TableHead>
                        <TableHead>Criado em</TableHead>
                        <TableHead>Expira em</TableHead>
                        <TableHead>Acessos</TableHead>
                        <TableHead className="text-right">Ações</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {sharedLinks.map(link => (
                        <TableRow key={link.id}>
                            <TableCell className="font-medium">{link.relatorio}</TableCell>
                            <TableCell>{link.criadoEm}</TableCell>
                            <TableCell>
                                <Badge variant={link.expiraEm === 'N/A' ? 'secondary' : 'outline'}>{link.expiraEm}</Badge>
                            </TableCell>
                            <TableCell>{link.acessos}</TableCell>
                            <TableCell className="text-right">
                                <Button variant="ghost" size="icon"><Link className="h-4 w-4" /></Button>
                                <Button variant="ghost" size="icon" className="text-destructive"><Trash2 className="h-4 w-4" /></Button>
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
