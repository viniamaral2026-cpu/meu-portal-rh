'use client';

import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Switch } from '@/components/ui/switch';
import { Separator } from '@/components/ui/separator';
import { useToast } from '@/hooks/use-toast';
import { Save, Palette, Image as ImageIcon, Building, Globe } from 'lucide-react';

export default function SistemaPage() {
  const { toast } = useToast();
  const [headerColor, setHeaderColor] = useState('#1e40af'); // Exemplo de cor (azul escuro)
  const [logoUrl, setLogoUrl] = useState('');
  const [loginBgUrl, setLoginBgUrl] = useState('https://matoleitao.rs.gov.br/wp-content/uploads/2021/04/beira-1-scaled-750x450.jpg');
  const [isWhiteLabel, setIsWhiteLabel] = useState(false);

  const handleSave = () => {
    // Aplicar a cor do cabeçalho
    document.documentElement.style.setProperty('--primary', '221 83% 35%'); // Exemplo de conversão para HSL, em uma app real seria mais dinâmico
    document.documentElement.style.setProperty('--primary-darker', '221 83% 30%');

    toast({
      title: 'Configurações Salvas!',
      description: 'As configurações do sistema foram atualizadas com sucesso.',
    });
  };

  return (
    <div className="p-4 space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Configurações do Sistema</CardTitle>
          <CardDescription>
            Personalize a aparência, marca e informações da sua empresa no sistema.
          </CardDescription>
        </CardHeader>
        <CardContent>
            <div className='flex justify-end'>
                 <Button onClick={handleSave} size="lg">
                    <Save className="mr-2 h-4 w-4" /> Salvar Todas as Alterações
                </Button>
            </div>
        </CardContent>
      </Card>

      {/* White Label Card */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2"><Palette /> Marca e Aparência (White Label)</CardTitle>
          <CardDescription>Ative para aplicar as customizações de cor e logo em todo o sistema.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="flex items-center justify-between p-4 border rounded-lg">
            <Label htmlFor="white-label-switch" className="font-semibold text-base">
              Ativar Modo White Label
            </Label>
            <Switch
              id="white-label-switch"
              checked={isWhiteLabel}
              onCheckedChange={setIsWhiteLabel}
            />
          </div>
          
          <Separator />

          <div className={`grid grid-cols-1 md:grid-cols-2 gap-8 ${!isWhiteLabel ? 'opacity-50 pointer-events-none' : ''}`}>
            <div className="space-y-4">
              <h3 className="font-medium text-lg">Cores do Sistema</h3>
              <div className="space-y-2">
                <Label htmlFor="header-color">Cor Principal (Cabeçalho)</Label>
                <div className="flex items-center gap-2">
                  <Input
                    id="header-color"
                    type="color"
                    value={headerColor}
                    onChange={(e) => setHeaderColor(e.target.value)}
                    className="w-14 h-10 p-1"
                    disabled={!isWhiteLabel}
                  />
                  <Input
                    value={headerColor}
                    onChange={(e) => setHeaderColor(e.target.value)}
                    className="w-32"
                    disabled={!isWhiteLabel}
                  />
                </div>
                 <p className="text-xs text-muted-foreground">Esta cor será aplicada a cabeçalhos, botões e outros elementos principais.</p>
              </div>
            </div>
            
            <div className="space-y-4">
              <h3 className="font-medium text-lg flex items-center gap-2"><ImageIcon /> Customização de Imagens</h3>
              <div className="space-y-2">
                <Label htmlFor="logo-url">URL do Logo</Label>
                <Input
                  id="logo-url"
                  placeholder="https://suaempresa.com/logo.png"
                  value={logoUrl}
                  onChange={(e) => setLogoUrl(e.target.value)}
                  disabled={!isWhiteLabel}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="login-bg-url">URL da Imagem de Fundo do Login</Label>
                <Input
                  id="login-bg-url"
                  placeholder="https://suaempresa.com/fundo.jpg"
                  value={loginBgUrl}
                  onChange={(e) => setLoginBgUrl(e.target.value)}
                  disabled={!isWhiteLabel}
                />
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
      
      {/* Company Data Card */}
       <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2"><Building /> Dados da Empresa</CardTitle>
          <CardDescription>Informações usadas para relatórios e integrações com serviços governamentais.</CardDescription>
        </CardHeader>
        <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
                <Label htmlFor="razao-social">Razão Social</Label>
                <Input id="razao-social" placeholder="Sua Empresa Calçados LTDA" />
            </div>
            <div className="space-y-2">
                <Label htmlFor="cnpj">CNPJ</Label>
                <Input id="cnpj" placeholder="00.000.000/0001-00" />
            </div>
             <div className="space-y-2">
                <Label htmlFor="inscricao-estadual">Inscrição Estadual</Label>
                <Input id="inscricao-estadual" placeholder="000.0000000" />
            </div>
             <div className="space-y-2">
                <Label htmlFor="cnae">CNAE Principal</Label>
                <Input id="cnae" placeholder="15.31-9-01 - Fabricação de calçados de couro" />
            </div>
        </CardContent>
      </Card>
    </div>
  );
}
