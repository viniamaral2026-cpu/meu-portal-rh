'use client';

import { Card, CardHeader, CardTitle, CardContent, CardDescription, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Separator } from '@/components/ui/separator';
import { Progress } from '@/components/ui/progress';
import { KeyRound, BarChart, ExternalLink, Activity, Info } from 'lucide-react';
import Image from 'next/image';

export default function GeminiApiPage() {
    const tokenLimit = 32000;
    const currentTokens = 4580;
    const tokenUsagePercent = (currentTokens / tokenLimit) * 100;

  return (
    <div className="p-4 space-y-6">
      <Card>
        <CardHeader className='flex-row items-center gap-4'>
            <Image src="https://www.gstatic.com/apps/signup/resources/gemini-color-v3-24dp.svg" width={40} height={40} alt="Gemini Icon" />
            <div>
                <CardTitle className="text-2xl">Gerenciamento da API Gemini</CardTitle>
                <CardDescription>
                    Monitore o uso, gerencie sua chave de API e visualize os detalhes da sua licença.
                </CardDescription>
            </div>
        </CardHeader>
      </Card>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* API Key and License */}
        <Card>
            <CardHeader>
                <CardTitle className="flex items-center gap-2"><KeyRound className="w-5 h-5 text-primary"/> Chave de API e Licença</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
                <div className="space-y-2">
                    <Label htmlFor="api-key">Sua Chave de API</Label>
                    <div className="flex gap-2">
                        <Input id="api-key" readOnly value="AIzaSy... (oculto para segurança) ...dE1_s" />
                        <Button variant="outline">Copiar</Button>
                    </div>
                </div>
                 <div className="p-4 border rounded-lg bg-green-50 text-green-900">
                    <h4 className="font-semibold">Status da Licença: Ativa</h4>
                    <p className="text-sm">Seu plano inclui o primeiro ano de uso gratuito e expira em <strong>15/07/2025</strong>.</p>
                </div>
            </CardContent>
            <CardFooter>
                 <Button>
                    <ExternalLink className="mr-2 h-4 w-4" />
                    Gerenciar Pagamento e Licença
                 </Button>
            </CardFooter>
        </Card>
        
        {/* Token Usage */}
        <Card>
            <CardHeader>
                <CardTitle className="flex items-center gap-2"><BarChart className="w-5 h-5 text-primary"/> Uso de Tokens (Ciclo Atual)</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
                <div>
                    <div className="flex justify-between items-end mb-1">
                        <span className="text-2xl font-bold">{currentTokens.toLocaleString('pt-BR')}</span>
                        <span className="text-muted-foreground text-sm">/ {tokenLimit.toLocaleString('pt-BR')} tokens</span>
                    </div>
                    <Progress value={tokenUsagePercent} />
                    <p className="text-xs text-muted-foreground mt-2 text-right">Você usou {tokenUsagePercent.toFixed(2)}% do seu limite.</p>
                </div>
                 <div className="flex items-center gap-3 text-sm p-3 bg-muted/50 rounded-lg">
                    <Info className="h-5 w-5 text-muted-foreground" />
                    <p>Seu ciclo de faturamento é renovado todo dia 15 do mês. O uso excedente será cobrado separadamente.</p>
                </div>
            </CardContent>
        </Card>
      </div>
      
       <Card>
            <CardHeader>
                <CardTitle className="flex items-center gap-2"><Activity className="w-5 h-5 text-primary"/> Atividade Recente da API</CardTitle>
            </CardHeader>
            <CardContent>
                 <p className='text-sm text-muted-foreground'>
                    Funcionalidade em desenvolvimento. Aqui você poderá visualizar um log detalhado das chamadas à API Gemini.
                </p>
            </CardContent>
       </Card>

    </div>
  );
}
