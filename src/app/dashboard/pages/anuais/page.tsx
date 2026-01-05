import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

export default function AnuaisPage() {
    return (
        <Card>
            <CardHeader>
                <CardTitle>Anuais</CardTitle>
                <CardDescription>Gerencie as obrigações anuais como 13º salário e DIRF.</CardDescription>
            </CardHeader>
            <CardContent>
                <p className="text-muted-foreground">Conteúdo da página de Anuais em breve.</p>
            </CardContent>
        </Card>
    );
}
