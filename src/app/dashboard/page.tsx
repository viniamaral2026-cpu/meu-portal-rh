'use client';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Factory, Boxes, CheckCircle, Users } from "lucide-react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, LineChart, Line, PieChart, Pie, Cell } from 'recharts';

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

const monthlyProductionData = [
  { month: 'Jan', producao: 4000 },
  { month: 'Fev', producao: 3000 },
  { month: 'Mar', producao: 5000 },
  { month: 'Abr', producao: 4500 },
  { month: 'Mai', producao: 6000 },
  { month: 'Jun', producao: 5500 },
];

const absenteeismData = [
  { month: 'Jan', taxa: 2.1 },
  { month: 'Fev', taxa: 2.5 },
  { month: 'Mar', taxa: 1.8 },
  { month: 'Abr', taxa: 3.0 },
  { month: 'Mai', taxa: 2.2 },
  { month: 'Jun', taxa: 1.5 },
];

const headcountData = [
  { name: 'Corte', value: 45 },
  { name: 'Costura', value: 78 },
  { name: 'Montagem', value: 52 },
  { name: 'Acabamento', value: 35 },
  { name: 'Administrativo', value: 20 },
];

const COLORS = ['hsl(var(--chart-1))', 'hsl(var(--chart-2))', 'hsl(var(--chart-3))', 'hsl(var(--chart-4))', 'hsl(var(--chart-5))'];

export default function DashboardPage() {
    return (
        <div className="p-4 space-y-4">
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
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                <Card>
                    <CardHeader>
                        <CardTitle>Produção Mensal</CardTitle>
                        <CardDescription>Unidades produzidas nos últimos 6 meses.</CardDescription>
                    </CardHeader>
                    <CardContent className="h-80">
                        <ResponsiveContainer width="100%" height="100%">
                            <BarChart data={monthlyProductionData}>
                                <CartesianGrid strokeDasharray="3 3" />
                                <XAxis dataKey="month" fontSize={12} tickLine={false} axisLine={false} />
                                <YAxis fontSize={12} tickLine={false} axisLine={false} />
                                <Tooltip />
                                <Legend />
                                <Bar dataKey="producao" fill="hsl(var(--chart-1))" name="Produção" />
                            </BarChart>
                        </ResponsiveContainer>
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader>
                        <CardTitle>Taxa de Absenteísmo</CardTitle>
                        <CardDescription>Percentual de ausências nos últimos 6 meses.</CardDescription>
                    </CardHeader>
                    <CardContent className="h-80">
                         <ResponsiveContainer width="100%" height="100%">
                            <LineChart data={absenteeismData}>
                                <CartesianGrid strokeDasharray="3 3" />
                                <XAxis dataKey="month" fontSize={12} tickLine={false} axisLine={false} />
                                <YAxis unit="%" fontSize={12} tickLine={false} axisLine={false} />
                                <Tooltip formatter={(value) => `${value}%`} />
                                <Legend />
                                <Line type="monotone" dataKey="taxa" stroke="hsl(var(--chart-2))" name="Taxa" />
                            </LineChart>
                        </ResponsiveContainer>
                    </CardContent>
                </Card>
            </div>

            <div>
                <Card>
                    <CardHeader>
                        <CardTitle>Composição do Headcount</CardTitle>
                        <CardDescription>Distribuição de colaboradores por setor.</CardDescription>
                    </CardHeader>
                    <CardContent className="h-80 flex items-center justify-center">
                        <ResponsiveContainer width="100%" height="100%">
                            <PieChart>
                                <Pie
                                    data={headcountData}
                                    cx="50%"
                                    cy="50%"
                                    labelLine={false}
                                    outerRadius={110}
                                    fill="#8884d8"
                                    dataKey="value"
                                    nameKey="name"
                                    label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                                >
                                    {headcountData.map((entry, index) => (
                                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                                    ))}
                                </Pie>
                                <Tooltip formatter={(value, name) => [`${value} colaboradores`, name]} />
                                <Legend />
                            </PieChart>
                        </ResponsiveContainer>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}
