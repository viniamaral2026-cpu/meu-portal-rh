import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

export default function FeriasPage() {
    return (
        <Card>
            <CardHeader>
                <CardTitle>Férias</CardTitle>
                <CardDescription>Gerencie as férias dos colaboradores.</CardDescription>
            </CardHeader>
            <CardContent>
                <p className="text-muted-foreground">Conteúdo da página de Férias em breve.</p>
            </CardContent>
        </Card>
    );
}
