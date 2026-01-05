import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

export default function NoticesPage() {
    return (
        <Card>
            <CardHeader>
                <CardTitle>Gestão de Avisos</CardTitle>
                <CardDescription>Envie e acompanhe avisos para os colaboradores.</CardDescription>
            </CardHeader>
            <CardContent>
                <p className="text-muted-foreground">Conteúdo da página de gestão de avisos em breve.</p>
            </CardContent>
        </Card>
    );
}
