'use client';
import { Card, CardHeader, CardTitle, CardContent, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Play, Pause, RefreshCw, Server, CheckCircle, XCircle } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

const logs = [
  { time: '10:30:05', message: 'Serviço iniciado com sucesso.', type: 'info' },
  { time: '10:30:10', message: 'Buscando artigos no canal "Notícias de Calçados".', type: 'info' },
  { time: '10:30:15', message: '5 novos artigos encontrados e adicionados.', type: 'success' },
  { time: '10:30:15', message: 'Buscando artigos no canal "Blog de RH".', type: 'info' },
  { time: '10:30:20', message: 'Nenhum novo artigo encontrado.', type: 'info' },
  { time: '10:30:20', message: 'Erro ao buscar no canal "Tecnologia Industrial". URL pode estar offline.', type: 'error' },
  { time: '10:30:21', message: 'Próxima verificação em 30 minutos.', type: 'info' },
];

export default function IniciarServicoRssPage() {
  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
            <div className="flex justify-between items-start">
                <div>
                    <CardTitle>Controle do Serviço de Leitura RSS</CardTitle>
                    <CardDescription>Inicie, pause ou reinicie o serviço que busca as notícias.</CardDescription>
                </div>
                <div className="flex items-center gap-2">
                    <Server className="h-5 w-5 text-green-500" />
                    <Badge variant="default">Serviço Ativo</Badge>
                </div>
            </div>
        </CardHeader>
        <CardContent className="flex gap-4">
            <Button className="bg-green-600 hover:bg-green-700"><Play className="mr-2 h-4 w-4"/> Iniciar Serviço</Button>
            <Button variant="secondary" className="bg-yellow-500 hover:bg-yellow-600 text-white"><Pause className="mr-2 h-4 w-4"/> Pausar Serviço</Button>
            <Button variant="destructive"><RefreshCw className="mr-2 h-4 w-4"/> Reiniciar Serviço</Button>
        </CardContent>
      </Card>
      
      <Card>
        <CardHeader>
            <CardTitle>Logs do Serviço em Tempo Real</CardTitle>
        </CardHeader>
        <CardContent>
            <div className="w-full h-80 bg-slate-900 text-white font-mono text-sm p-4 rounded-md overflow-y-auto">
                {logs.map((log, index) => (
                    <div key={index} className="flex gap-4">
                        <span>[{log.time}]</span>
                        <span className={`flex-1 ${log.type === 'error' ? 'text-red-400' : log.type === 'success' ? 'text-green-400' : 'text-slate-300'}`}>
                            {log.message}
                        </span>
                    </div>
                ))}
                 <div className="flex gap-4">
                    <span>[{new Date().toLocaleTimeString()}]</span>
                    <span className="flex-1 animate-pulse">_</span>
                </div>
            </div>
        </CardContent>
      </Card>
    </div>
  );
}
