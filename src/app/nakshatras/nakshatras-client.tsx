
"use client";

import * as React from "react";
import Link from "next/link";
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { nakshatraData, getPlanetIcon, type Nakshatra } from "@/data/nakshatra-data";
import { Stars, Search, Filter as FilterIcon, X, List, LayoutGrid, Star as StarIcon, Users, ShieldQuestion, Flame, Wind, Droplets, Leaf as LeafIcon, Layers, ArrowRight } from "lucide-react";
import { ScrollArea } from "@/components/ui/scroll-area";
import { cn } from "@/lib/utils";
// APP_NAME import removed as it's used in the server component for metadata

type ViewMode = "card" | "table";

const ElementIcon = ({ element }: { element: Nakshatra["element"] }) => {
  switch (element) {
    case "Fire": return <Flame className="h-4 w-4 text-red-500" />;
    case "Earth": return <LeafIcon className="h-4 w-4 text-green-600" />;
    case "Air": return <Wind className="h-4 w-4 text-sky-400" />;
    case "Water": return <Droplets className="h-4 w-4 text-blue-500" />;
    case "Ether": return <Layers className="h-4 w-4 text-purple-400" />;
    default: return <ShieldQuestion className="h-4 w-4 text-muted-foreground" />;
  }
};

export default function NakshatrasClient() {
  const [searchTerm, setSearchTerm] = React.useState("");
  const [selectedPlanet, setSelectedPlanet] = React.useState<string>("all");
  const [selectedElement, setSelectedElement] = React.useState<string>("all");
  const [viewMode, setViewMode] = React.useState<ViewMode>("card");
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => setMounted(true), []);

  const uniquePlanets = React.useMemo(() =>
    ["all", ...new Set(nakshatraData.nakshatras.map(n => n.ruling_planet))]
  , []);

  const uniqueElements = React.useMemo(() =>
    ["all", ...new Set(nakshatraData.nakshatras.map(n => n.element).filter(Boolean) as string[])]
  , []);

  const filteredNakshatras = React.useMemo(() => {
    return nakshatraData.nakshatras.filter(nakshatra => {
      const matchesSearch = searchTerm.toLowerCase() === "" ||
        nakshatra.name_english.toLowerCase().includes(searchTerm.toLowerCase()) ||
        nakshatra.name_sanskrit.includes(searchTerm) ||
        nakshatra.deity.toLowerCase().includes(searchTerm.toLowerCase()) ||
        nakshatra.ruling_planet.toLowerCase().includes(searchTerm.toLowerCase()) ||
        (nakshatra.keywords && nakshatra.keywords.some(kw => kw.toLowerCase().includes(searchTerm.toLowerCase())));

      const matchesPlanet = selectedPlanet === "all" || nakshatra.ruling_planet === selectedPlanet;
      const matchesElement = selectedElement === "all" || nakshatra.element === selectedElement;

      return matchesSearch && matchesPlanet && matchesElement;
    });
  }, [searchTerm, selectedPlanet, selectedElement]);

  const handleResetFilters = () => {
    setSearchTerm("");
    setSelectedPlanet("all");
    setSelectedElement("all");
  };

  if (!mounted) {
    return (
      <div className="container mx-auto py-12 px-4 flex justify-center items-center min-h-[calc(100vh-10rem)]">
        <Stars className="h-16 w-16 text-primary animate-pulse" />
        <p className="ml-4 text-xl text-muted-foreground">Loading Nakshatras...</p>
      </div>
    );
  }

  const NakshatraCard = ({ nakshatra }: { nakshatra: Nakshatra }) => {
    const PlanetIcon = getPlanetIcon(nakshatra.ruling_planet) || ShieldQuestion;
    const DeityIcon = nakshatra.deity_icon || Users;
    const SymbolIcon = nakshatra.symbol_icon || StarIcon;

    return (
      <Link href={`/nakshatras/${nakshatra.id}`} className="block h-full group">
        <Card className="flex flex-col overflow-hidden rounded-xl shadow-xl bg-card border-border/20 transform transition-all duration-300 hover:scale-105 hover:shadow-primary/30 [transform-style:preserve-3d] h-full">
          <CardHeader className="p-5 bg-gradient-to-br from-primary/10 via-card to-accent/10 relative [transform:translateZ(20px)]">
            <div className="flex items-center justify-between mb-2">
              <CardTitle className="text-xl font-bold text-primary group-hover:text-accent transition-colors duration-300">
                {nakshatra.number}. {nakshatra.name_english} ({nakshatra.name_sanskrit})
              </CardTitle>
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button variant="ghost" size="icon" className="h-8 w-8 p-0 text-muted-foreground hover:text-accent" onClick={(e) => e.preventDefault()}>
                      <SymbolIcon className="h-5 w-5" />
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Symbol: {nakshatra.symbol_description}</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </div>
            <CardDescription className="text-xs text-muted-foreground">
              {nakshatra.zodiac_range}
            </CardDescription>
          </CardHeader>
          <CardContent className="flex-grow p-5 space-y-4 [transform:translateZ(10px)]">
            <div className="grid grid-cols-2 gap-x-4 gap-y-3 text-sm">
              <div className="flex items-center" title={`Deity: ${nakshatra.deity}`}>
                <DeityIcon className="h-4 w-4 mr-2 text-primary/70" />
                <span className="font-medium text-foreground/80">Deity:</span>
                <span className="ml-1.5 text-muted-foreground truncate" title={nakshatra.deity}>{nakshatra.deity.split('(')[0].trim()}</span>
              </div>
              <div className="flex items-center" title={`Ruling Planet: ${nakshatra.ruling_planet}`}>
                <PlanetIcon className="h-4 w-4 mr-2 text-primary/70" />
                <span className="font-medium text-foreground/80">Planet:</span>
                <span className="ml-1.5 text-muted-foreground">{nakshatra.ruling_planet}</span>
              </div>
              {nakshatra.element && (
                <div className="flex items-center" title={`Element: ${nakshatra.element}`}>
                  <ElementIcon element={nakshatra.element} />
                  <span className="font-medium text-foreground/80 ml-2">Element:</span>
                  <span className="ml-1.5 text-muted-foreground">{nakshatra.element}</span>
                </div>
              )}
              <div className="flex items-center" title={`Gana (Nature): ${nakshatra.nature}`}>
                 <Badge variant="outline" className="text-xs px-1.5 py-0.5">{nakshatra.nature.split('(')[0].trim()}</Badge>
              </div>
            </div>
             <TooltipProvider>
              <Tooltip>
                <TooltipTrigger className="w-full text-left">
                  <p className="text-xs text-muted-foreground mt-2 line-clamp-2">
                    <strong className="text-foreground/80">Significance: </strong>{nakshatra.spiritual_significance || nakshatra.astrological_significance || "Details coming soon."}
                  </p>
                </TooltipTrigger>
                <TooltipContent side="bottom" align="start" className="max-w-xs text-xs p-2">
                   <ScrollArea className="h-32">
                    <strong className="font-semibold">Significance:</strong><br/>
                    {nakshatra.spiritual_significance || nakshatra.astrological_significance || "Detailed significance information will be available on the dedicated page."}
                   </ScrollArea>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
            
            <div className="mt-2">
              <h4 className="text-xs font-semibold text-accent mb-1">Activities:</h4>
              <div className="flex flex-wrap gap-1">
                {nakshatra.favorable_activities.slice(0, 3).map(act => (
                  <Badge key={act} variant="secondary" className="text-xs font-normal">{act}</Badge>
                ))}
                {nakshatra.favorable_activities.length > 3 && <Badge variant="secondary" className="text-xs font-normal">...</Badge>}
              </div>
            </div>
          </CardContent>
          <CardFooter className="p-4 bg-card/50 border-t border-border/20 [transform:translateZ(5px)] flex justify-between items-center">
             <p className="text-xs text-muted-foreground">Animal: {nakshatra.animal_symbol}</p>
             <ArrowRight className="h-4 w-4 text-primary group-hover:text-accent transition-colors" />
          </CardFooter>
        </Card>
      </Link>
    );
  };
  
  const NakshatraTableRow = ({ nakshatra }: { nakshatra: Nakshatra }) => {
    const PlanetIcon = getPlanetIcon(nakshatra.ruling_planet) || ShieldQuestion;
    return (
      <tr className="border-b border-border/20 hover:bg-muted/50 transition-colors group">
        <td className="p-3 text-sm">
          <Link href={`/nakshatras/${nakshatra.id}`} className="text-primary font-semibold hover:underline group-hover:text-accent transition-colors">
            {nakshatra.number}. {nakshatra.name_english}
          </Link>
        </td>
        <td className="p-3 text-sm text-muted-foreground">{nakshatra.name_sanskrit}</td>
        <td className="p-3 text-sm text-muted-foreground">{nakshatra.symbol_description}</td>
        <td className="p-3 text-sm text-muted-foreground truncate max-w-[150px]" title={nakshatra.deity}>{nakshatra.deity}</td>
        <td className="p-3 text-sm text-muted-foreground flex items-center"><PlanetIcon className="h-4 w-4 mr-1.5"/>{nakshatra.ruling_planet}</td>
        <td className="p-3 text-sm text-muted-foreground">{nakshatra.zodiac_range}</td>
        <td className="p-3 text-sm"><Badge variant="outline" className="text-xs">{nakshatra.nature.split('(')[0].trim()}</Badge></td>
      </tr>
    );
  };

  return (
    <div className="container mx-auto py-10 px-4 min-h-screen bg-background">
      <header className="mb-12 text-center">
        <div className="inline-flex items-center justify-center p-4 bg-primary/10 rounded-full mb-6 mx-auto shadow-lg">
          <Stars className="h-20 w-20 text-primary animate-pulse" />
        </div>
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-primary mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary via-accent to-primary">
          The 27 Nakshatras
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
          Embark on a celestial journey through the 27 lunar mansions of Vedic astrology, each holding unique energies and cosmic wisdom.
        </p>
      </header>

      {/* Controls: Search, Filters, View Toggle */}
      <Card className="mb-8 p-4 sm:p-6 shadow-lg bg-card border-border/20">
        <CardHeader className="p-0 pb-4 mb-4 border-b border-border/20">
          <CardTitle className="text-xl font-semibold text-primary">Filter & View Options</CardTitle>
        </CardHeader>
        <CardContent className="p-0">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 items-end">
            <div className="lg:col-span-2">
              <label htmlFor="search-nakshatra" className="block text-sm font-medium text-foreground mb-1">Search Nakshatra</label>
              <div className="relative">
                <Input
                  id="search-nakshatra"
                  type="text"
                  placeholder="Search by name, deity, planet, keyword..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 text-base"
                />
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                {searchTerm && (
                  <Button variant="ghost" size="icon" className="absolute right-2 top-1/2 transform -translate-y-1/2 h-7 w-7" onClick={() => setSearchTerm("")}>
                    <X className="h-4 w-4" />
                  </Button>
                )}
              </div>
            </div>

            <div>
              <label htmlFor="filter-planet" className="block text-sm font-medium text-foreground mb-1">Filter by Planet</label>
              <Select value={selectedPlanet} onValueChange={setSelectedPlanet}>
                <SelectTrigger id="filter-planet" className="text-base">
                  <SelectValue placeholder="Select Planet" />
                </SelectTrigger>
                <SelectContent>
                  {uniquePlanets.map(planet => (
                    <SelectItem key={planet} value={planet} className="capitalize">
                      {planet === "all" ? "All Planets" : planet}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div>
              <label htmlFor="filter-element" className="block text-sm font-medium text-foreground mb-1">Filter by Element</label>
              <Select value={selectedElement} onValueChange={setSelectedElement}>
                <SelectTrigger id="filter-element" className="text-base">
                  <SelectValue placeholder="Select Element" />
                </SelectTrigger>
                <SelectContent>
                  {uniqueElements.map(element => (
                    <SelectItem key={element} value={element} className="capitalize">
                      {element === "all" ? "All Elements" : element}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>
          <div className="mt-4 pt-4 border-t border-border/20 flex flex-wrap justify-end items-center gap-2">
              <Button variant="outline" onClick={handleResetFilters} size="sm">
                <X className="h-4 w-4 mr-2"/> Reset Filters
              </Button>
              <div className="flex items-center gap-2">
                <span className="text-sm text-muted-foreground">View:</span>
                <Button variant={viewMode === 'card' ? 'default' : 'outline'} onClick={() => setViewMode('card')} size="sm">
                    <LayoutGrid className="h-4 w-4 mr-2"/> Cards
                </Button>
                <Button variant={viewMode === 'table' ? 'default' : 'outline'} onClick={() => setViewMode('table')} size="sm">
                    <List className="h-4 w-4 mr-2"/> Table
                </Button>
              </div>
          </div>
        </CardContent>
      </Card>

      {/* Display Area */}
      {filteredNakshatras.length > 0 ? (
        viewMode === 'card' ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 xl:gap-8">
            {filteredNakshatras.map((nakshatra) => (
              <NakshatraCard key={nakshatra.id} nakshatra={nakshatra} />
            ))}
          </div>
        ) : (
          <Card className="overflow-x-auto shadow-lg border-border/20">
             <table className="w-full min-w-[800px]">
                <thead className="bg-muted/50">
                    <tr>
                        <th className="p-3 text-left text-xs font-semibold text-muted-foreground uppercase tracking-wider">Name (EN)</th>
                        <th className="p-3 text-left text-xs font-semibold text-muted-foreground uppercase tracking-wider">Name (SA)</th>
                        <th className="p-3 text-left text-xs font-semibold text-muted-foreground uppercase tracking-wider">Symbol</th>
                        <th className="p-3 text-left text-xs font-semibold text-muted-foreground uppercase tracking-wider">Deity</th>
                        <th className="p-3 text-left text-xs font-semibold text-muted-foreground uppercase tracking-wider">Planet</th>
                        <th className="p-3 text-left text-xs font-semibold text-muted-foreground uppercase tracking-wider">Zodiac Range</th>
                        <th className="p-3 text-left text-xs font-semibold text-muted-foreground uppercase tracking-wider">Nature</th>
                    </tr>
                </thead>
                <tbody>
                    {filteredNakshatras.map(nakshatra => <NakshatraTableRow key={nakshatra.id} nakshatra={nakshatra} />)}
                </tbody>
             </table>
          </Card>
        )
      ) : (
        <div className="text-center py-12">
          <FilterIcon className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
          <p className="text-xl text-muted-foreground">No Nakshatras found matching your criteria.</p>
          <p className="text-sm text-muted-foreground mt-2">Try adjusting your search or filters.</p>
        </div>
      )}

      <footer className="mt-16 text-center border-t border-primary/20 pt-10">
        <p className="text-sm text-muted-foreground">
          Nakshatra interpretations are vast and profound. This information serves as an introduction.
          For detailed astrological insights, consult a qualified Vedic astrologer.
        </p>
        <div className="mt-4 flex justify-center space-x-4">
            <Button variant="link" asChild><Link href="/rashis">Related: Rashis</Link></Button>
            <Button variant="link" asChild><Link href="/navagraha">Related: Navagrahas</Link></Button>
        </div>
      </footer>
    </div>
  );
}


    