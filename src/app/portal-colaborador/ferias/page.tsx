'use client';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { CalendarPlus, CalendarCheck2, CalendarX2 } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';

const solicitacoes = [
    { data: '10/01/2024 - 29/01/2024', dias: 20, status: 'Concluído' },
    { data: '15/07/2023 - 24/07/2023', dias: 10, status: 'Concluído' },
];

export default function FeriasPage() {
    return (
        <div className="space-y-6">
            <div className="flex items-center justify-between">
                <h1 className="text-3xl font-bold">Gestão de Férias</h1>
                <Button size="lg"><CalendarPlus className="mr-2 h-5 w-5" /> Nova Solicitação</Button>
            </div>

             <Card>
                <CardHeader>
                    <CardTitle>Meu Saldo de Férias</CardTitle>
                </CardHeader>
                <CardContent className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className='p-6 bg-blue-50 border border-blue-200 rounded-lg text-center'>
                        <h3 className='text-sm font-semibold text-blue-800'>DIAS DISPONÍVEIS</h3>
                        <p className='text-5xl font-bold text-blue-900 mt-2'>22</p>
                    </div>
                     <div className='p-6 bg-yellow-50 border border-yellow-200 rounded-lg text-center'>
                        <h3 className='text-sm font-semibold text-yellow-800'>PERÍODO AQUISITIVO</h3>
                        <p className='text-lg font-bold text-yellow-900 mt-2'>01/03/2023 a 28/02/2024</p>
                        <p className='text-xs text-muted-foreground'>Vencimento: 28/02/2025</p>
                    </div>
                     <div className='p-6 bg-gray-50 border border-gray-200 rounded-lg text-center'>
                        <h3 className='text-sm font-semibold text-gray-800'>DIAS DE ABONO VENDIDOS</h3>
                        <p className='text-5xl font-bold text-gray-900 mt-2'>0</p>
                    </div>
                </CardContent>
            </Card>

            <Card>
                <CardHeader>
                    <CardTitle>Minhas Solicitações</CardTitle>
                    <CardDescription>Acompanhe o status e o histórico de suas férias.</CardDescription>
                </CardHeader>
                <CardContent>
                     <div className='space-y-4'>
                        <div className="p-4 border rounded-lg flex items-center justify-between bg-muted/50">
                            <div className='flex items-center gap-3'>
                                <CalendarPlus className='h-5 w-5 text-primary'/>
                                <div>
                                    <p className='font-semibold'>20/08/2024 a 08/09/2024 (20 dias)</p>
                                    <p className='text-xs text-muted-foreground'>Solicitado em 15/07/2024</p>
                                </div>
                            </div>
                            <Badge variant="secondary">Pendente de Aprovação</Badge>
                        </div>
                        <Separator />
                        <h3 className='font-semibold text-muted-foreground pt-2'>Histórico</h3>
                        {solicitacoes.map(s => (
                             <div key={s.data} className="p-4 border rounded-lg flex items-center justify-between">
                                <div className='flex items-center gap-3'>
                                    <CalendarCheck2 className='h-5 w-5 text-green-600'/>
                                    <div>
                                        <p className='font-semibold'>{s.data} ({s.dias} dias)</p>
                                    </div>
                                </div>
                                <Badge variant="default">{s.status}</Badge>
                            </div>
                        ))}
                    </div>
                </CardContent>
            </Card>
        </div>
    );
}
