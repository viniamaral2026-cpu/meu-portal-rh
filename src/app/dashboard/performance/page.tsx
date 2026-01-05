import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

export default function PerformancePage() {
    return (
        <Card>
            <CardHeader>
                <CardTitle>Avaliação de Desempenho</CardTitle>
                <CardDescription>Monitore o desempenho dos seus colaboradores.</CardDescription>
            </CardHeader>
            <CardContent>
                <p className="text-muted-foreground">Conteúdo da página de avaliação de desempenho em breve.</p>
            </CardContent>
        </Card>
    );
}
