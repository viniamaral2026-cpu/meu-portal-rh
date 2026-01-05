import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

export default function RelatoriosPage() {
    return (
        <Card>
            <CardHeader>
                <CardTitle>Relatórios</CardTitle>
                <CardDescription>Acesse a central de relatórios do sistema.</CardDescription>
            </CardHeader>
            <CardContent>
                <p className="text-muted-foreground">Conteúdo da página de Relatórios em breve.</p>
            </CardContent>
        </Card>
    );
}
