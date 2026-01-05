import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

export default function FolhaMensalPage() {
    return (
        <Card>
            <CardHeader>
                <CardTitle>Folha Mensal</CardTitle>
                <CardDescription>Gerencie a folha de pagamento mensal dos colaboradores.</CardDescription>
            </CardHeader>
            <CardContent>
                <p className="text-muted-foreground">Conteúdo da página de Folha Mensal em breve.</p>
            </CardContent>
        </Card>
    );
}
