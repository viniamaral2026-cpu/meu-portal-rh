import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { IntegrationForm } from './integration-form';
import { integrateData, type IntegrateDataOutput } from '@/ai/flows/data-integration-tool';
import { useToast } from '@/hooks/use-toast';

export default function IntegrationPage() {
    async function handleIntegrationAction(
        prevState: IntegrateDataOutput | null,
        formData: FormData
    ): Promise<IntegrateDataOutput | null> {
        'use server';

        const sourceSystem = formData.get('sourceSystem') as string;
        const sourceDataSchema = formData.get('sourceDataSchema') as string;
        const targetDataSchema = formData.get('targetDataSchema') as string;
        const dataMappingInstructions = formData.get('dataMappingInstructions') as string;

        if (!sourceSystem || !sourceDataSchema || !targetDataSchema) {
            return {
                mappingResult: '',
                notes: 'Por favor, preencha todos os campos obrigatórios.'
            };
        }

        try {
            const result = await integrateData({
                sourceSystem,
                sourceDataSchema,
                targetDataSchema,
                dataMappingInstructions
            });
            return result;
        } catch (error) {
            console.error('Data integration failed:', error);
            return {
                mappingResult: '',
                notes: 'Ocorreu um erro ao gerar o mapeamento. Tente novamente.',
            };
        }
    }

    const gpwaySchemaExample = `{
  "employeeId": "string",
  "fullName": "string",
  "email": "string",
  "position": "string",
  "department": "string",
  "startDate": "date"
}`;

    return (
        <Card>
            <CardHeader>
                <CardTitle>Ferramenta de Integração de Dados</CardTitle>
                <CardDescription>
                    Mapeie campos de dados de sistemas externos para o GPWay Portal usando IA.
                    Integra com plataforma Senior e todos que utilizam extensões Java, REST e SOAP.
                </CardDescription>
            </CardHeader>
            <CardContent>
                <IntegrationForm
                    action={handleIntegrationAction}
                    targetSchemaExample={gpwaySchemaExample}
                />
            </CardContent>
        </Card>
    );
}
