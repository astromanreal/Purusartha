
"use client";

import * as React from "react";
import type { Metadata } from 'next';
import Link from "next/link"; 
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import * as LucideIcons from "lucide-react";
import { vastuShastraPageData } from "@/data/vastu-shastra-data";
import type { VastuElement, VastuDirection, RoomGuideline, VastuDosha, VastuTip } from "@/types";
import { APP_NAME } from "@/lib/constants";
import { cn } from "@/lib/utils";

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000';

export const metadataObject: Metadata = {
  title: `Vastu Shastra Basics - Ancient Science of Harmony | ${APP_NAME}`,
  description: `Learn the core principles of Vastu Shastra: The Five Elements (Pancha Bhoota), Directional Science, room placements, workspace Vastu, Doshas & remedies, and modern Vastu tips with ${APP_NAME}.`,
  keywords: ['Vastu Shastra', 'Pancha Bhoota', 'Vastu Directions', 'Vastu for Home', 'Vastu for Office', 'Vastu Dosha Remedies', 'Indian Architecture', APP_NAME],
  alternates: {
    canonical: `${BASE_URL}/vastu-shastra`,
  },
  openGraph: {
    title: `Vastu Shastra Basics - Ancient Science of Harmony | ${APP_NAME}`,
    description: 'Explore core Vastu principles for harmonious living and working spaces.',
    url: `${BASE_URL}/vastu-shastra`,
  },
};

const getIcon = (iconName: keyof typeof LucideIcons | undefined): React.ElementType => {
  if (iconName && LucideIcons[iconName]) {
    return LucideIcons[iconName];
  }
  return LucideIcons.Sparkles; 
};

export default function VastuShastraPage() {
  const { pageTitle, pageDescription, heroIconName, sections, cta } = vastuShastraPageData;
  const HeroIcon = getIcon(heroIconName);

  const defaultOpenSections = [
    sections.introduction.title.toLowerCase().replace(/\s+/g, '-'),
    sections.panchaBhootas.title.toLowerCase().replace(/\s+/g, '-'),
  ];

  return (
    <div className="container mx-auto py-8">
      <Card className="shadow-xl border-primary/20 bg-card">
        <CardHeader className="text-center bg-gradient-to-br from-background via-accent/5 to-primary/5 py-10 px-4">
          <div className="inline-flex items-center justify-center p-4 bg-primary/10 rounded-full mb-6 mx-auto shadow-lg">
            <HeroIcon className="h-20 w-20 text-primary" />
          </div>
          <CardTitle className="text-4xl font-bold tracking-tight text-primary sm:text-5xl">
            {pageTitle}
          </CardTitle>
          <CardDescription className="mt-3 text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            {pageDescription}
          </CardDescription>
        </CardHeader>

        <CardContent className="p-6 md:p-8 space-y-10">
          <Accordion type="multiple" defaultValue={defaultOpenSections} className="w-full space-y-6">
            
            <AccordionItem value={sections.introduction.title.toLowerCase().replace(/\s+/g, '-')} className="border bg-card/80 rounded-lg shadow-lg hover:shadow-primary/15 transition-shadow">
              <AccordionTrigger className="px-6 py-4 text-left hover:no-underline text-2xl font-semibold text-primary data-[state=open]:bg-primary/5">
                <div className="flex items-center">
                  {React.createElement(getIcon(sections.introduction.iconName), { className: "h-7 w-7 mr-3 text-accent" })}
                  {sections.introduction.title}
                </div>
              </AccordionTrigger>
              <AccordionContent className="px-6 py-4 border-t border-border/50 text-base text-foreground/90 leading-relaxed">
                <p>{sections.introduction.content}</p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value={sections.panchaBhootas.title.toLowerCase().replace(/\s+/g, '-')} className="border bg-card/80 rounded-lg shadow-lg hover:shadow-primary/15 transition-shadow">
              <AccordionTrigger className="px-6 py-4 text-left hover:no-underline text-2xl font-semibold text-primary data-[state=open]:bg-primary/5">
                <div className="flex items-center">
                  {React.createElement(getIcon(sections.panchaBhootas.iconName), { className: "h-7 w-7 mr-3 text-accent" })}
                  {sections.panchaBhootas.title}
                </div>
              </AccordionTrigger>
              <AccordionContent className="px-6 py-4 border-t border-border/50 text-base text-foreground/90 leading-relaxed">
                <p className="mb-6 text-muted-foreground">{sections.panchaBhootas.description}</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {(sections.panchaBhootas.content as VastuElement[]).map(element => {
                    const ElementIcon = getIcon(element.iconName as keyof typeof LucideIcons);
                    return (
                      <Card key={element.name} className="p-4 bg-muted/30 hover:shadow-md transition-shadow">
                        <CardHeader className="p-0 pb-2">
                          <CardTitle className="text-lg font-medium text-accent flex items-center">
                            <ElementIcon className="h-5 w-5 mr-2 text-accent/80" />
                            {element.name} ({element.sanskritName})
                          </CardTitle>
                        </CardHeader>
                        <CardContent className="p-0 text-sm text-muted-foreground">
                          <p>{element.description}</p>
                          {element.vastuZones && <p className="mt-1"><strong className="text-foreground/70">Zone:</strong> {element.vastuZones}</p>}
                        </CardContent>
                      </Card>
                    );
                  })}
                </div>
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value={sections.directionalScience.title.toLowerCase().replace(/\s+/g, '-')} className="border bg-card/80 rounded-lg shadow-lg hover:shadow-primary/15 transition-shadow">
              <AccordionTrigger className="px-6 py-4 text-left hover:no-underline text-2xl font-semibold text-primary data-[state=open]:bg-primary/5">
                <div className="flex items-center">
                  {React.createElement(getIcon(sections.directionalScience.iconName), { className: "h-7 w-7 mr-3 text-accent" })}
                  {sections.directionalScience.title}
                </div>
              </AccordionTrigger>
              <AccordionContent className="px-6 py-4 border-t border-border/50 text-base text-foreground/90 leading-relaxed">
                 <p className="mb-6 text-muted-foreground">{sections.directionalScience.description}</p>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {(sections.directionalScience.content as VastuDirection[]).map(dir => {
                    const DirIcon = getIcon(dir.iconName as keyof typeof LucideIcons);
                    return (
                      <Card key={dir.name} className={cn("p-4 shadow-sm hover:shadow-lg transition-shadow", dir.colorAssociation ? `bg-${dir.colorAssociation.toLowerCase()}-500/5` : 'bg-muted/30')}>
                        <CardHeader className="p-0 pb-2">
                          <CardTitle className="text-lg font-medium text-accent flex items-center">
                            <DirIcon className={cn("h-5 w-5 mr-2", dir.colorAssociation ? `text-${dir.colorAssociation.toLowerCase()}-600` : 'text-accent/80')} />
                            {dir.name} {dir.sanskritName && `(${dir.sanskritName})`}
                          </CardTitle>
                        </CardHeader>
                        <CardContent className="p-0 text-sm text-muted-foreground space-y-1">
                          {dir.rulingDeity && <p><strong className="text-foreground/70">Deity:</strong> {dir.rulingDeity}</p>}
                          {dir.rulingPlanet && <p><strong className="text-foreground/70">Planet:</strong> {dir.rulingPlanet}</p>}
                          <p><strong className="text-foreground/70">Best For:</strong> {dir.bestSuitedFor.join(', ')}</p>
                          <p><strong className="text-foreground/70">Energy:</strong> {dir.energyCharacteristics}</p>
                        </CardContent>
                      </Card>
                    );
                  })}
                </div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value={sections.roomPlacementGuidelines.title.toLowerCase().replace(/\s+/g, '-')} className="border bg-card/80 rounded-lg shadow-lg hover:shadow-primary/15 transition-shadow">
              <AccordionTrigger className="px-6 py-4 text-left hover:no-underline text-2xl font-semibold text-primary data-[state=open]:bg-primary/5">
                 <div className="flex items-center">
                  {React.createElement(getIcon(sections.roomPlacementGuidelines.iconName), { className: "h-7 w-7 mr-3 text-accent" })}
                  {sections.roomPlacementGuidelines.title}
                </div>
              </AccordionTrigger>
              <AccordionContent className="px-6 py-4 border-t border-border/50 text-base text-foreground/90 leading-relaxed">
                <p className="mb-6 text-muted-foreground">{sections.roomPlacementGuidelines.description}</p>
                <div className="space-y-4">
                  {(sections.roomPlacementGuidelines.content as RoomGuideline[]).map(room => {
                    const RoomIcon = getIcon(room.iconName as keyof typeof LucideIcons);
                    return (
                      <Card key={room.roomName} className="p-4 bg-muted/30">
                        <CardTitle className="text-md font-semibold text-accent/90 flex items-center mb-1">
                          <RoomIcon className="h-5 w-5 mr-2 text-accent/70" />
                          {room.roomName}
                        </CardTitle>
                        <p className="text-xs text-muted-foreground mb-2"><strong className="text-foreground/70">Ideal Directions:</strong> {room.idealDirections.join(' / ')}</p>
                        <ul className="list-disc list-inside text-sm text-muted-foreground space-y-0.5 pl-4">
                          {room.keyConsiderations.map((item, idx) => <li key={idx}>{item}</li>)}
                        </ul>
                        {room.notes && <p className="text-xs italic text-primary/80 mt-2">{room.notes}</p>}
                      </Card>
                    );
                  })}
                </div>
              </AccordionContent>
            </AccordionItem>

             <AccordionItem value={sections.vastuForWorkspaces.title.toLowerCase().replace(/\s+/g, '-')} className="border bg-card/80 rounded-lg shadow-lg hover:shadow-primary/15 transition-shadow">
              <AccordionTrigger className="px-6 py-4 text-left hover:no-underline text-2xl font-semibold text-primary data-[state=open]:bg-primary/5">
                <div className="flex items-center">
                  {React.createElement(getIcon(sections.vastuForWorkspaces.iconName), { className: "h-7 w-7 mr-3 text-accent" })}
                  {sections.vastuForWorkspaces.title}
                </div>
              </AccordionTrigger>
              <AccordionContent className="px-6 py-4 border-t border-border/50 text-base text-foreground/90 leading-relaxed">
                <p className="mb-6 text-muted-foreground">{sections.vastuForWorkspaces.description}</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {(sections.vastuForWorkspaces.content as VastuTip[]).map(tip => {
                    const TipIcon = getIcon(tip.iconName as keyof typeof LucideIcons);
                    return(
                      <Card key={tip.tip} className="p-3 bg-muted/30">
                         <CardTitle className="text-sm font-medium text-accent/90 flex items-center mb-1">
                          <TipIcon className="h-4 w-4 mr-2 text-accent/70" />
                          {tip.tip}
                        </CardTitle>
                        <p className="text-xs text-muted-foreground">{tip.explanation}</p>
                      </Card>
                    );
                  })}
                </div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value={sections.commonVastuDoshas.title.toLowerCase().replace(/\s+/g, '-')} className="border bg-card/80 rounded-lg shadow-lg hover:shadow-primary/15 transition-shadow">
               <AccordionTrigger className="px-6 py-4 text-left hover:no-underline text-2xl font-semibold text-primary data-[state=open]:bg-primary/5">
                <div className="flex items-center">
                  {React.createElement(getIcon(sections.commonVastuDoshas.iconName), { className: "h-7 w-7 mr-3 text-accent" })}
                  {sections.commonVastuDoshas.title}
                </div>
              </AccordionTrigger>
              <AccordionContent className="px-6 py-4 border-t border-border/50 text-base text-foreground/90 leading-relaxed">
                <p className="mb-6 text-muted-foreground">{sections.commonVastuDoshas.description}</p>
                <div className="space-y-4">
                  {(sections.commonVastuDoshas.content as VastuDosha[]).map(dosha => {
                     const DoshaIcon = getIcon(dosha.iconName as keyof typeof LucideIcons);
                     return (
                      <Card key={dosha.doshaName} className="p-4 bg-destructive/5 border-destructive/20">
                        <CardTitle className="text-md font-semibold text-destructive flex items-center mb-1">
                          <DoshaIcon className="h-5 w-5 mr-2 text-destructive/80" />
                          {dosha.doshaName}
                        </CardTitle>
                        <p className="text-sm text-muted-foreground mb-2">{dosha.description}</p>
                        <h4 className="text-xs font-semibold text-green-600 mb-1">Remedies:</h4>
                        <ul className="list-disc list-inside text-xs text-green-700/90 dark:text-green-400/90 space-y-0.5 pl-4">
                          {dosha.remedies.map((remedy, idx) => <li key={idx}>{remedy}</li>)}
                        </ul>
                      </Card>
                    );
                  })}
                </div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value={sections.modernVastuTips.title.toLowerCase().replace(/\s+/g, '-')} className="border bg-card/80 rounded-lg shadow-lg hover:shadow-primary/15 transition-shadow">
              <AccordionTrigger className="px-6 py-4 text-left hover:no-underline text-2xl font-semibold text-primary data-[state=open]:bg-primary/5">
                <div className="flex items-center">
                  {React.createElement(getIcon(sections.modernVastuTips.iconName), { className: "h-7 w-7 mr-3 text-accent" })}
                  {sections.modernVastuTips.title}
                </div>
              </AccordionTrigger>
              <AccordionContent className="px-6 py-4 border-t border-border/50 text-base text-foreground/90 leading-relaxed">
                <p className="mb-6 text-muted-foreground">{sections.modernVastuTips.description}</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {(sections.modernVastuTips.content as VastuTip[]).map(tip => {
                    const TipIcon = getIcon(tip.iconName as keyof typeof LucideIcons);
                    return (
                      <Card key={tip.tip} className="p-3 bg-sky-500/5 border-sky-500/20">
                        <CardTitle className="text-sm font-medium text-sky-700 dark:text-sky-400 flex items-center mb-1">
                           <TipIcon className="h-4 w-4 mr-2 text-sky-600/80 dark:text-sky-300/80" />
                          {tip.tip} <Badge variant="outline" className="ml-2 text-xs">{tip.category}</Badge>
                        </CardTitle>
                        <p className="text-xs text-muted-foreground">{tip.explanation}</p>
                      </Card>
                    );
                  })}
                </div>
              </AccordionContent>
            </AccordionItem>

          </Accordion>

          <Separator className="my-12 border-dashed border-primary/50" />
          
          <div className="text-center mt-12">
            {cta.href ? (
              <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg hover:shadow-xl">
                <Link href={cta.href}>
                  {cta.text}
                </Link>
              </Button>
            ) : (
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg hover:shadow-xl" disabled>
                {cta.text}
              </Button>
            )}
            {cta.note && <p className="text-sm text-muted-foreground mt-3">{cta.note}</p>}
          </div>
          <div data-ai-hint="vastu directions compass" className="mt-10 aspect-video bg-muted rounded-lg flex items-center justify-center">
             <p className="text-muted-foreground">Placeholder for Vastu Compass Diagram / Energy Flow Illustration</p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}


    