
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

export default function CategoriasPage() {
    return (
        <div className="p-4">
            <Card>
                <CardHeader>
                    <CardTitle>Categorias</CardTitle>
                    <CardDescription>Gerencie as categorias para gráficos e relatórios.</CardDescription>
                </CardHeader>
                <CardContent>
                    <p className="text-muted-foreground">Organize e agrupe informações para facilitar a criação de análises.</p>
                </CardContent>
            </Card>
        </div>
    );
}
