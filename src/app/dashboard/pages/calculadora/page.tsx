import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

export default function CalculadoraPage() {
    return (
        <Card>
            <CardHeader>
                <CardTitle>Calculadora</CardTitle>
                <CardDescription>Calculadora para operações rápidas.</CardDescription>
            </CardHeader>
            <CardContent>
                <p className="text-muted-foreground">Conteúdo da página da Calculadora em breve.</p>
            </CardContent>
        </Card>
    );
}
