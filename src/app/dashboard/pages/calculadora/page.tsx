'use client';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { useState } from 'react';
import { Separator } from '@/components/ui/separator';
import { Calculator, Factory, Wrench, Sprout } from 'lucide-react';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Legend } from 'recharts';

type FormData = {
    modelCode: string;
    modelName: string;
    
    couroConsumo: number;
    couroCusto: number;
    soladoCusto: number;
    palmilhaCusto: number;
    forroConsumo: number;
    forroCusto: number;
    cadarcoConsumo: number;
    cadarcoCusto: number;
    colaConsumo: number;
    colaCusto: number;
    outrosInsumos: number;

    tempoCorte: number;
    tempoCostura: number;
    tempoMontagem: number;
    tempoAcabamento: number;
    custoMinutoMOD: number;
    percentualCIF: number;
};

const initialFormData: FormData = {
    modelCode: 'MOD-001',
    modelName: 'Sapato Clássico',
    couroConsumo: 0.15,
    couroCusto: 120.00,
    soladoCusto: 12.50,
    palmilhaCusto: 3.80,
    forroConsumo: 0.12,
    forroCusto: 45.00,
    cadarcoConsumo: 1.2,
    cadarcoCusto: 0.90,
    colaConsumo: 50,
    colaCusto: 35.00,
    outrosInsumos: 2.50,
    tempoCorte: 5,
    tempoCostura: 12,
    tempoMontagem: 8,
    tempoAcabamento: 6,
    custoMinutoMOD: 0.45,
    percentualCIF: 15,
};

type CalculationResult = {
    custoCouro: number;
    custoForro: number;
    custoCadarco: number;
    custoCola: number;
    totalMateriais: number;
    tempoTotal: number;
    totalMOD: number;
    totalCIF: number;
    custoTotal: number;
    chartData: { name: string, value: number }[];
};

const COLORS = ['hsl(var(--chart-1))', 'hsl(var(--chart-2))', 'hsl(var(--chart-3))'];

export default function CalculadoraPage() {
    const [formData, setFormData] = useState<FormData>(initialFormData);
    const [result, setResult] = useState<CalculationResult | null>(null);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { id, value } = e.target;
        setFormData(prev => ({ ...prev, [id]: value ? parseFloat(value) : 0 }));
    };
    
    const handleCalculate = () => {
        // Custos de Materiais
        const custoCouro = formData.couroConsumo * formData.couroCusto;
        const custoForro = formData.forroConsumo * formData.forroCusto;
        const custoCadarco = formData.cadarcoConsumo * formData.cadarcoCusto;
        const custoCola = (formData.colaConsumo / 1000) * formData.colaCusto; // Convertendo ml para L
        const totalMateriais = custoCouro + formData.soladoCusto + formData.palmilhaCusto + custoForro + custoCadarco + custoCola + formData.outrosInsumos;
        
        // Custos de Mão de Obra Direta (MOD)
        const tempoTotal = formData.tempoCorte + formData.tempoCostura + formData.tempoMontagem + formData.tempoAcabamento;
        const totalMOD = tempoTotal * formData.custoMinutoMOD;

        // Custos Indiretos de Fabricação (CIF)
        const totalCIF = (totalMateriais + totalMOD) * (formData.percentualCIF / 100);

        // Custo Total
        const custoTotal = totalMateriais + totalMOD + totalCIF;
        
        setResult({
            custoCouro,
            custoForro,
            custoCadarco,
            custoCola,
            totalMateriais,
            tempoTotal,
            totalMOD,
            totalCIF,
            custoTotal,
            chartData: [
                { name: 'Materiais', value: parseFloat(totalMateriais.toFixed(2)) },
                { name: 'Mão de Obra', value: parseFloat(totalMOD.toFixed(2)) },
                { name: 'CIF', value: parseFloat(totalCIF.toFixed(2)) },
            ]
        });
    };

    return (
        <div className="p-4">
            <Card>
                <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                        <Calculator className="h-6 w-6" />
                        Calculadora de Custo de Produção
                    </CardTitle>
                    <CardDescription>Calcule o custo detalhado por par de um modelo de calçado.</CardDescription>
                </CardHeader>
                <CardContent className="space-y-8">
                    {/* Informações do Modelo */}
                    <div className="space-y-4">
                        <h3 className="text-lg font-medium flex items-center gap-2 text-primary"><Factory className="h-5 w-5" />Informações do Modelo</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 border p-4 rounded-lg">
                           <div className="space-y-2">
                                <Label htmlFor="modelCode">Código do Modelo</Label>
                                <Input id="modelCode" defaultValue={formData.modelCode} onChange={(e) => setFormData(p => ({...p, modelCode: e.target.value}))} />
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="modelName">Nome do Modelo</Label>
                                <Input id="modelName" defaultValue={formData.modelName} onChange={(e) => setFormData(p => ({...p, modelName: e.target.value}))} />
                            </div>
                        </div>
                    </div>

                    {/* Custos de Materiais */}
                    <div className="space-y-4">
                        <h3 className="text-lg font-medium flex items-center gap-2 text-primary"><Sprout className="h-5 w-5" />Custos de Materiais (por par)</h3>
                        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 border p-4 rounded-lg">
                            <div className="space-y-2"><Label htmlFor="couroConsumo">Consumo Couro (m²)</Label><Input id="couroConsumo" type="number" value={formData.couroConsumo} onChange={handleChange} /></div>
                            <div className="space-y-2"><Label htmlFor="couroCusto">Custo Couro (R$/m²)</Label><Input id="couroCusto" type="number" value={formData.couroCusto} onChange={handleChange} /></div>
                            <div className="space-y-2"><Label htmlFor="soladoCusto">Custo Solado (R$)</Label><Input id="soladoCusto" type="number" value={formData.soladoCusto} onChange={handleChange} /></div>
                            <div className="space-y-2"><Label htmlFor="palmilhaCusto">Custo Palmilha (R$)</Label><Input id="palmilhaCusto" type="number" value={formData.palmilhaCusto} onChange={handleChange} /></div>
                            <div className="space-y-2"><Label htmlFor="forroConsumo">Consumo Forro (m²)</Label><Input id="forroConsumo" type="number" value={formData.forroConsumo} onChange={handleChange} /></div>
                            <div className="space-y-2"><Label htmlFor="forroCusto">Custo Forro (R$/m²)</Label><Input id="forroCusto" type="number" value={formData.forroCusto} onChange={handleChange} /></div>
                            <div className="space-y-2"><Label htmlFor="cadarcoConsumo">Consumo Cadarço (m)</Label><Input id="cadarcoConsumo" type="number" value={formData.cadarcoConsumo} onChange={handleChange} /></div>
                            <div className="space-y-2"><Label htmlFor="cadarcoCusto">Custo Cadarço (R$/m)</Label><Input id="cadarcoCusto" type="number" value={formData.cadarcoCusto} onChange={handleChange} /></div>
                            <div className="space-y-2"><Label htmlFor="colaConsumo">Consumo Cola (ml)</Label><Input id="colaConsumo" type="number" value={formData.colaConsumo} onChange={handleChange} /></div>
                            <div className="space-y-2"><Label htmlFor="colaCusto">Custo Cola (R$/L)</Label><Input id="colaCusto" type="number" value={formData.colaCusto} onChange={handleChange} /></div>
                            <div className="space-y-2"><Label htmlFor="outrosInsumos">Outros Insumos (R$)</Label><Input id="outrosInsumos" type="number" value={formData.outrosInsumos} onChange={handleChange} /></div>
                        </div>
                    </div>

                    {/* Custos de Mão de Obra e CIF */}
                    <div className="space-y-4">
                        <h3 className="text-lg font-medium flex items-center gap-2 text-primary"><Wrench className="h-5 w-5" />Mão de Obra e Despesas Indiretas</h3>
                        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 border p-4 rounded-lg">
                            <div className="space-y-2"><Label htmlFor="tempoCorte">Tempo Corte (min)</Label><Input id="tempoCorte" type="number" value={formData.tempoCorte} onChange={handleChange} /></div>
                            <div className="space-y-2"><Label htmlFor="tempoCostura">Tempo Costura (min)</Label><Input id="tempoCostura" type="number" value={formData.tempoCostura} onChange={handleChange} /></div>
                            <div className="space-y-2"><Label htmlFor="tempoMontagem">Tempo Montagem (min)</Label><Input id="tempoMontagem" type="number" value={formData.tempoMontagem} onChange={handleChange} /></div>
                            <div className="space-y-2"><Label htmlFor="tempoAcabamento">Tempo Acabamento (min)</Label><Input id="tempoAcabamento" type="number" value={formData.tempoAcabamento} onChange={handleChange} /></div>
                            <div className="space-y-2"><Label htmlFor="custoMinutoMOD">Custo Mão de Obra (R$/min)</Label><Input id="custoMinutoMOD" type="number" value={formData.custoMinutoMOD} onChange={handleChange} /></div>
                            <div className="space-y-2"><Label htmlFor="percentualCIF">CIF (%)</Label><Input id="percentualCIF" type="number" value={formData.percentualCIF} onChange={handleChange} placeholder="Ex: 15 para 15%" /></div>
                        </div>
                    </div>
                    
                    <Button onClick={handleCalculate} size="lg">
                        <Calculator className="mr-2 h-5 w-5" />
                        Calcular Custo Total
                    </Button>
                    
                    {result && (
                        <div className="pt-6 space-y-6">
                            <Separator />
                            <h3 className="text-xl font-semibold">Resultado do Cálculo - Modelo: {formData.modelName}</h3>
                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                                <div className="space-y-4">
                                     <h4 className="font-medium text-lg">Detalhamento dos Custos</h4>
                                     <div className="grid grid-cols-2 gap-x-8 gap-y-2 text-sm">
                                        <div className="flex justify-between"><span>Custo Total Materiais:</span> <span className="font-medium">R$ {result.totalMateriais.toFixed(2)}</span></div>
                                        <div className="flex justify-between"><span>Custo Mão de Obra:</span> <span className="font-medium">R$ {result.totalMOD.toFixed(2)}</span></div>
                                        <div className="flex justify-between"><span>Custo Indireto (CIF):</span> <span className="font-medium">R$ {result.totalCIF.toFixed(2)}</span></div>
                                     </div>
                                     <Separator />
                                     <div className="flex justify-between text-xl font-bold text-primary">
                                        <span>Custo Total por Par:</span>
                                        <span>R$ {result.custoTotal.toFixed(2)}</span>
                                     </div>
                                     <Separator />
                                     <div className="grid grid-cols-2 gap-x-8 gap-y-2 text-xs text-muted-foreground pt-2">
                                        <div className="flex justify-between"><span>Tempo total de produção:</span> <span className="font-medium">{result.tempoTotal} min</span></div>
                                        <div className="flex justify-between"><span>Custo do Couro:</span> <span className="font-medium">R$ {result.custoCouro.toFixed(2)}</span></div>
                                        <div className="flex justify-between"><span>Custo do Forro:</span> <span className="font-medium">R$ {result.custoForro.toFixed(2)}</span></div>
                                        <div className="flex justify-between"><span>Custo do Cadarço:</span> <span className="font-medium">R$ {result.custoCadarco.toFixed(2)}</span></div>
                                        <div className="flex justify-between"><span>Custo da Cola:</span> <span className="font-medium">R$ {result.custoCola.toFixed(2)}</span></div>
                                     </div>
                                </div>
                                <div className='h-80'>
                                    <ResponsiveContainer width="100%" height="100%">
                                        <PieChart>
                                            <Pie
                                                data={result.chartData}
                                                cx="50%"
                                                cy="50%"
                                                labelLine={false}
                                                outerRadius={120}
                                                fill="#8884d8"
                                                dataKey="value"
                                                nameKey="name"
                                                label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                                            >
                                                {result.chartData.map((entry, index) => (
                                                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                                                ))}
                                            </Pie>
                                            <Tooltip formatter={(value: number) => `R$ ${value.toFixed(2)}`} />
                                            <Legend />
                                        </PieChart>
                                    </ResponsiveContainer>
                                </div>
                            </div>
                             <p className='text-xs text-muted-foreground'>* Valores baseados nos dados de entrada. Não incluem impostos sobre vendas, margem de lucro ou outras despesas comerciais.</p>
                        </div>
                    )}
                </CardContent>
            </Card>
        </div>
    );
}
