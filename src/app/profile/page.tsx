
"use client";

import * as React from "react";
import type { Metadata } from 'next';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { UserCircle2, Goal, CheckCircle, ListChecks, Activity, History, Star, Loader2, Settings } from "lucide-react"; 
import { Progress } from "@/components/ui/progress";
import { purusarthaGoalsData } from "@/data/purusartha-tasks";
import type { PurusarthaCompletionStatus, PurusarthaGoalData, Rashi } from "@/types";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { rashiData } from "@/data/rashi-data";
import { APP_NAME } from "@/lib/constants";
import { Tooltip, TooltipProvider, TooltipContent } from "@/components/ui/tooltip";

export const metadataObject: Metadata = {
  title: `User Profile - My Spiritual Journey | ${APP_NAME}`,
  description: `Manage your ${APP_NAME} user profile. Track your Purusartha & Well-being Challenge progress, view insights, and set your preferences.`,
  keywords: ['User Profile', 'Spiritual Journey Tracker', 'Purusartha Progress', 'Vedic Astrology Profile', 'Personal Settings', APP_NAME],
  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000'}/profile`,
  },
  openGraph: {
    title: `User Profile - My Spiritual Journey | ${APP_NAME}`,
    description: 'Track your Purusartha progress and manage your spiritual journey settings.',
    url: `${process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000'}/profile`,
  },
};

const LOCAL_STORAGE_PURUSARTHA_KEY = "purusarthaCompletionStatus";
const LOCAL_STORAGE_RASHI_KEY = "sanatanSphere_userSelectedRashi";

export default function ProfilePage() {
  const [completionStatus, setCompletionStatus] = React.useState<PurusarthaCompletionStatus>({});
  const [selectedRashi, setSelectedRashi] = React.useState<string | null>(null);
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
    const storedPurusarthaStatus = localStorage.getItem(LOCAL_STORAGE_PURUSARTHA_KEY);
    if (storedPurusarthaStatus) {
      try {
        setCompletionStatus(JSON.parse(storedPurusarthaStatus));
      } catch (error) {
        console.error("Error parsing Purusartha completion status from localStorage:", error);
        localStorage.setItem(LOCAL_STORAGE_PURUSARTHA_KEY, JSON.stringify({}));
      }
    } else {
       localStorage.setItem(LOCAL_STORAGE_PURUSARTHA_KEY, JSON.stringify({}));
    }

    const storedRashi = localStorage.getItem(LOCAL_STORAGE_RASHI_KEY);
    if (storedRashi) {
      setSelectedRashi(storedRashi);
    }
  }, []);

  const handleRashiChange = (rashiEnglishName: string) => {
    setSelectedRashi(rashiEnglishName);
    if (mounted) {
      localStorage.setItem(LOCAL_STORAGE_RASHI_KEY, rashiEnglishName);
    }
  };

  if (!mounted) {
    return (
        <div className="container mx-auto py-8 flex flex-col justify-center items-center min-h-[calc(100vh-10rem)]">
            <Loader2 className="h-16 w-16 text-primary animate-spin mb-4" />
            <p className="text-xl text-muted-foreground">Loading Profile...</p>
        </div>
    );
  }

  const totalTasks = purusarthaGoalsData.reduce((acc, goal) => acc + goal.tasks.length, 0);
  const completedTasksCount = Object.values(completionStatus).filter(Boolean).length;
  const overallProgress = totalTasks > 0 ? (completedTasksCount / totalTasks) * 100 : 0;

  const currentRashiDetails = selectedRashi ? rashiData.rashis.find(r => r.rashi_name_english === selectedRashi) : null;

  return (
    <div className="container mx-auto py-8">
      <Card className="max-w-3xl mx-auto shadow-xl border-primary/20">
        <CardHeader className="text-center">
          <div className="inline-flex items-center justify-center p-3 bg-primary/10 rounded-full mb-4 mx-auto">
            <UserCircle2 className="h-16 w-16 text-primary" />
          </div>
          <CardTitle className="text-3xl font-bold text-primary">@DharmaPioneer</CardTitle>
          <CardDescription className="text-lg text-muted-foreground mt-2">
            Your spiritual journey dashboard. Track progress, manage settings, and view insights.
          </CardDescription>
        </CardHeader>
        <CardContent className="mt-6 space-y-8">
          
          <Card className="p-6 border border-accent/20 rounded-lg bg-card/70 shadow-lg">
            <CardHeader className="p-0 mb-4">
              <div className="flex items-center mb-2">
                <Star className="h-8 w-8 text-accent mr-3" />
                <h2 className="text-2xl font-semibold text-primary">My Rashi (Zodiac Sign)</h2>
              </div>
            </CardHeader>
            <CardContent className="p-0">
              <p className="text-muted-foreground mb-4">
                Select your Rashi to personalize your experience. This choice will be saved on this device.
              </p>
              <Select
                value={selectedRashi || ""}
                onValueChange={handleRashiChange}
              >
                <SelectTrigger className="w-full text-base py-3">
                  <SelectValue placeholder="Select your Rashi..." />
                </SelectTrigger>
                <SelectContent>
                  {rashiData.rashis.map((rashi: Rashi) => (
                    <SelectItem key={rashi.rashi_name_english} value={rashi.rashi_name_english}>
                      {rashi.rashi_name_english} ({rashi.rashi_name_hindi}) - {rashi.symbol}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              {currentRashiDetails && (
                <div className="mt-6 p-4 bg-primary/5 rounded-md border border-primary/10">
                  <h3 className="text-lg font-semibold text-accent mb-2">Your Rashi: {currentRashiDetails.rashi_name_english} ({currentRashiDetails.rashi_name_hindi})</h3>
                  <p className="text-sm text-muted-foreground"><strong>Symbol:</strong> {currentRashiDetails.symbol}</p>
                  <p className="text-sm text-muted-foreground"><strong>Element:</strong> {currentRashiDetails.element}</p>
                  <p className="text-sm text-muted-foreground"><strong>Ruling Planet:</strong> {currentRashiDetails.planet}</p>
                </div>
              )}
            </CardContent>
          </Card>

          <section className="p-6 border border-primary/10 rounded-lg bg-card/50 shadow-md">
            <div className="flex items-center mb-4">
              <Goal className="h-8 w-8 text-accent mr-3" />
              <h2 className="text-2xl font-semibold text-primary">Purusartha & Well-being Journey</h2>
            </div>
            
            <div className="mb-6">
              <h3 className="text-lg font-medium text-foreground mb-1">Overall Progress</h3>
              <Progress value={overallProgress} className="w-full h-3 mb-1" />
              <p className="text-sm text-muted-foreground text-right">
                {completedTasksCount} / {totalTasks} tasks completed ({overallProgress.toFixed(0)}%)
              </p>
              <p className="text-xs text-muted-foreground mt-1 text-center">
                Your daily rating based on task completion will be shown here soon. Keep up the consistent effort!
              </p>
            </div>

            <ScrollArea className="max-h-60 pr-2">
              <div className="space-y-4 mb-6">
                {purusarthaGoalsData.map((goal: PurusarthaGoalData) => {
                  const categoryTasks = goal.tasks;
                  const categoryCompletedCount = categoryTasks.filter(task => completionStatus[task.id]).length;
                  const categoryProgress = categoryTasks.length > 0 ? (categoryCompletedCount / categoryTasks.length) * 100 : 0;
                  const IconComponent = goal.icon; 
                  return (
                    <div key={goal.id}>
                      <div className="flex items-center justify-between mb-1">
                        <h4 className="text-md font-medium text-foreground flex items-center">
                          <IconComponent className="h-5 w-5 mr-2 text-primary/80" /> {goal.title}
                        </h4>
                        <span className="text-xs text-muted-foreground">{categoryCompletedCount}/{categoryTasks.length}</span>
                      </div>
                      <Progress value={categoryProgress} className="h-2" />
                    </div>
                  );
                })}
              </div>
            </ScrollArea>
            <Button asChild variant="outline" className="w-full hover:bg-primary/10 border-primary/50 mt-4">
                <Link href="/purusartha-challenge">
                    View Full Challenge Details
                </Link>
            </Button>
          </section>

          <section className="p-6 border border-dashed border-primary/30 rounded-lg bg-card/30">
            <h2 className="text-2xl font-semibold text-primary mb-3 flex items-center">
                <ListChecks className="h-7 w-7 mr-2 text-accent"/>
                Recently Completed Tasks
            </h2>
            {completedTasksCount > 0 ? (
              <ScrollArea className="max-h-60 pr-2">
                <ul className="space-y-2">
                  {purusarthaGoalsData.flatMap(goal => 
                    goal.tasks
                      .filter(task => completionStatus[task.id])
                      .slice(0, 5) 
                      .map(task => (
                        <li key={task.id} className="flex items-center text-sm p-2 bg-green-500/10 rounded-md">
                          <CheckCircle className="h-4 w-4 text-green-600 mr-2 shrink-0" />
                          <span className="text-foreground/90">{task.title} 
                            <span className="text-xs text-muted-foreground ml-1">({goal.title.split(' ')[0]})</span>
                          </span>
                        </li>
                      ))
                  ).filter(item => item !== null)} 
                </ul>
              </ScrollArea>
            ) : (
              <p className="text-muted-foreground">No tasks completed yet. <Link href="/purusartha-challenge" className="text-primary hover:underline">Start your journey!</Link></p>
            )}
          </section>

          <Card className="p-6 border border-primary/50 rounded-lg bg-card shadow-md">
            <CardHeader className="p-0 mb-4">
                <h3 className="text-xl font-semibold text-accent flex items-center">
                    <UserCircle2 className="h-6 w-6 mr-2"/>
                    Account Details
                </h3>
            </CardHeader>
            <CardContent className="p-0 space-y-6">
                <div>
                    <p className="text-muted-foreground">
                    Personal information and preferences will be displayed here. 
                    <TooltipProvider>
                        <Tooltip>
                            <TooltipTrigger asChild>
                                <Button variant="link" className="p-1 h-auto text-xs">(Coming Soon)</Button>
                            </TooltipTrigger>
                            <TooltipContent><p>Feature under development</p></TooltipContent>
                        </Tooltip>
                    </TooltipProvider>
                    </p>
                    <div data-ai-hint="user settings form" className="mt-4 aspect-[16/9] bg-muted rounded-md flex items-center justify-center">
                    <p className="text-muted-foreground">Placeholder for Profile Information Form</p>
                    </div>
                </div>
                <div>
                    <h4 className="text-lg font-medium text-primary mb-2 flex items-center">
                        <History className="h-5 w-5 mr-2 text-primary/80"/>
                        Activity History
                    </h4>
                    <p className="text-muted-foreground">
                        Your daily task completion history and insights will be shown here. 
                         <TooltipProvider>
                            <Tooltip>
                                <TooltipTrigger asChild>
                                    <Button variant="link" className="p-1 h-auto text-xs">(Coming Soon)</Button>
                                </TooltipTrigger>
                                <TooltipContent><p>Feature under development</p></TooltipContent>
                            </Tooltip>
                        </TooltipProvider>
                    </p>
                    <div data-ai-hint="calendar activity log" className="mt-3 aspect-[16/9] bg-muted rounded-md flex items-center justify-center">
                        <p className="text-muted-foreground">Placeholder for Daily Activity Log</p>
                    </div>
                </div>
                 <div className="mt-6 text-center">
                    <Button variant="outline" asChild>
                        <Link href="/settings">
                            <Settings className="mr-2 h-4 w-4" />
                            Go to App Settings
                        </Link>
                    </Button>
                </div>
            </CardContent>
          </Card>
        </CardContent>
      </Card>
    </div>
  );
}


    