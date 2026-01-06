'use client';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  Bar,
  BarChart,
  Line,
  LineChart,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
  Legend,
  Cell,
} from 'recharts';
import { Factory, Users, ListTodo, AlertTriangle } from 'lucide-react';

const producaoMensalData = [
  { month: 'Jan', Produção: 4000 },
  { month: 'Fev', Produção: 3000 },
  { month: 'Mar', Produção: 5000 },
  { month: 'Abr', Produção: 4500 },
  { month: 'Mai', Produção: 6000 },
  { month: 'Jun', Produção: 5500 },
];

const absenteismoData = [
  { month: 'Jan', Taxa: 2.0 },
  { month: 'Fev', Taxa: 2.25 },
  { month: 'Mar', Taxa: 2.8 },
  { month: 'Abr', Taxa: 2.1 },
  { month: 'Mai', Taxa: 2.5 },
  { month: 'Jun', Taxa: 1.8 },
];

const headcountData = [
    { name: 'Corte', value: 20, color: 'hsl(var(--chart-1))' },
    { name: 'Costura', value: 34, color: 'hsl(180, 70%, 50%)' },
    { name: 'Montagem', value: 22, color: 'hsl(var(--chart-2))' },
    { name: 'Acabamento', value: 15, color: 'hsl(var(--chart-3))' },
    { name: 'Administrativo', value: 9, color: 'hsl(var(--chart-4))' },
];


export default function DashboardPrincipalPage() {
  return (
    <div className="space-y-4 p-4">
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Produção por Linha
            </CardTitle>
            <Factory className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">1,254 unidades</div>
            <p className="text-xs text-muted-foreground">Linha A: 800 | Linha B: 454</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Funcionários Ausentes
            </CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">5</div>
            <p className="text-xs text-muted-foreground">3 atrasos registrados hoje</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Pedidos Pendentes</CardTitle>
            <ListTodo className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">12</div>
            <p className="text-xs text-muted-foreground">+2% vs ontem</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Alertas de Estoque Baixo
            </CardTitle>
            <AlertTriangle className="h-4 w-4 text-red-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">3 itens</div>
            <p className="text-xs text-muted-foreground">Couro, Solado Tipo B</p>
          </CardContent>
        </Card>
      </div>
      <div className="grid gap-4 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Produção Mensal</CardTitle>
            <CardDescription>Unidades produzidas nos últimos 6 meses.</CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={250}>
              <BarChart data={producaoMensalData}>
                <XAxis dataKey="month" stroke="#888888" fontSize={12} tickLine={false} axisLine={false}/>
                <YAxis stroke="#888888" fontSize={12} tickLine={false} axisLine={false} />
                <Tooltip />
                <Legend />
                <Bar dataKey="Produção" fill="hsl(var(--chart-1))" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Taxa de Absenteísmo</CardTitle>
            <CardDescription>Percentual de ausências nos últimos 6 meses.</CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={250}>
              <LineChart data={absenteismoData}>
                <XAxis dataKey="month" stroke="#888888" fontSize={12} tickLine={false} axisLine={false} />
                <YAxis stroke="#888888" fontSize={12} tickLine={false} axisLine={false} tickFormatter={(value) => `${value}%`} />
                <Tooltip formatter={(value: number) => [`${value}%`, 'Taxa']} />
                <Legend />
                <Line type="monotone" dataKey="Taxa" stroke="hsl(180, 70%, 50%)" activeDot={{ r: 8 }} />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>
       <Card>
        <CardHeader>
          <CardTitle>Composição do Headcount</CardTitle>
          <CardDescription>Distribuição de colaboradores por setor.</CardDescription>
        </CardHeader>
        <CardContent className="flex justify-center">
          <ResponsiveContainer width="100%" height={250}>
            <PieChart>
              <Pie data={headcountData} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={100} label={(entry) => `${entry.name} ${entry.value}%`} >
                 {headcountData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip formatter={(value: number, name: string) => [`${value}%`, name]} />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>
    </div>
  );
}
