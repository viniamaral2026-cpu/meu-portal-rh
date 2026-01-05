
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

export default function WordPage() {
    return (
        <div className="p-4">
            <Card>
                <CardHeader>
                    <CardTitle>Microsoft Word</CardTitle>
                    <CardDescription>Visualização e edição de documentos do Word.</CardDescription>
                </CardHeader>
                <CardContent>
                    <p className="text-muted-foreground">Conteúdo da página do Word em breve.</p>
                </CardContent>
            </Card>
        </div>
    );
}
