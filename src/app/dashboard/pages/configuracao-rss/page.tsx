'use client';
import { Card, CardHeader, CardTitle, CardContent, CardDescription, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Switch } from '@/components/ui/switch';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Input } from '@/components/ui/input';
import { Settings, Save } from 'lucide-react';

export default function ConfiguracaoRssPage() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center">
            <Settings className="mr-2 h-6 w-6"/>
            Configurações do Leitor RSS
        </CardTitle>
        <CardDescription>Ajuste o comportamento do serviço de leitura de feeds.</CardDescription>
      </CardHeader>
      <CardContent className="space-y-8">
        <div className="flex items-center justify-between p-4 border rounded-lg">
          <div>
            <Label htmlFor="auto-update" className="font-semibold">Atualização Automática</Label>
            <p className="text-sm text-muted-foreground">Buscar novos artigos em todos os canais periodicamente.</p>
          </div>
          <Switch id="auto-update" defaultChecked />
        </div>
        
        <div className="space-y-2 p-4 border rounded-lg">
            <Label htmlFor="update-interval" className="font-semibold">Intervalo de Atualização</Label>
            <p className="text-sm text-muted-foreground pb-2">Com que frequência o sistema deve verificar por novos artigos.</p>
            <Select defaultValue="30">
                <SelectTrigger id="update-interval" className="w-[280px]">
                    <SelectValue />
                </SelectTrigger>
                <SelectContent>
                    <SelectItem value="15">A cada 15 minutos</SelectItem>
                    <SelectItem value="30">A cada 30 minutos</SelectItem>
                    <SelectItem value="60">A cada 1 hora</SelectItem>
                    <SelectItem value="120">A cada 2 horas</SelectItem>
                </SelectContent>
            </Select>
        </div>

        <div className="space-y-2 p-4 border rounded-lg">
            <Label htmlFor="storage-time" className="font-semibold">Tempo de Armazenamento</Label>
            <p className="text-sm text-muted-foreground pb-2">Por quanto tempo os artigos devem ser mantidos no sistema antes de serem arquivados.</p>
            <Select defaultValue="90">
                <SelectTrigger id="storage-time" className="w-[280px]">
                    <SelectValue />
                </SelectTrigger>
                <SelectContent>
                    <SelectItem value="30">30 dias</SelectItem>
                    <SelectItem value="60">60 dias</SelectItem>
                    <SelectItem value="90">90 dias</SelectItem>
                    <SelectItem value="180">180 dias (6 meses)</SelectItem>
                    <SelectItem value="365">365 dias (1 ano)</SelectItem>
                </SelectContent>
            </Select>
        </div>
      </CardContent>
      <CardFooter>
        <Button><Save className="mr-2 h-4 w-4" /> Salvar Configurações</Button>
      </CardFooter>
    </Card>
  );
}
