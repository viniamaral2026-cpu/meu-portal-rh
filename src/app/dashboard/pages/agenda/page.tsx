'use client';

import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight, PlusCircle, Factory, Wrench, Truck, Link } from 'lucide-react';
import { format, startOfMonth, endOfMonth, eachDayOfInterval, getDay, isSameDay, addMonths, subMonths } from 'date-fns';
import { ptBR } from 'date-fns/locale';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { useToast } from '@/hooks/use-toast';

type ProductionEvent = {
  id: number;
  date: Date;
  type: 'production' | 'maintenance' | 'delivery';
  title: string;
  details: {
    model?: string;
    quantity?: number;
    line?: string;
    status?: 'scheduled' | 'in_progress' | 'completed';
    responsible?: string;
    notes?: string;
  };
};

const initialEvents: ProductionEvent[] = [
  { id: 1, date: new Date(2024, 6, 8), type: 'production', title: 'Ordem #1025', details: { model: 'Tênis Runner Pro', quantity: 500, line: 'Linha A', status: 'in_progress' } },
  { id: 2, date: new Date(2024, 6, 10), type: 'production', title: 'Ordem #1026', details: { model: 'Bota Couro Clássica', quantity: 200, line: 'Linha B', status: 'scheduled' } },
  { id: 3, date: new Date(2024, 6, 10), type: 'delivery', title: 'Entrega Pedido #852', details: { responsible: 'Transportadora XYZ', notes: 'Carga com 30 caixas.' } },
  { id: 4, date: new Date(2024, 6, 15), type: 'maintenance', title: 'Manutenção Preventiva', details: { responsible: 'Equipe Técnica', notes: 'Máquina de costura 5 e 6.' } },
  { id: 5, date: new Date(2024, 6, 17), type: 'production', title: 'Ordem #1027', details: { model: 'Sandália Verão', quantity: 800, line: 'Linha A', status: 'scheduled' } },
  { id: 6, date: new Date(2024, 6, 22), type: 'production', title: 'Ordem #1028', details: { model: 'Sapato Social', quantity: 350, line: 'Linha C', status: 'scheduled' } },
  { id: 7, date: new Date(2024, 6, 25), type: 'delivery', title: 'Entrega Pedido #859', details: { responsible: 'Transportadora ABC', notes: 'Carga urgente.' } },
];

const EventIcon = ({ type }: { type: ProductionEvent['type'] }) => {
    switch (type) {
        case 'production': return <Factory className="h-4 w-4 text-blue-500" />;
        case 'maintenance': return <Wrench className="h-4 w-4 text-orange-500" />;
        case 'delivery': return <Truck className="h-4 w-4 text-green-500" />;
        default: return null;
    }
}

const statusVariant: { [key: string]: 'default' | 'secondary' | 'destructive' | 'outline' } = {
  scheduled: 'secondary',
  in_progress: 'outline',
  completed: 'default'
};


export default function AgendaPage() {
    const [currentDate, setCurrentDate] = useState(new Date(2024, 6, 1)); // Start with July 2024
    const [events, setEvents] = useState(initialEvents);
    const [selectedDate, setSelectedDate] = useState<Date | null>(new Date(2024, 6, 10));
    const [isGoogleCalendarConnected, setIsGoogleCalendarConnected] = useState(false);
    const { toast } = useToast();

    const firstDayOfMonth = startOfMonth(currentDate);
    const lastDayOfMonth = endOfMonth(currentDate);
    const daysInMonth = eachDayOfInterval({ start: firstDayOfMonth, end: lastDayOfMonth });

    // Create blank days for grid alignment
    const startingDayOfWeek = getDay(firstDayOfMonth);
    const blanks = Array.from({ length: startingDayOfWeek });

    const handlePrevMonth = () => setCurrentDate(subMonths(currentDate, 1));
    const handleNextMonth = () => setCurrentDate(addMonths(currentDate, 1));

    const selectedDayEvents = selectedDate ? events.filter(e => isSameDay(e.date, selectedDate)) : [];

    const handleConnectGoogleCalendar = () => {
        // Placeholder for real Google OAuth flow
        setIsGoogleCalendarConnected(true);
        toast({
            title: 'Google Agenda Conectado!',
            description: 'A agenda agora está sincronizada. (Esta é uma simulação)',
        });
        // In a real scenario, you would fetch events from Google Calendar API here
        // and merge them with the existing events.
    };

    return (
        <div className="p-4 h-full flex flex-col">
            <Card className="flex-grow flex flex-col">
                <CardHeader className="flex-row items-center justify-between">
                    <div>
                        <CardTitle>Agenda de Produção</CardTitle>
                        <CardDescription>Planejamento e cronograma das ordens de produção e eventos da fábrica.</CardDescription>
                    </div>
                    <div className="flex items-center gap-2">
                         <Button variant={isGoogleCalendarConnected ? "secondary" : "default"} onClick={handleConnectGoogleCalendar} disabled={isGoogleCalendarConnected}>
                            <Link className="mr-2 h-4 w-4" /> 
                            {isGoogleCalendarConnected ? 'Conectado com Google' : 'Conectar com Google Agenda'}
                        </Button>
                        <Button><PlusCircle className="mr-2 h-4 w-4" /> Agendar Nova Ordem</Button>
                    </div>
                </CardHeader>
                <CardContent className="flex-grow flex gap-4">
                    {/* Calendar View */}
                    <div className="w-2/3 border rounded-lg p-4">
                        <div className="flex items-center justify-between mb-4">
                            <Button variant="ghost" size="icon" onClick={handlePrevMonth}><ChevronLeft /></Button>
                            <h2 className="text-lg font-semibold capitalize">{format(currentDate, 'MMMM yyyy', { locale: ptBR })}</h2>
                            <Button variant="ghost" size="icon" onClick={handleNextMonth}><ChevronRight /></Button>
                        </div>
                        <div className="grid grid-cols-7 text-center text-xs font-medium text-muted-foreground">
                            {['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb'].map(day => <div key={day}>{day}</div>)}
                        </div>
                        <div className="grid grid-cols-7 h-[calc(100%-60px)]">
                            {blanks.map((_, i) => <div key={`blank-${i}`} className="border-t border-l" />)}
                            {daysInMonth.map((day) => {
                                const dayEvents = events.filter(e => isSameDay(e.date, day));
                                return (
                                    <div 
                                        key={day.toString()} 
                                        className={`border-t border-l p-1.5 min-h-[80px] cursor-pointer hover:bg-muted/50 ${isSameDay(day, selectedDate || new Date()) ? 'bg-muted' : ''}`}
                                        onClick={() => setSelectedDate(day)}
                                    >
                                        <span className={`text-xs ${isSameDay(day, new Date()) ? 'font-bold text-primary' : ''}`}>{format(day, 'd')}</span>
                                        <div className="mt-1 space-y-1">
                                            {dayEvents.map(event => (
                                                 <div key={event.id} className="flex items-center gap-1.5 p-1 rounded-sm text-xs bg-background">
                                                    <EventIcon type={event.type} />
                                                    <span className="truncate">{event.title}</span>
                                                 </div>
                                            ))}
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                    
                    {/* Details Panel */}
                    <div className="w-1/3 border rounded-lg p-4 flex flex-col">
                        <h3 className="text-lg font-semibold mb-2">
                           {selectedDate ? `Eventos de ${format(selectedDate, 'dd/MM/yyyy')}`: 'Selecione um dia'}
                        </h3>
                        <Separator className="mb-4" />
                        {selectedDayEvents.length > 0 ? (
                             <div className="space-y-4 overflow-y-auto">
                                {selectedDayEvents.map(event => (
                                    <div key={event.id} className="p-3 rounded-lg bg-muted/50 text-sm">
                                        <div className="flex items-center gap-2 font-semibold">
                                            <EventIcon type={event.type} />
                                            <p>{event.title}</p>
                                        </div>
                                        <div className="pl-6 mt-2 space-y-1 text-xs text-muted-foreground">
                                           {event.details.model && <p><strong>Modelo:</strong> {event.details.model}</p>}
                                           {event.details.quantity && <p><strong>Quantidade:</strong> {event.details.quantity} pares</p>}
                                           {event.details.line && <p><strong>Linha:</strong> {event.details.line}</p>}
                                           {event.details.responsible && <p><strong>Responsável:</strong> {event.details.responsible}</p>}
                                           {event.details.notes && <p><strong>Obs:</strong> {event.details.notes}</p>}
                                           {event.details.status && (
                                                <div className="flex items-center gap-2">
                                                    <strong>Status:</strong> 
                                                    <Badge variant={statusVariant[event.details.status] || 'secondary'} className="capitalize text-xs">
                                                        {event.details.status.replace('_', ' ')}
                                                    </Badge>
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                ))}
                             </div>
                        ) : (
                            <div className="flex-grow flex items-center justify-center">
                                <p className="text-sm text-muted-foreground">Nenhum evento para esta data.</p>
                            </div>
                        )}
                    </div>
                </CardContent>
            </Card>
        </div>
    );
}
