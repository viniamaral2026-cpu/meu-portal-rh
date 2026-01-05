
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

export default function LeitorRssPage() {
    return (
        <div className="p-4">
            <Card>
                <CardHeader>
                    <CardTitle>Leitor de RSS</CardTitle>
                    <CardDescription>Acompanhe notícias e atualizações de legislação trabalhista e outros temas.</CardDescription>
                </CardHeader>
                <CardContent>
                    <p className="text-muted-foreground">Agregador de notícias para manter você informado diretamente pelo sistema.</p>
                </CardContent>
            </Card>
        </div>
    );
}
