
"use client";

import { useEffect, useState, useTransition } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, Controller, useFormContext } from "react-hook-form";
import type { Metadata } from 'next';
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Calendar } from "@/components/ui/calendar";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { CalendarIcon, Loader2, Sparkles, AlertCircle, Download, Sigma, User, Hash, Heart, Briefcase, BookOpen, Palette } from "lucide-react";
import { cn } from "@/lib/utils";
import { format } from "date-fns";
import type { NumerologyOutput, NumerologyResult, NumerologyNumberType } from "@/types";
import { Separator } from "@/components/ui/separator";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { APP_NAME } from "@/lib/constants";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000';

export const metadataObject: Metadata = {
  title: `Numerology Insights Calculator - Discover Your Numbers | ${APP_NAME}`,
  description: `Uncover the mystical power of numbers in your life with ${APP_NAME}'s Numerology Insights Calculator. Enter your full name and date of birth to reveal your Life Path, Destiny, Soul Urge, and Personality numbers.`,
  keywords: ['Numerology Calculator', 'Life Path Number', 'Destiny Number', 'Soul Urge Number', 'Personality Number', 'Pythagorean Numerology', 'Vedic Numerology', APP_NAME],
  alternates: {
    canonical: `${BASE_URL}/numerology-insights`,
  },
  openGraph: {
    title: `Numerology Insights Calculator | ${APP_NAME}`,
    description: 'Discover your core numerological profile: Life Path, Destiny, Soul Urge, and Personality numbers.',
    url: `${BASE_URL}/numerology-insights`,
  },
};

const NumerologyClientSchema = z.object({
  fullName: z.string().min(2, { message: "Full name must be at least 2 characters." }).max(100)
    .regex(/^[a-zA-Z\s'-]+$/, { message: "Name can only contain letters, spaces, hyphens, and apostrophes."}),
  dateOfBirth: z.date({ required_error: "Date of birth is required." }),
});

type NumerologyFormValues = z.infer<typeof NumerologyClientSchema>;

const pythagoreanValues: Record<string, number> = {
  A: 1, J: 1, S: 1,
  B: 2, K: 2, T: 2,
  C: 3, L: 3, U: 3,
  D: 4, M: 4, V: 4,
  E: 5, N: 5, W: 5,
  F: 6, O: 6, X: 6,
  G: 7, P: 7, Y: 7,
  H: 8, Q: 8, Z: 8,
  I: 9, R: 9,
};

const vowels = "AEIOU";

function reduceNumber(num: number): number | string {
  if (num === 11 || num === 22 || num === 33) {
    return num.toString();
  }
  let sum = num;
  while (sum > 9) {
    sum = String(sum).split('').reduce((acc, digit) => acc + parseInt(digit, 10), 0);
    if (sum === 11 || sum === 22 || sum === 33) {
      return sum.toString();
    }
  }
  return sum;
}

function calculateLifePathNumber(dob: Date): number | string {
  const day = dob.getDate();
  const month = dob.getMonth() + 1;
  const year = dob.getFullYear();

  const sumDay = reduceNumber(day);
  const sumMonth = reduceNumber(month);
  const sumYear = reduceNumber(year);
  
  let totalSum = 0;
  if (typeof sumDay === 'string') totalSum += parseInt(sumDay); else totalSum += sumDay;
  if (typeof sumMonth === 'string') totalSum += parseInt(sumMonth); else totalSum += sumMonth;
  if (typeof sumYear === 'string') totalSum += parseInt(sumYear); else totalSum += sumYear;
  
  return reduceNumber(totalSum);
}

function calculateNameNumber(name: string, type: "destiny" | "soulurge" | "personality"): number | string {
  const upperName = name.toUpperCase().replace(/[^A-Z]/g, "");
  let sum = 0;

  for (const char of upperName) {
    if (type === "soulurge" && !vowels.includes(char)) continue;
    if (type === "personality" && vowels.includes(char)) continue;
    
    sum += pythagoreanValues[char] || 0;
  }
  return reduceNumber(sum);
}

function getPlaceholderInterpretation(number: number | string, type: NumerologyNumberType): NumerologyResult["interpretation"] {
  const numStr = String(number);
  return {
    general: `Illustrative interpretation for your ${type} Number which is ${numStr}. This suggests certain core tendencies and life themes associated with this number.`,
    personality: `Individuals with ${type} Number ${numStr} often exhibit traits such as characteristic A, quality B, and tendency C. Their approach to life is often marked by [key characteristic].`,
    strengths: [`Strength A for ${numStr} (e.g., Determination)`, `Strength B for ${numStr} (e.g., Creativity)`],
    weaknesses: [`Weakness A for ${numStr} (e.g., Impatience)`, `Weakness B for ${numStr} (e.g., Over-sensitivity)`],
    career: `Possible career paths for ${type} Number ${numStr} include fields related to leadership, innovation, or helping professions, depending on the number's specific vibrations.`,
    relationships: `In relationships, those with ${type} Number ${numStr} tend to be loyal partners, seeking deep connection and mutual understanding. Communication style is key.`,
    spiritual: `The spiritual journey for ${type} Number ${numStr} might involve exploring paths of self-discovery, service to others, or seeking higher wisdom.`,
  };
}

const NumberCard: React.FC<{ result: NumerologyResult }> = ({ result }) => {
  const iconsMap: Record<string, LucideIcon> = {
    "Life Path": Palette, "Destiny": Briefcase, "Soul Urge": Heart, "Personality": User,
  };
  const IconComponent = iconsMap[result.type] || Hash;

  return (
    <Card className="shadow-lg border-accent/20 bg-card/80 hover:shadow-accent/30 transition-shadow duration-300">
      <CardHeader className="pb-3">
        <div className="flex items-center justify-between">
          <CardTitle className="text-xl font-semibold text-accent flex items-center">
            <IconComponent className="h-6 w-6 mr-2 text-accent/80" />
            {result.type} Number
          </CardTitle>
          <span className="text-3xl font-bold text-primary">{result.number}</span>
        </div>
      </CardHeader>
      <CardContent className="text-sm space-y-3">
        <p className="text-foreground/90 leading-relaxed">{result.interpretation.general}</p>
        <Accordion type="single" collapsible className="w-full text-xs">
          <AccordionItem value="details">
            <AccordionTrigger className="hover:no-underline text-muted-foreground data-[state=open]:text-accent">
              Learn More about your {result.type} Number {result.number}
            </AccordionTrigger>
            <AccordionContent className="space-y-2 pt-2">
              {result.interpretation.personality && <p><strong className="text-foreground/80">Personality:</strong> {result.interpretation.personality}</p>}
              {result.interpretation.strengths && result.interpretation.strengths.length > 0 && (
                <div><strong className="text-foreground/80">Strengths:</strong> <ul className="list-disc list-inside ml-4">{result.interpretation.strengths.map(s => <li key={s}>{s}</li>)}</ul></div>
              )}
              {result.interpretation.weaknesses && result.interpretation.weaknesses.length > 0 && (
                <div><strong className="text-foreground/80">Weaknesses:</strong> <ul className="list-disc list-inside ml-4">{result.interpretation.weaknesses.map(w => <li key={w}>{w}</li>)}</ul></div>
              )}
              {result.interpretation.career && <p><strong className="text-foreground/80">Career:</strong> {result.interpretation.career}</p>}
              {result.interpretation.relationships && <p><strong className="text-foreground/80">Relationships:</strong> {result.interpretation.relationships}</p>}
              {result.interpretation.spiritual && <p><strong className="text-foreground/80">Spiritual Path:</strong> {result.interpretation.spiritual}</p>}
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </CardContent>
    </Card>
  );
};


export default function NumerologyInsightsPage() {
  const [numerologyData, setNumerologyData] = useState<NumerologyOutput | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [isCalculating, setIsCalculating] = useState(false);

  const form = useForm<NumerologyFormValues>({
    resolver: zodResolver(NumerologyClientSchema),
    defaultValues: {
      fullName: "",
      dateOfBirth: undefined,
    },
  });

  const handleFormSubmit = (values: NumerologyFormValues) => {
    setIsCalculating(true);
    setErrorMessage(null);
    setNumerologyData(null);

    setTimeout(() => {
        try {
            const dob = values.dateOfBirth;
            const fullName = values.fullName;

            const lifePathNum = calculateLifePathNumber(dob);
            const destinyNum = calculateNameNumber(fullName, "destiny");
            const soulUrgeNum = calculateNameNumber(fullName, "soulurge");
            const personalityNum = calculateNameNumber(fullName, "personality");

            const results: NumerologyOutput = {
                userName: fullName,
                dateOfBirth: dob.toISOString(),
                lifePath: { type: "Life Path", number: lifePathNum, interpretation: getPlaceholderInterpretation(lifePathNum, "Life Path") },
                destinyNumber: { type: "Destiny", number: destinyNum, interpretation: getPlaceholderInterpretation(destinyNum, "Destiny") },
                soulUrgeNumber: { type: "Soul Urge", number: soulUrgeNum, interpretation: getPlaceholderInterpretation(soulUrgeNum, "Soul Urge") },
                personalityNumber: { type: "Personality", number: personalityNum, interpretation: getPlaceholderInterpretation(personalityNum, "Personality") },
            };
            setNumerologyData(results);
        } catch (error) {
            console.error("Error calculating numerology:", error);
            setErrorMessage("An error occurred during calculation. Please check your inputs.");
        } finally {
            setIsCalculating(false);
        }
    }, 300); 
  };

  return (
    <div className="container mx-auto py-8">
      <Card className="shadow-2xl border-primary/30 bg-card">
        <CardHeader className="text-center">
          <div className="inline-flex items-center justify-center p-3 bg-primary/10 rounded-full mb-4 mx-auto shadow-md">
            <Sigma className="h-16 w-16 text-primary" />
          </div>
          <CardTitle className="text-3xl md:text-4xl font-bold text-primary">Numerology Insights Calculator</CardTitle>
          <CardDescription className="text-lg text-muted-foreground mt-2 max-w-3xl mx-auto">
            Discover the mystical power of numbers in your life. Enter your full name and date of birth to reveal your core numerological profile.
            <br/><small className="text-xs">(Calculations are based on Pythagorean numerology and interpretations are illustrative placeholders.)</small>
          </CardDescription>
        </CardHeader>
        <CardContent className="mt-6 space-y-8">
          <Card className="p-4 md:p-6 bg-card/50 shadow border-border/30">
            <CardHeader className="p-0 pb-4">
                <CardTitle className="text-xl text-primary">Enter Your Details</CardTitle>
            </CardHeader>
            <CardContent className="p-0">
                <form onSubmit={form.handleSubmit(handleFormSubmit)} className="space-y-6">
                    <div>
                        <Label htmlFor="fullName" className="text-md">Full Name (as on birth certificate)</Label>
                        <Controller name="fullName" control={form.control} render={({ field }) => <Input id="fullName" {...field} className="mt-1" placeholder="e.g., Mohandas Karamchand Gandhi" />} />
                        {form.formState.errors.fullName && <p className="text-sm text-destructive mt-1">{form.formState.errors.fullName.message}</p>}
                    </div>
                    <div>
                        <Label htmlFor="dateOfBirth" className="text-md">Date of Birth</Label>
                        <Controller name="dateOfBirth" control={form.control} render={({ field }) => (
                        <Popover>
                            <PopoverTrigger asChild>
                            <Button variant={"outline"} className={cn("w-full justify-start text-left font-normal mt-1", !field.value && "text-muted-foreground")}>
                                <CalendarIcon className="mr-2 h-4 w-4" />{field.value ? format(field.value, "PPP") : <span>Pick a date</span>}
                            </Button>
                            </PopoverTrigger>
                            <PopoverContent className="w-auto p-0"><Calendar mode="single" selected={field.value} onSelect={field.onChange} initialFocus captionLayout="dropdown-buttons" fromYear={1900} toYear={new Date().getFullYear()} /></PopoverContent>
                        </Popover>
                        )} />
                        {form.formState.errors.dateOfBirth && <p className="text-sm text-destructive mt-1">{form.formState.errors.dateOfBirth.message}</p>}
                    </div>
                    <div className="flex justify-center pt-4">
                       <Button type="submit" disabled={isCalculating} aria-busy={isCalculating} className="w-full md:w-auto bg-primary hover:bg-primary/90 text-primary-foreground text-lg py-3 px-6">
                          {isCalculating ? (
                            <>
                              <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                              Calculating Insights...
                            </>
                          ) : (
                            <>
                              Reveal My Numbers <Sparkles className="ml-2 h-5 w-5" />
                            </>
                          )}
                        </Button>
                    </div>
                </form>
            </CardContent>
          </Card>

          {errorMessage && !isCalculating && (
             <Alert variant="destructive" className="mt-6">
               <AlertCircle className="h-4 w-4" />
               <AlertTitle>Error</AlertTitle>
               <AlertDescription>{errorMessage}</AlertDescription>
             </Alert>
           )}

          {numerologyData && !isCalculating && (
            <Card className="mt-10 shadow-xl bg-card/70 border-primary/20 p-4 sm:p-6">
              <CardHeader className="text-center pb-4">
                <CardTitle className="text-2xl md:text-3xl text-accent">
                  Numerology Profile for {numerologyData.userName}
                </CardTitle>
                <CardDescription>Born on: {format(new Date(numerologyData.dateOfBirth), "PPP")}</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <NumberCard result={numerologyData.lifePath} />
                  <NumberCard result={numerologyData.destinyNumber} />
                  <NumberCard result={numerologyData.soulUrgeNumber} />
                  <NumberCard result={numerologyData.personalityNumber} />
                </div>
                
                <Separator className="my-8 border-dashed" />

                <div data-ai-hint="numerology compatibility chart" className="p-6 border border-dashed border-border rounded-md text-center text-muted-foreground bg-muted/30">
                    Numerology Compatibility Section (Placeholder)
                    <p className="text-xs mt-1">(Feature to compare with another person's numbers coming soon.)</p>
                </div>
                <div data-ai-hint="lucky numbers colors gemstones" className="p-6 border border-dashed border-border rounded-md text-center text-muted-foreground bg-muted/30">
                    Lucky Elements (Colors, Dates, Gemstones) Placeholder
                    <p className="text-xs mt-1">(Suggestions based on your numbers coming soon.)</p>
                </div>


              </CardContent>
              <CardFooter className="flex flex-col items-center gap-4 pt-6 border-t">
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Button variant="outline" className="hover:bg-primary/10 w-full sm:w-auto" disabled>
                        <Download className="mr-2 h-4 w-4" />
                        Download Full Numerology Report
                      </Button>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Feature coming soon</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                       <Button variant="link" className="text-xs text-primary hover:text-accent" disabled>
                         Toggle Pythagorean/Chaldean system
                       </Button>
                    </TooltipTrigger>
                     <TooltipContent>
                       <p>Feature coming soon</p>
                     </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </CardFooter>
            </Card>
          )}
        </CardContent>
        <CardFooter className="text-center block py-6">
            <p className="text-xs text-muted-foreground">
                Numerology offers insights into potential life patterns and characteristics. It is a tool for self-discovery, not a deterministic science.
                Interpretations are illustrative and simplified.
            </p>
        </CardFooter>
      </Card>
    </div>
  );
}


    