'use client';
import { Card, CardHeader, CardTitle, CardContent, CardDescription, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Save, Play, ChevronRight, FunctionSquare } from 'lucide-react';
import { useState } from 'react';

const formulas = {
  "hora-extra-50": "BASE_CALCULO * 1.5 / HORAS_MES",
  "adicional-noturno": "BASE_CALCULO / HORAS_MES * 0.2 * HORAS_NOTURNAS",
  "inss": "CALCULA_INSS(BASE_INSS)",
};

const funcoesDisponiveis = ['SE', 'MAIOR', 'MENOR', 'MEDIA', 'SOMA', 'CALCULA_INSS'];
const variaveisDisponiveis = ['BASE_CALCULO', 'HORAS_MES', 'HORAS_NOTURNAS', 'BASE_INSS', 'SALARIO_MINIMO'];

export default function FormulaPage() {
  const [selectedFormula, setSelectedFormula] = useState('hora-extra-50');
  const [formulaCode, setFormulaCode] = useState(formulas['hora-extra-50']);

  const handleSelectChange = (value: string) => {
    setSelectedFormula(value);
    setFormulaCode(formulas[value as keyof typeof formulas]);
  }

  return (
    <div className="grid md:grid-cols-3 gap-6 h-full">
      <div className="md:col-span-2">
        <Card className="h-full flex flex-col">
          <CardHeader>
            <CardTitle className="flex items-center">
                <FunctionSquare className="mr-2"/>
                Editor de Fórmulas
            </CardTitle>
            <CardDescription>Crie e edite as fórmulas de cálculo para os eventos da folha.</CardDescription>
          </CardHeader>
          <CardContent className="flex-1 flex flex-col">
            <div className="mb-4">
                <label className="text-sm font-medium">Selecione o Evento para Editar</label>
                <Select value={selectedFormula} onValueChange={handleSelectChange}>
                    <SelectTrigger>
                        <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="hora-extra-50">Evento 010 - Hora Extra 50%</SelectItem>
                        <SelectItem value="adicional-noturno">Evento 015 - Adicional Noturno</SelectItem>
                        <SelectItem value="inss">Evento 101 - Desconto INSS</SelectItem>
                    </SelectContent>
                </Select>
            </div>
            <div className="flex-1">
                <textarea 
                    className="w-full h-full p-4 rounded-md border bg-muted/30 font-mono text-sm"
                    value={formulaCode}
                    onChange={(e) => setFormulaCode(e.target.value)}
                />
            </div>
          </CardContent>
          <CardFooter className="gap-2">
            <Button variant="secondary"><Play className="mr-2 h-4 w-4"/> Testar Fórmula</Button>
            <Button><Save className="mr-2 h-4 w-4"/> Salvar Fórmula</Button>
          </CardFooter>
        </Card>
      </div>

      <div className="md:col-span-1 space-y-4">
        <Card>
            <CardHeader><CardTitle className="text-base">Funções Disponíveis</CardTitle></CardHeader>
            <CardContent>
                <ul className="space-y-1">
                    {funcoesDisponiveis.map(f => (
                        <li key={f} className="flex items-center text-sm font-mono"><ChevronRight className="h-4 w-4"/>{f}</li>
                    ))}
                </ul>
            </CardContent>
        </Card>
        <Card>
            <CardHeader><CardTitle className="text-base">Variáveis Disponíveis</CardTitle></CardHeader>
            <CardContent>
                 <ul className="space-y-1">
                    {variaveisDisponiveis.map(v => (
                        <li key={v} className="flex items-center text-sm font-mono"><ChevronRight className="h-4 w-4"/>{v}</li>
                    ))}
                </ul>
            </CardContent>
        </Card>
      </div>
    </div>
  );
}
