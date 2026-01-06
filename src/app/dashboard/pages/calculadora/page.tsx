'use client';
import { useState } from 'react';
import { Card, CardHeader, CardTitle, CardContent, CardDescription, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Calculator, Zap } from 'lucide-react';

export default function CalculadoraPage() {
  const [salario, setSalario] = useState(2500);
  const [encargos, setEncargos] = useState(0.35);
  const [beneficios, setBeneficios] = useState(500);
  const [custoTotal, setCustoTotal] = useState(0);

  const calcularCusto = () => {
    const custo = salario * (1 + encargos) + beneficios;
    setCustoTotal(custo);
  };

  return (
    <Card className="max-w-3xl mx-auto">
      <CardHeader>
        <CardTitle className="flex items-center">
          <Calculator className="mr-2 h-6 w-6" />
          Calculadora de Custo de Colaborador
        </CardTitle>
        <CardDescription>Estime o custo total de um colaborador para a sua empresa.</CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <Label htmlFor="salario-bruto">Salário Bruto Mensal (R$)</Label>
            <Input id="salario-bruto" type="number" value={salario} onChange={(e) => setSalario(parseFloat(e.target.value))} />
          </div>
          <div className="space-y-2">
            <Label htmlFor="encargos">Percentual de Encargos Sociais (%)</Label>
            <Input id="encargos" type="number" value={encargos * 100} onChange={(e) => setEncargos(parseFloat(e.target.value) / 100)} placeholder="Ex: 35 para 35%" />
          </div>
        </div>
        <div className="space-y-2">
          <Label htmlFor="beneficios">Total de Benefícios Mensais (R$)</Label>
          <Input id="beneficios" type="number" value={beneficios} onChange={(e) => setBeneficios(parseFloat(e.target.value))} placeholder="Ex: VR, VT, Plano de Saúde" />
        </div>
        <Button className="w-full" onClick={calcularCusto}>
          <Zap className="mr-2 h-4 w-4" />
          Calcular Custo Total
        </Button>
      </CardContent>
      {custoTotal > 0 && (
        <CardFooter className="bg-muted p-6 rounded-b-lg">
          <div className="w-full text-center">
            <h3 className="text-lg font-semibold">Custo Total Estimado</h3>
            <p className="text-4xl font-bold text-primary mt-2">
              {custoTotal.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
            </p>
            <p className="text-sm text-muted-foreground mt-1">por mês</p>
          </div>
        </CardFooter>
      )}
    </Card>
  );
}
