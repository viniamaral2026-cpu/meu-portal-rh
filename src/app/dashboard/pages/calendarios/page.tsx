
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

export default function CalendariosPage() {
    return (
        <div className="p-4">
            <Card>
                <CardHeader>
                    <CardTitle>Calendários</CardTitle>
                    <CardDescription>Visualize e gerencie calendários de feriados, eventos da empresa e jornadas de trabalho.</CardDescription>
                </CardHeader>
                <CardContent>
                    <p className="text-muted-foreground">Criação de calendários personalizados para diferentes equipes e turnos.</p>
                </CardContent>
            </Card>
        </div>
    );
}
