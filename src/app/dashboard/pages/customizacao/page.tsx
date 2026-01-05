
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

export default function CustomizacaoPage() {
    return (
        <div className="p-4">
            <Card>
                <CardHeader>
                    <CardTitle>Customização</CardTitle>
                    <CardDescription>Customize a interface, relatórios e funcionalidades do sistema.</CardDescription>
                </CardHeader>
                <CardContent>
                    <p className="text-muted-foreground">Ferramentas para adaptar o sistema às necessidades específicas da sua empresa.</p>
                </CardContent>
            </Card>
        </div>
    );
}
