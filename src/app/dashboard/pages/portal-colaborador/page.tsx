'use client';
import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { FileDown, Upload, Send, Clock, Calendar, User, FileText, Bell, DollarSign, HeartPulse } from 'lucide-react';

export default function PortalColaboradorPage() {

    const holerites = [
        { mes: 'Junho/2024', valor: 'R$ 3.580,20' },
        { mes: 'Maio/2024', valor: 'R$ 3.550,00' },
        { mes: 'Abril/2024', valor: 'R$ 3.565,50' },
    ];
    
  return (
    <div className="p-4 md:p-8 bg-muted/20 min-h-screen">
      <header className="flex items-center justify-between mb-8">
        <div className="flex items-center gap-4">
          <Avatar className="h-16 w-16">
            <AvatarImage src="/avatar.jpg" />
            <AvatarFallback>AJ</AvatarFallback>
          </Avatar>
          <div>
            <h1 className="text-2xl font-bold text-primary">Bem-vindo, Alexandre!</h1>
            <p className="text-muted-foreground">Este é o seu portal pessoal.</p>
          </div>
        </div>
        <Button variant="outline">Sair</Button>
      </header>

      <Tabs defaultValue="inicio" className="w-full">
        <TabsList className="grid w-full grid-cols-2 md:grid-cols-5 h-auto">
          <TabsTrigger value="inicio"><User className="w-4 h-4 mr-2"/> Início</TabsTrigger>
          <TabsTrigger value="ponto"><Clock className="w-4 h-4 mr-2"/> Ponto</TabsTrigger>
          <TabsTrigger value="documentos"><FileText className="w-4 h-4 mr-2"/> Documentos</TabsTrigger>
          <TabsTrigger value="comunicados"><Bell className="w-4 h-4 mr-2"/> Comunicados</TabsTrigger>
          <TabsTrigger value="ferias"><Calendar className="w-4 h-4 mr-2"/> Férias e Ausências</TabsTrigger>
        </TabsList>

        <TabsContent value="inicio" className="mt-6">
           <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
             <Card>
                <CardHeader>
                    <CardTitle className="flex items-center gap-2"><DollarSign /> Pagamentos</CardTitle>
                </CardHeader>
                <CardContent>
                    <p className="text-sm text-muted-foreground">Último Holerite (Junho/2024)</p>
                    <p className="text-2xl font-bold">R$ 3.580,20</p>
                    <Button variant="outline" className="w-full mt-4">Ver todos</Button>
                </CardContent>
             </Card>
             <Card>
                <CardHeader>
                    <CardTitle className="flex items-center gap-2"><Calendar /> Férias</CardTitle>
                </CardHeader>
                <CardContent>
                    <p className="text-sm text-muted-foreground">Saldo de dias</p>
                    <p className="text-2xl font-bold">18 dias</p>
                    <Button variant="outline" className="w-full mt-4">Solicitar Férias</Button>
                </CardContent>
             </Card>
             <Card>
                <CardHeader>
                    <CardTitle className="flex items-center gap-2"><Bell /> Último Comunicado</CardTitle>
                </CardHeader>
                <CardContent>
                    <p className="text-sm font-semibold">Feriado Corpus Christi</p>
                    <p className="text-sm text-muted-foreground line-clamp-2">Informamos que não haverá expediente no dia 30/05...</p>
                    <Button variant="outline" className="w-full mt-4">Ver Comunicados</Button>
                </CardContent>
             </Card>
           </div>
           <Card className="mt-6">
                <CardHeader>
                    <CardTitle>Meus Dados</CardTitle>
                    <CardDescription>Mantenha suas informações sempre atualizadas.</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                    <div className="grid md:grid-cols-2 gap-4">
                        <div>
                            <Label>Nome Completo</Label>
                            <Input defaultValue="Alexandre José Barbosa Lima Sobrinho" />
                        </div>
                        <div>
                            <Label>Email Pessoal</Label>
                            <Input type="email" defaultValue="alexandre.jbls@email.com" />
                        </div>
                         <div>
                            <Label>Telefone</Label>
                            <Input defaultValue="(11) 98888-7777" />
                        </div>
                         <div>
                            <Label>Endereço</Label>
                            <Input defaultValue="Rua das Flores, 123" />
                        </div>
                    </div>
                     <Button>Salvar Alterações</Button>
                </CardContent>
           </Card>
        </TabsContent>

        <TabsContent value="ponto" className="mt-6">
            <Card>
                <CardHeader>
                    <CardTitle>Registro de Ponto</CardTitle>
                    <CardDescription>Inicie e finalize sua jornada de trabalho aqui.</CardDescription>
                </CardHeader>
                <CardContent className="text-center space-y-4">
                    <div className="text-6xl font-bold text-primary">
                        04:35:12
                    </div>
                    <p className="text-muted-foreground">Horas trabalhadas hoje</p>
                    <div className="flex justify-center gap-4">
                        <Button size="lg" className="bg-green-600 hover:bg-green-700">Registrar Entrada</Button>
                        <Button size="lg" variant="destructive">Registrar Saída</Button>
                    </div>
                </CardContent>
            </Card>
        </TabsContent>
        
        <TabsContent value="documentos" className="mt-6">
           <div className="grid md:grid-cols-2 gap-6">
             <Card>
                <CardHeader>
                    <CardTitle>Meus Holerites</CardTitle>
                </CardHeader>
                <CardContent>
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead>Mês/Ano</TableHead>
                                <TableHead>Valor Líquido</TableHead>
                                <TableHead>Ação</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {holerites.map(h => (
                                <TableRow key={h.mes}>
                                    <TableCell>{h.mes}</TableCell>
                                    <TableCell>{h.valor}</TableCell>
                                    <TableCell>
                                        <Button variant="ghost" size="icon"><FileDown className="h-4 w-4" /></Button>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </CardContent>
             </Card>
             <Card>
                <CardHeader>
                    <CardTitle className="flex items-center gap-2"><HeartPulse /> Atestados Médicos</CardTitle>
                     <CardDescription>Envie seus atestados para validação do RH.</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                     <div>
                        <Label htmlFor="att-date">Data do Atestado</Label>
                        <Input id="att-date" type="date" />
                     </div>
                     <div>
                        <Label htmlFor="picture">Arquivo do Atestado (PDF, JPG)</Label>
                        <Input id="picture" type="file" />
                    </div>
                    <Button className="w-full"><Upload className="h-4 w-4 mr-2"/> Enviar Atestado</Button>
                </CardContent>
             </Card>
           </div>
        </TabsContent>

        <TabsContent value="comunicados" className="mt-6">
           <Card>
                <CardHeader><CardTitle>Caixa de Entrada</CardTitle></CardHeader>
                <CardContent>
                     <div className="border rounded-md">
                        <div className="p-4 border-b bg-muted/50">
                            <h4 className="font-semibold">Feriado Corpus Christi</h4>
                            <p className="text-sm text-muted-foreground">De: RH | Em: 28/05/2024</p>
                        </div>
                        <div className="p-4 border-b">
                            <h4 className="font-semibold">Campanha de Vacinação</h4>
                            <p className="text-sm text-muted-foreground">De: RH | Em: 15/05/2024</p>
                        </div>
                     </div>
                </CardContent>
           </Card>
        </TabsContent>

      </Tabs>
    </div>
  );
}
