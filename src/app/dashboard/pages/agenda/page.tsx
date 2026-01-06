'use client'
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Calendar } from "@/components/ui/calendar";
import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { addDays, format } from "date-fns";

const events = {
  [format(new Date(), 'yyyy-MM-dd')]: [
    { time: '10:00', title: 'Reunião de produção', type: 'reuniao' },
    { time: '14:00', title: 'Entrega Pedido #1024', type: 'entrega' }
  ],
  [format(addDays(new Date(), 2), 'yyyy-MM-dd')]: [
    { time: '09:00', title: 'Manutenção Máquina de Costura 5', type: 'manutencao' }
  ],
  [format(addDays(new Date(), 5), 'yyyy-MM-dd')]: [
    { time: '11:00', title: 'Treinamento de Segurança', type: 'reuniao' },
    { time: '15:00', title: 'Auditoria Interna', type: 'auditoria' }
  ]
};

const getEventTypeColor = (type: string) => {
  switch (type) {
    case 'reuniao': return 'bg-blue-500';
    case 'entrega': return 'bg-green-500';
    case 'manutencao': return 'bg-yellow-500';
    case 'auditoria': return 'bg-purple-500';
    default: return 'bg-gray-500';
  }
}

export default function AgendaPage() {
  const [date, setDate] = useState<Date | undefined>(new Date());
  const selectedDateStr = date ? format(date, 'yyyy-MM-dd') : '';
  const selectedEvents = events[selectedDateStr as keyof typeof events] || [];

  return (
    <div className="grid md:grid-cols-3 gap-6 h-full">
      <div className="md:col-span-1">
        <Card className="h-full">
          <CardContent className="p-2">
            <Calendar
              mode="single"
              selected={date}
              onSelect={setDate}
              className="rounded-md"
              components={{
                DayContent: (props) => {
                  const dateStr = format(props.date, 'yyyy-MM-dd');
                  const dayHasEvents = events[dateStr as keyof typeof events];
                  return (
                    <div className="relative h-full w-full flex items-center justify-center">
                      <span>{props.date.getDate()}</span>
                      {dayHasEvents && <span className="absolute bottom-1 right-1 h-2 w-2 rounded-full bg-primary"></span>}
                    </div>
                  );
                }
              }}
            />
          </CardContent>
        </Card>
      </div>
      <div className="md:col-span-2">
        <Card className="h-full">
          <CardHeader>
            <CardTitle>
              Agenda para {date ? format(date, 'dd/MM/yyyy') : 'Nenhum dia selecionado'}
            </CardTitle>
          </CardHeader>
          <CardContent>
            {selectedEvents.length > 0 ? (
              <ul className="space-y-4">
                {selectedEvents.map(event => (
                  <li key={event.time} className="flex items-center gap-4 p-3 bg-muted/50 rounded-lg">
                    <div className="font-bold text-lg">{event.time}</div>
                    <div className="flex-1">
                      <p className="font-semibold">{event.title}</p>
                      <Badge className={`${getEventTypeColor(event.type)} text-white`}>{event.type}</Badge>
                    </div>
                  </li>
                ))}
              </ul>
            ) : (
              <p className="text-muted-foreground text-center py-10">Nenhum evento para este dia.</p>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
