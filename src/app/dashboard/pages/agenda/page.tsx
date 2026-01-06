'use client';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

export default function AgendaPage() {
    return (
        <div className="p-4">
            <Card>
                <CardHeader>
                    <CardTitle>Agenda</CardTitle>
                    <CardDescription>Sua agenda de contatos e compromissos importantes.</CardDescription>
                </CardHeader>
                <CardContent>
                    <p className="text-muted-foreground">Gerencie seus contatos e datas importantes.</p>
                </CardContent>
            </Card>
        </div>
    );
}
