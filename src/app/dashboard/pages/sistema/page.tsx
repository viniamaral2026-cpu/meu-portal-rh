'use client';
import { Card, CardHeader, CardTitle, CardContent, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { HardDrive, Cpu, MemoryStick, Database, Server, CheckCircle2 } from 'lucide-react';
import { Progress } from '@/components/ui/progress';

export default function SistemaPage() {
  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <div className="flex justify-between items-center">
            <div>
              <CardTitle>Status do Sistema e Recursos</CardTitle>
              <CardDescription>Monitoramento da saúde e do uso dos recursos do servidor.</CardDescription>
            </div>
            <div className="flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5 text-green-500" />
                <span className="font-semibold text-green-600">Todos os sistemas operacionais</span>
            </div>
          </div>
        </CardHeader>
      </Card>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium">Uso de CPU</CardTitle>
                <Cpu className="h-5 w-5 text-muted-foreground" />
            </CardHeader>
            <CardContent>
                <div className="text-3xl font-bold">15%</div>
                <Progress value={15} className="mt-2 h-2" />
            </CardContent>
        </Card>
        <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium">Uso de Memória (RAM)</CardTitle>
                <MemoryStick className="h-5 w-5 text-muted-foreground" />
            </CardHeader>
            <CardContent>
                <div className="text-3xl font-bold">4.2 GB / 8 GB</div>
                <Progress value={52.5} className="mt-2 h-2" />
            </CardContent>
        </Card>
        <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium">Uso de Disco</CardTitle>
                <HardDrive className="h-5 w-5 text-muted-foreground" />
            </CardHeader>
            <CardContent>
                <div className="text-3xl font-bold">45 GB / 100 GB</div>
                <Progress value={45} className="mt-2 h-2" />
            </CardContent>
        </Card>
         <Card className="md:col-span-2 lg:col-span-1">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium">Conexões ao Banco de Dados</CardTitle>
                <Database className="h-5 w-5 text-muted-foreground" />
            </CardHeader>
            <CardContent>
                <div className="text-3xl font-bold">25 ativas</div>
                <p className="text-xs text-muted-foreground">Máximo de 100</p>
            </CardContent>
        </Card>
        <Card className="md:col-span-2 lg:col-span-2">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium">Servidor de Aplicação</CardTitle>
                <Server className="h-5 w-5 text-muted-foreground" />
            </CardHeader>
            <CardContent>
                <p><strong>URL:</strong> https://meurh-app.seu-dominio.com</p>
                <p><strong>Ambiente:</strong> Produção</p>
                 <p><strong>Versão Node.js:</strong> 18.17.1</p>
            </CardContent>
        </Card>
      </div>
    </div>
  );
}
