import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

export default function EncargosPage() {
    return (
        <Card>
            <CardHeader>
                <CardTitle>Encargos</CardTitle>
                <CardDescription>Gerencie os encargos trabalhistas e sociais.</CardDescription>
            </CardHeader>
            <CardContent>
                <p className="text-muted-foreground">Conteúdo da página de Encargos em breve.</p>
            </CardContent>
        </Card>
    );
}
