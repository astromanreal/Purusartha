
/* eslint-disable react/no-unescaped-entities */
"use client";

import { useActionState, useEffect, useState, useTransition } from "react";
import { useFormStatus } from "react-dom";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
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
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { MessageCircle, Loader2, Sparkles, AlertCircle } from "lucide-react";
import { submitSpiritualQuestion, type AskRishiFormState } from "./actions";
import { ScrollArea } from "@/components/ui/scroll-area";
import { APP_NAME } from "@/lib/constants";

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000';

// Metadata for Ask a Rishi Page
// Note: Since this is a client component, this metadata object itself won't be directly used by Next.js.
// It should be defined in a parent server component (like a layout or page) or a dedicated metadata export.
// However, I'm including it here for completeness of the "professionalization" task.
// To make this effective, you'd export 'metadata' from this file if it were a server component,
// or move this to the nearest server component that renders this page.
export const metadataObject: Metadata = {
  title: `Ask a Rishi - AI Spiritual Guide | ${APP_NAME}`,
  description: `Seek spiritual guidance from our AI-powered Rishi on ${APP_NAME}. Ask questions about Sanatan Dharma, Vedic philosophy, rituals, and get insightful answers.`,
  keywords: ['Ask a Rishi', 'AI Spiritual Guide', 'Vedic Questions', 'Sanatan Dharma AI', 'Hindu Philosophy AI', 'Spiritual Advisor', APP_NAME],
  alternates: {
    canonical: `${BASE_URL}/ask-rishi`,
  },
  openGraph: {
    title: `Ask a Rishi - AI Spiritual Guide | ${APP_NAME}`,
    description: 'Get answers to your spiritual questions about Sanatan Dharma from our AI Rishi.',
    url: `${BASE_URL}/ask-rishi`,
  },
};


const AskRishiSchema = z.object({
  question: z.string().min(10, { message: "Please ask a more detailed question (minimum 10 characters)." }).max(500, {message: "Question must be 500 characters or less."}),
});

type AskRishiFormValues = z.infer<typeof AskRishiSchema>;

const initialState: AskRishiFormState = {
  message: null,
};

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" disabled={pending} aria-busy={pending} className="w-full md:w-auto bg-primary hover:bg-primary/90 text-primary-foreground">
      {pending ? (
        <>
          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
          Consulting the Rishi...
        </>
      ) : (
        <>
          Ask the Rishi <Sparkles className="ml-2 h-4 w-4" />
        </>
      )}
    </Button>
  );
}

export default function AskRishiPage() {
  const [formState, formAction] = useActionState(submitSpiritualQuestion, initialState);
  const [, startTransition] = useTransition();
  const [conversation, setConversation] = useState<{ question: string; answer: string }[]>([]);
  const [currentQuestion, setCurrentQuestion] = useState<string>("");

  const form = useForm<AskRishiFormValues>({
    resolver: zodResolver(AskRishiSchema),
    defaultValues: {
      question: "",
    },
  });

  useEffect(() => {
    if (formState.message === "success" && formState.data?.answer) {
      if (currentQuestion) {
         setConversation(prev => [...prev, { question: currentQuestion, answer: formState.data!.answer! }]);
      }
      form.reset(); 
      setCurrentQuestion(""); 
    }
  }, [formState, form, currentQuestion]);


  const handleFormSubmit = (data: AskRishiFormValues) => {
    setCurrentQuestion(data.question); 
    const formData = new FormData();
    formData.append("question", data.question);
    
    startTransition(() => { 
      formAction(formData);
    });
  };


  return (
    <div className="container mx-auto py-8">
      <Card className="shadow-xl max-w-3xl mx-auto">
        <CardHeader className="text-center">
          <div className="inline-flex items-center justify-center p-3 bg-primary/10 rounded-full mb-4 mx-auto">
            <MessageCircle className="h-12 w-12 text-primary" />
          </div>
          <CardTitle className="text-3xl font-bold text-primary">Ask a Rishi</CardTitle>
          <CardDescription className="text-lg text-muted-foreground mt-2">
            Seek spiritual guidance from our AI-powered Rishi.
          </CardDescription>
        </CardHeader>
        <CardContent className="mt-6 space-y-6">
          <form onSubmit={form.handleSubmit(handleFormSubmit)} className="space-y-4">
            <div>
              <Label htmlFor="question" className="text-lg">Your Question</Label>
              <Textarea
                id="question"
                placeholder="Type your spiritual question here... (e.g., What is the significance of Om?)"
                className="mt-1 min-h-[100px] text-base"
                {...form.register("question")}
                aria-invalid={form.formState.errors.question ? "true" : "false"}
                aria-describedby="question-error"
              />
              {form.formState.errors.question && (
                <p id="question-error" className="text-sm text-destructive mt-1">{form.formState.errors.question.message}</p>
              )}
            </div>
            <SubmitButton />
          </form>

          {formState.message && formState.message !== "success" && (
             <Alert variant="destructive" className="mt-4">
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

          {conversation.length > 0 && (
            <div className="mt-8 space-y-6">
              <h3 className="text-2xl font-semibold text-primary text-center">Wisdom Shared</h3>
              <ScrollArea className="h-[400px] w-full p-4 border rounded-md bg-background/50">
                <div className="flex flex-col space-y-6" aria-live="polite">
                  {conversation.map((entry, index) => (
                    <div key={index} className="flex flex-col">
                      <div className="mb-3 p-4 rounded-xl bg-primary/15 shadow-md self-end max-w-[85%] ml-auto">
                        <p className="font-semibold text-primary">Your Question:</p>
                        <p className="text-foreground">{entry.question}</p>
                      </div>
                      <div className="p-4 rounded-xl bg-card shadow-md self-start max-w-[85%] mr-auto">
                        <p className="font-semibold text-accent">Rishi's Answer:</p>
                        <p className="whitespace-pre-wrap text-card-foreground">{entry.answer}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </ScrollArea>
            </div>
          )}
        </CardContent>
        <CardFooter className="text-center block">
            <p className="text-sm text-muted-foreground">
                The AI Rishi offers guidance based on learned patterns. For profound spiritual matters, consulting with a human Guru is advised.
            </p>
        </CardFooter>
      </Card>
    </div>
  );
}
