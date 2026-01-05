import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

export default function MeusCanaisPage() {
    return (
        <Card>
            <CardHeader>
                <CardTitle>Meus Canais</CardTitle>
                <CardDescription>Visualize e gerencie seus canais de comunicação.</CardDescription>
            </CardHeader>
            <CardContent>
                <p className="text-muted-foreground">Conteúdo da página Meus Canais em breve.</p>
            </CardContent>
        </Card>
    );
}
