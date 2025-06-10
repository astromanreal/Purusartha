
"use server";

import { z } from "zod";
import type { TransitAnalysisInput, TransitPredictionOutput, TransitFormState, PlanetTransitInfo, ForecastPeriod } from "@/types";
import { format, addDays, subDays } from "date-fns";

// Schema for validating form data on the server
const TransitServerSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters.").max(100),
  gender: z.enum(["male", "female", "other"], { required_error: "Gender is required." }),
  dateOfBirth: z.string().datetime({ message: "Valid date of birth is required." }),
  timeOfBirth: z.string().regex(/^([01]\d|2[0-3]):([0-5]\d)$/, { message: "Invalid time format (HH:MM)." }),
  placeOfBirth: z.string().min(2, "Place of birth must be at least 2 characters.").max(100),
  targetDate: z.string().datetime({ message: "Valid target date is required." }),
  period: z.enum(["daily", "weekly", "monthly"], { required_error: "Forecast period is required."}),
});


// Placeholder function to simulate Transit data generation
function generatePlaceholderTransitData(input: TransitAnalysisInput): TransitPredictionOutput {
  const { name, targetDate, period } = input;
  
  const planets = ["Sun", "Moon", "Mars", "Mercury", "Jupiter", "Venus", "Saturn", "Rahu", "Ketu"];
  const rashis = ["Aries", "Taurus", "Gemini", "Cancer", "Leo", "Virgo", "Libra", "Scorpio", "Sagittarius", "Capricorn", "Aquarius", "Pisces"];
  const houses = ["1st House", "2nd House", "3rd House", "4th House", "5th House", "6th House", "7th House", "8th House", "9th House", "10th House", "11th House", "12th House"];
  
  const getRandomElement = <T,>(arr: T[]): T => arr[Math.floor(Math.random() * arr.length)];

  const planetTransits: PlanetTransitInfo[] = planets.map(planet => ({
    planetName: planet,
    transitingSign: getRandomElement(rashis),
    transitingHouseNatal: `${getRandomElement(houses)} (from Lagna)`, // Simplified placeholder
    interpretation: `Placeholder: ${planet} transiting ${getRandomElement(rashis)} in your ${getRandomElement(houses)} suggests a focus on related themes. For ${name}, this might influence [placeholder area like 'communication' or 'home life'].`,
    isRetrograde: Math.random() > 0.8, // 20% chance of being retrograde
    aspects: Math.random() > 0.5 ? [`Aspecting Natal ${getRandomElement(planets)} in ${getRandomElement(houses)}`] : undefined,
  }));

  let generalOverview = `Placeholder: General transit overview for ${name} for the ${period} starting ${format(new Date(targetDate), "PPP")}. Energies suggest a time for [placeholder theme like 'reflection' or 'action'].`;

  if (period === "weekly") {
    generalOverview += " Focus on short-term goals and adapting to minor shifts.";
  } else if (period === "monthly") {
    generalOverview += " Broader themes are at play; consider long-term implications of current planetary movements.";
  }


  return {
    userName: name,
    targetDate: targetDate,
    period: period,
    generalOverview: generalOverview,
    planetTransits: planetTransits.slice(0, 5), // Show a few key planets for brevity in placeholder
    highImpactPeriods: [
        { period: "Next 2-3 days", description: "Placeholder: Moon's transit indicates emotional fluctuations. Be mindful." },
        { period: "Mid-period", description: "Placeholder: A key planetary aspect may bring a turning point."}
    ],
    remedies: ["Placeholder: Chanting Navagraha mantras daily is generally beneficial."]
  };
}

export async function getTransitPredictions(
  prevState: TransitFormState,
  formData: FormData
): Promise<TransitFormState> {
  const rawFormData = {
    name: formData.get("name"),
    gender: formData.get("gender"),
    dateOfBirth: formData.get("dateOfBirth"),
    timeOfBirth: formData.get("timeOfBirth"),
    placeOfBirth: formData.get("placeOfBirth"),
    targetDate: formData.get("targetDate"),
    period: formData.get("period"),
  };

  const validatedFields = TransitServerSchema.safeParse(rawFormData);

  if (!validatedFields.success) {
    const issues = validatedFields.error.issues.map((issue) => `${issue.path.join('.')}: ${issue.message}`);
    return {
      message: "Validation failed. Please check your inputs.",
      issues,
      fields: Object.fromEntries(Object.entries(rawFormData).map(([key, value]) => [key, typeof value === 'string' ? value : ""]))
    };
  }

  try {
    const input: TransitAnalysisInput = {
      name: validatedFields.data.name,
      gender: validatedFields.data.gender as "male" | "female" | "other",
      dateOfBirth: validatedFields.data.dateOfBirth,
      timeOfBirth: validatedFields.data.timeOfBirth,
      placeOfBirth: validatedFields.data.placeOfBirth,
      targetDate: validatedFields.data.targetDate,
      period: validatedFields.data.period as ForecastPeriod,
    };

    const result = generatePlaceholderTransitData(input);

    if (!result) {
      return { message: "Could not generate transit predictions at this time.", data: null };
    }

    return { message: "success", data: result };

  } catch (error) {
    console.error("Error in Transit Prediction server action:", error);
    let detailedErrorMessage = "An unknown error occurred during transit prediction generation.";
    if (error instanceof Error) {
      detailedErrorMessage = error.message;
    }
    return { message: `Error: ${detailedErrorMessage}.`, data: null };
  }
}

    