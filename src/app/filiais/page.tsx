
'use client';
import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { useToast } from '@/hooks/use-toast';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import {
  Factory,
  PlusCircle,
  FileDown,
  Building,
  CheckCircle,
  XCircle,
  BarChart,
  Copy,
} from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Switch } from '@/components/ui/switch';

type BranchStatus = 'active' | 'inactive' | 'setup';

type Branch = {
  id: string;
  name: string;
  location: string;
  cnpj: string;
  status: BranchStatus;
};

const initialBranches: Branch[] = [
  { id: 'matriz', name: 'Unidade Matriz', location: 'Franca, SP', cnpj: '00.000.000/0001-00', status: 'active' },
  { id: 'filial_mg', name: 'Filial Nova Serrana', location: 'Nova Serrana, MG', cnpj: '00.000.000/0002-00', status: 'active' },
  { id: 'filial_rs', name: 'Filial Sapiranga', location: 'Sapiranga, RS', cnpj: '00.000.000/0003-00', status: 'setup' },
];

const statusConfig: { [key in BranchStatus]: { text: string; icon: React.ReactNode; badgeVariant: 'default' | 'secondary' | 'outline' } } = {
  active: { text: 'Ativa', icon: <CheckCircle className="h-4 w-4 text-green-500" />, badgeVariant: 'default' },
  inactive: { text: 'Inativa', icon: <XCircle className="h-4 w-4 text-gray-500" />, badgeVariant: 'secondary' },
  setup: { text: 'Em Configuração', icon: <XCircle className="h-4 w-4 text-yellow-500" />, badgeVariant: 'outline' },
};

const summaryCards = [
    { title: "Filiais Ativas", value: initialBranches.filter(b => b.status === 'active').length },
    { title: "Filiais Inativas", value: initialBranches.filter(b => b.status === 'inactive').length },
    { title: "Filiais em Configuração", value: initialBranches.filter(b => b.status === 'setup').length },
]

export default function FiliaisPage() {
    const [branches, setBranches] = useState(initialBranches);
    const [isDialogOpen, setIsDialogOpen] = useState(false);
    const { toast } = useToast();

    const handleRegisterBranch = () => {
        setIsDialogOpen(false);
        toast({
            title: "Cadastro Enviado!",
            description: "A nova filial está sendo configurada. Você será notificado quando o processo for concluído.",
        });
    }

    return (
        <div className="p-4 space-y-4">
             <div className="grid gap-4 md:grid-cols-3">
                 {summaryCards.map((stat) => (
                    <Card key={stat.title}>
                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                            <CardTitle className="text-sm font-medium">{stat.title}</CardTitle>
                            <Building className="h-4 w-4 text-muted-foreground"/>
                        </CardHeader>
                        <CardContent>
                            <div className="text-2xl font-bold">{stat.value}</div>
                        </CardContent>
                    </Card>
                ))}
            </div>

            <Card>
                <CardHeader className="flex-row items-center justify-between">
                    <div>
                        <CardTitle className="flex items-center gap-2"><Factory /> Gestão de Filiais</CardTitle>
                        <CardDescription>Cadastre, configure e gerencie as unidades da sua empresa.</CardDescription>
                    </div>
                     <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
                        <DialogTrigger asChild>
                            <Button><PlusCircle className="mr-2 h-4 w-4" /> Cadastrar Nova Filial</Button>
                        </DialogTrigger>
                         <DialogContent className="sm:max-w-md">
                            <DialogHeader>
                                <DialogTitle>Cadastrar Nova Filial</DialogTitle>
                                <DialogDescription>
                                    Preencha os dados da nova unidade. O sistema criará um ambiente espelhado.
                                </DialogDescription>
                            </DialogHeader>
                            <div className="space-y-4 py-4">
                                <div className="space-y-2">
                                    <Label htmlFor="branch-name">Nome da Filial</Label>
                                    <Input id="branch-name" placeholder="Ex: Filial Nordeste" />
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="branch-cnpj">CNPJ</Label>
                                    <Input id="branch-cnpj" placeholder="00.000.000/0004-00" />
                                </div>
                                 <div className="space-y-2">
                                    <Label htmlFor="branch-location">Localização</Label>
                                    <Input id="branch-location" placeholder="Cidade, UF" />
                                </div>
                                <div className="flex items-center space-x-2 pt-2">
                                    <Switch id="inherit-config" defaultChecked />
                                    <Label htmlFor="inherit-config">Espelhar configurações da matriz (usuários, permissões, etc.)</Label>
                                </div>
                            </div>
                            <DialogFooter>
                                <Button type="button" variant="secondary" onClick={() => setIsDialogOpen(false)}>Cancelar</Button>
                                <Button type="submit" onClick={handleRegisterBranch}>Cadastrar</Button>
                            </DialogFooter>
                        </DialogContent>
                    </Dialog>
                </CardHeader>
                <CardContent>
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead>Nome</TableHead>
                                <TableHead>Localização</TableHead>
                                <TableHead>CNPJ</TableHead>
                                <TableHead>Status</TableHead>
                                <TableHead className="text-right">Ações</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {branches.map(branch => (
                                <TableRow key={branch.id}>
                                    <TableCell className="font-medium">{branch.name}</TableCell>
                                    <TableCell>{branch.location}</TableCell>
                                    <TableCell className="text-muted-foreground">{branch.cnpj}</TableCell>
                                    <TableCell>
                                         <Badge variant={statusConfig[branch.status].badgeVariant} className="flex w-fit items-center gap-2">
                                            {statusConfig[branch.status].icon}
                                            {statusConfig[branch.status].text}
                                         </Badge>
                                    </TableCell>
                                    <TableCell className="text-right space-x-2">
                                        <Button variant="outline" size="sm"><BarChart className="mr-2 h-4 w-4" /> Painel</Button>
                                        <Button variant="outline" size="sm"><FileDown className="mr-2 h-4 w-4" /> Relatórios</Button>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </CardContent>
            </Card>
        </div>
    );
}
