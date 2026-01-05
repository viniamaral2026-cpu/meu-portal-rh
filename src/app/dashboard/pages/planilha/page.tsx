import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

export default function PlanilhaPage() {
    return (
        <Card>
            <CardHeader>
                <CardTitle>Planilha</CardTitle>
                <CardDescription>Editor de planilhas integrado.</CardDescription>
            </CardHeader>
            <CardContent>
                <p className="text-muted-foreground">Conteúdo da página de Planilha em breve.</p>
            </CardContent>
        </Card>
    );
}
