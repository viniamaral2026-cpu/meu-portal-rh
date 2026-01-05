import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

export default function ConfiguracoesPage() {
    return (
        <Card>
            <CardHeader>
                <CardTitle>Configurações</CardTitle>
                <CardDescription>Configure os parâmetros do sistema.</CardDescription>
            </CardHeader>
            <CardContent>
                <p className="text-muted-foreground">Conteúdo da página de Configurações em breve.</p>
            </CardContent>
        </Card>
    );
}
