
// src/app/nakshatras/[id]/page.tsx
import { notFound } from 'next/navigation';
import Link from 'next/link';
import type { Metadata, ResolvingMetadata } from 'next';
import { nakshatraData, getPlanetIcon } from '@/data/nakshatra-data';
import type { Nakshatra } from '@/types';
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { ScrollArea } from '@/components/ui/scroll-area';
import {
  ArrowLeftCircle, Star as StarIcon, Users, ShieldQuestion, Sun, Moon, Shield, MessageSquare, GraduationCap, Heart, Hourglass, Orbit,
  Bone, Gem, Axe, Palmtree, CloudLightning, Leaf, Wind, Droplets, Flame, Layers, CalendarDays, Palette, HelpCircle, BookOpen, Brain, SparklesIcon, AlertTriangle, CheckCircle, XCircle
} from "lucide-react";
import { cn } from '@/lib/utils';
import { APP_NAME } from '@/lib/constants';

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000'; 

type Props = {
  params: { id: string };
  searchParams: { [key: string]: string | string[] | undefined };
};

export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const id = params.id;
  const nakshatra = nakshatraData.nakshatras.find(n => n.id === id);

  if (!nakshatra) {
    return {
      title: `Nakshatra Not Found | ${APP_NAME}`,
      description: `The requested Nakshatra could not be found. Explore other Vedic lunar mansions on ${APP_NAME}.`,
    };
  }

  const title = `${nakshatra.name_english} (${nakshatra.name_sanskrit}) - Vedic Lunar Mansion #${nakshatra.number} | ${APP_NAME}`;
  const description = `Explore ${nakshatra.name_english} Nakshatra (${nakshatra.name_sanskrit}, #${nakshatra.number}): its deity ${nakshatra.deity}, ruling planet ${nakshatra.ruling_planet}, symbol (${nakshatra.symbol_description}), characteristics, padas, and significance in Vedic astrology on ${APP_NAME}.`;
  const pageKeywords = [
    nakshatra.name_english,
    nakshatra.name_sanskrit,
    `Nakshatra ${nakshatra.number}`,
    "Nakshatra",
    "Vedic Astrology",
    "Lunar Mansion",
    nakshatra.ruling_planet,
    nakshatra.deity,
    nakshatra.symbol_description,
    ...nakshatra.keywords,
    "Jyotish",
    APP_NAME
  ];
  const canonicalUrl = `${BASE_URL}/nakshatras/${nakshatra.id}`;
  // Use a generic placeholder for OG image, or create specific ones later
  const ogImage = `${BASE_URL}/og-image-nakshatra-${nakshatra.id}.png`; // Ideal: specific image
  const fallbackOgImage = `${BASE_URL}/og-image-nakshatra-default.png`; // Fallback

  return {
    title,
    description,
    keywords: pageKeywords,
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title,
      description,
      url: canonicalUrl,
      siteName: APP_NAME,
      images: [
        {
          url: ogImage, // Attempt specific image
          width: 1200,
          height: 630,
          alt: `${nakshatra.name_english} Nakshatra - ${APP_NAME}`,
        },
        { // Fallback image
          url: fallbackOgImage,
          width: 1200,
          height: 630,
          alt: `Vedic Nakshatras - ${APP_NAME}`,
        }
      ],
      type: 'article',
      // publishedTime: new Date().toISOString(), // Or a static date for first publication
      // authors: [APP_NAME],
      article: {
        tags: pageKeywords,
        section: "Vedic Astrology",
      }
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [ogImage, fallbackOgImage], // Provide specific and fallback
    },
  };
}


// Helper to get a specific icon for the Nakshatra symbol if defined, or a default
const GetSymbolIcon = ({ nakshatra }: { nakshatra: Nakshatra }) => {
  const SpecificSymbolIcon = nakshatra.symbol_icon;
  if (SpecificSymbolIcon) return <SpecificSymbolIcon className="h-10 w-10 text-accent" />;
  return <StarIcon className="h-10 w-10 text-accent" />; // Default if no specific icon
};

const GetDeityIcon = ({ nakshatra }: { nakshatra: Nakshatra }) => {
  const SpecificDeityIcon = nakshatra.deity_icon;
  if (SpecificDeityIcon) return <SpecificDeityIcon className="h-5 w-5 mr-2 text-primary/80" />;
  return <Users className="h-5 w-5 mr-2 text-primary/80" />; // Default for multiple deities or unspecified
};

const ElementIcon = ({ element }: { element?: Nakshatra["element"] }) => {
  if (!element) return <HelpCircle className="h-5 w-5 mr-2 text-muted-foreground" />;
  switch (element) {
    case "Fire": return <Flame className="h-5 w-5 mr-2 text-red-500" />;
    case "Earth": return <Leaf className="h-5 w-5 mr-2 text-green-600" />;
    case "Air": return <Wind className="h-5 w-5 mr-2 text-sky-400" />;
    case "Water": return <Droplets className="h-5 w-5 mr-2 text-blue-500" />;
    case "Ether": return <Layers className="h-5 w-5 mr-2 text-purple-400" />;
    default: return <HelpCircle className="h-5 w-5 mr-2 text-muted-foreground" />;
  }
};

const RulingPlanetIcon = ({ planetName }: { planetName: string }) => {
  const Icon = getPlanetIcon(planetName) || ShieldQuestion;
  return <Icon className="h-5 w-5 mr-2 text-primary/80" />;
};

const generateNakshatraJsonLd = (nakshatra: Nakshatra) => {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article", // Could also be "ScholarlyArticle" or a custom type if defined for Vedic concepts
    "headline": `${nakshatra.name_english} (${nakshatra.name_sanskrit}) - Vedic Lunar Mansion #${nakshatra.number}`,
    "name": `${nakshatra.name_english} Nakshatra`,
    "alternateName": nakshatra.name_sanskrit,
    "description": `Explore ${nakshatra.name_english} Nakshatra (#${nakshatra.number}): its deity ${nakshatra.deity}, ruling planet ${nakshatra.ruling_planet}, symbol (${nakshatra.symbol_description}), characteristics, padas, and significance in Vedic astrology.`,
    "keywords": [
      nakshatra.name_english,
      nakshatra.name_sanskrit,
      `Nakshatra ${nakshatra.number}`,
      "Nakshatra",
      "Vedic Astrology",
      "Lunar Mansion",
      nakshatra.ruling_planet,
      nakshatra.deity,
      nakshatra.symbol_description,
      ...nakshatra.keywords,
      "Jyotish",
      APP_NAME
    ].join(", "),
    "url": `${BASE_URL}/nakshatras/${nakshatra.id}`,
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `${BASE_URL}/nakshatras/${nakshatra.id}`
    },
    "author": {
      "@type": "Organization",
      "name": APP_NAME
    },
    "publisher": {
      "@type": "Organization",
      "name": APP_NAME,
      "logo": {
        "@type": "ImageObject",
        "url": `${BASE_URL}/logo-icon.png` // Replace with actual logo URL if available
      }
    },
    "datePublished": "2024-01-01", // Generic publication date, update if content has specific publish dates
    "dateModified": new Date().toISOString(), // Or last modified date of content
    "articleSection": "Vedic Astrology",
     "isPartOf": {
      "@type": "WebSite",
      "name": APP_NAME,
      "url": BASE_URL
    },
    "image": `${BASE_URL}/og-image-nakshatra-${nakshatra.id}.png` // Primary image for the article
  };
  return JSON.stringify(jsonLd);
};


export default function NakshatraDetailPage({ params }: { params: { id: string } }) {
  const nakshatra = nakshatraData.nakshatras.find(n => n.id === params.id);

  if (!nakshatra) {
    notFound();
  }

  const nakshatraJsonLdString = generateNakshatraJsonLd(nakshatra);

  return (
    <div className="container mx-auto py-10 px-4">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: nakshatraJsonLdString }}
      />
      <Button variant="outline" asChild className="mb-8 group">
        <Link href="/nakshatras">
          <ArrowLeftCircle className="h-5 w-5 mr-2 transition-transform group-hover:-translate-x-1" />
          Back to All Nakshatras
        </Link>
      </Button>

      <Card className="overflow-hidden shadow-2xl border-primary/20 bg-card">
        <CardHeader className="p-6 md:p-8 bg-gradient-to-br from-primary/10 via-card to-accent/10 relative">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            <div>
              <h1 className="text-3xl md:text-4xl font-extrabold text-primary mb-1">
                {nakshatra.name_english}
              </h1>
              <p className="text-xl md:text-2xl font-semibold text-accent font-serif">{nakshatra.name_sanskrit}</p>
              <p className="text-md text-muted-foreground mt-1">Nakshatra #{nakshatra.number}</p>
            </div>
            <div className="p-3 bg-card rounded-lg shadow-md border border-border/50 min-w-[80px] text-center">
              <GetSymbolIcon nakshatra={nakshatra} />
              <p className="text-sm font-medium text-muted-foreground mt-2">{nakshatra.symbol_description}</p>
            </div>
          </div>
        </CardHeader>

        <CardContent className="p-6 md:p-8 space-y-8">
          {/* Key Info Section */}
          <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            <InfoCard icon={<GetDeityIcon nakshatra={nakshatra} />} title="Deity" value={nakshatra.deity.split('(')[0].trim()} description={nakshatra.deity.includes('(') ? nakshatra.deity.substring(nakshatra.deity.indexOf('(')) : undefined} />
            <InfoCard icon={<RulingPlanetIcon planetName={nakshatra.ruling_planet} />} title="Ruling Planet" value={nakshatra.ruling_planet} />
            <InfoCard icon={<CalendarDays className="h-5 w-5 mr-2 text-primary/80" />} title="Zodiac Range" value={nakshatra.zodiac_range} />
          </section>

          {/* Padas Section */}
          {nakshatra.pada_ranges && nakshatra.pada_ranges.length > 0 && (
            <ContentSection title="Padas (Quarters)">
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
                {nakshatra.pada_ranges.map((pada, index) => (
                  <Badge key={index} variant="secondary" className="text-sm p-3 justify-center text-center block whitespace-normal h-auto">
                    {pada}
                  </Badge>
                ))}
              </div>
            </ContentSection>
          )}
          
          <Separator className="my-6 border-dashed" />

          {/* Core Attributes Section */}
          <ContentSection title="Core Attributes">
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-x-6 gap-y-4 text-sm">
              <AttributeItem label="Guna" value={nakshatra.guna} />
              <AttributeItem label="Dosha" value={nakshatra.dosha} />
              <AttributeItem label="Gender" value={nakshatra.gender} />
              <AttributeItem label="Nature (Gana)" value={nakshatra.nature.split('(')[0].trim()} />
              <AttributeItem label="Element" value={nakshatra.element} icon={<ElementIcon element={nakshatra.element} />} />
              <AttributeItem label="Animal Symbol" value={nakshatra.animal_symbol} />
            </div>
          </ContentSection>

          {nakshatra.mythological_story && (
            <ContentSection title="Mythological Story & Origin">
              <p className="text-foreground/90 leading-relaxed">{nakshatra.mythological_story}</p>
            </ContentSection>
          )}

          {nakshatra.spiritual_significance && (
            <ContentSection title="Spiritual Significance">
              <p className="text-foreground/90 leading-relaxed">{nakshatra.spiritual_significance}</p>
            </ContentSection>
          )}

          {nakshatra.astrological_significance && (
            <ContentSection title="Astrological Significance">
              <p className="text-foreground/90 leading-relaxed">{nakshatra.astrological_significance}</p>
            </ContentSection>
          )}
          
          <Separator className="my-6 border-dashed" />

          {/* Activities Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {nakshatra.favorable_activities && nakshatra.favorable_activities.length > 0 && (
              <ContentSection title="Favorable Activities" icon={<CheckCircle className="h-6 w-6 text-green-500 mr-2" />}>
                <ul className="list-disc list-inside space-y-1 text-foreground/90">
                  {nakshatra.favorable_activities.map((activity, index) => <li key={index}>{activity}</li>)}
                </ul>
              </ContentSection>
            )}
            {nakshatra.unfavorable_activities && nakshatra.unfavorable_activities.length > 0 && (
              <ContentSection title="Unfavorable Activities" icon={<XCircle className="h-6 w-6 text-red-500 mr-2" />}>
                 <ul className="list-disc list-inside space-y-1 text-foreground/90">
                  {nakshatra.unfavorable_activities.map((activity, index) => <li key={index}>{activity}</li>)}
                </ul>
              </ContentSection>
            )}
          </div>

          {/* Compatibility Section */}
          {nakshatra.compatibility && (
            <ContentSection title="Compatibility Insights">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <h4 className="text-md font-semibold text-green-600 mb-2 flex items-center"><CheckCircle className="h-5 w-5 mr-2"/>Compatible Nakshatras:</h4>
                  <div className="flex flex-wrap gap-2">
                    {nakshatra.compatibility.compatible_nakshatras.map(cn => <Badge key={cn} variant="outline" className="border-green-500/50 text-green-700">{cn}</Badge>)}
                  </div>
                </div>
                <div>
                  <h4 className="text-md font-semibold text-red-600 mb-2 flex items-center"><XCircle className="h-5 w-5 mr-2"/>Incompatible Nakshatras:</h4>
                  <div className="flex flex-wrap gap-2">
                    {nakshatra.compatibility.incompatible_nakshatras.map(icn => <Badge key={icn} variant="outline" className="border-red-500/50 text-red-700">{icn}</Badge>)}
                  </div>
                </div>
              </div>
              {nakshatra.compatibility_insights && <p className="text-xs text-muted-foreground mt-4">{nakshatra.compatibility_insights}</p>}
            </ContentSection>
          )}

          {nakshatra.associated_mantras && nakshatra.associated_mantras.length > 0 && (
            <ContentSection title="Associated Mantras" icon={<BookOpen className="h-6 w-6 text-accent mr-2"/>}>
              <ScrollArea className="max-h-40 p-1">
              {nakshatra.associated_mantras.map((mantra, index) => (
                <p key={index} className="font-serif text-lg text-primary/90 mb-1">{mantra}</p>
              ))}
              </ScrollArea>
            </ContentSection>
          )}
          
          {nakshatra.yogic_or_spiritual_aspect && (
             <ContentSection title="Yogic/Spiritual Aspect" icon={<Brain className="h-6 w-6 text-accent mr-2"/>}>
              <p className="text-foreground/90 leading-relaxed">{nakshatra.yogic_or_spiritual_aspect}</p>
            </ContentSection>
          )}

          {nakshatra.additional_notes && (
            <ContentSection title="Additional Notes" icon={<SparklesIcon className="h-6 w-6 text-accent mr-2"/>}>
              <p className="text-sm text-muted-foreground italic leading-relaxed">{nakshatra.additional_notes}</p>
            </ContentSection>
          )}
        </CardContent>

        <CardFooter className="p-6 md:p-8 border-t border-border/30 bg-muted/30">
          <p className="text-xs text-muted-foreground text-center w-full">
            The information provided is for educational purposes. For personalized astrological guidance, consult a qualified Vedic astrologer.
          </p>
        </CardFooter>
      </Card>
    </div>
  );
}

interface InfoCardProps {
  icon: React.ReactNode;
  title: string;
  value: string;
  description?: string;
}
const InfoCard: React.FC<InfoCardProps> = ({ icon, title, value, description }) => (
  <Card className="p-4 bg-card/50 shadow-sm border-border/40 hover:shadow-md transition-shadow">
    <div className="flex items-center mb-1.5">
      {icon}
      <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">{title}</h3>
    </div>
    <p className="text-lg font-bold text-primary">{value}</p>
    {description && <p className="text-xs text-muted-foreground mt-0.5">{description}</p>}
  </Card>
);

interface ContentSectionProps {
  title: string;
  icon?: React.ReactNode;
  children: React.ReactNode;
}
const ContentSection: React.FC<ContentSectionProps> = ({ title, icon, children }) => (
  <section>
    <div className="flex items-center mb-4">
      {icon ? icon : <StarIcon className="h-6 w-6 text-accent mr-3" />}
      <h2 className="text-xl md:text-2xl font-semibold text-accent">{title}</h2>
    </div>
    <div className="pl-2 space-y-3">{children}</div>
  </section>
);

interface AttributeItemProps {
  label: string;
  value?: string; 
  icon?: React.ReactNode;
}
const AttributeItem: React.FC<AttributeItemProps> = ({ label, value, icon }) => (
  <div className="flex items-center">
    {icon && <span className="mr-1.5">{icon}</span>}
    <strong className="font-medium text-foreground/80">{label}:</strong>
    {value && <span className="ml-1.5 text-muted-foreground">{value}</span>}
  </div>
);

export async function generateStaticParams() {
  return nakshatraData.nakshatras.map((nakshatra) => ({
    id: nakshatra.id,
  }));
}
