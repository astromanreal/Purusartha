
"use server";

import { z } from "zod";
import { format } from "date-fns";
import type { KundliInput, KundliOutput, KundliFormState, PlanetaryPosition, DashaInfo, ManglikAnalysis } from "@/types";

// Schema for validating form data on the server
const KundliServerSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters.").max(100),
  gender: z.enum(["male", "female", "other"], { required_error: "Gender is required."}),
  dateOfBirth: z.string().datetime({ message: "Valid date of birth is required."}), // Expect ISO string
  timeOfBirth: z.string().regex(/^([01]\d|2[0-3]):([0-5]\d)$/, { message: "Invalid time format (HH:MM)."}),
  placeOfBirth: z.string().min(2, "Place of birth must be at least 2 characters.").max(100),
});


export async function submitKundliDetails(
  prevState: KundliFormState,
  formData: FormData
): Promise<KundliFormState> {
  
  const rawFormData = {
    name: formData.get("name"),
    gender: formData.get("gender"),
    dateOfBirth: formData.get("dateOfBirth"), // Comes as ISO string from client when Date object is used
    timeOfBirth: formData.get("timeOfBirth"),
    placeOfBirth: formData.get("placeOfBirth"),
  };

  const validatedFields = KundliServerSchema.safeParse(rawFormData);

  if (!validatedFields.success) {
    const issues = validatedFields.error.issues.map((issue) => `${issue.path.join('.')} : ${issue.message}`);
    return {
      message: "Validation failed. Please check your inputs.",
      issues,
      fields: { // Return raw form data for pre-filling
        name: typeof rawFormData.name === 'string' ? rawFormData.name : "",
        gender: typeof rawFormData.gender === 'string' ? rawFormData.gender : "",
        dateOfBirth: typeof rawFormData.dateOfBirth === 'string' ? rawFormData.dateOfBirth : "",
        timeOfBirth: typeof rawFormData.timeOfBirth === 'string' ? rawFormData.timeOfBirth : "",
        placeOfBirth: typeof rawFormData.placeOfBirth === 'string' ? rawFormData.placeOfBirth : "",
      },
      data: null,
    };
  }

  try {
    // Data to send to the proxy
    const payloadToProxy: KundliInput = {
      name: validatedFields.data.name,
      gender: validatedFields.data.gender as "male" | "female" | "other",
      dateOfBirth: validatedFields.data.dateOfBirth, // ISO string
      timeOfBirth: validatedFields.data.timeOfBirth,
      placeOfBirth: validatedFields.data.placeOfBirth,
    };

    // Make a POST request to the backend proxy
    const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000'}/api/kundli-proxy`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payloadToProxy),
    });

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({ message: "Failed to parse error response from proxy." }));
      return { 
        message: `Error from Kundli service: ${errorData.message || response.statusText}`,
        data: null,
      };
    }

    const result: KundliOutput = await response.json();

    if (!result) { 
        return { message: "Kundli service returned no data. Please try again.", data: null };
    }

    return { message: "success", data: result };

  } catch (error) {
    console.error("Error in submitKundliDetails calling proxy:", error);
    // @ts-ignore
    const detailedErrorMessage = error.message || "An unknown error occurred while processing your request.";
    return { message: `Error: ${detailedErrorMessage}.`, data: null };
  }
}
