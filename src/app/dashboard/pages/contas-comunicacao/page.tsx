'use client';
import { Card, CardHeader, CardTitle, CardContent, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { Switch } from '@/components/ui/switch';
import { Mail, MessageSquare, Save } from 'lucide-react';

export default function ContasComunicacaoPage() {
  return (
    <div className="space-y-6">
       <Card>
        <CardHeader>
            <CardTitle>Contas de Comunicação</CardTitle>
            <CardDescription>Configure os serviços de envio de e-mails e SMS para notificações.</CardDescription>
        </CardHeader>
      </Card>
      
      <Card>
        <CardHeader className="flex flex-row items-center gap-4">
            <Mail className="h-6 w-6" />
            <div>
                <CardTitle>Serviço de E-mail (SMTP)</CardTitle>
                <CardDescription>Usado para enviar holerites, avisos e redefinição de senha.</CardDescription>
            </div>
        </CardHeader>
        <CardContent className="space-y-4">
            <div className="flex items-center justify-between">
                <p className="font-medium">Ativar serviço de e-mail</p>
                <Switch defaultChecked={true} />
            </div>
            <Separator/>
            <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                    <label>Servidor SMTP</label>
                    <input className="w-full border p-2 rounded-md" defaultValue="smtp.seuprovedor.com" />
                </div>
                <div className="space-y-2">
                    <label>Porta</label>
                    <input className="w-full border p-2 rounded-md" defaultValue="587" />
                </div>
                 <div className="space-y-2">
                    <label>Usuário</label>
                    <input className="w-full border p-2 rounded-md" defaultValue="seu-usuario" />
                </div>
                 <div className="space-y-2">
                    <label>Senha</label>
                    <input type="password" className="w-full border p-2 rounded-md" defaultValue="sua-senha" />
                </div>
            </div>
            <Button variant="secondary">Testar Conexão</Button>
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="flex flex-row items-center gap-4">
            <MessageSquare className="h-6 w-6" />
            <div>
                <CardTitle>Serviço de SMS (Gateway)</CardTitle>
                <CardDescription>Usado para alertas urgentes e autenticação de dois fatores.</CardDescription>
            </div>
        </CardHeader>
        <CardContent className="space-y-4">
            <div className="flex items-center justify-between">
                <p className="font-medium">Ativar serviço de SMS</p>
                <Switch defaultChecked={false} />
            </div>
             <Separator/>
            <div className="space-y-2">
                <label>API Key do Gateway</label>
                <input type="password" className="w-full border p-2 rounded-md" placeholder="Cole sua API Key aqui" />
            </div>
             <Button variant="secondary">Testar Conexão</Button>
        </CardContent>
      </Card>
      
       <div className="flex justify-end">
            <Button size="lg"><Save className="mr-2 h-4 w-4"/> Salvar Todas as Configurações</Button>
       </div>
    </div>
  );
}
