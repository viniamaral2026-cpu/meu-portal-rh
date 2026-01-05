
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Label } from '@/components/ui/label';
import { FileDown } from 'lucide-react';

const annualTasks = [
    { id: '13-salario', title: '13º Salário', description: 'Geração e controle do pagamento do 13º salário (primeira e segunda parcela).' },
    { id: 'dirf', title: 'DIRF', description: 'Geração do arquivo da Declaração do Imposto de Renda Retido na Fonte.' },
    { id: 'rais', title: 'RAIS', description: 'Geração do arquivo da Relação Anual de Informações Sociais.' },
    { id: 'informe-rendimentos', title: 'Informe de Rendimentos', description: 'Emissão dos informes de rendimentos para os colaboradores.' },
]

export default function AnuaisPage() {
    return (
        <div className="p-4 space-y-4">
             <Card>
                <CardHeader>
                    <CardTitle>Obrigações Anuais</CardTitle>
                    <CardDescription>Selecione o ano para gerar os relatórios e arquivos das obrigações anuais.</CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="flex items-end gap-4">
                        <div className="space-y-2">
                            <Label htmlFor="year">Ano de Referência</Label>
                            <Select defaultValue="2023">
                                <SelectTrigger id="year" className="w-48">
                                    <SelectValue placeholder="Selecione o Ano" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="2024">2024</SelectItem>
                                    <SelectItem value="2023">2023</SelectItem>
                                    <SelectItem value="2022">2022</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>
                    </div>
                </CardContent>
            </Card>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {annualTasks.map(task => (
                    <Card key={task.id}>
                        <CardHeader>
                            <CardTitle className="text-lg">{task.title}</CardTitle>
                            <CardDescription>{task.description}</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <Button><FileDown className="mr-2 h-4 w-4" /> Gerar Arquivo/Relatório</Button>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </div>
    );
}
