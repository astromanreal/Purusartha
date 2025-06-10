
// src/app/explore/page.tsx
import Link from 'next/link';
import Image from 'next/image';
import type { Metadata } from 'next';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  CardFooter,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { NAV_ITEMS, APP_NAME } from "@/lib/constants";
import { ArrowRight, LayoutGrid, LucideIcon } from 'lucide-react';

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000';

export const metadata: Metadata = {
  title: `Explore All Features | ${APP_NAME}`,
  description: `Discover all features of ${APP_NAME}. Navigate through Purusartha Challenge, Kundli Compass, Astrology Courses, Cosmic Time, Hindu Calendar, Festivals, Nakshatras, Rashis, Navagraha, Sanskaras, Spiritual Practices, Gunas, Numerology, Vastu, and more.`,
  keywords: ['Explore Features', `${APP_NAME} Features`, 'Vedic Astrology Tools', 'Hindu Rituals', 'Spiritual Guidance', 'Vedic Knowledge', 'Sanatan Dharma', APP_NAME],
  alternates: {
    canonical: `${BASE_URL}/explore`,
  },
  openGraph: {
    title: `Explore All Features of ${APP_NAME}`,
    description: `Discover all features of ${APP_NAME}, your comprehensive guide to Vedic wisdom, astrology, rituals, and spiritual practices.`,
    url: `${BASE_URL}/explore`,
    siteName: APP_NAME,
    images: [
      {
        url: `${BASE_URL}/og-images/og-image-explore.png`, 
        width: 1200,
        height: 630,
        alt: `Explore ${APP_NAME} - Features Overview`,
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: `Explore All Features of ${APP_NAME}`,
    description: `Discover all features of ${APP_NAME}: Vedic astrology, rituals, spiritual practices, and more.`,
    images: [`${BASE_URL}/og-images/og-image-explore.png`],
  },
};

interface FeatureItem {
  title: string;
  href: string;
  icon: LucideIcon;
  description?: string;
}

interface FeatureCategory {
  categoryTitle: string;
  features: FeatureItem[];
}

const activeNavItems = NAV_ITEMS.filter(item =>
  item.href !== '/' &&
  item.href !== '/explore' &&
  item.href !== '/sacred-texts' && 
  item.href !== '/ask-rishi' 
);

const categorizedFeatures: FeatureCategory[] = [
  {
    categoryTitle: "Astrology & Personal Insights",
    features: activeNavItems.filter(item =>
      ["/kundli-compass-features", "/astrology-courses", "/nakshatras", "/rashis", "/navagraha", "/numerology-insights", "/dasha-analysis", "/transits", "/varshphal", "/horoscope-forecasts", "/kundli-generator", "/vedic-matchmaking", "/panchang"].includes(item.href)
    )
  },
  {
    categoryTitle: "Spiritual Journey & Practices",
    features: activeNavItems.filter(item =>
      ["/purusartha-challenge", "/shodasha-sanskars", "/spiritual-practices", "/thirty-six-gunas"].includes(item.href)
    )
  },
  {
    categoryTitle: "Cosmic & Calendrical Systems",
    features: activeNavItems.filter(item =>
      ["/cosmic-time", "/hindu-calendar", "/hindu-festivals"].includes(item.href)
    )
  },
  {
    categoryTitle: "Harmonious Living",
    features: activeNavItems.filter(item =>
      ["/vastu-shastra"].includes(item.href)
    )
  },
  {
    categoryTitle: "Application & Profile",
    features: activeNavItems.filter(item =>
      ["/contact", "/settings", "/profile"].includes(item.href)
    )
  }
].filter(category => category.features.length > 0);

const placeholderImages = [
  // Only for "Astrology & Personal Insights" category (13 items)
  { hint: "kundli compass astrology", url: "https://i.pinimg.com/736x/a8/0d/4f/a80d4ff0eb2c859e043b3abb3028b2bc.jpg" }, // Kundli Compass
  { hint: "astrology learning books", url: "https://i.pinimg.com/736x/b7/5f/88/b75f885e9863217732dd0a689bde41bf.jpg" }, // Astrology Courses
  { hint: "nakshatra constellations stars", url: "https://i.pinimg.com/736x/fd/e4/71/fde4710c0484677e42a49bf961a25da7.jpg" }, // Nakshatras
  { hint: "zodiac signs astrology", url: "https://i.pinimg.com/736x/ee/32/e5/ee32e5926e939024fcff048c7a2bf09e.jpg" }, // Rashis (Zodiac)
  { hint: "celestial planets astronomy", url: "https://i.pinimg.com/736x/a2/76/e3/a276e3cd620c8239b908b84a0697f58e.jpg" }, // Navagraha
  { hint: "numerology numbers chart", url: "https://i.pinimg.com/736x/4b/c2/68/4bc26861647c88ddd9bdfd223b13057d.jpg" }, // Numerology Insights
  { hint: "planetary periods chart", url: "https://placehold.co/600x400.png" }, // Dasha Analysis
  { hint: "planet movements sky", url: "https://placehold.co/600x400.png" }, // Transits
  { hint: "solar return chart", url: "https://placehold.co/600x400.png" }, // Varshphal
  { hint: "daily horoscope stars", url: "https://placehold.co/600x400.png" }, // Horoscope Forecasts
  { hint: "birth chart creation", url: "https://placehold.co/600x400.png" }, // Kundli Generator
  { hint: "marriage compatibility astrology", url: "https://placehold.co/600x400.png" }, // Vedic Matchmaking
  { hint: "panchang almanac details", url: "https://placehold.co/600x400.png" }, // Panchang
];

export default function ExplorePage() {
  let imageIndexCounter = 0; 

  const explorePageJsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage", 
    "name": `Explore All Features | ${APP_NAME}`,
    "description": `Discover all features of ${APP_NAME}. Navigate through Purusartha Challenge, Kundli Compass, Astrology Courses, Cosmic Time, Hindu Calendar, Festivals, Nakshatras, Rashis, Navagraha, Sanskaras, Spiritual Practices, Gunas, Numerology, Vastu, and more.`,
    "url": `${BASE_URL}/explore`,
    "mainEntity": {
      "@type": "ItemList",
      "itemListElement": categorizedFeatures.flatMap(category => 
        category.features.map(feature => ({
          "@type": "WebPage",
          "name": feature.title,
          "url": `${BASE_URL}${feature.href}`,
          "description": feature.description || `Explore ${feature.title} on ${APP_NAME}.`
        }))
      )
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
    <div className="container mx-auto py-8 space-y-16">
       <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(explorePageJsonLd) }}
      />
      <header className="text-center">
        <div className="inline-flex items-center justify-center p-4 bg-primary/10 rounded-full mb-6 mx-auto shadow-lg">
          <LayoutGrid className="h-20 w-20 text-primary" />
        </div>
        <h1 className="text-4xl font-bold tracking-tight text-primary sm:text-5xl">
          Explore {APP_NAME}
        </h1>
        <p className="mt-3 text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
          Your comprehensive guide to Vedic wisdom. Discover tools, knowledge, and practices to enrich your spiritual journey.
        </p>
      </header>

      {categorizedFeatures.map((category) => {
        const isUtilityCategory = category.categoryTitle === "Application & Profile";
        const isSpiritualOrCosmicOrHarmonious = [
          "Spiritual Journey & Practices",
          "Cosmic & Calendrical Systems",
          "Harmonious Living"
        ].includes(category.categoryTitle);

        return (
          <section key={category.categoryTitle}>
            <h2 className="text-3xl font-semibold text-accent mb-8 pl-2 border-l-4 border-accent">
              {category.categoryTitle}
            </h2>
            <div className={`grid gap-8 md:grid-cols-2 ${isUtilityCategory || isSpiritualOrCosmicOrHarmonious ? 'lg:grid-cols-3' : 'lg:grid-cols-3'}`}>
              {category.features.map((feature) => {
                const IconComponent = feature.icon;
                let imageDetails = null;
                let shouldUseImage = !isUtilityCategory && !isSpiritualOrCosmicOrHarmonious;
                
                if (shouldUseImage && imageIndexCounter < placeholderImages.length) {
                  imageDetails = placeholderImages[imageIndexCounter];
                  imageIndexCounter++;
                }

                if (isUtilityCategory) {
                  return (
                    <Card
                      key={feature.href}
                      className="flex flex-col overflow-hidden rounded-xl shadow-lg bg-card border-border/40 group transform transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-primary/30 focus-within:scale-105 focus-within:shadow-primary/30"
                    >
                      <CardHeader className="p-5 flex flex-col items-center text-center gap-3">
                        <div className="p-3 bg-primary/10 text-primary rounded-full">
                          <IconComponent className="h-10 w-10" />
                        </div>
                        <CardTitle className="text-xl font-semibold text-primary group-hover:text-accent transition-colors">
                          {feature.title}
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="p-5 pt-0 text-center flex-grow flex flex-col justify-center">
                        <CardDescription className="text-sm text-muted-foreground mb-4 flex-grow line-clamp-2">
                          {feature.description || "Access this utility feature."}
                        </CardDescription>
                      </CardContent>
                      <CardFooter className="p-5 pt-0">
                        <Button
                          asChild
                          variant="outline"
                          className="w-full border-primary/50 text-primary hover:bg-primary/10 hover:text-accent group-hover:border-accent/70 group-hover:text-accent transition-colors duration-300"
                        >
                          <Link href={feature.href}>
                            Open {feature.title}
                            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                          </Link>
                        </Button>
                      </CardFooter>
                    </Card>
                  );
                } else if (isSpiritualOrCosmicOrHarmonious) {
                  // Card style for "Spiritual Journey & Practices", "Cosmic & Calendrical Systems", "Harmonious Living"
                  return (
                    <Card
                      key={feature.href}
                      className="flex flex-col overflow-hidden rounded-xl shadow-xl bg-card border-border/40 group transform transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-primary/30 focus-within:scale-105 focus-within:shadow-primary/30"
                    >
                      <CardHeader className="p-6 flex flex-row items-center gap-4">
                        <div className="p-3 bg-primary/10 text-primary rounded-lg">
                          <IconComponent className="h-8 w-8" />
                        </div>
                        <CardTitle className="text-xl font-semibold text-primary group-hover:text-accent transition-colors">
                          {feature.title}
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="p-6 pt-0 flex-grow flex flex-col">
                        <CardDescription className="text-sm text-muted-foreground mb-5 flex-grow line-clamp-3">
                          {feature.description || "Explore this section to learn more."}
                        </CardDescription>
                      </CardContent>
                      <CardFooter className="p-6 pt-0">
                       <Button
                        asChild
                        variant="default"
                        className="w-full bg-primary hover:bg-primary/90 text-primary-foreground group-hover:bg-accent group-hover:text-accent-foreground transition-colors duration-300"
                      >
                        <Link href={feature.href}>
                          Discover {feature.title}
                          <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                        </Link>
                      </Button>
                      </CardFooter>
                    </Card>
                  );
                }
                
                // Default card with image (for Astrology & Personal Insights)
                return (
                  <Card
                    key={feature.href}
                    className="flex flex-col overflow-hidden rounded-xl shadow-xl bg-card border-border/40 group transform transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-primary/30 focus-within:scale-105 focus-within:shadow-primary/30"
                  >
                    <CardHeader className="p-0 relative">
                      {imageDetails && (
                        <Image
                          src={imageDetails.url}
                          alt={feature.title}
                          width={600}
                          height={300}
                          className="w-full h-48 object-cover rounded-t-xl"
                          data-ai-hint={imageDetails.hint}
                          priority={imageIndexCounter <= 3} 
                        />
                      )}
                      <div className="absolute top-3 right-3 p-2 bg-background/70 backdrop-blur-sm rounded-full shadow-lg">
                         <IconComponent className="h-7 w-7 text-primary" />
                      </div>
                    </CardHeader>
                    <CardContent className="p-5 flex-grow flex flex-col">
                      <CardTitle className="text-2xl font-semibold text-primary mb-2 group-hover:text-accent transition-colors">
                        {feature.title}
                      </CardTitle>
                      <CardDescription className="text-sm text-muted-foreground mb-5 flex-grow line-clamp-3">
                        {feature.description || "Explore this section to learn more."}
                      </CardDescription>
                    </CardContent>
                    <CardFooter className="p-5 pt-0">
                       <Button
                        asChild
                        variant="default"
                        className="w-full bg-primary hover:bg-primary/90 text-primary-foreground group-hover:bg-accent group-hover:text-accent-foreground transition-colors duration-300"
                      >
                        <Link href={feature.href}>
                          Discover {feature.title}
                          <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                        </Link>
                      </Button>
                    </CardFooter>
                  </Card>
                );
              })}
            </div>
          </section>
        );
      })}
    </div>
  );
}
