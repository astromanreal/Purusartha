
"use server";

import { z } from "zod";
import type { VarshphalInput, VarshphalOutput, VarshphalFormState } from "@/types";
import { format, addYears, subDays, addDays as addDaysFns } from "date-fns"; // Renamed addDays to avoid conflict

// Schema for validating form data on the server
const VarshphalServerSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters.").max(100),
  gender: z.enum(["male", "female", "other"], { required_error: "Gender is required." }),
  dateOfBirth: z.string().datetime({ message: "Valid date of birth is required." }),
  timeOfBirth: z.string().regex(/^([01]\d|2[0-3]):([0-5]\d)$/, { message: "Invalid time format (HH:MM)." }),
  placeOfBirth: z.string().min(2, "Place of birth must be at least 2 characters.").max(100),
  targetYear: z.coerce.number().min(1900, "Year must be 1900 or later.").max(2100, "Year must be 2100 or earlier."),
  currentLocation: z.string().optional(),
});

// Placeholder function to simulate Varshphal data generation
function getPlaceholderVarshphalData(input: VarshphalInput): VarshphalOutput {
  const { name, targetYear, dateOfBirth } = input;
  
  // Simulate Solar Return Date (actual calculation is complex)
  const dob = new Date(dateOfBirth);
  const solarReturnDate = format(addYears(subDays(dob, 1), targetYear - dob.getFullYear()), "yyyy-MM-dd"); // Approximate

  const rashis = ["Aries", "Taurus", "Gemini", "Cancer", "Leo", "Virgo", "Libra", "Scorpio", "Sagittarius", "Capricorn", "Aquarius", "Pisces"];
  const houses = ["1st House", "2nd House", "3rd House", "4th House", "5th House", "6th House", "7th House", "8th House", "9th House", "10th House", "11th House", "12th House"];
  const getRandomElement = <T,>(arr: T[]): T => arr[Math.floor(Math.random() * arr.length)];

  return {
    userName: name,
    forecastYear: targetYear,
    solarReturnDate: solarReturnDate,
    varshLagna: getRandomElement(rashis),
    munthaPosition: `${getRandomElement(houses)} in ${getRandomElement(rashis)}`,
    munthaLordEffect: "Placeholder: Muntha lord's position suggests a focus on career and public image this year. Efforts in professional life will be prominent.",
    tajikaYogas: ["Placeholder: Ithasala Yoga indicates potential for new opportunities.", "Placeholder: Ekkabala Yoga suggests strength in endeavors."],
    overview: `Placeholder: The year ${targetYear} for ${name} appears to be a period of significant activity. The solar return chart indicates a focus on [Placeholder: e.g., career development and personal growth]. Key themes will revolve around [Placeholder: e.g., new beginnings and overcoming past obstacles].`,
    areaPredictions: [
      { title: "Career & Finances", prediction: "Placeholder: Professional advancements are likely, possibly with increased responsibilities. Financial inflow seems steady, but caution is advised in new investments around mid-year.", keyInfluences: "Placeholder: 10th lord strong, Venus in 2nd house of Varshphal chart." },
      { title: "Relationships & Family", prediction: "Placeholder: Existing relationships may see deepening bonds. Family matters could require attention in the later part of the year. Open communication will be key.", keyInfluences: "Placeholder: 7th lord well-aspected, Moon's transit through relationship houses." },
      { title: "Health & Travel", prediction: "Placeholder: General health appears stable, but attention to diet and stress management is recommended. Short travels for work or leisure are indicated.", keyInfluences: "Placeholder: Lagna lord's strength, 6th house influences." },
      { title: "Education & Property", prediction: "Placeholder: Favorable for students pursuing higher education. Property matters may see some developments, but careful scrutiny of documents is advised.", keyInfluences: "Placeholder: Jupiter's aspect on 4th/9th house." },
      { title: "General Luck, Opportunities & Challenges", prediction: "Placeholder: Opportunities for growth may arise unexpectedly. Challenges could test resilience, particularly around [Placeholder: specific period like Q3]. Maintaining a positive outlook will be beneficial.", keyInfluences: "Placeholder: Overall chart strength, influence of Dasha period." },
    ],
    importantPeriods: {
      favorableMonths: ["Placeholder: March-April", "Placeholder: September-October"],
      cautionMonths: ["Placeholder: June-July"],
      milestones: ["Placeholder: Potential career shift in Q2", "Placeholder: Significant family event in Q4"],
    },
    sahamPointsAnalysis: [
      { name: "Punya Saham", longitude: `${getRandomElement(rashis)} ${Math.floor(Math.random()*30)}°${Math.floor(Math.random()*60)}'`, interpretation: "Placeholder: Indicates good fortune related to past deeds, potentially manifesting as unexpected help or opportunities." },
      { name: "Rajya Saham", longitude: `${getRandomElement(rashis)} ${Math.floor(Math.random()*30)}°${Math.floor(Math.random()*60)}'`, interpretation: "Placeholder: Suggests matters related to status, authority, and professional recognition will be prominent." },
      { name: "Arishta Saham", longitude: `${getRandomElement(rashis)} ${Math.floor(Math.random()*30)}°${Math.floor(Math.random()*60)}'`, interpretation: "Placeholder: Points to potential areas of difficulty or health concerns that require attention." },
    ],
    remedialMeasures: ["Placeholder: Chanting specific planetary mantras.", "Placeholder: Performing acts of charity on specific weekdays."],
  };
}

export async function submitVarshphalRequest(
  prevState: VarshphalFormState,
  formData: FormData
): Promise<VarshphalFormState> {
  const rawFormData = {
    name: formData.get("name"),
    gender: formData.get("gender"),
    dateOfBirth: formData.get("dateOfBirth"),
    timeOfBirth: formData.get("timeOfBirth"),
    placeOfBirth: formData.get("placeOfBirth"),
    targetYear: formData.get("targetYear"),
    currentLocation: formData.get("currentLocation"),
  };

  const validatedFields = VarshphalServerSchema.safeParse(rawFormData);

  if (!validatedFields.success) {
    const issues = validatedFields.error.issues.map((issue) => `${issue.path.join('.')}: ${issue.message}`);
    return {
      message: "Validation failed. Please check your inputs.",
      issues,
      fields: Object.fromEntries(Object.entries(rawFormData).map(([key, value]) => [key, typeof value === 'string' ? value : ""]))
    };
  }

  try {
    const input: VarshphalInput = {
      name: validatedFields.data.name,
      gender: validatedFields.data.gender as "male" | "female" | "other",
      dateOfBirth: validatedFields.data.dateOfBirth,
      timeOfBirth: validatedFields.data.timeOfBirth,
      placeOfBirth: validatedFields.data.placeOfBirth,
      targetYear: validatedFields.data.targetYear,
      currentLocation: validatedFields.data.currentLocation,
    };

    const result = getPlaceholderVarshphalData(input);

    if (!result) {
      return { message: "Could not generate Varshphal data at this time.", data: null };
    }

    return { message: "success", data: result };

  } catch (error) {
    console.error("Error in Varshphal generation server action:", error);
    let detailedErrorMessage = "An unknown error occurred during Varshphal generation.";
    if (error instanceof Error) {
      detailedErrorMessage = error.message;
    }
    return { message: `Error: ${detailedErrorMessage}.`, data: null };
  }
}
