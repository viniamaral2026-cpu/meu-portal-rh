
'use client';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { BarChart, Bar, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, RadialBarChart, RadialBar } from 'recharts';
import { Factory, Boxes, CheckCircle, AlertTriangle, ListTodo, Wrench, CalendarClock } from 'lucide-react';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Progress } from '@/components/ui/progress';

const summaryData = [
    { title: "Produção do Dia", value: "1,254 pares", icon: Factory, change: "Meta: 2,500" },
    { title: "Eficiência Geral (OEE)", value: "82%", icon: CheckCircle, change: "Meta: 85%" },
    { title: "Qualidade (1ª Passagem)", value: "97.5%", icon: CheckCircle, change: "Meta: 98%" },
    { title: "Pedidos em Atraso", value: "3", icon: AlertTriangle, change: "OP-987, OP-992, OP-1001" },
];

const lineProductionData = [
  { name: 'Linha A', produzido: 800, meta: 1000 },
  { name: 'Linha B', produzido: 454, meta: 600 },
  { name: 'Linha C', produzido: 0, meta: 900 },
];

const oeeData = [{ name: 'OEE', value: 82 }];

const recentOrders = [
    { op: 'OP-1025', model: 'Tênis Runner Pro', quantity: 500, line: 'Linha A', status: 'Em Andamento', progress: 60 },
    { op: 'OP-1026', model: 'Bota Couro Clássica', quantity: 200, line: 'Linha B', status: 'Em Andamento', progress: 35 },
    { op: 'OP-1027', model: 'Sandália Verão', quantity: 800, line: 'Linha A', status: 'Agendado', progress: 0 },
];

export default function GestaoProducaoPage() {
    return (
        <div className="p-4 space-y-4">
            <Card>
                <CardHeader>
                    <CardTitle className="flex items-center gap-2"><Factory /> Painel de Gestão da Produção</CardTitle>
                    <CardDescription>Acompanhe os principais indicadores de produção, qualidade e eficiência da fábrica.</CardDescription>
                </CardHeader>
            </Card>

            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                {summaryData.map(item => (
                    <Card key={item.title}>
                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                            <CardTitle className="text-sm font-medium">{item.title}</CardTitle>
                            <item.icon className={`h-4 w-4 ${item.value.includes('3') ? 'text-destructive': 'text-muted-foreground'}`} />
                        </CardHeader>
                        <CardContent>
                            <div className="text-2xl font-bold">{item.value}</div>
                            <p className="text-xs text-muted-foreground">{item.change}</p>
                        </CardContent>
                    </Card>
                ))}
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
                <Card className="lg:col-span-2">
                    <CardHeader>
                        <CardTitle>Produção por Linha</CardTitle>
                    </CardHeader>
                    <CardContent className="h-80">
                        <ResponsiveContainer width="100%" height="100%">
                            <BarChart data={lineProductionData} layout="vertical">
                                <CartesianGrid strokeDasharray="3 3" />
                                <XAxis type="number" fontSize={12} />
                                <YAxis type="category" dataKey="name" fontSize={12} width={80}/>
                                <Tooltip formatter={(value, name) => [value, name === 'produzido' ? 'Produzido' : 'Meta']} />
                                <Legend />
                                <Bar dataKey="meta" fill="hsl(var(--secondary))" name="Meta" radius={[0, 4, 4, 0]} />
                                <Bar dataKey="produzido" fill="hsl(var(--chart-1))" name="Produzido" radius={[0, 4, 4, 0]} />
                            </BarChart>
                        </ResponsiveContainer>
                    </CardContent>
                </Card>
                 <Card>
                    <CardHeader>
                        <CardTitle>Eficiência Geral (OEE)</CardTitle>
                    </CardHeader>
                    <CardContent className="h-80 flex flex-col items-center justify-center">
                        <ResponsiveContainer width="100%" height="100%">
                            <RadialBarChart
                                innerRadius="70%"
                                outerRadius="85%"
                                data={oeeData}
                                startAngle={90}
                                endAngle={-270}
                            >
                                <Tooltip content={() => null} />
                                <RadialBar
                                    background
                                    dataKey="value"
                                    fill="hsl(var(--chart-1))"
                                    cornerRadius={10}
                                />
                            </RadialBarChart>
                        </ResponsiveContainer>
                         <p className="text-5xl font-bold -mt-24">{oeeData[0].value}%</p>
                    </CardContent>
                </Card>
            </div>
            
             <Card>
                <CardHeader>
                    <CardTitle>Ordens de Produção Ativas</CardTitle>
                </CardHeader>
                <CardContent>
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead>Ordem</TableHead>
                                <TableHead>Modelo</TableHead>
                                <TableHead>Quantidade</TableHead>
                                <TableHead>Linha</TableHead>
                                <TableHead>Status</TableHead>
                                <TableHead className='w-[200px]'>Progresso</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {recentOrders.map(order => (
                                <TableRow key={order.op}>
                                    <TableCell className='font-medium'>{order.op}</TableCell>
                                    <TableCell>{order.model}</TableCell>
                                    <TableCell>{order.quantity}</TableCell>
                                    <TableCell>{order.line}</TableCell>
                                    <TableCell>{order.status}</TableCell>
                                    <TableCell>
                                        <div className='flex items-center gap-2'>
                                            <Progress value={order.progress} className='w-full' />
                                            <span className='text-xs text-muted-foreground'>{order.progress}%</span>
                                        </div>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </CardContent>
             </Card>
        </div>
    );
}