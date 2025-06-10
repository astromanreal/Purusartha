
"use server";

import type { PanchangOutput } from "@/types";
import { z } from "zod";
import { format, addHours, addMinutes, subMinutes } from "date-fns";

const PanchangInputSchema = z.object({
  date: z.string().datetime(), // Expect ISO string
  location: z.string().min(2, { message: "Location must be at least 2 characters."}).max(100),
});

export interface PanchangFormState {
  message: string | null;
  issues?: string[];
  data?: PanchangOutput | null;
}

// Placeholder function to simulate Panchang data generation
// In a real application, this would involve complex astrological calculations
// using user's latitude/longitude and precise ephemeris data.
async function generatePlaceholderPanchang(
  date: Date,
  location: string
): Promise<PanchangOutput> {
  // Simulate delay
  await new Promise(resolve => setTimeout(resolve, 700));

  const tithis = ["Prathama", "Dwitiya", "Tritiya", "Chaturthi", "Panchami", "Shashthi", "Saptami", "Ashtami", "Navami", "Dashami", "Ekadashi", "Dwadashi", "Trayodashi", "Chaturdashi", "Purnima", "Amavasya"];
  const nakshatras = ["Ashwini", "Bharani", "Krittika", "Rohini", "Mrigashira", "Ardra", "Punarvasu", "Pushya", "Ashlesha", "Magha", "Purva Phalguni", "Uttara Phalguni", "Hasta", "Chitra", "Swati", "Vishakha", "Anuradha", "Jyeshtha", "Mula", "Purva Ashadha", "Uttara Ashadha", "Shravana", "Dhanishta", "Shatabhisha", "Purva Bhadrapada", "Uttara Bhadrapada", "Revati"];
  const yogas = ["Vishkambha", "Priti", "Ayushman", "Saubhagya", "Shobhana", "Atiganda", "Sukarman", "Dhriti", "Shula", "Ganda", "Vriddhi", "Dhruva", "Vyaghata", "Harshana", "Vajra", "Siddhi", "Vyatipata", "Variyana", "Parigha", "Shiva", "Siddha", "Sadhya", "Shubha", "Shukla", "Brahma", "Indra", "Vaidhriti"];
  const karanas = ["Bava", "Balava", "Kaulava", "Taitila", "Garaja", "Vanija", "Vishti (Bhadra)", "Shakuni", "Chatushpada", "Naga", "Kimstughna"];
  const ritu = ["Vasant (Spring)", "Grishma (Summer)", "Varsha (Monsoon)", "Sharad (Autumn)", "Hemant (Pre-winter)", "Shishir (Winter)"];
  const lunarMonths = ["Chaitra", "Vaishakha", "Jyeshtha", "Ashadha", "Shravana", "Bhadrapada", "Ashwina", "Kartika", "Margashirsha", "Pausha", "Magha", "Phalguna"];
  const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

  const getRandomItem = <T,>(arr: T[]): T => arr[Math.floor(Math.random() * arr.length)];
  const getEndTime = (baseTime: Date, plusHours: number, plusMinutes: number) => format(addMinutes(addHours(baseTime, plusHours), plusMinutes), "HH:mm");

  const sunriseTime = new Date(date);
  sunriseTime.setHours(6, 0, 0, 0); // Placeholder sunrise
  const sunsetTime = new Date(date);
  sunsetTime.setHours(18, 30, 0, 0); // Placeholder sunset

  const moonriseTime = new Date(date); // Placeholder
  moonriseTime.setHours(Math.random() > 0.5 ? 19 : 7, Math.floor(Math.random() * 60));
  const moonsetTime = new Date(date); // Placeholder
  moonsetTime.setHours(Math.random() > 0.5 ? 5 : 17, Math.floor(Math.random() * 60));


  return {
    date: date.toISOString(),
    location: location,
    sunrise: format(sunriseTime, "HH:mm aa"),
    sunset: format(sunsetTime, "HH:mm aa"),
    moonrise: format(moonriseTime, "HH:mm aa"),
    moonset: format(moonsetTime, "HH:mm aa"),
    tithi: { name: getRandomItem(tithis), endsAt: getEndTime(date, Math.floor(Math.random() * 20) + 2, Math.floor(Math.random() * 60)) },
    nakshatra: { name: getRandomItem(nakshatras), endsAt: getEndTime(date, Math.floor(Math.random() * 22) + 1, Math.floor(Math.random() * 60)) },
    yoga: { name: getRandomItem(yogas), endsAt: getEndTime(date, Math.floor(Math.random() * 18) + 3, Math.floor(Math.random() * 60)) },
    karana: { name: getRandomItem(karanas), endsAt: getEndTime(date, Math.floor(Math.random() * 10) + 1, Math.floor(Math.random() * 60)) },
    paksha: Math.random() > 0.5 ? "Shukla Paksha" : "Krishna Paksha",
    ritu: getRandomItem(ritu),
    lunarMonthPurnimanta: getRandomItem(lunarMonths),
    lunarMonthAmanta: getRandomItem(lunarMonths),
    vikramSamvat: 2080 + date.getFullYear() - 2023, // Approximate
    shakaSamvat: 1945 + date.getFullYear() - 2023,  // Approximate
    dayOfWeek: days[date.getDay()],
    rahukaal: { start: format(addHours(sunriseTime, 1.5 * (date.getDay() || 7) - 1.5), "HH:mm"), end: format(addHours(sunriseTime, 1.5 * (date.getDay() || 7)), "HH:mm") }, // Simplified placeholder
    yamaganda: { start: format(subMinutes(sunriseTime, (date.getDay() * -90) + 450), "HH:mm"), end: format(subMinutes(sunriseTime, (date.getDay() * -90) + 360), "HH:mm") }, // Simplified placeholder
    gulikaKaal: { start: format(addMinutes(sunriseTime, (date.getDay() * 90)), "HH:mm"), end: format(addMinutes(sunriseTime, (date.getDay() * 90) + 90), "HH:mm") }, // Simplified placeholder
    abhijitMuhurat: { start: "11:45", end: "12:30" }, // Placeholder
    durMuhurat: [{ start: "10:00", end: "10:45" }, { start: "15:00", end: "15:45" }], // Placeholder
    shubhMuhuratNotes: ["Good for starting new tasks after 10 AM.", "Auspicious for spiritual activities in the evening."],
    asubhMuhuratNotes: ["Avoid major decisions during Rahu Kaal.", "Exercise caution between 3 PM and 4 PM."],
    moonPhaseVisual: Math.random() > 0.5 ? "Waxing Gibbous" : "Waning Crescent", // Placeholder string
    dailyMantra: "Om Namah Shivaya",
    additionalNotes: "This is placeholder Panchang data. Consult a professional for accurate calculations."
  };
}

export async function getPanchangDetails(
  prevState: PanchangFormState,
  formData: FormData
): Promise<PanchangFormState> {
  const rawFormData = {
    date: formData.get("date"),
    location: formData.get("location"),
  };

  const validatedFields = PanchangInputSchema.safeParse(rawFormData);

  if (!validatedFields.success) {
    const issues = validatedFields.error.issues.map((issue) => `${issue.path.join('.')}: ${issue.message}`);
    return {
      message: "Validation failed. Please check your inputs.",
      issues,
      data: null,
    };
  }

  try {
    const { date: dateString, location } = validatedFields.data;
    const date = new Date(dateString);

    const panchangData = await generatePlaceholderPanchang(date, location);

    if (!panchangData) {
      return { message: "Could not generate Panchang data at this time.", data: null };
    }

    return { message: "success", data: panchangData };

  } catch (error) {
    console.error("Error in getPanchangDetails server action:", error);
    let detailedErrorMessage = "An unknown error occurred while generating Panchang.";
    if (error instanceof Error) {
      detailedErrorMessage = error.message;
    }
    return { message: `Error: ${detailedErrorMessage}.`, data: null };
  }
}
