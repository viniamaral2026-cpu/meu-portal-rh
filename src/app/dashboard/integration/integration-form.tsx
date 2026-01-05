'use client';

import { useFormState, useFormStatus } from 'react-dom';
import type { IntegrateDataOutput } from '@/ai/flows/data-integration-tool';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Terminal } from 'lucide-react';

type IntegrationFormProps = {
    action: (
        prevState: IntegrateDataOutput | null,
        formData: FormData
    ) => Promise<IntegrateDataOutput | null>;
    targetSchemaExample: string;
};

function SubmitButton() {
    const { pending } = useFormStatus();
    return <Button type="submit" disabled={pending}>{pending ? 'Gerando Mapeamento...' : 'Gerar Mapeamento'}</Button>;
}

export function IntegrationForm({ action, targetSchemaExample }: IntegrationFormProps) {
    const [state, formAction] = useFormState(action, null);

    return (
        <form action={formAction} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                    <Label htmlFor="sourceSystem">Sistema de Origem</Label>
                    <Input id="sourceSystem" name="sourceSystem" placeholder="Ex: Senior, SAP, REST API" required />
                </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                    <Label htmlFor="sourceDataSchema">Schema de Dados de Origem (JSON)</Label>
                    <Textarea id="sourceDataSchema" name="sourceDataSchema" rows={10} placeholder='{\n  "id_colaborador": "string",\n  "nome_completo": "string",\n  ...\n}' required />
                </div>
                <div className="space-y-2">
                    <Label htmlFor="targetDataSchema">Schema de Dados do GPWay (JSON)</Label>
                    <Textarea id="targetDataSchema" name="targetDataSchema" rows={10} defaultValue={targetSchemaExample} required />
                </div>
            </div>
            
            <div className="space-y-2">
                <Label htmlFor="dataMappingInstructions">Instruções Adicionais (Opcional)</Label>
                <Textarea id="dataMappingInstructions" name="dataMappingInstructions" rows={3} placeholder="Ex: Mapear 'id_colaborador' para 'employeeId'. O campo 'position' deve ser extraído de 'cargo_funcao'." />
            </div>

            <SubmitButton />

            {state && (
                <Card className="mt-6">
                    <CardHeader>
                        <CardTitle>Resultado do Mapeamento</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        {state.notes && (
                            <Alert>
                                <Terminal className="h-4 w-4" />
                                <AlertTitle>Notas da IA</AlertTitle>
                                <AlertDescription>{state.notes}</AlertDescription>
                            </Alert>
                        )}
                        {state.mappingResult ? (
                             <div className="bg-muted rounded-md p-4">
                                <pre className="font-code text-sm text-foreground overflow-x-auto">
                                    <code>{JSON.stringify(JSON.parse(state.mappingResult), null, 2)}</code>
                                </pre>
                            </div>
                        ) : <p className="text-muted-foreground">Nenhum resultado de mapeamento gerado.</p>}
                       
                    </CardContent>
                </Card>
            )}
        </form>
    );
}
