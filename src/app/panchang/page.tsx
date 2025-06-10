
"use client";

import { useState, useEffect, useTransition } from "react";
import { useFormState, useFormStatus } from "react-dom";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import type { Metadata } from 'next';
import { z } from "zod";
import { format, parseISO } from "date-fns";

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
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverTrigger, PopoverContent } from "@/components/ui/popover";
import {
  CalendarDays, Loader2, Search, AlertCircle, Sun, Moon, Star, Sprout,
  Watch, Sigma, Clock, ShieldAlert, ShieldCheck, Info, BookOpen, Palette, Download as DownloadIcon
} from "lucide-react";
import { cn } from "@/lib/utils";
import { getPanchangDetails, type PanchangFormState } from "./actions";
import type { PanchangOutput, PanchangElement, PanchangTime } from "@/types";
import { APP_NAME } from "@/lib/constants";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000';

export const metadataObject: Metadata = {
  title: `Daily Panchang - Hindu Almanac | ${APP_NAME}`,
  description: `Access detailed daily Panchang (Hindu Almanac) for your location with ${APP_NAME}. Find Tithi, Nakshatra, Yoga, Karana, auspicious (Shubh Muhurat) and inauspicious (Ashubh Muhurat) timings, and more.`,
  keywords: ['Panchang', 'Hindu Almanac', 'Daily Panchang', 'Tithi', 'Nakshatra', 'Yoga', 'Karana', 'Muhurat', 'Vedic Calendar', APP_NAME],
  alternates: {
    canonical: `${BASE_URL}/panchang`,
  },
  openGraph: {
    title: `Daily Panchang - Hindu Almanac | ${APP_NAME}`,
    description: 'Detailed daily Hindu Panchang with Tithi, Nakshatra, Yoga, Karana, and Muhurat timings.',
    url: `${BASE_URL}/panchang`,
  },
};

const PanchangClientSchema = z.object({
  date: z.date({ required_error: "Date is required." }),
  location: z.string().min(2, { message: "Location must be at least 2 characters."}).max(100, { message: "Location must be 100 characters or less."}),
});
type PanchangFormValues = z.infer<typeof PanchangClientSchema>;

const initialFormState: PanchangFormState = {
  message: null,
  data: null,
};

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" disabled={pending} aria-busy={pending} className="w-full md:w-auto bg-primary hover:bg-primary/90 text-primary-foreground">
      {pending ? (
        <>
          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
          Fetching Panchang...
        </>
      ) : (
        <>
          Get Panchang <Search className="ml-2 h-4 w-4" />
        </>
      )}
    </Button>
  );
}

const PanchangItemCard: React.FC<{ title: string; icon: React.ElementType; children: React.ReactNode; className?: string }> = ({ title, icon: Icon, children, className }) => (
  <Card className={cn("bg-card/70 shadow-md border-border/40 hover:shadow-primary/10 transition-shadow", className)}>
    <CardHeader className="pb-2 pt-4 px-4">
      <div className="flex items-center">
        <Icon className="h-5 w-5 text-accent mr-2" />
        <CardTitle className="text-lg font-semibold text-primary">{title}</CardTitle>
      </div>
    </CardHeader>
    <CardContent className="px-4 pb-4 text-sm text-muted-foreground space-y-1">
      {children}
    </CardContent>
  </Card>
);

const TimeBlock: React.FC<{ label: string; time: PanchangTime | undefined; isAuspicious?: boolean }> = ({ label, time, isAuspicious }) => {
  if (!time || !time.start || !time.end) return null;
  const colorClass = isAuspicious === true ? "text-green-600 dark:text-green-400" : isAuspicious === false ? "text-red-600 dark:text-red-400" : "text-muted-foreground";
  return (
    <div>
      <span className="font-medium text-foreground/90">{label}:</span>
      <span className={cn("ml-1", colorClass)}>{time.start} - {time.end}</span>
    </div>
  );
};


export default function PanchangPage() {
  const [formState, formAction] = useFormState(getPanchangDetails, initialFormState);
  const [panchangData, setPanchangData] = useState<PanchangOutput | null>(null);
  const [isPendingClient, setIsPendingClient] = useState(true); 
  const { pending: isFormSubmitting } = useFormStatus(); 

  const form = useForm<PanchangFormValues>({
    resolver: zodResolver(PanchangClientSchema),
    defaultValues: {
      date: new Date(),
      location: "New Delhi, India", 
    },
  });

  useEffect(() => {
    if (formState.message === "success" && formState.data) {
      setPanchangData(formState.data);
    } else if (formState.message && formState.message !== "success") {
      setPanchangData(null);
    }
    setIsPendingClient(false); 
  }, [formState]);

  useEffect(() => {
    const defaultValues = form.getValues();
    const formData = new FormData();
    formData.append("date", defaultValues.date.toISOString());
    formData.append("location", defaultValues.location);
    
    setIsPendingClient(true);
    getPanchangDetails(initialFormState, formData).then(state => {
        if (state.message === "success" && state.data) setPanchangData(state.data);
        else setPanchangData(null);
        setIsPendingClient(false);
    });
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []); 

  const handleFormSubmit = (values: PanchangFormValues) => {
    const formData = new FormData();
    formData.append("date", values.date.toISOString());
    formData.append("location", values.location);
    formAction(formData);
  };
  
  const isLoading = isPendingClient || isFormSubmitting;

  return (
    <div className="container mx-auto py-8">
      <Card className="shadow-xl border-primary/20">
        <CardHeader className="text-center">
          <div className="inline-flex items-center justify-center p-3 bg-primary/10 rounded-full mb-4 mx-auto">
            <CalendarDays className="h-16 w-16 text-primary" />
          </div>
          <CardTitle className="text-3xl font-bold text-primary">Comprehensive Panchang</CardTitle>
          <CardDescription className="text-lg text-muted-foreground mt-2 max-w-3xl mx-auto">
            View detailed daily Hindu calendar details for your selected date and location.
            <br/><small className="text-xs">(Panchang data shown is illustrative.)</small>
          </CardDescription>
        </CardHeader>

        <CardContent className="mt-6 space-y-8">
          <Card className="p-4 sm:p-6 bg-card/50 shadow-md border-border/30">
            <form onSubmit={form.handleSubmit(handleFormSubmit)} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-end">
                <div>
                  <Label htmlFor="date" className="text-md">Select Date</Label>
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button
                        variant={"outline"}
                        className={cn(
                          "w-full justify-start text-left font-normal mt-1 text-base",
                          !form.watch("date") && "text-muted-foreground"
                        )}
                      >
                        <CalendarDays className="mr-2 h-4 w-4" />
                        {form.watch("date") ? format(form.watch("date"), "PPP") : <span>Pick a date</span>}
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0">
                      <Calendar
                        mode="single"
                        selected={form.watch("date")}
                        onSelect={(date) => form.setValue("date", date || new Date(), { shouldValidate: true })}
                        initialFocus
                      />
                    </PopoverContent>
                  </Popover>
                  {form.formState.errors.date && (
                    <p className="text-sm text-destructive mt-1">{form.formState.errors.date.message}</p>
                  )}
                </div>
                <div>
                  <Label htmlFor="location" className="text-md">Location (City, Country)</Label>
                  <Input 
                    id="location" 
                    {...form.register("location")} 
                    className="mt-1 text-base"
                    placeholder="e.g., Mumbai, India"
                  />
                  {form.formState.errors.location && (
                    <p className="text-sm text-destructive mt-1">{form.formState.errors.location.message}</p>
                  )}
                </div>
              </div>
              <div className="flex justify-center md:justify-end">
                 <SubmitButton />
              </div>
            </form>
          </Card>

          {isLoading && (
            <div className="flex flex-col justify-center items-center py-10">
              <Loader2 className="h-12 w-12 text-primary animate-spin" />
              <p className="ml-4 text-lg text-muted-foreground mt-4">Loading Panchang data...</p>
            </div>
          )}

          {formState.message && formState.message !== "success" && !isLoading && (
             <Alert variant="destructive" className="mt-6">
               <AlertCircle className="h-4 w-4" />
               <AlertTitle>Error</AlertTitle>
               <AlertDescription>
                 {formState.message}
                 {formState.issues && (
                   <ul className="list-disc list-inside mt-1">
                     {formState.issues.map((issue, i) => <li key={i}>{issue}</li>)}
                   </ul>
                 )}
               </AlertDescription>
             </Alert>
           )}
          
          {!isLoading && panchangData && (
            <div className="space-y-6">
              <Card className="bg-primary/5 border-primary/20 shadow-lg">
                <CardHeader>
                  <CardTitle className="text-xl text-primary text-center">
                    Panchang for {format(parseISO(panchangData.date), "EEEE, MMMM d, yyyy")} in {panchangData.location}
                  </CardTitle>
                </CardHeader>
              </Card>

              <section>
                <h2 className="text-xl font-semibold text-accent mb-3 flex items-center">
                    <Sprout className="h-6 w-6 mr-2"/>Daily Essentials
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  <PanchangItemCard title="Sunrise & Sunset" icon={Sun}>
                    <p>Sunrise: {panchangData.sunrise}</p>
                    <p>Sunset: {panchangData.sunset}</p>
                  </PanchangItemCard>
                  <PanchangItemCard title="Moonrise & Moonset" icon={Moon}>
                    <p>Moonrise: {panchangData.moonrise}</p>
                    <p>Moonset: {panchangData.moonset}</p>
                  </PanchangItemCard>
                  <PanchangItemCard title="Tithi" icon={CalendarDays}>
                    <p>{panchangData.tithi.name} {panchangData.tithi.endsAt ? `(ends ${panchangData.tithi.endsAt})` : ''}</p>
                  </PanchangItemCard>
                  <PanchangItemCard title="Nakshatra" icon={Star}>
                    <p>{panchangData.nakshatra.name} {panchangData.nakshatra.endsAt ? `(ends ${panchangData.nakshatra.endsAt})` : ''}</p>
                  </PanchangItemCard>
                  <PanchangItemCard title="Yoga" icon={Sigma}>
                    <p>{panchangData.yoga.name} {panchangData.yoga.endsAt ? `(ends ${panchangData.yoga.endsAt})` : ''}</p>
                  </PanchangItemCard>
                  <PanchangItemCard title="Karana" icon={Watch}>
                    <p>{panchangData.karana.name} {panchangData.karana.endsAt ? `(ends ${panchangData.karana.endsAt})` : ''}</p>
                  </PanchangItemCard>
                </div>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-accent mb-3 flex items-center">
                    <Clock className="h-6 w-6 mr-2"/>Auspicious & Inauspicious Timings
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <PanchangItemCard title="Key Timings" icon={ShieldAlert} className="border-destructive/30">
                        <TimeBlock label="Rahu Kaal" time={panchangData.rahukaal} isAuspicious={false} />
                        <TimeBlock label="Yamaganda" time={panchangData.yamaganda} isAuspicious={false} />
                        <TimeBlock label="Gulika Kaal" time={panchangData.gulikaKaal} isAuspicious={false}/>
                    </PanchangItemCard>
                     <PanchangItemCard title="Favorable Timings" icon={ShieldCheck} className="border-green-500/30">
                        <TimeBlock label="Abhijit Muhurat" time={panchangData.abhijitMuhurat} isAuspicious={true} />
                        <TimeBlock label="Amrita Kalam" time={panchangData.amritaKalam} isAuspicious={true} />
                        {panchangData.durMuhurat && panchangData.durMuhurat.map((dm, i) => (
                            <TimeBlock key={`dur-${i}`} label={`Dur Muhurat ${i+1}`} time={dm} isAuspicious={false} />
                        ))}
                         <TimeBlock label="Varjyam" time={panchangData.varjyam} isAuspicious={false} />
                    </PanchangItemCard>
                </div>
                 { (panchangData.shubhMuhuratNotes || panchangData.asubhMuhuratNotes) &&
                    <Card className="mt-4 p-4 bg-muted/30">
                        {panchangData.shubhMuhuratNotes && panchangData.shubhMuhuratNotes.length > 0 && (
                            <div className="mb-2">
                                <h4 className="font-semibold text-green-600">Auspicious Notes:</h4>
                                <ul className="list-disc list-inside text-sm text-muted-foreground">
                                    {panchangData.shubhMuhuratNotes.map((note, i) => <li key={`shubh-${i}`}>{note}</li>)}
                                </ul>
                            </div>
                        )}
                        {panchangData.asubhMuhuratNotes && panchangData.asubhMuhuratNotes.length > 0 && (
                             <div>
                                <h4 className="font-semibold text-red-600">Inauspicious Notes:</h4>
                                <ul className="list-disc list-inside text-sm text-muted-foreground">
                                    {panchangData.asubhMuhuratNotes.map((note, i) => <li key={`asubh-${i}`}>{note}</li>)}
                                </ul>
                            </div>
                        )}
                    </Card>
                }
              </section>
              
              <section>
                <h2 className="text-xl font-semibold text-accent mb-3 flex items-center">
                    <Info className="h-6 w-6 mr-2"/>Vedic Date Information
                </h2>
                 <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    <PanchangItemCard title="Paksha & Ritu" icon={Palette}>
                        <p>Paksha: {panchangData.paksha}</p>
                        {panchangData.ritu && <p>Ritu (Season): {panchangData.ritu}</p>}
                    </PanchangItemCard>
                    <PanchangItemCard title="Lunar Month" icon={CalendarDays}>
                        {panchangData.lunarMonthAmanta && <p>Amanta: {panchangData.lunarMonthAmanta}</p>}
                        {panchangData.lunarMonthPurnimanta && <p>Purnimanta: {panchangData.lunarMonthPurnimanta}</p>}
                    </PanchangItemCard>
                     <PanchangItemCard title="Samvat" icon={Star}>
                        {panchangData.vikramSamvat && <p>Vikram Samvat: {panchangData.vikramSamvat}</p>}
                        {panchangData.shakaSamvat && <p>Shaka Samvat: {panchangData.shakaSamvat}</p>}
                    </PanchangItemCard>
                 </div>
              </section>

              <section>
                 <h2 className="text-xl font-semibold text-accent mb-3 flex items-center">
                    <Sprout className="h-6 w-6 mr-2"/>Additional Insights
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <PanchangItemCard title="Moon Phase" icon={Moon}>
                        <p>{panchangData.moonPhaseVisual || "Moon phase visual placeholder"}</p>
                         <div data-ai-hint="moon phase diagram" className="mt-2 aspect-square w-24 h-24 bg-muted rounded-full mx-auto flex items-center justify-center text-xs text-muted-foreground">
                            Visual
                        </div>
                    </PanchangItemCard>
                    <PanchangItemCard title="Daily Mantra/Ritual" icon={BookOpen}>
                        <p>{panchangData.dailyMantra || "Recommendation placeholder"}</p>
                    </PanchangItemCard>
                </div>
              </section>

              {panchangData.additionalNotes && (
                <Alert className="mt-4">
                  <Info className="h-4 w-4" />
                  <AlertTitle>Notes</AlertTitle>
                  <AlertDescription>{panchangData.additionalNotes}</AlertDescription>
                </Alert>
              )}

            <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
              <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                        <Button variant="outline" className="hover:bg-primary/10" disabled>
                           <DownloadIcon className="mr-2 h-4 w-4" /> Download PDF
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
                        <Button variant="outline" className="hover:bg-primary/10" disabled>
                            <CalendarDays className="mr-2 h-4 w-4" /> Set Reminder
                        </Button>
                    </TooltipTrigger>
                     <TooltipContent>
                       <p>Feature coming soon</p>
                     </TooltipContent>
                  </Tooltip>
              </TooltipProvider>
            </div>

            </div>
          )}
        </CardContent>
        <CardFooter className="text-center block py-6">
            <p className="text-xs text-muted-foreground">
                Panchang calculations are complex and location-dependent. This is illustrative data.
                For precise timings and muhurtas, always consult a professional astrologer or reliable local Panchang.
            </p>
        </CardFooter>
      </Card>
    </div>
  );
}


    