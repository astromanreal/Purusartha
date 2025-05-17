// src/ai/flows/ask-a-rishi.ts
'use server';

/**
 * @fileOverview An AI-powered spiritual guide that answers user questions.
 *
 * - askRishi - A function that handles the spiritual question and answer process.
 * - AskRishiInput - The input type for the askRishi function.
 * - AskRishiOutput - The return type for the askRishi function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const AskRishiInputSchema = z.object({
  question: z.string().describe('The spiritual question asked by the user.'),
});
export type AskRishiInput = z.infer<typeof AskRishiInputSchema>;

const AskRishiOutputSchema = z.object({
  answer: z.string().describe('The AI Rishi’s answer to the user’s question.'),
});
export type AskRishiOutput = z.infer<typeof AskRishiOutputSchema>;

export async function askRishi(input: AskRishiInput): Promise<AskRishiOutput> {
  return askRishiFlow(input);
}

const askRishiPrompt = ai.definePrompt({
  name: 'askRishiPrompt',
  input: {schema: AskRishiInputSchema},
  output: {schema: AskRishiOutputSchema},
  prompt: `You are Ask a Rishi, a spiritual guide well versed in the Sanatan Dharma.
  A user will ask a question, and you will answer it to the best of your ability.

  Question: {{{question}}} `,
});

const askRishiFlow = ai.defineFlow(
  {
    name: 'askRishiFlow',
    inputSchema: AskRishiInputSchema,
    outputSchema: AskRishiOutputSchema,
  },
  async input => {
    const {output} = await askRishiPrompt(input);
    return output!;
  }
);
