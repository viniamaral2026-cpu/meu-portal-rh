
'use client';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { LineChart, Line, AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { Users, TrendingUp, TrendingDown, UserCheck, UserX, Briefcase, GraduationCap } from 'lucide-react';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';

const summaryData = [
    { title: "Headcount Ativo", value: "208", icon: Users, change: "+5 no mês" },
    { title: "Taxa de Turnover (Mês)", value: "1.8%", icon: TrendingUp, change: "-0.3% vs. mês anterior" },
    { title: "Taxa de Absenteísmo (Mês)", value: "2.1%", icon: TrendingDown, change: "+0.5% vs. mês anterior" },
    { title: "Vagas Abertas", value: "8", icon: UserCheck, change: "3 em fase final" },
];

const headcountEvolutionData = [
  { name: 'Jan', headcount: 198 },
  { name: 'Fev', headcount: 200 },
  { name: 'Mar', headcount: 205 },
  { name: 'Abr', headcount: 203 },
  { name: 'Mai', headcount: 210 },
  { name: 'Jun', headcount: 208 },
];

const recentMovements = [
    { type: 'admissao', name: 'Mariana Costa', date: '2024-07-04', role: 'Analista de RH' },
    { type: 'demissao', name: 'Roberto Lima', date: '2024-06-28', role: 'Acabador' },
    { type: 'promocao', name: 'Felipe Almeida', date: '2024-06-25', role: 'Supervisor de Corte' },
];

export default function GestaoPessoasPage() {
    return (
        <div className="p-4 space-y-4">
            <Card>
                <CardHeader>
                    <CardTitle className="flex items-center gap-2"><Users /> Painel de Gestão de Pessoas</CardTitle>
                    <CardDescription>Acompanhe os principais indicadores de capital humano e acesse as ferramentas de gestão de talentos.</CardDescription>
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
                            <p className="text-xs text-muted-foreground">{item.change}</p>
                        </CardContent>
                    </Card>
                ))}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                <Card>
                    <CardHeader>
                        <CardTitle>Evolução do Headcount (Últimos 6 meses)</CardTitle>
                    </CardHeader>
                    <CardContent className="h-80">
                        <ResponsiveContainer width="100%" height="100%">
                            <AreaChart data={headcountEvolutionData}>
                                <defs>
                                    <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                                        <stop offset="5%" stopColor="hsl(var(--chart-1))" stopOpacity={0.8}/>
                                        <stop offset="95%" stopColor="hsl(var(--chart-1))" stopOpacity={0}/>
                                    </linearGradient>
                                </defs>
                                <CartesianGrid strokeDasharray="3 3" />
                                <XAxis dataKey="name" fontSize={12} tickLine={false} axisLine={false}/>
                                <YAxis domain={['dataMin - 5', 'dataMax + 5']} fontSize={12} tickLine={false} axisLine={false}/>
                                <Tooltip />
                                <Area type="monotone" dataKey="headcount" stroke="hsl(var(--chart-1))" fill="url(#colorUv)" name="Headcount"/>
                            </AreaChart>
                        </ResponsiveContainer>
                    </CardContent>
                </Card>
                 <Card>
                    <CardHeader>
                        <CardTitle>Ações Rápidas de Gestão de Talentos</CardTitle>
                        <CardDescription>Atalhos para os subsistemas de RH.</CardDescription>
                    </CardHeader>
                    <CardContent className="grid grid-cols-2 gap-4">
                       <Button variant="outline" className='h-24 justify-start p-4 flex-col items-start gap-1'>
                            <div className='flex items-center gap-2'><UserCheck /> <span className='font-bold'>Recrutamento e Seleção</span></div>
                            <p className='text-xs text-muted-foreground text-left'>Gerencie vagas, candidatos e processos seletivos.</p>
                       </Button>
                       <Button variant="outline" className='h-24 justify-start p-4 flex-col items-start gap-1'>
                            <div className='flex items-center gap-2'><TrendingUp /> <span className='font-bold'>Avaliação de Desempenho</span></div>
                            <p className='text-xs text-muted-foreground text-left'>Configure e acompanhe os ciclos de avaliação.</p>
                       </Button>
                       <Button variant="outline" className='h-24 justify-start p-4 flex-col items-start gap-1'>
                            <div className='flex items-center gap-2'><GraduationCap /> <span className='font-bold'>Treinamento e Desenvolvimento</span></div>
                            <p className='text-xs text-muted-foreground text-left'>Gerencie planos de desenvolvimento e treinamentos.</p>
                       </Button>
                       <Button variant="outline" className='h-24 justify-start p-4 flex-col items-start gap-1'>
                            <div className='flex items-center gap-2'><Briefcase /> <span className='font-bold'>Cargos e Salários</span></div>
                            <p className='text-xs text-muted-foreground text-left'>Consulte a estrutura de cargos e a política salarial.</p>
                       </Button>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}
