
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import type { Metadata } from 'next';
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { rashiData } from "@/data/rashi-data";
import type { Rashi } from "@/types";
import { Star, Flame, Mountain, Wind, Droplets, Shield, Heart, MessageSquare, Moon, Sun, GraduationCap, Hourglass, Sparkles, Users, Gem, Palette as PaletteIcon, Hash, AlignLeft, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { APP_NAME } from "@/lib/constants";

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000';

export const metadata: Metadata = {
  title: `Rashis (Vedic Zodiac Signs) - Traits & Significance | ${APP_NAME}`,
  description: `Explore the twelve Rashis (Zodiac Signs) in Vedic astrology with ${APP_NAME}. Learn about their symbols, elements, ruling planets, key traits, lucky colors, numbers, gemstones, and compatibility. Understand their influence on personality and life path.`,
  keywords: ['Rashis', 'Vedic Zodiac Signs', 'Hindu Astrology Signs', 'Aries', 'Taurus', 'Gemini', 'Cancer', 'Leo', 'Virgo', 'Libra', 'Scorpio', 'Sagittarius', 'Capricorn', 'Aquarius', 'Pisces', 'Jyotish Signs', APP_NAME],
  alternates: {
    canonical: `${BASE_URL}/rashis`,
  },
  openGraph: {
    title: `Rashis (Vedic Zodiac Signs) - Traits & Significance | ${APP_NAME}`,
    description: 'Explore the twelve Rashis in Vedic astrology: symbols, elements, ruling planets, key traits, and more. Understand their influence on personality and life paths.',
    url: `${BASE_URL}/rashis`,
    siteName: APP_NAME,
    images: [
      {
        url: `${BASE_URL}/og-images/og-image-rashis-list.png`, 
        width: 1200,
        height: 630,
        alt: `Vedic Zodiac Signs (Rashis) - ${APP_NAME}`,
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: `Rashis (Vedic Zodiac Signs) - Traits & Significance | ${APP_NAME}`,
    description: 'Explore the twelve Rashis in Vedic astrology: symbols, elements, ruling planets, key traits, and more.',
    images: [`${BASE_URL}/og-images/og-image-rashis-list.png`],
  },
};

const ElementIcon = ({ element }: { element: Rashi["element"] }) => {
  switch (element) {
    case "Fire":
      return <Flame className="h-5 w-5 text-red-500" />;
    case "Earth":
      return <Mountain className="h-5 w-5 text-green-700" />;
    case "Air":
      return <Wind className="h-5 w-5 text-blue-400" />;
    case "Water":
      return <Droplets className="h-5 w-5 text-sky-500" />;
    default:
      return <Sparkles className="h-5 w-5 text-muted-foreground" />;
  }
};

const PlanetIcon = ({ planet }: { planet: Rashi["planet"] }) => {
  const primaryPlanet = planet.split('(')[0].trim().split(' ')[0];
  switch (primaryPlanet.toLowerCase()) {
    case "mars":
      return <Shield className="h-5 w-5 text-red-600" />;
    case "venus":
      return <Heart className="h-5 w-5 text-pink-500" />;
    case "mercury":
      return <MessageSquare className="h-5 w-5 text-yellow-500" />;
    case "moon":
      return <Moon className="h-5 w-5 text-slate-400" />;
    case "sun":
      return <Sun className="h-5 w-5 text-orange-500" />;
    case "jupiter":
      return <GraduationCap className="h-5 w-5 text-purple-500" />;
    case "saturn":
      return <Hourglass className="h-5 w-5 text-gray-600" />;
    default:
      return <Sparkles className="h-5 w-5 text-muted-foreground" />;
  }
};

export default function RashisPage() {
  const rashisListJsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": metadata.title as string,
    "description": metadata.description as string,
    "url": `${BASE_URL}/rashis`,
    "mainEntity": {
      "@type": "ItemList",
      "itemListElement": rashiData.rashis.map((rashi, index) => ({
        "@type": "ListItem",
        "position": index + 1,
        "item": {
          "@type": "WebPage", 
          "name": `${rashi.rashi_name_english} (${rashi.rashi_name_hindi}) - Vedic Zodiac Sign`,
          "url": `${BASE_URL}/rashis/${rashi.id}`,
          "description": `Learn about ${rashi.rashi_name_english}: its symbol ${rashi.symbol}, element ${rashi.element}, and ruling planet ${rashi.planet}.`
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
    <div className="container mx-auto py-12 px-4">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(rashisListJsonLd) }}
      />
      <header className="mb-12 text-center">
        <div className="inline-flex items-center justify-center p-4 bg-primary/10 rounded-full mb-6 mx-auto shadow-lg">
          <Star className="h-20 w-20 text-primary" />
        </div>
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-primary mb-4">
          Discover the Rashis (Zodiac Signs)
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
          Explore the twelve zodiac signs (Rashis) in Vedic astrology, their characteristics, ruling planets, elements, and more. Understand their influence on personality and life path.
        </p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {rashiData.rashis.map((rashi) => (
          <Link key={rashi.id} href={`/rashis/${rashi.id}`} className="block h-full group">
            <Card
              className="flex flex-col overflow-hidden shadow-xl rounded-lg border-border/30 hover:shadow-primary/30 transition-all duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-[1.03] bg-card group h-full"
            >
              <CardHeader className="pb-4 bg-gradient-to-br from-primary/5 via-card to-accent/5">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center">
                    {rashi.symbolImage && <span className="text-3xl mr-2" role="img" aria-label={rashi.symbol}>{rashi.symbolImage}</span>}
                    <CardTitle className="text-xl font-bold text-primary group-hover:text-accent transition-colors">
                      {rashi.rashi_name_english}
                      <span className="block text-base font-normal text-muted-foreground group-hover:text-accent/80 transition-colors">
                        ({rashi.rashi_name_hindi})
                      </span>
                    </CardTitle>
                  </div>
                  <Badge variant="outline" className="text-xs border-primary/50 text-primary bg-primary/10 group-hover:bg-accent group-hover:text-accent-foreground group-hover:border-accent/70">
                    {rashi.symbol}
                  </Badge>
                </div>
                <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                  <div className="flex items-center" title={`Element: ${rashi.element}`}>
                    <ElementIcon element={rashi.element} /> <span className="ml-1.5">{rashi.element}</span>
                  </div>
                  <div className="flex items-center" title={`Ruling Planet: ${rashi.planet}`}>
                    <PlanetIcon planet={rashi.planet} /> <span className="ml-1.5">{rashi.planet.split(' ')[0]}</span>
                  </div>
                  <div title={`Quality: ${rashi.quality}`}>
                    <Badge variant="secondary" className="font-medium">{rashi.quality}</Badge>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="flex-grow p-5 space-y-4">
                <div>
                  <h4 className="text-sm font-semibold text-accent mb-1.5 flex items-center"><AlignLeft className="h-4 w-4 mr-2"/>Key Traits:</h4>
                  <div className="flex flex-wrap gap-1.5">
                    {rashi.key_traits.slice(0, 3).map((trait) => ( 
                      <Badge key={trait} variant="outline" className="text-xs font-normal border-muted-foreground/30 text-muted-foreground group-hover:border-accent/50 group-hover:text-accent/90">{trait}</Badge>
                    ))}
                    {rashi.key_traits.length > 3 && <Badge variant="outline" className="text-xs font-normal border-muted-foreground/30 text-muted-foreground group-hover:border-accent/50 group-hover:text-accent/90">...</Badge>}
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-x-4 gap-y-2 text-sm">
                  <div className="flex items-center" title={`Lucky Color: ${rashi.lucky_color}`}>
                    <PaletteIcon className="h-4 w-4 mr-2 text-primary/70" />
                    <span className="font-medium text-foreground/80">Color:</span>
                    <span style={{ backgroundColor: rashi.lucky_color.split(',')[0].trim().toLowerCase() }} className="ml-1.5 w-3 h-3 rounded-full border border-border inline-block"></span>
                    <span className="ml-1 text-muted-foreground truncate">{rashi.lucky_color.split(',')[0].trim()}</span>
                  </div>
                   <div className="flex items-center" title={`Lucky Number: ${rashi.lucky_number}`}>
                    <Hash className="h-4 w-4 mr-2 text-primary/70" />
                    <span className="font-medium text-foreground/80">Number:</span>
                    <span className="ml-1.5 text-muted-foreground">{rashi.lucky_number}</span>
                  </div>
                   <div className="flex items-center" title={`Ruling Deity: ${rashi.ruling_deity}`}>
                    <Sparkles className="h-4 w-4 mr-2 text-primary/70" />
                    <span className="font-medium text-foreground/80">Deity:</span>
                    <span className="ml-1.5 text-muted-foreground truncate">{rashi.ruling_deity.split('(')[0].trim()}</span>
                  </div>
                  <div className="flex items-center" title={`Gemstone: ${rashi.gemstone}`}>
                    <Gem className="h-4 w-4 mr-2 text-primary/70" />
                    <span className="font-medium text-foreground/80">Gem:</span>
                    <span className="ml-1.5 text-muted-foreground truncate">{rashi.gemstone.split(',')[0].trim()}</span>
                  </div>
                </div>
                
              </CardContent>
              <CardFooter className="p-5 pt-0 border-t border-border/10 mt-auto">
                <Button variant="default" className="w-full bg-primary hover:bg-primary/90 text-primary-foreground group-hover:bg-accent group-hover:text-accent-foreground transition-colors">
                  Learn More
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </CardFooter>
            </Card>
          </Link>
        ))}
      </div>
       <footer className="mt-16 text-center border-t border-primary/20 pt-10">
        <p className="text-sm text-muted-foreground">
          Rashi characteristics are general guidelines. Individual horoscopes provide more detailed insights.
        </p>
      </footer>
    </div>
  );
}

