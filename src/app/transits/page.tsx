
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
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CalendarIcon, Loader2, Sparkles, AlertCircle, Download, Move, User, MapPin, Sun, Moon, Shield as MarsIcon, MessageSquare as MercuryIcon, GraduationCap as JupiterIcon, Heart as VenusIcon, Hourglass as SaturnIcon, Orbit as RahuKetuIcon, Settings2, Info, ChevronLeft, ChevronRight, Eye } from "lucide-react";
import { cn } from "@/lib/utils";
import { format, addDays, subDays, addWeeks, subWeeks, addMonths, subMonths, startOfWeek, endOfWeek, startOfMonth, endOfMonth, parseISO } from "date-fns";
import { getTransitPredictions, type TransitFormState } from "./actions";
import type { TransitPredictionOutput, PlanetTransitInfo, ForecastPeriod, TransitBirthDetailsInput } from "@/types";
import { Separator } from "@/components/ui/separator";
import { APP_NAME } from "@/lib/constants";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000';

export const metadataObject: Metadata = {
  title: `Real-Time Transit Predictions (Gochar) | ${APP_NAME}`,
  description: `Analyze current planetary transits (Gochar) and their impact on your natal chart with ${APP_NAME}. Get insights for daily, weekly, or monthly periods.`,
  keywords: ['Transit Predictions', 'Gochar Analysis', 'Planetary Transits', 'Vedic Astrology Transits', 'Astrology Forecasts', APP_NAME],
  alternates: {
    canonical: `${BASE_URL}/transits`,
  },
  openGraph: {
    title: `Real-Time Transit Predictions (Gochar) | ${APP_NAME}`,
    description: 'Analyze current planetary transits and their impact on your natal chart.',
    url: `${BASE_URL}/transits`,
  },
};

const TransitClientSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }).max(100),
  gender: z.enum(["male", "female", "other"], { required_error: "Please select a gender." }),
  dateOfBirth: z.date({ required_error: "Date of birth is required." }),
  timeOfBirth: z.string().regex(/^([01]\d|2[0-3]):([0-5]\d)$/, { message: "Invalid time format (HH:MM)." }),
  placeOfBirth: z.string().min(2, { message: "Place of birth must be at least 2 characters." }).max(100),
  targetDate: z.date({required_error: "Target date for analysis is required."}),
  period: z.enum(["daily", "weekly", "monthly"], { required_error: "Forecast period is required."}),
});

type TransitFormValues = z.infer<typeof TransitClientSchema>;

const initialState: TransitFormState = {
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
          Analyzing Transits...
        </>
      ) : (
        <>
          Analyze Transits <Sparkles className="ml-2 h-5 w-5" />
        </>
      )}
    </Button>
  );
}

const planetIcons: Record<string, LucideIcon> = {
  Sun: Sun, Moon: Moon, Mars: MarsIcon, Mercury: MercuryIcon, Jupiter: JupiterIcon, Venus: VenusIcon, Saturn: SaturnIcon, Rahu: RahuKetuIcon, Ketu: RahuKetuIcon,
};

const PlanetTransitCard: React.FC<{ transitInfo: PlanetTransitInfo }> = ({ transitInfo }) => {
  const Icon = planetIcons[transitInfo.planetName] || Move;
  return (
    <Card className="bg-card/60 shadow-lg border-border/30 hover:shadow-primary/15 transition-shadow duration-300">
      <CardHeader className="pb-2 pt-4 px-4">
        <div className="flex items-center justify-between">
          <CardTitle className="text-lg font-semibold text-primary flex items-center">
            <Icon className="h-5 w-5 mr-2 text-primary/80" />
            {transitInfo.planetName}
            {transitInfo.isRetrograde && <span className="ml-2 text-xs text-orange-500">(R)</span>}
          </CardTitle>
          <span className="text-xs text-muted-foreground">
            in {transitInfo.transitingSign} ({transitInfo.transitingHouseNatal})
          </span>
        </div>
      </CardHeader>
      <CardContent className="px-4 pb-4 text-sm text-muted-foreground space-y-1">
        <p>{transitInfo.interpretation}</p>
        {transitInfo.aspects && transitInfo.aspects.length > 0 && (
          <p className="text-xs italic mt-1">Aspects: {transitInfo.aspects.join(', ')}</p>
        )}
      </CardContent>
    </Card>
  );
};


export default function TransitPredictionsPage() {
  const [formState, formAction] = useActionState(getTransitPredictions, initialState);
  const [transitData, setTransitData] = useState<TransitPredictionOutput | null>(null);
  const [currentDisplayDate, setCurrentDisplayDate] = useState(new Date());
  const [selectedPeriod, setSelectedPeriod] = useState<ForecastPeriod>("daily");
  
  const { pending: isFormSubmitting } = useFormStatus();

  const form = useForm<TransitFormValues>({
    resolver: zodResolver(TransitClientSchema),
    defaultValues: {
      name: "", gender: undefined, dateOfBirth: undefined, timeOfBirth: "", placeOfBirth: "",
      targetDate: currentDisplayDate,
      period: selectedPeriod,
    },
  });
  
  const { watch, setValue, getValues, formState: {isDirty, isValid} } = form; 
  const watchedPeriod = watch("period");
  const watchedTargetDate = watch("targetDate");

  useEffect(() => {
    if (formState.message === "success" && formState.data) {
      setTransitData(formState.data);
    } else if (formState.message && formState.message !== "success") {
      setTransitData(null);
      if (formState.fields) {
        form.setValue('name', formState.fields.name || "");
        form.setValue('gender', formState.fields.gender as "male" | "female" | "other" || undefined);
        form.setValue('dateOfBirth', formState.fields.dateOfBirth ? parseISO(formState.fields.dateOfBirth) : undefined);
        form.setValue('timeOfBirth', formState.fields.timeOfBirth || "");
        form.setValue('placeOfBirth', formState.fields.placeOfBirth || "");
        form.setValue('targetDate', formState.fields.targetDate ? parseISO(formState.fields.targetDate) : new Date());
        form.setValue('period', formState.fields.period as ForecastPeriod || "daily");
      }
    }
  }, [formState, form]);

  const handleFormSubmit = (values: TransitFormValues) => {
    const formData = new FormData();
    Object.entries(values).forEach(([key, value]) => {
      if (value instanceof Date) formData.append(key, value.toISOString());
      else if (value !== undefined && value !== null) formData.append(key, String(value));
    });
    formAction(formData);
  };

  const handlePeriodTabChange = (period: string) => {
    const newPeriod = period as ForecastPeriod;
    setSelectedPeriod(newPeriod);
    setValue("period", newPeriod); 
    if (getValues("name") && getValues("dateOfBirth") && isDirty && isValid) {
        form.handleSubmit(handleFormSubmit)();
    }
  };

  const handleDateNavigation = (direction: "prev" | "next") => {
    let newDate;
    if (selectedPeriod === "daily") {
      newDate = direction === "prev" ? subDays(currentDisplayDate, 1) : addDays(currentDisplayDate, 1);
    } else if (selectedPeriod === "weekly") {
      newDate = direction === "prev" ? subWeeks(currentDisplayDate, 1) : addWeeks(currentDisplayDate, 1);
    } else { 
      newDate = direction === "prev" ? subMonths(currentDisplayDate, 1) : addMonths(currentDisplayDate, 1);
    }
    setCurrentDisplayDate(newDate);
    setValue("targetDate", newDate);
    if (getValues("name") && getValues("dateOfBirth") && isDirty && isValid) {
        form.handleSubmit(handleFormSubmit)();
    }
  };
  
  const getDisplayDateRange = () => {
    if (selectedPeriod === "daily") return format(currentDisplayDate, "EEEE, MMMM d, yyyy");
    if (selectedPeriod === "weekly") {
      const start = startOfWeek(currentDisplayDate, { weekStartsOn: 1 }); 
      const end = endOfWeek(currentDisplayDate, { weekStartsOn: 1 });
      return `Week: ${format(start, "MMM d")} - ${format(end, "MMM d, yyyy")}`;
    }
    if (selectedPeriod === "monthly") return format(currentDisplayDate, "MMMM yyyy");
    return format(currentDisplayDate, "PPP");
  };

   useEffect(() => {
    setValue("targetDate", currentDisplayDate);
    setValue("period", selectedPeriod);
    if (getValues("name") && getValues("dateOfBirth") && isDirty && isValid) { 
        form.handleSubmit(handleFormSubmit)();
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentDisplayDate, selectedPeriod, isDirty, isValid]);


  return (
    <div className="container mx-auto py-8">
      <Card className="shadow-2xl border-primary/30 bg-card">
        <CardHeader className="text-center">
          <div className="inline-flex items-center justify-center p-3 bg-primary/10 rounded-full mb-4 mx-auto shadow-md">
            <Move className="h-16 w-16 text-primary" />
          </div>
          <CardTitle className="text-3xl md:text-4xl font-bold text-primary">Real-Time Transit Predictions (Gochar)</CardTitle>
          <CardDescription className="text-lg text-muted-foreground mt-2 max-w-3xl mx-auto">
            Analyze current planetary transits and their influence on your natal chart.
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
                        <CalendarIcon className="mr-2 h-4 w-4" />{field.value ? format(field.value, "PPP") : <span>Pick date</span>}
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
          
          <Card className="p-4 md:p-6 bg-card/50 shadow border-border/30">
             <CardHeader className="p-0 pb-4">
                <CardTitle className="text-xl text-primary">Select View Period & Date</CardTitle>
            </CardHeader>
            <CardContent className="p-0 space-y-4">
                <Tabs value={selectedPeriod} onValueChange={handlePeriodTabChange} className="w-full">
                    <TabsList className="grid w-full grid-cols-3 md:max-w-md mx-auto">
                        <TabsTrigger value="daily">Daily</TabsTrigger>
                        <TabsTrigger value="weekly">Weekly</TabsTrigger>
                        <TabsTrigger value="monthly">Monthly</TabsTrigger>
                    </TabsList>
                </Tabs>
                <div className="flex items-center justify-between p-2 border rounded-md bg-background">
                    <Button variant="outline" size="icon" onClick={() => handleDateNavigation("prev")} aria-label="Previous period" disabled={isFormSubmitting}>
                        <ChevronLeft className="h-5 w-5" />
                    </Button>
                    <div className="text-center">
                        <Label htmlFor="targetDateUI" className="text-xs text-muted-foreground">Target Date/Period</Label>
                         <h3 id="targetDateUI" className="text-md font-semibold text-accent flex items-center justify-center">
                            <CalendarIcon className="mr-2 h-4 w-4" />
                            {getDisplayDateRange()}
                        </h3>
                    </div>
                    <Button variant="outline" size="icon" onClick={() => handleDateNavigation("next")} aria-label="Next period" disabled={isFormSubmitting}>
                        <ChevronRight className="h-5 w-5" />
                    </Button>
                </div>
                <Controller name="targetDate" control={form.control} render={({ field }) => <Input type="hidden" {...field} />} />
                <Controller name="period" control={form.control} render={({ field }) => <Input type="hidden" {...field} />} />
            </CardContent>
          </Card>

          {isFormSubmitting && (
            <div className="flex flex-col justify-center items-center py-10">
              <Loader2 className="h-12 w-12 text-primary animate-spin" />
              <p className="ml-4 text-lg text-muted-foreground mt-4">Analyzing transits...</p>
            </div>
          )}

          {formState.message && formState.message !== "success" && !isFormSubmitting && (
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

          {transitData && !isFormSubmitting && (
            <Card className="mt-10 shadow-xl bg-card/70 border-primary/20 p-4 sm:p-6">
              <CardHeader className="text-center pb-4">
                <CardTitle className="text-2xl md:text-3xl text-accent">
                  Transit Analysis for {transitData.userName}
                </CardTitle>
                <CardDescription>For {transitData.period} starting {format(new Date(transitData.targetDate), "PPP")}</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                {transitData.generalOverview && (
                    <Card className="bg-primary/5 border-primary/10 p-4">
                        <h4 className="font-semibold text-primary mb-1 flex items-center"><Info className="h-5 w-5 mr-2"/>General Overview:</h4>
                        <p className="text-sm text-muted-foreground">{transitData.generalOverview}</p>
                    </Card>
                )}

                <div data-ai-hint="astrology transit chart overlay" className="my-6 p-6 border-2 border-dashed border-border rounded-md text-center text-muted-foreground bg-muted/30">
                    Live Transit Chart Overlay (Placeholder)
                    <p className="text-xs">(Interactive chart visualization to be implemented here)</p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {transitData.planetTransits.map((transit, index) => (
                        <PlanetTransitCard key={index} transitInfo={transit} />
                    ))}
                </div>

                {transitData.highImpactPeriods && transitData.highImpactPeriods.length > 0 && (
                    <section>
                        <h4 className="text-lg font-semibold text-primary mb-2 flex items-center"><AlertCircle className="h-5 w-5 mr-2 text-orange-500"/>High Impact Periods:</h4>
                        <div className="space-y-2">
                        {transitData.highImpactPeriods.map((hip, i) => (
                            <Card key={i} className="p-3 bg-amber-500/10 text-xs">
                                <strong className="text-amber-700 dark:text-amber-400">{hip.period}:</strong> {hip.description}
                            </Card>
                        ))}
                        </div>
                    </section>
                )}
                
                {transitData.remedies && transitData.remedies.length > 0 && (
                    <section>
                        <h4 className="text-lg font-semibold text-primary mb-2 flex items-center"><Sparkles className="h-5 w-5 mr-2 text-green-500"/>Remedial Suggestions:</h4>
                         <Card className="p-3 bg-green-500/10 text-xs text-green-700 dark:text-green-400">
                            <ul className="list-disc list-inside space-y-1">
                                {transitData.remedies.map((remedy, i) => <li key={i}>{remedy}</li>)}
                            </ul>
                        </Card>
                    </section>
                )}

                 <div data-ai-hint="timeline slider graph" className="my-6 p-4 border border-dashed border-border rounded-md text-center text-muted-foreground bg-muted/20">
                    Planetary Timeline Slider (Placeholder)
                </div>
              </CardContent>
              <CardFooter className="flex flex-col items-center gap-4 pt-6 border-t">
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Button variant="outline" className="hover:bg-primary/10 w-full sm:w-auto" disabled>
                        <Download className="mr-2 h-4 w-4" />
                        Download Report
                      </Button>
                    </TooltipTrigger>
                    <TooltipContent><p>Feature coming soon</p></TooltipContent>
                  </Tooltip>
                </TooltipProvider>
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Button variant="outline" className="hover:bg-primary/10 w-full sm:w-auto" disabled>
                        <Settings2 className="mr-2 h-4 w-4" />
                        Customize Alerts
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
                Transit predictions offer guidance based on planetary movements. Actual experiences vary with individual karma and free will.
                Detailed astrological calculations and chart visualizations are currently placeholders. Consult a professional astrologer for personalized advice.
            </p>
        </CardFooter>
      </Card>
    </div>
  );
}


    