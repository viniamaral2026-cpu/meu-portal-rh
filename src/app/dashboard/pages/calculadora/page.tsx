
'use client';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useState } from 'react';
import { Separator } from '@/components/ui/separator';

export default function CalculadoraPage() {
    const [salary, setSalary] = useState(2500);
    const [reason, setReason] = useState('sem_justa_causa');
    const [notice, setNotice] = useState('indenizado');
    const [result, setResult] = useState<any>(null);

    const handleCalculate = () => {
        const baseSalary = Number(salary);
        const saldoSalario = (baseSalary / 30) * 15; // Simulação: 15 dias trabalhados
        const avisoPrevio = notice === 'indenizado' ? baseSalary : 0;
        const feriasProporcionais = (baseSalary / 12) * 6; // Simulação: 6/12 avos
        const tercoFerias = feriasProporcionais / 3;
        const decimoProporcional = (baseSalary / 12) * 7; // Simulação: 7/12 avos
        const fgts = (baseSalary * 8 / 100) * 12; // Simulação: 12 meses
        const multaFgts = reason === 'sem_justa_causa' ? fgts * 0.4 : 0;
        
        const total = saldoSalario + avisoPrevio + feriasProporcionais + tercoFerias + decimoProporcional + multaFgts;
        
        setResult({
            saldoSalario,
            avisoPrevio,
            feriasProporcionais,
            tercoFerias,
            decimoProporcional,
            multaFgts,
            total,
        });
    };


    return (
        <div className="p-4">
            <Card>
                <CardHeader>
                    <CardTitle>Calculadora de Rescisão (Simples)</CardTitle>
                    <CardDescription>Faça uma simulação rápida dos valores de uma rescisão de contrato.</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div className="space-y-2">
                            <Label htmlFor="salary">Salário Bruto (R$)</Label>
                            <Input id="salary" type="number" value={salary} onChange={(e) => setSalary(Number(e.target.value))} />
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="reason">Motivo da Rescisão</Label>
                            <Select value={reason} onValueChange={setReason}>
                                <SelectTrigger id="reason">
                                    <SelectValue placeholder="Selecione o motivo" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="sem_justa_causa">Demissão sem justa causa</SelectItem>
                                    <SelectItem value="com_justa_causa">Demissão com justa causa</SelectItem>
                                    <SelectItem value="pedido_demissao">Pedido de demissão</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>
                         <div className="space-y-2">
                            <Label htmlFor="notice">Aviso Prévio</Label>
                             <Select value={notice} onValueChange={setNotice}>
                                <SelectTrigger id="notice">
                                    <SelectValue placeholder="Tipo de aviso" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="indenizado">Indenizado</SelectItem>
                                    <SelectItem value="trabalhado">Trabalhado</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>
                    </div>
                    <Button onClick={handleCalculate}>Calcular</Button>
                    
                    {result && (
                        <div className="pt-6 space-y-4">
                            <Separator />
                            <h3 className="text-lg font-semibold">Resultado da Simulação</h3>
                            <div className="grid grid-cols-2 gap-4 text-sm">
                                <div className="flex justify-between"><span>Saldo de Salário:</span> <span className="font-medium">R$ {result.saldoSalario.toFixed(2)}</span></div>
                                <div className="flex justify-between"><span>Aviso Prévio Indenizado:</span> <span className="font-medium">R$ {result.avisoPrevio.toFixed(2)}</span></div>
                                <div className="flex justify-between"><span>Férias Proporcionais:</span> <span className="font-medium">R$ {result.feriasProporcionais.toFixed(2)}</span></div>
                                <div className="flex justify-between"><span>1/3 sobre Férias:</span> <span className="font-medium">R$ {result.tercoFerias.toFixed(2)}</span></div>
                                <div className="flex justify-between"><span>13º Salário Proporcional:</span> <span className="font-medium">R$ {result.decimoProporcional.toFixed(2)}</span></div>
                                <div className="flex justify-between"><span>Multa de 40% do FGTS:</span> <span className="font-medium">R$ {result.multaFgts.toFixed(2)}</span></div>
                            </div>
                             <Separator />
                             <div className="flex justify-between text-lg font-bold">
                                <span>Total Bruto Estimado:</span>
                                <span>R$ {result.total.toFixed(2)}</span>
                             </div>
                             <p className='text-xs text-muted-foreground'>* Valores simulados. Não inclui descontos como INSS, IRRF, etc.</p>
                        </div>
                    )}
                </CardContent>
            </Card>
        </div>
    );
}
