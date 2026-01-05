
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

export default function RescisaoPage() {
    return (
        <div className="p-4">
            <Card>
                <CardHeader>
                    <CardTitle>Rescisão</CardTitle>
                    <CardDescription>Execute e gerencie os processos de rescisão de contrato de trabalho.</CardDescription>
                </CardHeader>
                <CardContent>
                    <p className="text-muted-foreground">Cálculo de verbas rescisórias, geração de termos e documentação necessária.</p>
                </CardContent>
            </Card>
        </div>
    );
}
