import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Activity, Users, Clock, CheckCircle } from "lucide-react";

const summaryCards = [
    {
        title: "Colaboradores Ativos",
        value: "1,254",
        change: "+20.1% from last month",
        icon: <Users className="h-4 w-4 text-muted-foreground" />,
    },
    {
        title: "Avaliações Pendentes",
        value: "32",
        change: "+180.1% from last month",
        icon: <Activity className="h-4 w-4 text-muted-foreground" />,
    },
    {
        title: "Horas Registradas (Mês)",
        value: "12,548",
        change: "+19% from last month",
        icon: <Clock className="h-4 w-4 text-muted-foreground" />,
    },
    {
        title: "Compliance",
        value: "99.8%",
        change: "+0.2% from last month",
        icon: <CheckCircle className="h-4 w-4 text-muted-foreground" />,
    },
];

export default function DashboardPage() {
    return (
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {summaryCards.map((card, index) => (
                <Card key={index}>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">{card.title}</CardTitle>
                        {card.icon}
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">{card.value}</div>
                        <p className="text-xs text-muted-foreground">{card.change}</p>
                    </CardContent>
                </Card>
            ))}
        </div>
    );
}
