'use client';

import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { FileDown, History, Check, Settings, Building } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';

const layoutOptions = {
    governamental: [
        { value: 'sefip', label: 'SEFIP - Recolhimento do FGTS e Informações à Previdência' },
        { value: 'caged', label: 'CAGED - Cadastro Geral de Empregados e Desempregados' },
        { value: 'manad', label: 'MANAD - Manual Normativo de Arquivos Digitais' },
    ],
    bancario: [
        { value: 'pagto-bb', label: 'Layout Pagamento de Salários - Banco do Brasil' },
        { value: 'pagto-itau', label: 'Layout Pagamento de Salários - Itaú' },
        { value: 'pagto-bradesco', label: 'Layout Pagamento de Salários - Bradesco' },
    ],
    contabil: [
        { value: 'integracao-contabil', label: 'Integração Contábil - Lançamentos da Folha' },
    ]
};

const generationHistory = [
    { id: 'gen001', layout: 'SEFIP', competence: '06/2024', user: 'Admin', date: '2024-07-10 09:30', status: 'gerado' },
    { id: 'gen002', layout: 'Integração Contábil', competence: '06/2024', user: 'Admin', date: '2024-07-10 09:35', status: 'gerado' },
    { id: 'gen003', layout: 'Layout Pagamento de Salários - Itaú', competence: '06/2024', user: 'Admin', date: '2024-07-05 14:00', status: 'enviado' },
];


export default function GeradorSaidaPage() {
    const { toast } = useToast();
    const [selectedLayout, setSelectedLayout] = useState('');

    const handleGenerate = () => {
        if (!selectedLayout) {
            toast({
                variant: 'destructive',
                title: 'Nenhum layout selecionado',
                description: 'Por favor, selecione um layout de saída para continuar.',
            });
            return;
        }

        const layoutLabel = Object.values(layoutOptions).flat().find(l => l.value === selectedLayout)?.label || 'Arquivo';

        toast({
            title: 'Geração Iniciada',
            description: `O arquivo para "${layoutLabel}" está sendo processado.`,
        });
    };

    return (
        <div className="p-4 space-y-4">
            <Card>
                <CardHeader>
                    <CardTitle className="flex items-center gap-2"><Settings className='h-6 w-6' /> Gerador de Saídas</CardTitle>
                    <CardDescription>
                        Gere arquivos de exportação em layouts específicos para integração com sistemas governamentais, bancários e contábeis.
                    </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                    {/* Layout Selection */}
                    <div className="space-y-2">
                        <Label htmlFor="layout-select" className="text-base font-medium">1. Selecione o Layout de Saída</Label>
                        <Select onValueChange={setSelectedLayout} value={selectedLayout}>
                            <SelectTrigger id="layout-select" className="w-full md:w-1/2">
                                <SelectValue placeholder="Escolha um layout..." />
                            </SelectTrigger>
                            <SelectContent>
                                {Object.entries(layoutOptions).map(([group, options]) => (
                                    <SelectGroup key={group}>
                                        <SelectLabel className='capitalize'>{group}</SelectLabel>
                                        {options.map(option => (
                                            <SelectItem key={option.value} value={option.value}>{option.label}</SelectItem>
                                        ))}
                                    </SelectGroup>
                                ))}
                            </SelectContent>
                        </Select>
                    </div>

                    {/* Parameters */}
                    <div className='space-y-4'>
                         <Label className="text-base font-medium">2. Defina os Parâmetros</Label>
                         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 p-4 border rounded-lg">
                             <div className="space-y-2">
                                <Label htmlFor="competence">Competência</Label>
                                <Input id="competence" type="month" defaultValue="2024-07" />
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="payroll-type">Tipo da Folha</Label>
                                <Select defaultValue="mensal">
                                    <SelectTrigger id="payroll-type">
                                        <SelectValue />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="mensal">Folha Mensal</SelectItem>
                                        <SelectItem value="adiantamento">Adiantamento</SelectItem>
                                        <SelectItem value="13-primeira">13º Primeira Parcela</SelectItem>
                                        <SelectItem value="13-segunda">13º Segunda Parcela</SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>
                             <div className="space-y-2">
                                <Label htmlFor="establishment">Estabelecimento</Label>
                                <Select defaultValue="todos">
                                    <SelectTrigger id="establishment">
                                        <SelectValue />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="todos">Todos</SelectItem>
                                        <SelectItem value="matriz">01 - Matriz</SelectItem>
                                        <SelectItem value="filial-01">02 - Filial SP</SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>
                         </div>
                    </div>

                    {/* Actions */}
                    <div className="flex gap-2 pt-4">
                        <Button onClick={handleGenerate} size="lg">
                            <FileDown className="mr-2 h-5 w-5" /> Gerar Arquivo
                        </Button>
                        <Button variant="outline" size="lg">
                            <Check className="mr-2 h-5 w-5" /> Validar Dados
                        </Button>
                    </div>
                </CardContent>
            </Card>

            <Card>
                <CardHeader>
                    <CardTitle className='flex items-center gap-2'><History className='h-5 w-5' /> Histórico de Gerações</CardTitle>
                </CardHeader>
                <CardContent>
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead>Layout</TableHead>
                                <TableHead>Competência</TableHead>
                                <TableHead>Data/Hora</TableHead>
                                <TableHead>Usuário</TableHead>
                                <TableHead>Status</TableHead>
                                <TableHead className="text-right">Ação</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {generationHistory.map(item => (
                                <TableRow key={item.id}>
                                    <TableCell className="font-medium">{item.layout}</TableCell>
                                    <TableCell>{item.competence}</TableCell>
                                    <TableCell>{item.date}</TableCell>
                                    <TableCell>{item.user}</TableCell>
                                    <TableCell>
                                        <Badge variant={item.status === 'enviado' ? 'default' : 'secondary'} className='capitalize'>{item.status}</Badge>
                                    </TableCell>
                                    <TableCell className="text-right">
                                        <Button variant="outline" size="sm">
                                            <FileDown className='h-4 w-4' />
                                        </Button>
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
