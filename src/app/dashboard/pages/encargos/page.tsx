
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

export default function EncargosPage() {
    return (
        <div className="p-4">
            <Card>
                <CardHeader>
                    <CardTitle>Encargos</CardTitle>
                    <CardDescription>Gerencie os encargos trabalhistas e previdenciários.</CardDescription>
                </CardHeader>
                <CardContent>
                    <p className="text-muted-foreground">Apuração e emissão de guias de INSS, FGTS e outras obrigações.</p>
                </CardContent>
            </Card>
        </div>
    );
}
