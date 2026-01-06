'use client';
import { Card, CardHeader, CardTitle, CardContent, CardDescription, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { FilePlus2, Download, Filter } from 'lucide-react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

const dataSources = [
    { id: 'users', name: 'Colaboradores', fields: ['ID', 'Nome', 'Cargo', 'Setor', 'Salário'] },
    { id: 'attendance', name: 'Ponto', fields: ['Data', 'Entrada', 'Saída', 'Horas Trabalhadas'] },
    { id: 'production', name: 'Produção', fields: ['Linha', 'Produto', 'Quantidade', 'Data'] },
];

export default function GeradorRelatoriosPage() {
  return (
    <div className="grid md:grid-cols-3 gap-6 h-full">
      <div className="md:col-span-1">
        <Card className="h-full flex flex-col">
          <CardHeader>
            <CardTitle>Construtor de Relatório</CardTitle>
            <CardDescription>Selecione as colunas e filtros para criar seu relatório.</CardDescription>
          </CardHeader>
          <CardContent className="flex-1 space-y-6 overflow-y-auto">
            <Accordion type="multiple" defaultValue={['users']} className="w-full">
              {dataSources.map(source => (
                <AccordionItem value={source.id} key={source.id}>
                  <AccordionTrigger>{source.name}</AccordionTrigger>
                  <AccordionContent>
                    <div className="space-y-2">
                        {source.fields.map(field => (
                            <div key={field} className="flex items-center space-x-2">
                                <Checkbox id={`${source.id}-${field}`} />
                                <Label htmlFor={`${source.id}-${field}`}>{field}</Label>
                            </div>
                        ))}
                    </div>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </CardContent>
          <CardFooter>
            <Button className="w-full"><FilePlus2 className="mr-2 h-4 w-4"/> Gerar Relatório</Button>
          </CardFooter>
        </Card>
      </div>
       <div className="md:col-span-2">
        <Card>
            <CardHeader>
                <div className="flex justify-between items-center">
                    <div>
                        <CardTitle>Pré-visualização</CardTitle>
                        <CardDescription>Visualização dos dados do seu novo relatório.</CardDescription>
                    </div>
                     <div className="flex gap-2">
                        <Button variant="outline"><Filter className="mr-2 h-4 w-4"/> Adicionar Filtro</Button>
                        <Button><Download className="mr-2 h-4 w-4"/> Exportar (CSV)</Button>
                    </div>
                </div>
            </CardHeader>
            <CardContent>
                <p className="text-muted-foreground text-center py-10">
                    Selecione os campos na barra lateral para começar a montar seu relatório.
                </p>
            </CardContent>
        </Card>
       </div>
    </div>
  );
}
