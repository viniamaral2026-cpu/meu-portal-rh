'use client';
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Separator } from '@/components/ui/separator';
import { Edit, Save } from 'lucide-react';
import { useState } from 'react';
import { useToast } from '@/hooks/use-toast';


export default function PerfilPage() {
    const [isEditing, setIsEditing] = useState(false);
    const { toast } = useToast();

    const handleSave = (e: React.FormEvent) => {
        e.preventDefault();
        setIsEditing(false);
        toast({
            title: "Dados Salvos!",
            description: "Suas informações foram atualizadas com sucesso."
        })
    }

    return (
        <form onSubmit={handleSave} className="space-y-6">
            <div className="flex items-center justify-between">
                <h1 className="text-3xl font-bold">Meu Perfil</h1>
                 {isEditing ? (
                    <Button type="submit"><Save className="mr-2 h-4 w-4" /> Salvar Alterações</Button>
                ) : (
                    <Button type="button" onClick={() => setIsEditing(true)}><Edit className="mr-2 h-4 w-4" /> Editar Perfil</Button>
                )}
            </div>

            <Card>
                <CardHeader>
                    <div className="flex items-center gap-6">
                        <Avatar className="h-24 w-24">
                            <AvatarImage src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop" data-ai-hint="man portrait"/>
                            <AvatarFallback>MS</AvatarFallback>
                        </Avatar>
                        <div className="space-y-1">
                            <CardTitle className="text-2xl">Marcos da Silva</CardTitle>
                            <CardDescription>Costureiro | Setor de Produção</CardDescription>
                            <p className="text-sm text-muted-foreground pt-1">Matrícula: 00789</p>
                        </div>
                    </div>
                </CardHeader>
            </Card>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                 <Card>
                    <CardHeader>
                        <CardTitle>Informações Pessoais</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <div className="space-y-2">
                            <Label>Nome Completo</Label>
                            <Input defaultValue="Marcos da Silva" disabled />
                        </div>
                        <div className="space-y-2">
                            <Label>CPF</Label>
                            <Input defaultValue="123.456.789-00" disabled />
                        </div>
                         <div className="space-y-2">
                            <Label>Data de Nascimento</Label>
                            <Input type="date" defaultValue="1990-05-20" disabled />
                        </div>
                    </CardContent>
                </Card>
                 <Card>
                    <CardHeader>
                        <CardTitle>Informações de Contato</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <div className="space-y-2">
                            <Label htmlFor="email">E-mail Pessoal</Label>
                            <Input id="email" type="email" defaultValue="marcos.silva@email.com" disabled={!isEditing} />
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="telefone">Telefone</Label>
                            <Input id="telefone" defaultValue="(16) 99876-5432" disabled={!isEditing} />
                        </div>
                    </CardContent>
                </Card>
            </div>
             <Card>
                <CardHeader>
                    <CardTitle>Endereço</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                     <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                        <div className="space-y-2 md:col-span-1">
                            <Label htmlFor="cep">CEP</Label>
                            <Input id="cep" defaultValue="14400-000" disabled={!isEditing} />
                        </div>
                         <div className="space-y-2 md:col-span-3">
                            <Label htmlFor="logradouro">Logradouro</Label>
                            <Input id="logradouro" defaultValue="Rua das Acácias" disabled={!isEditing} />
                        </div>
                     </div>
                      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                        <div className="space-y-2">
                            <Label htmlFor="numero">Número</Label>
                            <Input id="numero" defaultValue="123" disabled={!isEditing} />
                        </div>
                        <div className="space-y-2 md:col-span-3">
                            <Label htmlFor="bairro">Bairro</Label>
                            <Input id="bairro" defaultValue="Centro" disabled={!isEditing} />
                        </div>
                     </div>
                </CardContent>
            </Card>

        </form>
    );
}