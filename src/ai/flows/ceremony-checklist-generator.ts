'use server';

/**
 * @fileOverview AI-powered checklist generator for Hindu family ceremonies.
 *
 * - ceremonyChecklist - A function that generates a checklist for a given Hindu ceremony.
 * - CeremonyChecklistInput - The input type for the ceremonyChecklist function.
 * - CeremonyChecklistOutput - The return type for the ceremonyChecklist function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const CeremonyChecklistInputSchema = z.object({
  ceremonyType: z
    .string()
    .describe(
      'The type of Hindu ceremony to generate a checklist for (e.g., Upanayana, Vivaha, Namakarana, Antyeshti).'
    ),
  userDetails: z
    .string()
    .optional()
    .describe(
      'Any additional details about the specific ceremony or family preferences to take into account when generating the checklist.'
    ),
});
export type CeremonyChecklistInput = z.infer<typeof CeremonyChecklistInputSchema>;

const CeremonyChecklistOutputSchema = z.object({
  checklistItems: z
    .array(z.string())
    .describe('A list of checklist items for the specified Hindu ceremony.'),
});
export type CeremonyChecklistOutput = z.infer<typeof CeremonyChecklistOutputSchema>;

export async function ceremonyChecklist(input: CeremonyChecklistInput): Promise<CeremonyChecklistOutput> {
  return ceremonyChecklistFlow(input);
}

const prompt = ai.definePrompt({
  name: 'ceremonyChecklistPrompt',
  input: {schema: CeremonyChecklistInputSchema},
  output: {schema: CeremonyChecklistOutputSchema},
  prompt: `You are an expert in Hindu ceremonies and rituals. Your task is to generate a checklist for a given ceremony, taking into account any specific details provided.

  Ceremony Type: {{{ceremonyType}}}
  User Details: {{{userDetails}}}

  Please provide a comprehensive checklist of items needed to properly prepare for the ceremony.`,
});

const ceremonyChecklistFlow = ai.defineFlow(
  {
    name: 'ceremonyChecklistFlow',
    inputSchema: CeremonyChecklistInputSchema,
    outputSchema: CeremonyChecklistOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
