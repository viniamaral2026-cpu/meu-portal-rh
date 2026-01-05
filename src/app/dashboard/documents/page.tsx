import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

export default function DocumentsPage() {
    return (
        <Card>
            <CardHeader>
                <CardTitle>Gestão de Documentos</CardTitle>
                <CardDescription>Gerencie documentos, assinaturas e atestados dos colaboradores.</CardDescription>
            </CardHeader>
            <CardContent>
                <p className="text-muted-foreground">Conteúdo da página de gestão de documentos em breve.</p>
            </CardContent>
        </Card>
    );
}
