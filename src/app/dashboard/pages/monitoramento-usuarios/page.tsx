'use client';
import { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { RefreshCw, User, Shield, Clock, Eye, AlertCircle, MessageCircle } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

type UserStatus = 'active' | 'idle' | 'offline';

type ActiveUser = {
  id: string;
  name: string;
  avatar: string;
  role: 'Administrador' | 'Gerente RH' | 'Analista RH';
  loginTime: Date;
  lastActivity: Date;
  currentScreen: string;
  status: UserStatus;
};

const initialUsers: ActiveUser[] = [
  { id: 'u1', name: 'Admin', avatar: '/avatars/01.png', role: 'Administrador', loginTime: new Date(Date.now() - 30 * 60 * 1000), lastActivity: new Date(Date.now() - 1 * 60 * 1000), currentScreen: 'Consulta de Colaboradores', status: 'active' },
  { id: 'u2', name: 'Carla (RH)', avatar: '/avatars/02.png', role: 'Gerente RH', loginTime: new Date(Date.now() - 2 * 60 * 60 * 1000), lastActivity: new Date(Date.now() - 8 * 60 * 1000), currentScreen: 'Dashboard Principal', status: 'idle' },
  { id: 'u3', name: 'Roberto (RH)', avatar: '/avatars/03.png', role: 'Analista RH', loginTime: new Date(Date.now() - 45 * 60 * 1000), lastActivity: new Date(Date.now() - 2 * 60 * 1000), currentScreen: 'Folha de Pagamento', status: 'active' },
];

const statusConfig: { [key in UserStatus]: { text: string; badgeVariant: 'default' | 'secondary' | 'outline' } } = {
  active: { text: 'Ativo', badgeVariant: 'default' },
  idle: { text: 'Ocioso', badgeVariant: 'secondary' },
  offline: { text: 'Offline', badgeVariant: 'outline' },
};

function formatDuration(milliseconds: number) {
  if (milliseconds < 0) milliseconds = 0;
  const seconds = Math.floor((milliseconds / 1000) % 60);
  const minutes = Math.floor((milliseconds / (1000 * 60)) % 60);
  const hours = Math.floor((milliseconds / (1000 * 60 * 60)));
  return `${String(hours).padStart(2, '0')}h ${String(minutes).padStart(2, '0')}m`;
}


export default function MonitoramentoUsuariosPage() {
    const [users, setUsers] = useState(initialUsers);
    const [currentTime, setCurrentTime] = useState(new Date());
    const { toast } = useToast();

    useEffect(() => {
        const timer = setInterval(() => setCurrentTime(new Date()), 1000);
        return () => clearInterval(timer);
    }, []);

    const handleRefresh = () => {
        toast({
            title: 'Lista Atualizada',
            description: 'A lista de usuários ativos foi atualizada.',
        });
    };
    
    const handleSendMessage = (userName: string) => {
        toast({
            title: 'Mensagem Enviada (Simulação)',
            description: `Sua mensagem foi enviada para ${userName}.`,
        });
    };
    
    const handleForceLogout = (userName: string) => {
        toast({
            variant: 'destructive',
            title: 'Usuário Desconectado (Simulação)',
            description: `${userName} foi desconectado do sistema.`,
        });
    };

  return (
    <div className="p-4">
      <Card>
        <CardHeader className="flex-row items-center justify-between">
            <div>
                <CardTitle className="text-2xl flex items-center gap-2"><Eye /> Monitoramento de Usuários Ativos</CardTitle>
                <CardDescription>Acompanhe em tempo real quem está online e o que está fazendo no sistema.</CardDescription>
            </div>
            <Button variant="outline" onClick={handleRefresh}><RefreshCw className="mr-2 h-4 w-4" /> Atualizar Lista</Button>
        </CardHeader>
        <CardContent>
            <Table>
                <TableHeader>
                    <TableRow>
                        <TableHead>Usuário</TableHead>
                        <TableHead>Nível</TableHead>
                        <TableHead>Tempo Logado</TableHead>
                        <TableHead>Última Atividade</TableHead>
                        <TableHead>Tela Atual</TableHead>
                        <TableHead>Status</TableHead>
                        <TableHead className="text-right">Ações</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {users.map(user => {
                        const loginDuration = currentTime.getTime() - user.loginTime.getTime();
                        const lastActivityDuration = currentTime.getTime() - user.lastActivity.getTime();
                        
                        let currentStatus: UserStatus = 'active';
                        if (lastActivityDuration > 5 * 60 * 1000) { // 5 minutes
                            currentStatus = 'idle';
                        }
                        
                        return (
                             <TableRow key={user.id}>
                                <TableCell>
                                    <div className="flex items-center gap-3">
                                        <Avatar>
                                            <AvatarFallback>{user.name.charAt(0)}</AvatarFallback>
                                        </Avatar>
                                        <span className="font-medium">{user.name}</span>
                                    </div>
                                </TableCell>
                                <TableCell>
                                    <Badge variant="outline" className="flex items-center gap-2 w-fit">
                                        <Shield size={14}/>{user.role}
                                    </Badge>
                                </TableCell>
                                <TableCell>
                                    <div className="flex items-center gap-2 text-muted-foreground">
                                        <Clock size={14}/> {formatDuration(loginDuration)}
                                    </div>
                                </TableCell>
                                 <TableCell className='text-muted-foreground'>{formatDuration(lastActivityDuration)} atrás</TableCell>
                                <TableCell>{user.currentScreen}</TableCell>
                                <TableCell>
                                     <Badge variant={statusConfig[currentStatus].badgeVariant}>
                                        {statusConfig[currentStatus].text}
                                    </Badge>
                                </TableCell>
                                <TableCell className="text-right space-x-2">
                                     <Button variant="outline" size="sm" onClick={() => handleSendMessage(user.name)}><MessageCircle className="mr-2 h-4 w-4"/> Enviar Mensagem</Button>
                                     <Button variant="destructive" size="sm" onClick={() => handleForceLogout(user.name)}><AlertCircle className="mr-2 h-4 w-4"/> Forçar Logout</Button>
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
