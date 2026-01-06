'use client'
import { Card, CardHeader, CardTitle, CardContent, CardDescription } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Building, Palette, Users, Lock, Save } from 'lucide-react';

export default function ConfiguracoesPage() {
  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
            <CardTitle>Configurações Gerais do Sistema</CardTitle>
            <CardDescription>Gerencie as configurações da empresa, aparência, usuários e permissões.</CardDescription>
        </CardHeader>
      </Card>
      <Tabs defaultValue="empresa" className="w-full">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="empresa"><Building className="mr-2 h-4 w-4"/> Empresa</TabsTrigger>
          <TabsTrigger value="aparencia"><Palette className="mr-2 h-4 w-4"/> Aparência</TabsTrigger>
          <TabsTrigger value="usuarios"><Users className="mr-2 h-4 w-4"/> Usuários</TabsTrigger>
          <TabsTrigger value="permissoes"><Lock className="mr-2 h-4 w-4"/> Permissões</TabsTrigger>
        </TabsList>

        <TabsContent value="empresa">
          <Card>
            <CardHeader><CardTitle>Dados da Empresa</CardTitle></CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="razao-social">Razão Social</Label>
                <Input id="razao-social" defaultValue="Minha Empresa Calçados LTDA" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="cnpj">CNPJ</Label>
                <Input id="cnpj" defaultValue="00.123.456/0001-00" />
              </div>
               <Button><Save className="mr-2 h-4 w-4"/> Salvar</Button>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="aparencia">
          <Card>
            <CardHeader><CardTitle>Aparência (White Label)</CardTitle></CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="logo">Logo da Empresa</Label>
                <Input id="logo" type="file" />
                <p className="text-xs text-muted-foreground">Envie um arquivo PNG ou JPG.</p>
              </div>
              <div className="space-y-2">
                <Label htmlFor="cor-primaria">Cor Primária</Label>
                <Input id="cor-primaria" type="color" defaultValue="#2563eb" className="w-24"/>
              </div>
               <Button><Save className="mr-2 h-4 w-4"/> Salvar</Button>
            </CardContent>
          </Card>
        </TabsContent>

         <TabsContent value="usuarios">
          <Card>
            <CardHeader><CardTitle>Gerenciamento de Usuários</CardTitle></CardHeader>
            <CardContent>
                <p className="text-muted-foreground">Em breve: adicione, remova e edite usuários do sistema.</p>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="permissoes">
          <Card>
            <CardHeader><CardTitle>Grupos e Permissões</CardTitle></CardHeader>
            <CardContent>
                <p className="text-muted-foreground">Em breve: configure o que cada grupo de usuário pode ver e fazer.</p>
            </CardContent>
          </Card>
        </TabsContent>

      </Tabs>
    </div>
  );
}
