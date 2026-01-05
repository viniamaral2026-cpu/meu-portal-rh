'use server';

/**
 * @fileOverview Data integration tool using GenAI to map data fields between GPWay Portal and external systems.
 *
 * - integrateData - A function that handles the data integration process.
 * - IntegrateDataInput - The input type for the integrateData function.
 * - IntegrateDataOutput - The return type for the integrateData function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const IntegrateDataInputSchema = z.object({
  sourceSystem: z.string().describe('The name of the source system (e.g., Senior, other system with Java extensions, REST, or SOAP support).'),
  sourceDataSchema: z.string().describe('The schema of the data from the source system in JSON format.'),
  targetDataSchema: z.string().describe('The schema of the data in the GPWay Portal in JSON format.'),
  dataMappingInstructions: z.string().optional().describe('Optional instructions or examples for data mapping.'),
});
export type IntegrateDataInput = z.infer<typeof IntegrateDataInputSchema>;

const IntegrateDataOutputSchema = z.object({
  mappingResult: z.string().describe('The data mapping result in JSON format, showing how fields from the source system should be mapped to the GPWay Portal.'),
  notes: z.string().optional().describe('Any additional notes or warnings regarding the data mapping process.'),
});
export type IntegrateDataOutput = z.infer<typeof IntegrateDataOutputSchema>;

export async function integrateData(input: IntegrateDataInput): Promise<IntegrateDataOutput> {
  return integrateDataFlow(input);
}

const prompt = ai.definePrompt({
  name: 'dataIntegrationPrompt',
  input: {schema: IntegrateDataInputSchema},
  output: {schema: IntegrateDataOutputSchema},
  prompt: `You are an expert data integration specialist. Your task is to map data fields from a source system to the GPWay Portal.

Source System: {{{sourceSystem}}}
Source Data Schema:
{{{#if sourceDataSchema}}}{{{sourceDataSchema}}}{{{else}}}No source data schema provided.{{{/if}}}

GPWay Portal Data Schema:
{{{#if targetDataSchema}}}{{{targetDataSchema}}}{{{else}}}No target data schema provided.{{{/if}}}

{{#if dataMappingInstructions}}
Additional Mapping Instructions: {{{dataMappingInstructions}}}
{{/if}}

Based on the provided schemas and instructions, create a data mapping in JSON format.  The JSON should have the source fields as keys, and the target fields as values.  If a source field cannot be mapped, set the value to null.
Include any relevant notes or warnings about the mapping process.
`,
});

const integrateDataFlow = ai.defineFlow(
  {
    name: 'integrateDataFlow',
    inputSchema: IntegrateDataInputSchema,
    outputSchema: IntegrateDataOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
