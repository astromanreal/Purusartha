// Kundali Analysis flow to generate and analyze a birth chart with AI.

'use server';

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const KundaliAnalysisInputSchema = z.object({
  name: z.string().describe('The name of the person.'),
  dateOfBirth: z.string().describe('The date of birth in ISO format (YYYY-MM-DD).'),
  timeOfBirth: z.string().describe('The time of birth in HH:mm format (24-hour format).'),
  placeOfBirth: z.string().describe('The place of birth (city, country).'),
});
export type KundaliAnalysisInput = z.infer<typeof KundaliAnalysisInputSchema>;

const KundaliAnalysisOutputSchema = z.object({
  summary: z.string().describe('A summary of the Kundali analysis.'),
  planetaryPositions: z.string().describe('The positions of the planets at the time of birth.'),
  doshas: z.string().describe('Any doshas (afflictions) present in the Kundali.'),
  remedies: z.string().describe('Suggested remedies for the doshas.'),
  predictions: z.string().describe('Predictions based on the Kundali analysis.'),
});
export type KundaliAnalysisOutput = z.infer<typeof KundaliAnalysisOutputSchema>;

export async function analyzeKundali(input: KundaliAnalysisInput): Promise<KundaliAnalysisOutput> {
  return kundaliAnalysisFlow(input);
}

const prompt = ai.definePrompt({
  name: 'kundaliAnalysisPrompt',
  input: {schema: KundaliAnalysisInputSchema},
  output: {schema: KundaliAnalysisOutputSchema},
  prompt: `You are an expert astrologer specializing in Vedic astrology and Kundali analysis.

You will analyze the birth chart based on the provided information and provide personalized insights.

Name: {{{name}}}
Date of Birth: {{{dateOfBirth}}}
Time of Birth: {{{timeOfBirth}}}
Place of Birth: {{{placeOfBirth}}}

Analyze the Kundali and provide a summary, planetary positions, doshas, remedies, and predictions.
`,
});

const kundaliAnalysisFlow = ai.defineFlow(
  {
    name: 'kundaliAnalysisFlow',
    inputSchema: KundaliAnalysisInputSchema,
    outputSchema: KundaliAnalysisOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
