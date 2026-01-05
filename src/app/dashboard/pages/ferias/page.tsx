
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

export default function FeriasPage() {
    return (
        <div className="p-4">
            <Card>
                <CardHeader>
                    <CardTitle>Férias</CardTitle>
                    <CardDescription>Gerencie o controle de períodos aquisitivos, programação e cálculo de férias dos colaboradores.</CardDescription>
                </CardHeader>
                <CardContent>
                    <p className="text-muted-foreground">Interface para solicitação, aprovação e visualização do histórico de férias.</p>
                </CardContent>
            </Card>
        </div>
    );
}
