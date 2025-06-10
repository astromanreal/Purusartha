
"use client";

import { useActionState, useEffect, useState, useTransition } from "react";
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
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { CalendarIcon, Loader2, Sparkles, AlertCircle, Download, Compass, MapPin, Info, Sun, Moon, Shield, Activity, BarChart3, BookOpen, Brain, Star } from "lucide-react";
import { cn } from "@/lib/utils";
import { format, parseISO } from "date-fns";
import { submitKundliDetails, type KundliFormState } from "./actions"; 
import type { KundliOutput } from "@/types"; 
import { Separator } from "@/components/ui/separator";
import { ScrollArea } from "@/components/ui/scroll-area";
import { APP_NAME } from "@/lib/constants";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000';

export const metadataObject: Metadata = {
  title: `Vedic Kundli Generator - Birth Chart Analysis | ${APP_NAME}`,
  description: `Generate your detailed Vedic Kundli (birth chart) online with ${APP_NAME}. Enter your birth details (date, time, place) to get insights into planetary positions, Lagna, Rashi, Nakshatra, Dasha periods, and more astrological details.`,
  keywords: ['Kundli Generator', 'Vedic Birth Chart', 'Horoscope Generation', 'Online Kundli', 'Jyotish Tool', 'Planetary Positions', 'Lagna', 'Rashi', 'Nakshatra', 'Dasha Analysis', 'Free Kundli', APP_NAME],
  alternates: {
    canonical: `${BASE_URL}/kundli-generator`,
  },
  openGraph: {
    title: `Free Vedic Kundli Generator - Birth Chart Analysis | ${APP_NAME}`,
    description: 'Generate your detailed Vedic Kundli online with planetary positions, Lagna, Rashi, Nakshatra, and Dasha. Accurate birth chart analysis.',
    url: `${BASE_URL}/kundli-generator`,
    siteName: APP_NAME,
    images: [
      {
        url: `${BASE_URL}/og-images/og-image-kundli-generator.png`, 
        width: 1200,
        height: 630,
        alt: `Vedic Kundli Generator - ${APP_NAME}`,
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: `Free Vedic Kundli Generator - Birth Chart Analysis | ${APP_NAME}`,
    description: 'Generate your detailed Vedic Kundli online with planetary positions, Lagna, Rashi, Nakshatra, and Dasha.',
    images: [`${BASE_URL}/og-images/og-image-kundli-generator.png`],
  },
};

const KundliGeneratorSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }).max(100),
  gender: z.enum(["male", "female", "other"], { required_error: "Please select a gender." }),
  dateOfBirth: z.date({ required_error: "Date of birth is required." }),
  timeOfBirth: z.string().regex(/^([01]\d|2[0-3]):([0-5]\d)$/, { message: "Invalid time format (HH:MM)." }),
  placeOfBirth: z.string().min(2, { message: "Place of birth must be at least 2 characters." }).max(100),
});

type KundliFormValues = z.infer<typeof KundliGeneratorSchema>;

const initialState: KundliFormState = {
  message: null,
  data: null, 
};

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" disabled={pending} aria-busy={pending} className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
      {pending ? (
        <>
          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
          Generating Kundli...
        </>
      ) : (
        <>
          Generate Kundli <Sparkles className="ml-2 h-4 w-4" />
        </>
      )}
    </Button>
  );
}

export default function KundliGeneratorPage() {
  const [formState, formAction] = useActionState(submitKundliDetails, initialState);
  const [kundliData, setKundliData] = useState<KundliOutput | null>(null);
  const [, startTransition] = useTransition(); 

  const form = useForm<KundliFormValues>({
    resolver: zodResolver(KundliGeneratorSchema),
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
      setKundliData(formState.data);
    } else if (formState.message && formState.message !== "success"){
      setKundliData(null);
      if (formState.fields) {
        form.setValue('name', formState.fields.name || "");
        form.setValue('gender', formState.fields.gender as "male" | "female" | "other" || undefined);
        form.setValue('dateOfBirth', formState.fields.dateOfBirth ? new Date(formState.fields.dateOfBirth) : undefined);
        form.setValue('timeOfBirth', formState.fields.timeOfBirth || "");
        form.setValue('placeOfBirth', formState.fields.placeOfBirth || "");
      }
    }
  }, [formState, form]);

  const handleFormSubmit = (values: KundliFormValues) => {
    const formData = new FormData();
    formData.append("name", values.name);
    formData.append("gender", values.gender);
    if (values.dateOfBirth) {
      formData.append("dateOfBirth", values.dateOfBirth.toISOString()); 
    }
    formData.append("timeOfBirth", values.timeOfBirth);
    formData.append("placeOfBirth", values.placeOfBirth);
    
    startTransition(() => { 
      formAction(formData);
    });
  };

  const jsonLd = kundliData ? {
    "@context": "https://schema.org",
    "@type": "CreativeWork", // Or more specific like "Report" or "Dataset" if applicable
    "name": `Vedic Kundli for ${kundliData.name}`,
    "description": `Detailed Vedic birth chart (Kundli) for ${kundliData.name}, born on ${kundliData.dateOfBirth} at ${kundliData.timeOfBirth} in ${kundliData.placeOfBirth}. Includes Lagna, Rashi, Nakshatra, planetary positions, and Dasha.`,
    "author": {
      "@type": "Organization",
      "name": APP_NAME
    },
    "dateCreated": new Date().toISOString(),
    "keywords": `Kundli, Vedic Astrology, Birth Chart, ${kundliData.name}, ${kundliData.lagna}, ${kundliData.rashi}, ${kundliData.nakshatra}`,
    // You could add more properties based on the output, e.g., "about" for key findings
  } : null;

  return (
    <div className="container mx-auto py-8">
      {jsonLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      )}
      <Card className="shadow-xl max-w-3xl mx-auto">
        <CardHeader className="text-center">
          <div className="inline-flex items-center justify-center p-3 bg-primary/10 rounded-full mb-4 mx-auto">
            <Compass className="h-12 w-12 text-primary" />
          </div>
          <CardTitle className="text-3xl font-bold text-primary">Kundli Generator</CardTitle>
          <CardDescription className="text-lg text-muted-foreground mt-2">
            Enter birth details to generate a Vedic Kundli summary.
            <br/><small className="text-xs">(Data generated via API integration placeholder for educational purposes.)</small>
          </CardDescription>
        </CardHeader>
        <CardContent className="mt-6 space-y-6">
          <form
            onSubmit={form.handleSubmit(handleFormSubmit)}
            className="space-y-6"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <Label htmlFor="name" className="text-md font-medium">Full Name</Label>
                <Controller name="name" control={form.control} render={({ field }) => <Input id="name" {...field} className="mt-1" placeholder="e.g., Siddhartha Gautama" />} />
                {form.formState.errors.name && <p className="text-sm text-destructive mt-1">{form.formState.errors.name.message}</p>}
              </div>
              <div>
                <Label htmlFor="gender" className="text-md font-medium">Gender</Label>
                <Controller
                  name="gender"
                  control={form.control}
                  render={({ field }) => (
                    <Select onValueChange={field.onChange} value={field.value}>
                      <SelectTrigger id="gender" className="mt-1"><SelectValue placeholder="Select gender" /></SelectTrigger>
                      <SelectContent>
                        <SelectItem value="male">Male</SelectItem>
                        <SelectItem value="female">Female</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  )}
                />
                {form.formState.errors.gender && <p className="text-sm text-destructive mt-1">{form.formState.errors.gender.message}</p>}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <Label htmlFor="dateOfBirth" className="text-md font-medium">Date of Birth</Label>
                <Controller
                  name="dateOfBirth"
                  control={form.control}
                  render={({ field }) => (
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button variant={"outline"} className={cn("w-full justify-start text-left font-normal mt-1", !field.value && "text-muted-foreground")}>
                        <CalendarIcon className="mr-2 h-4 w-4" />{field.value ? format(field.value, "PPP") : <span>Pick a date</span>}
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0">
                        <Calendar mode="single" selected={field.value} onSelect={field.onChange} initialFocus captionLayout="dropdown-buttons" fromYear={1900} toYear={new Date().getFullYear()}/>
                    </PopoverContent>
                  </Popover>
                  )}
                />
                {form.formState.errors.dateOfBirth && <p className="text-sm text-destructive mt-1">{form.formState.errors.dateOfBirth.message}</p>}
              </div>
              <div>
                <Label htmlFor="timeOfBirth" className="text-md font-medium">Time of Birth (HH:MM)</Label>
                <Controller name="timeOfBirth" control={form.control} render={({ field }) => <Input id="timeOfBirth" type="time" {...field} className="mt-1" />} />
                {form.formState.errors.timeOfBirth && <p className="text-sm text-destructive mt-1">{form.formState.errors.timeOfBirth.message}</p>}
              </div>
            </div>
            
            <div>
              <Label htmlFor="placeOfBirth" className="text-md font-medium">Place of Birth (City, Country)</Label>
              <Controller name="placeOfBirth" control={form.control} render={({ field }) => <Input id="placeOfBirth" {...field} className="mt-1" placeholder="e.g., Lumbini, Nepal" />} />
               <p className="text-xs text-muted-foreground mt-1">
                Note: For accurate Kundli, a location search widget (e.g., Prokerala's) providing latitude, longitude & timezone is recommended for production.
              </p>
              {form.formState.errors.placeOfBirth && <p className="text-sm text-destructive mt-1">{form.formState.errors.placeOfBirth.message}</p>}
            </div>

            <SubmitButton />
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

          {kundliData && (
            <Card className="mt-8 shadow-md bg-card/70 border-primary/20">
              <CardHeader className="text-center">
                <CardTitle className="text-2xl text-accent">Kundli Summary for {kundliData.name}</CardTitle>
                <CardDescription>
                  DOB: {kundliData.dateOfBirth} | TOB: {kundliData.timeOfBirth} | Place: {kundliData.placeOfBirth}
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6 text-sm">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <InfoPill icon={Sun} label="Lagna (Ascendant)" value={kundliData.lagna} />
                    <InfoPill icon={Moon} label="Rashi (Moon Sign)" value={kundliData.rashi} />
                    <InfoPill icon={Star} label="Nakshatra (Birth Star)" value={`${kundliData.nakshatra} (Pada ${kundliData.nakshatraPada})`} />
                    {kundliData.lagnaLord && <InfoPill icon={Brain} label="Lagna Lord" value={kundliData.lagnaLord} />}
                    {kundliData.rashiLord && <InfoPill icon={Brain} label="Rashi Lord" value={kundliData.rashiLord} />}
                    {kundliData.nakshatraLord && <InfoPill icon={Brain} label="Nakshatra Lord" value={kundliData.nakshatraLord} />}
                </div>
                 <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {kundliData.tithi && <InfoPill icon={CalendarIcon} label="Tithi" value={kundliData.tithi} />}
                    {kundliData.karana && <InfoPill icon={CalendarIcon} label="Karana" value={kundliData.karana} />}
                    {kundliData.yoga && <InfoPill icon={CalendarIcon} label="Yoga" value={kundliData.yoga} />}
                    {kundliData.sunrise && <InfoPill icon={Sun} label="Sunrise" value={kundliData.sunrise} />}
                    {kundliData.sunset && <InfoPill icon={Moon} label="Sunset" value={kundliData.sunset} />}
                </div>
                
                {kundliData.manglikAnalysis && (
                    <>
                        <Separator />
                        <div>
                            <h4 className="text-lg font-semibold text-primary mb-2 flex items-center"><Shield className="mr-2 h-5 w-5"/>Manglik Analysis</h4>
                            <p><strong className="text-foreground/80">Status:</strong> {kundliData.manglikAnalysis.isManglik ? 'Manglik' : 'Non-Manglik'}</p>
                            <p className="text-xs text-muted-foreground">{kundliData.manglikAnalysis.description}</p>
                            {kundliData.manglikAnalysis.basedOn && <p className="text-xs text-muted-foreground">Based on: {kundliData.manglikAnalysis.basedOn}</p>}
                        </div>
                    </>
                )}
                
                <Separator />

                <div>
                    <h4 className="text-lg font-semibold text-primary mb-2 flex items-center"><Activity className="mr-2 h-5 w-5"/>Current Vimshottari Dasha</h4>
                    <p><strong className="text-foreground/80">Mahadasha:</strong> {kundliData.currentDasha.mahadasha} (Lord: {kundliData.currentDasha.mahadashaLord})</p>
                    <p><strong className="text-foreground/80">Antardasha:</strong> {kundliData.currentDasha.antardasha} (Lord: {kundliData.currentDasha.antardashaLord})</p>
                    {kundliData.currentDasha.pratyantardasha && 
                        <p><strong className="text-foreground/80">Pratyantardasha:</strong> {kundliData.currentDasha.pratyantardasha} (Lord: {kundliData.currentDasha.pratyantardashaLord})</p>
                    }
                    {(kundliData.currentDasha.startDate && kundliData.currentDasha.endDate) &&
                        <p className="text-xs text-muted-foreground">Current Period: {format(new Date(kundliData.currentDasha.startDate), "dd MMM yyyy")} to {format(new Date(kundliData.currentDasha.endDate), "dd MMM yyyy")}</p>
                    }
                </div>

                <Separator />
                
                <div>
                    <h4 className="text-lg font-semibold text-primary mb-2 flex items-center"><BarChart3 className="mr-2 h-5 w-5"/>Planetary Positions (Graha Sthiti)</h4>
                    <ScrollArea className="max-h-60">
                        <Table>
                            <TableHeader>
                                <TableRow>
                                <TableHead>Planet</TableHead>
                                <TableHead>Sign</TableHead>
                                <TableHead>Degrees</TableHead>
                                <TableHead>House</TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                {kundliData.planetaryPositions.map(p => (
                                <TableRow key={p.planet}>
                                    <TableCell className="font-medium">{p.planet} {p.isRetrograde ? "(R)" : ""}</TableCell>
                                    <TableCell>{p.sign}</TableCell>
                                    <TableCell>{p.degrees}</TableCell>
                                    <TableCell>{p.house || 'N/A'}</TableCell>
                                </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </ScrollArea>
                     <p className="text-xs text-muted-foreground mt-1"> (R) denotes retrograde motion.</p>
                </div>

                <Separator />
                <h4 className="text-lg font-semibold text-primary mb-2 flex items-center"><BookOpen className="mr-2 h-5 w-5"/>Divisional Charts (Vargas)</h4>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
                    <div data-ai-hint="south indian lagna chart" className="p-2 aspect-square bg-muted rounded-md flex flex-col items-center justify-center">
                        {kundliData.lagnaChartSVG ? <div dangerouslySetInnerHTML={{ __html: kundliData.lagnaChartSVG }} /> : <p className="text-xs text-muted-foreground">Lagna Chart Placeholder</p>}
                    </div>
                     <div data-ai-hint="south indian moon chart" className="p-2 aspect-square bg-muted rounded-md flex flex-col items-center justify-center">
                        {kundliData.moonChartSVG ? <div dangerouslySetInnerHTML={{ __html: kundliData.moonChartSVG }} /> : <p className="text-xs text-muted-foreground">Moon Chart Placeholder</p>}
                    </div>
                     <div data-ai-hint="south indian navamsa chart" className="p-2 aspect-square bg-muted rounded-md flex flex-col items-center justify-center">
                        {kundliData.navamsaChartSVG ? <div dangerouslySetInnerHTML={{ __html: kundliData.navamsaChartSVG }} /> : <p className="text-xs text-muted-foreground">Navamsa Chart Placeholder</p>}
                    </div>
                </div>
                <p className="text-xs text-muted-foreground text-center">SVG chart representations are illustrative placeholders.</p>


              </CardContent>
              <CardFooter className="flex flex-col sm:flex-row justify-between items-center gap-2 pt-4 border-t">
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Button variant="outline" className="hover:bg-primary/10 w-full sm:w-auto" disabled>
                        <Download className="mr-2 h-4 w-4" />
                        Download PDF
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
                        <Button variant="link" className="text-primary hover:text-accent w-full sm:w-auto" disabled>
                            View Detailed Chart
                        </Button>
                     </TooltipTrigger>
                     <TooltipContent>
                       <p>Full chart view coming soon</p>
                     </TooltipContent>
                   </Tooltip>
                 </TooltipProvider>
              </CardFooter>
            </Card>
          )}
        </CardContent>
        <CardFooter className="text-center block py-6 space-y-4">
             <Alert variant="default" className="text-left bg-muted/50">
                <MapPin className="h-4 w-4" />
                <AlertTitle>Location & Timezone Importance</AlertTitle>
                <AlertDescription>
                    Accurate Kundli calculations depend heavily on precise latitude, longitude, and timezone for the place of birth. In a production application, using a reliable geo-location service (like Prokerala's location widget or Google Places API) is crucial to convert city names into these coordinates and determine the correct timezone offset.
                </AlertDescription>
            </Alert>
            <Alert variant="default" className="text-left bg-yellow-500/10 border-yellow-500/50">
                <Info className="h-4 w-4 text-yellow-600" />
                <AlertTitle className="text-yellow-700">Data & API Usage Note</AlertTitle>
                <AlertDescription className="text-yellow-600/90">
                    The Kundli data displayed here is illustrative and currently generated via a placeholder mechanism within the backend proxy. Real integration with an astrology API (like Prokerala) requires secure handling of API credentials (Client ID & Secret). These secrets must **NEVER** be exposed in client-side code and should be managed securely in your backend environment variables (e.g., in a `.env.local` file, not committed to Git).
                </AlertDescription>
            </Alert>
            <Alert variant="default" className="text-left bg-destructive/10 border-destructive/50">
                <Info className="h-4 w-4 text-destructive" />
                <AlertTitle className="text-destructive">Disclaimer</AlertTitle>
                <AlertDescription className="text-destructive/90">
                    This data is generated via live API integration for educational or illustrative purposes. For life decisions, always consult a qualified astrologer. Astrological interpretations are subjective and should be used for guidance, not as definitive predictions.
                </AlertDescription>
            </Alert>
        </CardFooter>
      </Card>
    </div>
  );
}

const InfoPill: React.FC<{icon: LucideIcon, label: string, value?: string | number | null}> = ({icon: Icon, label, value}) => {
    if (!value && value !== 0) return null; 
    return (
        <div className="p-3 bg-primary/5 rounded-md shadow-sm border border-primary/10">
            <div className="flex items-center mb-0.5">
                <Icon className="h-4 w-4 text-primary/70 mr-1.5 shrink-0"/>
                <p className="text-xs text-primary/80 font-medium">{label}</p>
            </div>
            <p className="text-sm font-semibold text-primary">{String(value)}</p>
        </div>
    );
};

    
