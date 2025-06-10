// src/app/api/kundli-proxy/route.ts
import { NextResponse, type NextRequest } from 'next/server';
import type { KundliInput, KundliOutput, PlanetaryPosition, DashaInfo } from '@/types';
import { format } from 'date-fns';

// Helper function to generate placeholder Kundli data, simulating an API response
function getSimulatedProkeralaData(input: KundliInput): KundliOutput {
  const rashis = ["Aries", "Taurus", "Gemini", "Cancer", "Leo", "Virgo", "Libra", "Scorpio", "Sagittarius", "Capricorn", "Aquarius", "Pisces"];
  const nakshatras = ["Ashwini", "Bharani", "Krittika", "Rohini", "Mrigashira", "Ardra", "Punarvasu", "Pushya", "Ashlesha", "Magha", "Purva Phalguni", "Uttara Phalguni", "Hasta", "Chitra", "Swati", "Vishakha", "Anuradha", "Jyeshtha", "Mula", "Purva Ashadha", "Uttara Ashadha", "Shravana", "Dhanishta", "Shatabhisha", "Purva Bhadrapada", "Uttara Bhadrapada", "Revati"];
  const planets = ["Sun", "Moon", "Mars", "Mercury", "Jupiter", "Venus", "Saturn", "Rahu", "Ketu", "Lagna"]; // Added Lagna as a "planet" for position

  const getRandomElement = <T,>(arr: T[]): T => arr[Math.floor(Math.random() * arr.length)];
  const getRandomDegrees = () => `${Math.floor(Math.random() * 30)}°${Math.floor(Math.random() * 60)}'${Math.floor(Math.random() * 60)}"`;

  const planetaryPositions: PlanetaryPosition[] = planets.map(planet => ({
    planet,
    sign: getRandomElement(rashis),
    degrees: getRandomDegrees(),
    isRetrograde: planet !== "Rahu" && planet !== "Ketu" && planet !== "Lagna" && Math.random() < 0.15,
    house: Math.floor(Math.random() * 12) + 1, // Placeholder house position
  }));

  const dashaInfo: DashaInfo = {
    mahadasha: getRandomElement(planets.filter(p => p !== "Lagna")),
    mahadashaLord: getRandomElement(planets.filter(p => p !== "Lagna")),
    antardasha: getRandomElement(planets.filter(p => p !== "Lagna")),
    antardashaLord: getRandomElement(planets.filter(p => p !== "Lagna")),
    pratyantardasha: getRandomElement(planets.filter(p => p !== "Lagna")),
    pratyantardashaLord: getRandomElement(planets.filter(p => p !== "Lagna")),
    startDate: format(new Date(new Date().getFullYear() - Math.floor(Math.random() * 5) -1, Math.floor(Math.random() * 12), Math.floor(Math.random() * 28) + 1), "yyyy-MM-dd"),
    endDate: format(new Date(new Date().getFullYear() + Math.floor(Math.random() * 3) + 1, Math.floor(Math.random() * 12), Math.floor(Math.random() * 28) + 1), "yyyy-MM-dd")
  };
  
  const dobDate = new Date(input.dateOfBirth);

  return {
    name: input.name,
    dateOfBirth: format(dobDate, "PPP"),
    timeOfBirth: input.timeOfBirth,
    placeOfBirth: input.placeOfBirth, // In a real scenario, this would be enriched with lat/long/timezone
    lagna: planetaryPositions.find(p => p.planet === "Lagna")?.sign || getRandomElement(rashis),
    lagnaLord: getRandomElement(planets.filter(p => p !== "Lagna")),
    rashi: planetaryPositions.find(p => p.planet === "Moon")?.sign || getRandomElement(rashis),
    rashiLord: getRandomElement(planets.filter(p => p !== "Lagna")),
    nakshatra: getRandomElement(nakshatras),
    nakshatraPada: Math.floor(Math.random() * 4) + 1,
    nakshatraLord: getRandomElement(planets.filter(p => p !== "Lagna")),
    tithi: "Placeholder Tithi (e.g., Shukla Dashami)",
    karana: "Placeholder Karana (e.g., Vanija)",
    yoga: "Placeholder Yoga (e.g., Siddhi)",
    sunrise: "06:00 AM (Placeholder)",
    sunset: "06:30 PM (Placeholder)",
    manglikAnalysis: {
        isManglik: Math.random() < 0.3,
        description: Math.random() < 0.3 ? "Mild Manglik dosha detected. Consult astrologer." : "No significant Manglik dosha.",
        basedOn: "Moon Chart (Placeholder)",
    },
    currentDasha: dashaInfo,
    planetaryPositions: planetaryPositions,
    // Placeholder for other charts until API integration
    lagnaChartSVG: "<svg width='100' height='100'><rect width='100' height='100' style='fill:rgb(230,230,230);stroke-width:1;stroke:rgb(0,0,0)' /><text x='10' y='50' fill='black'>Lagna Chart</text></svg>",
    moonChartSVG: "<svg width='100' height='100'><rect width='100' height='100' style='fill:rgb(230,230,230);stroke-width:1;stroke:rgb(0,0,0)' /><text x='10' y='50' fill='black'>Moon Chart</text></svg>",
    navamsaChartSVG: "<svg width='100' height='100'><rect width='100' height='100' style='fill:rgb(230,230,230);stroke-width:1;stroke:rgb(0,0,0)' /><text x='10' y='50' fill='black'>Navamsa Chart</text></svg>",
  };
}


export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, gender, dateOfBirth, timeOfBirth, placeOfBirth } = body;

    // Basic validation (more robust validation should be done)
    if (!name || !gender || !dateOfBirth || !timeOfBirth || !placeOfBirth) {
      return NextResponse.json({ message: "Missing required birth details." }, { status: 400 });
    }
    
    // Construct KundliInput for the placeholder or future API call
    const kundliInput: KundliInput = {
        name,
        gender,
        dateOfBirth, // Expected ISO string
        timeOfBirth,
        placeOfBirth // In a real scenario, this needs to be converted to lat/long/timezone
    };

    // --- START PROKERALA API INTEGRATION (Placeholder) ---
    // In a real application, you would:
    // 1. Get PROKERALA_CLIENT_ID and PROKERALA_CLIENT_SECRET from environment variables.
    //    const clientId = process.env.PROKERALA_CLIENT_ID;
    //    const clientSecret = process.env.PROKERALA_CLIENT_SECRET;
    //
    // 2. Implement OAuth2 to get an access token from Prokerala.
    //    This typically involves a POST request to Prokerala's token endpoint.
    //    const tokenResponse = await fetch("PROKERALA_TOKEN_ENDPOINT", {
    //      method: "POST",
    //      headers: { "Content-Type": "application/x-www-form-urlencoded" },
    //      body: new URLSearchParams({
    //        grant_type: "client_credentials",
    //        client_id: clientId,
    //        client_secret: clientSecret,
    //      }),
    //    });
    //    const tokenData = await tokenResponse.json();
    //    const accessToken = tokenData.access_token;
    //
    // 3. Use the accessToken to call the Prokerala Kundli API endpoint.
    //    You'll need to parse `placeOfBirth` to get latitude, longitude, and timezone.
    //    Prokerala likely has a geo-location API or expects these directly.
    //    For example (pseudo-code):
    //    const { latitude, longitude, timezone } = await getGeoCoordinates(placeOfBirth);
    //
    //    const prokeralaResponse = await fetch(`PROKERALA_KUNDLI_API_ENDPOINT?dob=${dateOfBirth}&tob=${timeOfBirth}&lat=${latitude}&lon=${longitude}&tz=${timezone}`, {
    //      headers: { "Authorization": `Bearer ${accessToken}` },
    //    });
    //    const prokeralaKundliData = await prokeralaResponse.json();
    //
    // 4. Transform `prokeralaKundliData` into your `KundliOutput` structure.
    //    This will involve mapping fields from Prokerala's response to your defined types.
    //
    // 5. Return the transformed data.
    //    return NextResponse.json(transformedData, { status: 200 });
    // --- END PROKERALA API INTEGRATION (Placeholder) ---

    // For now, returning simulated data:
    const simulatedData = getSimulatedProkeralaData(kundliInput);
    return NextResponse.json(simulatedData, { status: 200 });

  } catch (error) {
    console.error("Error in /api/kundli-proxy:", error);
    // @ts-ignore
    const errorMessage = error.message || "An unexpected error occurred on the server.";
    return NextResponse.json({ message: `Server error: ${errorMessage}` }, { status: 500 });
  }
}
