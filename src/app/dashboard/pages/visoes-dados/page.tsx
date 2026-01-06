
'use client';

import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Input } from '@/components/ui/input';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Separator } from '@/components/ui/separator';
import { Database, PlusCircle, Trash2, Filter, Play, Save, FileDown, GripVertical, FileSearch, X } from 'lucide-react';
import { Label } from '@/components/ui/label';
import { Badge } from '@/components/ui/badge';
import { useToast } from '@/hooks/use-toast';

const dataSources = {
  employees: {
    name: 'Colaboradores',
    fields: ['id', 'nome', 'cpf', 'matricula', 'cargo', 'setor', 'data_admissao', 'salario_bruto', 'status'],
  },
  payroll: {
    name: 'Folha de Pagamento',
    fields: ['id_colaborador', 'competencia', 'salario_bruto', 'total_descontos', 'salario_liquido', 'horas_extras_50', 'horas_extras_100'],
  },
  vacations: {
    name: 'Férias',
    fields: ['id_colaborador', 'periodo_aquisitivo', 'data_inicio', 'data_fim', 'status_ferias'],
  },
};

const sampleResultData = [
    { nome: 'João da Silva', cargo: 'Cortador', setor: 'Corte', salario_bruto: 3500.00 },
    { nome: 'Maria Oliveira', cargo: 'Costureira', setor: 'Costura', salario_bruto: 3200.00 },
    { nome: 'Carlos Pereira', cargo: 'Costureiro', setor: 'Costura', salario_bruto: 3250.00 },
    { nome: 'Pedro Santos', cargo: 'Montador', setor: 'Montagem', salario_bruto: 3300.00 },
];

type Filter = {
  id: number;
  field: string;
  condition: string;
  value: string;
};

export default function VisoesDadosPage() {
    const { toast } = useToast();
    const [selectedSource, setSelectedSource] = useState('employees');
    const [selectedFields, setSelectedFields] = useState<string[]>(['nome', 'cargo', 'setor', 'salario_bruto']);
    const [filters, setFilters] = useState<Filter[]>([
        { id: 1, field: 'setor', condition: 'igual a', value: 'Costura' }
    ]);
    const [viewName, setViewName] = useState('Nova Visão de Dados');

    const handleAddField = (field: string) => {
        if (!selectedFields.includes(field)) {
            setSelectedFields(prev => [...prev, field]);
        }
    };
    
    const handleRemoveField = (field: string) => {
        setSelectedFields(prev => prev.filter(f => f !== field));
    };

    const handleAddFilter = () => {
        setFilters(prev => [...prev, { id: Date.now(), field: '', condition: 'igual a', value: '' }]);
    };
    
    const handleRemoveFilter = (id: number) => {
        setFilters(prev => prev.filter(f => f.id !== id));
    };
    
    const handleExecute = () => {
        toast({
            title: 'Consulta Executada!',
            description: 'Os resultados da sua visão de dados foram carregados. (simulação)',
        });
    }
    
    const handleSave = () => {
        toast({
            title: 'Visão Salva!',
            description: `A visão "${viewName}" foi salva com sucesso.`
        });
    }

    return (
        <div className="p-4 h-full flex gap-4">
            {/* Left Panel: Saved Views */}
            <Card className="w-1/4 flex flex-col">
                <CardHeader>
                    <CardTitle className="flex items-center gap-2"><FileSearch size={20} /> Visões Salvas</CardTitle>
                </CardHeader>
                <CardContent className="flex-grow overflow-y-auto">
                   <div className='space-y-2'>
                        <Button variant='ghost' className='w-full justify-start'>- Colaboradores Ativos por Setor</Button>
                        <Button variant='ghost' className='w-full justify-start'>- Análise de Salários</Button>
                        <Button variant='ghost' className='w-full justify-start'>- Relatório de Férias Vencidas</Button>
                   </div>
                </CardContent>
                <div className='p-4 border-t'>
                    <Button className='w-full'><PlusCircle className='mr-2 h-4 w-4' /> Nova Visão</Button>
                </div>
            </Card>

            {/* Right Panel: Query Builder and Results */}
            <div className="w-3/4 flex flex-col gap-4">
                <Card>
                    <CardHeader>
                        <Input 
                            className="text-xl font-semibold p-0 border-none focus-visible:ring-0 shadow-none" 
                            value={viewName}
                            onChange={(e) => setViewName(e.target.value)}
                        />
                        <CardDescription>
                            Use o construtor abaixo para montar sua consulta. Arraste campos, adicione filtros e execute para ver os resultados.
                        </CardDescription>
                    </CardHeader>
                     <CardContent className='flex justify-end gap-2'>
                        <Button variant='destructive' onClick={handleSave}><Save className='mr-2 h-4 w-4' /> Salvar Visão</Button>
                        <Button variant='secondary' onClick={handleSave}><FileDown className='mr-2 h-4 w-4' /> Exportar CSV</Button>
                        <Button onClick={handleExecute}><Play className='mr-2 h-4 w-4' /> Executar</Button>
                    </CardContent>
                </Card>

                {/* Builder Interface */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                    {/* Data Source and Fields */}
                    <Card>
                        <CardHeader>
                            <CardTitle className="flex items-center gap-2"><Database size={20} /> Fonte de Dados e Campos</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <div>
                                <Label>1. Selecione a Fonte de Dados Principal</Label>
                                <Select value={selectedSource} onValueChange={setSelectedSource}>
                                    <SelectTrigger>
                                        <SelectValue placeholder="Selecione a fonte..." />
                                    </SelectTrigger>
                                    <SelectContent>
                                        {Object.entries(dataSources).map(([key, value]) => (
                                            <SelectItem key={key} value={key}>{value.name}</SelectItem>
                                        ))}
                                    </SelectContent>
                                </Select>
                            </div>
                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <Label>2. Campos Disponíveis</Label>
                                    <div className="mt-2 border rounded-lg p-2 h-48 overflow-y-auto space-y-1">
                                        {(dataSources[selectedSource as keyof typeof dataSources]?.fields || []).map(field => (
                                            <div key={field} onClick={() => handleAddField(field)} className="p-2 rounded-md hover:bg-muted cursor-pointer text-sm">{field}</div>
                                        ))}
                                    </div>
                                </div>
                                 <div>
                                    <Label>3. Campos Selecionados</Label>
                                    <div className="mt-2 border rounded-lg p-2 h-48 overflow-y-auto space-y-1">
                                        {selectedFields.map(field => (
                                             <div key={field} className="group flex items-center p-2 rounded-md bg-muted/50 text-sm">
                                                <GripVertical className='w-4 h-4 mr-2 text-muted-foreground cursor-grab' />
                                                <span className='flex-grow'>{field}</span>
                                                <Button variant='ghost' size='icon' className='h-6 w-6 opacity-0 group-hover:opacity-100' onClick={() => handleRemoveField(field)}>
                                                    <X size={14} />
                                                </Button>
                                             </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </CardContent>
                    </Card>

                    {/* Filters */}
                    <Card>
                        <CardHeader>
                            <CardTitle className="flex items-center gap-2"><Filter size={20} /> Filtros da Consulta</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <div className="space-y-2 max-h-64 overflow-y-auto pr-2">
                                {filters.map((filter, index) => (
                                    <div key={filter.id} className="flex items-center gap-2">
                                        <Badge variant="secondary" className="h-full">{index === 0 ? 'ONDE' : 'E'}</Badge>
                                        <Select defaultValue={filter.field}>
                                            <SelectTrigger><SelectValue/></SelectTrigger>
                                            <SelectContent>
                                                {(dataSources[selectedSource as keyof typeof dataSources]?.fields || []).map(f => <SelectItem key={f} value={f}>{f}</SelectItem>)}
                                            </SelectContent>
                                        </Select>
                                        <Select defaultValue={filter.condition}>
                                            <SelectTrigger><SelectValue/></SelectTrigger>
                                            <SelectContent>
                                                <SelectItem value="igual a">igual a</SelectItem>
                                                <SelectItem value="diferente de">diferente de</SelectItem>
                                                <SelectItem value="maior que">maior que</SelectItem>
                                                <SelectItem value="contém">contém</SelectItem>
                                            </SelectContent>
                                        </Select>
                                        <Input defaultValue={filter.value} />
                                        <Button variant="ghost" size="icon" onClick={() => handleRemoveFilter(filter.id)}><Trash2 className="h-4 w-4 text-destructive" /></Button>
                                    </div>
                                ))}
                            </div>
                            <Button variant="outline" onClick={handleAddFilter}><PlusCircle className="mr-2 h-4 w-4" /> Adicionar Filtro</Button>
                        </CardContent>
                    </Card>
                </div>

                {/* Results Table */}
                <Card className="flex-grow flex flex-col">
                    <CardHeader>
                        <CardTitle>Resultados</CardTitle>
                    </CardHeader>
                    <CardContent className='flex-grow'>
                        <div className='relative h-full overflow-auto border rounded-lg'>
                            <Table>
                                <TableHeader className='sticky top-0 bg-muted'>
                                    <TableRow>
                                        {selectedFields.map(field => <TableHead key={field} className='capitalize'>{field.replace('_', ' ')}</TableHead>)}
                                    </TableRow>
                                </TableHeader>
                                <TableBody>
                                    {sampleResultData.map((row, index) => (
                                        <TableRow key={index}>
                                            {selectedFields.map(field => (
                                                <TableCell key={field}>
                                                    {row[field as keyof typeof row] !== undefined ? String(row[field as keyof typeof row]) : '-'}
                                                </TableCell>
                                            ))}
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}

    