'use client';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Search, UserCheck, UserX, Clock, Monitor } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';


const activeUsers = [
  {
    id: 'user1',
    name: 'Carlos Silva',
    avatar: 'CS',
    loginTime: '08:02:15',
    level: 'Admin',
    activity: 'Analisando Dashboard de BI',
    status: 'online',
  },
  {
    id: 'user2',
    name: 'Fernanda Lima',
    avatar: 'FL',
    loginTime: '08:10:45',
    level: 'Gestor de RH',
    activity: 'Gerenciando Avaliações de Desempenho',
    status: 'online',
  },
  {
    id: 'user3',
    name: 'Ricardo Souza',
    avatar: 'RS',
    loginTime: '09:00:05',
    level: 'Analista de RH',
    activity: 'Triagem de Currículos',
    status: 'online',
  },
   {
    id: 'user4',
    name: 'Beatriz Costa',
    avatar: 'BC',
    loginTime: '09:15:30',
    level: 'Analista de RH',
    activity: 'Página de Cargos',
    status: 'idle',
  },
   {
    id: 'user5',
    name: 'Mariano Pires',
    avatar: 'MP',
    loginTime: '10:05:00',
    level: 'Assistente',
    activity: 'Visualizando Documentação',
    status: 'offline',
  },
];

const getStatusInfo = (status: string) => {
    switch(status) {
        case 'online':
            return {
                badgeClass: 'bg-green-500 hover:bg-green-600',
                icon: <UserCheck className="h-4 w-4 mr-2" />,
                text: 'Online'
            };
        case 'idle':
            return {
                badgeClass: 'bg-yellow-500 hover:bg-yellow-600',
                icon: <Clock className="h-4 w-4 mr-2" />,
                text: 'Inativo'
            };
        case 'offline':
            return {
                badgeClass: 'bg-gray-500 hover:bg-gray-600',
                icon: <UserX className="h-4 w-4 mr-2" />,
                text: 'Offline'
            };
        default:
            return {
                badgeClass: '',
                icon: null,
                text: ''
            }
    }
}

export default function MonitoramentoUsuariosPage() {
  return (
    <div className="p-4 space-y-4">
      <Card>
        <CardHeader>
          <div className="flex justify-between items-center">
            <div>
              <CardTitle className="flex items-center gap-2">
                <Monitor className="h-6 w-6" />
                Monitoramento de Usuários Ativos
              </CardTitle>
              <CardDescription>
                Acompanhe em tempo real quem está usando o sistema.
              </CardDescription>
            </div>
          </div>
          <div className="mt-4 flex items-center gap-2">
            <Input
              placeholder="Buscar por nome ou nível..."
              className="max-w-sm"
            />
            <Button variant="outline">
              <Search className="mr-2 h-4 w-4" /> Buscar
            </Button>
          </div>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Colaborador</TableHead>
                <TableHead>Hora do Login</TableHead>
                <TableHead>Nível de Acesso</TableHead>
                <TableHead>Atividade Atual</TableHead>
                <TableHead>Status</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {activeUsers.map(user => {
                const statusInfo = getStatusInfo(user.status);
                return (
                    <TableRow key={user.id}>
                    <TableCell className="font-medium">
                        <div className="flex items-center gap-3">
                            <Avatar>
                                <AvatarFallback>{user.avatar}</AvatarFallback>
                            </Avatar>
                            {user.name}
                        </div>
                    </TableCell>
                    <TableCell>{user.loginTime}</TableCell>
                    <TableCell>{user.level}</TableCell>
                    <TableCell>{user.activity}</TableCell>
                    <TableCell>
                        <Badge className={statusInfo.badgeClass}>
                           {statusInfo.icon} {statusInfo.text}
                        </Badge>
                    </TableCell>
                    </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}
