'use client';

import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { List, PlusCircle, Save, Trash2, Search, Sigma, Variable, FileText } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { Separator } from '@/components/ui/separator';

type Formula = {
    id: string;
    code: string;
    name: string;
    description: string;
    type: 'provento' | 'desconto' | 'base';
    expression: string;
};

const initialFormulas: Formula[] = [
    { id: 'f001', code: 'HE100', name: 'Horas Extras 100%', description: 'Calcula o valor das horas extras com 100% de acréscimo.', type: 'provento', expression: '(SALARIO_BASE / 220) * HORAS_EXTRAS_100 * 2' },
    { id: 'f002', code: 'DSR', name: 'D.S.R. sobre Horas Extras', description: 'Calcula o descanso semanal remunerado sobre o total de horas extras.', type: 'provento', expression: '(TOTAL_HORAS_EXTRAS / DIAS_UTEIS) * DIAS_NAO_UTEIS' },
    { id: 'f003', code: 'FALTAS', name: 'Desconto por Faltas', description: 'Calcula o desconto de dias de falta não justificada.', type: 'desconto', expression: '(SALARIO_BASE / 30) * DIAS_FALTA' },
    { id: 'f004', code: 'INSS', name'Base INSS', description: 'Base de cálculo para o INSS.', type: 'base', expression: 'SALARIO_BASE + TOTAL_PROVENTOS_INSS' },
];

const payrollVariables = ['SALARIO_BASE', 'HORAS_EXTRAS_50', 'HORAS_EXTRAS_100', 'TOTAL_PROVENTOS_INSS', 'DIAS_FALTA', 'DIAS_UTEIS', 'DIAS_NAO_UTEIS'];
const payrollFunctions = ['SE(condicao; verdadeiro; falso)', 'MAIOR(num1; num2)', 'MENOR(num1; num2)'];

export default function FormulaPage() {
    const [formulas, setFormulas] = useState<Formula[]>(initialFormulas);
    const [selectedFormula, setSelectedFormula] = useState<Formula | null>(formulas[0]);
    const { toast } = useToast();
    
    const handleSelectFormula = (formula: Formula) => {
        setSelectedFormula(formula);
    };

    const handleUpdateFormula = <K extends keyof Formula>(field: K, value: Formula[K]) => {
        if (!selectedFormula) return;
        setSelectedFormula(prev => prev ? { ...prev, [field]: value } : null);
    };
    
    const handleSave = () => {
        if (!selectedFormula) return;
        
        let isNew = !formulas.some(f => f.id === selectedFormula.id);
        if (isNew) {
            setFormulas(prev => [...prev, selectedFormula]);
        } else {
            setFormulas(prev => prev.map(f => f.id === selectedFormula.id ? selectedFormula : f));
        }

        toast({
            title: "Fórmula Salva!",
            description: `A fórmula "${selectedFormula.name}" foi salva com sucesso.`,
        });
    };

    const handleNew = () => {
        const newId = `f${(Math.random() * 1000).toFixed(0).padStart(3, '0')}`;
        const newFormula: Formula = {
            id: newId,
            code: '',
            name: 'Nova Fórmula',
            description: '',
            type: 'provento',
            expression: '',
        };
        setSelectedFormula(newFormula);
    };
    
    const handleDelete = () => {
        if (!selectedFormula) return;
        setFormulas(prev => prev.filter(f => f.id !== selectedFormula.id));
        setSelectedFormula(formulas.length > 1 ? formulas[0] : null);
        toast({
            variant: 'destructive',
            title: "Fórmula Excluída!",
            description: `A fórmula foi removida do sistema.`,
        });
    };

    return (
        <div className="p-4 h-full">
            <Card className="h-full flex">
                {/* Left Panel: Formula List */}
                <div className="w-1/3 border-r flex flex-col">
                    <div className="p-4 border-b">
                        <h3 className="text-lg font-semibold flex items-center gap-2"><List /> Lista de Fórmulas</h3>
                        <div className="flex w-full items-center space-x-2 mt-4">
                            <Input type="text" placeholder="Buscar fórmula..." />
                            <Button variant="outline" size="icon"><Search size={18}/></Button>
                        </div>
                    </div>
                    <div className="flex-grow overflow-y-auto">
                        {formulas.map(f => (
                            <div 
                                key={f.id}
                                onClick={() => handleSelectFormula(f)}
                                className={`p-4 cursor-pointer border-b ${selectedFormula?.id === f.id ? 'bg-muted' : 'hover:bg-muted/50'}`}
                            >
                                <p className="font-semibold text-sm">{f.code} - {f.name}</p>
                                <p className="text-xs text-muted-foreground truncate">{f.description}</p>
                            </div>
                        ))}
                    </div>
                    <div className="p-2 border-t">
                        <Button className="w-full" onClick={handleNew}><PlusCircle className="mr-2 h-4 w-4"/> Nova Fórmula</Button>
                    </div>
                </div>

                {/* Right Panel: Formula Editor */}
                <div className="w-2/3 flex flex-col">
                    {selectedFormula ? (
                        <>
                            <CardHeader className="flex-row justify-between items-start">
                                <div>
                                    <CardTitle className="text-xl">Editor de Fórmula</CardTitle>
                                    <CardDescription>Editando: {selectedFormula.name}</CardDescription>
                                </div>
                                <div className="flex gap-2">
                                     <Button variant="destructive" onClick={handleDelete}><Trash2 className="mr-2 h-4 w-4"/> Excluir</Button>
                                     <Button onClick={handleSave}><Save className="mr-2 h-4 w-4"/> Salvar Fórmula</Button>
                                </div>
                            </CardHeader>
                            <CardContent className="flex-grow flex flex-col gap-6">
                                {/* Formula Details */}
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                    <div className="space-y-2">
                                        <Label htmlFor="formula-code">Código</Label>
                                        <Input id="formula-code" value={selectedFormula.code} onChange={e => handleUpdateFormula('code', e.target.value)} placeholder="Ex: HE100"/>
                                    </div>
                                    <div className="space-y-2 col-span-2">
                                        <Label htmlFor="formula-name">Nome da Fórmula</Label>
                                        <Input id="formula-name" value={selectedFormula.name} onChange={e => handleUpdateFormula('name', e.target.value)} placeholder="Ex: Horas Extras 100%"/>
                                    </div>
                                     <div className="space-y-2 col-span-3">
                                        <Label htmlFor="formula-desc">Descrição</Label>
                                        <Input id="formula-desc" value={selectedFormula.description} onChange={e => handleUpdateFormula('description', e.target.value)} placeholder="Descrição da finalidade da fórmula."/>
                                    </div>
                                    <div className="space-y-2">
                                        <Label htmlFor="formula-type">Tipo</Label>
                                        <Select value={selectedFormula.type} onValueChange={(v: Formula['type']) => handleUpdateFormula('type', v)}>
                                            <SelectTrigger id="formula-type">
                                                <SelectValue placeholder="Selecione o tipo" />
                                            </SelectTrigger>
                                            <SelectContent>
                                                <SelectItem value="provento">Provento</SelectItem>
                                                <SelectItem value="desconto">Desconto</SelectItem>
                                                <SelectItem value="base">Base de Cálculo</SelectItem>
                                            </SelectContent>
                                        </Select>
                                    </div>
                                </div>
                                
                                <Separator />

                                {/* Formula Expression Editor */}
                                <div className="flex-grow flex flex-col gap-2">
                                    <Label className="text-base" htmlFor="formula-expression">Fórmula / Expressão de Cálculo</Label>
                                    <div className='flex gap-2 items-center'>
                                        <p className='text-sm text-muted-foreground'>Inserir:</p>
                                        <Select onValueChange={v => handleUpdateFormula('expression', selectedFormula.expression + v)}>
                                            <SelectTrigger className="w-[180px] h-8">
                                                <SelectValue placeholder="Variáveis" />
                                            </SelectTrigger>
                                            <SelectContent>
                                                {payrollVariables.map(v => <SelectItem key={v} value={v}>{v}</SelectItem>)}
                                            </SelectContent>
                                        </Select>
                                         <Select onValueChange={v => handleUpdateFormula('expression', selectedFormula.expression + v)}>
                                            <SelectTrigger className="w-[180px] h-8">
                                                <SelectValue placeholder="Funções" />
                                            </SelectTrigger>
                                            <SelectContent>
                                                {payrollFunctions.map(f => <SelectItem key={f} value={f}>{f}</SelectItem>)}
                                            </SelectContent>
                                        </Select>
                                    </div>
                                    <Textarea 
                                        id="formula-expression" 
                                        className="flex-grow font-code text-base"
                                        placeholder="Ex: (SALARIO_BASE / 220) * HORAS_EXTRAS_100 * 2"
                                        value={selectedFormula.expression}
                                        onChange={e => handleUpdateFormula('expression', e.target.value)}
                                    />
                                    <div className='flex justify-end mt-2'>
                                         <Button variant="outline">Validar Sintaxe</Button>
                                    </div>
                                </div>
                            </CardContent>
                        </>
                    ) : (
                        <div className="flex-grow flex flex-col items-center justify-center text-muted-foreground">
                            <FileText size={48} className="mb-4" />
                            <p>Nenhuma fórmula selecionada.</p>
                            <p className="text-sm">Selecione uma fórmula na lista ou crie uma nova.</p>
                        </div>
                    )}
                </div>
            </Card>
        </div>
    );
}
