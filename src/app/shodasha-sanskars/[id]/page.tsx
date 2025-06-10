
// src/app/shodasha-sanskars/[id]/page.tsx
import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import type { Metadata, ResolvingMetadata } from 'next';
import { shodashaSanskarsData } from '@/data/shodasha-sanskars-data';
import type { Sanskar, SanskarMultimediaResource } from '@/types';
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { ScrollArea } from '@/components/ui/scroll-area';
import { ArrowLeftCircle, BookOpenText, Users, Palette, Sparkles, Brain, Heart, CheckCircle, AlertTriangle, MessageSquare, Award, ListChecks, Info, Video, Image as ImageIcon } from "lucide-react";
import * as LucideIcons from "lucide-react";
import { APP_NAME } from '@/lib/constants';

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000'; 

type Props = {
  params: { id: string };
};

const getIconComponent = (iconName: keyof typeof LucideIcons | undefined): React.ElementType => {
  if (iconName && LucideIcons[iconName]) {
    return LucideIcons[iconName] as React.ElementType;
  }
  return LucideIcons.Sparkles; 
};

export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const id = params.id;
  const sanskar = shodashaSanskarsData.find(s => s.id === id);

  if (!sanskar) {
    return {
      title: `Sanskar Not Found | ${APP_NAME}`,
      description: `The requested Sanskar could not be found. Explore other sacred Hindu rites on ${APP_NAME}.`,
    };
  }

  const title = `${sanskar.sanskritName.split('(')[0].trim()} - ${sanskar.englishName} | Shodasha Sanskaras | ${APP_NAME}`;
  const description = `Explore ${sanskar.sanskritName.split('(')[0].trim()} (${sanskar.englishName}): its detailed description, ritual steps, symbolism, Vedic significance, mantra, cultural importance, and practical relevance in Sanatan Dharma. ${sanskar.briefExplanation}`;
  
  const keywords = [
    sanskar.sanskritName.split('(')[0].trim(),
    sanskar.englishName,
    "Shodasha Sanskaras",
    "Hindu Rites of Passage",
    "Vedic Rituals",
    sanskar.category,
    sanskar.stageOfLife,
    APP_NAME,
  ];

  const canonicalUrl = `${BASE_URL}/shodasha-sanskars/${sanskar.id}`;
  const primaryImage = sanskar.multimediaResources?.find(r => r.type === 'image' && r.url.startsWith('https://placehold.co'));
  const ogImage = primaryImage ? primaryImage.url : `${BASE_URL}/og-images/og-image-sanskars-default.png`; // Use default if placeholder
  const fallbackOgImage = `${BASE_URL}/og-images/og-image-sanskars-default.png`;


  return {
    title,
    description,
    keywords,
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title,
      description,
      url: canonicalUrl,
      siteName: APP_NAME,
      images: [
        { url: ogImage, width: 1200, height: 630, alt: `${sanskar.englishName} - ${APP_NAME}` },
        // Removed explicit fallback if primary is already default
      ],
      type: 'article',
      article: {
        tags: keywords,
        section: "Vedic Rituals",
      }
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [ogImage], // Provide specific and fallback
    },
  };
}

const SectionAccordion: React.FC<{ title: string; icon?: React.ElementType; children: React.ReactNode; value: string; className?: string }> = ({ title, icon: Icon, children, value, className }) => (
  <AccordionItem value={value} className={`border bg-card/50 rounded-lg shadow-sm hover:shadow-md transition-shadow ${className}`}>
    <AccordionTrigger className="px-4 py-3 text-left hover:no-underline text-lg font-medium text-accent data-[state=open]:bg-accent/10">
      <div className="flex items-center">
        {Icon && <Icon className="h-5 w-5 mr-3 text-accent/80" />}
        {title}
      </div>
    </AccordionTrigger>
    <AccordionContent className="px-4 py-3 border-t text-base text-foreground/90 leading-relaxed">
      {children}
    </AccordionContent>
  </AccordionItem>
);


export default function SanskarDetailPage({ params }: { params: { id: string } }) {
  const sanskar = shodashaSanskarsData.find(s => s.id === params.id);

  if (!sanskar) {
    notFound();
  }
  
  const IconComponent = getIconComponent(sanskar.iconName);

  return (
    <div className="container mx-auto py-10 px-4">
      <Button variant="outline" asChild className="mb-8 group">
        <Link href="/shodasha-sanskars">
          <ArrowLeftCircle className="h-5 w-5 mr-2 transition-transform group-hover:-translate-x-1" />
          Back to All Sanskaras
        </Link>
      </Button>

      <Card className="overflow-hidden shadow-2xl border-primary/20 bg-card">
        <CardHeader className="p-6 md:p-8 bg-gradient-to-br from-primary/10 via-card to-accent/10 relative text-center">
          <div className="inline-flex items-center justify-center p-3 bg-primary/20 rounded-full mb-4 mx-auto shadow-lg">
            <IconComponent className="h-12 w-12 text-primary" />
          </div>
          <h1 className="text-3xl md:text-4xl font-extrabold text-primary mb-1">
            {sanskar.sanskritName.split('(')[0].trim()}
             {sanskar.sanskritName.includes('(') && <span className="block text-2xl md:text-3xl font-semibold text-accent/80 font-serif">{sanskar.sanskritName.substring(sanskar.sanskritName.indexOf('('))}</span>}
          </h1>
          <p className="text-xl md:text-2xl font-semibold text-accent/90">{sanskar.englishName}</p>
          <div className="mt-3 flex flex-wrap justify-center gap-2">
            <Badge variant="secondary">{sanskar.stageOfLife}</Badge>
            <Badge variant="outline" className="border-accent text-accent">{sanskar.category}</Badge>
          </div>
           <CardDescription className="text-md text-muted-foreground mt-4 max-w-2xl mx-auto">{sanskar.briefExplanation}</CardDescription>
        </CardHeader>

        <CardContent className="p-6 md:p-8 space-y-10">
          <Accordion type="multiple" defaultValue={['details', 'significance', 'purpose']} className="w-full space-y-4">
             {sanskar.purpose && (
              <SectionAccordion title="Purpose of the Sanskar" icon={Award} value="purpose">
                <p>{sanskar.purpose}</p>
              </SectionAccordion>
            )}
            {sanskar.detailedDescription && (
              <SectionAccordion title="Detailed Description" icon={Info} value="details">
                <p className="whitespace-pre-wrap">{sanskar.detailedDescription}</p>
              </SectionAccordion>
            )}
            {sanskar.timing && (
              <SectionAccordion title="Timing & Auspiciousness" icon={LucideIcons.CalendarClock} value="timing">
                {sanskar.timing.recommendedTime && <p><strong>Recommended Time/Age:</strong> {sanskar.timing.recommendedTime}</p>}
                {sanskar.timing.astrologicalConditions && <p><strong>Astrological Conditions:</strong> {sanskar.timing.astrologicalConditions}</p>}
                {sanskar.timing.idealNakshatras && sanskar.timing.idealNakshatras.length > 0 && <p><strong>Ideal Nakshatras:</strong> {sanskar.timing.idealNakshatras.join(', ')}</p>}
                {sanskar.timing.auspiciousOccasions && sanskar.timing.auspiciousOccasions.length > 0 && <p><strong>Auspicious Occasions:</strong> {sanskar.timing.auspiciousOccasions.join(', ')}</p>}
                {sanskar.timing.ceremonyDuration && <p><strong>Ceremony Duration:</strong> {sanskar.timing.ceremonyDuration}</p>}
              </SectionAccordion>
            )}

            {sanskar.ritualSteps && sanskar.ritualSteps.length > 0 && (
              <SectionAccordion title="Key Ritual Steps" icon={ListChecks} value="rituals">
                <ul className="list-decimal list-inside space-y-1 pl-2">
                  {sanskar.ritualSteps.map((step, index) => <li key={index} className="mb-1">{step}</li>)}
                </ul>
              </SectionAccordion>
            )}
            
            {sanskar.symbolism && (
              <SectionAccordion title="Symbolism" icon={Sparkles} value="symbolism">
                <p className="whitespace-pre-wrap">{sanskar.symbolism}</p>
              </SectionAccordion>
            )}

            {sanskar.vedicSignificance && (
              <SectionAccordion title="Vedic Significance" icon={BookOpenText} value="significance">
                <p className="whitespace-pre-wrap">{sanskar.vedicSignificance}</p>
              </SectionAccordion>
            )}

            {sanskar.scripturalReferences && sanskar.scripturalReferences.length > 0 && (
                <SectionAccordion title="Scriptural References" icon={BookOpenText} value="scriptures">
                    {sanskar.scripturalReferences.map((ref, index) => (
                        <div key={index} className="mb-3 p-3 border-l-4 border-accent/50 bg-accent/5 rounded">
                            <p className="italic">"{ref.quote}"</p>
                            <p className="text-sm text-muted-foreground mt-1">- {ref.text}{ref.explanation ? ` (${ref.explanation})` : ''}</p>
                        </div>
                    ))}
                </SectionAccordion>
            )}

            {sanskar.mantraSnippet && (
              <SectionAccordion title="Associated Mantra Snippet" icon={MessageSquare} value="mantra">
                 <p className="font-serif text-lg text-primary/90 mb-1 italic">{sanskar.mantraSnippet}</p>
              </SectionAccordion>
            )}
            
            {sanskar.culturalSignificance && (
              <SectionAccordion title="Cultural Significance" icon={Users} value="cultural">
                <p className="whitespace-pre-wrap">{sanskar.culturalSignificance}</p>
              </SectionAccordion>
            )}

            {sanskar.practicalRelevance && (
              <SectionAccordion title="Practical Relevance Today" icon={Brain} value="relevance">
                <p className="whitespace-pre-wrap">{sanskar.practicalRelevance}</p>
              </SectionAccordion>
            )}

            {sanskar.relatedConcepts && sanskar.relatedConcepts.length > 0 && (
              <SectionAccordion title="Related Concepts" icon={LucideIcons.Link} value="related">
                <div className="flex flex-wrap gap-2">
                    {sanskar.relatedConcepts.map(concept => <Badge key={concept} variant="secondary">{concept}</Badge>)}
                </div>
              </SectionAccordion>
            )}
            
            {sanskar.multimediaResources && sanskar.multimediaResources.length > 0 && (
                <SectionAccordion title="Multimedia Resources" icon={ImageIcon} value="multimedia">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {sanskar.multimediaResources.map((resource, index) => (
                            <Card key={index} className="overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                                {resource.type === 'image' && resource.url.startsWith('https://placehold.co') && (
                                    <Image 
                                        src={resource.url} 
                                        alt={resource.caption || `Image for ${sanskar.englishName}`} 
                                        width={300} 
                                        height={200} 
                                        className="w-full h-48 object-cover"
                                        data-ai-hint={resource.dataAiHint || sanskar.englishName.toLowerCase().replace(/\s/g, '_')}
                                    />
                                )}
                                {resource.type === 'video' && (
                                    <div className="aspect-video bg-muted rounded-t-md flex items-center justify-center">
                                        <a href={resource.url} target="_blank" rel="noopener noreferrer" className="text-primary hover:underline flex items-center">
                                            <Video className="mr-2 h-5 w-5"/> Watch Video 
                                            {resource.caption && <span className="text-xs text-muted-foreground ml-1">({resource.caption.split('.')[0]})</span>}
                                        </a>
                                    </div>
                                )}
                                {resource.type === 'image' && !resource.url.startsWith('https://placehold.co') && (
                                   <div className="p-2 text-sm text-muted-foreground">Non-placeholder image resource: {resource.caption || resource.url}</div>
                                )}
                                {resource.caption && resource.type === 'image' && (
                                    <p className="text-xs text-muted-foreground p-2 text-center bg-background/50">{resource.caption}</p>
                                )}
                                 {resource.type !== 'image' && resource.type !== 'video' && resource.caption && (
                                    <div className="p-2 text-sm">
                                      <Link href={resource.url} target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                                        {resource.caption}
                                      </Link>
                                    </div>
                                 )}
                            </Card>
                        ))}
                    </div>
                </SectionAccordion>
            )}
          </Accordion>
        </CardContent>

        <CardFooter className="p-6 md:p-8 border-t border-border/30 bg-muted/30">
          <p className="text-xs text-muted-foreground text-center w-full">
            The Shodasha Sanskaras are profound rites guiding life's journey. Practices may vary by tradition.
          </p>
        </CardFooter>
      </Card>
    </div>
  );
}

export async function generateStaticParams() {
  return shodashaSanskarsData.map((sanskar) => ({
    id: sanskar.id,
  }));
}


    