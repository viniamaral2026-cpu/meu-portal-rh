
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

export default function PlanilhaPage() {
    return (
        <div className="p-4">
            <Card>
                <CardHeader>
                    <CardTitle>Planilha</CardTitle>
                    <CardDescription>Editor de planilhas integrado para análises e cálculos rápidos.</CardDescription>
                </CardHeader>
                <CardContent>
                    <p className="text-muted-foreground">Importe, edite e exporte dados em formato de planilha diretamente no sistema.</p>
                </CardContent>
            </Card>
        </div>
    );
}
