/* eslint-disable react/no-unescaped-entities */
"use client";

import { useActionState, useEffect, useState, useTransition } from "react"; // Import useTransition
import { useFormStatus } from "react-dom";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
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
    <Button type="submit" disabled={pending} className="w-full md:w-auto bg-primary hover:bg-primary/90 text-primary-foreground">
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
  const [, startTransition] = useTransition(); // Renamed isPending to avoid conflict if needed, only startTransition is used here.
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
      if (currentQuestion) { // Ensure currentQuestion was set before adding to conversation
         setConversation(prev => [...prev, { question: currentQuestion, answer: formState.data!.answer! }]);
      }
      form.reset(); // Reset form fields
      setCurrentQuestion(""); // Clear current question
    }
  }, [formState, form, currentQuestion]);


  const handleFormSubmit = (data: AskRishiFormValues) => {
    setCurrentQuestion(data.question); // Store current question for UI update
    const formData = new FormData();
    formData.append("question", data.question);
    
    startTransition(() => { // Wrap the action call in startTransition
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
              />
              {form.formState.errors.question && (
                <p className="text-sm text-destructive mt-1">{form.formState.errors.question.message}</p>
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
              <ScrollArea className="h-[400px] p-4 border rounded-md bg-background/50">
                {conversation.map((entry, index) => (
                  <div key={index} className="mb-6 pb-6 border-b last:border-b-0 border-border">
                    <div className="mb-2 p-3 rounded-md bg-primary/5 text-primary-foreground shadow">
                      <p className="font-semibold text-primary">Your Question:</p>
                      <p className="text-foreground">{entry.question}</p>
                    </div>
                    <div className="p-3 rounded-md bg-card shadow">
                      <p className="font-semibold text-accent">Rishi's Answer:</p>
                      <p className="whitespace-pre-wrap">{entry.answer}</p>
                    </div>
                  </div>
                ))}
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
