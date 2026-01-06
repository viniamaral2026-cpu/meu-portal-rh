'use client';

import { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { Save, X } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import type { Colaborador as Employee } from '@/domain/Colaborador';

type EditarColaboradorPageProps = {
    tab: { data?: { employee: Employee } };
}

export default function EditarColaboradorPage({ tab }: EditarColaboradorPageProps) {
    const [employee, setEmployee] = useState<Employee | undefined>(tab?.data?.employee);
    const { toast } = useToast();

    useEffect(() => {
        setEmployee(tab?.data?.employee);
    }, [tab]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (!employee) return;
        const { id, value } = e.target;
        setEmployee(prev => prev ? { ...prev, [id]: value } as Employee : undefined);
    };

    const handleSaveChanges = (e: React.FormEvent) => {
        e.preventDefault();
        toast({
            title: "Dados salvos!",
            description: `As informações de ${employee?.nome} foram atualizadas com sucesso. (Simulação)`,
        });
        // Here you would typically call a service to save the data.
        // For now, we just show a toast and the local state of this tab is updated.
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
                    <CardDescription>Alterando os dados de: {tab?.data?.employee?.nome}</CardDescription>
                </CardHeader>
                <CardContent>
                    <form id="edit-employee-form" onSubmit={handleSaveChanges} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        <div className="space-y-2">
                            <Label htmlFor="nome">Nome Completo</Label>
                            <Input id="nome" value={employee.nome} onChange={handleChange} />
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="cargoId">ID Cargo</Label>
                            <Input id="cargoId" value={employee.cargoId} onChange={handleChange} />
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="setorId">ID Setor</Label>
                            <Input id="setorId" value={employee.setorId} onChange={handleChange} />
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="status">Status</Label>
                            <Input id="status" value={employee.status || ''} onChange={handleChange} />
                        </div>
                         <div className="space-y-2">
                            <Label htmlFor="id">ID Colaborador</Label>
                            <Input id="id" value={employee.id || ''} onChange={handleChange} disabled/>
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
