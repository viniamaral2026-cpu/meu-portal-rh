'use client';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { User, Clock, FileText, Bell, Briefcase, Calendar, DollarSign, Download, Upload } from 'lucide-react';

const holerites = [
    { mes: 'Junho/2024', arquivo: 'holerite_jun_2024.pdf' },
    { mes: 'Maio/2024', arquivo: 'holerite_mai_2024.pdf' },
    { mes: 'Abril/2024', arquivo: 'holerite_abr_2024.pdf' },
]

const comunicados = [
    { data: '25/07/2024', titulo: 'Novo Procedimento de Segurança', lido: true },
    { data: '15/07/2024', titulo: 'Feriado Municipal - Próxima Segunda', lido: true },
    { data: '01/07/2024', titulo: 'Política de Home Office Atualizada', lido: false },
]


export default function PortalColaboradorPage() {
  return (
    <div className="min-h-screen bg-muted/40">
        <header className="bg-card border-b p-4 flex justify-between items-center">
            <div className="flex items-center gap-4">
                <Briefcase className="h-8 w-8 text-primary"/>
                <h1 className="text-xl font-bold">Portal do Colaborador</h1>
            </div>
            <div className="flex items-center gap-4">
                <Avatar>
                    <AvatarFallback>AS</AvatarFallback>
                </Avatar>
                <div>
                    <p className="font-semibold">Ana Silva</p>
                    <p className="text-sm text-muted-foreground">Desenvolvedora Frontend</p>
                </div>
                 <Button variant="outline" size="sm">Sair</Button>
            </div>
        </header>

      <main className="p-6">
        <Tabs defaultValue="inicio">
          <TabsList className="grid w-full grid-cols-5">
            <TabsTrigger value="inicio"><Bell className="mr-2 h-4 w-4"/> Início</TabsTrigger>
            <TabsTrigger value="dados"><User className="mr-2 h-4 w-4"/> Meus Dados</TabsTrigger>
            <TabsTrigger value="ponto"><Clock className="mr-2 h-4 w-4"/> Ponto</TabsTrigger>
            <TabsTrigger value="documentos"><FileText className="mr-2 h-4 w-4"/> Documentos</TabsTrigger>
            <TabsTrigger value="comunicados"><Bell className="mr-2 h-4 w-4"/> Comunicados</TabsTrigger>
          </TabsList>

          <TabsContent value="inicio" className="mt-6">
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                <Card>
                    <CardHeader>
                        <CardTitle className="flex items-center"><DollarSign className="mr-2 h-5 w-5"/> Último Pagamento</CardTitle>
                        <CardDescription>Junho/2024</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <p className="text-2xl font-bold">R$ 4.850,00</p>
                        <Button size="sm" className="mt-2 w-full"><Download className="mr-2 h-4 w-4"/> Baixar Holerite</Button>
                    </CardContent>
                </Card>
                 <Card>
                    <CardHeader>
                        <CardTitle className="flex items-center"><Calendar className="mr-2 h-5 w-5"/> Férias</CardTitle>
                        <CardDescription>Saldo disponível</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <p className="text-2xl font-bold">18 dias</p>
                        <Button size="sm" variant="outline" className="mt-2 w-full">Solicitar Férias</Button>
                    </CardContent>
                </Card>
                 <Card>
                    <CardHeader>
                        <CardTitle className="flex items-center"><Bell className="mr-2 h-5 w-5"/> Avisos Recentes</CardTitle>
                        <CardDescription>3 não lidos</CardDescription>
                    </CardHeader>
                    <CardContent>
                       <p className="text-sm">Último aviso: "Política de Home Office Atualizada"</p>
                       <Button size="sm" variant="outline" className="mt-2 w-full">Ver Comunicados</Button>
                    </CardContent>
                </Card>
            </div>
          </TabsContent>

          <TabsContent value="dados" className="mt-6">
            <Card>
                <CardHeader>
                    <CardTitle>Meus Dados Cadastrais</CardTitle>
                    <CardDescription>Mantenha suas informações sempre atualizadas.</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                     <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                            <Label htmlFor="nome">Nome Completo</Label>
                            <Input id="nome" defaultValue="Ana Silva" />
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="cpf">CPF</Label>
                            <Input id="cpf" defaultValue="123.456.789-00" readOnly />
                        </div>
                     </div>
                     <div className="space-y-2">
                        <Label htmlFor="email">Email</Label>
                        <Input id="email" type="email" defaultValue="ana.silva@empresa.com" />
                    </div>
                     <div className="space-y-2">
                        <Label htmlFor="endereco">Endereço</Label>
                        <Input id="endereco" defaultValue="Rua das Flores, 123, São Paulo - SP" />
                    </div>
                    <Button>Salvar Alterações</Button>
                </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="ponto" className="mt-6">
             <Card>
                <CardHeader>
                    <CardTitle>Registro de Ponto</CardTitle>
                    <CardDescription>Hoje: 26/07/2024</CardDescription>
                </CardHeader>
                <CardContent className="flex flex-col items-center gap-4">
                    <div className="text-5xl font-mono font-bold">09:03:45</div>
                    <Button size="lg" className="w-full max-w-sm">Registrar Entrada</Button>
                    <div className="w-full">
                        <h3 className="font-semibold mb-2">Registros de Hoje</h3>
                         <Table>
                            <TableHeader>
                                <TableRow>
                                <TableHead>Tipo</TableHead>
                                <TableHead>Horário</TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                <TableRow>
                                    <TableCell>Entrada</TableCell>
                                    <TableCell>09:02:10</TableCell>
                                </TableRow>
                            </TableBody>
                        </Table>
                    </div>
                </CardContent>
             </Card>
          </TabsContent>

          <TabsContent value="documentos" className="mt-6">
             <Card>
                <CardHeader>
                    <CardTitle>Meus Documentos</CardTitle>
                </CardHeader>
                <CardContent>
                    <Tabs defaultValue="holerites">
                        <TabsList>
                            <TabsTrigger value="holerites">Holerites</TabsTrigger>
                            <TabsTrigger value="atestados">Atestados e Justificativas</TabsTrigger>
                        </TabsList>
                        <TabsContent value="holerites" className="mt-4">
                            <Table>
                                <TableHeader><TableRow><TableHead>Mês de Referência</TableHead><TableHead className="text-right">Ação</TableHead></TableRow></TableHeader>
                                <TableBody>
                                    {holerites.map(h => (
                                        <TableRow key={h.mes}>
                                            <TableCell>{h.mes}</TableCell>
                                            <TableCell className="text-right"><Button variant="outline" size="sm"><Download className="mr-2 h-4 w-4"/> Baixar</Button></TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </TabsContent>
                        <TabsContent value="atestados" className="mt-4">
                           <div className="flex flex-col items-center justify-center w-full h-48 border-2 border-dashed rounded-lg cursor-pointer bg-muted hover:bg-muted/80">
                                <div className="flex flex-col items-center justify-center pt-5 pb-6">
                                    <Upload className="w-8 h-8 mb-2 text-muted-foreground" />
                                    <p className="mb-2 text-sm text-muted-foreground">Arraste e solte ou clique para enviar atestado</p>
                                </div>
                                <Input id="dropzone-file-att" type="file" className="hidden" />
                            </div>
                        </TabsContent>
                    </Tabs>
                </CardContent>
             </Card>
          </TabsContent>
          <TabsContent value="comunicados" className="mt-6">
            <Card>
                <CardHeader><CardTitle>Mural de Comunicados</CardTitle></CardHeader>
                <CardContent>
                     <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead>Data</TableHead>
                                <TableHead>Título</TableHead>
                                <TableHead>Status</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {comunicados.map(c => (
                                <TableRow key={c.titulo} className={!c.lido ? 'font-bold' : ''}>
                                    <TableCell>{c.data}</TableCell>
                                    <TableCell>{c.titulo}</TableCell>
                                    <TableCell><Badge variant={c.lido ? 'secondary' : 'default'}>{c.lido ? 'Lido' : 'Novo'}</Badge></TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                     </Table>
                </CardContent>
            </Card>
          </TabsContent>

        </Tabs>
      </main>
    </div>
  );
}
