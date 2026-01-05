'use client';

import { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { PlayCircle, PauseCircle, AlertTriangle, ListCollapse } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { Separator } from '@/components/ui/separator';

type LogEntry = {
    timestamp: Date;
    action: 'start' | 'stop';
};

export default function ControleJornadaPage() {
    const [isRunning, setIsRunning] = useState(false);
    const [startTime, setStartTime] = useState<Date | null>(null);
    const [elapsedTime, setElapsedTime] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });
    const [log, setLog] = useState<LogEntry[]>([]);
    const { toast } = useToast();

    useEffect(() => {
        let interval: NodeJS.Timeout | null = null;
        if (isRunning && startTime) {
            interval = setInterval(() => {
                const now = new Date();
                const diff = now.getTime() - startTime.getTime();

                const days = Math.floor(diff / (1000 * 60 * 60 * 24));
                const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
                const minutes = Math.floor((diff / 1000 / 60) % 60);
                const seconds = Math.floor((diff / 1000) % 60);

                setElapsedTime({ days, hours, minutes, seconds });
            }, 1000);
        } else {
            if (interval) clearInterval(interval);
        }
        return () => {
            if (interval) clearInterval(interval);
        };
    }, [isRunning, startTime]);

    const handleStart = () => {
        const now = new Date();
        setIsRunning(true);
        setStartTime(now);
        setLog(prev => [{ timestamp: now, action: 'start' }, ...prev]);
        toast({
            title: "Jornada Iniciada!",
            description: `Sua jornada de trabalho foi registrada às ${now.toLocaleTimeString()}.`,
        });
    };

    const handleStop = () => {
        const now = new Date();
        setIsRunning(false);
        setStartTime(null);
        setElapsedTime({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        setLog(prev => [{ timestamp: now, action: 'stop' }, ...prev]);
        toast({
            title: "Jornada Finalizada",
            description: "Bom descanso! Sua jornada foi encerrada.",
            variant: "destructive"
        });
    };

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
