'use client';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { PlayCircle, PauseCircle, AlertTriangle, ListCollapse } from 'lucide-react';
import { Separator } from '@/components/ui/separator';
import { useDashboard } from '../dashboard/layout';

export default function ControleJornadaPage() {
    const { jornada } = useDashboard();
    const { isRunning, elapsedTime, log, handleStart, handleStop } = jornada;

    return (
        <div className="p-4 flex justify-center items-center h-full">
            <Card className="w-full max-w-2xl text-center">
                <CardHeader>
                    <CardTitle className="text-3xl">Controle de Jornada de Trabalho</CardTitle>
                    <CardDescription>Use os botões abaixo para registrar o início e o fim do seu expediente.</CardDescription>
                </CardHeader>
                <CardContent className="space-y-8">
                    <div className="bg-muted p-8 rounded-lg">
                        <h3 className="text-lg font-semibold text-muted-foreground">TEMPO ATIVO</h3>
                        <div className="font-mono text-6xl font-bold tracking-tighter my-4">
                            <span>{String(elapsedTime.days).padStart(2, '0')}d </span>
                            <span>{String(elapsedTime.hours).padStart(2, '0')}h </span>
                            <span>{String(elapsedTime.minutes).padStart(2, '0')}m </span>
                            <span>{String(elapsedTime.seconds).padStart(2, '0')}s</span>
                        </div>
                    </div>
                    <div className="flex justify-center gap-4">
                        {!isRunning ? (
                            <Button size="lg" className="w-64 h-16 text-xl bg-green-600 hover:bg-green-700" onClick={handleStart}>
                                <PlayCircle className="mr-3 h-8 w-8" /> Iniciar Jornada
                            </Button>
                        ) : (
                            <Button size="lg" variant="destructive" className="w-64 h-16 text-xl" onClick={handleStop}>
                                <PauseCircle className="mr-3 h-8 w-8" /> Parar Jornada
                            </Button>
                        )}
                    </div>
                    <div className="p-4 border border-yellow-300 bg-yellow-50 dark:bg-yellow-900/20 rounded-lg flex items-center gap-3 text-yellow-700 dark:text-yellow-300">
                        <AlertTriangle className="h-6 w-6 flex-shrink-0" />
                        <p className="text-sm text-left">
                            É imprescindível que você registre o início e o fim de sua jornada para que o sistema possa realizar o auto-salvamento e sincronização de suas atividades corretamente.
                        </p>
                    </div>

                    <Separator />
                    
                    <div>
                        <h3 className="text-lg font-semibold flex items-center justify-center gap-2 mb-4"><ListCollapse /> Histórico Recente</h3>
                         <div className="text-sm text-muted-foreground max-h-40 overflow-y-auto space-y-2 text-left p-4 bg-muted/50 rounded-md">
                            {log.length > 0 ? log.map((entry, index) => (
                                <p key={index}>
                                    <span className={entry.action === 'start' ? 'text-green-600 font-semibold' : 'text-red-600 font-semibold'}>
                                        {entry.action === 'start' ? '[INÍCIO] ' : '[FIM]    '}
                                    </span>
                                    - {entry.timestamp.toLocaleString('pt-BR')}
                                </p>
                            )) : <p className='text-center'>Nenhum registro hoje.</p>}
                         </div>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
}
