import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

export default function GraficoPage() {
    return (
        <Card>
            <CardHeader>
                <CardTitle>Gráfico</CardTitle>
                <CardDescription>Ferramenta para criação e visualização de gráficos.</CardDescription>
            </CardHeader>
            <CardContent>
                <p className="text-muted-foreground">Conteúdo da página de Gráfico em breve.</p>
            </CardContent>
        </Card>
    );
}
