import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

export default function LeitorRssPage() {
    return (
        <Card>
            <CardHeader>
                <CardTitle>Leitor RSS</CardTitle>
                <CardDescription>Acompanhe seus feeds RSS.</CardDescription>
            </CardHeader>
            <CardContent>
                <p className="text-muted-foreground">Conteúdo da página do Leitor RSS em breve.</p>
            </CardContent>
        </Card>
    );
}
