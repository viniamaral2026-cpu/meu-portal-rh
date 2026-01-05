'use client';
import { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Clock, PlayCircle, PauseCircle, Flag, List } from 'lucide-react';
import { ScrollArea } from '@/components/ui/scroll-area';

export default function ControleJornadaPage() {
    const [isActive, setIsActive] = useState(false);
    const [time, setTime] = useState(0);
    const [logs, setLogs] = useState<string[]>([]);

    useEffect(() => {
        let interval: NodeJS.Timeout | null = null;
        if (isActive) {
            interval = setInterval(() => {
                setTime(prevTime => prevTime + 1);
            }, 1000);
        } else if (!isActive && time !== 0) {
            clearInterval(interval as NodeJS.Timeout);
        }
        return () => clearInterval(interval as NodeJS.Timeout);
    }, [isActive, time]);
    
    const formatTime = (timeInSeconds: number) => {
        const days = Math.floor(timeInSeconds / (3600 * 24));
        const hours = Math.floor((timeInSeconds % (3600*24)) / 3600);
        const minutes = Math.floor((timeInSeconds % 3600) / 60);
        const seconds = timeInSeconds % 60;

        return `${String(days).padStart(2, '0')}d ${String(hours).padStart(2, '0')}h ${String(minutes).padStart(2, '0')}m ${String(seconds).padStart(2, '0')}s`;
    };

    const handleToggle = () => {
        setIsActive(!isActive);
        const logMessage = isActive 
            ? `Jornada pausada em: ${new Date().toLocaleTimeString()}` 
            : `Jornada iniciada em: ${new Date().toLocaleTimeString()}`;
        setLogs(prev => [...prev, logMessage]);
    };

    const handleStop = () => {
        setIsActive(false);
        const logMessage = `Jornada finalizada em: ${new Date().toLocaleTimeString()}. Total: ${formatTime(time)}`;
        setLogs(prev => [...prev, logMessage]);
        setTime(0);
    }

  return (
    <div className="flex items-center justify-center h-full bg-muted/40 p-4">
      <Card className="w-full max-w-2xl text-center shadow-2xl">
        <CardHeader>
          <div className="mx-auto bg-primary/10 text-primary p-3 rounded-full w-fit">
            <Clock className="h-10 w-10" />
          </div>
          <CardTitle className="mt-4 text-2xl">Controle de Jornada</CardTitle>
          <CardDescription className="text-base">
            É imprescindível registrar o início e o fim da sua jornada para o correto funcionamento do auto-salvamento e sincronização.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
            <div className="p-8 bg-background rounded-lg border">
                <p className="text-sm text-muted-foreground">TEMPO ATIVO DE JORNADA</p>
                <div className="text-6xl font-bold tracking-tighter text-primary">
                    {formatTime(time)}
                </div>
            </div>
            <div className="flex items-center justify-center gap-4">
                 <Button size="lg" onClick={handleToggle} className={`w-48 ${isActive ? 'bg-yellow-500 hover:bg-yellow-600' : 'bg-green-600 hover:bg-green-700'}`}>
                    {isActive ? <PauseCircle className="mr-2 h-5 w-5" /> : <PlayCircle className="mr-2 h-5 w-5" />}
                    {isActive ? 'Pausar' : 'Iniciar'}
                </Button>
                <Button size="lg" variant="destructive" className="w-48" onClick={handleStop} disabled={!isActive && time === 0}>
                    <Flag className="mr-2 h-5 w-5" />
                    Parar e Registrar
                </Button>
            </div>
        </CardContent>
         <CardFooter className="flex flex-col">
            <h3 className="text-lg font-semibold mb-2 flex items-center gap-2"><List />Registros de Hoje</h3>
            <ScrollArea className="h-32 w-full rounded-md border p-4 text-left">
                {logs.length > 0 ? logs.map((log, index) => (
                    <p key={index} className="text-sm text-muted-foreground">{log}</p>
                )) : <p className="text-sm text-muted-foreground text-center">Nenhum registro ainda.</p>}
            </ScrollArea>
        </CardFooter>
      </Card>
    </div>
  );
}
