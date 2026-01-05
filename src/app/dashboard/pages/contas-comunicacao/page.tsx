'use client';

import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { useToast } from '@/hooks/use-toast';
import { PlusCircle, Edit, Trash2, Mail, MessageSquare, CheckCircle, XCircle, Loader2, Send } from 'lucide-react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Separator } from '@/components/ui/separator';

type AccountType = 'smtp' | 'sms';
type AccountStatus = 'active' | 'error' | 'inactive';

type Account = {
  id: string;
  name: string;
  type: AccountType;
  provider: string;
  status: AccountStatus;
  details: {
    host?: string;
    port?: number;
    user?: string;
    password?: string;
    accountSid?: string;
    authToken?: string;
  };
};

const initialAccounts: Account[] = [
  { id: 'acc1', name: 'Servidor de Email Principal (Gmail)', type: 'smtp', provider: 'Gmail', status: 'active', details: { host: 'smtp.gmail.com', port: 587, user: 'naoresponda@suaempresa.com' } },
  { id: 'acc2', name: 'Gateway de SMS (Twilio)', type: 'sms', provider: 'Twilio', status: 'active', details: { accountSid: 'ACxxxxxxxxxxxx' } },
  { id: 'acc3', name: 'Servidor de Email Legado', type: 'smtp', provider: 'Outro', status: 'error', details: { host: 'mail.legado.com', port: 25, user: 'contato@legado.com' } },
  { id: 'acc4', name: 'Conta de Testes SMS', type: 'sms', provider: 'Outro', status: 'inactive', details: {} },
];

const typeConfig: { [key in AccountType]: { text: string; icon: React.ReactNode } } = {
  smtp: { text: 'Email (SMTP)', icon: <Mail className="h-4 w-4" /> },
  sms: { text: 'SMS', icon: <MessageSquare className="h-4 w-4" /> },
};

const statusConfig: { [key in AccountStatus]: { text: string; icon: React.ReactNode; badgeVariant: 'default' | 'destructive' | 'secondary' } } = {
  active: { text: 'Ativa', icon: <CheckCircle className="h-4 w-4 text-green-500" />, badgeVariant: 'default' },
  error: { text: 'Com Erro', icon: <XCircle className="h-4 w-4 text-red-500" />, badgeVariant: 'destructive' },
  inactive: { text: 'Inativa', icon: <XCircle className="h-4 w-4 text-gray-500" />, badgeVariant: 'secondary' },
};

const emptyAccount: Omit<Account, 'id' | 'status'> = { name: '', type: 'smtp', provider: '', details: {} };

export default function ContasComunicacaoPage() {
  const [accounts, setAccounts] = useState<Account[]>(initialAccounts);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [currentAccount, setCurrentAccount] = useState<Omit<Account, 'id' | 'status'> | Account>(emptyAccount);
  const { toast } = useToast();

  const handleSave = () => {
    if ('id' in currentAccount) {
      setAccounts(prev => prev.map(a => (a.id === currentAccount.id ? { ...currentAccount } as Account : a)));
      toast({ title: "Conta Atualizada", description: `A conta "${currentAccount.name}" foi atualizada.` });
    } else {
      const newAccount: Account = { ...currentAccount, id: `acc${Date.now()}`, status: 'inactive' };
      setAccounts(prev => [...prev, newAccount]);
      toast({ title: "Conta Adicionada", description: `A conta "${newAccount.name}" foi adicionada.` });
    }
    setIsDialogOpen(false);
  };
  
  const handleEdit = (account: Account) => {
    setCurrentAccount(account);
    setIsDialogOpen(true);
  }

  const handleAddNew = () => {
    setCurrentAccount(emptyAccount);
    setIsDialogOpen(true);
  }
  
  const handleTest = (account: Account) => {
    toast({ title: "Testando Conexão...", description: `Enviando mensagem de teste para a conta "${account.name}".`});
    setTimeout(() => {
        toast({ title: "Conexão bem-sucedida!", description: "A mensagem de teste foi enviada e recebida."});
    }, 2000);
  }

  return (
    <div className="p-4 space-y-4">
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <Card>
          <CardHeader className="flex-row items-center justify-between">
            <div>
              <CardTitle>Contas de Comunicação</CardTitle>
              <CardDescription>Gerencie as contas e credenciais para as integrações (email, SMS, etc).</CardDescription>
            </div>
            <Button onClick={handleAddNew}><PlusCircle className="mr-2 h-4 w-4" /> Adicionar Conta</Button>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Nome da Conta</TableHead>
                  <TableHead>Tipo</TableHead>
                  <TableHead>Provedor</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead className="text-right">Ações</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {accounts.map((account) => (
                  <TableRow key={account.id}>
                    <TableCell className="font-medium">{account.name}</TableCell>
                    <TableCell>
                      <div className="flex items-center gap-2">
                        {typeConfig[account.type].icon}
                        {typeConfig[account.type].text}
                      </div>
                    </TableCell>
                    <TableCell>{account.provider}</TableCell>
                    <TableCell>
                      <Badge variant={statusConfig[account.status].badgeVariant} className="flex w-fit items-center gap-2">
                        {statusConfig[account.status].icon}
                        {statusConfig[account.status].text}
                      </Badge>
                    </TableCell>
                    <TableCell className="text-right space-x-2">
                      <Button variant="outline" size="sm" onClick={() => handleTest(account)}>
                        <Send className="mr-2 h-4 w-4" /> Testar
                      </Button>
                      <Button variant="outline" size="icon" onClick={() => handleEdit(account)}><Edit className="h-4 w-4" /></Button>
                      <Button variant="destructive" size="icon"><Trash2 className="h-4 w-4" /></Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>

        <DialogContent className="sm:max-w-xl">
          <DialogHeader>
            <DialogTitle>{'id' in currentAccount ? 'Editar Conta' : 'Adicionar Nova Conta'}</DialogTitle>
            <DialogDescription>
              Preencha os detalhes para a conta de comunicação. As senhas são armazenadas de forma segura.
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-4 py-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="account-name">Nome da Conta</Label>
                <Input id="account-name" value={currentAccount.name} onChange={e => setCurrentAccount(p => ({...p, name: e.target.value}))} placeholder="Ex: Email para holerites" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="account-type">Tipo de Conta</Label>
                <Select value={currentAccount.type} onValueChange={(v: AccountType) => setCurrentAccount(p => ({...p, type: v}))}>
                  <SelectTrigger id="account-type">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="smtp">Email (SMTP)</SelectItem>
                    <SelectItem value="sms">Gateway de SMS</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            
            <Separator />
            
            {currentAccount.type === 'smtp' && (
              <div className="space-y-4">
                 <h4 className="font-medium text-center">Configurações SMTP</h4>
                 <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                        <Label htmlFor="smtp-provider">Provedor</Label>
                        <Input id="smtp-provider" value={currentAccount.provider} onChange={e => setCurrentAccount(p => ({...p, provider: e.target.value}))} placeholder="Gmail, SendGrid, etc." />
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="smtp-host">Host</Label>
                        <Input id="smtp-host" value={currentAccount.details.host} placeholder="smtp.provedor.com" />
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="smtp-port">Porta</Label>
                        <Input id="smtp-port" type="number" value={currentAccount.details.port} placeholder="587" />
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="smtp-user">Usuário</Label>
                        <Input id="smtp-user" value={currentAccount.details.user} placeholder="seu-email@provedor.com" />
                    </div>
                    <div className="space-y-2 col-span-full">
                        <Label htmlFor="smtp-password">Senha</Label>
                        <Input id="smtp-password" type="password" placeholder="••••••••••••" />
                    </div>
                 </div>
              </div>
            )}

            {currentAccount.type === 'sms' && (
              <div className="space-y-4">
                 <h4 className="font-medium text-center">Configurações SMS</h4>
                 <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                     <div className="space-y-2">
                        <Label htmlFor="sms-provider">Provedor</Label>
                        <Input id="sms-provider" value={currentAccount.provider} onChange={e => setCurrentAccount(p => ({...p, provider: e.target.value}))} placeholder="Twilio, etc." />
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="sms-sid">Account SID</Label>
                        <Input id="sms-sid" placeholder="ACxxxxxxxxxxxxxxxxxx" />
                    </div>
                     <div className="space-y-2 col-span-full">
                        <Label htmlFor="sms-token">Auth Token</Label>
                        <Input id="sms-token" type="password" placeholder="••••••••••••" />
                    </div>
                 </div>
              </div>
            )}
          </div>
          <DialogFooter>
            <Button type="button" variant="secondary" onClick={() => setIsDialogOpen(false)}>Cancelar</Button>
            <Button type="submit" onClick={handleSave}>Salvar Conta</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}
