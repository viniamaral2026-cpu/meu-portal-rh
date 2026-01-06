'use client';
import { Card, CardHeader, CardTitle, CardContent, CardDescription } from '@/components/ui/card';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, LineChart, Line } from 'recharts';
import { DollarSign, Percent, Users, TrendingUp } from 'lucide-react';

const custoPorSetor = [
  { name: 'Produção', Custo: 350000 },
  { name: 'Administrativo', Custo: 85000 },
  { name: 'Vendas', Custo: 65000 },
  { name: 'RH', Custo: 45000 },
  { name: 'TI', Custo: 55000 },
];

const evolucaoFolha = [
  { month: 'Jan', Custo: 580000 },
  { month: 'Fev', Custo: 585000 },
  { month: 'Mar', Custo: 595000 },
  { month: 'Abr', Custo: 600000 },
  { month: 'Mai', Custo: 610000 },
  { month: 'Jun', Custo: 615000 },
];

export default function GestaoFinanceiraPage() {
  return (
    <div className="space-y-6">
       <Card>
        <CardHeader>
            <CardTitle>Dashboard de Gestão Financeira de Pessoal</CardTitle>
            <CardDescription>Análise de custos e impacto da folha de pagamento.</CardDescription>
        </CardHeader>
      </Card>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Custo Total da Folha (Mensal)</CardTitle>
            <DollarSign className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">R$ 615.000,00</div>
            <p className="text-xs text-muted-foreground">+1.2% em relação ao mês anterior</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">% de Encargos sobre a Folha</CardTitle>
            <Percent className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">36.5%</div>
            <p className="text-xs text-muted-foreground">Média dos últimos 6 meses</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Custo Médio por Colaborador</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">R$ 4.920,00</div>
            <p className="text-xs text-muted-foreground">Incluindo encargos e benefícios</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Provisão de Férias/13º</CardTitle>
            <TrendingUp className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">R$ 1.250.000,00</div>
            <p className="text-xs text-muted-foreground">Acumulado no ano</p>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
         <Card>
            <CardHeader>
                <CardTitle>Custo da Folha por Setor</CardTitle>
            </CardHeader>
            <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                    <BarChart data={custoPorSetor} layout="vertical">
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis type="number" />
                        <YAxis type="category" dataKey="name" width={80} />
                        <Tooltip formatter={(value: number) => value.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}/>
                        <Legend />
                        <Bar dataKey="Custo" fill="hsl(var(--primary))" />
                    </BarChart>
                </ResponsiveContainer>
            </CardContent>
         </Card>
          <Card>
            <CardHeader>
                <CardTitle>Evolução do Custo da Folha</CardTitle>
            </CardHeader>
            <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                    <LineChart data={evolucaoFolha}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="month" />
                        <YAxis />
                        <Tooltip formatter={(value: number) => value.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}/>
                        <Legend />
                        <Line type="monotone" dataKey="Custo" stroke="hsl(var(--primary))" strokeWidth={2} />
                    </LineChart>
                </ResponsiveContainer>
            </CardContent>
         </Card>
      </div>
    </div>
  );
}
