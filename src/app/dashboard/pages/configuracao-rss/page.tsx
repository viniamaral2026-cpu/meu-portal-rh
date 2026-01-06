'use client';

import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Switch } from '@/components/ui/switch';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Separator } from '@/components/ui/separator';
import { useToast } from '@/hooks/use-toast';
import { Save, Bell, DatabaseZap, Settings, Download, Upload } from 'lucide-react';

type RssConfig = {
  serviceEnabled: boolean;
  updateFrequency: string; // in minutes
  articleRetention: string; // in days, or 'forever'
  autoMarkAsRead: boolean;
  autoMarkAsReadDays: number;
  notificationsEnabled: boolean;
  requestTimeout: number; // in seconds
};

const initialConfig: RssConfig = {
  serviceEnabled: true,
  updateFrequency: '30',
  articleRetention: '90',
  autoMarkAsRead: false,
  autoMarkAsReadDays: 15,
  notificationsEnabled: true,
  requestTimeout: 60,
};

export default function ConfiguracaoRssPage() {
  const [config, setConfig] = useState<RssConfig>(initialConfig);
  const { toast } = useToast();

  const handleSave = () => {
    // In a real app, you would save this config to a backend.
    toast({
      title: 'Configurações Salvas!',
      description: 'As configurações do serviço RSS foram atualizadas com sucesso.',
    });
    console.log('Saving config:', config);
  };

  const handleSwitchChange = (id: keyof RssConfig, checked: boolean) => {
    setConfig(prev => ({ ...prev, [id]: checked }));
  };

  const handleValueChange = (id: keyof RssConfig, value: string) => {
     setConfig(prev => ({ ...prev, [id]: value }));
  };

  return (
    <div className="p-4 space-y-4">
      <Card>
        <CardHeader className="flex-row items-start justify-between">
          <div>
            <CardTitle className="text-2xl flex items-center gap-2">
              <Settings /> Configurações do Serviço RSS
            </CardTitle>
            <CardDescription>
              Ajuste os parâmetros de funcionamento do serviço de busca e armazenamento de notícias.
            </CardDescription>
          </div>
          <Button onClick={handleSave} size="lg">
            <Save className="mr-2 h-4 w-4" /> Salvar Alterações
          </Button>
        </CardHeader>
        <CardContent className="space-y-8">

          {/* General Settings */}
          <Card className='bg-muted/30'>
            <CardHeader>
                <CardTitle className='text-lg'>Configurações Gerais</CardTitle>
            </CardHeader>
            <CardContent className='space-y-4'>
                <div className="flex items-center justify-between p-4 border rounded-lg bg-background">
                    <div>
                        <Label htmlFor="service-enabled" className="font-semibold">Serviço RSS Ativo</Label>
                        <p className="text-xs text-muted-foreground">Desative para interromper completamente a busca por novas notícias.</p>
                    </div>
                    <Switch id="service-enabled" checked={config.serviceEnabled} onCheckedChange={(c) => handleSwitchChange('serviceEnabled', c)} />
                </div>
                 <div className="space-y-2 p-4 border rounded-lg bg-background">
                    <Label htmlFor="update-frequency">Frequência de Atualização</Label>
                     <p className="text-xs text-muted-foreground mb-2">Com que frequência o sistema deve verificar se há novos artigos nos feeds.</p>
                    <Select value={config.updateFrequency} onValueChange={(v) => handleValueChange('updateFrequency', v)}>
                        <SelectTrigger id="update-frequency" className="w-64">
                            <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="15">A cada 15 minutos</SelectItem>
                            <SelectItem value="30">A cada 30 minutos</SelectItem>
                            <SelectItem value="60">A cada 1 hora</SelectItem>
                            <SelectItem value="120">A cada 2 horas</SelectItem>
                            <SelectItem value="360">A cada 6 horas</SelectItem>
                        </SelectContent>
                    </Select>
                </div>
            </CardContent>
          </Card>

          {/* Data Management */}
          <Card className='bg-muted/30'>
            <CardHeader>
                <CardTitle className='text-lg flex items-center gap-2'><DatabaseZap /> Gerenciamento de Dados</CardTitle>
            </CardHeader>
             <CardContent className='space-y-4'>
                <div className="space-y-2 p-4 border rounded-lg bg-background">
                    <Label htmlFor="article-retention">Retenção de Artigos</Label>
                    <p className="text-xs text-muted-foreground mb-2">Por quanto tempo os artigos devem ser mantidos no banco de dados antes de serem excluídos.</p>
                    <Select value={config.articleRetention} onValueChange={(v) => handleValueChange('articleRetention', v)}>
                        <SelectTrigger id="article-retention" className="w-64">
                            <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="30">30 dias</SelectItem>
                            <SelectItem value="90">90 dias</SelectItem>
                            <SelectItem value="180">180 dias</SelectItem>
                            <SelectItem value="365">1 ano</SelectItem>
                            <SelectItem value="forever">Manter para sempre</SelectItem>
                        </SelectContent>
                    </Select>
                </div>
                <div className="flex items-center justify-between p-4 border rounded-lg bg-background">
                    <div>
                        <Label htmlFor="auto-mark-as-read" className="font-semibold">Marcar como Lido Automaticamente</Label>
                        <p className="text-xs text-muted-foreground">Artigos mais antigos que o tempo definido serão marcados como lidos.</p>
                    </div>
                    <div className='flex items-center gap-4'>
                        <Input 
                            type="number" 
                            className="w-24" 
                            value={config.autoMarkAsReadDays}
                            onChange={(e) => handleValueChange('autoMarkAsReadDays', e.target.value)}
                            disabled={!config.autoMarkAsRead}
                        />
                        <span className='text-sm text-muted-foreground'>dias</span>
                        <Switch id="auto-mark-as-read" checked={config.autoMarkAsRead} onCheckedChange={(c) => handleSwitchChange('autoMarkAsRead', c)} />
                    </div>
                </div>
            </CardContent>
          </Card>

          {/* Notifications */}
          <Card className='bg-muted/30'>
             <CardHeader>
                <CardTitle className='text-lg flex items-center gap-2'><Bell/> Notificações</CardTitle>
            </CardHeader>
             <CardContent>
                 <div className="flex items-center justify-between p-4 border rounded-lg bg-background">
                    <div>
                        <Label htmlFor="notifications-enabled" className="font-semibold">Notificações na Área de Trabalho</Label>
                        <p className="text-xs text-muted-foreground">Exibir uma notificação do sistema quando novos artigos forem encontrados.</p>
                    </div>
                    <Switch id="notifications-enabled" checked={config.notificationsEnabled} onCheckedChange={(c) => handleSwitchChange('notificationsEnabled', c)} />
                </div>
             </CardContent>
          </Card>
          
          {/* Advanced */}
          <Card className='bg-muted/30'>
             <CardHeader>
                <CardTitle className='text-lg'>Avançado</CardTitle>
            </CardHeader>
             <CardContent className='space-y-4'>
                 <div className="space-y-2 p-4 border rounded-lg bg-background">
                    <Label htmlFor="request-timeout">Timeout da Requisição (segundos)</Label>
                     <p className="text-xs text-muted-foreground mb-2">Tempo máximo de espera para um feed responder antes de ser considerado indisponível.</p>
                    <Input 
                        id="request-timeout" 
                        type="number" 
                        className="w-48"
                        value={config.requestTimeout}
                        onChange={(e) => handleValueChange('requestTimeout', e.target.value)}
                    />
                </div>
                 <div className="p-4 border rounded-lg bg-background space-y-4">
                    <h4 className='font-semibold'>Manutenção de Dados</h4>
                    <div className='flex gap-4'>
                        <Button variant="outline"> <DatabaseZap className='mr-2 h-4 w-4' /> Limpar Cache de Artigos</Button>
                        <Button variant="outline"> <Download className='mr-2 h-4 w-4' /> Exportar Assinaturas (OPML)</Button>
                        <Button variant="outline"> <Upload className='mr-2 h-4 w-4' /> Importar Assinaturas (OPML)</Button>
                    </div>
                     <p className="text-xs text-muted-foreground">A limpeza do cache remove todos os artigos do banco de dados, mas mantém suas assinaturas.</p>
                 </div>
            </CardContent>
          </Card>
        </CardContent>
      </Card>
    </div>
  );
}
