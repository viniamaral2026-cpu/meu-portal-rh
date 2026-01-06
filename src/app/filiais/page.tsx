'use client';
import { useState, useEffect } from 'react';
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
  Building,
  CheckCircle,
  XCircle,
  Settings,
  AlertTriangle
} from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Switch } from '@/components/ui/switch';
import type { FilialDTO } from '@/application/dtos/FilialDTO';
import { filialService } from '@/services/FilialService';

const statusConfig: { [key in FilialDTO['status']]: { text: string; icon: React.ReactNode; badgeVariant: 'default' | 'secondary' | 'outline' } } = {
  active: { text: 'Ativa', icon: <CheckCircle className="h-3 w-3" />, badgeVariant: 'default' },
  inactive: { text: 'Inativa', icon: <XCircle className="h-3 w-3" />, badgeVariant: 'secondary' },
  setup: { text: 'Em Configuração', icon: <AlertTriangle className="h-3 w-3" />, badgeVariant: 'outline' },
};

export default function FiliaisPage() {
    const [branches, setBranches] = useState<FilialDTO[]>([]);
    const [isDialogOpen, setIsDialogOpen] = useState(false);
    const { toast } = useToast();

    useEffect(() => {
        filialService.listarFiliais().then(setBranches);
    }, []);
    
    const summaryCards = [
        { title: "Filiais Ativas", value: branches.filter(b => b.status === 'active').length },
        { title: "Filiais Inativas", value: branches.filter(b => b.status === 'inactive').length },
        { title: "Em Configuração", value: branches.filter(b => b.status === 'setup').length },
    ]

    const handleRegisterBranch = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const form = new FormData(event.currentTarget);
        const nome = form.get('branch-name') as string;
        const cnpj = form.get('branch-cnpj') as string;
        const localizacao = form.get('branch-location') as string;

        try {
            await filialService.criarFilial({ nome, cnpj, localizacao });
            const filiaisAtualizadas = await filialService.listarFiliais();
            setBranches(filiaisAtualizadas);
            setIsDialogOpen(false);
            toast({
                title: "Filial Cadastrada!",
                description: "A nova filial foi criada com sucesso.",
            });
        } catch (error) {
            toast({
                variant: 'destructive',
                title: "Erro ao Cadastrar",
                description: error instanceof Error ? error.message : "Ocorreu um erro desconhecido.",
            });
        }
    };

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
                            <form id="filial-form" onSubmit={handleRegisterBranch}>
                                <div className="space-y-4 py-4">
                                    <div className="space-y-2">
                                        <Label htmlFor="branch-name">Nome da Filial</Label>
                                        <Input id="branch-name" name="branch-name" placeholder="Ex: Filial Nordeste" required />
                                    </div>
                                    <div className="space-y-2">
                                        <Label htmlFor="branch-cnpj">CNPJ</Label>
                                        <Input id="branch-cnpj" name="branch-cnpj" placeholder="00.000.000/0004-00" required />
                                    </div>
                                    <div className="space-y-2">
                                        <Label htmlFor="branch-location">Localização</Label>
                                        <Input id="branch-location" name="branch-location" placeholder="Cidade, UF" required />
                                    </div>
                                    <div className="flex items-center space-x-2 pt-2">
                                        <Switch id="inherit-config" defaultChecked />
                                        <Label htmlFor="inherit-config">Espelhar configurações da matriz</Label>
                                    </div>
                                </div>
                                <DialogFooter>
                                    <Button type="button" variant="secondary" onClick={() => setIsDialogOpen(false)}>Cancelar</Button>
                                    <Button type="submit">Cadastrar</Button>
                                </DialogFooter>
                            </form>
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
                                    <TableCell className="font-medium">{branch.nome}</TableCell>
                                    <TableCell>{branch.localizacao}</TableCell>
                                    <TableCell className="text-muted-foreground">{branch.cnpj}</TableCell>
                                    <TableCell>
                                         <Badge variant={statusConfig[branch.status].badgeVariant} className="flex w-fit items-center gap-1.5">
                                            {statusConfig[branch.status].icon}
                                            {statusConfig[branch.status].text}
                                         </Badge>
                                    </TableCell>
                                    <TableCell className="text-right space-x-2">
                                        <Button variant="outline" size="sm"><Settings className="mr-2 h-4 w-4" /> Configurar</Button>
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