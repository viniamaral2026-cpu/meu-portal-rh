
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

export default function GeradorRelatoriosPage() {
    return (
        <div className="p-4">
            <Card>
                <CardHeader>
                    <CardTitle>Gerador de Relatórios</CardTitle>
                    <CardDescription>Crie seus próprios relatórios personalizados de forma fácil e intuitiva.</CardDescription>
                </CardHeader>
                <CardContent>
                    <p className="text-muted-foreground">Selecione os campos, filtros e o layout para gerar relatórios sob medida.</p>
                </CardContent>
            </Card>
        </div>
    );
}
