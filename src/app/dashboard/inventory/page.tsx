import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

export default function InventoryPage() {
    return (
        <Card>
            <CardHeader>
                <CardTitle>Gestão de Estoque</CardTitle>
                <CardDescription>Monitore o estoque de produtos e materiais.</CardDescription>
            </CardHeader>
            <CardContent>
                <p className="text-muted-foreground">Conteúdo da página de gestão de estoque em breve.</p>
            </CardContent>
        </Card>
    );
}
