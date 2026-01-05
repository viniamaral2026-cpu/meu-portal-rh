
'use client';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Label } from '@/components/ui/label';
import { BarChart, LineChart, PieChart, Search } from 'lucide-react';
import { Bar, BarChart as RechartsBarChart, CartesianGrid, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const turnoverData = [
  { month: 'Jan', admitidos: 10, demitidos: 5 },
  { month: 'Fev', admitidos: 8, demitidos: 6 },
  { month: 'Mar', admitidos: 12, demitidos: 4 },
  { month: 'Abr', admitidos: 7, demitidos: 7 },
  { month: 'Mai', admitidos: 15, demitidos: 9 },
  { month: 'Jun', admitidos: 5, demitidos: 3 },
];

export default function GraficoPage() {
    return (
        <div className="p-4 space-y-4">
             <Card>
                <CardHeader>
                    <CardTitle>Gerador de Gráficos</CardTitle>
                    <CardDescription>Crie e visualize gráficos para análise de indicadores de RH.</CardDescription>
                </CardHeader>
                <CardContent className="flex items-end gap-4">
                     <div className='space-y-2'>
                        <Label htmlFor='indicator'>Indicador</Label>
                        <Select defaultValue='turnover'>
                            <SelectTrigger id="indicator" className="w-56">
                                <SelectValue placeholder="Selecione" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="turnover">Turnover</SelectItem>
                                <SelectItem value="absenteeism">Absenteísmo</SelectItem>
                                <SelectItem value="headcount">Headcount por Setor</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>
                     <div className='space-y-2'>
                        <Label htmlFor='chart-type'>Tipo de Gráfico</Label>
                         <Select defaultValue='bar'>
                            <SelectTrigger id="chart-type" className="w-56">
                                <SelectValue placeholder="Selecione" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="bar">Gráfico de Barras</SelectItem>
                                <SelectItem value="line">Gráfico de Linhas</SelectItem>
                                <SelectItem value="pie">Gráfico de Pizza</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>
                     <div className='space-y-2'>
                        <Label htmlFor='period'>Período</Label>
                        <Select defaultValue='6-months'>
                            <SelectTrigger id="period" className="w-56">
                                <SelectValue placeholder="Selecione" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="6-months">Últimos 6 meses</SelectItem>
                                <SelectItem value="12-months">Últimos 12 meses</SelectItem>
                                <SelectItem value="current-year">Ano Atual</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>
                    <Button><Search className="mr-2 h-4 w-4"/> Gerar Gráfico</Button>
                </CardContent>
            </Card>

            <Card>
                <CardHeader>
                    <CardTitle>Turnover - Últimos 6 meses</CardTitle>
                </CardHeader>
                <CardContent className="h-96">
                    <ResponsiveContainer width="100%" height="100%">
                         <RechartsBarChart data={turnoverData}>
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="month" />
                            <YAxis />
                            <Tooltip />
                            <Legend />
                            <Bar dataKey="admitidos" fill="hsl(var(--chart-1))" name="Admitidos" />
                            <Bar dataKey="demitidos" fill="hsl(var(--chart-4))" name="Demitidos" />
                        </RechartsBarChart>
                    </ResponsiveContainer>
                </CardContent>
            </Card>
        </div>
    );
}
