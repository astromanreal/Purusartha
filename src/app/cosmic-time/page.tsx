
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import type { Metadata } from 'next';
import { Orbit, BookOpenCheck, Users, Brain, Award, CircleDot, Layers, Zap, HelpCircle, Mountain, Sparkles, Sigma, RefreshCcw } from "lucide-react";
import { cn } from "@/lib/utils"; 
import { APP_NAME } from "@/lib/constants";

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000';

export const metadata: Metadata = {
  title: `Cosmic Time Cycles: Yugas, Kalpas & Pralaya | ${APP_NAME}`,
  description: `Explore the vast cosmic time cycles of Sanatan Dharma on ${APP_NAME}. Learn about the four Yugas (Satya, Treta, Dvapara, Kali), Mahayugas, Kalpas (Day of Brahmā), Pralaya (cosmic dissolution), and Brahmā's life cycle. Understand the cyclical nature of time and its philosophical implications in Hindu cosmology.`,
  keywords: ['Cosmic Time', 'Yugas', 'Kalpa', 'Pralaya', 'Mahayuga', 'Manvantara', 'Sanatan Dharma Time', 'Hindu Cosmology', 'Vedic Time Cycles', 'Brahma Life Cycle', 'Cyclical Time', APP_NAME],
  alternates: {
    canonical: `${BASE_URL}/cosmic-time`,
  },
  openGraph: {
    title: `Cosmic Time Cycles in Sanatan Dharma: Yugas, Kalpas, Pralaya | ${APP_NAME}`,
    description: 'Delve into the profound Hindu cosmology of time, exploring Yugas, Kalpas, Pralaya, and the cyclical nature of existence with SanatanSphere.',
    url: `${BASE_URL}/cosmic-time`,
    siteName: APP_NAME,
    images: [
      {
        url: `${BASE_URL}/og-images/og-image-cosmic-time.png`, // Specific OG image
        width: 1200,
        height: 630,
        alt: `Cosmic Time Cycles - ${APP_NAME}`,
      },
    ],
    type: 'article',
    article: {
      section: "Vedic Cosmology",
      tags: ['Cosmic Time', 'Yugas', 'Kalpa', 'Pralaya', 'Hindu Cosmology', APP_NAME],
    }
  },
  twitter: {
    card: 'summary_large_image',
    title: `Cosmic Time Cycles: Yugas, Kalpas & Pralaya | ${APP_NAME}`,
    description: 'Explore Yugas, Kalpas, Pralaya, and the cyclical nature of time in Hindu cosmology.',
    images: [`${BASE_URL}/og-images/og-image-cosmic-time.png`],
  },
};

const SunMoon = ({ className }: { className?: string }) => (
  <svg className={cn("h-5 w-5", className)} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
    <path d="M12 9v.01" />
    <path d="M12 15v.01" />
    <path d="M18.36 12H18.37" />
    <path d="M5.64 12H5.63" />
    <path d="M16.24 7.76L16.25 7.75" />
    <path d="M7.76 16.24L7.75 16.25" />
  </svg>
);

const cosmicTimeData = {
  "CosmicTimeSanatanDharma": {
    "Description": "Cosmic Time in Sanatan Dharma refers to the eternal, cyclical nature of time, which is governed by the laws of the universe. Time is not linear but flows through vast, repeating cycles that influence creation, preservation, destruction, and rebirth.",
    "KeyConcepts": {
      "Kalachakra": {
        "title": "Kālachakra (कालचक्र) - The Wheel of Time",
        "Icon": RefreshCcw,
        "Description": "Time as a wheel (Kāla Chakra), representing the endless cycles of creation, preservation, destruction, and renewal.",
        "Symbolism": "The infinite nature of time and the continuous flow of life and death.",
        "CosmicOrder": "Ṛta (ऋत - Cosmic Order) governs the cycles of creation and destruction, ensuring balance in the universe."
      },
      "Yugas": {
        "title": "Yugas (युग) - Cosmic Ages",
        "Icon": Layers,
        "Description": "Time is divided into four Yugas, which are part of a larger cycle known as a Mahāyuga. Each Yuga represents a different phase of moral and spiritual decline in the universe.",
        "SubCategories": {
          "SatyaYuga": {
            "title": "Satya Yuga (सत्य युग) - The Golden Age",
            "Duration": "1,728,000 human years",
            "Description": "Virtue, righteousness (Dharma), and truth prevail. Human beings live in harmony and enjoy spiritual fulfillment. Average human lifespan: 100,000 years."
          },
          "TretaYuga": {
            "title": "Tretā Yuga (त्रेता युग) - The Silver Age",
            "Duration": "1,296,000 human years",
            "Description": "Virtue starts to decline (three-fourths remains). Spirituality decreases, and materialism begins to rise. Average human lifespan: 10,000 years."
          },
          "DwaparaYuga": {
            "title": "Dvāpara Yuga (द्वापर युग) - The Bronze Age",
            "Duration": "864,000 human years",
            "Description": "Righteousness continues to decline (half remains), and humans experience suffering and ignorance. Materialism dominates. Average human lifespan: 1,000 years."
          },
          "KaliYuga": {
            "title": "Kali Yuga (कलि युग) - The Iron Age (Current)",
            "Duration": "432,000 human years",
            "Description": "Marked by spiritual degradation, conflict, ignorance, and materialism (one-fourth Dharma remains). It is the shortest Yuga. Average human lifespan: 100 years (declining)."
          }
        },
        "Mahayuga": {
          "title": "Mahāyuga (महायुग) - The Great Cycle",
          "TotalDuration": "4.32 million human years",
          "Description": "One complete cycle of the four Yugas (Satya, Tretā, Dvāpara, Kali). Each Mahāyuga is followed by the next, continuously repeating the cycle."
        }
      },
      "Kalpa": {
        "title": "Kalpa (कल्प) - Day of Brahmā",
        "Icon": SunMoon, 
        "Duration": "4.32 billion human years (1,000 Mahāyugas)",
        "Description": "A Kalpa is a 'day' in the life of Brahmā (the creator god). It is followed by a 'night' of Brahmā (Pralaya), which also lasts for 4.32 billion years. During this night, the universe undergoes dissolution.",
        "Structure": {
          "Day": "Creation and preservation of the universe. Consists of 14 Manvantaras.",
          "Night": "Pralaya (cosmic dissolution), where creation dissolves back into an unmanifested state."
        }
      },
      "Pralaya": {
        "title": "Pralaya (प्रलय) - Cosmic Dissolution",
        "Icon": Zap, 
        "Description": "The period of dissolution or destruction in the universe that occurs at the end of a Kalpa (Naimittika Pralaya) or at the end of Brahmā's lifespan (Mahāpralaya).",
        "Types": {
          "NaimittikaPralaya": "Periodic dissolution at the end of each Kalpa (Brahmā's day).",
          "PrakritikaPralaya": "Elemental dissolution occurring after Brahmā's lifespan, where the very elements (Prakṛti) dissolve.",
          "AtyantikaPralaya": "Absolute dissolution, individual liberation (Moksha)."
        }
      },
      "BrahmasLifeCycle": {
        "title": "Brahmā's Life Cycle (ब्रह्म-आयु)",
        "Icon": CircleDot, 
        "Duration": "100 divine years (311.04 trillion human years)",
        "Description": "The entire lifespan of Brahmā. After Brahmā’s life ends, a Mahāpralaya occurs, and a new cycle of creation begins with a new Brahmā.",
        "Structure": {
          "OneDayOfBrahma": "1 Kalpa (4.32 billion human years)",
          "OneNightOfBrahma": "1 Kalpa (4.32 billion human years)",
          "OneYearOfBrahma": "360 such days and nights",
          "Lifespan": "100 such divine years"
        }
      },
      "Avatars": {
        "title": "Avatāras (अवतार) - Divine Incarnations",
        "Icon": Users,
        "Description": "Throughout the Yugas, especially when Dharma declines, divine Avatāras (incarnations of deities like Vishnu) manifest to restore balance, protect the righteous, and guide humanity.",
        "KeyAvatars": [
          {
            "Name": "Daśāvatāra (Ten primary Avatāras of Vishnu)",
            "Avatars": [
              { "Name": "Matsya (मत्स्य)", "Purpose": "Saved Manu and the Vedas from the great deluge." },
              { "Name": "Kūrma (कूर्म)", "Purpose": "Supported Mount Mandara during the churning of the cosmic ocean (Samudra Manthan)." },
              { "Name": "Varāha (वराह)", "Purpose": "Rescued the Earth (Bhudevi) from the demon Hiranyaksha." },
              { "Name": "Nṛsiṃha (नृसिंह)", "Purpose": "Protected Prahlada and destroyed the demon Hiranyakashipu." },
              { "Name": "Vāmana (वामन)", "Purpose": "Restored cosmic balance by subduing King Bali." },
              { "Name": "Paraśurāma (परशुराम)", "Purpose": "Annihilated arrogant and unrighteous Kshatriyas." },
              { "Name": "Rāma (राम)", "Purpose": "Exemplified Dharma and defeated the demon king Ravana." },
              { "Name": "Kṛṣṇa (कृष्ण)", "Purpose": "Delivered the Bhagavad Gita and played a pivotal role in the Mahabharata." },
              { "Name": "Buddha (बुद्ध)", "Purpose": "Taught compassion and the path to enlightenment (differing views on his avatar status exist)." },
              { "Name": "Kalki (कल्कि)", "Purpose": "The future avatar who will appear at the end of Kali Yuga to destroy evil and re-establish Dharma, ushering in a new Satya Yuga." }
            ]
          }
        ]
      }
    },
    "KeyPhilosophicalInsights": {
      "CyclicNatureOfTime": {
        "title": "Cyclical Nature of Time (कालचक्र)",
        "Icon": RefreshCcw,
        "Explanation": "In Hinduism, time is cyclical, with no absolute beginning or end. This contrasts with linear time concepts and emphasizes the eternal, repeating nature of the universe and existence.",
        "Impact": "The cyclical nature of time reflects the idea of continuous creation, preservation, and dissolution (Sṛṣṭi, Sthiti, Laya), allowing for renewal, evolution, and spiritual progress through countless lives."
      },
      "KarmaAndReincarnation": {
        "title": "Karma (कर्म) and Reincarnation (पुनर्जन्म)",
        "Icon": Sigma, 
        "Explanation": "The concept of Karma (action and its consequences) and Reincarnation (Punarjanma) is intricately tied to Cosmic Time. Every action creates impressions (Saṃskāras) that shape an individual's destiny across multiple lifetimes within these vast cosmic cycles.",
        "Impact": "The cyclical nature of time and reincarnation encourages individuals to live righteously (Dharmically), understanding that their actions shape future lives and contribute to their journey towards liberation (Moksha)."
      },
      "SpiritualProgression": {
        "title": "Spiritual Progression & Decline through Yugas",
        "Icon": Mountain, 
        "Explanation": "Each Yuga represents different levels of collective spiritual consciousness and adherence to Dharma. As time progresses from Satya Yuga to Kali Yuga, there is a general decline in spiritual awareness and virtue, though individual effort can always lead to spiritual awakening irrespective of the Yuga."
      }
    },
    "Conclusion": {
      "Summary": "Cosmic Time in Sanatan Dharma offers a profound and grand vision of time as an eternal, cyclical process. It interweaves the fate of the cosmos with individual spiritual journeys, emphasizing the continuous dance of creation, preservation, and dissolution, and underscoring the significance of Dharma, Karma, and the pursuit of Moksha within this vast cosmic expanse."
    }
  }
};

const renderObjectDetails = (details: Record<string, string>, title?: string) => (
  <Card className="bg-muted/50 p-4 rounded-md shadow-sm my-3">
    {title && <CardTitle className="text-md font-semibold text-accent mb-2">{title}</CardTitle>}
    <CardContent className="p-0">
      <ul className="space-y-1 text-sm">
        {Object.entries(details).map(([key, value]) => (
          <li key={key}>
            <strong className="font-medium text-foreground/80">{key.replace(/([A-Z])/g, ' $1').trim()}:</strong> {value}
          </li>
        ))}
      </ul>
    </CardContent>
  </Card>
);


export default function CosmicTimePage() {
  const data = cosmicTimeData.CosmicTimeSanatanDharma;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": metadata.title as string,
    "description": metadata.description as string,
    "keywords": (metadata.keywords as string[]).join(", "),
    "image": `${BASE_URL}/og-images/og-image-cosmic-time.png`,
    "author": {
      "@type": "Organization",
      "name": APP_NAME
    },
    "publisher": {
      "@type": "Organization",
      "name": APP_NAME,
      "logo": {
        "@type": "ImageObject",
        "url": `${BASE_URL}/logo-icon.png` 
      }
    },
    "datePublished": "2024-01-01", // Or a more specific date if available
    "dateModified": new Date().toISOString(),
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `${BASE_URL}/cosmic-time`
    }
  };


  return (
    <div className="container mx-auto py-8">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Card className="shadow-xl border-primary/20">
        <CardHeader className="text-center">
          <div className="inline-flex items-center justify-center p-3 bg-primary/10 rounded-full mb-4 mx-auto">
            <Orbit className="h-16 w-16 text-primary" />
          </div>
          <CardTitle className="text-3xl font-bold text-primary">Cosmic Time in Sanatan Dharma</CardTitle>
          <CardDescription className="text-lg text-muted-foreground mt-3 max-w-3xl mx-auto leading-relaxed">
            {data.Description}
          </CardDescription>
        </CardHeader>

        <CardContent className="mt-8 space-y-10">
          
          <section>
            <h2 className="text-2xl font-semibold text-accent mb-6 text-center flex items-center justify-center">
              <BookOpenCheck className="h-7 w-7 mr-3" /> Key Concepts
            </h2>
            <Accordion type="multiple" defaultValue={["Kalachakra", "Yugas"]} className="w-full space-y-4">
              {Object.entries(data.KeyConcepts).map(([key, concept]) => {
                const IconComponent = concept.Icon || HelpCircle;
                return (
                <AccordionItem value={key} key={key} className="border bg-card rounded-lg shadow-md hover:shadow-primary/10 transition-shadow">
                  <AccordionTrigger className="px-6 py-4 text-left hover:no-underline text-xl font-semibold text-primary data-[state=open]:bg-primary/5">
                    <div className="flex items-center">
                      <IconComponent className="h-6 w-6 mr-3 text-accent" />
                      {concept.title}
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="px-6 py-4 border-t border-border/30 space-y-4">
                    <p className="text-base text-muted-foreground leading-relaxed">{concept.Description}</p>
                    {concept.Symbolism && <p><strong className="text-foreground/90">Symbolism:</strong> {concept.Symbolism}</p>}
                    {concept.CosmicOrder && <p><strong className="text-foreground/90">Cosmic Order:</strong> {concept.CosmicOrder}</p>}

                    {key === "Yugas" && concept.SubCategories && (
                      <div className="mt-4">
                        <h4 className="text-lg font-medium text-primary mb-3">The Four Yugas:</h4>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          {Object.entries(concept.SubCategories).map(([yugaKey, yuga]) => (
                            <Card key={yugaKey} className="bg-background/50 p-4 shadow-sm border-border/50">
                              <CardHeader className="p-0 pb-2">
                                <CardTitle className="text-md font-semibold text-accent">{yuga.title}</CardTitle>
                              </CardHeader>
                              <CardContent className="p-0 text-sm space-y-1">
                                <p><strong className="text-foreground/80">Duration:</strong> {yuga.Duration}</p>
                                <p className="text-muted-foreground">{yuga.Description}</p>
                              </CardContent>
                            </Card>
                          ))}
                        </div>
                        {concept.Mahayuga && renderObjectDetails(concept.Mahayuga, concept.Mahayuga.title)}
                      </div>
                    )}

                    {concept.Structure && renderObjectDetails(concept.Structure, "Structure Details")}
                    {concept.Types && renderObjectDetails(concept.Types, "Types of Pralaya")}
                    
                    {key === "Avatars" && concept.KeyAvatars && (
                       <div className="mt-4">
                        {concept.KeyAvatars.map(avatarGroup => (
                          <div key={avatarGroup.Name} className="mb-4">
                            <h4 className="text-lg font-medium text-primary mb-2">{avatarGroup.Name}</h4>
                             <Accordion type="single" collapsible className="w-full space-y-2">
                              {avatarGroup.Avatars.map(avatar => (
                                <AccordionItem value={avatar.Name} key={avatar.Name} className="border bg-background/30 rounded-md shadow-sm">
                                  <AccordionTrigger className="px-4 py-2 text-left hover:no-underline text-sm font-medium text-foreground">
                                      <Award className="h-4 w-4 mr-2 text-accent/80 shrink-0"/> {avatar.Name}
                                  </AccordionTrigger>
                                  <AccordionContent className="px-4 py-2 border-t text-xs text-muted-foreground">
                                    {avatar.Purpose}
                                  </AccordionContent>
                                </AccordionItem>
                              ))}
                            </Accordion>
                          </div>
                        ))}
                      </div>
                    )}
                  </AccordionContent>
                </AccordionItem>
              )})}
            </Accordion>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-accent mb-6 text-center flex items-center justify-center">
              <Brain className="h-7 w-7 mr-3" /> Key Philosophical Insights
            </h2>
            <div className="space-y-6">
              {Object.entries(data.KeyPhilosophicalInsights).map(([key, insight]) => {
                const IconComponent = insight.Icon || Sparkles;
                return (
                <Card key={key} className="bg-card/80 p-6 rounded-lg shadow-lg border-primary/10 hover:border-primary/30 transition-all">
                  <CardHeader className="p-0 pb-3">
                    <div className="flex items-center">
                      <IconComponent className="h-6 w-6 mr-3 text-primary" />
                      <CardTitle className="text-xl font-semibold text-primary">{insight.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent className="p-0 space-y-2">
                    <p className="text-base text-foreground/90 leading-relaxed">{insight.Explanation}</p>
                    {insight.Impact && <p className="text-sm text-muted-foreground italic"><strong className="text-foreground/70">Impact:</strong> {insight.Impact}</p>}
                  </CardContent>
                </Card>
              )})}
            </div>
          </section>

          <section className="mt-12 p-8 border-t border-primary/20">
            <h2 className="text-2xl font-semibold text-primary mb-3 text-center">Conclusion</h2>
            <p className="text-lg text-center text-muted-foreground leading-relaxed max-w-3xl mx-auto">
              {data.Conclusion.Summary}
            </p>
          </section>

        </CardContent>
      </Card>
    </div>
  );
}

