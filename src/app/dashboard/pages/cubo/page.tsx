'use client';

import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Cuboid, Axis3d, Filter, GripVertical, PlusCircle } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

// Mock data
const dimensions = ['Setor', 'Cargo', 'Nível Escolaridade', 'Gênero', 'Unidade'];
const metrics = ['Contagem Colaboradores', 'Média Salarial', 'Total Salários', 'Idade Média'];

const pivotData = {
  rows: ['Corte', 'Costura', 'Montagem', 'Acabamento'],
  columns: ['Júnior', 'Pleno', 'Sênior'],
  values: [
    [15, 25, 5],
    [30, 40, 8],
    [20, 28, 4],
    [10, 20, 5],
  ]
};


export default function CuboPage() {
    const [rows, setRows] = useState(['Setor']);
    const [cols, setCols] = useState(['Cargo']);
    const [values, setValues] = useState(['Contagem Colaboradores']);

    return (
        <div className="p-4 h-full flex flex-col gap-4">
            <Card>
                <CardHeader>
                    <CardTitle className="flex items-center gap-2"><Cuboid /> Cubo de Decisão (OLAP)</CardTitle>
                    <CardDescription>Ferramenta de análise de dados multidimensional para criar tabelas e visões dinâmicas.</CardDescription>
                </CardHeader>
            </Card>
            
            <div className="flex-grow grid grid-cols-1 lg:grid-cols-4 gap-4">
                {/* Configuration Panel */}
                <div className="lg:col-span-1 flex flex-col gap-4">
                    <Card className="flex-grow">
                        <CardHeader>
                            <CardTitle className="text-lg flex items-center gap-2"><Axis3d size={20} /> Dimensões e Métricas</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <div>
                                <h4 className="font-semibold text-sm mb-2">Dimensões Disponíveis</h4>
                                <div className="p-2 border rounded-md h-40 overflow-y-auto space-y-1 bg-muted/50">
                                    {dimensions.map(d => <div key={d} className="p-2 bg-background rounded-md text-sm cursor-grab active:cursor-grabbing">{d}</div>)}
                                </div>
                            </div>
                             <div>
                                <h4 className="font-semibold text-sm mb-2">Métricas Disponíveis</h4>
                                <div className="p-2 border rounded-md h-32 overflow-y-auto space-y-1 bg-muted/50">
                                    {metrics.map(m => <div key={m} className="p-2 bg-background rounded-md text-sm cursor-grab active:cursor-grabbing">{m}</div>)}
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                     <Card>
                        <CardHeader>
                            <CardTitle className="text-lg flex items-center gap-2"><Filter size={20} /> Filtros</CardTitle>
                        </CardHeader>
                        <CardContent>
                             <div className="p-4 text-center border-2 border-dashed rounded-lg">
                                <p className='text-sm text-muted-foreground'>Arraste um campo aqui para adicionar um filtro.</p>
                            </div>
                        </CardContent>
                    </Card>
                </div>

                {/* Pivot Table Panel */}
                <Card className="lg:col-span-3 flex flex-col">
                    <CardHeader>
                        <CardTitle>Tabela Dinâmica</CardTitle>
                        <CardDescription>Arraste as dimensões e métricas para as áreas abaixo para montar sua análise.</CardDescription>
                    </CardHeader>
                    <CardContent className="flex-grow flex flex-col gap-4">
                        <div className="grid grid-cols-2 gap-4">
                            <div className="p-4 border rounded-lg">
                                <h4 className="font-semibold text-sm mb-2">Colunas</h4>
                                <div className="p-2 border border-dashed rounded-md min-h-[50px] space-y-1">
                                    {cols.map(c => <Badge key={c} variant="secondary" className="mr-1">{c} <GripVertical className='w-3 h-3 ml-1'/></Badge>)}
                                </div>
                            </div>
                            <div className="p-4 border rounded-lg">
                                <h4 className="font-semibold text-sm mb-2">Valores</h4>
                                 <div className="p-2 border border-dashed rounded-md min-h-[50px] space-y-1">
                                    {values.map(v => <Badge key={v} variant="default" className="mr-1">{v} <GripVertical className='w-3 h-3 ml-1'/></Badge>)}
                                </div>
                            </div>
                        </div>

                        <div className="flex-grow flex gap-4">
                            <div className="p-4 border rounded-lg w-1/4">
                                <h4 className="font-semibold text-sm mb-2">Linhas</h4>
                                <div className="p-2 border border-dashed rounded-md min-h-full space-y-1">
                                    {rows.map(r => <Badge key={r} variant="secondary" className="mr-1">{r} <GripVertical className='w-3 h-3 ml-1'/></Badge>)}
                                </div>
                            </div>
                            <div className="flex-grow border rounded-lg overflow-auto">
                                <Table>
                                    <TableHeader>
                                        <TableRow>
                                            <TableHead>{rows[0]}/{cols[0]}</TableHead>
                                            {pivotData.columns.map(col => <TableHead key={col} className="text-right">{col}</TableHead>)}
                                        </TableRow>
                                    </TableHeader>
                                    <TableBody>
                                        {pivotData.rows.map((row, rowIndex) => (
                                            <TableRow key={row}>
                                                <TableCell className="font-medium">{row}</TableCell>
                                                {pivotData.values[rowIndex].map((value, colIndex) => (
                                                    <TableCell key={colIndex} className="text-right">{value}</TableCell>
                                                ))}
                                            </TableRow>
                                        ))}
                                    </TableBody>
                                </Table>
                            </div>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}