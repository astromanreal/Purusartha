
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { CalendarDays, Info, ListChecks, Clock3, SunMoon, Stars } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const manasData = [
  {
    id: "brahma-mana",
    name: "Brāhma Māna (ब्राह्म मान)",
    description: "Primarily of theoretical or historical significance in classical texts, related to the time of Brahma, the creator.",
    icon: Info,
    active: false,
  },
  {
    id: "divya-mana",
    name: "Divya Māna (दिव्य मान)",
    description: "Relates to divine or celestial time scales, often found in Puranic cosmology, representing the time of the Devas (gods).",
    icon: Info,
    active: false,
  },
  {
    id: "pitraya-mana",
    name: "Pitraya Māna (पित्रय मान)",
    description: "Associated with the time scales relevant to ancestors (Pitṛs) and their realm.",
    icon: Info,
    active: false,
  },
  {
    id: "prajapatya-mana",
    name: "Prājāpatya Māna (प्राजापत्य मान)",
    description: "Connected to Prajāpati, the lord of creatures, and cosmic creation cycles.",
    icon: Info,
    active: false,
  },
  {
    id: "guror-mana",
    name: "Guror Māna (गुरोर् मान)",
    description: "Refers to a time measure related to the planet Jupiter (Guru) and its cycle. Less commonly used in everyday calendrical calculations today.",
    icon: Info,
    active: false,
  },
  {
    id: "saura-mana",
    name: "Saura Māna (सौर मान - Solar)",
    description: "Actively used. Based on the solar day and the Sun's apparent transit through zodiac signs (Rāśi). Forms the basis for solar months and the solar year, crucial for agricultural cycles and some regional calendars.",
    icon: SunMoon,
    active: true,
  },
  {
    id: "savana-mana",
    name: "Sāvana Māna (सावन मान - Civil)",
    description: "Actively used. A practical measure based on a civil day, typically counted from one sunrise to the next. Used for daily rituals, civil purposes, and calculating the duration of festivals.",
    icon: Clock3,
    active: true,
  },
  {
    id: "candra-mana",
    name: "Candra Māna (चान्द्र मान - Lunar)",
    description: "Actively used. Based on the lunar day (tithi) and the Moon's phases (pakṣa). Forms the basis for lunar months and is pivotal for most Hindu festivals and religious observances.",
    icon: SunMoon, // Using SunMoon again to represent celestial cycles
    active: true,
  },
  {
    id: "nakshatra-mana",
    name: "Nākṣatra Māna (नाक्षत्र मान - Sidereal)",
    description: "Actively used. Based on the sidereal day and the Moon's transit through Nakṣatras (lunar mansions). Important for astrological calculations, determining Muhurtas (auspicious timings), and specific rituals.",
    icon: Stars,
    active: true,
  },
];


export default function HinduCalendarPage() {
  return (
    <div className="container mx-auto py-8">
      <Card className="shadow-xl">
        <CardHeader className="text-center">
          <div className="inline-flex items-center justify-center p-3 bg-primary/10 rounded-full mb-4">
            <CalendarDays className="h-12 w-12 text-primary" />
          </div>
          <CardTitle className="text-3xl font-bold text-primary">Hindu Calendar System</CardTitle>
          <CardDescription className="text-lg text-muted-foreground mt-2 max-w-3xl mx-auto">
            Understanding the intricate framework of time: Panchang, festivals, muhurtas, and the foundational Mānas.
          </CardDescription>
        </CardHeader>
        <CardContent className="mt-6 space-y-8">
          <section className="p-6 border border-primary/20 rounded-lg bg-card/50 shadow-sm">
            <h2 className="text-2xl font-semibold text-primary mb-3 flex items-center">
              <Info className="h-6 w-6 mr-2 text-accent" />
              Core Principles
            </h2>
            <p className="text-base text-foreground/90 leading-relaxed">
              The Hindu calendar, a lunisolar system, is fundamentally based on a geocentric model of the Solar System. This model describes celestial movements as observed from the Earth's surface, integrating both lunar and solar cycles to track time for religious, agricultural, and social purposes.
            </p>
          </section>

          <section className="p-6 border border-primary/20 rounded-lg bg-card/50 shadow-sm">
            <h2 className="text-2xl font-semibold text-primary mb-3 flex items-center">
              <ListChecks className="h-6 w-6 mr-2 text-accent" />
              Māna: Measures of Time
            </h2>
            <p className="text-base text-foreground/90 mb-6 leading-relaxed">
              The Hindu calendrical system defines nine principal measures of time, known as <strong className="font-semibold text-accent">Māna (Sanskrit: मान)</strong>. These provide a comprehensive framework for understanding different scales and types of time. While all nine have scriptural basis, four are predominantly used in contemporary calendrical computations and daily life.
            </p>
            <Accordion type="multiple" className="w-full space-y-3">
              {manasData.map((mana) => (
                <AccordionItem value={mana.id} key={mana.id} className="border bg-background rounded-md shadow-sm hover:shadow-primary/10 transition-shadow">
                  <AccordionTrigger className="px-4 py-3 text-left hover:no-underline text-lg font-medium text-foreground data-[state=open]:bg-primary/5">
                    <div className="flex items-center justify-between w-full">
                      <div className="flex items-center">
                        <mana.icon className={`h-5 w-5 mr-3 shrink-0 ${mana.active ? 'text-primary' : 'text-muted-foreground'}`} />
                        <span>{mana.name}</span>
                      </div>
                      {mana.active && <Badge variant="default" className="ml-auto mr-2 bg-primary/80 text-primary-foreground">Actively Used</Badge>}
                      {!mana.active && <Badge variant="secondary" className="ml-auto mr-2">Historical/Theoretical</Badge>}
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="px-4 py-3 border-t border-border text-sm text-muted-foreground leading-relaxed">
                    {mana.description}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
             <p className="mt-6 text-sm text-muted-foreground">
              Note: While all nine Mānas have historical and scriptural importance, the Saura, Sāvana, Candra, and Nākṣatra Mānas are most relevant for contemporary Panchang calculations and festival determinations.
            </p>
          </section>
          
          <div className="mt-10 p-6 border border-dashed border-primary/50 rounded-lg bg-background/30 text-center">
            <h3 className="text-xl font-semibold text-primary mb-2">Panchang & Festival Calendar View</h3>
            <p className="text-muted-foreground">
              Our digital Panchang is being meticulously crafted. Soon, you'll be able to access comprehensive calendar information including tithis, nakshatras, yogas, karanas, festival dates, and auspicious timings (muhurtas).
            </p>
            <div data-ai-hint="traditional calendar" className="mt-4 aspect-video bg-muted rounded-md flex items-center justify-center">
              <p className="text-muted-foreground">Placeholder for Interactive Calendar View</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

