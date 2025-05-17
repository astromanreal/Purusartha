import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { BookText, Sparkles, BookOpen, Feather } from "lucide-react"; // Added BookOpen, Feather
import { sacredTextsData } from "@/data/sacred-texts-data";
import type { SacredText, Verse } from "@/types";

export default function SacredTextsPage() {
  return (
    <div className="container mx-auto py-8">
      <Card className="shadow-xl border-primary/20">
        <CardHeader className="text-center">
          <div className="inline-flex items-center justify-center p-3 bg-primary/10 rounded-full mb-4 mx-auto">
            <BookText className="h-16 w-16 text-primary" />
          </div>
          <CardTitle className="text-3xl font-bold text-primary">Sacred Texts & Hymns</CardTitle>
          <CardDescription className="text-lg text-muted-foreground mt-2 max-w-3xl mx-auto">
            Explore a collection of profound Suktas, Stutis, and Stotras from Sanatan Dharma, with their translations and meanings.
          </CardDescription>
        </CardHeader>
        <CardContent className="mt-8">
          {sacredTextsData.length > 0 ? (
            <Accordion type="multiple" className="w-full space-y-6">
              {sacredTextsData.map((textItem: SacredText) => (
                <AccordionItem value={textItem.id} key={textItem.id} className="border bg-card rounded-lg shadow-lg hover:shadow-primary/30 transition-shadow duration-300 ease-in-out">
                  <AccordionTrigger className="px-6 py-5 text-left hover:no-underline text-xl font-semibold text-primary data-[state=open]:bg-primary/5 hover:bg-primary/5 transition-colors">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between w-full gap-2">
                        <div className="flex items-center"> 
                            <Sparkles className="h-6 w-6 mr-3 text-accent shrink-0" />
                            <span className="leading-tight">{textItem.title}</span>
                        </div>
                      <div className="mt-2 sm:mt-0 flex flex-wrap gap-2 items-center">
                        <Badge variant="secondary" className="text-xs">{textItem.type}</Badge>
                        {textItem.focus && <Badge variant="outline" className="text-xs border-accent/50 text-accent bg-accent/10">Focus: {textItem.focus}</Badge>}
                        {textItem.source && <Badge variant="outline" className="text-xs border-muted-foreground/30 text-muted-foreground"><BookOpen className="h-3 w-3 mr-1.5"/>Source: {textItem.source}</Badge>}
                      </div>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pt-4 pb-6 border-t border-border/50 space-y-6">
                    <p className="text-base text-muted-foreground italic leading-relaxed">{textItem.description}</p>
                    
                    <div className="space-y-8">
                      {textItem.verses.map((verse: Verse, index: number) => (
                        <div key={verse.id}>
                           <div className="mb-4 p-5 border rounded-lg bg-background/40 shadow-md border-primary/10">
                            <h4 className="text-lg font-semibold text-accent mb-2 flex items-center">
                              {verse.section && <span className="mr-2 text-sm font-medium bg-accent/20 text-accent-foreground px-2 py-0.5 rounded-full">{verse.section}</span>}
                              Verse {verse.number}
                            </h4>
                            <div className="font-serif text-2xl text-foreground mb-4 leading-loose tracking-wide">
                              {verse.sanskrit}
                            </div>
                            {verse.transliteration && (
                              <p className="italic text-sm text-muted-foreground mb-4 font-sans"> Transliteration: {verse.transliteration}</p>
                            )}
                            
                            <div className="space-y-2 font-sans">
                                <p><strong className="font-medium text-primary/90">Translation:</strong> {verse.translation}</p>
                                {verse.meaning && (
                                <p className="text-sm text-muted-foreground"><strong className="font-medium text-accent/90">Meaning:</strong> {verse.meaning}</p>
                                )}
                            </div>
                          </div>
                          {index < textItem.verses.length - 1 && <Separator className="my-8 border-dashed border-primary/30" />}
                        </div>
                      ))}
                    </div>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          ) : (
            <Card className="p-8 text-center bg-muted/50">
              <Feather className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
              <CardTitle className="text-xl text-muted-foreground">No Sacred Texts Available</CardTitle>
              <CardDescription className="text-sm text-muted-foreground mt-1">
                Sacred texts and hymns will be curated and available here soon.
              </CardDescription>
            </Card>
          )}
        </CardContent>
      </Card>
       <footer className="mt-16 text-center border-t border-primary/20 pt-10">
        <p className="text-sm text-muted-foreground">
          Interpretations and translations may vary. This collection is for devotional and educational purposes.
        </p>
      </footer>
    </div>
  );
}
