'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { BarChart as BarChartIcon, Users, DollarSign, Briefcase } from 'lucide-react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'TI', Headcount: 45 },
  { name: 'Vendas', Headcount: 80 },
  { name: 'RH', Headcount: 25 },
  { name: 'Produção', Headcount: 350 },
  { name: 'Logística', Headcount: 60 },
  { name: 'Marketing', Headcount: 30 },
];

export default function BIPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Business Intelligence - RH</h1>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total de Colaboradores</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">1,250</div>
            <p className="text-xs text-muted-foreground">+5% em relação ao mês passado</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Folha de Pagamento (Mensal)</CardTitle>
            <DollarSign className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">R$ 450.000,00</div>
            <p className="text-xs text-muted-foreground">+2.1% em relação ao mês passado</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Taxa de Rotatividade</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">2.5%</div>
            <p className="text-xs text-muted-foreground">-0.5% em relação ao mês passado</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Vagas Abertas</CardTitle>
            <Briefcase className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">12</div>
            <p className="text-xs text-muted-foreground">5 em TI, 3 em Vendas, 4 em RH</p>
          </CardContent>
        </Card>
      </div>
       <Card>
          <CardHeader>
            <CardTitle>Headcount por Departamento</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={350}>
                <BarChart data={data}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="Headcount" fill="hsl(var(--primary))" />
                </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
    </div>
  )
}
