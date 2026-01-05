import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

export default function CuboPage() {
    return (
        <Card>
            <CardHeader>
                <CardTitle>Cubo</CardTitle>
                <CardDescription>Ferramenta de análise de dados multidimensional (OLAP).</CardDescription>
            </CardHeader>
            <CardContent>
                <p className="text-muted-foreground">Conteúdo da página do Cubo em breve.</p>
            </CardContent>
        </Card>
    );
}
