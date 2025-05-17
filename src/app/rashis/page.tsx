import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { rashiData } from "@/data/rashi-data";
import type { Rashi } from "@/types";
import { Star, Flame, Mountain, Wind, Droplets, Shield, Heart, MessageSquare, Moon, Sun, GraduationCap, Hourglass, Sparkles, Users, Gem, Palette as PaletteIcon, Hash, AlignLeft } from "lucide-react"; // Changed Zodiac to Star
import { cn } from "@/lib/utils";

const ElementIcon = ({ element }: { element: Rashi["element"] }) => {
  switch (element) {
    case "Fire":
      return <Flame className="h-5 w-5 text-red-500" />;
    case "Earth":
      return <Mountain className="h-5 w-5 text-green-700" />;
    case "Air":
      return <Wind className="h-5 w-5 text-blue-400" />;
    case "Water":
      return <Droplets className="h-5 w-5 text-sky-500" />;
    default:
      return <Sparkles className="h-5 w-5 text-muted-foreground" />;
  }
};

const PlanetIcon = ({ planet }: { planet: Rashi["planet"] }) => {
  switch (planet.toLowerCase()) {
    case "mars":
      return <Shield className="h-5 w-5 text-red-600" />;
    case "venus":
      return <Heart className="h-5 w-5 text-pink-500" />;
    case "mercury":
      return <MessageSquare className="h-5 w-5 text-yellow-500" />;
    case "moon":
      return <Moon className="h-5 w-5 text-slate-400" />;
    case "sun":
      return <Sun className="h-5 w-5 text-orange-500" />;
    case "jupiter":
      return <GraduationCap className="h-5 w-5 text-purple-500" />;
    case "saturn":
      return <Hourglass className="h-5 w-5 text-gray-600" />;
    default:
      return <Sparkles className="h-5 w-5 text-muted-foreground" />;
  }
};

export default function RashisPage() {
  return (
    <div className="container mx-auto py-12 px-4">
      <header className="mb-12 text-center">
        <div className="inline-flex items-center justify-center p-4 bg-primary/10 rounded-full mb-6 mx-auto shadow-lg">
          <Star className="h-20 w-20 text-primary" /> {/* Changed Zodiac to Star */}
        </div>
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-primary mb-4">
          Discover the Rashis (Zodiac Signs)
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
          Explore the twelve zodiac signs (Rashis) in Vedic astrology, their characteristics, ruling planets, elements, and more. Understand their influence on personality and life path.
        </p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {rashiData.rashis.map((rashi) => (
          <Card 
            key={rashi.rashi_name_english} 
            className="flex flex-col overflow-hidden shadow-xl rounded-lg border-border/30 hover:shadow-primary/30 transition-all duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-[1.03] bg-card group"
          >
            <CardHeader className="pb-4 bg-gradient-to-br from-primary/5 via-card to-accent/5">
              <div className="flex items-center justify-between mb-2">
                <CardTitle className="text-2xl font-bold text-primary group-hover:text-accent transition-colors">
                  {rashi.rashi_name_english} ({rashi.rashi_name_hindi})
                </CardTitle>
                <Badge variant="outline" className="text-sm border-primary/50 text-primary bg-primary/10 group-hover:bg-accent group-hover:text-accent-foreground group-hover:border-accent/70">
                  {rashi.symbol}
                </Badge>
              </div>
              <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                <div className="flex items-center" title={`Element: ${rashi.element}`}>
                  <ElementIcon element={rashi.element} /> <span className="ml-1.5">{rashi.element}</span>
                </div>
                <div className="flex items-center" title={`Ruling Planet: ${rashi.planet}`}>
                  <PlanetIcon planet={rashi.planet} /> <span className="ml-1.5">{rashi.planet}</span>
                </div>
                <div title={`Quality: ${rashi.quality}`}>
                  <Badge variant="secondary" className="font-medium">{rashi.quality}</Badge>
                </div>
              </div>
            </CardHeader>
            <CardContent className="flex-grow p-5 space-y-4">
              <div>
                <h4 className="text-sm font-semibold text-accent mb-1.5 flex items-center"><AlignLeft className="h-4 w-4 mr-2"/>Key Traits:</h4>
                <div className="flex flex-wrap gap-1.5">
                  {rashi.key_traits.map((trait) => (
                    <Badge key={trait} variant="outline" className="text-xs font-normal border-muted-foreground/30 text-muted-foreground group-hover:border-accent/50 group-hover:text-accent/90">{trait}</Badge>
                  ))}
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-x-4 gap-y-2 text-sm">
                <div className="flex items-center" title="Lucky Color">
                  <PaletteIcon className="h-4 w-4 mr-2 text-primary/70" />
                  <span className="font-medium text-foreground/80">Color:</span>
                  <span style={{ backgroundColor: rashi.lucky_color.toLowerCase() }} className="ml-1.5 w-3 h-3 rounded-full border border-border inline-block"></span>
                  <span className="ml-1 text-muted-foreground">{rashi.lucky_color}</span>
                </div>
                 <div className="flex items-center" title="Lucky Number">
                  <Hash className="h-4 w-4 mr-2 text-primary/70" />
                  <span className="font-medium text-foreground/80">Number:</span>
                  <span className="ml-1.5 text-muted-foreground">{rashi.lucky_number}</span>
                </div>
                 <div className="flex items-center" title="Ruling Deity">
                  <Sparkles className="h-4 w-4 mr-2 text-primary/70" />
                  <span className="font-medium text-foreground/80">Deity:</span>
                  <span className="ml-1.5 text-muted-foreground">{rashi.ruling_deity}</span>
                </div>
                <div className="flex items-center" title="Gemstone">
                  <Gem className="h-4 w-4 mr-2 text-primary/70" />
                  <span className="font-medium text-foreground/80">Gem:</span>
                  <span className="ml-1.5 text-muted-foreground truncate" title={rashi.gemstone}>{rashi.gemstone}</span>
                </div>
              </div>

              <div>
                <h4 className="text-sm font-semibold text-accent mb-1 flex items-center"><Users className="h-4 w-4 mr-2"/>Ideal Match:</h4>
                <p className="text-xs text-muted-foreground">{rashi.ideal_match}</p>
              </div>
              
              <CardDescription className="text-sm text-foreground/90 leading-relaxed pt-2 border-t border-border/20 group-hover:border-accent/30 transition-colors">
                {rashi.personality}
              </CardDescription>
            </CardContent>
          </Card>
        ))}
      </div>
       <footer className="mt-16 text-center border-t border-primary/20 pt-10">
        <p className="text-sm text-muted-foreground">
          Rashi characteristics are general guidelines. Individual horoscopes provide more detailed insights.
        </p>
      </footer>
    </div>
  );
}
