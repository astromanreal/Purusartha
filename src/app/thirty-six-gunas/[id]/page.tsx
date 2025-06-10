
// src/app/thirty-six-gunas/[id]/page.tsx
import { notFound } from 'next/navigation';
import Link from 'next/link';
import type { Metadata, ResolvingMetadata } from 'next';
import { thirtySixGunasData } from '@/data/thirty-six-gunas-data';
import type { GunaDefinition, ScripturalReference } from '@/types';
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { ScrollArea } from '@/components/ui/scroll-area';
import { ArrowLeftCircle, BookOpenText, Users, Palette, Sparkles, Brain, Heart, CheckCircle, AlertTriangle, MessageSquare, Award } from "lucide-react";
import { APP_NAME } from '@/lib/constants';

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000';

type Props = {
  params: { id: string };
};

export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const id = params.id;
  const guna = thirtySixGunasData.find(g => g.id === id);

  if (!guna) {
    return {
      title: `Guna Not Found | ${APP_NAME}`,
      description: `The requested Guna could not be found. Explore other virtues on ${APP_NAME}.`,
    };
  }

  const title = `${guna.sanskritName.split('(')[0].trim()} (${guna.englishMeaning}) - A Divine Virtue | ${APP_NAME}`;
  const description = `Learn about ${guna.sanskritName.split('(')[0].trim()} (${guna.englishMeaning}): its detailed meaning, importance, practice methods, scriptural references, and daily life examples in Sanatan Dharma. ${guna.shortDescription}`;
  
  const keywords = [
    guna.sanskritName.split('(')[0].trim(),
    guna.englishMeaning,
    "Sanatan Dharma Virtues",
    "Hindu Ethics",
    "Spiritual Qualities",
    "Gunas",
    ...(guna.tags || []),
    APP_NAME,
  ];

  const canonicalUrl = `${BASE_URL}/thirty-six-gunas/${guna.id}`;
  // Placeholder - ideally each Guna page would have a specific OG image
  const ogImage = `${BASE_URL}/og-images/og-image-guna-${guna.id}.png`; 
  const fallbackOgImage = `${BASE_URL}/og-images/og-image-gunas-default.png`;


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
        { url: ogImage, width: 1200, height: 630, alt: `${guna.sanskritName.split('(')[0].trim()} - ${APP_NAME}` },
        { url: fallbackOgImage, width: 1200, height: 630, alt: `Sanatan Dharma Virtues - ${APP_NAME}` }
      ],
      type: 'article',
      article: {
        tags: keywords,
        section: "Spiritual Virtues",
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

const SectionCard: React.FC<{ title: string; icon?: LucideIcon; children: React.ReactNode; className?: string }> = ({ title, icon: Icon, children, className }) => (
  <Card className={`shadow-md border-border/30 bg-card/80 ${className}`}>
    <CardHeader className="pb-3">
      <CardTitle className="text-xl font-semibold text-primary flex items-center">
        {Icon && <Icon className="h-6 w-6 mr-3 text-accent" />}
        {title}
      </CardTitle>
    </CardHeader>
    <CardContent className="text-base text-foreground/90 leading-relaxed">
      {children}
    </CardContent>
  </Card>
);

export default function GunaDetailPage({ params }: { params: { id: string } }) {
  const guna = thirtySixGunasData.find(g => g.id === params.id);

  if (!guna) {
    notFound();
  }

  return (
    <div className="container mx-auto py-10 px-4">
      <Button variant="outline" asChild className="mb-8 group">
        <Link href="/thirty-six-gunas">
          <ArrowLeftCircle className="h-5 w-5 mr-2 transition-transform group-hover:-translate-x-1" />
          Back to All Gunas
        </Link>
      </Button>

      <Card className="overflow-hidden shadow-2xl border-primary/20 bg-card">
        <CardHeader className="p-6 md:p-8 bg-gradient-to-br from-primary/10 via-card to-accent/10 relative text-center">
          {guna.icon && <p className="text-5xl mb-4 mx-auto">{guna.icon}</p>}
          <h1 className="text-3xl md:text-4xl font-extrabold text-primary mb-1">
            {guna.sanskritName.split('(')[0].trim()}
            {guna.sanskritName.includes('(') && <span className="text-2xl md:text-3xl font-semibold text-accent font-serif ml-2">{guna.sanskritName.substring(guna.sanskritName.indexOf('('))}</span>}
          </h1>
          <p className="text-xl md:text-2xl font-semibold text-accent/90">{guna.englishMeaning}</p>
          <CardDescription className="text-md text-muted-foreground mt-2 max-w-2xl mx-auto">{guna.shortDescription}</CardDescription>
        </CardHeader>

        <CardContent className="p-6 md:p-8 space-y-10">
          {guna.detailedDescription && (
            <SectionCard title="Detailed Description" icon={BookOpenText}>
              <p>{guna.detailedDescription}</p>
            </SectionCard>
          )}

          {guna.importance && (
            <SectionCard title="Significance & Importance" icon={Sparkles}>
              <p>{guna.importance}</p>
            </SectionCard>
          )}
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {guna.practiceMethods && guna.practiceMethods.length > 0 && (
              <SectionCard title="Practice Methods" icon={Brain}>
                <ul className="list-disc list-inside space-y-1 pl-2">
                  {guna.practiceMethods.map((method, index) => <li key={index}>{method}</li>)}
                </ul>
              </SectionCard>
            )}

            {guna.effectsOfCultivation && guna.effectsOfCultivation.length > 0 && (
              <SectionCard title="Effects of Cultivation" icon={Heart}>
                <ul className="list-disc list-inside space-y-1 pl-2">
                  {guna.effectsOfCultivation.map((effect, index) => <li key={index}>{effect}</li>)}
                </ul>
              </SectionCard>
            )}
          </div>
          
          {guna.scripturalReferences && guna.scripturalReferences.length > 0 && (
            <SectionCard title="Scriptural References" icon={BookOpenText}>
              <div className="space-y-4">
                {guna.scripturalReferences.map((ref: ScripturalReference, index: number) => (
                  <div key={index} className="p-3 border rounded-md bg-muted/30">
                    <h4 className="font-semibold text-accent/80">{ref.text}</h4>
                    <blockquote className="italic text-foreground/80 my-1 pl-3 border-l-2 border-accent/50">"{ref.quote}"</blockquote>
                    <p className="text-sm text-muted-foreground">{ref.explanation}</p>
                  </div>
                ))}
              </div>
            </SectionCard>
          )}
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {guna.commonMisunderstandings && guna.commonMisunderstandings.length > 0 && (
              <SectionCard title="Common Misunderstandings" icon={AlertTriangle} className="border-destructive/20 bg-destructive/5">
                <ul className="list-disc list-inside space-y-1 pl-2 text-destructive-foreground/90">
                  {guna.commonMisunderstandings.map((mis, index) => <li key={index}>{mis}</li>)}
                </ul>
              </SectionCard>
            )}

            {guna.examplesInDailyLife && guna.examplesInDailyLife.length > 0 && (
              <SectionCard title="Examples in Daily Life" icon={CheckCircle} className="border-green-500/20 bg-green-500/5">
                <ul className="list-disc list-inside space-y-1 pl-2 text-green-700/90 dark:text-green-400/90">
                  {guna.examplesInDailyLife.map((example, index) => <li key={index}>{example}</li>)}
                </ul>
              </SectionCard>
            )}
          </div>

          {guna.modernRelevance && (
            <SectionCard title="Modern Relevance" icon={MessageSquare}>
              <p>{guna.modernRelevance}</p>
            </SectionCard>
          )}

          <div className="flex flex-wrap gap-4 items-center">
            {guna.relatedConcepts && guna.relatedConcepts.length > 0 && (
                <div>
                    <h4 className="text-sm font-semibold text-muted-foreground mb-1">Related Concepts:</h4>
                    <div className="flex flex-wrap gap-2">
                        {guna.relatedConcepts.map(concept => <Badge key={concept} variant="secondary">{concept}</Badge>)}
                    </div>
                </div>
            )}
            {guna.category && (
                <div>
                    <h4 className="text-sm font-semibold text-muted-foreground mb-1">Category:</h4>
                    <Badge variant="outline" className="border-primary/50 text-primary bg-primary/10">{guna.category}</Badge>
                </div>
            )}
             {guna.tags && guna.tags.length > 0 && (
                 <div>
                    <h4 className="text-sm font-semibold text-muted-foreground mb-1">Tags:</h4>
                    <div className="flex flex-wrap gap-2">
                        {guna.tags.map(tag => <Badge key={tag} variant="outline">{tag}</Badge>)}
                    </div>
                </div>
            )}
          </div>
          
        </CardContent>

        <CardFooter className="p-6 md:p-8 border-t border-border/30 bg-muted/30">
          <p className="text-xs text-muted-foreground text-center w-full">
            Cultivating these Gunas (virtues) leads to a balanced, harmonious, and spiritually fulfilling life. The information provided is for educational purposes.
          </p>
        </CardFooter>
      </Card>
    </div>
  );
}

export async function generateStaticParams() {
  return thirtySixGunasData.map((guna) => ({
    id: guna.id,
  }));
}

    