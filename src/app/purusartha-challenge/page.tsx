
"use client";

import * as React from "react";
import Link from "next/link"; 
import type { Metadata } from 'next';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Goal, CheckCircle2, Circle, Activity, ArrowRight, CheckCircle, Loader2 } from "lucide-react"; 
import { purusarthaGoalsData } from "@/data/purusartha-tasks";
import type { PurusarthaGoalData, PurusarthaTask, PurusarthaCompletionStatus } from "@/types";
import { cn } from "@/lib/utils";
import { APP_NAME } from "@/lib/constants";

// Metadata for Purusartha Challenge Page (Server Component part, if this were a server component)
// For client components, metadata is typically handled in the nearest server component layout or page.
// However, as this is a page.tsx, we can define it here.
export const metadataObject: Metadata = {
  title: `Purusartha & Well-being Challenge | ${APP_NAME}`,
  description: `Embark on the Purusartha & Daily Well-being Challenge. Fulfill Dharma, Artha, Kama, Moksha, and cultivate Nitya Karma for a balanced life in ${APP_NAME}.`,
  keywords: ['Purusartha', 'Dharma', 'Artha', 'Kama', 'Moksha', 'Nitya Karma', 'Well-being Challenge', 'Hindu Life Goals', 'Spiritual Journey', APP_NAME],
  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000'}/purusartha-challenge`,
  },
  openGraph: {
    title: `Purusartha & Well-being Challenge | ${APP_NAME}`,
    description: 'Fulfill life\'s four aims and cultivate daily well-being. Track your progress.',
    url: `${process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000'}/purusartha-challenge`,
  },
};


const LOCAL_STORAGE_KEY = "purusarthaCompletionStatus";

export default function PurusarthaChallengePage() {
  const [completionStatus, setCompletionStatus] = React.useState<PurusarthaCompletionStatus>({});
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
    const storedStatus = localStorage.getItem(LOCAL_STORAGE_KEY);
    if (storedStatus) {
      try {
        setCompletionStatus(JSON.parse(storedStatus));
      } catch (error) {
        console.error("Error parsing completion status from localStorage:", error);
        localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify({}));
      }
    } else {
       localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify({}));
    }
  }, []);

  const handleTaskToggle = (taskId: string, categoryId: 'Dharma' | 'Artha' | 'Kama' | 'Moksha' | 'NityaKarma') => {
    const newStatus = {
      ...completionStatus,
      [taskId]: !completionStatus[taskId],
    };
    setCompletionStatus(newStatus);
    if (mounted) {
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(newStatus));
    }
  };
  
  const resetProgress = () => {
    const defaultStatus: PurusarthaCompletionStatus = {};
    purusarthaGoalsData.forEach(goal => {
      goal.tasks.forEach(task => {
        defaultStatus[task.id] = false;
      });
    });
    setCompletionStatus(defaultStatus);
    if (mounted) {
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(defaultStatus));
    }
  };

  if (!mounted) {
    return (
        <div className="container mx-auto py-8 flex flex-col justify-center items-center min-h-[calc(100vh-10rem)]">
            <Loader2 className="h-16 w-16 text-primary animate-spin mb-4" />
            <p className="text-xl text-muted-foreground">Loading Purusartha & Well-being Journey...</p>
        </div>
    );
  }

  const totalTasks = purusarthaGoalsData.reduce((acc, goal) => acc + goal.tasks.length, 0);
  const completedTasks = Object.values(completionStatus).filter(Boolean).length;
  const overallProgress = totalTasks > 0 ? (completedTasks / totalTasks) * 100 : 0;

  return (
    <div className="container mx-auto py-8">
      <section className="py-16 bg-gradient-to-br from-accent/10 via-background to-primary/10 rounded-lg shadow-2xl border border-accent/20 mb-12">
        <div className="container mx-auto px-4 text-center">
          <div className="inline-flex items-center justify-center p-4 bg-accent/20 rounded-full mb-6 mx-auto shadow-lg">
            <Activity className="h-20 w-20 text-accent" />
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-accent mb-6">
            Nitya Karma: Daily Well-being Practices
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-3xl mx-auto leading-relaxed">
            Cultivate daily spiritual, mental, and physical well-being. Consistently performing Nitya Karma contributes to your overall vitality and a balanced life. These essential practices are foundational to your Purusartha journey.
          </p>
          <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 ease-in-out group">
            <Link href="#NityaKarma">
              Explore Nitya Karma Tasks <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
        </div>
      </section>

      <Card className="shadow-xl border-primary/20">
        <CardHeader className="text-center">
          <div className="inline-flex items-center justify-center p-3 bg-primary/10 rounded-full mb-4 mx-auto">
            <Goal className="h-16 w-16 text-primary" />
          </div>
          <CardTitle className="text-3xl font-bold text-primary">Purusartha & Daily Well-being Challenge</CardTitle>
          <CardDescription className="text-lg text-muted-foreground mt-2 max-w-3xl mx-auto">
            Embark on a journey to fulfill the four aims of human life (Dharma, Artha, Kama, Moksha) and cultivate daily well-being through Nitya Karma. Complete tasks, track your progress, and strive for a balanced life. Your daily consistency in Nitya Karma contributes to your overall spiritual vitality.
          </CardDescription>
        </CardHeader>
        <CardContent className="mt-6 space-y-8">
          <div className="mb-8 p-4 border rounded-lg bg-card/50">
            <h3 className="text-xl font-semibold text-accent mb-2">Overall Journey Progress</h3>
            <Progress value={overallProgress} className="w-full h-4" />
            <p className="text-sm text-muted-foreground mt-2 text-right">
              {completedTasks} / {totalTasks} tasks completed ({overallProgress.toFixed(0)}%)
            </p>
            <p className="text-xs text-muted-foreground mt-1 text-center">
              Your daily task completion reflects your commitment. Aim for consistency! (Daily rating feature coming soon)
            </p>
          </div>

          <Accordion type="multiple" className="w-full space-y-4" defaultValue={['NityaKarma', 'Dharma']}>
            {purusarthaGoalsData.map((goal: PurusarthaGoalData) => {
              const categoryTasks = goal.tasks;
              const categoryCompletedTasks = categoryTasks.filter(task => completionStatus[task.id]).length;
              const categoryProgress = categoryTasks.length > 0 ? (categoryCompletedTasks / categoryTasks.length) * 100 : 0;

              return (
                <AccordionItem value={goal.id} key={goal.id} id={goal.id} className="border bg-background rounded-lg shadow-md hover:shadow-primary/10 transition-shadow scroll-mt-20">
                  <AccordionTrigger className={cn(
                    "px-6 py-4 text-left hover:no-underline text-xl font-semibold text-primary data-[state=open]:bg-primary/5 transition-colors duration-150",
                    categoryProgress === 100 && "bg-green-500/10 hover:bg-green-500/15 data-[state=open]:bg-green-500/15 data-[state=open]:text-green-700 text-green-600 hover:text-green-700"
                  )}>
                    <div className="flex items-center">
                      <goal.icon className={cn("h-7 w-7 mr-3 text-accent", categoryProgress === 100 && "text-green-600")} />
                      {goal.title}
                      {categoryProgress === 100 && <CheckCircle className="h-6 w-6 ml-3 text-green-600" />}
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="px-6 py-4 border-t border-border">
                    <p className="text-muted-foreground mb-4">{goal.description}</p>
                    <div className="mb-4">
                      <h4 className="text-sm font-medium text-foreground mb-1">Progress: {categoryCompletedTasks} / {categoryTasks.length}</h4>
                      <Progress value={categoryProgress} className={cn("h-2", categoryProgress === 100 && "[&>div]:bg-green-500")} />
                    </div>
                    <ul className="space-y-3">
                      {goal.tasks.map((task: PurusarthaTask) => (
                        <li key={task.id} className="flex items-start p-3 border rounded-md bg-card/30 hover:bg-card/50 transition-colors">
                          <Checkbox
                            id={`${goal.id}-${task.id}`}
                            checked={!!completionStatus[task.id]}
                            onCheckedChange={() => handleTaskToggle(task.id, goal.id)}
                            className="mr-3 mt-1 shrink-0"
                            aria-labelledby={`label-${goal.id}-${task.id}`}
                          />
                          <div className="flex-1">
                            <Label htmlFor={`${goal.id}-${task.id}`} id={`label-${goal.id}-${task.id}`} className="text-base font-medium text-foreground cursor-pointer">
                              {task.title}
                            </Label>
                            <p className="text-sm text-muted-foreground mt-1">{task.description}</p>
                          </div>
                          {completionStatus[task.id] ? <CheckCircle2 className="h-5 w-5 text-green-500 ml-2 mt-1" /> : <Circle className="h-5 w-5 text-muted-foreground/50 ml-2 mt-1" />}
                        </li>
                      ))}
                    </ul>
                  </AccordionContent>
                </AccordionItem>
              );
            })}
          </Accordion>
          <div className="mt-8 flex justify-center">
            <Button variant="destructive" onClick={resetProgress} className="bg-destructive hover:bg-destructive/90">
              Reset All Progress
            </Button>
          </div>
        </CardContent>
      </Card>
       <footer className="mt-12 text-center border-t border-primary/20 pt-8">
        <p className="text-sm text-muted-foreground">
          The Purusartha & Daily Well-being Challenge is a personal guide. True fulfillment comes from sincere effort and self-reflection.
        </p>
      </footer>
    </div>
  );
}
