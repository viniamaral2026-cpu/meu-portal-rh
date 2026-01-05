'use client';

import { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { Save, X } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import type { Employee } from '../../employees/page';

type EditarColaboradorPageProps = {
    tab: {
        id: string;
        title: string;
        data?: any;
    };
    employee?: Employee;
}

export default function EditarColaboradorPage({ employee: initialEmployee }: EditarColaboradorPageProps) {
    const [employee, setEmployee] = useState<Employee | undefined>(initialEmployee);
    const { toast } = useToast();

    useEffect(() => {
        setEmployee(initialEmployee);
    }, [initialEmployee]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (!employee) return;
        const { id, value } = e.target;
        setEmployee(prev => prev ? { ...prev, [id]: value } : undefined);
    };

    const handleSaveChanges = (e: React.FormEvent) => {
        e.preventDefault();
        toast({
            title: "Dados salvos!",
            description: `As informações de ${employee?.name} foram atualizadas com sucesso.`,
        });
        // Here you would typically call an API to save the data
        // For now, we just show a toast. The local state of this tab is updated.
    };

    if (!employee) {
        return (
            <Card>
                <CardHeader>
                    <CardTitle>Erro</CardTitle>
                    <CardDescription>Colaborador não encontrado.</CardDescription>
                </CardHeader>
                <CardContent>
                    <p className="text-muted-foreground">Não foi possível carregar os dados do colaborador para edição. Por favor, feche esta aba e tente novamente.</p>
                </CardContent>
            </Card>
        );
    }

    return (
        <div className="p-4 flex flex-col gap-4 h-full">
            <Card className='flex-grow'>
                <CardHeader>
                    <CardTitle>Editar Colaborador</CardTitle>
                    <CardDescription>Alterando os dados de: {initialEmployee?.name}</CardDescription>
                </CardHeader>
                <CardContent>
                    <form id="edit-employee-form" onSubmit={handleSaveChanges} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        <div className="space-y-2">
                            <Label htmlFor="name">Nome Completo</Label>
                            <Input id="name" value={employee.name} onChange={handleChange} />
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="cpf">CPF</Label>
                            <Input id="cpf" value={employee.cpf} onChange={handleChange} />
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="matricula">Matrícula</Label>
                            <Input id="matricula" value={employee.matricula} onChange={handleChange} />
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="code">Código</Label>
                            <Input id="code" value={employee.code} onChange={handleChange} />
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="role">Cargo</Label>
                            <Input id="role" value={employee.role} onChange={handleChange} />
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="sector">Setor</Label>
                            <Input id="sector" value={employee.sector} onChange={handleChange} />
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="admissionDate">Data de Admissão</Label>
                            <Input type="date" id="admissionDate" value={employee.admissionDate} onChange={handleChange} />
                        </div>
                         <div className="space-y-2">
                            <Label htmlFor="status">Status</Label>
                            <Input id="status" value={employee.status} onChange={handleChange} />
                        </div>
                    </form>
                </CardContent>
            </Card>
             <div className="flex justify-end gap-2 p-4 border-t bg-card rounded-b-lg -mt-4">
                 <Button type="submit" form="edit-employee-form"><Save className="mr-2 h-4 w-4" /> Salvar Alterações</Button>
                 <Button variant="outline"><X className="mr-2 h-4 w-4" /> Cancelar</Button>
            </div>
        </div>
    );
}
