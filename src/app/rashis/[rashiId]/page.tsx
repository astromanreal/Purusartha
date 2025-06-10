
// src/app/rashis/[rashiId]/page.tsx
import { notFound } from 'next/navigation';
import Link from 'next/link';
import type { Metadata, ResolvingMetadata } from 'next';
import { rashiData } from '@/data/rashi-data';
import type { Rashi } from '@/types';
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import {
  ArrowLeftCircle, Star as StarIcon, Users, Palette, Sparkles, Brain, Heart, CheckCircle, AlertTriangle, MessageSquare, Award, ListChecks, Info, BookOpen, Target, Gem, Hash, Mountain, Wind, Droplets, Flame, Shield, Moon, Sun, GraduationCap, Hourglass, Lightbulb, ThumbsUp, ThumbsDown, BookHeart, UserCircle, CalendarClock, Briefcase, Activity as HealthIcon, Orbit as ChakraIcon, HeartHandshake
} from "lucide-react";
import { cn } from '@/lib/utils';
import { APP_NAME } from '@/lib/constants';

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000';

type Props = {
  params: { rashiId: string };
};

const getElementIcon = (element: Rashi["element"]): React.ElementType => {
  switch (element) {
    case "Fire": return Flame;
    case "Earth": return Mountain;
    case "Air": return Wind;
    case "Water": return Droplets;
    default: return Sparkles;
  }
};

const getPlanetIcon = (planet: Rashi["planet"]): React.ElementType => {
  switch (planet.toLowerCase()) {
    case "mars": return Shield;
    case "venus": return Heart;
    case "mercury": return MessageSquare;
    case "moon": return Moon;
    case "sun": return Sun;
    case "jupiter": return GraduationCap;
    case "saturn": return Hourglass;
    default: return StarIcon;
  }
};

export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const rashiId = params.rashiId;
  const rashi = rashiData.rashis.find(r => r.id === rashiId);

  if (!rashi) {
    return {
      title: `Rashi Not Found | ${APP_NAME}`,
      description: `The requested Rashi (Zodiac Sign) could not be found. Explore other Vedic signs on ${APP_NAME}.`,
    };
  }

  const title = `${rashi.rashi_name_english} (${rashi.rashi_name_hindi}) - Vedic Zodiac Sign | ${APP_NAME}`;
  const description = `Explore ${rashi.rashi_name_english} (${rashi.rashi_name_hindi}): its symbol (${rashi.symbol}), element (${rashi.element}), ruling planet (${rashi.planet}), key traits, personality, compatibility, and mythological significance in Vedic astrology on ${APP_NAME}.`;
  const keywords = [
    rashi.rashi_name_english,
    rashi.rashi_name_hindi,
    rashi.symbol,
    rashi.element,
    rashi.planet,
    "Vedic Astrology",
    "Rashi",
    "Zodiac Sign",
    ...rashi.key_traits,
    APP_NAME
  ];
  const canonicalUrl = `${BASE_URL}/rashis/${rashi.id}`;
  const ogImage = `${BASE_URL}/og-images/og-image-rashi-${rashi.id}.png`;
  const fallbackOgImage = `${BASE_URL}/og-images/og-image-rashis-default.png`;

  return {
    title,
    description,
    keywords,
    alternates: { canonical: canonicalUrl },
    openGraph: {
      title,
      description,
      url: canonicalUrl,
      siteName: APP_NAME,
      images: [
        { url: ogImage, width: 1200, height: 630, alt: `${rashi.rashi_name_english} - ${APP_NAME}` },
        { url: fallbackOgImage, width: 1200, height: 630, alt: `Vedic Rashis - ${APP_NAME}` }
      ],
      type: 'article',
      article: {
        tags: keywords,
        section: "Vedic Astrology",
      }
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [ogImage, fallbackOgImage],
    },
  };
}

const DetailSection: React.FC<{ title: string; icon: React.ElementType; children: React.ReactNode; className?: string; value?: string; defaultOpen?: boolean }> = ({ title, icon: Icon, children, className, value, defaultOpen = false }) => (
  <AccordionItem value={value || title.toLowerCase().replace(/\s+/g, '-')} className={`border bg-card/50 rounded-lg shadow-sm hover:shadow-md transition-shadow ${className}`}>
    <AccordionTrigger className="px-4 py-3 text-left hover:no-underline text-lg font-medium text-accent data-[state=open]:bg-accent/10">
      <div className="flex items-center">
        <Icon className="h-5 w-5 mr-3 text-accent/80" />
        {title}
      </div>
    </AccordionTrigger>
    <AccordionContent className="px-4 py-3 border-t text-base text-foreground/90 leading-relaxed">
      {children}
    </AccordionContent>
  </AccordionItem>
);

const InfoPill: React.FC<{ label: string; value?: string | null; icon?: React.ElementType; color?: string; textClass?: string }> = ({ label, value, icon: Icon, color, textClass = "text-foreground" }) => {
  if (!value && value !== "0") return null; // Allow "0" or similar string values for numbers
  return (
    <div className={cn("p-3 rounded-lg shadow-sm border flex items-center gap-2", color || "bg-muted/30 border-border/40")}>
      {Icon && <Icon className={cn("h-5 w-5", color ? "text-white/80" : "text-primary/70")} />}
      <div>
        <p className="text-xs font-medium text-muted-foreground">{label}</p>
        <p className={cn("text-sm font-semibold", textClass)}>{value}</p>
      </div>
    </div>
  );
};

export default function RashiDetailPage({ params }: Props) {
  const rashiId = params.rashiId;
  const rashi = rashiData.rashis.find(r => r.id === rashiId);

  if (!rashi) {
    notFound();
  }

  const ElementIcon = getElementIcon(rashi.element);
  const PlanetIcon = getPlanetIcon(rashi.planet);

  const defaultOpenSections = ['personality-overview', 'key-traits', 'strengths-weaknesses'];

  return (
    <div className="container mx-auto py-10 px-4">
      <Button variant="outline" asChild className="mb-8 group">
        <Link href="/rashis">
          <ArrowLeftCircle className="h-5 w-5 mr-2 transition-transform group-hover:-translate-x-1" />
          Back to All Rashis
        </Link>
      </Button>

      <Card className="overflow-hidden shadow-2xl border-primary/20 bg-card">
        <CardHeader className="p-6 md:p-8 bg-gradient-to-br from-primary/10 via-card to-accent/10 relative text-center">
           {rashi.symbolImage && <span className="text-5xl mb-4 mx-auto block" role="img" aria-label={`${rashi.symbol} symbol`}>{rashi.symbolImage}</span>}
           {!rashi.symbolImage && <StarIcon className="h-16 w-16 text-primary mx-auto mb-4 p-3 bg-background/70 rounded-full shadow-lg border border-border/50" />}
          <h1 className="text-3xl md:text-4xl font-extrabold text-primary mb-1">
            {rashi.rashi_name_english}
          </h1>
          <p className="text-2xl md:text-3xl font-semibold text-accent font-serif mb-3">{rashi.rashi_name_hindi}</p>
          <div className="flex flex-wrap justify-center items-center gap-x-4 gap-y-2">
            <Badge variant="secondary" className="text-md py-1 px-3">{rashi.symbol}</Badge>
            {rashi.birthDateRange && <Badge variant="outline" className="text-md py-1 px-3 border-primary/50 text-primary"><CalendarClock className="inline h-4 w-4 mr-1.5"/>{rashi.birthDateRange}</Badge>}
            {rashi.genderAssociation && <Badge variant="outline" className="text-md py-1 px-3 border-accent/50 text-accent"><UserCircle className="inline h-4 w-4 mr-1.5"/>{rashi.genderAssociation}</Badge>}
          </div>
        </CardHeader>

        <CardContent className="p-6 md:p-8 space-y-6">
          <section className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 mb-6">
            <InfoPill label="Element" value={rashi.element} icon={ElementIcon} />
            <InfoPill label="Ruling Planet" value={rashi.planet} icon={PlanetIcon} />
            <InfoPill label="Quality" value={rashi.quality} icon={Target} />
            <InfoPill label="Ruling Deity" value={rashi.ruling_deity} icon={Users} />
            <InfoPill label="Lucky Color" value={rashi.lucky_color} icon={Palette} />
            <InfoPill label="Lucky Number" value={rashi.lucky_number} icon={Hash} />
            <InfoPill label="Gemstone(s)" value={rashi.gemstone} icon={Gem} />
             {rashi.chakraAssociation && (
                <InfoPill label={rashi.chakraAssociation.chakra} value={rashi.chakraAssociation.meaning} icon={ChakraIcon} />
            )}
          </section>

          <Separator className="my-8 border-dashed" />
          
          <Accordion type="multiple" defaultValue={defaultOpenSections} className="w-full space-y-4">
            <DetailSection title="Personality Overview" icon={Info} value="personality-overview">
              <p className="text-lg leading-relaxed">{rashi.personality}</p>
            </DetailSection>
            
            {rashi.key_traits && rashi.key_traits.length > 0 && (
              <DetailSection title="Key Traits" icon={ListChecks} value="key-traits">
                <div className="flex flex-wrap gap-2">
                  {rashi.key_traits.map((trait, index) => (
                    <Badge key={index} variant="outline" className="text-sm py-1 px-3 border-primary/60 text-primary/90 bg-primary/10">{trait}</Badge>
                  ))}
                </div>
              </DetailSection>
            )}

            <DetailSection title="Strengths & Weaknesses" icon={Brain} value="strengths-weaknesses">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {rashi.strengths && rashi.strengths.length > 0 && (
                  <div className="p-4 bg-green-500/5 border border-green-500/20 rounded-lg">
                    <h3 className="text-lg font-semibold text-green-600 dark:text-green-400 mb-2 flex items-center"><ThumbsUp className="h-5 w-5 mr-2"/>Strengths</h3>
                    <ul className="list-disc list-inside space-y-1 text-green-700/90 dark:text-green-300/90">
                      {rashi.strengths.map((strength, index) => <li key={index}>{strength}</li>)}
                    </ul>
                  </div>
                )}
                {rashi.weaknesses && rashi.weaknesses.length > 0 && (
                  <div className="p-4 bg-red-500/5 border border-red-500/20 rounded-lg">
                     <h3 className="text-lg font-semibold text-red-600 dark:text-red-400 mb-2 flex items-center"><ThumbsDown className="h-5 w-5 mr-2"/>Weaknesses</h3>
                    <ul className="list-disc list-inside space-y-1 text-red-700/90 dark:text-red-300/90">
                      {rashi.weaknesses.map((weakness, index) => <li key={index}>{weakness}</li>)}
                    </ul>
                  </div>
                )}
              </div>
            </DetailSection>
            
            {rashi.careerInclinations && rashi.careerInclinations.length > 0 && (
              <DetailSection title="Career Inclinations" icon={Briefcase} value="career-inclinations">
                <ul className="list-disc list-inside space-y-1">
                  {rashi.careerInclinations.map((career, index) => <li key={index}>{career}</li>)}
                </ul>
              </DetailSection>
            )}

            {rashi.healthConcerns && rashi.healthConcerns.length > 0 && (
              <DetailSection title="Health Concerns" icon={HealthIcon} value="health-concerns">
                 <ul className="list-disc list-inside space-y-1">
                  {rashi.healthConcerns.map((concern, index) => <li key={index}>{concern}</li>)}
                </ul>
              </DetailSection>
            )}
            
            {rashi.compatibleSigns && (
                <DetailSection title="Compatibility Insights" icon={HeartHandshake} value="compatibility">
                    <div className="space-y-3">
                        <div>
                            <h4 className="text-md font-semibold text-green-600 mb-1">Highly Compatible:</h4>
                            <div className="flex flex-wrap gap-2">
                                {rashi.compatibleSigns.highlyCompatible.map(sign => <Badge key={sign} variant="secondary" className="bg-green-500/10 text-green-700 border-green-500/30">{sign}</Badge>)}
                            </div>
                        </div>
                        <div>
                            <h4 className="text-md font-semibold text-yellow-600 mb-1">Moderately Compatible:</h4>
                             <div className="flex flex-wrap gap-2">
                                {rashi.compatibleSigns.moderatelyCompatible.map(sign => <Badge key={sign} variant="secondary" className="bg-yellow-500/10 text-yellow-700 border-yellow-500/30">{sign}</Badge>)}
                            </div>
                        </div>
                        <div>
                            <h4 className="text-md font-semibold text-red-600 mb-1">Least Compatible:</h4>
                             <div className="flex flex-wrap gap-2">
                                {rashi.compatibleSigns.leastCompatible.map(sign => <Badge key={sign} variant="secondary" className="bg-red-500/10 text-red-700 border-red-500/30">{sign}</Badge>)}
                            </div>
                        </div>
                    </div>
                </DetailSection>
            )}

            {rashi.mythological_significance && (
              <DetailSection title="Mythological Significance" icon={BookHeart} value="mythology">
                <p className="whitespace-pre-wrap">{rashi.mythological_significance}</p>
              </DetailSection>
            )}
            {!rashi.mythological_significance && (
              <DetailSection title="Mythological Significance" icon={BookHeart} value="mythology-placeholder">
                <p className="text-muted-foreground italic">Detailed mythological significance for {rashi.rashi_name_english} will be added soon. It is often linked to stories about its ruling planet and symbol.</p>
              </DetailSection>
            )}
          </Accordion>

        </CardContent>

        <CardFooter className="p-6 md:p-8 border-t border-border/30 bg-muted/30">
          <p className="text-xs text-muted-foreground text-center w-full">
            Rashi characteristics are general guidelines in Vedic astrology. A complete birth chart analysis provides deeper and more personalized insights. Information presented here is for educational purposes.
          </p>
        </CardFooter>
      </Card>
    </div>
  );
}

export async function generateStaticParams() {
  return rashiData.rashis.map((rashi) => ({
    rashiId: rashi.id,
  }));
}
