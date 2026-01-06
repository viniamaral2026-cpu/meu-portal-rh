'use client';
import { Card, CardHeader, CardTitle, CardContent, CardDescription } from '@/components/ui/card';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';
import { Users, UserPlus, UserMinus, Star } from 'lucide-react';

const turnoverData = [
  { name: 'Jan', Taxa: 2.1 },
  { name: 'Fev', Taxa: 1.8 },
  { name: 'Mar', Taxa: 2.5 },
  { name: 'Abr', Taxa: 2.2 },
  { name: 'Mai', Taxa: 2.8 },
  { name: 'Jun', Taxa: 2.3 },
];

const performanceData = [
  { name: 'Abaixo', value: 15, color: '#ef4444' },
  { name: 'Na Média', value: 65, color: '#3b82f6' },
  { name: 'Acima', value: 20, color: '#22c55e' },
];

export default function GestaoPessoasPage() {
  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
            <CardTitle>Dashboard de Gestão de Pessoas (RH)</CardTitle>
            <CardDescription>KPIs e métricas para apoiar a estratégia de recursos humanos.</CardDescription>
        </CardHeader>
      </Card>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Headcount Total</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">575</div>
            <p className="text-xs text-muted-foreground">+12 no último mês</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Admissões (Mês)</CardTitle>
            <UserPlus className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">+18</div>
            <p className="text-xs text-muted-foreground">5 em Produção, 3 em Vendas</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Desligamentos (Mês)</CardTitle>
            <UserMinus className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">-6</div>
            <p className="text-xs text-muted-foreground">Taxa de 1.04%</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Avaliação de Desempenho Média</CardTitle>
            <Star className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">4.1 / 5.0</div>
            <p className="text-xs text-muted-foreground">Último ciclo de avaliação</p>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
         <Card>
            <CardHeader>
                <CardTitle>Taxa de Turnover (Rotatividade)</CardTitle>
                 <CardDescription>Últimos 6 meses</CardDescription>
            </CardHeader>
            <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                    <BarChart data={turnoverData}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis tickFormatter={(value) => `${value}%`}/>
                        <Tooltip formatter={(value: number) => [`${value}%`, "Taxa"]}/>
                        <Legend />
                        <Bar dataKey="Taxa" fill="hsl(var(--primary))" />
                    </BarChart>
                </ResponsiveContainer>
            </CardContent>
         </Card>
          <Card>
            <CardHeader>
                <CardTitle>Distribuição da Avaliação de Desempenho</CardTitle>
                <CardDescription>Resultado geral do último ciclo</CardDescription>
            </CardHeader>
            <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                    <PieChart>
                        <Pie data={performanceData} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={100} label>
                            {performanceData.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={entry.color} />
                            ))}
                        </Pie>
                        <Tooltip />
                        <Legend />
                    </PieChart>
                </ResponsiveContainer>
            </CardContent>
         </Card>
      </div>
    </div>
  );
}
