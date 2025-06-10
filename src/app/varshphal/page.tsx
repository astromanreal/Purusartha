
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
import { CalendarIcon, Loader2, Sparkles, AlertCircle, Download, TrendingUp, User, MapPin, ShieldAlert, ShieldCheck, Info, Briefcase, Heart, Activity, BookOpen, SigmaSquare } from "lucide-react";
import { cn } from "@/lib/utils";
import { format, parseISO } from "date-fns";
import { submitVarshphalRequest, type VarshphalFormState } from "./actions";
import type { VarshphalOutput, VarshphalAreaPrediction, SahamPoint } from "@/types";
import { Separator } from "@/components/ui/separator";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { APP_NAME } from "@/lib/constants";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000';

export const metadataObject: Metadata = {
  title: `Varshphal (Annual Forecast) - Solar Return Chart Analysis | ${APP_NAME}`,
  description: `Generate your detailed Tajika Varshphal (Solar Return Chart analysis) for any selected year with ${APP_NAME}. Get insights into annual trends, key events, and planetary influences for the year.`,
  keywords: ['Varshphal', 'Annual Forecast', 'Solar Return Chart', 'Tajika Astrology', 'Yearly Horoscope', 'Vedic Astrology Predictions', APP_NAME],
  alternates: {
    canonical: `${BASE_URL}/varshphal`,
  },
  openGraph: {
    title: `Varshphal (Annual Forecast) - Solar Return Chart Analysis | ${APP_NAME}`,
    description: 'Generate your detailed Tajika Varshphal for a selected year and get insights into annual trends.',
    url: `${BASE_URL}/varshphal`,
  },
};

const VarshphalClientSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }).max(100),
  gender: z.enum(["male", "female", "other"], { required_error: "Please select a gender." }),
  dateOfBirth: z.date({ required_error: "Date of birth is required." }),
  timeOfBirth: z.string().regex(/^([01]\d|2[0-3]):([0-5]\d)$/, { message: "Invalid time format (HH:MM)." }),
  placeOfBirth: z.string().min(2, { message: "Place of birth must be at least 2 characters." }).max(100),
  targetYear: z.coerce.number().min(new Date().getFullYear() - 50, "Year too far in past.").max(new Date().getFullYear() + 5, "Year too far in future."),
  currentLocation: z.string().optional(),
});

type VarshphalFormValues = z.infer<typeof VarshphalClientSchema>;

const initialState: VarshphalFormState = {
  message: null,
};

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" disabled={pending} aria-busy={pending} className="w-full md:w-auto bg-primary hover:bg-primary/90 text-primary-foreground text-lg py-3 px-6">
      {pending ? (
        <>
          <Loader2 className="mr-2 h-5 w-5 animate-spin" />
          Generating Varshphal...
        </>
      ) : (
        <>
          Generate Annual Forecast <Sparkles className="ml-2 h-5 w-5" />
        </>
      )}
    </Button>
  );
}

const areaPredictionIcons: Record<string, LucideIcon> = {
  "Career & Finances": Briefcase,
  "Relationships & Family": Heart,
  "Health & Travel": Activity,
  "Education & Property": BookOpen,
  "General Luck, Opportunities & Challenges": Sparkles,
};


export default function VarshphalPage() {
  const [formState, formAction] = useActionState(submitVarshphalRequest, initialState);
  const [varshphalData, setVarshphalData] = useState<VarshphalOutput | null>(null);
  const [, startTransition] = useTransition();

  const form = useForm<VarshphalFormValues>({
    resolver: zodResolver(VarshphalClientSchema),
    defaultValues: {
      name: "",
      gender: undefined,
      dateOfBirth: undefined,
      timeOfBirth: "",
      placeOfBirth: "",
      targetYear: new Date().getFullYear(),
      currentLocation: "",
    },
  });

  useEffect(() => {
    if (formState.message === "success" && formState.data) {
      setVarshphalData(formState.data);
    } else if (formState.message && formState.message !== "success") {
      setVarshphalData(null);
      if (formState.fields) {
        form.setValue('name', formState.fields.name || "");
        form.setValue('gender', formState.fields.gender as "male" | "female" | "other" || undefined);
        form.setValue('dateOfBirth', formState.fields.dateOfBirth ? parseISO(formState.fields.dateOfBirth) : undefined);
        form.setValue('timeOfBirth', formState.fields.timeOfBirth || "");
        form.setValue('placeOfBirth', formState.fields.placeOfBirth || "");
        form.setValue('targetYear', formState.fields.targetYear ? parseInt(formState.fields.targetYear) : new Date().getFullYear());
        form.setValue('currentLocation', formState.fields.currentLocation || "");
      }
    }
  }, [formState, form]);

  const handleFormSubmit = (values: VarshphalFormValues) => {
    const formData = new FormData();
    formData.append("name", values.name);
    formData.append("gender", values.gender);
    if (values.dateOfBirth) formData.append("dateOfBirth", values.dateOfBirth.toISOString());
    formData.append("timeOfBirth", values.timeOfBirth);
    formData.append("placeOfBirth", values.placeOfBirth);
    formData.append("targetYear", values.targetYear.toString());
    if (values.currentLocation) formData.append("currentLocation", values.currentLocation);
    
    startTransition(() => {
      formAction(formData);
    });
  };

  return (
    <div className="container mx-auto py-8">
      <Card className="shadow-2xl border-primary/30 bg-card">
        <CardHeader className="text-center">
          <div className="inline-flex items-center justify-center p-3 bg-primary/10 rounded-full mb-4 mx-auto shadow-md">
            <TrendingUp className="h-16 w-16 text-primary" />
          </div>
          <CardTitle className="text-3xl md:text-4xl font-bold text-primary">Varshphal (Annual Forecast)</CardTitle>
          <CardDescription className="text-lg text-muted-foreground mt-2 max-w-3xl mx-auto">
            Generate your detailed Tajika Varshphal (Solar Return Chart analysis) for a selected year.
             <br/><small className="text-xs">(Note: Astrological calculations are currently placeholders.)</small>
          </CardDescription>
        </CardHeader>
        <CardContent className="mt-6 space-y-8">
          <form onSubmit={form.handleSubmit(handleFormSubmit)} className="space-y-6 p-4 md:p-6 border rounded-lg bg-card/50 shadow">
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
              <div>
                <Label htmlFor="placeOfBirth" className="text-md">Place of Birth (City, Country)</Label>
                <Controller name="placeOfBirth" control={form.control} render={({ field }) => <Input id="placeOfBirth" {...field} className="mt-1" />} />
                {form.formState.errors.placeOfBirth && <p className="text-sm text-destructive mt-1">{form.formState.errors.placeOfBirth.message}</p>}
              </div>
               <div>
                <Label htmlFor="targetYear" className="text-md">Target Year for Varshphal</Label>
                <Controller name="targetYear" control={form.control} render={({ field }) => <Input id="targetYear" type="number" {...field} className="mt-1" placeholder={`e.g., ${new Date().getFullYear()}`} />} />
                {form.formState.errors.targetYear && <p className="text-sm text-destructive mt-1">{form.formState.errors.targetYear.message}</p>}
              </div>
            </div>
            <div>
              <Label htmlFor="currentLocation" className="text-md">Current Location (Optional - for Solar Return)</Label>
              <Controller name="currentLocation" control={form.control} render={({ field }) => <Input id="currentLocation" {...field} className="mt-1" placeholder="e.g., New Delhi, India" />} />
              {form.formState.errors.currentLocation && <p className="text-sm text-destructive mt-1">{form.formState.errors.currentLocation.message}</p>}
            </div>
            <div className="flex justify-center pt-4">
              <SubmitButton />
            </div>
          </form>

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

          {varshphalData && (
            <Card className="mt-10 shadow-xl bg-card/70 border-primary/20 p-4 sm:p-6">
              <CardHeader className="text-center pb-4">
                <CardTitle className="text-2xl md:text-3xl text-accent">
                  Annual Forecast for {varshphalData.userName} ({varshphalData.forecastYear})
                </CardTitle>
                {varshphalData.solarReturnDate && <CardDescription>Solar Return on: {format(parseISO(varshphalData.solarReturnDate), "PPP")}</CardDescription>}
              </CardHeader>
              <CardContent className="space-y-8">
                
                <section>
                  <h3 className="text-xl font-semibold text-primary mb-3 flex items-center"><Info className="h-6 w-6 mr-2" />Overview & Key Influences</h3>
                  <div className="p-4 bg-muted/50 rounded-md space-y-2 text-sm">
                    <p><strong className="text-foreground/80">Varsh Lagna (Annual Ascendant):</strong> {varshphalData.varshLagna || "N/A"}</p>
                    <p><strong className="text-foreground/80">Muntha Position:</strong> {varshphalData.munthaPosition || "N/A"}</p>
                    <p><strong className="text-foreground/80">Muntha Lord's Effect:</strong> {varshphalData.munthaLordEffect || "Placeholder details."}</p>
                     {varshphalData.tajikaYogas && varshphalData.tajikaYogas.length > 0 && (
                        <div>
                            <strong className="text-foreground/80">Key Tajika Yogas:</strong>
                            <ul className="list-disc list-inside ml-4 text-muted-foreground">
                                {varshphalData.tajikaYogas.map((yoga, i) => <li key={i}>{yoga}</li>)}
                            </ul>
                        </div>
                     )}
                    <p className="pt-2 border-t border-border/30 mt-2">{varshphalData.overview}</p>
                  </div>
                </section>
                
                <Separator className="my-6 border-dashed" />

                <section>
                    <h3 className="text-xl font-semibold text-primary mb-4 flex items-center"><User className="h-6 w-6 mr-2" />Area-wise Predictions</h3>
                    <Accordion type="multiple" className="w-full space-y-3" defaultValue={varshphalData.areaPredictions.map((_,i) => `area-${i}`)}>
                        {varshphalData.areaPredictions.map((area, index) => {
                            const Icon = areaPredictionIcons[area.title] || Sparkles;
                            return (
                                <AccordionItem value={`area-${index}`} key={index} className="border bg-background rounded-lg shadow-sm hover:shadow-md">
                                    <AccordionTrigger className="px-4 py-3 text-left hover:no-underline text-lg font-medium text-accent data-[state=open]:bg-accent/10">
                                        <div className="flex items-center">
                                            <Icon className="h-5 w-5 mr-2 text-accent/80"/>
                                            {area.title}
                                        </div>
                                    </AccordionTrigger>
                                    <AccordionContent className="px-4 py-3 border-t text-sm space-y-1">
                                        <p className="text-foreground/90">{area.prediction}</p>
                                        {area.keyInfluences && <p className="text-xs text-muted-foreground italic">Key Influences: {area.keyInfluences}</p>}
                                    </AccordionContent>
                                </AccordionItem>
                            );
                        })}
                    </Accordion>
                </section>

                <Separator className="my-6 border-dashed" />

                <section>
                  <h3 className="text-xl font-semibold text-primary mb-4 flex items-center"><CalendarIcon className="h-6 w-6 mr-2" />Important Periods</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Card className="p-4 bg-green-500/10 border-green-500/30">
                      <CardHeader className="p-0 pb-2"><CardTitle className="text-md text-green-700 dark:text-green-400 flex items-center"><ShieldCheck className="mr-2"/>Favorable Months</CardTitle></CardHeader>
                      <CardContent className="p-0 text-sm text-muted-foreground">
                        <ul className="list-disc list-inside">{varshphalData.importantPeriods.favorableMonths.map((m,i)=><li key={i}>{m}</li>)}</ul>
                      </CardContent>
                    </Card>
                    <Card className="p-4 bg-red-500/10 border-red-500/30">
                      <CardHeader className="p-0 pb-2"><CardTitle className="text-md text-red-700 dark:text-red-400 flex items-center"><ShieldAlert className="mr-2"/>Caution Months</CardTitle></CardHeader>
                      <CardContent className="p-0 text-sm text-muted-foreground">
                        <ul className="list-disc list-inside">{varshphalData.importantPeriods.cautionMonths.map((m,i)=><li key={i}>{m}</li>)}</ul>
                      </CardContent>
                    </Card>
                  </div>
                  {varshphalData.importantPeriods.milestones && varshphalData.importantPeriods.milestones.length > 0 && (
                    <div className="mt-4">
                        <h4 className="font-medium text-foreground/80">Potential Milestones:</h4>
                        <ul className="list-disc list-inside ml-4 text-sm text-muted-foreground">
                            {varshphalData.importantPeriods.milestones.map((m,i)=><li key={i}>{m}</li>)}
                        </ul>
                    </div>
                  )}
                </section>
                
                {varshphalData.sahamPointsAnalysis && varshphalData.sahamPointsAnalysis.length > 0 && (
                  <>
                    <Separator className="my-6 border-dashed" />
                    <section>
                        <h3 className="text-xl font-semibold text-primary mb-3 flex items-center"><SigmaSquare className="h-6 w-6 mr-2" />Saham Points Analysis</h3>
                        <div className="space-y-3">
                        {varshphalData.sahamPointsAnalysis.map((saham, i)=>(
                            <Card key={i} className="p-3 bg-muted/40 text-xs">
                                <p><strong className="text-foreground/90 text-sm">{saham.name} ({saham.longitude}):</strong> {saham.interpretation}</p>
                            </Card>
                        ))}
                        </div>
                    </section>
                  </>
                )}

                {varshphalData.remedialMeasures && varshphalData.remedialMeasures.length > 0 && (
                     <>
                        <Separator className="my-6 border-dashed" />
                        <section>
                            <h3 className="text-xl font-semibold text-primary mb-3 flex items-center"><Sparkles className="h-6 w-6 mr-2" />Remedial Measures</h3>
                            <Card className="p-4 bg-sky-500/10 border-sky-500/30">
                                <ul className="list-disc list-inside space-y-1 text-sm text-sky-700 dark:text-sky-300">
                                {varshphalData.remedialMeasures.map((measure, i) => (
                                    <li key={i}>{measure}</li>
                                ))}
                                </ul>
                            </Card>
                        </section>
                    </>
                )}

                <div data-ai-hint="solar return astrology chart" className="mt-6 p-4 border-2 border-dashed border-border rounded-md text-center text-muted-foreground bg-muted/30">
                    Solar Return Chart Visualization Placeholder
                    <p className="text-xs">(Actual chart rendering requires an advanced astrological graphics engine)</p>
                </div>

              </CardContent>
              <CardFooter className="flex flex-col items-center gap-4 pt-6 border-t">
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Button variant="outline" className="hover:bg-primary/10 w-full sm:w-auto" disabled>
                        <Download className="mr-2 h-4 w-4" />
                        Download Full PDF Report
                      </Button>
                    </TooltipTrigger>
                    <TooltipContent><p>Feature coming soon</p></TooltipContent>
                  </Tooltip>
                </TooltipProvider>
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Button variant="link" className="text-primary hover:text-accent w-full sm:w-auto" disabled>
                        Book Astrologer Consultation
                      </Button>
                    </TooltipTrigger>
                    <TooltipContent><p>Feature coming soon</p></TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </CardFooter>
            </Card>
          )}
        </CardContent>
        <CardFooter className="text-center block py-6">
            <p className="text-xs text-muted-foreground">
                Varshphal provides insights for the year based on Tajika principles. These are general indications.
                For precise and personalized guidance, always consult a qualified professional astrologer.
                Actual calculations and chart rendering are not yet implemented.
            </p>
        </CardFooter>
      </Card>
    </div>
  );
}


    