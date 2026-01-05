
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

export default function MeusCanaisPage() {
    return (
        <div className="p-4">
            <Card>
                <CardHeader>
                    <CardTitle>Meus Canais</CardTitle>
                    <CardDescription>Visualize e gerencie seus canais de comunicação e integração.</CardDescription>
                </CardHeader>
                <CardContent>
                    <p className="text-muted-foreground">Canais de comunicação para o conector RM.</p>
                </CardContent>
            </Card>
        </div>
    );
}
