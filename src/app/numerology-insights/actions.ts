
// "use server"; // This action is no longer used for calculations. Logic moved to client.

// import { z } from "zod";
// import type { NumerologyInput, NumerologyOutput, NumerologyFormState, NumerologyResult, NumerologyNumberType } from "@/types";
// import { format, parseISO } from "date-fns";

// // Schema for validating form data on the server (REDUNDANT if all client-side)
// const NumerologyServerSchema = z.object({
//   fullName: z.string().min(2, "Full name must be at least 2 characters.").max(100)
//     .regex(/^[a-zA-Z\s'-]+$/, "Name can only contain letters, spaces, hyphens, and apostrophes."),
//   dateOfBirth: z.string().datetime({ message: "Valid date of birth is required." }),
// });

// // Placeholder: Pythagorean letter values (REDUNDANT if all client-side)
// const pythagoreanValues: Record<string, number> = {
//   A: 1, J: 1, S: 1,
//   B: 2, K: 2, T: 2,
//   C: 3, L: 3, U: 3,
//   D: 4, M: 4, V: 4,
//   E: 5, N: 5, W: 5,
//   F: 6, O: 6, X: 6,
//   G: 7, P: 7, Y: 7,
//   H: 8, Q: 8, Z: 8,
//   I: 9, R: 9,
// };

// const vowels = "AEIOU";

// // Helper function to reduce a number (REDUNDANT if all client-side)
// function reduceNumber(num: number): number | string {
//   if (num === 11 || num === 22 || num === 33) {
//     return num.toString(); 
//   }
//   let sum = num;
//   while (sum > 9) {
//     sum = String(sum).split('').reduce((acc, digit) => acc + parseInt(digit, 10), 0);
//     if (sum === 11 || sum === 22 || sum === 33) {
//       return sum.toString();
//     }
//   }
//   return sum;
// }

// // Placeholder calculation functions (REDUNDANT if all client-side)
// function calculateLifePathNumber(dob: Date): number | string {
//   const day = dob.getDate();
//   const month = dob.getMonth() + 1;
//   const year = dob.getFullYear();

//   const sumDay = reduceNumber(day);
//   const sumMonth = reduceNumber(month);
//   const sumYear = reduceNumber(year);
  
//   const totalSum = (typeof sumDay === 'string' ? parseInt(sumDay) : sumDay) + 
//                    (typeof sumMonth === 'string' ? parseInt(sumMonth) : sumMonth) + 
//                    (typeof sumYear === 'string' ? parseInt(sumYear) : sumYear);
  
//   return reduceNumber(totalSum);
// }

// function calculateNameNumber(name: string, type: "destiny" | "soulurge" | "personality"): number | string {
//   const upperName = name.toUpperCase().replace(/[^A-Z]/g, "");
//   let sum = 0;

//   for (const char of upperName) {
//     if (type === "soulurge" && !vowels.includes(char)) continue;
//     if (type === "personality" && vowels.includes(char)) continue;
    
//     sum += pythagoreanValues[char] || 0;
//   }
//   return reduceNumber(sum);
// }

// // Placeholder interpretation function (REDUNDANT if all client-side)
// function getPlaceholderInterpretation(number: number | string, type: NumerologyNumberType): NumerologyResult["interpretation"] {
//   const numStr = String(number);
//   return {
//     general: `Placeholder: General interpretation for ${type} number ${numStr}. This number signifies potential for...`,
//     personality: `Placeholder: People with ${type} ${numStr} tend to be intuitive, analytical, and compassionate...`,
//     strengths: ["Placeholder: Strong willpower", "Placeholder: Creative thinking"],
//     weaknesses: ["Placeholder: Can be indecisive", "Placeholder: May overthink"],
//     career: `Placeholder: Careers in teaching, healing, or arts are often suitable for ${type} ${numStr}.`,
//     relationships: `Placeholder: In relationships, ${type} ${numStr} seeks deep connection and understanding.`,
//     spiritual: `Placeholder: Spiritually, ${type} ${numStr} is drawn to paths of wisdom and service.`,
//   };
// }

// // Placeholder function to simulate numerology data generation (REDUNDANT if all client-side)
// function getPlaceholderNumerologyData(input: NumerologyInput): NumerologyOutput {
//   const dob = parseISO(input.dateOfBirth);
  
//   const lifePathNum = calculateLifePathNumber(dob);
//   const destinyNum = calculateNameNumber(input.fullName, "destiny");
//   const soulUrgeNum = calculateNameNumber(input.fullName, "soulurge");
//   const personalityNum = calculateNameNumber(input.fullName, "personality");

//   return {
//     userName: input.fullName,
//     dateOfBirth: input.dateOfBirth,
//     lifePath: { type: "Life Path", number: lifePathNum, interpretation: getPlaceholderInterpretation(lifePathNum, "Life Path") },
//     destinyNumber: { type: "Destiny", number: destinyNum, interpretation: getPlaceholderInterpretation(destinyNum, "Destiny") },
//     soulUrgeNumber: { type: "Soul Urge", number: soulUrgeNum, interpretation: getPlaceholderInterpretation(soulUrgeNum, "Soul Urge") },
//     personalityNumber: { type: "Personality", number: personalityNum, interpretation: getPlaceholderInterpretation(personalityNum, "Personality") },
//   };
// }

// export async function getNumerologyInsights(
//   prevState: NumerologyFormState,
//   formData: FormData
// ): Promise<NumerologyFormState> {
//   // This server action is now deprecated as calculations are done client-side.
//   // Returning a simple message or error.
//   return {
//     message: "This server action is deprecated. Numerology calculations are performed client-side.",
//     issues: ["Server action called for client-side feature."],
//     data: null,
//   };
// }

// --- DEPRECATED ---
// The logic from this file has been moved to the client-side component
// `src/app/numerology-insights/page.tsx` for instant calculations.
// This server action is no longer in use for the Numerology Insights feature.
// It is kept here (commented out) for historical reference but should not be called.
// Please ensure the frontend form submits to its client-side handler.
// --- END DEPRECATED ---

export {}; // Add an empty export to make this a module if all content is commented out
