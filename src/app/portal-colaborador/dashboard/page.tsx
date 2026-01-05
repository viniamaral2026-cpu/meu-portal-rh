'use client';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Separator } from '@/components/ui/separator';
import { Badge } from '@/components/ui/badge';
import { FileText, Calendar, DollarSign, Edit, Download, User, Clock, Briefcase, Bell, Check, Upload } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';

const employeeData = {
    name: 'João da Silva',
    role: 'Cortador',
    department: 'Corte',
    avatar: '/avatars/01.png',
    lastPaycheck: {
        date: '05/07/2024',
        value: 'R$ 3.049,50'
    },
    vacation: {
        status: 'Programada',
        period: '01/08/2024 a 30/08/2024'
    },
    timeclock: {
        lastEntry: '10/07/2024 08:02'
    }
};

const documents = [
    { name: "Holerite - Junho/2024", date: "05/07/2024" },
    { name: "Holerite - Maio/2024", date: "05/06/2024" },
    { name: "Informe de Rendimentos 2023", date: "28/02/2024" },
];

const notices = [
    { title: "Comunicado de Feriado", date: "01/07/2024", read: true },
    { title: "Pesquisa de Clima Organizacional", date: "25/06/2024", read: false },
]

export default function PortalColaboradorDashboardPage() {
    return (
        <div className="p-4 bg-muted/20 min-h-full">
            <div className="max-w-7xl mx-auto space-y-6">
                <Card>
                    <CardContent className="p-6 flex justify-between items-center">
                         <div className="flex items-center gap-4">
                            <Avatar className="h-20 w-20 border-2 border-primary">
                                <AvatarFallback className="text-3xl">JS</AvatarFallback>
                            </Avatar>
                            <div>
                                <h1 className="text-2xl font-bold">Bem-vindo ao seu Portal, {employeeData.name}!</h1>
                                <p className="text-muted-foreground">{employeeData.role} • {employeeData.department}</p>
                            </div>
                        </div>
                        <Button className='h-12 text-lg'>
                           <Clock className='mr-2' /> Registrar Ponto
                        </Button>
                    </CardContent>
                </Card>

                <Tabs defaultValue="inicio" className="w-full">
                    <TabsList className="grid w-full grid-cols-5">
                        <TabsTrigger value="inicio">Início</TabsTrigger>
                        <TabsTrigger value="dados">Meus Dados</TabsTrigger>
                        <TabsTrigger value="ponto">Controle de Ponto</TabsTrigger>
                        <TabsTrigger value="documentos">Documentos</TabsTrigger>
                        <TabsTrigger value="comunicados">Comunicados</TabsTrigger>
                    </TabsList>
                    
                    <TabsContent value="inicio" className='mt-6'>
                         <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                            <Card className="lg:col-span-2">
                                <CardHeader>
                                    <CardTitle>Acesso Rápido</CardTitle>
                                </CardHeader>
                                <CardContent className="grid grid-cols-2 gap-4">
                                     <Button variant="outline" className='h-24 justify-start p-4 flex-col items-start gap-1'>
                                        <div className='flex items-center gap-2'><DollarSign /> <span className='font-bold'>Meus Holerites</span></div>
                                        <p className='text-xs text-muted-foreground text-left'>Visualize e baixe seus holerites.</p>
                                   </Button>
                                   <Button variant="outline" className='h-24 justify-start p-4 flex-col items-start gap-1'>
                                        <div className='flex items-center gap-2'><Calendar /> <span className='font-bold'>Minhas Férias</span></div>
                                        <p className='text-xs text-muted-foreground text-left'>Consulte seu saldo e programe suas férias.</p>
                                   </Button>
                                   <Button variant="outline" className='h-24 justify-start p-4 flex-col items-start gap-1'>
                                        <div className='flex items-center gap-2'><FileText /> <span className='font-bold'>Informe de Rendimentos</span></div>
                                        <p className='text-xs text-muted-foreground text-left'>Acesse seu informe para o IRPF.</p>
                                   </Button>
                                   <Button variant="outline" className='h-24 justify-start p-4 flex-col items-start gap-1'>
                                        <div className='flex items-center gap-2'><Edit /> <span className='font-bold'>Meus Dados</span></div>
                                        <p className='text-xs text-muted-foreground text-left'>Atualize seus dados cadastrais e de contato.</p>
                                   </Button>
                                </CardContent>
                            </Card>

                            <div className="space-y-6">
                                <Card>
                                    <CardHeader>
                                        <CardTitle className="flex items-center gap-2"><DollarSign size={20} /> Último Pagamento</CardTitle>
                                    </CardHeader>
                                    <CardContent>
                                        <p className="text-2xl font-bold">{employeeData.lastPaycheck.value}</p>
                                        <p className="text-sm text-muted-foreground">Líquido referente a Junho/2024</p>
                                        <Button variant="link" className="px-0">Ver detalhes</Button>
                                    </CardContent>
                                </Card>
                                 <Card>
                                    <CardHeader>
                                        <CardTitle className="flex items-center gap-2"><Calendar size={20} /> Férias</CardTitle>
                                    </CardHeader>
                                    <CardContent>
                                        <Badge>{employeeData.vacation.status}</Badge>
                                        <p className="mt-2 text-sm text-muted-foreground">
                                            Período: <strong>{employeeData.vacation.period}</strong>.
                                        </p>
                                    </CardContent>
                                </Card>
                            </div>
                        </div>
                    </TabsContent>
                    
                    <TabsContent value="dados">
                         <Card>
                            <CardHeader>
                                <CardTitle>Meus Dados Pessoais</CardTitle>
                                <CardDescription>Mantenha seus dados atualizados. Alterações importantes podem precisar de validação do RH.</CardDescription>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                <div className="grid grid-cols-2 gap-4">
                                    <div className="space-y-1">
                                        <Label htmlFor="phone">Telefone</Label>
                                        <Input id="phone" defaultValue="(11) 91234-5678" />
                                    </div>
                                    <div className="space-y-1">
                                        <Label htmlFor="email">Email Pessoal</Label>
                                        <Input id="email" type="email" defaultValue="joao.silva@email.com" />
                                    </div>
                                </div>
                                <div className="space-y-1">
                                    <Label htmlFor="address">Endereço</Label>
                                    <Input id="address" defaultValue="Rua das Flores, 123, Bairro Feliz, São Paulo, SP" />
                                </div>
                                <Button>Salvar Alterações</Button>
                            </CardContent>
                        </Card>
                    </TabsContent>

                    <TabsContent value="ponto">
                        <Card>
                             <CardHeader>
                                <CardTitle>Espelho de Ponto</CardTitle>
                                <CardDescription>Consulte seu histórico de marcações de ponto.</CardDescription>
                            </CardHeader>
                            <CardContent>
                                 <Table>
                                    <TableHeader>
                                        <TableRow>
                                            <TableHead>Data</TableHead>
                                            <TableHead>Entrada 1</TableHead>
                                            <TableHead>Saída 1</TableHead>
                                            <TableHead>Entrada 2</TableHead>
                                            <TableHead>Saída 2</TableHead>
                                            <TableHead>Total Horas</TableHead>
                                        </TableRow>
                                    </TableHeader>
                                    <TableBody>
                                        <TableRow>
                                            <TableCell>10/07/2024</TableCell>
                                            <TableCell>08:02</TableCell>
                                            <TableCell>12:05</TableCell>
                                            <TableCell>13:08</TableCell>
                                            <TableCell>18:01</TableCell>
                                            <TableCell>08:56</TableCell>
                                        </TableRow>
                                         <TableRow>
                                            <TableCell>09/07/2024</TableCell>
                                            <TableCell>07:59</TableCell>
                                            <TableCell>12:01</TableCell>
                                            <TableCell>13:05</TableCell>
                                            <TableCell>18:03</TableCell>
                                            <TableCell>09:00</TableCell>
                                        </TableRow>
                                    </TableBody>
                                </Table>
                            </CardContent>
                        </Card>
                    </TabsContent>

                    <TabsContent value="documentos">
                       <Card>
                            <CardHeader>
                                <CardTitle>Meus Documentos</CardTitle>
                                <CardDescription>Acesse seus holerites, informes, contratos e outros documentos.</CardDescription>
                            </CardHeader>
                            <CardContent>
                               <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                                    <div>
                                        <h3 className='font-semibold mb-2'>Documentos Financeiros</h3>
                                        <div className='border rounded-md'>
                                            {documents.map(doc => (
                                                <div key={doc.name} className='flex items-center justify-between p-3 border-b'>
                                                    <div>
                                                        <p className='font-medium text-sm'>{doc.name}</p>
                                                        <p className='text-xs text-muted-foreground'>Disponível em: {doc.date}</p>
                                                    </div>
                                                    <Button variant='outline' size='icon'><Download size={16}/></Button>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                    <div>
                                         <h3 className='font-semibold mb-2'>Envio de Atestados e Certificados</h3>
                                         <div className='border rounded-lg p-6 space-y-4 text-center bg-muted/30'>
                                            <Upload className='mx-auto h-8 w-8 text-muted-foreground' />
                                            <p className='text-sm'>Arraste e solte ou clique para enviar um novo documento (atestado, certificado, etc).</p>
                                            <Button variant='secondary'><Upload size={16} className='mr-2'/> Enviar Arquivo</Button>
                                         </div>
                                    </div>
                               </div>
                            </CardContent>
                        </Card>
                    </TabsContent>
                    
                    <TabsContent value="comunicados">
                         <Card>
                            <CardHeader>
                                <CardTitle>Caixa de Entrada de Comunicados</CardTitle>
                                <CardDescription>Avisos importantes do RH e da gestão.</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <div className='border rounded-md'>
                                {notices.map(notice => (
                                    <div key={notice.title} className='flex items-center justify-between p-4 border-b'>
                                        <div>
                                            <p className='font-medium'>{notice.title}</p>
                                            <p className='text-xs text-muted-foreground'>Recebido em: {notice.date}</p>
                                        </div>
                                        <div className='flex items-center gap-2'>
                                            {notice.read ? (
                                                <Badge variant='secondary' className='flex items-center gap-1'><Check size={14}/> Lido</Badge>
                                            ) : (
                                                 <Badge variant='default'>Novo</Badge>
                                            )}
                                            <Button variant='outline' size='sm'>Visualizar</Button>
                                        </div>
                                    </div>
                                ))}
                                </div>
                            </CardContent>
                        </Card>
                    </TabsContent>
                </Tabs>
            </div>
        </div>
    );
}
