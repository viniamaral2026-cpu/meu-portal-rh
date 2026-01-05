import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

export default function VisualizarColaboradorPage() {
    return (
        <Card>
            <CardHeader>
                <CardTitle>Visualizar Colaborador</CardTitle>
                <CardDescription>Detalhes do colaborador selecionado.</CardDescription>
            </CardHeader>
            <CardContent>
                <p className="text-muted-foreground">Conteúdo da página de visualização do colaborador em breve.</p>
            </CardContent>
        </Card>
    );
}
