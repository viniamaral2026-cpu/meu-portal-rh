
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

export default function FontesGraficosPage() {
    return (
        <div className="p-4">
            <Card>
                <CardHeader>
                    <CardTitle>Fontes de Gráficos</CardTitle>
                    <CardDescription>Gerencie as fontes de dados para os gráficos do sistema.</CardDescription>
                </CardHeader>
                <CardContent>
                    <p className="text-muted-foreground">Configure as consultas e visões de dados que alimentarão os gráficos.</p>
                </CardContent>
            </Card>
        </div>
    );
}
