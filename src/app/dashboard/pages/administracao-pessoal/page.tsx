
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Users, UserPlus, UserX, FileText } from 'lucide-react';

const stats = [
  { title: "Colaboradores Ativos", value: "152", icon: Users },
  { title: "Admissões no Mês", value: "5", icon: UserPlus },
  { title: "Demissões no Mês", value: "2", icon: UserX },
];

const quickActions = [
    { label: "Admitir Colaborador", icon: UserPlus },
    { label: "Programar Férias", icon: FileText },
    { label: "Calcular Rescisão", icon: UserX },
    { label: "Gerenciar Contratos", icon: FileText },
]

export default function AdministracaoPessoalPage() {
    return (
        <div className="p-4 space-y-4">
            <div className="grid gap-4 md:grid-cols-3">
                 {stats.map((stat, index) => (
                    <Card key={index}>
                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                            <CardTitle className="text-sm font-medium">{stat.title}</CardTitle>
                            <stat.icon className="h-4 w-4 text-muted-foreground" />
                        </CardHeader>
                        <CardContent>
                            <div className="text-2xl font-bold">{stat.value}</div>
                        </CardContent>
                    </Card>
                ))}
            </div>

            <Card>
                <CardHeader>
                    <CardTitle>Ações Rápidas</CardTitle>
                    <CardDescription>Atalhos para as operações mais comuns do dia a dia.</CardDescription>
                </CardHeader>
                <CardContent className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {quickActions.map((action, index) => (
                        <Button key={index} variant="outline" className="flex flex-col h-24 items-center justify-center gap-2">
                            <action.icon className="h-6 w-6" />
                            <span>{action.label}</span>
                        </Button>
                    ))}
                </CardContent>
            </Card>
        </div>
    );
}
