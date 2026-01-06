'use client';

import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Mail, Phone, Smartphone, LogOut } from "lucide-react";
import type { Employee } from "../../employees/page";
import { useDashboard } from "../../layout";
import { Badge } from "@/components/ui/badge";

type VisualizarColaboradorPageProps = {
    tab: { data?: { employee: Employee } };
}

export default function VisualizarColaboradorPage({ tab }: VisualizarColaboradorPageProps) {
    const employee = tab?.data?.employee;
    const dashboard = useDashboard();

    const handleEdit = () => {
        if (!employee) return;
        dashboard.openTab({
            id: `editar-colaborador-${employee.id}`,
            title: `Edt. ${employee.name.split(' ')[0]}`,
            data: { employee: employee }
        });
    }

    if (!employee) {
         return (
            <Card>
                <CardHeader>
                    <CardTitle>Erro</CardTitle>
                    <CardDescription>Colaborador não encontrado.</CardDescription>
                </CardHeader>
                <CardContent>
                    <p className="text-muted-foreground">Não foi possível carregar os dados do colaborador. Por favor, feche esta aba e tente novamente.</p>
                </CardContent>
            </Card>
        );
    }

    return (
        <div className="p-4 space-y-6">
            <Card>
                <CardHeader>
                    <div className="flex flex-col md:flex-row items-start gap-6">
                        <Avatar className="h-24 w-24 border-2 border-primary">
                            <AvatarFallback className="text-4xl">{employee.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                        </Avatar>
                        <div className="flex-1">
                            <CardTitle className="text-3xl">{employee.name}</CardTitle>
                            <CardDescription className="text-base">{employee.role} - {employee.sector}</CardDescription>
                             <div className="mt-2 flex gap-2">
                                <Badge variant={employee.status === 'Ativo' ? 'default' : 'secondary'}>{employee.status}</Badge>
                                <Badge variant="outline">Matrícula: {employee.matricula}</Badge>
                                <Badge variant="outline">Código: {employee.code}</Badge>
                            </div>
                        </div>
                         <Button onClick={handleEdit}>Editar Perfil</Button>
                    </div>
                </CardHeader>
            </Card>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                <Card className="lg:col-span-1">
                    <CardHeader><CardTitle>Informações de Contato</CardTitle></CardHeader>
                    <CardContent className="space-y-3">
                         <div className="flex items-center gap-3 text-sm">
                            <Mail className="h-4 w-4 text-muted-foreground" />
                            <span>{employee.name.toLowerCase().replace(' ', '.')}@meurh.com</span>
                        </div>
                        <div className="flex items-center gap-3 text-sm">
                            <Phone className="h-4 w-4 text-muted-foreground" />
                            <span>(16) 3700-0000</span>
                        </div>
                        <p className="text-xs text-muted-foreground pt-2">O colaborador pode atualizar contatos pessoais através do Portal do Colaborador.</p>
                    </CardContent>
                </Card>
                 <Card className="lg:col-span-2">
                    <CardHeader><CardTitle>Sessões e Dispositivos Ativos</CardTitle></CardHeader>
                    <CardContent>
                         <div className="flex items-center justify-between p-3 bg-muted/50 rounded-lg">
                            <div className="flex items-center gap-3">
                                <Smartphone className="h-5 w-5 text-primary" />
                                <div>
                                    <p className="font-semibold">Android 14 (Samsung S23)</p>
                                    <p className="text-xs text-muted-foreground">Login com biometria ativado em 15/07/2024</p>
                                </div>
                            </div>
                            <Button variant="destructive" size="sm">
                                <LogOut className="mr-2 h-4 w-4" />
                                Revogar Acesso
                            </Button>
                        </div>
                    </CardContent>
                </Card>
            </div>
            
        </div>
    )
}
