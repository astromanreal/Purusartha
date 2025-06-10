
// src/app/horoscope-forecasts/page.tsx
"use client";

import { useState, useEffect, useTransition } from "react";
import type { Metadata } from 'next';
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
  CardFooter,
} from "@/components/ui/card";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";
import {
  Briefcase,
  CircleDollarSign,
  Heart,
  Smile, 
  ChevronLeft,
  ChevronRight,
  CalendarDays,
  Loader2,
  Save,
  Download,
  AlertCircle,
  TrendingUp,
  Meh, 
  Frown, 
} from "lucide-react";
import { format, addDays, subDays, addWeeks, subWeeks, addMonths, subMonths } from "date-fns";
import type { ForecastPeriod, ForecastOutput, ForecastCategoryType } from "@/types";
import { getHoroscopeForecasts, type ForecastFormState } from "./actions";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { APP_NAME } from "@/lib/constants";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";


const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000';

export const metadataObject: Metadata = {
  title: `Personalized Horoscope Forecasts - Daily, Weekly, Monthly | ${APP_NAME}`,
  description: `Get your personalized daily, weekly, and monthly horoscope forecasts based on Vedic astrology. Understand planetary influences on your career, finance, relationships, and health with ${APP_NAME}.`,
  keywords: ['Horoscope Forecasts', 'Daily Horoscope', 'Weekly Horoscope', 'Monthly Horoscope', 'Vedic Astrology Predictions', 'Personalized Astrology', APP_NAME],
  alternates: {
    canonical: `${BASE_URL}/horoscope-forecasts`,
  },
  openGraph: {
    title: `Personalized Horoscope Forecasts | ${APP_NAME}`,
    description: 'Your daily, weekly, and monthly Vedic astrology forecasts for career, finance, relationships, and health.',
    url: `${BASE_URL}/horoscope-forecasts`,
  },
};

const categoryIcons: Record<ForecastCategoryType, React.ElementType> = {
  Career: Briefcase,
  Finance: CircleDollarSign,
  Relationships: Heart,
  Health: Smile,
};

const initialFormState: ForecastFormState = {
  message: null,
  data: null,
};

export default function HoroscopeForecastsPage() {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedPeriod, setSelectedPeriod] = useState<ForecastPeriod>("daily");
  const [forecastData, setForecastData] = useState<ForecastOutput | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [isPending, startTransition] = useTransition();

  const fetchForecasts = async (date: Date, period: ForecastPeriod) => {
    setIsLoading(true);
    setError(null);
    setForecastData(null);

    const formData = new FormData();
    formData.append("userId", "user123"); 
    formData.append("period", period);
    formData.append("date", date.toISOString());

    startTransition(async () => {
      try {
        const result = await getHoroscopeForecasts(initialFormState, formData);
        if (result.message === "success" && result.data) {
          setForecastData(result.data);
        } else {
          setError(result.message || "Failed to load forecasts.");
          setForecastData(null);
        }
      } catch (e) {
        console.error("Error fetching forecasts:", e);
        setError("An unexpected error occurred.");
        setForecastData(null);
      } finally {
        setIsLoading(false);
      }
    });
  };

  useEffect(() => {
    fetchForecasts(currentDate, selectedPeriod);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentDate, selectedPeriod]);

  const handlePeriodChange = (period: string) => {
    setSelectedPeriod(period as ForecastPeriod);
  };

  const handleDateChange = (direction: "prev" | "next") => {
    let newDate;
    if (selectedPeriod === "daily") {
      newDate = direction === "prev" ? subDays(currentDate, 1) : addDays(currentDate, 1);
    } else if (selectedPeriod === "weekly") {
      newDate = direction === "prev" ? subWeeks(currentDate, 1) : addWeeks(currentDate, 1);
    } else { 
      newDate = direction === "prev" ? subMonths(currentDate, 1) : addMonths(currentDate, 1);
    }
    setCurrentDate(newDate);
  };

  const getDisplayDate = () => {
    if (selectedPeriod === "daily") return format(currentDate, "EEEE, MMMM d, yyyy");
    if (selectedPeriod === "weekly") {
      const startOfWeek = format(currentDate, "MMM d");
      const endOfWeek = format(addDays(currentDate, 6), "MMM d, yyyy");
      return `Week of ${startOfWeek} - ${endOfWeek}`;
    }
    if (selectedPeriod === "monthly") return format(currentDate, "MMMM yyyy");
    return format(currentDate, "PPP");
  };

  const getOverallOutlookIcon = (highlight?: string) => {
    if (!highlight) return Meh;
    const lowerHighlight = highlight.toLowerCase();
    if (lowerHighlight.includes("positive") || lowerHighlight.includes("favorable") || lowerHighlight.includes("good") || lowerHighlight.includes("high energy")) return Smile;
    if (lowerHighlight.includes("caution") || lowerHighlight.includes("challenges") || lowerHighlight.includes("mindful")) return Frown;
    return Meh;
  };

  return (
    <div className="container mx-auto py-8">
      <Card className="shadow-xl border-primary/20">
        <CardHeader className="text-center">
          <div className="inline-flex items-center justify-center p-3 bg-primary/10 rounded-full mb-4 mx-auto">
            <TrendingUp className="h-16 w-16 text-primary" />
          </div>
          <CardTitle className="text-3xl font-bold text-primary">Personalized Horoscope Forecasts</CardTitle>
          <CardDescription className="text-lg text-muted-foreground mt-2 max-w-3xl mx-auto">
            Your cosmic guidance for daily, weekly, and monthly insights.
            <br />
            <small className="text-xs">(Forecasts are currently placeholders.)</small>
          </CardDescription>
        </CardHeader>

        <CardContent className="mt-6 space-y-8">
          <Tabs value={selectedPeriod} onValueChange={handlePeriodChange} className="w-full">
            <TabsList className="grid w-full grid-cols-3 md:max-w-md mx-auto">
              <TabsTrigger value="daily">Daily</TabsTrigger>
              <TabsTrigger value="weekly">Weekly</TabsTrigger>
              <TabsTrigger value="monthly">Monthly</TabsTrigger>
            </TabsList>

            <div className="mt-6 mb-8 p-4 border rounded-lg bg-card/50 flex items-center justify-between">
              <Button variant="outline" onClick={() => handleDateChange("prev")} disabled={isLoading || isPending} aria-label="Previous period">
                <ChevronLeft className="h-5 w-5" />
                Previous
              </Button>
              <div className="text-center">
                <h3 className="text-lg font-semibold text-accent flex items-center justify-center">
                  <CalendarDays className="mr-2 h-5 w-5" />
                  {getDisplayDate()}
                </h3>
              </div>
              <Button variant="outline" onClick={() => handleDateChange("next")} disabled={isLoading || isPending} aria-label="Next period">
                Next
                <ChevronRight className="h-5 w-5" />
              </Button>
            </div>

            {(isLoading || isPending) && (
              <div className="flex flex-col justify-center items-center py-10">
                <Loader2 className="h-12 w-12 text-primary animate-spin" />
                <p className="ml-4 text-lg text-muted-foreground mt-4">Loading forecasts...</p>
              </div>
            )}

            {error && !isLoading && !isPending && (
               <Alert variant="destructive" className="mt-4">
                 <AlertCircle className="h-4 w-4" />
                 <AlertTitle>Error Loading Forecasts</AlertTitle>
                 <AlertDescription>{error}</AlertDescription>
               </Alert>
            )}

            {!isLoading && !isPending && forecastData && (
              <TabsContent value={selectedPeriod} className="mt-0">
                {forecastData.overallHighlight && (
                  <Card className="mb-6 bg-accent/10 border-accent/30 shadow-md">
                    <CardHeader>
                      <CardTitle className="text-xl text-accent flex items-center">
                         {React.createElement(getOverallOutlookIcon(forecastData.overallHighlight), { className: "mr-2 h-6 w-6" })}
                        Overall Outlook
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-base text-foreground/90">{forecastData.overallHighlight}</p>
                    </CardContent>
                  </Card>
                )}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {forecastData.categories.map((cat) => {
                    const IconComponent = categoryIcons[cat.categoryType];
                    return (
                      <Card key={cat.categoryType} className="bg-card/70 shadow-lg border-border/40 hover:shadow-primary/20 transition-shadow duration-300">
                        <CardHeader className="pb-3">
                          <div className="flex items-center">
                            <IconComponent className="h-7 w-7 text-primary mr-3" />
                            <CardTitle className="text-xl font-semibold text-primary">{cat.categoryType}</CardTitle>
                          </div>
                        </CardHeader>
                        <CardContent>
                          <p className="text-base text-muted-foreground leading-relaxed">{cat.prediction}</p>
                          {cat.remedy && (
                            <p className="text-sm text-accent/90 mt-3 pt-3 border-t border-dashed border-accent/30">
                              <strong className="font-medium">Remedy:</strong> {cat.remedy}
                            </p>
                          )}
                        </CardContent>
                      </Card>
                    );
                  })}
                </div>
              </TabsContent>
            )}
          </Tabs>

          {!isLoading && !isPending && forecastData && (
            <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button variant="outline" className="hover:bg-primary/10" disabled>
                      <Save className="mr-2 h-4 w-4" />
                      Save My Forecast
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
                        <Download className="mr-2 h-4 w-4" />
                        Download PDF
                      </Button>
                   </TooltipTrigger>
                   <TooltipContent>
                     <p>Feature coming soon</p>
                   </TooltipContent>
                 </Tooltip>
              </TooltipProvider>
            </div>
          )}
        </CardContent>
        <CardFooter className="text-center block py-6">
            <p className="text-xs text-muted-foreground">
                Horoscope forecasts are for guidance only. Consult a professional astrologer for personalized advice.
                Actual forecast generation logic is not yet implemented.
            </p>
        </CardFooter>
      </Card>
    </div>
  );
}


    