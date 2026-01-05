
'use client';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger, DialogFooter } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { PlusCircle, MapPin, Users, Building, ShieldCheck, Copy } from 'lucide-react';
import { Switch } from '@/components/ui/switch';

const filiais = [
    { id: 1, nome: 'Unidade Matriz', cidade: 'São Paulo', estado: 'SP', colaboradores: 450, tipo: 'Matriz', status: 'Ativa' },
    { id: 2, nome: 'Filial Rio de Janeiro', cidade: 'Rio de Janeiro', estado: 'RJ', colaboradores: 210, tipo: 'Filial', status: 'Ativa' },
    { id: 3, nome: 'Filial Belo Horizonte', cidade: 'Belo Horizonte', estado: 'MG', colaboradores: 150, tipo: 'Filial', status: 'Inativa' },
    { id: 4, nome: 'Centro de Distribuição', cidade: 'Curitiba', estado: 'PR', colaboradores: 85, tipo: 'CD', status: 'Ativa' },
]

export default function FiliaisPage() {
  return (
    <div className="space-y-6">
        <div className="flex justify-between items-start">
            <div>
                <h1 className="text-3xl font-bold">Gerenciamento de Filiais</h1>
                <p className="text-muted-foreground">Adicione, edite e gerencie as unidades da sua empresa.</p>
            </div>
            <Dialog>
                <DialogTrigger asChild>
                    <Button>
                        <PlusCircle className="mr-2 h-4 w-4" />
                        Adicionar Filial
                    </Button>
                </DialogTrigger>
                <DialogContent>
                    <DialogHeader>
                        <DialogTitle>Adicionar Nova Filial</DialogTitle>
                    </DialogHeader>
                    <div className="py-4 space-y-4">
                        <div className="space-y-2">
                            <Label htmlFor="nome-filial">Nome da Filial</Label>
                            <Input id="nome-filial" placeholder="Ex: Filial Nordeste" />
                        </div>
                         <div className="space-y-2">
                            <Label htmlFor="cnpj-filial">CNPJ</Label>
                            <Input id="cnpj-filial" placeholder="00.000.000/0000-00" />
                        </div>
                        <div className="flex items-center space-x-2">
                            <Switch id="espelhar-config" />
                            <Label htmlFor="espelhar-config">Espelhar configurações da Matriz</Label>
                        </div>
                    </div>
                    <DialogFooter>
                        <Button type="submit">Salvar Filial</Button>
                    </DialogFooter>
                </DialogContent>
            </Dialog>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {filiais.map(filial => (
                <Card key={filial.id} className="flex flex-col">
                    <CardHeader>
                        <div className="flex justify-between items-center">
                            <CardTitle className="text-lg">{filial.nome}</CardTitle>
                            <Building className="h-5 w-5 text-muted-foreground"/>
                        </div>
                        <CardDescription>
                          <span className={`px-2 py-1 text-xs rounded-full ${filial.status === 'Ativa' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>{filial.status}</span>
                        </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-3 flex-1">
                        <div className="flex items-center text-sm">
                            <MapPin className="h-4 w-4 mr-2 text-muted-foreground"/>
                            <span>{filial.cidade}, {filial.estado}</span>
                        </div>
                        <div className="flex items-center text-sm">
                            <Users className="h-4 w-4 mr-2 text-muted-foreground"/>
                            <span>{filial.colaboradores} colaboradores</span>
                        </div>
                        <div className="flex items-center text-sm">
                            <ShieldCheck className="h-4 w-4 mr-2 text-muted-foreground"/>
                            <span>{filial.tipo}</span>
                        </div>
                    </CardContent>
                    <div className="p-4 border-t">
                         <Button variant="outline" size="sm" className="w-full mt-2">Ver Painel da Filial</Button>
                    </div>
                </Card>
            ))}
        </div>
    </div>
  )
}
