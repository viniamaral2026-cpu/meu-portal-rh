
'use client'
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Search, Circle } from "lucide-react";
import { useState } from "react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const activityLog = [
  {
    id: 1,
    user: 'Alice',
    level: 'Admin',
    loginTime: '08:30:15',
    activity: 'Visualizou relatório de folha',
    status: 'Ativo',
  },
  {
    id: 2,
    user: 'Bob',
    level: 'RH',
    loginTime: '09:05:22',
    activity: 'Editando cadastro de Carlos',
    status: 'Ativo',
  },
  {
    id: 3,
    user: 'Charlie',
    level: 'Supervisor',
    loginTime: '09:15:03',
    activity: 'Aprovando férias de Daniel',
    status: 'Ativo',
  },
  {
    id: 4,
    user: 'David',
    level: 'Operador',
    loginTime: '09:20:50',
    activity: 'Visualizando metas de produção',
    status: 'Inativo',
  },
   {
    id: 5,
    user: 'Eve',
    level: 'RH',
    loginTime: '08:55:10',
    activity: 'Gerando arquivo SEFIP',
    status: 'Ativo',
  },
];

export default function UserMonitoringPage() {
    const [searchTerm, setSearchTerm] = useState('');

    const filteredLogs = activityLog.filter(log =>
        log.user.toLowerCase().includes(searchTerm.toLowerCase()) ||
        log.activity.toLowerCase().includes(searchTerm.toLowerCase()) ||
        log.level.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const getStatusColor = (status: string) => {
        return status === 'Ativo' ? 'text-green-500' : 'text-yellow-500';
    }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Monitoramento de Usuários Ativos</CardTitle>
        <CardDescription>
          Acompanhe em tempo real quem está online e o que estão fazendo no sistema.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex gap-4 mb-4">
          <div className="relative flex-1">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Filtrar por usuário, nível ou atividade..."
              className="w-full pl-8"
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
           <Select defaultValue="all">
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Filtrar por status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Todos os Status</SelectItem>
                <SelectItem value="ativo">Ativo</SelectItem>
                <SelectItem value="inativo">Inativo</SelectItem>
              </SelectContent>
            </Select>
        </div>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[80px]">Status</TableHead>
              <TableHead>Usuário</TableHead>
              <TableHead>Nível de Acesso</TableHead>
              <TableHead>Horário do Login</TableHead>
              <TableHead>Atividade Atual</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredLogs.map((log) => (
              <TableRow key={log.id}>
                <TableCell>
                  <div className="flex items-center gap-2">
                    <Circle className={`h-3 w-3 fill-current ${getStatusColor(log.status)}`} />
                    <span className="font-medium">{log.status}</span>
                  </div>
                </TableCell>
                <TableCell className="font-medium">{log.user}</TableCell>
                <TableCell>
                  <Badge variant="outline">{log.level}</Badge>
                </TableCell>
                <TableCell>{log.loginTime}</TableCell>
                <TableCell>{log.activity}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}
