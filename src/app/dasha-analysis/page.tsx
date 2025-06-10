
"use client";

import { useActionState, useEffect, useState, useTransition, Fragment } from "react";
import { useFormStatus } from "react-dom";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, Controller } from "react-hook-form";
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
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Calendar } from "@/components/ui/calendar";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { CalendarIcon, Loader2, Sparkles, AlertCircle, Download, Orbit as DashaIcon, Sun, Moon, Shield as MarsIcon, MessageSquare as MercuryIcon, GraduationCap as JupiterIcon, Heart as VenusIcon, Hourglass as SaturnIcon, ChevronDown, ChevronRight, Info, Clock, BarChart3 } from "lucide-react";
import { cn } from "@/lib/utils";
import { format, parseISO } from "date-fns";
import { getDashaAnalysis, type DashaAnalysisFormState } from "./actions";
import type { DashaAnalysisOutput, DashaPeriod, DashaLevel, KundliInput } from "@/types";
import { Separator } from "@/components/ui/separator";
import { APP_NAME } from "@/lib/constants";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";


const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000';

export const metadataObject: Metadata = {
  title: `In-Depth Dasha Analysis - Planetary Periods | ${APP_NAME}`,
  description: `Explore your Vimshottari Dasha timeline with ${APP_NAME}. Understand the influence of planetary periods (Mahadasha, Antardasha) on your life events and trends based on your birth chart.`,
  keywords: ['Dasha Analysis', 'Vimshottari Dasha', 'Planetary Periods', 'Mahadasha', 'Antardasha', 'Vedic Astrology Predictions', APP_NAME],
  alternates: {
    canonical: `${BASE_URL}/dasha-analysis`,
  },
  openGraph: {
    title: `In-Depth Dasha Analysis - Planetary Periods | ${APP_NAME}`,
    description: 'Explore your Vimshottari Dasha timeline and understand planetary period influences.',
    url: `${BASE_URL}/dasha-analysis`,
  },
};

const DashaAnalysisClientSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }).max(100),
  gender: z.enum(["male", "female", "other"], { required_error: "Please select a gender." }),
  dateOfBirth: z.date({ required_error: "Date of birth is required." }),
  timeOfBirth: z.string().regex(/^([01]\d|2[0-3]):([0-5]\d)$/, { message: "Invalid time format (HH:MM)." }),
  placeOfBirth: z.string().min(2, { message: "Place of birth must be at least 2 characters." }).max(100),
});

type DashaAnalysisFormValues = z.infer<typeof DashaAnalysisClientSchema>;

const initialState: DashaAnalysisFormState = {
  message: null,
  data: null,
};

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" disabled={pending} aria-busy={pending} className="w-full md:w-auto bg-primary hover:bg-primary/90 text-primary-foreground text-lg py-3 px-6">
      {pending ? (
        <>
          <Loader2 className="mr-2 h-5 w-5 animate-spin" />
          Analyzing Dashas...
        </>
      ) : (
        <>
          Analyze Dasha Periods <Sparkles className="ml-2 h-5 w-5" />
        </>
      )}
    </Button>
  );
}

const planetIcons: Record<string, LucideIcon> = {
  Sun: Sun, Moon: Moon, Mars: MarsIcon, Mercury: MercuryIcon, Jupiter: JupiterIcon, Venus: VenusIcon, Saturn: SaturnIcon, Rahu: DashaIcon, Ketu: DashaIcon,
};

const planetColors: Record<string, string> = { 
  Sun: "hsl(45 100% 50%)", Moon: "hsl(220 60% 90%)", Mars: "hsl(0 100% 50%)",  Mercury: "hsl(120 60% 50%)", Jupiter: "hsl(50 100% 60%)", Venus: "hsl(330 100% 80%)", Saturn: "hsl(240 60% 30%)", Rahu: "hsl(260 30% 40%)",   Ketu: "hsl(30 40% 50%)",    
};


const DashaPeriodCard: React.FC<{ period: DashaPeriod; level: DashaLevel }> = ({ period, level }) => {
  const PlanetIcon = planetIcons[period.planetName] || DashaIcon;
  const planetColor = planetColors[period.planetName] || "hsl(var(--foreground))";

  return (
    <Card className="mb-4 shadow-md border-l-4" style={{ borderLeftColor: planetColor }}>
      <CardHeader className="pb-3">
        <div className="flex items-center justify-between">
            <CardTitle className="text-lg font-semibold text-primary flex items-center">
            <PlanetIcon className="h-5 w-5 mr-2" style={{ color: planetColor }} />
            {period.planetName} {period.level}
            </CardTitle>
            <span className="text-xs text-muted-foreground">{period.duration}</span>
        </div>
        <CardDescription className="text-xs">
          {format(parseISO(period.startDate), "dd MMM yyyy")} - {format(parseISO(period.endDate), "dd MMM yyyy")}
        </CardDescription>
      </CardHeader>
      <CardContent className="text-sm space-y-2">
        {period.generalPrediction && <p className="text-foreground/90">{period.generalPrediction}</p>}
        {period.specificPredictions && period.specificPredictions.length > 0 && (
          <div className="mt-2">
            <h4 className="font-medium text-foreground/80 text-xs">Specific Areas:</h4>
            <ul className="list-disc list-inside ml-4 text-xs text-muted-foreground space-y-1">
              {period.specificPredictions.map(sp => (
                <li key={sp.category}><strong>{sp.category}:</strong> {sp.prediction}</li>
              ))}
            </ul>
          </div>
        )}
        {period.remedies && period.remedies.length > 0 && (
          <div className="mt-2 pt-2 border-t border-dashed">
            <h4 className="font-medium text-foreground/80 text-xs">Remedies:</h4>
            <ul className="list-disc list-inside ml-4 text-xs text-muted-foreground">
              {period.remedies.map((remedy, i) => <li key={i}>{remedy}</li>)}
            </ul>
          </div>
        )}
      </CardContent>
    </Card>
  );
};


export default function DashaAnalysisPage() {
  const [formState, formAction] = useActionState(getDashaAnalysis, initialState);
  const [analysisData, setAnalysisData] = useState<DashaAnalysisOutput | null>(null);
  const [, startTransition] = useTransition();

  const form = useForm<DashaAnalysisFormValues>({
    resolver: zodResolver(DashaAnalysisClientSchema),
    defaultValues: {
      name: "",
      gender: undefined,
      dateOfBirth: undefined,
      timeOfBirth: "",
      placeOfBirth: "",
    },
  });

  useEffect(() => {
    if (formState.message === "success" && formState.data) {
      setAnalysisData(formState.data);
    } else if (formState.message && formState.message !== "success") {
      setAnalysisData(null);
      if (formState.fields) { 
        form.setValue('name', formState.fields.name || "");
        form.setValue('gender', formState.fields.gender as "male" | "female" | "other" || undefined);
        form.setValue('dateOfBirth', formState.fields.dateOfBirth ? parseISO(formState.fields.dateOfBirth) : undefined);
        form.setValue('timeOfBirth', formState.fields.timeOfBirth || "");
        form.setValue('placeOfBirth', formState.fields.placeOfBirth || "");
      }
    }
  }, [formState, form]);

  const handleFormSubmit = (values: DashaAnalysisFormValues) => {
    const formData = new FormData();
    Object.entries(values).forEach(([key, value]) => {
      if (value instanceof Date) {
        formData.append(key, value.toISOString());
      } else if (value !== undefined && value !== null) {
        formData.append(key, String(value));
      }
    });
    
    startTransition(() => {
      formAction(formData);
    });
  };

  return (
    <div className="container mx-auto py-8">
      <Card className="shadow-2xl border-primary/30 bg-card">
        <CardHeader className="text-center">
          <div className="inline-flex items-center justify-center p-3 bg-primary/10 rounded-full mb-4 mx-auto shadow-md">
            <DashaIcon className="h-16 w-16 text-primary" />
          </div>
          <CardTitle className="text-3xl md:text-4xl font-bold text-primary">In-Depth Dasha Analysis</CardTitle>
          <CardDescription className="text-lg text-muted-foreground mt-2 max-w-3xl mx-auto">
            Explore your Vimshottari Dasha timeline to understand planetary period influences on your life.
            <br/><small className="text-xs">(Note: Astrological calculations are currently placeholders.)</small>
          </CardDescription>
        </CardHeader>
        <CardContent className="mt-6 space-y-8">
          <Card className="p-4 md:p-6 bg-card/50 shadow border-border/30">
            <CardHeader className="p-0 pb-4">
                <CardTitle className="text-xl text-primary">Enter Birth Details</CardTitle>
            </CardHeader>
            <CardContent className="p-0">
                <form onSubmit={form.handleSubmit(handleFormSubmit)} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                        <Label htmlFor="name" className="text-md">Full Name</Label>
                        <Controller name="name" control={form.control} render={({ field }) => <Input id="name" {...field} className="mt-1" />} />
                        {form.formState.errors.name && <p className="text-sm text-destructive mt-1">{form.formState.errors.name.message}</p>}
                    </div>
                    <div>
                        <Label htmlFor="gender" className="text-md">Gender</Label>
                        <Controller name="gender" control={form.control} render={({ field }) => (
                        <Select onValueChange={field.onChange} value={field.value}>
                            <SelectTrigger id="gender" className="mt-1"><SelectValue placeholder="Select gender" /></SelectTrigger>
                            <SelectContent><SelectItem value="male">Male</SelectItem><SelectItem value="female">Female</SelectItem><SelectItem value="other">Other</SelectItem></SelectContent>
                        </Select>
                        )} />
                        {form.formState.errors.gender && <p className="text-sm text-destructive mt-1">{form.formState.errors.gender.message}</p>}
                    </div>
                    </div>
                     <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
                    <div>
                        <Label htmlFor="timeOfBirth" className="text-md">Time of Birth (HH:MM)</Label>
                        <Controller name="timeOfBirth" control={form.control} render={({ field }) => <Input id="timeOfBirth" type="time" {...field} className="mt-1" />} />
                        {form.formState.errors.timeOfBirth && <p className="text-sm text-destructive mt-1">{form.formState.errors.timeOfBirth.message}</p>}
                    </div>
                    </div>
                    <div>
                        <Label htmlFor="placeOfBirth" className="text-md">Place of Birth (City, Country)</Label>
                        <Controller name="placeOfBirth" control={form.control} render={({ field }) => <Input id="placeOfBirth" {...field} className="mt-1" />} />
                        {form.formState.errors.placeOfBirth && <p className="text-sm text-destructive mt-1">{form.formState.errors.placeOfBirth.message}</p>}
                    </div>
                    <div className="flex justify-center pt-4">
                    <SubmitButton />
                    </div>
                </form>
            </CardContent>
          </Card>


          {formState.message && formState.message !== "success" && (
             <Alert variant="destructive" className="mt-6">
               <AlertCircle className="h-4 w-4" />
               <AlertTitle>Error</AlertTitle>
               <AlertDescription>
                 {formState.message}
                 {formState.issues && (
                   <ul className="list-disc list-inside mt-1 text-sm">
                     {formState.issues.map((issue, i) => <li key={i}>{issue}</li>)}
                   </ul>
                 )}
               </AlertDescription>
             </Alert>
           )}

          {analysisData && (
            <Card className="mt-10 shadow-xl bg-card/70 border-primary/20 p-4 sm:p-6">
              <CardHeader className="text-center pb-4">
                <CardTitle className="text-2xl md:text-3xl text-accent">
                  Dasha Analysis for {analysisData.userName}
                </CardTitle>
                <CardDescription>
                  System: {analysisData.dashaSystem}
                  {analysisData.birthNakshatra && ` (Calculated from Birth Nakshatra: ${analysisData.birthNakshatra})`}
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex justify-between items-center mb-4">
                    <div className="text-sm text-muted-foreground">
                      <TooltipProvider>
                        <Tooltip>
                          <TooltipTrigger asChild>
                            <Button variant="outline" size="sm" disabled>Vimshottari</Button>
                          </TooltipTrigger>
                          <TooltipContent><p>Only Vimshottari is currently supported</p></TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                      <TooltipProvider>
                        <Tooltip>
                          <TooltipTrigger asChild>
                            <Button variant="ghost" size="sm" disabled className="ml-2">Other Systems</Button>
                          </TooltipTrigger>
                          <TooltipContent><p>Coming Soon</p></TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    </div>
                    <TooltipProvider>
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <Button variant="outline" size="sm" disabled>
                              <Download className="mr-2 h-4 w-4" />
                              Download PDF
                          </Button>
                        </TooltipTrigger>
                        <TooltipContent><p>PDF Download Coming Soon</p></TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                </div>
                
                <Accordion type="multiple" className="w-full space-y-4" defaultValue={analysisData.periods.length > 0 ? [`mahadasha-0`] : []}>
                  {analysisData.periods.map((mahadasha, mdIndex) => (
                    <AccordionItem value={`mahadasha-${mdIndex}`} key={mdIndex} className="border bg-background rounded-lg shadow-sm hover:shadow-md">
                      <AccordionTrigger className="px-4 py-3 text-left hover:no-underline text-lg font-medium text-accent data-[state=open]:bg-accent/10">
                        <div className="flex items-center">
                          {(planetIcons[mahadasha.planetName] || DashaIcon)({ className: "h-6 w-6 mr-3", style: { color: planetColors[mahadasha.planetName] || 'inherit' } })}
                          <span>{mahadasha.planetName} Mahadasha</span>
                          <span className="text-xs text-muted-foreground ml-auto mr-2">
                            {format(parseISO(mahadasha.startDate), "dd MMM yy")} - {format(parseISO(mahadasha.endDate), "dd MMM yy")}
                          </span>
                        </div>
                      </AccordionTrigger>
                      <AccordionContent className="px-4 py-3 border-t">
                        <DashaPeriodCard period={mahadasha} level="Mahadasha" />
                        {mahadasha.subPeriods && mahadasha.subPeriods.length > 0 && (
                          <div className="ml-4 mt-4 pl-4 border-l-2 border-dashed border-accent/50">
                            <h4 className="text-md font-semibold text-primary mb-2">Antardashas:</h4>
                            <Accordion type="multiple" className="w-full space-y-3">
                              {mahadasha.subPeriods.map((antardasha, adIndex) => (
                                <AccordionItem value={`antardasha-${mdIndex}-${adIndex}`} key={adIndex} className="border bg-card/50 rounded-md shadow-xs">
                                  <AccordionTrigger className="px-3 py-2 text-left hover:no-underline text-sm font-medium text-accent/90 data-[state=open]:bg-accent/5">
                                     <div className="flex items-center">
                                        {(planetIcons[antardasha.planetName] || DashaIcon)({ className: "h-4 w-4 mr-2", style: { color: planetColors[antardasha.planetName] || 'inherit' } })}
                                        <span>{antardasha.planetName} Antardasha</span>
                                         <span className="text-xs text-muted-foreground ml-auto mr-1">
                                            ({format(parseISO(antardasha.startDate), "MMM yy")} - {format(parseISO(antardasha.endDate), "MMM yy")})
                                        </span>
                                    </div>
                                  </AccordionTrigger>
                                  <AccordionContent className="px-3 py-2 border-t text-xs">
                                     <DashaPeriodCard period={antardasha} level="Antardasha" />
                                     {antardasha.subPeriods && antardasha.subPeriods.length > 0 && <p className="text-center text-muted-foreground text-xs mt-2">Pratyantardashas (Placeholder)</p>}
                                  </AccordionContent>
                                </AccordionItem>
                              ))}
                            </Accordion>
                          </div>
                        )}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>

                <div className="mt-6 p-4 border border-dashed border-muted-foreground/30 rounded-md text-center">
                    <Info className="h-5 w-5 mx-auto mb-2 text-muted-foreground"/>
                    <p className="text-xs text-muted-foreground">
                        Dasha periods indicate general trends. Astrological predictions are subject to individual karma and free will.
                        The interpretations provided are placeholders and require a full astrological engine for accuracy.
                    </p>
                </div>

              </CardContent>
            </Card>
          )}
        </CardContent>
        <CardFooter className="text-center block py-6">
            <p className="text-xs text-muted-foreground">
                Understanding planetary periods (Dashas) can offer profound insights into life's phases.
                For personalized and detailed readings, consult a qualified Vedic astrologer.
            </p>
        </CardFooter>
      </Card>
    </div>
  );
}


    