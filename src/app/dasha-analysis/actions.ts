
"use server";

import { z } from "zod";
import type { KundliInput, DashaAnalysisOutput, DashaAnalysisFormState, DashaPeriod, DashaSystem } from "@/types";
import { format, addYears, addMonths, addDays } from "date-fns";

// Schema for validating form data on the server (reusing KundliInput structure)
const DashaAnalysisServerSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters.").max(100),
  gender: z.enum(["male", "female", "other"], { required_error: "Gender is required." }),
  dateOfBirth: z.string().datetime({ message: "Valid date of birth is required." }),
  timeOfBirth: z.string().regex(/^([01]\d|2[0-3]):([0-5]\d)$/, { message: "Invalid time format (HH:MM)." }),
  placeOfBirth: z.string().min(2, "Place of birth must be at least 2 characters.").max(100),
});


// Placeholder function to simulate Dasha Analysis data generation
function getPlaceholderDashaAnalysis(input: KundliInput): DashaAnalysisOutput {
  const { name, dateOfBirth } = input;
  const dob = new Date(dateOfBirth);

  // Simplified Vimshottari Dasha calculation (VERY basic placeholder)
  const planets = ["Ketu", "Venus", "Sun", "Moon", "Mars", "Rahu", "Jupiter", "Saturn", "Mercury"];
  const dashaYears = [7, 20, 6, 10, 7, 18, 16, 19, 17]; // Vimshottari years

  // Determine a random starting planet for simplicity
  const startingPlanetIndex = Math.floor(Math.random() * planets.length);
  let currentStartDate = new Date(dob.getFullYear() + Math.floor(Math.random() * 10), dob.getMonth(), dob.getDate()); // Start Dasha sometime after birth

  const mahadashas: DashaPeriod[] = [];

  for (let i = 0; i < 3; i++) { // Generate 3 Mahadashas for placeholder
    const planetIndex = (startingPlanetIndex + i) % planets.length;
    const planetName = planets[planetIndex];
    const durationYears = dashaYears[planetIndex];
    
    const endDate = addYears(currentStartDate, durationYears);
    
    const antardashas: DashaPeriod[] = [];
    let currentAntardashaStartDate = new Date(currentStartDate);

    // Generate 2-3 Antardashas for each Mahadasha
    for (let j = 0; j < Math.floor(Math.random() * 2) + 2; j++) {
        const adPlanetIndex = (planetIndex + j) % planets.length; // simplified AD sequence
        const adPlanetName = planets[adPlanetIndex];
        // Simplified AD duration (not accurate, just for placeholder)
        const adDurationMonths = Math.floor(durationYears * 12 / (planets.length * 0.8) ) + (j*2) ; // rough distribution
        const adEndDate = addMonths(currentAntardashaStartDate, adDurationMonths);

        if (adEndDate > endDate) break; // Don't let AD go beyond MD

        antardashas.push({
            level: "Antardasha",
            planetName: adPlanetName,
            startDate: currentAntardashaStartDate.toISOString(),
            endDate: adEndDate.toISOString(),
            duration: `${Math.floor(adDurationMonths / 12)}Y ${adDurationMonths % 12}M`,
            generalPrediction: `Placeholder: General effects for ${adPlanetName} Antardasha within ${planetName} Mahadasha. Focus on relationships and learning.`,
            specificPredictions: [
                { category: "Career", prediction: "Possible minor changes or new projects." },
                { category: "Health", prediction: "Maintain good health routines." },
            ]
        });
        currentAntardashaStartDate = addDays(adEndDate, 1); // Next AD starts day after
    }


    mahadashas.push({
      level: "Mahadasha",
      planetName: planetName,
      startDate: currentStartDate.toISOString(),
      endDate: endDate.toISOString(),
      duration: `${durationYears} Years`,
      generalPrediction: `Placeholder: This is the Mahadasha of ${planetName}. Expect themes related to ${planetName.toLowerCase()}'s significations. For ${name}, this period might bring focus on personal growth and career.`,
      specificPredictions: [
        { category: "Overall", prediction: "A period of significant developments." },
        { category: "Career", prediction: "Opportunities for advancement may arise." },
        { category: "Health", prediction: "Pay attention to well-being." },
      ],
      remedies: [`Chant ${planetName} mantra daily.`, "Perform charity related to this planet."],
      subPeriods: antardashas,
    });
    currentStartDate = addDays(endDate,1); // Next MD starts the day after the previous one ends
  }
  
  return {
    userName: name,
    dashaSystem: "Vimshottari",
    birthNakshatra: "Placeholder Nakshatra (e.g., Ashwini)", // This would be calculated
    periods: mahadashas,
  };
}

export async function getDashaAnalysis(
  prevState: DashaAnalysisFormState,
  formData: FormData
): Promise<DashaAnalysisFormState> {
  const rawFormData = {
    name: formData.get("name"),
    gender: formData.get("gender"),
    dateOfBirth: formData.get("dateOfBirth"),
    timeOfBirth: formData.get("timeOfBirth"),
    placeOfBirth: formData.get("placeOfBirth"),
  };

  const validatedFields = DashaAnalysisServerSchema.safeParse(rawFormData);

  if (!validatedFields.success) {
    const issues = validatedFields.error.issues.map((issue) => `${issue.path.join('.')}: ${issue.message}`);
    return {
      message: "Validation failed. Please check your inputs.",
      issues,
      fields: Object.fromEntries(Object.entries(rawFormData).map(([key, value]) => [key, typeof value === 'string' ? value : ""]))
    };
  }

  try {
    const input: KundliInput = {
      name: validatedFields.data.name,
      gender: validatedFields.data.gender as "male" | "female" | "other",
      dateOfBirth: validatedFields.data.dateOfBirth,
      timeOfBirth: validatedFields.data.timeOfBirth,
      placeOfBirth: validatedFields.data.placeOfBirth,
    };

    // *** This is where you would call your actual Dasha calculation engine ***
    const result = getPlaceholderDashaAnalysis(input);

    if (!result) {
      return { message: "Could not generate Dasha analysis data at this time.", data: null };
    }

    return { message: "success", data: result };

  } catch (error) {
    console.error("Error in Dasha Analysis server action:", error);
    let detailedErrorMessage = "An unknown error occurred during Dasha analysis.";
    if (error instanceof Error) {
      detailedErrorMessage = error.message;
    }
    return { message: `Error: ${detailedErrorMessage}.`, data: null };
  }
}
