
'use client';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { FileText, Search } from 'lucide-react';
import { useState } from 'react';

const allReports = [
    { id: 'rep001', title: 'Relação de Colaboradores Ativos', category: 'Cadastrais' },
    { id: 'rep002', title: 'Ficha Cadastral Completa', category: 'Cadastrais' },
    { id: 'rep003', title: 'Resumo da Folha de Pagamento', category: 'Folha' },
    { id: 'rep004', title: 'Holerites por Período', category: 'Folha' },
    { id: 'rep005', title: 'Controle de Férias', category: 'Férias' },
    { id: 'rep006', title: 'Provisão de Férias', category: 'Férias' },
    { id: 'rep007', title: 'Termo de Rescisão (TRCT)', category: 'Rescisão' },
    { id: 'rep008', title: 'Guias de FGTS e INSS', category: 'Encargos' },
];

export default function RelatoriosPage() {
    const [search, setSearch] = useState('');
    const filteredReports = search
        ? allReports.filter(r => r.title.toLowerCase().includes(search.toLowerCase()))
        : allReports;

    const groupedReports = filteredReports.reduce((acc, report) => {
        (acc[report.category] = acc[report.category] || []).push(report);
        return acc;
    }, {} as Record<string, typeof allReports>);

    return (
        <div className="p-4 space-y-4">
            <Card>
                <CardHeader>
                    <CardTitle>Central de Relatórios</CardTitle>
                    <CardDescription>Acesse, visualize e emita os relatórios padrão do sistema.</CardDescription>
                </CardHeader>
                <CardContent>
                     <div className="flex w-full max-w-sm items-center space-x-2">
                        <Input 
                            type="text" 
                            placeholder="Buscar relatório..." 
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                        />
                        <Button type="submit"><Search className="mr-2 h-4 w-4" /> Buscar</Button>
                    </div>
                </CardContent>
            </Card>

            <div className="space-y-6">
                {Object.entries(groupedReports).map(([category, reports]) => (
                     <div key={category}>
                        <h2 className="text-xl font-semibold mb-3">{category}</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                            {reports.map(report => (
                                <Card key={report.id} className="flex flex-col">
                                    <CardHeader className="flex-row gap-4 items-center">
                                         <FileText className="w-8 h-8 text-primary" />
                                         <div>
                                            <CardTitle className="text-base">{report.title}</CardTitle>
                                        </div>
                                    </CardHeader>
                                    <CardContent className="flex-grow flex items-end">
                                        <Button variant="outline" className="w-full">Visualizar/Emitir</Button>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>
                     </div>
                ))}
            </div>
        </div>
    );
}
