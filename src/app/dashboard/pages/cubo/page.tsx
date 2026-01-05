'use client';
import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Input } from '@/components/ui/input';
import { Move, Filter, Rows, Columns, Sigma } from 'lucide-react';

const dimensions = [
    { id: 'setor', label: 'Setor' },
    { id: 'cargo', label: 'Cargo' },
    { id: 'unidade', label: 'Unidade' },
    { id: 'genero', label: 'Gênero' },
    { id: 'escolaridade', label: 'Escolaridade' },
];

const metrics = [
    { id: 'headcount', label: 'Total de Colaboradores' },
    { id: 'salario', label: 'Média Salarial' },
    { id: 'turnover', label: 'Taxa de Turnover' },
    { id: 'absenteismo', label: 'Taxa de Absenteísmo' },
];

const pivotData = {
    'Tecnologia': { 'Desenvolvedor Júnior': 20, 'Desenvolvedor Pleno': 15, 'Desenvolvedor Sênior': 10 },
    'Recursos Humanos': { 'Analista de RH': 5, 'Gerente de RH': 2 },
    'Comercial': { 'Vendedor': 25, 'Gerente de Vendas': 5 },
};


export default function CuboPage() {
    const [rows, setRows] = useState(['setor']);
    const [cols, setCols] = useState(['cargo']);
    const [values, setValues] = useState(['headcount']);

    const handleDragStart = (e: React.DragEvent<HTMLDivElement>, fieldId: string, type: 'dim' | 'metric') => {
        e.dataTransfer.setData('fieldId', fieldId);
        e.dataTransfer.setData('type', type);
    };

    const handleDrop = (e: React.DragEvent<HTMLDivElement>, target: 'rows' | 'cols' | 'values') => {
        e.preventDefault();
        const fieldId = e.dataTransfer.getData('fieldId');
        
        // Very basic logic for demo
        if (target === 'rows') setRows(prev => [...prev, fieldId]);
        if (target === 'cols') setCols(prev => [...prev, fieldId]);
        if (target === 'values') setValues(prev => [...prev, fieldId]);
    };

    const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();
    };
    
    return (
        <div className="p-4 flex gap-4 h-full">
            {/* Panels */}
            <div className="w-1/4 space-y-4">
                <Card>
                    <CardHeader>
                        <CardTitle className="flex items-center gap-2 text-base"><Move className="h-4 w-4"/> Campos Disponíveis</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <h3 className="font-semibold text-sm mb-2">Dimensões</h3>
                        <div className="space-y-1">
                        {dimensions.map(dim => (
                            <div key={dim.id} draggable onDragStart={(e) => handleDragStart(e, dim.id, 'dim')} className="p-2 border rounded-md text-sm cursor-move bg-gray-50 hover:bg-gray-100">
                                {dim.label}
                            </div>
                        ))}
                        </div>

                        <h3 className="font-semibold text-sm mt-4 mb-2">Métricas</h3>
                        <div className="space-y-1">
                        {metrics.map(metric => (
                             <div key={metric.id} draggable onDragStart={(e) => handleDragStart(e, metric.id, 'metric')} className="p-2 border rounded-md text-sm cursor-move bg-blue-50 hover:bg-blue-100">
                                {metric.label}
                            </div>
                        ))}
                        </div>
                    </CardContent>
                </Card>
                 <Card>
                    <CardHeader>
                        <CardTitle className="flex items-center gap-2 text-base"><Filter className="h-4 w-4"/> Filtros</CardTitle>
                    </CardHeader>
                     <CardContent className="space-y-4">
                        <div>
                            <Label>Unidade</Label>
                             <Select>
                                <SelectTrigger><SelectValue placeholder="Todas as Unidades" /></SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="matriz">Matriz</SelectItem>
                                    <SelectItem value="filial-sp">Filial SP</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>
                         <div>
                            <Label>Data de Contratação</Label>
                            <Input type="date" />
                        </div>
                     </CardContent>
                </Card>
            </div>

            {/* Pivot Area */}
            <div className="w-3/4 flex flex-col gap-4">
                <div className="grid grid-cols-3 gap-4">
                    <Card onDrop={(e) => handleDrop(e, 'rows')} onDragOver={handleDragOver} className="bg-green-50">
                        <CardHeader>
                            <CardTitle className="flex items-center gap-2 text-base"><Rows className="h-4 w-4"/> Linhas</CardTitle>
                        </CardHeader>
                        <CardContent className="min-h-[50px]">
                           {rows.map(r => <div key={r} className="p-1 border rounded bg-white text-xs mb-1">{r}</div>)}
                        </CardContent>
                    </Card>
                     <Card onDrop={(e) => handleDrop(e, 'cols')} onDragOver={handleDragOver} className="bg-yellow-50">
                        <CardHeader>
                            <CardTitle className="flex items-center gap-2 text-base"><Columns className="h-4 w-4"/> Colunas</CardTitle>
                        </CardHeader>
                        <CardContent className="min-h-[50px]">
                            {cols.map(c => <div key={c} className="p-1 border rounded bg-white text-xs mb-1">{c}</div>)}
                        </CardContent>
                    </Card>
                     <Card onDrop={(e) => handleDrop(e, 'values')} onDragOver={handleDragOver} className="bg-purple-50">
                        <CardHeader>
                            <CardTitle className="flex items-center gap-2 text-base"><Sigma className="h-4 w-4"/> Valores</CardTitle>
                        </CardHeader>
                        <CardContent className="min-h-[50px]">
                            {values.map(v => <div key={v} className="p-1 border rounded bg-white text-xs mb-1">{v}</div>)}
                        </CardContent>
                    </Card>
                </div>
                <Card className="flex-1">
                    <CardHeader>
                        <CardTitle>Tabela Dinâmica</CardTitle>
                        <CardDescription>Resultado da análise cruzada.</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <Table>
                            <TableHeader>
                                <TableRow>
                                    <TableHead>{rows[0] || ''} / {cols[0] || ''}</TableHead>
                                    {Object.keys(pivotData['Tecnologia']).map(cargo => (
                                        <TableHead key={cargo}>{cargo}</TableHead>
                                    ))}
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                {Object.entries(pivotData).map(([setor, cargos]) => (
                                    <TableRow key={setor}>
                                        <TableCell className="font-medium">{setor}</TableCell>
                                        {Object.values(cargos).map((value, i) => (
                                            <TableCell key={i}>{value}</TableCell>
                                        ))}
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}
