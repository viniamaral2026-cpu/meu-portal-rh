'use client';

import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import {
  FileText,
  Settings,
  History,
  Check,
  Download,
} from 'lucide-react';

const historyData = [
  {
    layout: 'SEFIP',
    competencia: '06/2024',
    dataHora: '2024-07-10 09:30',
    usuario: 'Admin',
    status: 'Gerado',
  },
  {
    layout: 'DIRF',
    competencia: '12/2023',
    dataHora: '2024-01-15 11:45',
    usuario: 'Admin',
    status: 'Gerado',
  },
    {
    layout: 'CAGED',
    competencia: '06/2024',
    dataHora: '2024-07-05 14:00',
    usuario: 'RH',
    status: 'Gerado',
  },
];

export default function GeradorSaidasPage() {
  return (
    <div className="bg-muted/40 min-h-screen p-4 sm:p-6 lg:p-8">
      <div className="max-w-7xl mx-auto space-y-6">
        <Card>
          <CardHeader>
            <div className="flex items-center gap-3">
              <Settings className="h-6 w-6" />
              <CardTitle className="text-2xl">Gerador de Saídas</CardTitle>
            </div>
            <CardDescription>
              Gere arquivos de exportação em layouts específicos para integração
              com sistemas governamentais, bancários e contábeis.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-8">
            {/* Section 1 */}
            <div className="space-y-4">
              <h3 className="font-semibold text-lg">
                1. Selecione o Layout de Saída
              </h3>
              <div className="max-w-sm">
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Escolha um layout..." />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="sefip">SEFIP</SelectItem>
                    <SelectItem value="dirf">DIRF</SelectItem>
                    <SelectItem value="caged">CAGED</SelectItem>
                    <SelectItem value="rais">RAIS</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            {/* Section 2 */}
            <div className="space-y-4">
              <h3 className="font-semibold text-lg">2. Defina os Parâmetros</h3>
              <div className="p-4 border rounded-lg bg-background">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div>
                    <Label htmlFor="competencia">Competência</Label>
                    <Input id="competencia" type="month" defaultValue="2024-07" />
                  </div>
                  <div>
                    <Label htmlFor="tipo-folha">Tipo da Folha</Label>
                    <Select defaultValue="mensal">
                      <SelectTrigger id="tipo-folha">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="mensal">Folha Mensal</SelectItem>
                        <SelectItem value="adiantamento">Adiantamento</SelectItem>
                        <SelectItem value="13-salario">13º Salário</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label htmlFor="estabelecimento">Estabelecimento</Label>
                    <Select defaultValue="todos">
                      <SelectTrigger id="estabelecimento">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="todos">Todos</SelectItem>
                        <SelectItem value="matriz">Unidade Matriz</SelectItem>
                        <SelectItem value="filial-sp">Filial São Paulo</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <Button size="lg">
                <Download className="mr-2 h-4 w-4" />
                Gerar Arquivo
              </Button>
              <Button size="lg" variant="outline">
                <Check className="mr-2 h-4 w-4" />
                Validar Dados
              </Button>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <div className="flex items-center gap-3">
              <History className="h-6 w-6" />
              <CardTitle>Histórico de Gerações</CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Layout</TableHead>
                  <TableHead>Competência</TableHead>
                  <TableHead>Data/Hora</TableHead>
                  <TableHead>Usuário</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Ação</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {historyData.map((item, index) => (
                  <TableRow key={index}>
                    <TableCell className="font-medium">{item.layout}</TableCell>
                    <TableCell>{item.competencia}</TableCell>
                    <TableCell>{item.dataHora}</TableCell>
                    <TableCell>{item.usuario}</TableCell>
                    <TableCell>
                      <span className="text-green-600 font-semibold">{item.status}</span>
                    </TableCell>
                    <TableCell>
                      <Button variant="ghost" size="icon">
                        <FileText className="h-4 w-4" />
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
