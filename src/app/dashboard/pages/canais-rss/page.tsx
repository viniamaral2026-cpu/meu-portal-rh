
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

export default function CanaisRssPage() {
    return (
        <div className="p-4">
            <Card>
                <CardHeader>
                    <CardTitle>Gerenciador de Canais RSS</CardTitle>
                    <CardDescription>Adicione, edite e remova os canais e feeds RSS que você deseja acompanhar.</CardDescription>
                </CardHeader>
                <CardContent>
                    <p className="text-muted-foreground">Gerencie a lista de fontes de notícias do seu leitor RSS.</p>
                </CardContent>
            </Card>
        </div>
    );
}
