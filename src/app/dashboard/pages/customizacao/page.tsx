'use client';
import { Card, CardHeader, CardTitle, CardContent, CardDescription, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Save, Building, Palette } from 'lucide-react';
import Image from 'next/image';

export default function CustomizacaoPage() {
  return (
    <div className="grid md:grid-cols-2 gap-6">
      <Card>
        <CardHeader className="flex flex-row items-center gap-4">
            <Building className="h-6 w-6" />
            <div>
                <CardTitle>Dados da Empresa</CardTitle>
                <CardDescription>Informações que aparecerão em relatórios e documentos.</CardDescription>
            </div>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="razao-social">Razão Social</Label>
            <Input id="razao-social" defaultValue="Minha Empresa Calçados LTDA" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="cnpj">CNPJ</Label>
            <Input id="cnpj" defaultValue="00.123.456/0001-00" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="endereco">Endereço Matriz</Label>
            <Input id="endereco" defaultValue="Rua das Flores, 123 - São Paulo, SP" />
          </div>
        </CardContent>
      </Card>
      <Card>
        <CardHeader className="flex flex-row items-center gap-4">
            <Palette className="h-6 w-6" />
            <div>
                <CardTitle>Aparência (White Label)</CardTitle>
                <CardDescription>Personalize o sistema com a identidade da sua marca.</CardDescription>
            </div>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="logo">Logo da Empresa</Label>
            <div className="flex items-center gap-4">
                <div className="p-2 border rounded-md bg-muted">
                    <Image src="/logo-placeholder.svg" alt="Logo atual" width={80} height={40} />
                </div>
                <Input id="logo" type="file" />
            </div>
            <p className="text-xs text-muted-foreground">Envie um arquivo PNG ou JPG (recomendado: 200x100 pixels).</p>
          </div>
          <div className="space-y-2">
            <Label htmlFor="cor-primaria">Cor Primária</Label>
            <div className="flex items-center gap-2">
                <Input id="cor-primaria" type="color" defaultValue="#1d4ed8" className="w-16 h-10 p-1"/>
                <span className="font-mono text-sm">#1d4ed8</span>
            </div>
            <p className="text-xs text-muted-foreground">Esta cor será usada em botões, links e menus.</p>
          </div>
        </CardContent>
      </Card>
      <div className="md:col-span-2 flex justify-end">
        <Button size="lg"><Save className="mr-2 h-4 w-4" /> Salvar Todas as Alterações</Button>
      </div>
    </div>
  );
}
