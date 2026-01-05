
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

export default function GraficoPage() {
    return (
        <div className="p-4">
            <Card>
                <CardHeader>
                    <CardTitle>Gerador de Gráficos</CardTitle>
                    <CardDescription>Crie e visualize gráficos para análise de indicadores de RH.</CardDescription>
                </CardHeader>
                <CardContent>
                    <p className="text-muted-foreground">Ferramenta para criação e visualização de gráficos de turnover, absenteísmo, etc.</p>
                </CardContent>
            </Card>
        </div>
    );
}
