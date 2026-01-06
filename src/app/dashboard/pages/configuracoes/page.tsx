'use client';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Switch } from '@/components/ui/switch';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Cog, Shield, Users, KeyRound, Workflow, Library, Save } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';


const userRoles = [
    { role: 'Administrador', description: 'Acesso total ao sistema.' },
    { role: 'Gerente de RH', description: 'Acesso a todas as funcionalidades de RH.' },
    { role: 'Analista de RH', description: 'Acesso limitado a operações do dia a dia.' },
    { role: 'Colaborador', description: 'Acesso apenas ao seu próprio portal.' },
];

export default function ConfiguracoesPage() {
    const { toast } = useToast();

    const handleSave = () => {
        toast({
            title: "Configurações Salvas",
            description: "As alterações foram salvas com sucesso (simulação)."
        });
    };

    return (
        <div className="p-4 space-y-6">
            <Card>
                <CardHeader className="flex-row items-start justify-between">
                    <div>
                        <CardTitle className="text-2xl flex items-center gap-2"><Cog /> Configurações Gerais do Sistema</CardTitle>
                        <CardDescription>Ajuste parâmetros globais, regras, permissões e integrações.</CardDescription>
                    </div>
                    <Button size="lg" onClick={handleSave}><Save className="mr-2 h-4 w-4" /> Salvar Todas as Alterações</Button>
                </CardHeader>
            </Card>

            {/* General System Parameters */}
            <Card>
                <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-lg"><Library /> Tabelas e Parâmetros</CardTitle>
                    <CardDescription>Gerencie tabelas de domínio, eventos e outras regras de negócio do sistema.</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                     <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2 p-4 border rounded-lg">
                            <Label htmlFor="default-shift">Jornada de Trabalho Padrão</Label>
                            <Select defaultValue='comercial'>
                                <SelectTrigger id="default-shift"><SelectValue /></SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="comercial">08:00 às 18:00 (Seg-Sex)</SelectItem>
                                    <SelectItem value="turno-1">Turno 1 (06:00 - 14:00)</SelectItem>
                                    <SelectItem value="turno-2">Turno 2 (14:00 - 22:00)</SelectItem>
                                </SelectContent>
                            </Select>
                            <p className="text-xs text-muted-foreground">Jornada padrão para novas admissões.</p>
                        </div>
                        <div className="flex items-center justify-between p-4 border rounded-lg">
                            <div>
                                <Label htmlFor="auto-events" className="font-semibold">Gerar Eventos Automáticos</Label>
                                <p className="text-xs text-muted-foreground">Cria eventos de folha (ex: DSR) automaticamente.</p>
                            </div>
                            <Switch id="auto-events" defaultChecked />
                        </div>
                     </div>
                </CardContent>
            </Card>

            {/* Security and Permissions */}
            <Card>
                <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-lg"><Shield /> Segurança e Permissões</CardTitle>
                    <CardDescription>Gerencie perfis de acesso e as permissões de cada um.</CardDescription>
                </CardHeader>
                <CardContent>
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead className="w-1/3">Perfil</TableHead>
                                <TableHead>Descrição</TableHead>
                                <TableHead className="text-right">Ações</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {userRoles.map(role => (
                                <TableRow key={role.role}>
                                    <TableCell className="font-medium flex items-center gap-2"><Users size={16} /> {role.role}</TableCell>
                                    <TableCell className="text-muted-foreground">{role.description}</TableCell>
                                    <TableCell className="text-right">
                                        <Button variant="outline" size="sm">Editar Permissões</Button>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </CardContent>
            </Card>
            
             {/* Integrations */}
            <Card>
                <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-lg"><Workflow /> Integrações e Conectores</CardTitle>
                    <CardDescription>Parâmetros gerais para as integrações com sistemas externos.</CardDescription>
                </CardHeader>
                <CardContent className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2 p-4 border rounded-lg">
                        <Label htmlFor="api-timeout">Timeout Global de API (ms)</Label>
                        <Input id="api-timeout" type="number" defaultValue={30000} />
                        <p className="text-xs text-muted-foreground">Tempo máximo de espera para respostas de APIs externas.</p>
                    </div>
                     <div className="space-y-2 p-4 border rounded-lg">
                        <Label htmlFor="log-level">Nível de Log das Integrações</Label>
                        <Select defaultValue='error'>
                            <SelectTrigger id="log-level"><SelectValue /></SelectTrigger>
                            <SelectContent>
                                <SelectItem value="debug">Debug (detalhado)</SelectItem>
                                <SelectItem value="info">Info (padrão)</SelectItem>
                                <SelectItem value="warn">Avisos</SelectItem>
                                <SelectItem value="error">Apenas Erros</SelectItem>
                            </SelectContent>
                        </Select>
                        <p className="text-xs text-muted-foreground">Define o nível de detalhe dos logs de integração.</p>
                    </div>
                </CardContent>
            </Card>

        </div>
    );
}
