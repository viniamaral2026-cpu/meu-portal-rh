'use client';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Download, Phone, Server } from 'lucide-react';

export default function AtualizacaoSistemaPage() {
  return (
    <div className="flex items-center justify-center h-full bg-muted/40 p-4">
      <Card className="w-full max-w-2xl text-center shadow-2xl">
        <CardHeader>
          <div className="mx-auto bg-primary/10 text-primary p-3 rounded-full w-fit">
            <Server className="h-10 w-10" />
          </div>
          <CardTitle className="mt-4 text-2xl">Atualizações do Sistema</CardTitle>
          <CardDescription className="text-base">
            Estamos sempre trabalhando para manter seu sistema seguro, rápido e online.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="text-left p-4 bg-green-50 border-l-4 border-green-500 text-green-800 rounded-r-lg">
            <p className="font-bold">Status Atual: Todos os sistemas operacionais.</p>
            <p className="text-sm">Última verificação: {new Date().toLocaleString()}</p>
          </div>
          
          <p className="text-muted-foreground">
            Se você encontrar algum erro ou comportamento inesperado, por favor, entre em contato com nosso suporte técnico. Sua ajuda é fundamental para aprimorarmos a plataforma.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <div className="flex items-center gap-2 text-lg">
              <Phone className="h-5 w-5 text-primary" />
              <span className="font-semibold"> (99) 99999-9999</span>
            </div>
            <Button>
              <Download className="mr-2 h-4 w-4" />
              Procurar Atualização Mais Recente
            </Button>
          </div>

          <div className="text-xs text-muted-foreground pt-4 border-t">
            <p>Versão atual do sistema: 2.1.3-beta</p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
