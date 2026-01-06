'use client';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { BarChart, Bar, LineChart, Line, AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { DollarSign, Users, TrendingUp, Filter, Calculator, FileDown } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { useState } from 'react';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';

const summaryData = [
    { title: "Orçamento Anual (2024)", value: "R$ 15.7M", icon: DollarSign, change: "+5.2% vs 2023" },
    { title: "Gasto Acumulado (YTD)", value: "R$ 7.9M", icon: DollarSign, change: "50.3% do total" },
    { title: "Previsto vs. Realizado (Mês)", value: "-1.8%", icon: TrendingUp, change: "Abaixo do orçado" },
    { title: "Headcount Previsto", value: "215", icon: Users, change: "208 realizados" },
]

const monthlyData = [
  { name: 'Jan', orcado: 400, realizado: 380 },
  { name: 'Fev', orcado: 420, realizado: 410 },
  { name: 'Mar', orcado: 450, realizado: 460 },
  { name: 'Abr', orcado: 440, realizado: 430 },
  { name: 'Mai', orcado: 480, realizado: 490 },
  { name: 'Jun', orcado: 470, realizado: 475 },
  { name: 'Jul', orcado: 500, realizado: 0 },
  { name: 'Ago', orcado: 510, realizado: 0 },
];

const costCenterData = [
    { center: 'Corte', orcado: 120000, realizado: 122000, variacao: -2000 },
    { center: 'Costura', orcado: 250000, realizado: 245000, variacao: 5000 },
    { center: 'Montagem', orcado: 180000, realizado: 181000, variacao: -1000 },
    { center: 'Acabamento', orcado: 95000, realizado: 94000, variacao: 1000 },
    { center: 'Administrativo', orcado: 300000, realizado: 298000, variacao: 2000 },
];

export default function OrcamentoPage() {
    const { toast } = useToast();
    const [aumentoDissidio, setAumentoDissidio] = useState(4.5);
    const [novasContratacoes, setNovasContratacoes] = useState(5);

    const handleSimulate = () => {
        toast({
            title: "Simulação de Cenário Concluída",
            description: `Novo orçamento projetado com ${aumentoDissidio}% de dissídio e ${novasContratacoes} novas contratações. (Simulação)`,
        })
    }

    return (
        <div className="p-4 space-y-4">
            {/* Header and Main Actions */}
            <Card>
                <CardHeader className='flex-row items-start justify-between'>
                    <div>
                        <CardTitle>Orçamento de Pessoal (beta)</CardTitle>
                        <CardDescription>Planejamento, simulação e controle orçamentário da folha de pagamento e pessoal.</CardDescription>
                    </div>
                     <div className='flex items-center gap-2'>
                        <Select defaultValue='2024'>
                            <SelectTrigger className="w-48">
                                <SelectValue />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="2024">Ano: 2024</SelectItem>
                                <SelectItem value="2023">Ano: 2023</SelectItem>
                            </SelectContent>
                        </Select>
                         <Button variant="outline"><FileDown className='mr-2 h-4 w-4'/> Exportar Relatório</Button>
                    </div>
                </CardHeader>
            </Card>
            
            {/* Summary Cards */}
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                {summaryData.map(item => (
                     <Card key={item.title}>
                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                            <CardTitle className="text-sm font-medium">{item.title}</CardTitle>
                            <item.icon className="h-4 w-4 text-muted-foreground" />
                        </CardHeader>
                        <CardContent>
                            <div className="text-2xl font-bold">{item.value}</div>
                            <p className={`text-xs ${item.change.includes('Abaixo') ? 'text-green-600' : 'text-muted-foreground'}`}>{item.change}</p>
                        </CardContent>
                    </Card>
                ))}
            </div>

            <div className='grid grid-cols-1 lg:grid-cols-3 gap-4'>
                {/* Main Chart and Details Table */}
                <div className='lg:col-span-2 space-y-4'>
                     <Card>
                        <CardHeader>
                            <CardTitle>Evolução Mensal (Orçado vs. Realizado)</CardTitle>
                            <CardDescription>Valores em milhares de reais (R$ k)</CardDescription>
                        </CardHeader>
                        <CardContent className="h-80">
                            <ResponsiveContainer width="100%" height="100%">
                               <AreaChart data={monthlyData}>
                                    <defs>
                                        <linearGradient id="colorRealizado" x1="0" y1="0" x2="0" y2="1">
                                            <stop offset="5%" stopColor="hsl(var(--chart-2))" stopOpacity={0.8}/>
                                            <stop offset="95%" stopColor="hsl(var(--chart-2))" stopOpacity={0}/>
                                        </linearGradient>
                                         <linearGradient id="colorOrcado" x1="0" y1="0" x2="0" y2="1">
                                            <stop offset="5%" stopColor="hsl(var(--chart-1))" stopOpacity={0.8}/>
                                            <stop offset="95%" stopColor="hsl(var(--chart-1))" stopOpacity={0}/>
                                        </linearGradient>
                                    </defs>
                                    <CartesianGrid strokeDasharray="3 3" />
                                    <XAxis dataKey="name" fontSize={12} tickLine={false} axisLine={false} />
                                    <YAxis fontSize={12} tickLine={false} axisLine={false} unit="k" />
                                    <Tooltip formatter={(value, name) => [`R$ ${value}k`, name]} />
                                    <Legend />
                                    <Area type="monotone" dataKey="orcado" stroke="hsl(var(--chart-1))" fillOpacity={1} fill="url(#colorOrcado)" name="Orçado" />
                                    <Area type="monotone" dataKey="realizado" stroke="hsl(var(--chart-2))" fillOpacity={1} fill="url(#colorRealizado)" name="Realizado" />
                                </AreaChart>
                            </ResponsiveContainer>
                        </CardContent>
                    </Card>
                     <Card>
                        <CardHeader>
                            <CardTitle>Detalhamento por Centro de Custo</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <Table>
                                <TableHeader>
                                    <TableRow>
                                        <TableHead>Centro de Custo</TableHead>
                                        <TableHead className='text-right'>Orçado (YTD)</TableHead>
                                        <TableHead className='text-right'>Realizado (YTD)</TableHead>
                                        <TableHead className='text-right'>Variação</TableHead>
                                    </TableRow>
                                </TableHeader>
                                <TableBody>
                                    {costCenterData.map(row => (
                                        <TableRow key={row.center}>
                                            <TableCell className='font-medium'>{row.center}</TableCell>
                                            <TableCell className='text-right'>{row.orcado.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</TableCell>
                                            <TableCell className='text-right'>{row.realizado.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</TableCell>
                                            <TableCell className={`text-right font-semibold ${row.variacao > 0 ? 'text-green-600' : 'text-red-600'}`}>
                                                {row.variacao.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
                                            </TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </CardContent>
                     </Card>
                </div>
                {/* Simulation Panel */}
                <Card>
                    <CardHeader>
                        <CardTitle className='flex items-center gap-2'><Calculator /> Simulação de Cenários</CardTitle>
                        <CardDescription>Ajuste as variáveis para projetar o impacto no orçamento.</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-6">
                        <div className="space-y-2">
                            <Label htmlFor="dissidio">Aumento por Dissídio (%)</Label>
                            <Input id="dissidio" type="number" value={aumentoDissidio} onChange={(e) => setAumentoDissidio(Number(e.target.value))} />
                        </div>
                         <div className="space-y-2">
                            <Label htmlFor="contratacoes">Novas Contratações (Headcount)</Label>
                            <Input id="contratacoes" type="number" value={novasContratacoes} onChange={(e) => setNovasContratacoes(Number(e.target.value))} />
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="plr">Provisão de PLR / Bônus (R$)</Label>
                            <Input id="plr" type="number" placeholder="Ex: 500000" />
                        </div>
                        <Button className='w-full' onClick={handleSimulate}>
                            <TrendingUp className='mr-2 h-4 w-4'/>
                            Calcular Nova Projeção
                        </Button>
                         <div className='text-center p-4 mt-4 border-dashed border-2 rounded-lg'>
                            <p className='text-sm text-muted-foreground'>Em breve: salve e compare diferentes cenários.</p>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}
