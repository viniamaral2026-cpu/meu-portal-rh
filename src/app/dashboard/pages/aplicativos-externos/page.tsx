'use client';
import { Card, CardHeader, CardTitle, CardContent, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { Switch } from '@/components/ui/switch';
import { Activity, KeyRound, Link } from 'lucide-react';
import Image from 'next/image';

const apps = [
  { name: 'Senior ERP', icon: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_3_Bw7EltI9vXzP_L9Y7eC_qKjXkP-s_jlw&s', description: 'Sincronização de dados de funcionários e produção.', category: 'ERP' },
  { name: 'Google Workspace', icon: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStFqgCvsC8q_iMry-b-C0kYyXpM4sVj-i-qA&s', description: 'Integração de contas de email e agenda.', category: 'Produtividade' },
  { name: 'Microsoft 365', icon: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgK2G3JZ3Wz4A_xM8Qd2lY6C6Y5tX_xH8VwQ&s', description: 'Autenticação de usuários via Azure AD.', category: 'Produtividade' },
];

export default function AplicativosExternosPage() {
  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Aplicativos Externos</CardTitle>
          <CardDescription>Gerencie as integrações com outros sistemas e serviços.</CardDescription>
        </CardHeader>
      </Card>
      <Card>
        <CardHeader>
          <h3 className="text-lg font-semibold">Conexões Ativas</h3>
        </CardHeader>
        <CardContent className="space-y-4">
          {apps.map((app, index) => (
            <div key={app.name}>
              <div className="flex items-center gap-4 p-4">
                <Image src={app.icon} alt={app.name} width={40} height={40} className="rounded-md" />
                <div className="flex-1">
                  <h4 className="font-semibold">{app.name}</h4>
                  <p className="text-sm text-muted-foreground">{app.description}</p>
                </div>
                <div className="flex items-center gap-4">
                  <Button variant="outline" size="sm"><Activity className="mr-2 h-4 w-4"/> Ver Logs</Button>
                  <Button variant="outline" size="sm"><KeyRound className="mr-2 h-4 w-4"/> Gerenciar API</Button>
                  <Switch defaultChecked={true} />
                </div>
              </div>
              {index < apps.length - 1 && <Separator />}
            </div>
          ))}
        </CardContent>
      </Card>
        <Card>
        <CardHeader>
          <h3 className="text-lg font-semibold">Adicionar Nova Conexão</h3>
        </CardHeader>
        <CardContent>
            <p className="text-muted-foreground mb-4">Selecione um aplicativo para começar a integração.</p>
            <Button><Link className="mr-2 h-4 w-4" /> Conectar Novo App</Button>
        </CardContent>
      </Card>
    </div>
  );
}
