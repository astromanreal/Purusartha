
"use server";

import { z } from "zod";
import type { BirthDetailsInput, MatchmakingOutput, AshtakootItem, ManglikResult } from "@/types";

// Schema for validating individual birth details
const BirthDetailsServerSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }).max(100),
  gender: z.enum(["male", "female", "other"], { required_error: "Gender is required." }),
  dateOfBirth: z.string().datetime({ message: "Valid date of birth is required." }), 
  timeOfBirth: z.string().regex(/^([01]\d|2[0-3]):([0-5]\d)$/, { message: "Invalid time format (HH:MM)." }),
  placeOfBirth: z.string().min(2, { message: "Place of birth must be at least 2 characters." }).max(100),
});

// Schema for validating the entire matchmaking form data
const MatchmakingServerSchema = z.object({
  person1Name: z.string().min(2).max(100),
  person1Gender: z.enum(["male", "female", "other"]),
  person1DateOfBirth: z.string().datetime(),
  person1TimeOfBirth: z.string().regex(/^([01]\d|2[0-3]):([0-5]\d)$/),
  person1PlaceOfBirth: z.string().min(2).max(100),
  
  person2Name: z.string().min(2).max(100),
  person2Gender: z.enum(["male", "female", "other"]),
  person2DateOfBirth: z.string().datetime(),
  person2TimeOfBirth: z.string().regex(/^([01]\d|2[0-3]):([0-5]\d)$/),
  person2PlaceOfBirth: z.string().min(2).max(100),
});


export interface MatchmakingFormState {
  message: string | null;
  issues?: string[];
  // Store raw form data to prefill in case of server-side validation errors
  fields?: Record<string, string>; 
  data?: MatchmakingOutput;
}

// Placeholder function to simulate matchmaking results
function getPlaceholderMatchmakingResults(input1: BirthDetailsInput, input2: BirthDetailsInput): MatchmakingOutput {
  const getRandomPoints = (max: number) => Math.floor(Math.random() * (max + 1));
  
  const ashtakoot: AshtakootItem[] = [
    { kootaName: "Varna", obtainedPoints: getRandomPoints(1), maxPoints: 1, description: "Spiritual compatibility & ego." },
    { kootaName: "Vashya", obtainedPoints: getRandomPoints(2), maxPoints: 2, description: "Mutual attraction & control." },
    { kootaName: "Tara", obtainedPoints: getRandomPoints(3), maxPoints: 3, description: "Destiny & health compatibility." },
    { kootaName: "Yoni", obtainedPoints: getRandomPoints(4), maxPoints: 4, description: "Sexual & biological compatibility." },
    { kootaName: "Graha Maitri", obtainedPoints: getRandomPoints(5), maxPoints: 5, description: "Mental compatibility & friendship." },
    { kootaName: "Gana", obtainedPoints: getRandomPoints(6), maxPoints: 6, description: "Temperament & nature matching." },
    { kootaName: "Bhakoot", obtainedPoints: getRandomPoints(7), maxPoints: 7, description: "Family welfare & wealth prospects." },
    { kootaName: "Nadi", obtainedPoints: Math.random() > 0.3 ? getRandomPoints(8) : 0, maxPoints: 8, description: "Progeny & health factors." }, // Nadi dosha is common
  ];

  const totalGunaPoints = ashtakoot.reduce((sum, koota) => sum + koota.obtainedPoints, 0);

  const getMatchInterpretation = (points: number): string => {
    if (points >= 28) return "Excellent Match: Strong compatibility, highly recommended.";
    if (points >= 22) return "Good Match: Favorable compatibility, generally good prospects.";
    if (points >= 18) return "Average Match: Acceptable compatibility, some adjustments may be needed.";
    return "Below Average Match: Compatibility challenges likely, careful consideration advised.";
  };
  
  const randomManglik = (): ManglikResult => {
      const isManglik = Math.random() > 0.6; // 40% chance of being Manglik
      let hasCancellation = false;
      if (isManglik) {
          hasCancellation = Math.random() > 0.5; // 50% chance of cancellation if Manglik
      }
      return {
          isManglik,
          hasCancellation,
          details: isManglik ? (hasCancellation ? "Manglik Dosha present, but likely cancelled by planetary placements." : "Manglik Dosha present.") : "No Manglik Dosha found."
      };
  };

  return {
    person1Name: input1.name,
    person2Name: input2.name,
    totalGunaPoints,
    maxGunaPoints: 36,
    ashtakootResults: ashtakoot,
    manglikStatusPerson1: randomManglik(),
    manglikStatusPerson2: randomManglik(),
    compatibilitySummary: {
      overall: getMatchInterpretation(totalGunaPoints) + " (This is a placeholder summary. Actual analysis is more nuanced.)",
      emotionalBond: "Placeholder: Appears to be a potentially strong emotional connection.",
      communication: "Placeholder: Communication styles seem generally compatible, with room for understanding.",
      longevity: "Placeholder: Astrological factors suggest potential for a lasting relationship if efforts are made.",
      financialHarmony: "Placeholder: Financial outlook appears stable with mutual effort."
    },
    remedialSuggestions: totalGunaPoints < 18 || randomManglik().isManglik ? ["Placeholder: Consider consulting an astrologer for specific remedies like mantra chanting or gemstone recommendations if concerns exist."] : [],
  };
}


export async function performMatchmaking(
  prevState: MatchmakingFormState,
  formData: FormData
): Promise<MatchmakingFormState> {
  
  const rawFormData = {
    person1Name: formData.get("person1Name"),
    person1Gender: formData.get("person1Gender"),
    person1DateOfBirth: formData.get("person1DateOfBirth"),
    person1TimeOfBirth: formData.get("person1TimeOfBirth"),
    person1PlaceOfBirth: formData.get("person1PlaceOfBirth"),
    
    person2Name: formData.get("person2Name"),
    person2Gender: formData.get("person2Gender"),
    person2DateOfBirth: formData.get("person2DateOfBirth"),
    person2TimeOfBirth: formData.get("person2TimeOfBirth"),
    person2PlaceOfBirth: formData.get("person2PlaceOfBirth"),
  };

  const validatedFields = MatchmakingServerSchema.safeParse(rawFormData);

  if (!validatedFields.success) {
    const issues = validatedFields.error.issues.map((issue) => `${issue.path.join('.')} : ${issue.message}`);
    return {
      message: "Validation failed on server. Please check all inputs.",
      issues,
      fields: Object.fromEntries(Object.entries(rawFormData).map(([key, value]) => [key, typeof value === 'string' ? value : ""]))
    };
  }

  try {
    const person1Input: BirthDetailsInput = {
      name: validatedFields.data.person1Name,
      gender: validatedFields.data.person1Gender as "male" | "female" | "other",
      dateOfBirth: validatedFields.data.person1DateOfBirth,
      timeOfBirth: validatedFields.data.person1TimeOfBirth,
      placeOfBirth: validatedFields.data.person1PlaceOfBirth,
    };

    const person2Input: BirthDetailsInput = {
      name: validatedFields.data.person2Name,
      gender: validatedFields.data.person2Gender as "male" | "female" | "other",
      dateOfBirth: validatedFields.data.person2DateOfBirth,
      timeOfBirth: validatedFields.data.person2TimeOfBirth,
      placeOfBirth: validatedFields.data.person2PlaceOfBirth,
    };

    // *** This is where you would call your actual astrological matchmaking engine ***
    const result = getPlaceholderMatchmakingResults(person1Input, person2Input);

    if (!result) { 
        return { message: "Could not perform matchmaking at this time. Please try again." };
    }

    return { message: "success", data: result };

  } catch (error) {
    console.error("Error in matchmaking server action:", error);
    let detailedErrorMessage = "An unknown error occurred during matchmaking.";
    if (error instanceof Error) {
      detailedErrorMessage = error.message;
    }
    return { message: `Error: ${detailedErrorMessage}.` };
  }
}
