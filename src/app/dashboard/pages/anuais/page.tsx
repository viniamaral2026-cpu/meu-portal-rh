'use client';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { FileDown, Rocket } from 'lucide-react';
import { Progress } from '@/components/ui/progress';

export default function AnuaisPage() {
  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Obrigações Anuais</CardTitle>
          <CardDescription>Gere a DIRF e a RAIS para conformidade com as regulamentações anuais.</CardDescription>
        </CardHeader>
      </Card>
      <Tabs defaultValue="dirf">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="dirf">Declaração do Imposto de Renda Retido na Fonte (DIRF)</TabsTrigger>
          <TabsTrigger value="rais">Relação Anual de Informações Sociais (RAIS)</TabsTrigger>
        </TabsList>
        <TabsContent value="dirf">
          <Card>
            <CardHeader>
              <CardTitle>Gerador de DIRF</CardTitle>
              <CardDescription>Gere o arquivo da DIRF para o ano selecionado.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex items-end gap-4">
                <div className="flex-1 space-y-2">
                  <label htmlFor="dirf-ano" className="text-sm font-medium">Ano Calendário</label>
                  <Select>
                    <SelectTrigger id="dirf-ano">
                      <SelectValue placeholder="Selecione o ano" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="2023">2023</SelectItem>
                      <SelectItem value="2022">2022</SelectItem>
                      <SelectItem value="2021">2021</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <Button size="lg"><Rocket className="mr-2 h-4 w-4"/> Gerar DIRF</Button>
              </div>
              <div className="space-y-3 pt-4">
                <h4 className="font-semibold">Progresso da Geração:</h4>
                <Progress value={33} />
                <p className="text-sm text-muted-foreground">Processando 1 de 3 etapas... Validando dados dos colaboradores.</p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="rais">
          <Card>
            <CardHeader>
              <CardTitle>Gerador de RAIS</CardTitle>
              <CardDescription>Gere o arquivo da RAIS para o ano base selecionado.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
               <div className="flex items-end gap-4">
                <div className="flex-1 space-y-2">
                  <label htmlFor="rais-ano" className="text-sm font-medium">Ano Base</label>
                  <Select>
                    <SelectTrigger id="rais-ano">
                      <SelectValue placeholder="Selecione o ano" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="2023">2023</SelectItem>
                      <SelectItem value="2022">2022</SelectItem>
                      <SelectItem value="2021">2021</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <Button size="lg"><Rocket className="mr-2 h-4 w-4"/> Gerar RAIS</Button>
              </div>
               <div className="pt-4">
                <div className="flex items-center justify-between p-4 bg-green-50 border border-green-200 rounded-lg">
                    <div>
                        <h4 className="font-semibold text-green-800">RAIS 2023 Gerada com Sucesso!</h4>
                        <p className="text-sm text-green-700">Arquivo pronto para download e envio.</p>
                    </div>
                    <Button variant="outline"><FileDown className="mr-2 h-4 w-4"/> Baixar Arquivo</Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
