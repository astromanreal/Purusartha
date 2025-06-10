
"use server";

import { askRishi, type AskRishiInput, type AskRishiOutput } from "@/ai/flows/ask-a-rishi";
import { z } from "zod";

// This schema is used on the server for validation of form data passed from client.
const AskRishiServerSchema = z.object({
  question: z.string().min(10, { message: "Please ask a more detailed question (minimum 10 characters)." }).max(500, {message: "Question must be 500 characters or less."}),
});

export interface AskRishiFormState {
  message: string | null;
  fields?: Record<string, string>;
  issues?: string[];
  data?: AskRishiOutput;
}

export async function submitSpiritualQuestion(
  prevState: AskRishiFormState,
  formData: FormData
): Promise<AskRishiFormState> {
  
  const rawFormData = {
    question: formData.get("question"),
  };

  const validatedFields = AskRishiServerSchema.safeParse(rawFormData);

  if (!validatedFields.success) {
    const issues = validatedFields.error.issues.map((issue) => issue.message);
    return {
      message: "Validation failed on server.",
      issues,
      fields: {
        question: typeof rawFormData.question === 'string' ? rawFormData.question : "",
      },
    };
  }

  try {
    const input: AskRishiInput = { question: validatedFields.data.question };
    const result = await askRishi(input);

    if (!result || !result.answer) {
        return { message: "The Rishi did not provide an answer. Please try rephrasing your question." };
    }

    return { message: "success", data: result };
  } catch (error) {
    console.error("Error calling AI in server action:", error);
    let detailedErrorMessage = "An unknown error occurred.";
    if (typeof error === 'object' && error !== null && 'message' in error && typeof error.message === 'string') {
      detailedErrorMessage = error.message;
    }

    // Check for common indicators of API/Genkit issues
    const errorText = detailedErrorMessage.toLowerCase();
    if (errorText.includes("fetch") || 
        errorText.includes("api key") ||
        errorText.includes("auth") ||
        errorText.includes("credential") ||
        errorText.includes("permission denied") || 
        errorText.includes("quota")) {
      detailedErrorMessage += " This might be due to a network issue, an incorrect or missing API key for the AI service (e.g., GOOGLE_API_KEY in your .env file), exceeded quotas, or the Genkit development server (often run with 'npm run genkit:dev') not being active. Please check your setup and API service dashboard.";
    }
    
    return { message: `An error occurred while consulting the Rishi: ${detailedErrorMessage}. Please try again.` };
  }
}
