import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

export default function FormulaPage() {
    return (
        <Card>
            <CardHeader>
                <CardTitle>Fórmula</CardTitle>
                <CardDescription>Editor de fórmulas e cálculos personalizados.</CardDescription>
            </CardHeader>
            <CardContent>
                <p className="text-muted-foreground">Conteúdo da página de Fórmula em breve.</p>
            </CardContent>
        </Card>
    );
}
