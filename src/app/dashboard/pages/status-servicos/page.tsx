'use client';
import { Card, CardHeader, CardTitle, CardContent, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { CheckCircle2, AlertTriangle, RefreshCw, Server, Database, Mail } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

const services = [
  { name: 'Aplicação Web (Frontend)', status: 'Operacional', icon: <Server /> },
  { name: 'Banco de Dados (Firestore)', status: 'Operacional', icon: <Database /> },
  { name: 'Serviço de Autenticação', status: 'Operacional', icon: <Server /> },
  { name: 'Conector ERP (Senior)', status: 'Instável', icon: <Server /> },
  { name: 'Serviço de E-mail (SMTP)', status: 'Operacional', icon: <Mail /> },
  { name: 'Serviço de Notificações Push', status: 'Operacional', icon: <Server /> },
];

const getStatusInfo = (status: string) => {
    if (status === 'Operacional') {
        return {
            color: 'text-green-500',
            icon: <CheckCircle2 className="h-5 w-5"/>,
            badge: 'default'
        }
    }
     return {
        color: 'text-yellow-500',
        icon: <AlertTriangle className="h-5 w-5"/>,
        badge: 'destructive'
    }
}


export default function StatusServicosPage() {
  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <div className="flex justify-between items-center">
            <div>
              <CardTitle>Status dos Serviços</CardTitle>
              <CardDescription>Monitore a saúde de todos os componentes da plataforma MeuRH.</CardDescription>
            </div>
            <Button variant="outline"><RefreshCw className="mr-2 h-4 w-4"/> Atualizar Status</Button>
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
            {services.map(service => {
                const statusInfo = getStatusInfo(service.status);
                return (
                    <div key={service.name} className="flex items-center justify-between p-4 border rounded-lg">
                        <div className="flex items-center gap-4">
                            <span className={statusInfo.color}>{service.icon}</span>
                            <p className="font-semibold">{service.name}</p>
                        </div>
                        <div className="flex items-center gap-2">
                             <span className={`${statusInfo.color} font-bold text-sm`}>{service.status}</span>
                        </div>
                    </div>
                )
            })}
        </CardContent>
      </Card>
      
       <Card>
        <CardHeader>
            <CardTitle>Histórico de Incidentes</CardTitle>
            <CardDescription>Últimos 7 dias</CardDescription>
        </CardHeader>
        <CardContent>
            <div className="space-y-3">
                 <div className="flex items-start gap-4">
                    <AlertTriangle className="h-5 w-5 text-yellow-500 mt-1"/>
                    <div>
                        <p className="font-semibold">Instabilidade no Conector ERP</p>
                        <p className="text-sm text-muted-foreground">[Iniciado] 26/07/2024 09:00 - [Resolvido] 26/07/2024 09:45</p>
                        <p className="text-sm">O serviço de sincronização com o ERP Senior apresentou timeouts intermitentes. A equipe de infraestrutura já aplicou uma correção.</p>
                    </div>
                 </div>
            </div>
        </CardContent>
       </Card>
    </div>
  );
}
