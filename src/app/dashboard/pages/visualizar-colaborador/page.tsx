'use client';

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Mail, Phone } from "lucide-react";
import type { Employee } from "../../employees/page";

type VisualizarColaboradorPageProps = {
    data?: { employee: Employee };
}

export default function VisualizarColaboradorPage({ data }: VisualizarColaboradorPageProps) {
    const employee = data?.employee;

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
        <Card>
            <CardHeader>
                <div className="flex items-center gap-4">
                    <Avatar className="h-20 w-20">
                        <AvatarFallback className="text-3xl">{employee.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                    </Avatar>
                    <div>
                        <CardTitle className="text-2xl">{employee.name}</CardTitle>
                        <CardDescription>{employee.role} - {employee.sector}</CardDescription>
                    </div>
                </div>
            </CardHeader>
            <CardContent className="space-y-4">
                <h3 className="font-semibold">Informações de Contato</h3>
                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <Mail className="h-4 w-4" />
                    <span>{employee.cpf.replace(/[.-]/g, '')}@empresa.com</span>
                </div>
                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <Phone className="h-4 w-4" />
                    <span>(11) 9XXXX-XXXX</span>
                </div>
                 <Button>Editar Perfil</Button>
            </CardContent>
        </Card>
    )
}
