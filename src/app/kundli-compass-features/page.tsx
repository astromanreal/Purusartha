
// src/app/kundli-compass-features/page.tsx
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  CardFooter,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Compass as MainCompassIcon,
  BarChartBig, Sparkles as SparklesIcon, CalendarDays, HeartHandshake,
  TrendingUp, Orbit as DashaIcon, Move, Sigma, ArrowRight, Info
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import Link from "next/link";
import type { Metadata } from 'next';
import { APP_NAME } from '@/lib/constants';

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000';

export const metadata: Metadata = {
  title: `Kundli Compass - Advanced Vedic Astrology Tools | ${APP_NAME}`,
  description: `Navigate your cosmic journey with Kundli Compass, the central hub for all advanced Vedic astrology tools in ${APP_NAME}. Explore Kundli creation, matchmaking, forecasts, Panchang, Dasha analysis, transits, and more.`,
  keywords: ['Kundli Compass', 'Vedic Astrology Tools', 'Kundli Generator', 'Matchmaking', 'Horoscope Forecasts', 'Panchang', 'Dasha Analysis', 'Transit Predictions', 'Varshphal', 'Numerology', APP_NAME],
  alternates: {
    canonical: `${BASE_URL}/kundli-compass-features`,
  },
  openGraph: {
    title: `Kundli Compass - Advanced Vedic Astrology Tools | ${APP_NAME}`,
    description: 'Your central hub for advanced Vedic astrology tools: Kundli creation, matchmaking, forecasts, and more.',
    url: `${BASE_URL}/kundli-compass-features`,
    siteName: APP_NAME,
    images: [
      {
        url: `${BASE_URL}/og-images/og-image-kundli-compass.png`, 
        width: 1200,
        height: 630,
        alt: `Kundli Compass - ${APP_NAME}`,
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: `Kundli Compass - Advanced Vedic Astrology Tools | ${APP_NAME}`,
    description: 'Your central hub for advanced Vedic astrology tools: Kundli creation, matchmaking, forecasts, and more.',
    images: [`${BASE_URL}/og-images/og-image-kundli-compass.png`],
  },
};

interface HubFeature {
  id: string;
  title: string;
  icon: LucideIcon;
  description: string;
  href: string;
  badge?: "New" | "Pro" | "Popular";
}

const kundliCompassHubFeatures: HubFeature[] = [
  { 
    id: "kundli-generator", 
    title: "Instant Kundli Creation", 
    icon: BarChartBig, 
    description: "Generate accurate Vedic birth charts (Kundli/Horoscope) with planetary positions, divisional charts, and essential calculations.", 
    href: "/kundli-generator" 
  },
  { 
    id: "vedic-matchmaking", 
    title: "Vedic Matchmaking", 
    icon: HeartHandshake, 
    description: "Detailed Kundli matching for marriage, including Ashtakoot Milan (36 Gunas), Manglik Dosha analysis, and compatibility insights.", 
    href: "/vedic-matchmaking" 
  },
  { 
    id: "horoscope-forecasts", 
    title: "Personalized Horoscope Forecasts", 
    icon: TrendingUp, 
    description: "Receive daily, weekly, and monthly horoscope predictions tailored to your unique birth chart.", 
    href: "/horoscope-forecasts" 
  },
  { 
    id: "panchang", 
    title: "Comprehensive Panchang", 
    icon: CalendarDays, 
    description: "Access daily Panchang details: Tithi, Nakshatra, Yoga, Karana, sunrise/sunset times, Rahu Kaal, and auspicious/inauspicious timings (Muhurta).", 
    href: "/panchang" 
  },
  { 
    id: "dasha-analysis", 
    title: "In-Depth Dasha Analysis", 
    icon: DashaIcon, 
    description: "Explore detailed Vimshottari Dasha and other Dasha system predictions to understand planetary period influences.", 
    href: "/dasha-analysis" 
  },
  { 
    id: "transit-predictions", 
    title: "Real-Time Transit Predictions", 
    icon: Move, 
    description: "Track planetary transits and their impact on your natal chart with real-time updates and interpretations.", 
    href: "/transits" 
  },
  { 
    id: "varshphal", 
    title: "Varshphal (Annual Forecast)", 
    icon: TrendingUp,
    description: "Generate detailed annual horoscope predictions (Tajika Varshphal) for a personalized outlook on the year ahead.", 
    href: "/varshphal" 
  },
  { 
    id: "numerology-insights", 
    title: "Numerology Insights", 
    icon: Sigma, 
    description: "Discover your life path number, destiny number, and name numerology with insightful interpretations.", 
    href: "/numerology-insights" 
  },
];

export default function KundliCompassPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": `Kundli Compass - Advanced Vedic Astrology Tools | ${APP_NAME}`,
    "description": `Navigate your cosmic journey with Kundli Compass, the central hub for all advanced Vedic astrology tools in ${APP_NAME}. Explore Kundli creation, matchmaking, forecasts, Panchang, Dasha analysis, transits, and more.`,
    "url": `${BASE_URL}/kundli-compass-features`,
    "mainEntity": {
      "@type": "ItemList",
      "itemListElement": kundliCompassHubFeatures.map(feature => ({
        "@type": "WebPage",
        "name": feature.title,
        "url": `${BASE_URL}${feature.href}`,
        "description": feature.description
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
    <div className="container mx-auto py-12 px-4">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Card className="shadow-2xl border-primary/20 bg-card">
        <CardHeader className="text-center pb-8">
          <div className="inline-flex items-center justify-center p-4 bg-primary/10 rounded-full mb-6 mx-auto shadow-lg">
            <MainCompassIcon className="h-20 w-20 text-primary" />
          </div>
          <CardTitle className="text-4xl md:text-5xl font-extrabold tracking-tight text-primary mb-3">
            Kundli Compass
          </CardTitle>
          <CardDescription className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Your central hub for all advanced Vedic astrology tools and Kundli-related features. Navigate your cosmic journey with precision and insight.
          </CardDescription>
        </CardHeader>

        <CardContent className="space-y-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {kundliCompassHubFeatures.map((feature) => (
              <Card 
                key={feature.id}
                className="flex flex-col overflow-hidden rounded-xl shadow-xl bg-card/80 border-border/30 hover:shadow-primary/30 transition-all duration-300 ease-in-out transform hover:scale-105 group"
              >
                <CardHeader className="p-6 bg-primary/5">
                  <div className="flex items-center gap-4 mb-3">
                    <div className="p-3 bg-primary/10 text-primary rounded-lg">
                      <feature.icon className="h-8 w-8" />
                    </div>
                    <CardTitle className="text-xl md:text-2xl font-semibold text-primary group-hover:text-accent transition-colors">
                      {feature.title}
                    </CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="p-6 flex-grow flex flex-col">
                  <CardDescription className="text-sm text-muted-foreground mb-6 flex-grow line-clamp-4">
                    {feature.description}
                  </CardDescription>
                  <Button asChild variant="default" className="mt-auto w-full bg-primary hover:bg-primary/90 text-primary-foreground group-hover:bg-accent group-hover:text-accent-foreground transition-colors">
                    <Link href={feature.href}>
                      Explore {feature.title}
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </CardContent>
        <CardFooter className="py-8 text-center block border-t border-primary/10 mt-8">
            <p className="text-sm text-muted-foreground flex items-center justify-center">
                <Info className="h-4 w-4 mr-2 text-muted-foreground/70"/>
                Kundli Compass: Guiding Your Path with Stars. All tools use placeholder calculations for demonstration.
            </p>
        </CardFooter>
      </Card>
    </div>
  );
}

