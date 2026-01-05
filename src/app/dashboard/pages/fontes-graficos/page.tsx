'use client';

import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Separator } from '@/components/ui/separator';
import { useToast } from '@/hooks/use-toast';
import { Sigma, List, PlusCircle, Save, Trash2, Search, Play } from 'lucide-react';

type ChartDataSource = {
    id: string;
    name: string;
    description: string;
    sourceType: 'view' | 'table';
    sourceId: string;
    labelField: string; // X-axis
    valueField: string; // Y-axis
    aggregation: 'count' | 'sum' | 'avg';
};

const initialSources: ChartDataSource[] = [
    {
        id: 'cds-001',
        name: 'Headcount por Setor',
        description: 'Conta o número de colaboradores ativos em cada setor da empresa.',
        sourceType: 'table',
        sourceId: 'Colaboradores',
        labelField: 'setor',
        valueField: 'id',
        aggregation: 'count',
    },
    {
        id: 'cds-002',
        name: 'Soma de Salários por Cargo',
        description: 'Soma o salário bruto de todos os colaboradores agrupados por cargo.',
        sourceType: 'table',
        sourceId: 'Colaboradores',
        labelField: 'cargo',
        valueField: 'salario_bruto',
        aggregation: 'sum',
    },
    {
        id: 'cds-003',
        name: 'Turnover por Mês (Admissões)',
        description: 'Utiliza uma visão de dados para contar admissões mensais.',
        sourceType: 'view',
        sourceId: 'Visão de Admissões Mensais',
        labelField: 'mes_admissao',
        valueField: 'total_admissoes',
        aggregation: 'sum',
    }
];

// Mock data for preview
const previewData = [
    { setor: 'Corte', total: 45 },
    { setor: 'Costura', total: 78 },
    { setor: 'Montagem', total: 52 },
    { setor: 'Acabamento', total: 35 },
    { setor: 'Administrativo', total: 20 },
];


export default function FontesGraficosPage() {
    const [sources, setSources] = useState<ChartDataSource[]>(initialSources);
    const [selectedSource, setSelectedSource] = useState<ChartDataSource | null>(sources[0]);
    const { toast } = useToast();
    
    const handleSave = () => {
        if (!selectedSource) return;
        toast({
            title: "Fonte de Dados Salva!",
            description: `A fonte "${selectedSource.name}" foi salva com sucesso.`,
        });
    };
    
    const handleTest = () => {
         if (!selectedSource) return;
        toast({
            title: "Consulta Testada!",
            description: `A pré-visualização dos dados para "${selectedSource.name}" foi gerada.`,
        });
    }

    return (
        <div className="p-4 h-full flex gap-4">
            {/* Left Panel: Sources List */}
            <Card className="w-1/3 flex flex-col">
                <CardHeader>
                    <CardTitle className="flex items-center gap-2"><List /> Fontes de Gráficos</CardTitle>
                    <CardDescription>Selecione uma fonte para editar ou crie uma nova.</CardDescription>
                     <div className="flex w-full items-center space-x-2 pt-2">
                        <Input type="text" placeholder="Buscar fonte..." />
                        <Button variant="outline" size="icon"><Search size={18}/></Button>
                    </div>
                </CardHeader>
                <CardContent className="flex-grow overflow-y-auto">
                    <div className="space-y-1">
                        {sources.map(src => (
                            <Button
                                key={src.id}
                                variant={selectedSource?.id === src.id ? "secondary" : "ghost"}
                                className="w-full justify-start text-left h-auto py-2"
                                onClick={() => setSelectedSource(src)}
                            >
                                <div>
                                    <p className="font-semibold">{src.name}</p>
                                    <p className="text-xs text-muted-foreground truncate">{src.description}</p>
                                </div>
                            </Button>
                        ))}
                    </div>
                </CardContent>
                 <div className="p-2 border-t">
                    <Button className="w-full" variant="outline"><PlusCircle className="mr-2 h-4 w-4"/> Nova Fonte de Dados</Button>
                </div>
            </Card>

            {/* Right Panel: Source Editor */}
            {selectedSource ? (
                <div className="w-2/3 flex flex-col gap-4">
                    <Card>
                        <CardHeader className="flex-row justify-between items-start">
                             <div>
                                <Input 
                                    className="text-xl font-semibold p-0 border-none focus-visible:ring-0 shadow-none" 
                                    value={selectedSource.name}
                                    onChange={(e) => setSelectedSource({...selectedSource, name: e.target.value})}
                                />
                                <CardDescription>Editando a configuração da fonte de dados.</CardDescription>
                            </div>
                            <div className="flex gap-2">
                                 <Button variant="destructive" size="sm"><Trash2 className="mr-2 h-4 w-4" /> Excluir</Button>
                                 <Button size="sm" onClick={handleSave}><Save className="mr-2 h-4 w-4" /> Salvar</Button>
                            </div>
                        </CardHeader>
                        <CardContent className="space-y-6">
                            <div>
                                <Label htmlFor='source-desc'>Descrição</Label>
                                <Input 
                                    id='source-desc'
                                    value={selectedSource.description}
                                    onChange={(e) => setSelectedSource({...selectedSource, description: e.target.value})}
                                    placeholder='Descreva o objetivo desta fonte de dados'
                                />
                            </div>
                            
                            <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                                <div className='space-y-2'>
                                    <Label>Origem dos Dados</Label>
                                    <Select defaultValue={selectedSource.sourceType}>
                                        <SelectTrigger><SelectValue/></SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value='table'>Tabela do Sistema</SelectItem>
                                            <SelectItem value='view'>Visão de Dados Salva</SelectItem>
                                        </SelectContent>
                                    </Select>
                                </div>
                                 <div className='space-y-2'>
                                    <Label>Nome da Tabela/Visão</Label>
                                    <Select defaultValue={selectedSource.sourceId}>
                                        <SelectTrigger><SelectValue/></SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value='Colaboradores'>Colaboradores</SelectItem>
                                            <SelectItem value='Folha de Pagamento'>Folha de Pagamento</SelectItem>
                                            <SelectItem value='Visão de Admissões Mensais'>Visão de Admissões Mensais</SelectItem>
                                        </SelectContent>
                                    </Select>
                                </div>
                            </div>
                            
                            <Separator />
                            
                            <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
                                <div className='space-y-2'>
                                    <Label>Campo do Rótulo (Eixo X)</Label>
                                     <Select defaultValue={selectedSource.labelField}>
                                        <SelectTrigger><SelectValue/></SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value='setor'>setor</SelectItem>
                                            <SelectItem value='cargo'>cargo</SelectItem>
                                            <SelectItem value='mes_admissao'>mes_admissao</SelectItem>
                                        </SelectContent>
                                    </Select>
                                </div>
                                <div className='space-y-2'>
                                    <Label>Campo do Valor (Eixo Y)</Label>
                                     <Select defaultValue={selectedSource.valueField}>
                                        <SelectTrigger><SelectValue/></SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value='id'>id (para contagem)</SelectItem>
                                            <SelectItem value='salario_bruto'>salario_bruto</SelectItem>
                                            <SelectItem value='total_admissoes'>total_admissoes</SelectItem>
                                        </SelectContent>
                                    </Select>
                                </div>
                                <div className='space-y-2'>
                                    <Label>Agregação do Valor</Label>
                                     <Select defaultValue={selectedSource.aggregation}>
                                        <SelectTrigger><SelectValue/></SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value='count'>Contar (COUNT)</SelectItem>
                                            <SelectItem value='sum'>Somar (SUM)</SelectItem>
                                            <SelectItem value='avg'>Média (AVG)</SelectItem>
                                        </SelectContent>
                                    </Select>
                                </div>
                            </div>
                            <Button onClick={handleTest}><Play className='mr-2 h-4 w-4' /> Testar Consulta</Button>
                        </CardContent>
                    </Card>

                    <Card className='flex-grow flex flex-col'>
                        <CardHeader>
                            <CardTitle>Pré-visualização dos Dados</CardTitle>
                        </CardHeader>
                        <CardContent className='flex-grow'>
                            <Table>
                                <TableHeader>
                                    <TableRow>
                                        <TableHead className="capitalize">{selectedSource.labelField}</TableHead>
                                        <TableHead className="capitalize text-right">{selectedSource.aggregation}({selectedSource.valueField})</TableHead>
                                    </TableRow>
                                </TableHeader>
                                <TableBody>
                                    {previewData.map(row => (
                                        <TableRow key={row.setor}>
                                            <TableCell>{row.setor}</TableCell>
                                            <TableCell className="text-right">{row.total}</TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </CardContent>
                    </Card>
                </div>
            ) : (
                 <div className="w-2/3 flex items-center justify-center text-muted-foreground bg-card rounded-lg border">
                    <p>Selecione uma fonte para começar.</p>
                </div>
            )}
        </div>
    );
}
