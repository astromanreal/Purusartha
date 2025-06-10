
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import type { Metadata } from 'next';
import { Button } from "@/components/ui/button";
import { PartyPopper, CalendarIcon, MoonIcon, SunIcon, Landmark, ArrowLeftCircle } from "lucide-react"; 
import { hinduFestivalsData } from "@/data/festivals";
import { jagannathaTempleFestivalsData } from "@/data/jagannatha-festivals";
import type { HinduFestival } from "@/types";
import { APP_NAME } from "@/lib/constants";

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000';

export const metadata: Metadata = {
  title: `Hindu Festivals - Celebrations, Rituals & Significance | ${APP_NAME}`,
  description: `Explore the vibrant tapestry of Hindu festivals with ${APP_NAME}. Learn about important celebrations like Diwali, Holi, Navaratri, Ganesh Chaturthi, and special Jagannatha Temple, Puri festivals, including their dates, rituals, and significance.`,
  keywords: ['Hindu Festivals', 'Diwali', 'Holi', 'Navaratri', 'Ganesh Chaturthi', 'Rama Navami', 'Janmashtami', 'Maha Shivaratri', 'Jagannatha Festivals', 'Ratha Yatra', 'Indian Festivals', 'Vedic Festivals', APP_NAME],
  alternates: {
    canonical: `${BASE_URL}/hindu-festivals`,
  },
  openGraph: {
    title: `Hindu Festivals - Celebrations, Rituals & Significance | ${APP_NAME}`,
    description: 'Explore the vibrant tapestry of Hindu festivals, their stories, rituals, timings, and spiritual importance with SanatanSphere.',
    url: `${BASE_URL}/hindu-festivals`,
    siteName: APP_NAME,
    images: [
      {
        url: `${BASE_URL}/og-images/og-image-hindu-festivals.png`, // Specific OG image
        width: 1200,
        height: 630,
        alt: `Hindu Festivals - ${APP_NAME}`,
      },
    ],
    type: 'article',
    article: {
      section: "Hindu Culture & Traditions",
      tags: ['Hindu Festivals', 'Indian Festivals', 'Diwali', 'Holi', 'Navaratri', APP_NAME],
    }
  },
  twitter: {
    card: 'summary_large_image',
    title: `Hindu Festivals - Celebrations, Rituals & Significance | ${APP_NAME}`,
    description: 'Explore the vibrant tapestry of Hindu festivals, their stories, rituals, and timings.',
    images: [`${BASE_URL}/og-images/og-image-hindu-festivals.png`],
  },
};

export default function HinduFestivalsPage() {
  const allFestivals = [...hinduFestivalsData, ...jagannathaTempleFestivalsData];
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage", // Or EventSeries if focusing on the collection of events
    "name": metadata.title as string,
    "description": metadata.description as string,
    "url": `${BASE_URL}/hindu-festivals`,
    "mainEntity": {
      "@type": "ItemList",
      "itemListElement": allFestivals.map((festival, index) => ({
        "@type": "Event", // Could also be ListItem containing an Event
        "name": festival.name,
        "description": festival.description || `Learn about the Hindu festival ${festival.name}, its tithi, paksha, and masa.`,
        // "startDate": "YYYY-MM-DD", // Placeholder, actual dates vary yearly
        // "endDate": "YYYY-MM-DD",   // Placeholder
        "eventAttendanceMode": "https://schema.org/MixedEventAttendanceMode", // Or OfflineEventAttendanceMode
        "eventStatus": "https://schema.org/EventScheduled",
        "location": {
          "@type": "Place",
          "name": "India (general) / Puri (for Jagannatha festivals)",
          "address": "India"
        },
        // "image": `${BASE_URL}/og-images/og-image-festival-${festival.id}.png`, // If specific images exist
        "organizer": {
          "@type": "Organization",
          "name": APP_NAME
        }
      }))
    },
    "publisher": {
      "@type": "Organization",
      "name": APP_NAME,
      "logo": {
        "@type": "ImageObject",
        "url": `${BASE_URL}/logo-icon.png`
      }
    }
  };

  return (
    <div className="container mx-auto py-8">
       <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <header id="all-hindu-festivals" className="mb-12 text-center scroll-mt-20">
        <div className="inline-flex items-center justify-center p-3 bg-primary/10 rounded-full mb-4 mx-auto">
          <PartyPopper className="h-16 w-16 text-primary" />
        </div>
        <h1 className="text-4xl font-bold tracking-tight text-primary">Hindu Festivals</h1>
        <p className="mt-2 text-xl text-muted-foreground">
          Explore the vibrant tapestry of Hindu celebrations and their significance.
        </p>
        <div className="mt-6">
          <Button asChild variant="outline" size="lg" className="bg-primary/10 hover:bg-primary/20 text-primary hover:text-accent-foreground border-primary/30">
            <a href="#jagannatha-temple-festivals">
              <Landmark className="mr-2 h-5 w-5" /> 
              Explore Jagannatha Temple, Puri Festivals
            </a>
          </Button>
        </div>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {hinduFestivalsData.map((festival: HinduFestival) => (
          <Card 
            key={festival.id} 
            className="flex flex-col overflow-hidden shadow-lg hover:shadow-primary/30 hover:shadow-xl transform hover:scale-105 transition-all duration-300 ease-in-out bg-card"
          >
            <CardHeader className="pb-3">
              <CardTitle className="text-2xl font-semibold text-primary flex items-center">
                <CalendarIcon className="mr-3 h-6 w-6 text-primary/80" />
                {festival.name}
              </CardTitle>
              {festival.description && (
                <CardDescription className="text-sm text-muted-foreground pt-1">
                  {festival.description}
                </CardDescription>
              )}
            </CardHeader>
            <CardContent className="flex-grow space-y-3 pt-0">
              {(festival.masaAmanta || festival.masaPurnimanta) && (
                <div>
                  <h4 className="text-sm font-medium text-foreground/80 mb-1">Māsa (Month)</h4>
                  {festival.masaAmanta && <p className="text-sm text-muted-foreground"><span className="font-semibold">Amānta:</span> {festival.masaAmanta}</p>}
                  {festival.masaPurnimanta && <p className="text-sm text-muted-foreground"><span className="font-semibold">Pūrṇimānta:</span> {festival.masaPurnimanta}</p>}
                </div>
              )}
              {festival.paksa && (
                <div>
                  <h4 className="text-sm font-medium text-foreground/80 mb-1 flex items-center">
                    {festival.paksa.toLowerCase().includes('śukla') ? 
                        <SunIcon className="mr-2 h-4 w-4 text-yellow-500" /> : 
                        <MoonIcon className="mr-2 h-4 w-4 text-blue-300" />
                    }
                    Pakṣa (Lunar Fortnight)
                  </h4>
                  <p className="text-sm text-muted-foreground">{festival.paksa}</p>
                </div>
              )}
              {festival.tithi && (
                <div>
                  <h4 className="text-sm font-medium text-foreground/80 mb-1">Tithi (Lunar Day)</h4>
                  <p className="text-sm text-muted-foreground">{festival.tithi}</p>
                </div>
              )}
              {!festival.masaAmanta && !festival.paksa && !festival.tithi && !festival.description && (
                 <p className="text-sm text-muted-foreground italic">Detailed timings vary or are not specified.</p>
              )}
            </CardContent>
          </Card>
        ))}
      </div>

      <section id="jagannatha-temple-festivals" className="mt-20 pt-12 border-t border-primary/20 scroll-mt-20">
        <header className="mb-12 text-center">
          <div className="inline-flex items-center justify-center p-3 bg-primary/10 rounded-full mb-4 mx-auto">
            <Landmark className="h-16 w-16 text-primary" /> 
          </div>
          <h2 className="text-3xl font-bold tracking-tight text-primary">
            Festivals at Jagannatha Temple, Puri
          </h2>
          <p className="mt-2 text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover the unique and vibrant celebrations held exclusively at the revered Jagannatha Temple in Puri, Odisha.
          </p>
          <div className="mt-6">
            <Button asChild variant="outline" size="lg" className="bg-primary/10 hover:bg-primary/20 text-primary hover:text-accent-foreground border-primary/30">
              <a href="#all-hindu-festivals">
                <ArrowLeftCircle className="mr-2 h-5 w-5" /> 
                Explore All Hindu Festivals
              </a>
            </Button>
          </div>
        </header>

        {jagannathaTempleFestivalsData.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {jagannathaTempleFestivalsData.map((festival: HinduFestival) => (
              <Card
                key={festival.id}
                className="flex flex-col overflow-hidden shadow-lg hover:shadow-primary/30 hover:shadow-xl transform hover:scale-105 transition-all duration-300 ease-in-out bg-card"
              >
                <CardHeader className="pb-3">
                  <CardTitle className="text-2xl font-semibold text-primary flex items-center">
                    {festival.name}
                  </CardTitle>
                  {festival.description && (
                    <CardDescription className="text-sm text-muted-foreground pt-1 h-20 overflow-y-auto"> 
                      {festival.description}
                    </CardDescription>
                  )}
                </CardHeader>
                <CardContent className="flex-grow space-y-3 pt-0">
                  {(festival.masaAmanta || festival.masaPurnimanta) && (
                    <div>
                      <h4 className="text-sm font-medium text-foreground/80 mb-1">Māsa (Month)</h4>
                      {festival.masaAmanta && <p className="text-sm text-muted-foreground"><span className="font-semibold">Amānta:</span> {festival.masaAmanta}</p>}
                      {festival.masaPurnimanta && <p className="text-sm text-muted-foreground"><span className="font-semibold">Pūrṇimānta:</span> {festival.masaPurnimanta}</p>}
                    </div>
                  )}
                  {festival.paksa && (
                    <div>
                      <h4 className="text-sm font-medium text-foreground/80 mb-1 flex items-center">
                        {festival.paksa.toLowerCase().includes('śukla') ? 
                            <SunIcon className="mr-2 h-4 w-4 text-yellow-500" /> : 
                            <MoonIcon className="mr-2 h-4 w-4 text-blue-300" />
                        }
                        Pakṣa (Lunar Fortnight)
                      </h4>
                      <p className="text-sm text-muted-foreground">{festival.paksa}</p>
                    </div>
                  )}
                  {festival.tithi && (
                    <div>
                      <h4 className="text-sm font-medium text-foreground/80 mb-1">Tithi (Lunar Day)</h4>
                      <p className="text-sm text-muted-foreground">{festival.tithi}</p>
                    </div>
                  )}
                  {!festival.masaAmanta && !festival.paksa && !festival.tithi && festival.description && !festival.description.includes("Typically fixed by solar calendar") && !festival.description.includes("Occurs when there is an extra") && (
                     <p className="text-sm text-muted-foreground italic">Specific calendar details may vary or are part of traditional temple almanacs.</p>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        ) : (
          <p className="col-span-full text-center text-muted-foreground text-lg py-8">
            Information on Jagannatha Temple festivals is being curated and will be available soon.
          </p>
        )}
      </section>

       <footer className="mt-20 text-center border-t border-primary/20 pt-8">
        <p className="text-sm text-muted-foreground">
          Festival dates and timings can vary based on regional calendars and Panchang. Always consult a trusted local source for precise information.
        </p>
      </footer>
    </div>
  );
}

