import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

export default function AttendancePage() {
    return (
        <Card>
            <CardHeader>
                <CardTitle>Gestão de Ponto</CardTitle>
                <CardDescription>Acompanhe o registro de ponto dos colaboradores.</CardDescription>
            </CardHeader>
            <CardContent>
                <p className="text-muted-foreground">Conteúdo da página de gestão de ponto em breve.</p>
            </CardContent>
        </Card>
    );
}
