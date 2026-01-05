'use client';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  LineChart,
  Line,
  PieChart,
  Pie,
  Cell,
} from 'recharts';

const barData = [
  { name: 'Setor A', Contratados: 40, Desligados: 24 },
  { name: 'Setor B', Contratados: 30, Desligados: 13 },
  { name: 'Setor C', Contratados: 20, Desligados: 48 },
  { name: 'Setor D', Contratados: 27, Desligados: 39 },
  { name: 'Setor E', Contratados: 18, Desligados: 28 },
];

const lineData = [
  { name: 'Jan', Saldo: 100 },
  { name: 'Fev', Saldo: 120 },
  { name: 'Mar', Saldo: 110 },
  { name: 'Abr', Saldo: 130 },
  { name: 'Mai', Saldo: 150 },
  { name: 'Jun', Saldo: 140 },
];

const pieData = [
  { name: 'Júnior', value: 400 },
  { name: 'Pleno', value: 300 },
  { name: 'Sênior', value: 300 },
  { name: 'Gestor', value: 200 },
];

const COLORS = ['#8884d8', '#82ca9d', '#ffc658', '#ff8042'];

export default function BIPage() {
  return (
    <div className="p-4 space-y-4">
      <CardHeader className="p-0">
        <CardTitle>Painel de Business Intelligence</CardTitle>
        <CardDescription>
          Análise de indicadores de Recursos Humanos.
        </CardDescription>
      </CardHeader>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Contratações vs. Desligamentos</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={barData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="Contratados" fill="#8884d8" />
                <Bar dataKey="Desligados" fill="#82ca9d" />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Evolução do Headcount</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={lineData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line
                  type="monotone"
                  dataKey="Saldo"
                  stroke="#8884d8"
                  activeDot={{ r: 8 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Distribuição de Senioridade</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={pieData}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  outerRadius={100}
                  fill="#8884d8"
                  dataKey="value"
                  label={({ name, percent }) =>
                    `${name} ${(percent * 100).toFixed(0)}%`
                  }
                >
                  {pieData.map((entry, index) => (
                    <Cell
                      key={`cell-${index}`}
                      fill={COLORS[index % COLORS.length]}
                    />
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
