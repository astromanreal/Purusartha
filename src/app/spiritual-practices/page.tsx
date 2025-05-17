
"use client";

import * as React from "react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogClose,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { XIcon, Sparkles } from "lucide-react";
import { spiritualPracticesCategories } from "@/data/spiritual-practices-data";
import type { PracticeCategory, PracticeItem } from "@/data/spiritual-practices-data";

export default function SpiritualPracticesPage() {
  const [selectedPractice, setSelectedPractice] = React.useState<PracticeItem | null>(null);
  const [isDialogOpen, setIsDialogOpen] = React.useState(false);

  const handlePracticeClick = (item: PracticeItem) => {
    setSelectedPractice(item);
    setIsDialogOpen(true);
  };

  return (
    <div className="container mx-auto py-8">
      <header className="mb-12 text-center">
        <div className="inline-flex items-center justify-center p-3 bg-primary/10 rounded-full mb-4 mx-auto">
          <Sparkles className="h-16 w-16 text-primary" />
        </div>
        <h1 className="text-4xl font-bold tracking-tight text-primary">Spiritual Practice Explorer</h1>
        <p className="mt-2 text-xl text-muted-foreground">
          Dive deep into the rich tapestry of Sanatan Dharma's practices.
        </p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {spiritualPracticesCategories.map((category: PracticeCategory) => (
          <Card 
            key={category.id}
            className="flex flex-col overflow-hidden shadow-lg hover:shadow-primary/30 hover:shadow-xl transform hover:scale-105 transition-all duration-300 ease-in-out bg-card"
          >
            <CardHeader className="pb-4">
              <div className="flex items-center mb-2">
                <category.icon className="h-8 w-8 text-primary mr-3 flex-shrink-0" />
                <CardTitle className="text-2xl font-semibold text-primary">{category.title}</CardTitle>
              </div>
              <CardDescription className="text-sm text-muted-foreground pt-1">
                {category.description}
              </CardDescription>
            </CardHeader>
            <CardContent className="flex-grow pt-0">
              <div className="flex flex-wrap gap-2">
                {category.items.map((item) => (
                  <Badge 
                    key={item.name} 
                    variant="secondary" 
                    className="text-sm px-3 py-1 font-normal cursor-pointer hover:bg-primary/20 hover:text-primary-foreground"
                    onClick={() => handlePracticeClick(item)}
                    role="button"
                    tabIndex={0}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter' || e.key === ' ') {
                        handlePracticeClick(item);
                      }
                    }}
                  >
                    {item.name}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {selectedPractice && (
        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          <DialogContent className="sm:max-w-lg bg-card text-card-foreground shadow-xl border-primary/30">
            <DialogHeader>
              <DialogTitle className="text-2xl font-bold text-primary">{selectedPractice.name}</DialogTitle>
               <DialogClose asChild>
                <Button variant="ghost" size="icon" className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground">
                  <XIcon className="h-4 w-4" />
                  <span className="sr-only">Close</span>
                </Button>
              </DialogClose>
            </DialogHeader>
            <DialogDescription className="mt-4 text-base text-muted-foreground whitespace-pre-wrap max-h-[60vh] overflow-y-auto">
              {selectedPractice.details || "Details for this practice are coming soon."}
            </DialogDescription>
            <div className="mt-6 flex justify-end">
              <DialogClose asChild>
                <Button variant="outline" className="hover:bg-primary/10">Close</Button>
              </DialogClose>
            </div>
          </DialogContent>
        </Dialog>
      )}

       <footer className="mt-12 text-center">
        <p className="text-sm text-muted-foreground">
          This is an overview of various practices. Each practice often has deep philosophical and ritualistic aspects. Further detailed explanations for each will be available soon.
        </p>
      </footer>
    </div>
  );
}
