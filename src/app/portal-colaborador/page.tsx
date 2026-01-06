'use client';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Separator } from '@/components/ui/separator';
import { Badge } from '@/components/ui/badge';
import { FileText, Calendar, DollarSign, Edit, Download } from 'lucide-react';

const employeeData = {
    name: 'João da Silva',
    role: 'Cortador',
    department: 'Corte',
    avatar: '/avatars/01.png', // Placeholder
    lastPaycheck: {
        date: '05/07/2024',
        value: 'R$ 3.049,50'
    },
    vacation: {
        status: 'Programada',
        period: '01/08/2024 a 30/08/2024'
    },
    timeclock: {
        lastEntry: '10/07/2024 08:02'
    }
};

const quickActions = [
    { label: 'Meu Holerite', icon: DollarSign, description: 'Visualize e baixe seus holerites.' },
    { label: 'Informe de Rendimentos', icon: FileText, description: 'Acesse seu informe para o IRPF.' },
    { label: 'Minhas Férias', icon: Calendar, description: 'Consulte seu saldo e programe suas férias.' },
    { label: 'Meus Dados', icon: Edit, description: 'Atualize seus dados cadastrais e de contato.' },
];

export default function PortalColaboradorPage() {
    return (
        <div className="p-4 bg-muted/20 min-h-full">
            <div className="max-w-6xl mx-auto space-y-6">
                {/* Header */}
                <Card>
                    <CardContent className="p-6 flex justify-between items-center">
                         <div className="flex items-center gap-4">
                            <Avatar className="h-20 w-20 border-2 border-primary">
                                <AvatarFallback className="text-3xl">JS</AvatarFallback>
                            </Avatar>
                            <div>
                                <h1 className="text-2xl font-bold">Bem-vindo, {employeeData.name}!</h1>
                                <p className="text-muted-foreground">{employeeData.role} • {employeeData.department}</p>
                            </div>
                        </div>
                        <Button>Registrar Ponto</Button>
                    </CardContent>
                </Card>

                {/* Quick Actions */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                    {quickActions.map(action => (
                        <Card key={action.label} className="hover:bg-muted/50 hover:shadow-lg transition-all">
                           <CardHeader className="flex-row items-center gap-4 space-y-0">
                                <div className="bg-primary/10 p-3 rounded-full">
                                    <action.icon className="h-6 w-6 text-primary" />
                                </div>
                                <CardTitle>{action.label}</CardTitle>
                           </CardHeader>
                            <CardContent>
                               <p className="text-sm text-muted-foreground">{action.description}</p>
                           </CardContent>
                        </Card>
                    ))}
                </div>

                {/* Details Section */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    {/* Paycheck */}
                    <Card className="lg:col-span-2">
                        <CardHeader>
                            <CardTitle>Último Holerite</CardTitle>
                            <CardDescription>Resumo do seu último pagamento, referente a Junho/2024.</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <div className="bg-muted/50 rounded-lg p-6 flex items-center justify-between">
                                <div>
                                    <p className="text-sm text-muted-foreground">Valor Líquido</p>
                                    <p className="text-3xl font-bold">{employeeData.lastPaycheck.value}</p>
                                    <p className="text-xs text-muted-foreground">Pago em {employeeData.lastPaycheck.date}</p>
                                </div>
                                <Button variant="outline"><Download className="mr-2 h-4 w-4" /> Baixar PDF</Button>
                            </div>
                            <Separator className="my-4"/>
                            <div className="grid grid-cols-2 gap-4 text-sm">
                                <div className="space-y-2">
                                    <p className="font-medium">Proventos</p>
                                    <div className="flex justify-between"><span>Salário Base:</span> <span>R$ 3.500,00</span></div>
                                    <div className="flex justify-between"><span>Horas Extras:</span> <span>R$ 250,50</span></div>
                                </div>
                                 <div className="space-y-2">
                                    <p className="font-medium">Descontos</p>
                                    <div className="flex justify-between"><span>INSS:</span> <span>- R$ 350,50</span></div>
                                    <div className="flex justify-between"><span>Vale Transporte:</span> <span>- R$ 100,00</span></div>
                                </div>
                            </div>
                        </CardContent>
                    </Card>

                    {/* Vacation & Timeclock */}
                    <div className="space-y-6">
                        <Card>
                            <CardHeader>
                                <CardTitle className="flex items-center gap-2"><Calendar /> Férias</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <Badge>{employeeData.vacation.status}</Badge>
                                <p className="mt-2 text-sm text-muted-foreground">
                                    Período programado: <strong>{employeeData.vacation.period}</strong>.
                                </p>
                                <Button variant="link" className="px-0">Ver saldo e histórico</Button>
                            </CardContent>
                        </Card>
                         <Card>
                            <CardHeader>
                                <CardTitle>Espelho de Ponto</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-sm text-muted-foreground">Último registro:</p>
                                <p className="font-semibold">{employeeData.timeclock.lastEntry}</p>
                                <Button variant="link" className="px-0">Ver espelho de ponto completo</Button>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </div>
        </div>
    );
}