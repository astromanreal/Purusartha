// src/components/home/hero-concepts.tsx
"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { sanatanDharmaConceptsData } from "@/data/concepts";

export function HeroConcepts() {
  return (
    <Accordion type="multiple" className="w-full max-w-4xl mx-auto text-left">
      {sanatanDharmaConceptsData.map((category, index) => (
        <AccordionItem value={`item-${index}`} key={category.categoryTitle} className="border-b-primary/20">
          <AccordionTrigger className="text-xl hover:no-underline text-primary hover:text-accent px-4 py-3 rounded-t-md data-[state=open]:bg-primary/5 data-[state=open]:rounded-b-none transition-colors">
            <span>
              {category.categoryTitle}
              {category.categoryDescription && (
                <span className="text-sm font-normal text-muted-foreground ml-2">
                  ({category.categoryDescription})
                </span>
              )}
            </span>
          </AccordionTrigger>
          <AccordionContent className="pt-4 pb-6 px-4 space-y-4 bg-card rounded-b-md border border-t-0 border-primary/10 shadow-inner">
            {category.concepts.map((concept) => (
              <div key={concept.name}>
                {concept.subPoints && concept.subPoints.length > 0 ? (
                  <>
                    <h4 className="text-lg font-semibold text-accent-foreground mb-2">
                      {concept.name}
                      {/* Description for sub-point headings is not typical based on provided data, but can be added if needed */}
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {concept.subPoints.map((subPoint) => (
                        <Badge
                          key={subPoint}
                          variant="secondary"
                          className="text-sm px-3 py-1 cursor-default hover:bg-secondary/80 transition-colors"
                        >
                          {subPoint}
                        </Badge>
                      ))}
                    </div>
                  </>
                ) : (
                  <div className="flex items-center gap-2 flex-wrap">
                    <Badge
                      variant="outline"
                      className="text-sm px-3 py-1 border-primary/50 text-primary bg-primary/5 hover:bg-primary/10 cursor-default transition-colors"
                    >
                      {concept.name}
                    </Badge>
                    {concept.description && (
                      <span className="text-xs text-muted-foreground italic">
                        ({concept.description})
                      </span>
                    )}
                  </div>
                )}
              </div>
            ))}
            {category.concepts.length === 0 && (
                 <p className="text-muted-foreground">Details coming soon.</p>
            )}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
