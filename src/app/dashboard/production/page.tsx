import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

export default function ProductionPage() {
    return (
        <Card>
            <CardHeader>
                <CardTitle>Controle de Produção</CardTitle>
                <CardDescription>Monitore o status das linhas de produção.</CardDescription>
            </CardHeader>
            <CardContent>
                <p className="text-muted-foreground">Conteúdo da página de controle de produção em breve.</p>
            </CardContent>
        </Card>
    );
}
