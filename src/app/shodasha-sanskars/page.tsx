
"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link"; 
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
import { Badge } from "@/components/ui/badge";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { shodashaSanskarsData } from "@/data/shodasha-sanskars-data";
import type { Sanskar, SanskarCategory } from "@/types";
import * as LucideIcons from "lucide-react"; 
import { APP_NAME } from "@/lib/constants";
import { ArrowRight } from "lucide-react"; 
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000';

export const metadataObject: Metadata = {
  title: `Shodasha Sanskaras - The 16 Hindu Rites of Passage | ${APP_NAME}`,
  description: `Explore the Shodasha Sanskaras, the sixteen sacred Hindu rites of passage on ${APP_NAME}. Learn about rituals from conception (Garbhadhana) to last rites (Antyeshti), their significance, and cultural importance in shaping a Dharmic life.`,
  keywords: ['Shodasha Sanskaras', '16 Hindu Rites', 'Vedic Rituals', 'Hindu Sacraments', 'Rites of Passage', 'Garbhadhana', 'Upanayana', 'Vivaha', 'Antyeshti', 'Hindu Traditions', 'Life Cycle Ceremonies', APP_NAME],
  alternates: {
    canonical: `${BASE_URL}/shodasha-sanskars`,
  },
  openGraph: {
    title: `Shodasha Sanskaras - The 16 Hindu Rites of Passage | ${APP_NAME}`,
    description: 'Explore the sixteen sacred Hindu rites of passage, from conception to last rites, and understand their significance in Sanatan Dharma.',
    url: `${BASE_URL}/shodasha-sanskars`,
    siteName: APP_NAME,
    images: [
      {
        url: `${BASE_URL}/og-images/og-image-shodasha-sanskars-list.png`, 
        width: 1200,
        height: 630,
        alt: `Shodasha Sanskaras - ${APP_NAME}`,
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: `Shodasha Sanskaras - The 16 Hindu Rites of Passage | ${APP_NAME}`,
    description: 'Explore the sixteen sacred Hindu rites of passage, from conception to last rites.',
    images: [`${BASE_URL}/og-images/og-image-shodasha-sanskars-list.png`],
  },
};

const sanskarCategories: SanskarCategory[] = [
  "Prenatal",
  "Childhood",
  "Educational",
  "Marriage & Adulthood",
  "Last Rites",
];

const getIconComponent = (iconName: keyof typeof LucideIcons | undefined): React.ElementType => {
  if (iconName && LucideIcons[iconName]) {
    return LucideIcons[iconName] as React.ElementType;
  }
  return LucideIcons.Sparkles; 
};

export default function ShodashaSanskarsPage() {
  const [activeFilters, setActiveFilters] = React.useState<SanskarCategory[]>([]);

  const toggleFilter = (category: SanskarCategory) => {
    setActiveFilters(prev => 
      prev.includes(category) 
        ? prev.filter(f => f !== category) 
        : [...prev, category]
    );
  };
  
  const sanskarsByCategory = shodashaSanskarsData.reduce((acc, sanskar) => {
    if (!acc[sanskar.category]) {
      acc[sanskar.category] = [];
    }
    acc[sanskar.category].push(sanskar);
    return acc;
  }, {} as Record<SanskarCategory, Sanskar[]>);

  const HeroIcon = LucideIcons.BookHeart || LucideIcons.Sparkles;

  // JSON-LD for Shodasha Sanskars list page
  const sanskarsListJsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": metadataObject.title as string,
    "description": metadataObject.description as string,
    "url": `${BASE_URL}/shodasha-sanskars`,
    "mainEntity": {
      "@type": "ItemList",
      "itemListElement": shodashaSanskarsData.map((sanskar, index) => ({
        "@type": "ListItem",
        "position": index + 1,
        "item": {
          "@type": "WebPage", 
          "name": `${sanskar.sanskritName.split('(')[0].trim()} (${sanskar.englishName})`,
          "url": `${BASE_URL}/shodasha-sanskars/${sanskar.id}`,
          "description": sanskar.briefExplanation
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
    <div className="container mx-auto py-8 space-y-12">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(sanskarsListJsonLd) }}
      />
      <section className="relative text-center py-20 md:py-32 rounded-lg overflow-hidden border border-primary/20 shadow-2xl">
        <Image
          src="https://placehold.co/1200x400.png" 
          alt="Sacred Vedic Fire Altar representing Sanskaras"
          fill
          className="absolute inset-0 z-0 opacity-30 object-cover"
          data-ai-hint="vedic ritual yajna"
          priority
        />
        <div className="relative z-10 bg-background/70 backdrop-blur-sm p-6 md:p-10 rounded-md inline-block max-w-3xl mx-auto">
          <div className="inline-flex items-center justify-center p-3 bg-primary/10 rounded-full mb-6 mx-auto shadow-lg">
            <HeroIcon className="h-16 w-16 text-primary" />
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-primary mb-4">
            Shodasha Sanskaras
          </h1>
          <p className="text-xl md:text-2xl font-semibold text-accent mb-6">
            षोडश संस्काराः – The 16 Sacred Rites of Life
          </p>
          <blockquote className="text-lg md:text-xl text-muted-foreground italic border-l-4 border-accent pl-4 py-2">
            &ldquo;जन्मना जायते शूद्रः संस्कारात् द्विज उच्यते।&rdquo;
            <br />
            <span className="text-sm block mt-1">
              (Janmanā jāyate śūdraḥ saṃskārāt dvija ucyate.)
            </span>
            <span className="text-sm block mt-1">
              &ldquo;By birth, one is uninitiated; through Saṃskāras, one becomes twice-born (spiritually reborn).&rdquo;
            </span>
          </blockquote>
          <p className="mt-6 text-md md:text-lg text-foreground/90 max-w-2xl mx-auto">
            Explore the sixteen essential Hindu rites of passage, spiritual milestones that sanctify and guide an individual&apos;s journey from conception to the final rites, shaping character and purpose.
          </p>
        </div>
      </section>

      <section className="py-6 text-center">
        <h2 className="text-2xl font-semibold text-primary mb-4">Filter by Stage of Life</h2>
        <div className="flex flex-wrap justify-center gap-2">
          {sanskarCategories.map(category => (
            <Button
              key={category}
              variant={activeFilters.includes(category) ? "default" : "outline"}
              onClick={() => toggleFilter(category)}
              className="capitalize"
              aria-pressed={activeFilters.includes(category)}
            >
              {category}
            </Button>
          ))}
          {activeFilters.length > 0 && (
            <Button variant="ghost" onClick={() => setActiveFilters([])} className="text-sm">
              Clear Filters
            </Button>
          )}
        </div>
      </section>


      {Object.entries(sanskarsByCategory).map(([category, sanskars]) => {
        if (activeFilters.length > 0 && !activeFilters.includes(category as SanskarCategory)) {
          return null;
        }
        const categorySanskars = sanskars as Sanskar[]; 
        return (
          <section key={category} id={category.toLowerCase().replace(/\s+/g, '-')} className="scroll-mt-20">
            <h2 className="text-3xl font-semibold text-accent mb-6 pl-2 border-l-4 border-accent">
              {category}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {categorySanskars.map((sanskar: Sanskar) => {
                const IconComponent = getIconComponent(sanskar.iconName as keyof typeof LucideIcons);
                return (
                  <Card key={sanskar.id} className="flex flex-col overflow-hidden shadow-lg hover:shadow-primary/30 transition-all duration-300 ease-in-out transform hover:scale-105 bg-card border border-border/20 rounded-xl">
                    <CardHeader className="pb-3 bg-gradient-to-br from-primary/5 via-card to-accent/5">
                      <div className="flex items-center gap-3 mb-2">
                        <div className="p-2 bg-primary/10 text-primary rounded-md">
                         <IconComponent className="h-7 w-7" />
                        </div>
                        <div>
                            <CardTitle className="text-xl font-bold text-primary">
                            {sanskar.sanskritName.split('(')[0].trim()}
                            {sanskar.sanskritName.includes('(') && <span className="block text-sm font-normal text-accent/80">{sanskar.sanskritName.substring(sanskar.sanskritName.indexOf('('))}</span>}
                            </CardTitle>
                            <p className="text-sm font-medium text-accent">{sanskar.englishName}</p>
                        </div>
                      </div>
                       <Badge variant="secondary" className="w-fit text-xs">{sanskar.stageOfLife}</Badge>
                    </CardHeader>
                    <CardContent className="flex-grow p-5 space-y-3">
                      <CardDescription className="text-sm text-muted-foreground leading-relaxed line-clamp-3">
                        {sanskar.briefExplanation}
                      </CardDescription>
                    </CardContent>
                    <CardFooter className="p-5 pt-0 mt-auto">
                        <Button asChild variant="outline" className="w-full group hover:bg-primary/10 hover:text-primary border-primary/50">
                            <Link href={`/shodasha-sanskars/${sanskar.id}`}>
                                Learn More <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
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
       {Object.values(sanskarsByCategory).flat().filter(s => activeFilters.length > 0 && !activeFilters.includes(s.category)).length === Object.values(sanskarsByCategory).flat().length && activeFilters.length > 0 && (
          <div className="text-center py-10">
            <LucideIcons.SearchX className="h-12 w-12 mx-auto text-muted-foreground mb-3" />
            <p className="text-lg text-muted-foreground">No Sanskaras match the selected filters.</p>
          </div>
        )}


      <section className="mt-16 py-12 bg-primary/10 rounded-lg shadow-xl border border-primary/20 text-center">
        <h2 className="text-3xl font-bold text-primary mb-4">
          Deepen Your Understanding
        </h2>
        <p className="text-lg text-muted-foreground mb-8 max-w-xl mx-auto">
          Interested in personalized guidance for performing these sacred rites or wish to consult with a Vedic scholar?
        </p>
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
                <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground shadow-md hover:shadow-lg transform hover:scale-105 transition-transform" disabled>
                  Contact a Vedic Scholar
                </Button>
            </TooltipTrigger>
            <TooltipContent>
               <p>This feature will connect you with qualified professionals in the future.</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
         <p className="text-xs text-muted-foreground mt-4">
            (This feature will connect you with qualified professionals in the future.)
        </p>
      </section>

      <footer className="mt-16 text-center border-t border-border/20 pt-10">
        <p className="text-sm text-muted-foreground">
          The Shodasha Sanskaras provide a framework for a life lived with purpose, awareness, and spiritual growth.
          Interpretations and practices may vary across regions and traditions.
        </p>
        <p className="text-xs text-muted-foreground mt-2">
          All content is for educational purposes. Data accuracy for specific rituals should be verified with learned scholars.
        </p>
      </footer>
    </div>
  );
}

    
