'use client';

import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { useToast } from '@/hooks/use-toast';
import { Share2, PlusCircle, Search, Trash2, FileText, BarChart, Users, Link } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Checkbox } from '@/components/ui/checkbox';

type SharedItemType = 'report' | 'dashboard' | 'view';
type PermissionLevel = 'view' | 'edit' | 'full';

type SharedItem = {
    id: string;
    name: string;
    type: SharedItemType;
    sharedWith: { id: string, name: string, avatar: string }[];
    sharedDate: string;
};

const initialSharedItems: SharedItem[] = [
    { id: 'item1', name: 'Relatório de Headcount por Setor', type: 'report', sharedWith: [{id: 'u1', name: 'Ana Silva', avatar: '/avatars/01.png'}, {id: 'u2', name: 'Grupo Diretoria', avatar: ''}], sharedDate: '2024-07-10' },
    { id: 'item2', name: 'Dashboard de Turnover', type: 'dashboard', sharedWith: [{id: 'u3', name: 'Carlos Lima', avatar: '/avatars/02.png'}], sharedDate: '2024-07-09' },
    { id: 'item3', name: 'Visão de Dados: Salários 2024', type: 'view', sharedWith: [{id: 'u4', name: 'Equipe RH', avatar: ''}], sharedDate: '2024-07-08' },
];

const typeConfig: { [key in SharedItemType]: { icon: React.ReactNode, text: string } } = {
    report: { icon: <FileText size={16} />, text: 'Relatório' },
    dashboard: { icon: <BarChart size={16} />, text: 'Dashboard' },
    view: { icon: <FileText size={16} />, text: 'Visão de Dados' },
};

const permissionConfig: { [key in PermissionLevel]: { text: string } } = {
    view: { text: 'Pode Visualizar' },
    edit: { text: 'Pode Editar' },
    full: { text: 'Acesso Total' },
}

export default function CompartilhamentoPage() {
    const [items, setItems] = useState(initialSharedItems);
    const [isDialogOpen, setIsDialogOpen] = useState(false);
    const { toast } = useToast();
    
    const handleShare = () => {
        setIsDialogOpen(false);
        toast({
            title: 'Compartilhamento Realizado!',
            description: 'O item foi compartilhado com os usuários selecionados.',
        });
    }

    return (
        <div className="p-4 space-y-4">
            <Card>
                <CardHeader className="flex-row items-center justify-between">
                    <div>
                        <CardTitle className="flex items-center gap-2"><Share2 /> Central de Compartilhamento</CardTitle>
                        <CardDescription>Gerencie com quem relatórios, painéis e visões de dados são compartilhados.</CardDescription>
                    </div>
                    <Button onClick={() => setIsDialogOpen(true)}><PlusCircle className="mr-2 h-4 w-4" /> Novo Compartilhamento</Button>
                </CardHeader>
                <CardContent>
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead>Nome do Item</TableHead>
                                <TableHead>Tipo</TableHead>
                                <TableHead>Compartilhado Com</TableHead>
                                <TableHead>Data</TableHead>
                                <TableHead className="text-right">Ações</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {items.map(item => (
                                <TableRow key={item.id}>
                                    <TableCell className="font-medium">{item.name}</TableCell>
                                    <TableCell>
                                        <Badge variant="outline" className="flex items-center gap-2 w-fit">
                                            {typeConfig[item.type].icon}
                                            {typeConfig[item.type].text}
                                        </Badge>
                                    </TableCell>
                                    <TableCell>
                                        <div className="flex items-center space-x-2">
                                            <div className="flex -space-x-2 overflow-hidden">
                                                {item.sharedWith.map(user => (
                                                    <Avatar key={user.id} className="inline-block h-6 w-6 rounded-full ring-2 ring-background">
                                                        <AvatarFallback>{user.name.charAt(0)}</AvatarFallback>
                                                    </Avatar>
                                                ))}
                                            </div>
                                            <span className='text-xs text-muted-foreground'>
                                                {item.sharedWith.length} usuário(s)/grupo(s)
                                            </span>
                                        </div>
                                    </TableCell>
                                    <TableCell>{new Date(item.sharedDate).toLocaleDateString()}</TableCell>
                                    <TableCell className="text-right">
                                        <Button variant="ghost" size="icon">
                                            <Trash2 className="h-4 w-4 text-destructive" />
                                        </Button>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </CardContent>
            </Card>

            <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
                <DialogContent className="sm:max-w-lg">
                    <DialogHeader>
                        <DialogTitle>Compartilhar Item</DialogTitle>
                        <DialogDescription>
                            Selecione um item e com quem você deseja compartilhá-lo.
                        </DialogDescription>
                    </DialogHeader>
                    <div className="space-y-4 py-4">
                        <div className="space-y-2">
                            <Label htmlFor="item-select">Item a ser compartilhado</Label>
                            <Select>
                                <SelectTrigger id="item-select">
                                    <SelectValue placeholder="Selecione um relatório, painel ou visão..." />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="item1">Relatório de Headcount por Setor</SelectItem>
                                    <SelectItem value="item2">Dashboard de Turnover</SelectItem>
                                    <SelectItem value="item3">Visão de Dados: Salários 2024</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="user-search">Compartilhar com usuários ou grupos</Label>
                            <div className="flex gap-2">
                                <Input id="user-search" placeholder="Digite um nome, email ou grupo..." />
                                <Button variant="outline"><Search className="h-4 w-4" /></Button>
                            </div>
                        </div>
                        <div className="space-y-2 rounded-lg border p-4">
                             <h4 className="text-sm font-medium">Pessoas com Acesso</h4>
                             <div className='flex items-center justify-between'>
                                <div className='flex items-center gap-2'>
                                    <Users className='h-8 w-8 text-muted-foreground' />
                                    <div>
                                        <p className='font-semibold'>Todos na Empresa</p>
                                        <p className='text-xs text-muted-foreground'>Qualquer pessoa na sua organização pode encontrar e visualizar</p>
                                    </div>
                                </div>
                                <Select defaultValue="view">
                                    <SelectTrigger className="w-[180px]">
                                        <SelectValue />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="view">Pode Visualizar</SelectItem>
                                        <SelectItem value="edit">Pode Editar</SelectItem>
                                    </SelectContent>
                                </Select>
                             </div>
                             <div className='flex items-center justify-between'>
                                <div className='flex items-center gap-2'>
                                    <Avatar>
                                        <AvatarFallback>AS</AvatarFallback>
                                    </Avatar>
                                    <div>
                                        <p className='font-semibold'>Ana Silva (Proprietário)</p>
                                        <p className='text-xs text-muted-foreground'>ana.silva@empresa.com</p>
                                    </div>
                                </div>
                                <p className='text-sm text-muted-foreground'>Acesso Total</p>
                             </div>
                        </div>
                         <div className="flex items-center space-x-2">
                            <Checkbox id="notify" defaultChecked />
                            <Label htmlFor="notify" className="text-sm font-normal">Notificar pessoas</Label>
                        </div>
                         <div className="flex items-center justify-between p-2 rounded-md bg-muted/50">
                            <Button variant="ghost" size="sm" className='text-muted-foreground'><Link className='mr-2 h-4 w-4' /> Copiar link</Button>
                         </div>
                    </div>
                    <DialogFooter>
                        <Button type="button" variant="secondary" onClick={() => setIsDialogOpen(false)}>Cancelar</Button>
                        <Button type="submit" onClick={handleShare}>Compartilhar</Button>
                    </DialogFooter>
                </DialogContent>
            </Dialog>
        </div>
    );
}
