import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

export default function EditarColaboradorPage({ tab }: { tab: { id: string, title: string } }) {
    // In a real app, you would fetch employee data based on the ID from tab.id
    const employeeId = tab.id.split('-').pop();
    
    return (
        <Card>
            <CardHeader>
                <CardTitle>Editar Colaborador</CardTitle>
                <CardDescription>Alterando os dados de: {tab.title.replace('Edt. ', '')} (ID: {employeeId})</CardDescription>
            </CardHeader>
            <CardContent>
                <p className="text-muted-foreground">Formulário de edição do colaborador em breve.</p>
                {/* TODO: Add form fields to edit employee data */}
            </CardContent>
        </Card>
    );
}
