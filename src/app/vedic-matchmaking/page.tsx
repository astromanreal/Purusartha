
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
import { CalendarIcon, Loader2, Sparkles, AlertCircle, Download, HeartHandshake, User, Users, ShieldCheck, BarChart3, CheckCircle, XCircle, Info } from "lucide-react";
import { cn } from "@/lib/utils";
import { format, parseISO } from "date-fns";
import { performMatchmaking, type MatchmakingFormState } from "./actions";
import type { MatchmakingOutput, AshtakootItem, ManglikResult, BirthDetailsInput as SinglePersonBirthDetails } from "@/types";
import { Separator } from "@/components/ui/separator";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Progress } from "@/components/ui/progress";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { APP_NAME } from "@/lib/constants";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000';

export const metadataObject: Metadata = {
  title: `Vedic Matchmaking (Gun Milan) - Compatibility Analysis | ${APP_NAME}`,
  description: `Perform Vedic horoscope matching (Gun Milan / Ashtakoot Milan) for marriage compatibility with ${APP_NAME}. Analyze Manglik Dosha and get detailed insights based on birth details of two individuals.`,
  keywords: ['Vedic Matchmaking', 'Gun Milan', 'Ashtakoot Compatibility', 'Horoscope Matching', 'Kundli Matching', 'Marriage Compatibility', 'Manglik Dosha Analysis', 'Hindu Astrology Matching', APP_NAME],
  alternates: {
    canonical: `${BASE_URL}/vedic-matchmaking`,
  },
  openGraph: {
    title: `Vedic Matchmaking (Gun Milan) - Horoscope Compatibility | ${APP_NAME}`,
    description: 'Analyze horoscope compatibility for marriage using Ashtakoot Milan and Manglik Dosha. Enter birth details for two individuals for detailed insights.',
    url: `${BASE_URL}/vedic-matchmaking`,
    siteName: APP_NAME,
    images: [
      {
        url: `${BASE_URL}/og-images/og-image-vedic-matchmaking.png`,
        width: 1200,
        height: 630,
        alt: `Vedic Matchmaking - ${APP_NAME}`,
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: `Vedic Matchmaking (Gun Milan) - Horoscope Compatibility | ${APP_NAME}`,
    description: 'Analyze horoscope compatibility for marriage using Ashtakoot Milan and Manglik Dosha.',
    images: [`${BASE_URL}/og-images/og-image-vedic-matchmaking.png`],
  },
};

const BirthDetailsClientSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }).max(100),
  gender: z.enum(["male", "female", "other"], { required_error: "Please select a gender." }),
  dateOfBirth: z.date({ required_error: "Date of birth is required." }),
  timeOfBirth: z.string().regex(/^([01]\d|2[0-3]):([0-5]\d)$/, { message: "Invalid time format (HH:MM)." }),
  placeOfBirth: z.string().min(2, { message: "Place of birth must be at least 2 characters." }).max(100),
});

const MatchmakingClientSchema = z.object({
  person1: BirthDetailsClientSchema,
  person2: BirthDetailsClientSchema,
});

type MatchmakingFormValues = z.infer<typeof MatchmakingClientSchema>;

const initialState: MatchmakingFormState = {
  message: null,
};

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" disabled={pending} aria-busy={pending} className="w-full md:w-auto bg-primary hover:bg-primary/90 text-primary-foreground text-lg py-3 px-6">
      {pending ? (
        <>
          <Loader2 className="mr-2 h-5 w-5 animate-spin" />
          Calculating Compatibility...
        </>
      ) : (
        <>
          Match Horoscopes <Sparkles className="ml-2 h-5 w-5" />
        </>
      )}
    </Button>
  );
}

interface BirthDetailsFormProps {
  personPrefix: "person1" | "person2";
  control: any; 
  errors: any; 
  defaultValues?: Partial<z.infer<typeof BirthDetailsClientSchema>>;
  title: string;
  icon: LucideIcon;
}

const BirthDetailsFields: React.FC<BirthDetailsFormProps> = ({ personPrefix, control, errors, defaultValues, title, icon: Icon }) => {
  return (
    <Card className="shadow-lg border-primary/20 bg-card/70">
      <CardHeader>
        <CardTitle className="text-xl text-accent flex items-center">
          <Icon className="h-6 w-6 mr-2" /> {title} Details
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div>
          <Label htmlFor={`${personPrefix}Name`} className="text-md">Full Name</Label>
          <Controller
            name={`${personPrefix}.name`}
            control={control}
            defaultValue={defaultValues?.name || ""}
            render={({ field }) => <Input id={`${personPrefix}Name`} {...field} className="mt-1" />}
          />
          {errors?.[personPrefix]?.name && (
            <p className="text-sm text-destructive mt-1">{errors[personPrefix]?.name?.message}</p>
          )}
        </div>
        <div>
          <Label htmlFor={`${personPrefix}Gender`} className="text-md">Gender</Label>
          <Controller
            name={`${personPrefix}.gender`}
            control={control}
            defaultValue={defaultValues?.gender}
            render={({ field }) => (
              <Select onValueChange={field.onChange} value={field.value}>
                <SelectTrigger id={`${personPrefix}Gender`} className="mt-1">
                  <SelectValue placeholder="Select gender" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="male">Male</SelectItem>
                  <SelectItem value="female">Female</SelectItem>
                  <SelectItem value="other">Other</SelectItem>
                </SelectContent>
              </Select>
            )}
          />
          {errors?.[personPrefix]?.gender && (
            <p className="text-sm text-destructive mt-1">{errors[personPrefix]?.gender?.message}</p>
          )}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <Label htmlFor={`${personPrefix}DateOfBirth`} className="text-md">Date of Birth</Label>
             <Controller
                name={`${personPrefix}.dateOfBirth`}
                control={control}
                defaultValue={defaultValues?.dateOfBirth}
                render={({ field }) => (
                    <Popover>
                        <PopoverTrigger asChild>
                        <Button
                            variant={"outline"}
                            className={cn(
                            "w-full justify-start text-left font-normal mt-1",
                            !field.value && "text-muted-foreground"
                            )}
                        >
                            <CalendarIcon className="mr-2 h-4 w-4" />
                            {field.value ? format(field.value, "PPP") : <span>Pick a date</span>}
                        </Button>
                        </PopoverTrigger>
                        <PopoverContent className="w-auto p-0">
                        <Calendar
                            mode="single"
                            selected={field.value}
                            onSelect={field.onChange}
                            initialFocus
                            captionLayout="dropdown-buttons"
                            fromYear={1900}
                            toYear={new Date().getFullYear()}
                        />
                        </PopoverContent>
                    </Popover>
                )}
            />
            {errors?.[personPrefix]?.dateOfBirth && (
              <p className="text-sm text-destructive mt-1">{errors[personPrefix]?.dateOfBirth?.message}</p>
            )}
          </div>
          <div>
            <Label htmlFor={`${personPrefix}TimeOfBirth`} className="text-md">Time of Birth (HH:MM)</Label>
             <Controller
                name={`${personPrefix}.timeOfBirth`}
                control={control}
                defaultValue={defaultValues?.timeOfBirth || ""}
                render={({ field }) => <Input id={`${personPrefix}TimeOfBirth`} type="time" {...field} className="mt-1" />}
            />
            {errors?.[personPrefix]?.timeOfBirth && (
              <p className="text-sm text-destructive mt-1">{errors[personPrefix]?.timeOfBirth?.message}</p>
            )}
          </div>
        </div>
        <div>
          <Label htmlFor={`${personPrefix}PlaceOfBirth`} className="text-md">Place of Birth (City, Country)</Label>
          <Controller
            name={`${personPrefix}.placeOfBirth`}
            control={control}
            defaultValue={defaultValues?.placeOfBirth || ""}
            render={({ field }) => <Input id={`${personPrefix}PlaceOfBirth`} {...field} className="mt-1" />}
          />
          {errors?.[personPrefix]?.placeOfBirth && (
            <p className="text-sm text-destructive mt-1">{errors[personPrefix]?.placeOfBirth?.message}</p>
          )}
        </div>
      </CardContent>
    </Card>
  );
};


export default function VedicMatchmakingPage() {
  const [formState, formAction] = useActionState(performMatchmaking, initialState);
  const [matchmakingData, setMatchmakingData] = useState<MatchmakingOutput | null>(null);
  const [, startTransition] = useTransition();

  const form = useForm<MatchmakingFormValues>({
    resolver: zodResolver(MatchmakingClientSchema),
    defaultValues: {
      person1: { name: "", gender: undefined, dateOfBirth: undefined, timeOfBirth: "", placeOfBirth: "" },
      person2: { name: "", gender: undefined, dateOfBirth: undefined, timeOfBirth: "", placeOfBirth: "" },
    },
  });

  useEffect(() => {
    if (formState.message === "success" && formState.data) {
      setMatchmakingData(formState.data);
    } else if (formState.message && formState.message !== "success") {
      setMatchmakingData(null);
      if (formState.fields) {
        form.setValue('person1.name', formState.fields.person1Name || "");
        form.setValue('person1.gender', formState.fields.person1Gender as "male" | "female" | "other" || undefined);
        form.setValue('person1.dateOfBirth', formState.fields.person1DateOfBirth ? new Date(formState.fields.person1DateOfBirth) : undefined);
        form.setValue('person1.timeOfBirth', formState.fields.person1TimeOfBirth || "");
        form.setValue('person1.placeOfBirth', formState.fields.person1PlaceOfBirth || "");
        
        form.setValue('person2.name', formState.fields.person2Name || "");
        form.setValue('person2.gender', formState.fields.person2Gender as "male" | "female" | "other" || undefined);
        form.setValue('person2.dateOfBirth', formState.fields.person2DateOfBirth ? new Date(formState.fields.person2DateOfBirth) : undefined);
        form.setValue('person2.timeOfBirth', formState.fields.person2TimeOfBirth || "");
        form.setValue('person2.placeOfBirth', formState.fields.person2PlaceOfBirth || "");
      }
    }
  }, [formState, form]);

  const handleFormSubmit = (values: MatchmakingFormValues) => {
    const formData = new FormData();
    formData.append("person1Name", values.person1.name);
    formData.append("person1Gender", values.person1.gender);
    if (values.person1.dateOfBirth) formData.append("person1DateOfBirth", values.person1.dateOfBirth.toISOString());
    formData.append("person1TimeOfBirth", values.person1.timeOfBirth);
    formData.append("person1PlaceOfBirth", values.person1.placeOfBirth);

    formData.append("person2Name", values.person2.name);
    formData.append("person2Gender", values.person2.gender);
    if (values.person2.dateOfBirth) formData.append("person2DateOfBirth", values.person2.dateOfBirth.toISOString());
    formData.append("person2TimeOfBirth", values.person2.timeOfBirth);
    formData.append("person2PlaceOfBirth", values.person2.placeOfBirth);
    
    startTransition(() => {
      formAction(formData);
    });
  };

  const getGunaColor = (points: number, maxPoints: number) => {
    const percentage = (points / maxPoints) * 100;
    if (percentage >= 75) return "text-green-600 dark:text-green-400";
    if (percentage >= 50) return "text-yellow-600 dark:text-yellow-400";
    return "text-red-600 dark:text-red-400";
  };
  
  const getManglikStatusIcon = (manglikResult: ManglikResult) => {
    if (!manglikResult.isManglik) return <CheckCircle className={cn("h-5 w-5 shrink-0", getDoshaColor(false))} />;
    if (manglikResult.hasCancellation) return <Info className={cn("h-5 w-5 shrink-0", getDoshaColor(true, true))} />;
    return <XCircle className={cn("h-5 w-5 shrink-0", getDoshaColor(true, false))} />;
  };

  const getDoshaColor = (isManglik: boolean, hasCancellation?: boolean) => {
    if (!isManglik) return "text-green-600 dark:text-green-400";
    if (hasCancellation) return "text-yellow-600 dark:text-yellow-400";
    return "text-red-600 dark:text-red-400";
  };

  const matchmakingJsonLd = matchmakingData ? {
    "@context": "https://schema.org",
    "@type": "Report", // Or could be a custom "AstrologyReport"
    "name": `Vedic Matchmaking Report for ${matchmakingData.person1Name} & ${matchmakingData.person2Name}`,
    "description": `Ashtakoot Guna Milan and Manglik Dosha compatibility analysis for ${matchmakingData.person1Name} and ${matchmakingData.person2Name}. Total Guna Points: ${matchmakingData.totalGunaPoints}/${matchmakingData.maxGunaPoints}.`,
    "author": {
      "@type": "Organization",
      "name": APP_NAME
    },
    "dateCreated": new Date().toISOString(),
    "keywords": "Vedic Matchmaking, Gun Milan, Ashtakoot, Kundli Matching, Manglik Dosha, Marriage Compatibility",
    "about": [
      { "@type": "Person", "name": matchmakingData.person1Name },
      { "@type": "Person", "name": matchmakingData.person2Name }
    ],
    "mainEntity": {
      "@type": "Dataset", // Representing the matchmaking results
      "name": "Matchmaking Compatibility Data",
      "variableMeasured": [
        { "@type": "PropertyValue", "name": "Total Guna Points", "value": matchmakingData.totalGunaPoints },
        ...matchmakingData.ashtakootResults.map(koota => ({
          "@type": "PropertyValue",
          "name": `${koota.kootaName} Points`,
          "value": koota.obtainedPoints
        })),
        { "@type": "PropertyValue", "name": `${matchmakingData.person1Name} Manglik Status`, "value": matchmakingData.manglikStatusPerson1.isManglik ? (matchmakingData.manglikStatusPerson1.hasCancellation ? "Manglik (Cancelled)" : "Manglik") : "Non-Manglik" },
        { "@type": "PropertyValue", "name": `${matchmakingData.person2Name} Manglik Status`, "value": matchmakingData.manglikStatusPerson2.isManglik ? (matchmakingData.manglikStatusPerson2.hasCancellation ? "Manglik (Cancelled)" : "Manglik") : "Non-Manglik" }
      ]
    }
  } : null;


  return (
    <div className="container mx-auto py-8">
      {matchmakingJsonLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(matchmakingJsonLd) }}
        />
      )}
      <Card className="shadow-2xl border-primary/30 bg-card">
        <CardHeader className="text-center">
          <div className="inline-flex items-center justify-center p-3 bg-primary/10 rounded-full mb-4 mx-auto shadow-md">
            <HeartHandshake className="h-16 w-16 text-primary" />
          </div>
          <CardTitle className="text-3xl md:text-4xl font-bold text-primary">Vedic Matchmaking (Gun Milan)</CardTitle>
          <CardDescription className="text-lg text-muted-foreground mt-2 max-w-3xl mx-auto">
            Analyze horoscope compatibility for marriage using Ashtakoot Milan and Manglik Dosha.
             <br/><small className="text-xs">(Note: Astrological calculations are placeholders.)</small>
          </CardDescription>
        </CardHeader>
        <CardContent className="mt-6 space-y-8">
          <form onSubmit={form.handleSubmit(handleFormSubmit)} className="space-y-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <BirthDetailsFields
                personPrefix="person1"
                control={form.control}
                errors={form.formState.errors}
                defaultValues={form.formState.defaultValues?.person1}
                title="Person 1 (e.g., Bride)"
                icon={User}
              />
              <BirthDetailsFields
                personPrefix="person2"
                control={form.control}
                errors={form.formState.errors}
                defaultValues={form.formState.defaultValues?.person2}
                title="Person 2 (e.g., Groom)"
                icon={User}
              />
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

          {matchmakingData && (
            <Card className="mt-10 shadow-xl bg-card/70 border-primary/20 p-4 sm:p-6">
              <CardHeader className="text-center pb-4">
                <CardTitle className="text-2xl md:text-3xl text-accent">
                  Matchmaking Report for {matchmakingData.person1Name} & {matchmakingData.person2Name}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-8">
                
                <section>
                  <h3 className="text-xl font-semibold text-primary mb-3 flex items-center">
                    <BarChart3 className="h-6 w-6 mr-2" /> Ashtakoot Milan (Guna Compatibility)
                  </h3>
                  <div className="mb-4 p-4 border rounded-md bg-muted/20">
                    <div className="flex justify-between items-center mb-1">
                       <span className="text-lg font-medium text-foreground">Total Guna Points:</span>
                       <span className={`text-2xl font-bold ${getGunaColor(matchmakingData.totalGunaPoints, matchmakingData.maxGunaPoints)}`}>
                        {matchmakingData.totalGunaPoints} / {matchmakingData.maxGunaPoints}
                       </span>
                    </div>
                    <Progress value={(matchmakingData.totalGunaPoints / matchmakingData.maxGunaPoints) * 100} className="h-3" />
                    <p className={`text-sm text-center mt-1 font-medium ${getGunaColor(matchmakingData.totalGunaPoints, matchmakingData.maxGunaPoints)}`}>
                      {matchmakingData.compatibilitySummary.overall.split('(This is')[0]}
                    </p>
                  </div>
                  <ScrollArea className="max-h-[300px] overflow-x-auto border rounded-md">
                    <Table className="min-w-full">
                      <TableHeader className="bg-muted/50">
                        <TableRow>
                          <TableHead className="w-[150px] font-semibold">Koota</TableHead>
                          <TableHead className="font-semibold">Description</TableHead>
                          <TableHead className="text-right font-semibold">Points Obtained</TableHead>
                          <TableHead className="text-right font-semibold">Max Points</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {matchmakingData.ashtakootResults.map((koota) => (
                          <TableRow key={koota.kootaName} className="hover:bg-primary/5">
                            <TableCell className="font-medium text-foreground/90">{koota.kootaName}</TableCell>
                            <TableCell className="text-xs text-muted-foreground">{koota.description}</TableCell>
                            <TableCell className={`text-right font-semibold ${getGunaColor(koota.obtainedPoints, koota.maxPoints)}`}>{koota.obtainedPoints}</TableCell>
                            <TableCell className="text-right">{koota.maxPoints}</TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </ScrollArea>
                </section>

                <Separator className="my-6 border-dashed" />

                <section>
                  <h3 className="text-xl font-semibold text-primary mb-4 flex items-center">
                    <ShieldCheck className="h-6 w-6 mr-2" /> Manglik Dosha Analysis
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <ManglikCard personName={matchmakingData.person1Name} manglikResult={matchmakingData.manglikStatusPerson1} />
                    <ManglikCard personName={matchmakingData.person2Name} manglikResult={matchmakingData.manglikStatusPerson2} />
                  </div>
                </section>
                
                <Separator className="my-6 border-dashed" />

                <section>
                  <h3 className="text-xl font-semibold text-primary mb-3 flex items-center">
                    <Users className="h-6 w-6 mr-2" /> Overall Compatibility Insights
                  </h3>
                  <Card className="p-4 bg-muted/30">
                    <p className="text-base text-foreground/90 mb-2">{matchmakingData.compatibilitySummary.overall}</p>
                    {matchmakingData.compatibilitySummary.emotionalBond && <p className="text-sm text-muted-foreground"><strong>Emotional Bond:</strong> {matchmakingData.compatibilitySummary.emotionalBond}</p>}
                    {matchmakingData.compatibilitySummary.communication && <p className="text-sm text-muted-foreground"><strong>Communication:</strong> {matchmakingData.compatibilitySummary.communication}</p>}
                    {matchmakingData.compatibilitySummary.longevity && <p className="text-sm text-muted-foreground"><strong>Longevity:</strong> {matchmakingData.compatibilitySummary.longevity}</p>}
                    {matchmakingData.compatibilitySummary.financialHarmony && <p className="text-sm text-muted-foreground"><strong>Financial Harmony:</strong> {matchmakingData.compatibilitySummary.financialHarmony}</p>}
                  </Card>
                </section>

                {matchmakingData.remedialSuggestions && matchmakingData.remedialSuggestions.length > 0 && (
                  <>
                    <Separator className="my-6 border-dashed" />
                    <section>
                        <h3 className="text-xl font-semibold text-primary mb-3 flex items-center">
                            <Info className="h-6 w-6 mr-2" /> Remedial Suggestions
                        </h3>
                        <Card className="p-4 bg-amber-500/10 border-amber-500/30">
                            <ul className="list-disc list-inside space-y-1 text-sm text-amber-700 dark:text-amber-300">
                            {matchmakingData.remedialSuggestions.map((suggestion, i) => (
                                <li key={i}>{suggestion}</li>
                            ))}
                            </ul>
                        </Card>
                    </section>
                  </>
                )}

              </CardContent>
              <CardFooter className="flex flex-col items-center gap-4 pt-6 border-t">
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Button variant="outline" className="hover:bg-primary/10 w-full sm:w-auto" disabled>
                        <Download className="mr-2 h-4 w-4" />
                        Download PDF Report
                      </Button>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Full PDF report feature coming soon</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
                 <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <Button variant="link" className="text-primary hover:text-accent w-full sm:w-auto" disabled>
                          Book Astrologer Consultation
                        </Button>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Astrologer consultation feature coming soon</p>
                      </TooltipContent>
                    </Tooltip>
                 </TooltipProvider>
              </CardFooter>
            </Card>
          )}
        </CardContent>
        <CardFooter className="text-center block py-6">
            <p className="text-xs text-muted-foreground">
                Vedic matchmaking is a traditional guidance tool. Compatibility also depends on mutual understanding, respect, and effort.
                This module uses placeholder calculations. For accurate analysis, consult a professional astrologer.
            </p>
        </CardFooter>
      </Card>
    </div>
  );
}


const ManglikCard: React.FC<{ personName: string; manglikResult: ManglikResult }> = ({ personName, manglikResult }) => {
  const Icon = getManglikStatusIcon(manglikResult);
  const colorClass = getDoshaColor(manglikResult.isManglik, manglikResult.hasCancellation);
  const title = manglikResult.isManglik ? (manglikResult.hasCancellation ? "Manglik (Cancellation Likely)" : "Manglik Dosha Present") : "Non-Manglik";
  
  return (
    <Card className="p-4 bg-card/80 shadow-sm border-border/50">
      <div className="flex items-center mb-2">
        {Icon}
        <h4 className={cn("text-md font-semibold ml-2", colorClass)}>{personName}: {title}</h4>
      </div>
      <p className="text-xs text-muted-foreground">{manglikResult.details}</p>
    </Card>
  );
};

    
