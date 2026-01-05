'use client'

import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from '@/components/ui/dialog';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { PlusCircle, Link, Search, Share2, Users, MoreHorizontal, Edit, Trash2 } from 'lucide-react';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';


const sharedItems = [
    { id: 'rep001', name: 'Relatório de Turnover Q3', type: 'Relatório', sharedWith: 3, lastModified: '2024-07-18' },
    { id: 'dash002', name: 'Dashboard de Headcount', type: 'Dashboard', sharedWith: 5, lastModified: '2024-07-17' },
    { id: 'view003', name: 'Visão de Salários por Setor', type: 'Visão (Cubo)', sharedWith: 2, lastModified: '2024-07-16' },
    { id: 'rep004', name: 'Análise de Absenteísmo', type: 'Relatório', sharedWith: 1, lastModified: '2024-07-15' },
];

const users = [
    { id: 'user1', name: 'Ana Silva', email: 'ana.silva@example.com', avatar: 'AS' },
    { id: 'user2', name: 'Bruno Costa', email: 'bruno.costa@example.com', avatar: 'BC' },
    { id: 'user3', name: 'Carla Dias', email: 'carla.dias@example.com', avatar: 'CD' },
    { id: 'group1', name: 'Grupo Gestores', email: 'grupo.gestores@example.com', avatar: 'GG', isGroup: true },
]

export default function CompartilhamentoPage() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <div className="p-4 space-y-4">
            <Card>
                <CardHeader>
                    <div className="flex justify-between items-start">
                        <div>
                            <CardTitle>Gerenciamento de Compartilhamento</CardTitle>
                            <CardDescription>Compartilhe relatórios e dashboards com sua equipe.</CardDescription>
                        </div>
                        <Button onClick={() => setIsModalOpen(true)}>
                            <Share2 className="mr-2 h-4 w-4" /> Novo Compartilhamento
                        </Button>
                    </div>
                     <div className="mt-4 flex items-center gap-2">
                        <Input placeholder="Buscar por nome do item..." className="max-w-sm" />
                        <Button variant="outline">
                        <Search className="mr-2 h-4 w-4" /> Buscar
                        </Button>
                    </div>
                </CardHeader>
                <CardContent>
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead>Nome do Item</TableHead>
                                <TableHead>Tipo</TableHead>
                                <TableHead>Compartilhado Com</TableHead>
                                <TableHead>Última Modificação</TableHead>
                                <TableHead>Ações</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {sharedItems.map((item) => (
                                <TableRow key={item.id}>
                                    <TableCell className="font-medium">{item.name}</TableCell>
                                    <TableCell>{item.type}</TableCell>
                                    <TableCell>
                                        <div className="flex items-center">
                                            <Users className="h-4 w-4 mr-2 text-muted-foreground" />
                                            {item.sharedWith} {item.sharedWith > 1 ? 'pessoas/grupos' : 'pessoa/grupo'}
                                        </div>
                                    </TableCell>
                                    <TableCell>{new Date(item.lastModified).toLocaleDateString()}</TableCell>
                                    <TableCell>
                                        <DropdownMenu>
                                            <DropdownMenuTrigger asChild>
                                                <Button variant="ghost" size="icon">
                                                    <MoreHorizontal className="h-4 w-4" />
                                                </Button>
                                            </DropdownMenuTrigger>
                                            <DropdownMenuContent>
                                                <DropdownMenuItem><Edit className="h-4 w-4 mr-2" />Gerenciar Acesso</DropdownMenuItem>
                                                <DropdownMenuItem><Link className="h-4 w-4 mr-2" />Copiar Link</DropdownMenuItem>
                                                <DropdownMenuItem className="text-destructive"><Trash2 className="h-4 w-4 mr-2" />Remover Compartilhamentos</DropdownMenuItem>
                                            </DropdownMenuContent>
                                        </DropdownMenu>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </CardContent>
            </Card>

            <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
                <DialogContent className="sm:max-w-[625px]">
                    <DialogHeader>
                        <DialogTitle>Compartilhar Item</DialogTitle>
                        <DialogDescription>
                            Selecione o item e com quem você deseja compartilhar.
                        </DialogDescription>
                    </DialogHeader>
                    <div className="grid gap-4 py-4">
                         <div className="grid grid-cols-4 items-center gap-4">
                            <Label htmlFor="item-to-share" className="text-right">
                                Item
                            </Label>
                            <Select>
                                <SelectTrigger className="col-span-3">
                                    <SelectValue placeholder="Selecione um relatório, dashboard ou visão" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="rep001">Relatório de Turnover Q3</SelectItem>
                                    <SelectItem value="dash002">Dashboard de Headcount</SelectItem>
                                    <SelectItem value="view003">Visão de Salários por Setor</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>
                        <div className="grid grid-cols-4 items-center gap-4">
                            <Label htmlFor="name" className="text-right">
                                Adicionar pessoas
                            </Label>
                            <div className="col-span-3 flex gap-2">
                                <Input id="name" placeholder="Digite um nome, grupo ou e-mail..." />
                                 <Select defaultValue="VIEWER">
                                    <SelectTrigger className="w-[150px]">
                                        <SelectValue />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="VIEWER">Pode visualizar</SelectItem>
                                        <SelectItem value="EDITOR">Pode editar</SelectItem>
                                    </SelectContent>
                                </Select>
                                <Button>Adicionar</Button>
                            </div>
                        </div>

                        <div className="pl-[115px] col-span-4 space-y-2">
                            <p className="text-sm font-medium">Pessoas com acesso</p>
                            {users.slice(0, 2).map(user => (
                                 <div key={user.id} className="flex items-center justify-between p-2 rounded-md bg-muted/50">
                                    <div className='flex items-center gap-2'>
                                        <Avatar className="h-8 w-8">
                                            <AvatarFallback>{user.avatar}</AvatarFallback>
                                        </Avatar>
                                        <div>
                                            <p className="text-sm font-semibold">{user.name}</p>
                                            <p className="text-xs text-muted-foreground">{user.email}</p>
                                        </div>
                                    </div>
                                    <Select defaultValue="VIEWER">
                                        <SelectTrigger className="w-[150px]">
                                            <SelectValue />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value="VIEWER">Pode visualizar</SelectItem>
                                            <SelectItem value="EDITOR">Pode editar</SelectItem>
                                        </SelectContent>
                                    </Select>
                                </div>
                            ))}
                        </div>
                         <div className="pl-[115px] col-span-4 space-y-2">
                         <div className="flex items-center space-x-2">
                            <Checkbox id="notify" defaultChecked />
                            <Label htmlFor="notify" className="text-sm font-normal">Notificar pessoas</Label>
                        </div>
                         <div className="flex items-center justify-between p-2 rounded-md bg-muted/50">
                             <div className="flex items-center gap-2">
                                <Link className="h-8 w-8 p-2 rounded-full bg-background" />
                                <div>
                                    <p className="text-sm font-semibold">Qualquer pessoa com o link</p>
                                    <p className="text-xs text-muted-foreground">Pode visualizar este item</p>
                                </div>
                             </div>
                             <Button variant="outline">Copiar link</Button>
                         </div>
                        </div>
                    </div>
                    <DialogFooter>
                        <Button type="button" variant="outline" onClick={() => setIsModalOpen(false)}>Cancelar</Button>
                        <Button type="submit">Compartilhar</Button>
                    </DialogFooter>
                </DialogContent>
            </Dialog>
        </div>
    );
}
