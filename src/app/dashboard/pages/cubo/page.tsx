
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

export default function CuboPage() {
    return (
        <div className="p-4">
            <Card>
                <CardHeader>
                    <CardTitle>Cubo (OLAP)</CardTitle>
                    <CardDescription>Ferramenta de análise de dados multidimensional para criar visões dinâmicas.</CardDescription>
                </CardHeader>
                <CardContent>
                    <p className="text-muted-foreground">Explore os dados de RH de forma interativa, cruzando informações de diferentes fontes.</p>
                </CardContent>
            </Card>
        </div>
    );
}
