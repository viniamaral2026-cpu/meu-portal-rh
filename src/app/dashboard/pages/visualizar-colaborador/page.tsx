'use client';

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Mail, Phone } from "lucide-react";

export default function VisualizarColaboradorPage({ data }: { data?: { employeeId: number } }) {
    // In a real app, you would fetch employee data based on the ID
    const employee = {
        id: data?.employeeId || 0,
        name: 'João da Silva',
        role: 'Cortador',
        sector: 'Corte',
        email: 'joao.silva@example.com',
        phone: '(11) 99999-8888',
        avatar: 'JS'
    }

    return (
        <Card>
            <CardHeader>
                <div className="flex items-center gap-4">
                    <Avatar className="h-20 w-20">
                        <AvatarFallback className="text-3xl">{employee.avatar}</AvatarFallback>
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
                    <span>{employee.email}</span>
                </div>
                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <Phone className="h-4 w-4" />
                    <span>{employee.phone}</span>
                </div>
                 <Button>Editar Perfil</Button>
            </CardContent>
        </Card>
    )
}
