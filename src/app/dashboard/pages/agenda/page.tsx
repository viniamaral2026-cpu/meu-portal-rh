import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

export default function AgendaPage() {
    return (
        <Card>
            <CardHeader>
                <CardTitle>Agenda</CardTitle>
                <CardDescription>Sua agenda de contatos e compromissos.</CardDescription>
            </CardHeader>
            <CardContent>
                <p className="text-muted-foreground">Conteúdo da página da Agenda em breve.</p>
            </CardContent>
        </Card>
    );
}
