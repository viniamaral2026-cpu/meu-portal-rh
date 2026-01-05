import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

export default function CustomizacaoPage() {
    return (
        <Card>
            <CardHeader>
                <CardTitle>Customização</CardTitle>
                <CardDescription>Customize a interface e funcionalidades do sistema.</CardDescription>
            </CardHeader>
            <CardContent>
                <p className="text-muted-foreground">Conteúdo da página de Customização em breve.</p>
            </CardContent>
        </Card>
    );
}
