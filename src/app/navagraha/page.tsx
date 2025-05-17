import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { navagrahaData } from "@/data/navagraha-data";
import type { Navagraha } from "@/types";
import { Globe, Sun, Moon, Shield, MessageSquare, GraduationCap, Heart, Hourglass, Eclipse, Flag, Sparkles, Leaf, Wind, Droplets, Flame, Layers, CloudFog, CalendarDays, Palette, Compass, Star as StarIcon, BookOpen } from "lucide-react"; // Replaced Planet with Globe
import { ScrollArea } from "@/components/ui/scroll-area";

const NavagrahaSymbolIcon = ({ graha }: { graha: Navagraha }) => {
  switch (graha.name) {
    case "Surya": return <Sun className="h-6 w-6 text-orange-500" />;
    case "Chandra": return <Moon className="h-6 w-6 text-slate-400" />;
    case "Mangala": return <Shield className="h-6 w-6 text-red-600" />; // Mars
    case "Budha": return <MessageSquare className="h-6 w-6 text-green-500" />; // Mercury
    case "Guru": return <GraduationCap className="h-6 w-6 text-yellow-500" />; // Jupiter
    case "Shukra": return <Heart className="h-6 w-6 text-pink-500" />; // Venus
    case "Shani": return <Hourglass className="h-6 w-6 text-gray-600" />; // Saturn
    case "Rahu": return <Eclipse className="h-6 w-6 text-indigo-500" />; // North Node
    case "Ketu": return <Flag className="h-6 w-6 text-purple-500" />; // South Node / Banner
    default: return <Globe className="h-6 w-6 text-muted-foreground" />; // Replaced Planet with Globe
  }
};

const ElementIcon = ({ element }: { element: Navagraha["element"] }) => {
  switch (element) {
    case "Fire": return <Flame className="h-4 w-4 text-red-500" />;
    case "Water": return <Droplets className="h-4 w-4 text-blue-500" />;
    case "Earth": return <Leaf className="h-4 w-4 text-green-600" />;
    case "Air": return <Wind className="h-4 w-4 text-sky-400" />;
    case "Ether (Akasha)": return <Layers className="h-4 w-4 text-purple-400" />;
    case "Air/Shadow": return <CloudFog className="h-4 w-4 text-gray-500" />;
    case "Fire/Shadow": return <CloudFog className="h-4 w-4 text-orange-400" />; // Could use something else for fire/shadow
    default: return <Sparkles className="h-4 w-4 text-muted-foreground" />;
  }
};

export default function NavagrahaPage() {
  return (
    <div className="container mx-auto py-12 px-4">
      <header className="mb-16 text-center">
        <div className="inline-flex items-center justify-center p-4 bg-primary/10 rounded-full mb-6 mx-auto shadow-lg">
          <Globe className="h-20 w-20 text-primary" /> {/* Replaced Planet with Globe */}
        </div>
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-primary mb-4">
          The Navagrahas
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
          Explore the nine celestial bodies (Grahas) that influence life on Earth according to Vedic astrology. Discover their significance, symbolism, and mantras.
        </p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {navagrahaData.navagrahas.map((graha) => (
          <Card 
            key={graha.name}
            className="flex flex-col overflow-hidden rounded-xl shadow-2xl bg-card border-border/20 group transform transition-all duration-500 hover:scale-105 hover:-translate-y-2 hover:shadow-primary/40 [transform-style:preserve-3d]"
          >
            <CardHeader className="p-6 bg-gradient-to-br from-primary/10 via-card to-accent/10 relative [transform:translateZ(20px)]">
              <div className="flex items-center justify-between mb-3">
                <CardTitle className="text-2xl font-bold text-primary group-hover:text-accent transition-colors duration-300">
                  {graha.name} ({graha.englishName})
                </CardTitle>
                <div className="p-2 bg-card rounded-full shadow-md border border-border/50 group-hover:bg-accent/20 transition-colors">
                  <NavagrahaSymbolIcon graha={graha} />
                </div>
              </div>
              <p className="text-sm font-medium text-muted-foreground">Deity: {graha.deity}</p>
              <Badge variant="secondary" className="absolute top-4 right-4 text-xs group-hover:bg-accent group-hover:text-accent-foreground transition-colors">
                {graha.nature}
              </Badge>
            </CardHeader>
            <CardContent className="flex-grow p-6 space-y-5 [transform:translateZ(10px)]">
              <div>
                <h4 className="text-sm font-semibold text-accent mb-1">Significance:</h4>
                <CardDescription className="text-sm text-foreground/90 leading-relaxed">
                  {graha.significance}
                </CardDescription>
              </div>
              
              <div className="grid grid-cols-2 gap-x-4 gap-y-3 text-sm">
                <div className="flex items-center" title="Day">
                  <CalendarDays className="h-4 w-4 mr-2 text-primary/70" />
                  <span className="font-medium text-foreground/80">Day:</span>
                  <span className="ml-1.5 text-muted-foreground">{graha.day}</span>
                </div>
                <div className="flex items-center" title="Color">
                  <Palette className="h-4 w-4 mr-2 text-primary/70" />
                  <span className="font-medium text-foreground/80">Color:</span>
                  <span style={{ backgroundColor: graha.color.toLowerCase() }} className="ml-1.5 w-3 h-3 rounded-full border border-border inline-block"></span>
                  <span className="ml-1 text-muted-foreground">{graha.color}</span>
                </div>
                <div className="flex items-center" title="Direction">
                  <Compass className="h-4 w-4 mr-2 text-primary/70" />
                  <span className="font-medium text-foreground/80">Direction:</span>
                  <span className="ml-1.5 text-muted-foreground">{graha.direction}</span>
                </div>
                 <div className="flex items-center" title="Element">
                  <ElementIcon element={graha.element} />
                  <span className="font-medium text-foreground/80 ml-2">Element:</span>
                  <span className="ml-1.5 text-muted-foreground">{graha.element}</span>
                </div>
              </div>

              <div>
                <h4 className="text-sm font-semibold text-accent mb-1.5 flex items-center"><StarIcon className="h-4 w-4 mr-2"/>Associated Nakshatras:</h4>
                <ScrollArea className="h-16">
                  <div className="flex flex-wrap gap-1.5">
                    {graha.associatedNakshatras.map((nakshatra) => (
                      <Badge key={nakshatra} variant="outline" className="text-xs font-normal border-muted-foreground/30 text-muted-foreground group-hover:border-accent/50 group-hover:text-accent/90">{nakshatra}</Badge>
                    ))}
                  </div>
                </ScrollArea>
              </div>

              <div>
                <h4 className="text-sm font-semibold text-accent mb-1 flex items-center"><BookOpen className="h-4 w-4 mr-2"/>Mantra:</h4>
                <p className="text-sm text-foreground/90 whitespace-pre-line font-mono">{graha.mantra}</p>
              </div>
              
              <CardDescription className="text-sm text-foreground/80 italic leading-relaxed pt-3 border-t border-border/20 group-hover:border-accent/30 transition-colors">
                {graha.description}
              </CardDescription>
            </CardContent>
            <CardFooter className="p-4 bg-card/50 border-t border-border/20 [transform:translateZ(5px)]">
                <p className="text-xs text-muted-foreground text-center w-full">Associated with: {graha.associatedDeity}</p>
            </CardFooter>
          </Card>
        ))}
      </div>
      <footer className="mt-16 text-center border-t border-primary/20 pt-10">
        <p className="text-sm text-muted-foreground">
          The Navagrahas play a crucial role in Vedic astrology, influencing destiny and life events. Their worship is believed to mitigate negative influences and enhance positive ones.
        </p>
      </footer>
    </div>
  );
}
