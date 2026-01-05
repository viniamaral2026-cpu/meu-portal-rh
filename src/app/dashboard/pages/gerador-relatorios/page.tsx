import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

export default function GeradorRelatoriosPage() {
    return (
        <Card>
            <CardHeader>
                <CardTitle>Gerador de Relatórios</CardTitle>
                <CardDescription>Crie relatórios personalizados.</CardDescription>
            </CardHeader>
            <CardContent>
                <p className="text-muted-foreground">Conteúdo do Gerador de Relatórios em breve.</p>
            </CardContent>
        </Card>
    );
}
