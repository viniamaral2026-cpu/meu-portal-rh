
'use client';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';
import { FileDown, Settings2 } from 'lucide-react';
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from '@/components/ui/select';

const availableFields = [
    { id: 'name', label: 'Nome do Colaborador' },
    { id: 'cpf', label: 'CPF' },
    { id: 'role', label: 'Cargo' },
    { id: 'sector', label: 'Setor' },
    { id: 'admissionDate', label: 'Data de Admissão' },
    { id: 'grossSalary', label: 'Salário Bruto' },
];

export default function GeradorRelatoriosPage() {
    return (
        <div className="p-4 space-y-4">
            <Card>
                <CardHeader>
                    <CardTitle>Gerador de Relatórios</CardTitle>
                    <CardDescription>Crie relatórios personalizados selecionando os campos e filtros desejados.</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                    <div className='space-y-2'>
                        <Label>Fonte de Dados Principal</Label>
                        <Select defaultValue='employees'>
                            <SelectTrigger className="w-full md:w-1/2">
                                <SelectValue placeholder="Selecione a fonte de dados" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="employees">Cadastro de Colaboradores</SelectItem>
                                <SelectItem value="payroll">Folha de Pagamento</SelectItem>
                                <SelectItem value="vacation">Férias</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>

                    <div className="space-y-4">
                        <Label>Campos para Incluir no Relatório</Label>
                        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                            {availableFields.map(field => (
                                <div key={field.id} className="flex items-center space-x-2">
                                    <Checkbox id={field.id} />
                                    <Label htmlFor={field.id} className="font-normal">{field.label}</Label>
                                </div>
                            ))}
                        </div>
                    </div>
                     <div className="space-y-4">
                        <Label className='flex items-center gap-2'><Settings2 className='h-4 w-4'/>Filtros Avançados</Label>
                        {/* Placeholder for advanced filters */}
                         <div className='p-8 text-center border-2 border-dashed rounded-lg'>
                            <p className='text-sm text-muted-foreground'>Em breve: adicione filtros por setor, cargo, período e mais.</p>
                        </div>
                    </div>
                    
                    <Button>
                        <FileDown className="mr-2 h-4 w-4" />
                        Gerar Relatório (CSV)
                    </Button>
                </CardContent>
            </Card>
        </div>
    );
}
