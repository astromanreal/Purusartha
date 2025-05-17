'use server';

/**
 * @fileOverview AI-assisted mantra recommendation flow.
 *
 * This flow recommends mantras based on user's Kundali or life challenges.
 * - mantraRecommendation - A function that handles the mantra recommendation process.
 * - MantraRecommendationInput - The input type for the mantraRecommendation function.
 * - MantraRecommendationOutput - The return type for the mantraRecommendation function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const MantraRecommendationInputSchema = z.object({
  kundaliDetails: z
    .string()
    .optional()
    .describe('Details from the user Kundali, if available.'),
  lifeChallenges: z
    .string()
    .describe('Description of the life challenges the user is facing.'),
});
export type MantraRecommendationInput = z.infer<
  typeof MantraRecommendationInputSchema
>;

const MantraRecommendationOutputSchema = z.object({
  recommendedMantras: z
    .array(z.string())
    .describe('A list of recommended mantras.'),
  reasoning: z
    .string()
    .describe(
      'Explanation of why these mantras are recommended based on the input.'
    ),
});
export type MantraRecommendationOutput = z.infer<
  typeof MantraRecommendationOutputSchema
>;

export async function mantraRecommendation(
  input: MantraRecommendationInput
): Promise<MantraRecommendationOutput> {
  return mantraRecommendationFlow(input);
}

const prompt = ai.definePrompt({
  name: 'mantraRecommendationPrompt',
  input: {schema: MantraRecommendationInputSchema},
  output: {schema: MantraRecommendationOutputSchema},
  prompt: `You are a spiritual advisor recommending mantras based on user input.

  Based on the following information, recommend a list of mantras to help the user overcome their challenges and enhance their spiritual practice.

  Kundali Details: {{{kundaliDetails}}}
  Life Challenges: {{{lifeChallenges}}}

  Provide a clear explanation of why each mantra is recommended in the reasoning field. The recommendedMantras field should contain a list of mantras.
  Format your response as a JSON object conforming to the MantraRecommendationOutputSchema schema.`,
});

const mantraRecommendationFlow = ai.defineFlow(
  {
    name: 'mantraRecommendationFlow',
    inputSchema: MantraRecommendationInputSchema,
    outputSchema: MantraRecommendationOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
