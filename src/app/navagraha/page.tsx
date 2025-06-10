
import Link from 'next/link';
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import type { Metadata } from 'next';
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { navagrahaData } from "@/data/navagraha-data";
import type { Navagraha as NavagrahaType } from "@/types";
import { Globe, Sun, Moon, Shield, MessageSquare, GraduationCap, Heart, Hourglass, Orbit, Flag, ArrowRight, Users, Gem, Flame, Droplets, Wind, Layers, Leaf, HelpCircle, CloudFog, Palette as PaletteIcon, CalendarDays } from "lucide-react";
import { APP_NAME } from "@/lib/constants";
import { cn } from "@/lib/utils";

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000';

export const metadata: Metadata = {
  title: `Navagrahas - The Nine Celestial Influencers | ${APP_NAME}`,
  description: `Discover the Navagrahas, the nine celestial bodies in Vedic astrology, with ${APP_NAME}. Learn about Surya (Sun), Chandra (Moon), Mangala (Mars), Budha (Mercury), Guru (Jupiter), Shukra (Venus), Shani (Saturn), Rahu, and Ketu, their significance, symbolism, and mantras.`,
  keywords: ['Navagraha', 'Nine Planets Vedic Astrology', 'Hindu Astrology Planets', 'Grahas', 'Surya', 'Chandra', 'Mangala', 'Budha', 'Guru', 'Shukra', 'Shani', 'Rahu', 'Ketu', APP_NAME],
  alternates: {
    canonical: `${BASE_URL}/navagraha`,
  },
  openGraph: {
    title: `Navagrahas - The Nine Celestial Influencers | ${APP_NAME}`,
    description: 'Explore the nine celestial bodies (Grahas) that influence life on Earth according to Vedic astrology. Understand their impact on destiny, health, and personality.',
    url: `${BASE_URL}/navagraha`,
    siteName: APP_NAME,
    images: [
      {
        url: `${BASE_URL}/og-images/og-image-navagraha-list.png`, 
        width: 1200,
        height: 630,
        alt: `The Navagrahas - ${APP_NAME}`,
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: `Navagrahas - The Nine Celestial Influencers | ${APP_NAME}`,
    description: 'Explore the nine celestial bodies (Grahas) that influence life on Earth according to Vedic astrology.',
    images: [`${BASE_URL}/og-images/og-image-navagraha-list.png`],
  },
};

const NavagrahaSymbolIcon = ({ graha }: { graha: NavagrahaType }) => {
  switch (graha.name) {
    case "Surya": return <Sun className="h-8 w-8 text-orange-500" />;
    case "Chandra": return <Moon className="h-8 w-8 text-slate-400" />;
    case "Mangala": return <Shield className="h-8 w-8 text-red-600" />;
    case "Budha": return <MessageSquare className="h-8 w-8 text-green-500" />;
    case "Guru": return <GraduationCap className="h-8 w-8 text-yellow-500" />;
    case "Shukra": return <Heart className="h-8 w-8 text-pink-500" />;
    case "Shani": return <Hourglass className="h-8 w-8 text-gray-600" />;
    case "Rahu": return <Orbit className="h-8 w-8 text-indigo-500" />;
    case "Ketu": return <Flag className="h-8 w-8 text-purple-500" />;
    default: return <Globe className="h-8 w-8 text-muted-foreground" />;
  }
};

const getGrahaAccentColor = (grahaName: string): string => {
  switch (grahaName.toLowerCase()) {
    case 'surya': return 'bg-red-500/10 border-red-500/30';
    case 'chandra': return 'bg-slate-400/10 border-slate-400/30';
    case 'mangala': return 'bg-red-600/10 border-red-600/30';
    case 'budha': return 'bg-green-500/10 border-green-500/30';
    case 'guru': return 'bg-yellow-500/10 border-yellow-500/30';
    case 'shukra': return 'bg-pink-500/10 border-pink-500/30';
    case 'shani': return 'bg-gray-600/10 border-gray-600/30';
    case 'rahu': return 'bg-indigo-500/10 border-indigo-500/30';
    case 'ketu': return 'bg-purple-500/10 border-purple-500/30';
    default: return 'bg-muted/50 border-border/30';
  }
};

const ElementIconGrahaCard = ({ element, className }: { element?: NavagrahaType["element"]; className?: string }) => {
  const iconClasses = cn("shrink-0", className);

  if (!element) return <HelpCircle className={cn(iconClasses, "text-muted-foreground")} />;
  switch (element) {
    case "Fire": return <Flame className={cn(iconClasses, "text-red-400")} />;
    case "Water": return <Droplets className={cn(iconClasses, "text-blue-400")} />;
    case "Earth": return <Leaf className={cn(iconClasses, "text-green-500")} />;
    case "Air (Vayu)":
    case "Air": return <Wind className={cn(iconClasses, "text-sky-300")} />;
    case "Ether (Akasha)": return <Layers className={cn(iconClasses, "text-purple-300")} />;
    case "Air/Shadow": return <CloudFog className={cn(iconClasses, "text-gray-400")} />;
    case "Fire/Shadow": return <CloudFog className={cn(iconClasses, "text-orange-300")} />;
    default: return <HelpCircle className={cn(iconClasses, "text-muted-foreground")} />;
  }
};

export default function NavagrahaPage() {
  const navagrahaListJsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": metadata.title as string,
    "description": metadata.description as string,
    "url": `${BASE_URL}/navagraha`,
    "mainEntity": {
      "@type": "ItemList",
      "itemListElement": navagrahaData.navagrahas.map((graha, index) => ({
        "@type": "ListItem",
        "position": index + 1,
        "item": {
          "@type": "WebPage", // Could be a more specific schema if available like "Deity" or "CelestialBody"
          "name": `${graha.name} (${graha.englishName}) - Navagraha`,
          "url": `${BASE_URL}/navagraha/${graha.id}`,
          "description": graha.significance
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(navagrahaListJsonLd) }}
      />
      <header className="mb-16 text-center">
        <div className="inline-flex items-center justify-center p-4 bg-primary/10 rounded-full mb-6 mx-auto shadow-lg">
          <Globe className="h-20 w-20 text-primary" />
        </div>
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-primary mb-4">
          The Navagrahas
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
          Explore the nine celestial bodies (Grahas) that influence life on Earth according to Vedic astrology. Discover their significance, symbolism, and mantras.
        </p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {navagrahaData.navagrahas.map((graha) => (
          <Card
            key={graha.id}
            className={cn(
              "flex flex-col overflow-hidden rounded-xl shadow-xl bg-card border-border/20 group transform transition-all duration-300 hover:scale-105 hover:-translate-y-1 hover:shadow-primary/30",
              getGrahaAccentColor(graha.name)
            )}
          >
            <CardHeader className="p-5">
              <div className="flex items-center justify-between mb-2">
                <div className="p-3 bg-background/50 rounded-full shadow-md border border-border/50 group-hover:bg-accent/20 transition-colors">
                  <NavagrahaSymbolIcon graha={graha} />
                </div>
                {graha.nature && (
                  <Badge variant="secondary" className="text-xs group-hover:bg-accent group-hover:text-accent-foreground transition-colors">
                    {graha.nature.split('(')[0].trim()}
                  </Badge>
                )}
              </div>
              <CardTitle className="text-xl font-bold text-primary group-hover:text-accent transition-colors">
                {graha.sanskritName} ({graha.name})
                <span className="block text-base font-normal text-muted-foreground group-hover:text-accent/80 transition-colors mt-0.5">
                  {graha.englishName}
                </span>
              </CardTitle>
            </CardHeader>
            <CardContent className="flex-grow p-5 pt-0 space-y-3">
              <CardDescription className="text-sm text-foreground/80 leading-relaxed line-clamp-3 mb-3">
                {graha.significance}
              </CardDescription>

              <div className="text-xs text-muted-foreground space-y-1.5 mt-3 pt-3 border-t border-border/20 group-hover:border-accent/30">
                <div className="flex items-center" title={`Deity: ${graha.deity}`}>
                  <Users className="h-3.5 w-3.5 mr-1.5 text-primary/70" />
                  <span>Deity: {graha.deity.split('/')[0].trim()}</span>
                </div>
                {graha.element && (
                  <div className="flex items-center" title={`Element: ${graha.element}`}>
                    <ElementIconGrahaCard element={graha.element} className="h-3.5 w-3.5 mr-1.5" />
                    <span>Element: {graha.element.split('(')[0].trim()}</span>
                  </div>
                )}
                {graha.gemstone && (
                  <div className="flex items-center" title={`Gemstone: ${graha.gemstone}`}>
                    <Gem className="h-3.5 w-3.5 mr-1.5 text-primary/70" />
                    <span>Gemstone: {graha.gemstone.split('(')[0].trim()}</span>
                  </div>
                )}
                 <div className="flex items-center" title={`Day: ${graha.day}`}>
                    <CalendarDays className="h-3.5 w-3.5 mr-1.5 text-primary/70" />
                    <span>Day: {graha.day}</span>
                </div>
                 <div className="flex items-center" title={`Color: ${graha.color}`}>
                    <PaletteIcon className="h-3.5 w-3.5 mr-1.5 text-primary/70" />
                    <span>Color: {graha.color?.split('/')[0].trim()}</span>
                </div>
              </div>

            </CardContent>
            <CardFooter className="p-5 pt-0 mt-auto">
              <Button asChild variant="outline" className="w-full group-hover:bg-primary/10 group-hover:text-primary border-primary/50 transition-colors">
                <Link href={`/navagraha/${graha.id}`}>
                  Learn More <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
      <footer className="mt-16 text-center border-t border-primary/20 pt-10">
        <p className="text-sm text-muted-foreground">
          The Navagrahas play a crucial role in Vedic astrology, influencing destiny and life events. Their worship is believed to mitigate negative influences and enhance positive ones.
        </p>
      </footer>
    </div>
  );
}

