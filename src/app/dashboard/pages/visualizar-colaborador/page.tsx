import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { FilePenLine, Trash2 } from 'lucide-react';
import type { Employee } from '../../employees/page';

type VisualizarColaboradorPageProps = {
    tab: {
        id: string;
        title: string;
        data?: any;
    };
    employee?: Employee;
}

export default function VisualizarColaboradorPage({ tab, employee }: VisualizarColaboradorPageProps) {
    if (!employee) {
        return (
            <Card>
                <CardHeader>
                    <CardTitle>Erro</CardTitle>
                    <CardDescription>Colaborador não encontrado.</CardDescription>
                </CardHeader>
                <CardContent>
                    <p className="text-muted-foreground">Não foi possível carregar os dados do colaborador. Por favor, feche esta aba e tente novamente.</p>
                </CardContent>
            </Card>
        );
    }

    return (
        <div className="p-4 flex flex-col gap-4 h-full">
            <Card>
                <CardHeader>
                    <CardTitle>Visualizar Colaborador</CardTitle>
                    <CardDescription>Detalhes de: {employee.name}</CardDescription>
                </CardHeader>
                <CardContent>
                    <form className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        <div className="space-y-2">
                            <Label htmlFor="name">Nome Completo</Label>
                            <Input id="name" value={employee.name} readOnly />
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="cpf">CPF</Label>
                            <Input id="cpf" value={employee.cpf} readOnly />
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="matricula">Matrícula</Label>
                            <Input id="matricula" value={employee.matricula} readOnly />
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="code">Código</Label>
                            <Input id="code" value={employee.code} readOnly />
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="role">Cargo</Label>
                            <Input id="role" value={employee.role} readOnly />
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="sector">Setor</Label>
                            <Input id="sector" value={employee.sector} readOnly />
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="admissionDate">Data de Admissão</Label>
                            <Input id="admissionDate" value={new Date(employee.admissionDate).toLocaleDateString('pt-BR')} readOnly />
                        </div>
                         <div className="space-y-2">
                            <Label htmlFor="status">Status</Label>
                            <Input id="status" value={employee.status} readOnly />
                        </div>
                    </form>
                </CardContent>
            </Card>
            <div className="flex-grow"></div>
            <div className="flex justify-end gap-2 p-4 border-t bg-card">
                 <Button variant="outline"><FilePenLine className="mr-2 h-4 w-4" /> Alterar</Button>
                 <Button variant="destructive"><Trash2 className="mr-2 h-4 w-4" /> Excluir Colaborador</Button>
            </div>
        </div>
    );
}
