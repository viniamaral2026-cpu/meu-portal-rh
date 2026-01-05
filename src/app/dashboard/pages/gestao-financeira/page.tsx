
'use client';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { BarChart, Bar, AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';
import { DollarSign, Percent, TrendingUp, TrendingDown, FileText } from 'lucide-react';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';

const summaryData = [
    { title: "Custo Total da Folha (Mês)", value: "R$ 850.5K", icon: DollarSign, change: "+1.2% vs. mês anterior" },
    { title: "Encargos (INSS+FGTS)", value: "R$ 297.6K", icon: Percent, change: "35% da folha" },
    { title: "Orçado vs. Realizado (YTD)", value: "+2.5%", icon: TrendingDown, change: "Acima do orçado" },
    { title: "Provisão de Férias/13º", value: "R$ 1.2M", icon: FileText, change: "Posição atual" },
];

const budgetVsActualData = [
  { name: 'Jan', orcado: 830, realizado: 825 },
  { name: 'Fev', orcado: 830, realizado: 835 },
  { name: 'Mar', orcado: 840, realizado: 855 },
  { name: 'Abr', orcado: 840, realizado: 845 },
  { name: 'Mai', orcado: 850, realizado: 860 },
  { name: 'Jun', orcado: 850, realizado: 850 },
];

const costDistributionData = [
    { name: 'Salário Base', value: 55 },
    { name: 'Encargos', value: 30 },
    { name: 'Benefícios', value: 10 },
    { name: 'Provisões', value: 5 },
];
const COLORS = ['hsl(var(--chart-1))', 'hsl(var(--chart-2))', 'hsl(var(--chart-3))', 'hsl(var(--chart-4))'];

export default function GestaoFinanceiraPage() {
    return (
        <div className="p-4 space-y-4">
            <Card>
                <CardHeader>
                    <CardTitle className="flex items-center gap-2"><DollarSign /> Painel de Gestão Financeira de Pessoal</CardTitle>
                    <CardDescription>Visão consolidada dos custos, encargos, provisões e orçamento de RH.</CardDescription>
                </CardHeader>
            </Card>

            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                {summaryData.map(item => (
                    <Card key={item.title}>
                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                            <CardTitle className="text-sm font-medium">{item.title}</CardTitle>
                            <item.icon className="h-4 w-4 text-muted-foreground" />
                        </CardHeader>
                        <CardContent>
                            <div className="text-2xl font-bold">{item.value}</div>
                            <p className={`text-xs ${item.value.startsWith('+') ? 'text-red-600' : 'text-muted-foreground'}`}>{item.change}</p>
                        </CardContent>
                    </Card>
                ))}
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-4">
                <Card className="lg:col-span-3">
                    <CardHeader>
                        <CardTitle>Orçado vs. Realizado (R$ k)</CardTitle>
                        <CardDescription>Evolução dos custos de pessoal ao longo do ano.</CardDescription>
                    </CardHeader>
                    <CardContent className="h-80">
                        <ResponsiveContainer width="100%" height="100%">
                            <BarChart data={budgetVsActualData}>
                                <CartesianGrid strokeDasharray="3 3" />
                                <XAxis dataKey="name" fontSize={12} tickLine={false} axisLine={false} />
                                <YAxis fontSize={12} tickLine={false} axisLine={false} unit="k" />
                                <Tooltip formatter={(value, name) => [`R$ ${value}k`, name]} />
                                <Legend />
                                <Bar dataKey="orcado" fill="hsl(var(--chart-2))" name="Orçado" radius={[4, 4, 0, 0]} />
                                <Bar dataKey="realizado" fill="hsl(var(--chart-1))" name="Realizado" radius={[4, 4, 0, 0]} />
                            </BarChart>
                        </ResponsiveContainer>
                    </CardContent>
                </Card>
                 <Card className="lg:col-span-2">
                    <CardHeader>
                        <CardTitle>Composição do Custo Total</CardTitle>
                        <CardDescription>Distribuição percentual dos custos de RH.</CardDescription>
                    </CardHeader>
                    <CardContent className="h-80">
                         <ResponsiveContainer width="100%" height="100%">
                            <PieChart>
                                <Pie
                                    data={costDistributionData}
                                    cx="50%"
                                    cy="50%"
                                    labelLine={false}
                                    outerRadius={100}
                                    fill="#8884d8"
                                    dataKey="value"
                                    nameKey="name"
                                    label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                                >
                                    {costDistributionData.map((entry, index) => (
                                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                                    ))}
                                </Pie>
                                <Tooltip formatter={(value) => `${value}%`} />
                                <Legend />
                            </PieChart>
                        </ResponsiveContainer>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}