
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

export default function FormulaPage() {
    return (
        <div className="p-4">
            <Card>
                <CardHeader>
                    <CardTitle>Editor de Fórmulas</CardTitle>
                    <CardDescription>Crie e gerencie fórmulas de cálculo personalizadas para eventos da folha.</CardDescription>
                </CardHeader>
                <CardContent>
                    <p className="text-muted-foreground">Editor avançado para criar regras de cálculo específicas para sua empresa.</p>
                </CardContent>
            </Card>
        </div>
    );
}
