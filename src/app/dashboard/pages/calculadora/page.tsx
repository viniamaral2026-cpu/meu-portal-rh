
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

export default function CalculadoraPage() {
    return (
        <div className="p-4">
            <Card>
                <CardHeader>
                    <CardTitle>Calculadora</CardTitle>
                    <CardDescription>Calculadora para operações rápidas e simulações de folha.</CardDescription>
                </CardHeader>
                <CardContent>
                    <p className="text-muted-foreground">Uma calculadora simples para auxiliar nas tarefas do dia a dia.</p>
                </CardContent>
            </Card>
        </div>
    );
}
