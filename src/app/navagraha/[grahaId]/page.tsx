
// src/app/navagraha/[grahaId]/page.tsx
import { notFound } from 'next/navigation';
import Link from 'next/link';
import type { Metadata, ResolvingMetadata } from 'next';
import { navagrahaData } from '@/data/navagraha-data';
import type { Navagraha, Temple, ScripturalReference } from '@/types'; // Added Temple and ScripturalReference
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { ScrollArea } from '@/components/ui/scroll-area';
import { 
    ArrowLeftCircle, Sun, Moon, Shield, MessageSquare, GraduationCap, Heart, Hourglass, Orbit, Flag, Globe, 
    CalendarDays, Palette, Compass, Star as StarIcon, BookOpen, Users, AlertTriangle, Zap, Sparkles, Leaf, 
    Wind, Droplets, Flame, Layers, CloudFog, CheckCircle, BookOpenText, HelpCircle, // Added HelpCircle
    Gem, ListChecks, BarChart3, Info, Coins, ShieldAlert, Eye, Brain as BrainIcon, UserCheck, ExternalLink, Target, Stars
} from "lucide-react";
import { cn } from '@/lib/utils';
import { APP_NAME } from '@/lib/constants';

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000'; 

type Props = {
  params: { grahaId: string };
};

// Helper to get a specific icon for the Navagraha symbol
const NavagrahaSymbolIcon = ({ graha, className }: { graha: Navagraha, className?: string }) => {
  const commonClass = cn("h-10 w-10", className);
  switch (graha.name) {
    case "Surya": return <Sun className={cn(commonClass, "text-orange-500")} />;
    case "Chandra": return <Moon className={cn(commonClass, "text-slate-400")} />;
    case "Mangala": return <Shield className={cn(commonClass, "text-red-600")} />; 
    case "Budha": return <MessageSquare className={cn(commonClass, "text-green-500")} />; 
    case "Guru": return <GraduationCap className={cn(commonClass, "text-yellow-500")} />; 
    case "Shukra": return <Heart className={cn(commonClass, "text-pink-500")} />; 
    case "Shani": return <Hourglass className={cn(commonClass, "text-gray-600")} />; 
    case "Rahu": return <Orbit className={cn(commonClass, "text-indigo-500")} />; 
    case "Ketu": return <Flag className={cn(commonClass, "text-purple-500")} />; 
    default: return <Globe className={cn(commonClass, "text-muted-foreground")} />; 
  }
};

const ElementIcon = ({ element }: { element?: Navagraha["element"] }) => {
  const iconClasses = "h-4 w-4 mr-2 mt-0.5 shrink-0"; 

  if (!element) return <HelpCircle className={cn(iconClasses, "text-muted-foreground")} />;
  switch (element) {
    case "Fire": return <Flame className={cn(iconClasses, "text-red-500")} />;
    case "Water": return <Droplets className={cn(iconClasses, "text-blue-500")} />;
    case "Earth": return <Leaf className={cn(iconClasses, "text-green-600")} />;
    case "Air": return <Wind className={cn(iconClasses, "text-sky-400")} />;
    case "Ether (Akasha)": return <Layers className={cn(iconClasses, "text-purple-400")} />;
    case "Air/Shadow": return <CloudFog className={cn(iconClasses, "text-gray-500")} />;
    case "Fire/Shadow": return <CloudFog className={cn(iconClasses, "text-orange-400")} />; 
    default: return <HelpCircle className={cn(iconClasses, "text-muted-foreground")} />;
  }
};

const GrahaDetailProperty: React.FC<{ label: string; value?: string | string[] | null; icon?: LucideIcon; className?: string }> = ({ label, value, icon: Icon, className }) => {
    if (!value || (Array.isArray(value) && value.length === 0)) return null;
    return (
        <div className={cn("flex items-start text-sm mb-1.5", className)}>
            {Icon && <Icon className="h-4 w-4 text-primary/70 mr-2 mt-0.5 shrink-0" />}
            <strong className="font-medium text-foreground/80 w-32 shrink-0">{label}:</strong>
            <span className="text-muted-foreground">
                {Array.isArray(value) ? value.join(', ') : value}
            </span>
        </div>
    );
};

export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const grahaId = params.grahaId;
  const graha = navagrahaData.navagrahas.find(g => g.id === grahaId);

  if (!graha) {
    return {
      title: `Navagraha Not Found | ${APP_NAME}`,
      description: `The requested Navagraha could not be found. Explore other celestial influencers on ${APP_NAME}.`,
    };
  }

  const title = `${graha.name} (${graha.englishName}) - Navagraha | ${APP_NAME}`;
  const description = `Explore ${graha.name} (${graha.englishName}): its deity ${graha.deity}, significance in Vedic astrology, symbolism, mantra, cultural relevance, and more. ${graha.significance || graha.description}`;
  const keywords = [
    graha.name,
    graha.englishName,
    "Navagraha",
    "Vedic Astrology",
    "Hindu Planets",
    graha.deity,
    ...(graha.associatedNakshatras || []),
    APP_NAME
  ];
  const canonicalUrl = `${BASE_URL}/navagraha/${graha.id}`;
  const ogImage = `${BASE_URL}/og-images/og-image-navagraha-${graha.id}.png`; 
  const fallbackOgImage = `${BASE_URL}/og-images/og-image-navagraha-default.png`;

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
        { url: ogImage, width: 1200, height: 630, alt: `${graha.name} - ${APP_NAME}` },
        { url: fallbackOgImage, width: 1200, height: 630, alt: `Navagrahas - ${APP_NAME}` }
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

const SectionWrapper: React.FC<{ title: string; icon?: React.ElementType; children: React.ReactNode; className?: string; id?: string }> = ({ title, icon: IconComponent, children, className, id }) => (
  <section className={cn("py-6 scroll-mt-20", className)} id={id}>
    <div className="flex items-center mb-4">
      {IconComponent && <IconComponent className="h-7 w-7 mr-3 text-primary" />}
      <h2 className="text-2xl font-semibold text-accent">{title}</h2>
    </div>
    <div className="space-y-4 text-foreground/90 leading-relaxed text-base">
      {children}
    </div>
  </section>
);

const InfoPill: React.FC<{label: string, value?: string | React.ReactNode | null, icon?: React.ReactNode, color?: string}> = ({label, value, icon, color}) => {
    if (value === undefined || value === null || value === '') return null;
    return (
        <div className={cn("p-3 rounded-lg shadow-sm border", color ? color : "bg-muted/50 border-border/50")}>
            <div className="flex items-center mb-1">
                {icon} {/* Icon is rendered directly. It should include its own styling (size, color, margin) */}
                <h4 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">{label}</h4>
            </div>
            <p className="text-md font-medium text-foreground">{typeof value === 'string' ? value : <>{value}</>}</p>
        </div>
    );
};

export default function NavagrahaDetailPage({ params }: { params: { grahaId: string } }) {
  const graha = navagrahaData.navagrahas.find(g => g.id === params.grahaId);

  if (!graha) {
    notFound();
  }
  
  const grahaColorMap: Record<string, string> = {
    Surya: "bg-gradient-to-br from-orange-500/20 via-red-500/10 to-yellow-500/20",
    Chandra: "bg-gradient-to-br from-slate-400/20 via-gray-300/10 to-sky-400/20",
    Mangala: "bg-gradient-to-br from-red-600/20 via-orange-500/10 to-red-700/20",
    Budha: "bg-gradient-to-br from-green-500/20 via-lime-400/10 to-emerald-500/20",
    Guru: "bg-gradient-to-br from-yellow-500/20 via-amber-400/10 to-yellow-600/20",
    Shukra: "bg-gradient-to-br from-pink-500/20 via-fuchsia-400/10 to-rose-500/20",
    Shani: "bg-gradient-to-br from-gray-600/20 via-slate-500/10 to-neutral-700/20",
    Rahu: "bg-gradient-to-br from-indigo-500/20 via-purple-500/10 to-violet-600/20",
    Ketu: "bg-gradient-to-br from-purple-500/20 via-violet-400/10 to-fuchsia-600/20",
  };
  const headerBgClass = grahaColorMap[graha.name] || "bg-primary/10";
  const iconBaseClasses = "h-4 w-4 text-primary/70 mr-2 mt-0.5 shrink-0";

  return (
    <div className="container mx-auto py-10 px-4">
      <Button variant="outline" asChild className="mb-8 group">
        <Link href="/navagraha">
          <ArrowLeftCircle className="h-5 w-5 mr-2 transition-transform group-hover:-translate-x-1" />
          Back to All Navagrahas
        </Link>
      </Button>

      <Card className="overflow-hidden shadow-2xl border-primary/20 bg-card">
        <CardHeader className={cn("p-6 md:p-8 text-center relative", headerBgClass)}>
          <div className="inline-flex items-center justify-center p-3 bg-background/70 rounded-full mb-4 mx-auto shadow-lg border border-border/50">
            <NavagrahaSymbolIcon graha={graha} className="h-16 w-16" />
          </div>
          <h1 className="text-3xl md:text-4xl font-extrabold text-primary mb-1">
            {graha.name} ({graha.englishName})
          </h1>
          <p className="text-xl md:text-2xl font-semibold text-accent/90">{graha.sanskritName}</p>
          {graha.nature && <Badge variant="secondary" className="mt-3 mx-auto text-sm">{graha.nature}</Badge>}
        </CardHeader>

        <CardContent className="p-6 md:p-8 space-y-10">
          <SectionWrapper title="Overview" icon={Info}>
            <p className="text-lg leading-relaxed">{graha.description || "Detailed overview coming soon."}</p>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mt-4">
              <InfoPill label="Deity" value={graha.deity} icon={<UserCheck className={iconBaseClasses} />} />
              <InfoPill label="Gender" value={graha.gender} icon={<Users className={iconBaseClasses} />} />
              <InfoPill label="Caste" value={graha.caste} icon={<Users className={iconBaseClasses} />} />
              <InfoPill label="Dosha Nature" value={graha.dosha} icon={<BarChart3 className={iconBaseClasses} />} />
            </div>
          </SectionWrapper>

          <SectionWrapper title="Astrological Profile" icon={StarIcon}>
            <GrahaDetailProperty label="Significance" value={graha.significance} />
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                <InfoPill label="Day" value={graha.day} icon={<CalendarDays className={iconBaseClasses}/>} />
                <InfoPill label="Direction" value={graha.direction} icon={<Compass className={iconBaseClasses}/>} />
                <InfoPill label="Element" value={graha.element} icon={<ElementIcon element={graha.element}/>} />
                <InfoPill label="Associated Nakshatras" value={graha.associatedNakshatras?.join(', ')} icon={<Stars className={iconBaseClasses}/>}/>
                <InfoPill label="Metal" value={graha.metal} icon={<Coins className={iconBaseClasses}/>}/>
                <InfoPill label="Gemstone" value={graha.gemstone} icon={<Gem className={iconBaseClasses}/>}/>
                <InfoPill label="Chakra" value={graha.associatedChakra} icon={<Orbit className={iconBaseClasses}/>}/>
            </div>
             <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                    <h4 className="font-semibold text-md text-foreground/80 mb-2">Planetary Relationships:</h4>
                    <GrahaDetailProperty label="Friendly" value={graha.friendlyPlanets} />
                    <GrahaDetailProperty label="Enemy" value={graha.enemyPlanets} />
                    <GrahaDetailProperty label="Neutral" value={graha.neutralPlanets} />
                </div>
                <div>
                    <h4 className="font-semibold text-md text-foreground/80 mb-2">Dignities:</h4>
                    <GrahaDetailProperty label="Exalted In" value={graha.exaltedIn} />
                    <GrahaDetailProperty label="Debilitated In" value={graha.debilitatedIn} />
                    <GrahaDetailProperty label="Own Sign" value={graha.ownSign} />
                    <GrahaDetailProperty label="Mooltrikona" value={graha.mooltrikonaSign} />
                </div>
            </div>
             {graha.zodiacInfluence && (
                <div className="mt-6">
                    <h4 className="font-semibold text-md text-foreground/80 mb-2">Zodiac Influence:</h4>
                    <GrahaDetailProperty label="Rules Sign" value={graha.zodiacInfluence.ownZodiac} />
                    <GrahaDetailProperty label="Key Houses Influenced" value={graha.zodiacInfluence.houseSignificance?.join(', ')} />
                    <GrahaDetailProperty label="Karaka (Significator) Of" value={graha.zodiacInfluence.karakaOf} />
                </div>
            )}
            {graha.orbitDuration && ( // Check if orbitDuration exists before rendering the section
                <div className="mt-6">
                     <h4 className="font-semibold text-md text-foreground/80 mb-2">Orbital Details:</h4>
                    <GrahaDetailProperty label="Duration in Sign" value={graha.durationInSign} />
                    <GrahaDetailProperty label="Orbit Duration" value={graha.orbitDuration} />
                    <GrahaDetailProperty label="Average Speed" value={graha.averageSpeed} />
                </div>
            )}
          </SectionWrapper>

          {graha.symbolism && (
            <SectionWrapper title="Symbolism & Iconography" icon={Palette}>
              <GrahaDetailProperty label="Symbol" value={graha.symbolism?.symbol} />
              <GrahaDetailProperty label="Symbolic Meaning" value={graha.symbolism?.meaning} />
              {graha.symbolism?.representations && <GrahaDetailProperty label="Represents" value={graha.symbolism.representations} />}
              <InfoPill label="Primary Color" value={graha.color} icon={<Palette className={iconBaseClasses}/>} color={`bg-${graha.color?.split('/')[0].toLowerCase()}-500/10 border-${graha.color?.split('/')[0].toLowerCase()}-500/30`} />
              {graha.iconography && (
                <Accordion type="single" collapsible className="w-full mt-4">
                  <AccordionItem value="iconography-details">
                    <AccordionTrigger>View Iconography Details</AccordionTrigger>
                    <AccordionContent>
                      <GrahaDetailProperty label="Mount" value={graha.iconography.mount} />
                      <GrahaDetailProperty label="Weapon(s)" value={graha.iconography.weapon} />
                      <GrahaDetailProperty label="Hands" value={String(graha.iconography.hands)} />
                      <GrahaDetailProperty label="Appearance" value={graha.iconography.appearance} />
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              )}
            </SectionWrapper>
          )}
          
          {graha.healthInfluence && (
           <SectionWrapper title="Health & Psychological Influence" icon={Heart}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Card className="p-4 bg-muted/30">
                        <CardTitle className="text-sm font-semibold text-primary mb-1">Body Parts Governed</CardTitle>
                        <ul className="list-disc list-inside text-xs text-muted-foreground">
                            {graha.healthInfluence.bodyParts?.map(bp => <li key={bp}>{bp}</li>)}
                        </ul>
                    </Card>
                    <Card className="p-4 bg-muted/30">
                        <CardTitle className="text-sm font-semibold text-destructive mb-1">Potential Imbalances</CardTitle>
                        <ul className="list-disc list-inside text-xs text-muted-foreground">
                            {graha.healthInfluence.imbalances?.map(imb => <li key={imb}>{imb}</li>)}
                        </ul>
                    </Card>
                </div>
                {graha.psychologicalInfluence && (
                     <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                        <Card className="p-4 bg-green-500/10 border-green-500/20">
                            <CardTitle className="text-sm font-semibold text-green-700 dark:text-green-400 mb-1">Positive Traits</CardTitle>
                            <ul className="list-disc list-inside text-xs text-green-600 dark:text-green-300">
                                {graha.psychologicalInfluence.positiveTraits?.map(pt => <li key={pt}>{pt}</li>)}
                            </ul>
                        </Card>
                        <Card className="p-4 bg-red-500/10 border-red-500/20">
                            <CardTitle className="text-sm font-semibold text-red-700 dark:text-red-400 mb-1">Negative Traits</CardTitle>
                            <ul className="list-disc list-inside text-xs text-red-600 dark:text-red-300">
                                {graha.psychologicalInfluence.negativeTraits?.map(nt => <li key={nt}>{nt}</li>)}
                            </ul>
                        </Card>
                    </div>
                )}
          </SectionWrapper>
          )}

          {(graha.mantra || graha.beejMantra || graha.healingAndRemedies) && (
            <SectionWrapper title="Mantras & Remedies" icon={CheckCircle}>
                <div className="p-4 bg-primary/5 rounded-lg border border-primary/20 mb-4">
                {graha.mantra && <>
                    <h3 className="text-lg font-semibold text-primary mb-1">Primary Mantra:</h3>
                    <p className="font-mono text-xl whitespace-pre-line text-accent/90">{graha.mantra}</p>
                </>}
                {graha.beejMantra && (
                    <>
                        <h3 className="text-md font-semibold text-primary mt-3 mb-1">Beej Mantra:</h3>
                        <p className="font-mono text-lg whitespace-pre-line text-accent/80">{graha.beejMantra}</p>
                    </>
                )}
                <p className="text-sm text-muted-foreground mt-2">
                    Chanting these mantras is believed to propitiate the Graha and mitigate negative influences while enhancing positive ones.
                </p>
                </div>
                {graha.healingAndRemedies && (
                    <Accordion type="single" collapsible className="w-full">
                        <AccordionItem value="remedies-details">
                            <AccordionTrigger>View Detailed Remedies</AccordionTrigger>
                            <AccordionContent className="space-y-3">
                                <GrahaDetailProperty label="Fasting Day" value={graha.healingAndRemedies.fastingDay} icon={CalendarDays}/>
                                <GrahaDetailProperty label="Donations" value={graha.healingAndRemedies.donations} icon={Heart}/>
                                {graha.healingAndRemedies.spiritualRemedies && graha.healingAndRemedies.spiritualRemedies.length > 0 && (
                                    <div>
                                        <strong className="font-medium text-foreground/80 text-sm">Spiritual Remedies:</strong>
                                        <ul className="list-disc list-inside ml-4 text-sm text-muted-foreground">
                                            {graha.healingAndRemedies.spiritualRemedies.map(sr => <li key={sr}>{sr}</li>)}
                                        </ul>
                                    </div>
                                )}
                                {graha.healingAndRemedies.gemstoneUsage && (
                                    <div>
                                        <strong className="font-medium text-foreground/80 text-sm">Gemstone Usage ({graha.healingAndRemedies.gemstoneUsage.gem}):</strong>
                                        <div className="ml-4 text-sm text-muted-foreground">
                                            <p>Wear on: {graha.healingAndRemedies.gemstoneUsage.wornOn}</p>
                                            <p>Day to wear: {graha.healingAndRemedies.gemstoneUsage.dayToWear}</p>
                                            <p>Metal: {graha.healingAndRemedies.gemstoneUsage.metal}</p>
                                        </div>
                                    </div>
                                )}
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>
                )}
            </SectionWrapper>
          )}

          <SectionWrapper title="Mythological Stories & Cultural Relevance" icon={BookOpenText}>
             {graha.mythologicalReferences && (
                <Accordion type="single" collapsible className="w-full mb-4">
                    <AccordionItem value="mythology-details">
                        <AccordionTrigger>Mythological References</AccordionTrigger>
                        <AccordionContent className="space-y-2">
                            <GrahaDetailProperty label="Mentioned In Texts" value={graha.mythologicalReferences.texts} />
                            {graha.mythologicalReferences.stories && graha.mythologicalReferences.stories.length > 0 && (
                                <div>
                                    <strong className="font-medium text-foreground/80 text-sm">Key Stories:</strong>
                                    <ul className="list-disc list-inside ml-4 text-sm text-muted-foreground">
                                        {graha.mythologicalReferences.stories.map(story => <li key={story}>{story}</li>)}
                                    </ul>
                                </div>
                            )}
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>
            )}
            {graha.spiritualSignificance && (
                 <Accordion type="single" collapsible className="w-full mb-4">
                    <AccordionItem value="spiritual-significance-details">
                        <AccordionTrigger>Spiritual Significance</AccordionTrigger>
                        <AccordionContent className="space-y-2">
                            <GrahaDetailProperty label="Role in Sanatan Dharma" value={graha.spiritualSignificance.roleInSanatanDharma} />
                            <GrahaDetailProperty label="Associated Vedas" value={graha.spiritualSignificance.associatedVedas} />
                            {graha.spiritualSignificance.majorStotras && graha.spiritualSignificance.majorStotras.length > 0 && (
                                <div>
                                    <strong className="font-medium text-foreground/80 text-sm">Major Stotras:</strong>
                                    <ul className="list-disc list-inside ml-4 text-sm text-muted-foreground">
                                        {graha.spiritualSignificance.majorStotras.map(stotra => <li key={stotra}>{stotra}</li>)}
                                    </ul>
                                </div>
                            )}
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>
            )}
            {graha.culturalAssociations && (
                 <Accordion type="single" collapsible className="w-full">
                    <AccordionItem value="cultural-assoc-details">
                        <AccordionTrigger>Cultural Associations</AccordionTrigger>
                        <AccordionContent className="space-y-2">
                            <GrahaDetailProperty label="Festivals" value={graha.culturalAssociations.festivals} />
                            {graha.culturalAssociations.temples && graha.culturalAssociations.temples.length > 0 && (
                                 <div>
                                    <strong className="font-medium text-foreground/80 text-sm">Notable Temples:</strong>
                                    <ul className="list-disc list-inside ml-4 text-sm text-muted-foreground">
                                        {graha.culturalAssociations.temples.map((temple: Temple) => (
                                            <li key={temple.name}>
                                                {temple.name} ({temple.location})
                                                {temple.url && <Link href={temple.url} target="_blank" rel="noopener noreferrer" className="ml-1 text-accent hover:underline"><ExternalLink size={12} className="inline-block"/></Link>}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            )}
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>
            )}
          </SectionWrapper>

          {graha.astroSignificance && (
             <SectionWrapper title="Further Astrological Insights" icon={BarChart3}>
                <GrahaDetailProperty label="Deeper Vedic Significance" value={graha.astroSignificance.vedicSignificance} />
                <GrahaDetailProperty label="Western Astrology Correlation" value={graha.astroSignificance.westernCorrelation} />
                 {graha.astroSignificance.importanceInChart && graha.astroSignificance.importanceInChart.length > 0 && (
                     <div>
                        <strong className="font-medium text-foreground/80 text-sm">Importance in Chart:</strong>
                        <ul className="list-disc list-inside ml-4 text-sm text-muted-foreground">
                            {graha.astroSignificance.importanceInChart.map(imp => <li key={imp}>{imp}</li>)}
                        </ul>
                    </div>
                )}
            </SectionWrapper>
          )}

        </CardContent>

        <CardFooter className="p-6 md:p-8 border-t border-border/30 bg-muted/30 text-center">
          <p className="text-xs text-muted-foreground">
            The influence of Navagrahas is a cornerstone of Vedic astrology. Understanding their roles can provide profound insights into life's patterns. Always consult a qualified astrologer for personalized interpretations.
          </p>
        </CardFooter>
      </Card>
    </div>
  );
}

export async function generateStaticParams() {
  return navagrahaData.navagrahas.map((graha) => ({
    grahaId: graha.id,
  }));
}

