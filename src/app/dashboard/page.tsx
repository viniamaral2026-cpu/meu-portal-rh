import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Factory, Boxes, CheckCircle, Users } from "lucide-react";

const summaryCards = [
    {
        title: "Produção por Linha",
        value: "1,254 unidades",
        change: "Linha A: 800 | Linha B: 454",
        icon: <Factory className="h-4 w-4 text-muted-foreground" />,
    },
    {
        title: "Funcionários Ausentes",
        value: "5",
        change: "2 atrasos registrados hoje",
        icon: <Users className="h-4 w-4 text-muted-foreground" />,
    },
    {
        title: "Pedidos Pendentes",
        value: "12",
        change: "+2% vs ontem",
        icon: <Boxes className="h-4 w-4 text-muted-foreground" />,
    },
    {
        title: "Alertas de Estoque Baixo",
        value: "3 itens",
        change: "Couro, Solado Tipo B",
        icon: <CheckCircle className="h-4 w-4 text-destructive" />,
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
