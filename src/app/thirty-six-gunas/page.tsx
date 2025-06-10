
// src/app/thirty-six-gunas/page.tsx
import type { Metadata } from 'next';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardFooter,
  CardDescription
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge"; 
import { BookOpen, ListChecks, Feather, ArrowRight } from "lucide-react";
import { thirtySixGunasData } from "@/data/thirty-six-gunas-data";
import type { GunaDefinition } from "@/types";
import Link from "next/link";
import { APP_NAME } from "@/lib/constants";

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000';

export const metadata: Metadata = {
  title: `The 36 Gunas - Virtues for Spiritual Growth in Sanatan Dharma | ${APP_NAME}`,
  description: `Discover the 36 Gunas (Virtues) of Sanatan Dharma on ${APP_NAME}. Explore essential qualities like Shama (Calmness), Dama (Self-Restraint), Ahimsa (Non-Violence), Satya (Truthfulness), and more for a righteous and enlightened life.`,
  keywords: ['36 Gunas', 'Hindu Virtues', 'Sanatan Dharma Ethics', 'Spiritual Qualities', 'Shama', 'Dama', 'Ahimsa', 'Satya', 'Ethical Living', 'Character Development', 'Indian Philosophy', APP_NAME],
  alternates: {
    canonical: `${BASE_URL}/thirty-six-gunas`,
  },
  openGraph: {
    title: `The 36 Gunas - Virtues for Spiritual Growth | ${APP_NAME}`,
    description: 'Explore the 36 Gunas of Sanatan Dharma for a righteous and enlightened life, including Shama, Dama, Ahimsa, Satya, and more.',
    url: `${BASE_URL}/thirty-six-gunas`,
    siteName: APP_NAME,
    images: [
      {
        url: `${BASE_URL}/og-images/og-image-36-gunas-list.png`, 
        width: 1200,
        height: 630,
        alt: `The 36 Gunas - ${APP_NAME}`,
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: `The 36 Gunas - Virtues for Spiritual Growth | ${APP_NAME}`,
    description: 'Explore the 36 Gunas of Sanatan Dharma for a righteous and enlightened life.',
    images: [`${BASE_URL}/og-images/og-image-36-gunas-list.png`],
  },
};

export default function ThirtySixGunasPage() {
  const gunasListJsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": metadata.title as string,
    "description": metadata.description as string,
    "url": `${BASE_URL}/thirty-six-gunas`,
    "mainEntity": {
      "@type": "ItemList",
      "itemListElement": thirtySixGunasData.map((guna, index) => ({
        "@type": "ListItem",
        "position": index + 1,
        "item": {
          "@type": "WebPage",
          "name": `${guna.sanskritName.split('(')[0].trim()} (${guna.englishMeaning})`,
          "url": `${BASE_URL}/thirty-six-gunas/${guna.id}`,
          "description": guna.shortDescription
        }
      }))
    },
    "publisher": {
      "@type": "Organization",
      "name": APP_NAME,
      "logo": {
        "@type": "ImageObject",
        "url": `${BASE_URL}/logo-icon.png` 
      }
    }
  };

  return (
    <div className="container mx-auto py-10 px-4">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(gunasListJsonLd) }}
      />
      <section className="mb-16 text-center py-12 bg-gradient-to-br from-primary/10 via-background to-accent/10 rounded-lg shadow-xl border border-primary/20">
        <div className="inline-flex items-center justify-center p-4 bg-primary/20 rounded-full mb-6 mx-auto shadow-lg">
            <ListChecks className="h-20 w-20 text-primary" />
        </div>
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-primary mb-4">
          The 36 Gunas of Sanatan Dharma — Qualities for Spiritual Growth
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
          Discover the timeless virtues that guide a righteous and enlightened life.
        </p>
        <p className="mt-4 text-sm text-muted-foreground max-w-2xl mx-auto">
          The term "36 Gunas" represents a comprehensive set of virtues. This page details key qualities emphasized in Sanatan Dharma for holistic development.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-semibold text-accent mb-8 text-center">
          The Virtues to Cultivate
        </h2>
        {thirtySixGunasData.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {thirtySixGunasData.map((guna: GunaDefinition) => (
              <Card 
                key={guna.id} 
                className="flex flex-col overflow-hidden shadow-md hover:shadow-primary/20 transition-all duration-300 ease-in-out bg-card border border-border/30 rounded-lg h-full group"
              >
                <CardHeader className="pb-4">
                  <div className="flex items-center gap-2 mb-1">
                    {guna.icon && <span className="text-3xl mr-1">{guna.icon}</span>}
                    <CardTitle className="text-xl font-bold text-primary group-hover:text-accent transition-colors">
                      {guna.sanskritName.split('(')[0].trim()}
                       {guna.sanskritName.includes('(') && <span className="block text-sm font-normal text-accent/80">{guna.sanskritName.substring(guna.sanskritName.indexOf('('))}</span>}
                    </CardTitle>
                  </div>
                  <p className="text-sm font-medium text-muted-foreground italic mb-2">
                    {guna.englishMeaning}
                  </p>
                  {guna.category && (
                    <Badge variant="outline" className="text-xs w-fit border-accent/50 text-accent bg-accent/10">
                      {guna.category}
                    </Badge>
                  )}
                </CardHeader>
                <CardContent className="flex-grow">
                  <CardDescription className="text-sm text-foreground/80 leading-relaxed line-clamp-3 mb-3">
                    {guna.shortDescription}
                  </CardDescription>
                  {guna.tags && guna.tags.length > 0 && (
                    <div className="flex flex-wrap gap-1">
                      {guna.tags.slice(0, 3).map(tag => (
                        <Badge key={tag} variant="secondary" className="text-xs font-normal">
                          {tag}
                        </Badge>
                      ))}
                      {guna.tags.length > 3 && (
                        <Badge variant="secondary" className="text-xs font-normal">...</Badge>
                      )}
                    </div>
                  )}
                </CardContent>
                <CardFooter className="pt-3 mt-auto">
                  <Button variant="link" size="sm" asChild className="text-xs text-primary group-hover:text-accent p-0 h-auto">
                    <Link href={`/thirty-six-gunas/${guna.id}`}>
                      Learn More <ArrowRight className="ml-1 h-3 w-3" />
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        ) : (
          <div className="text-center py-10">
            <Feather className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
            <p className="text-lg text-muted-foreground">Information on Gunas is being updated. Please check back soon.</p>
          </div>
        )}
      </section>

      <section className="mb-12 p-6 md:p-8 bg-card rounded-lg shadow-lg border border-border/50">
        <h2 className="text-3xl font-semibold text-accent mb-6 text-center md:text-left">
          What Are the Gunas?
        </h2>
        <div className="space-y-4 text-base md:text-lg text-foreground/90 leading-relaxed">
          <p>
            In Hindu philosophy, <strong className="text-primary">Gunas</strong> (गुण) are inherent qualities, attributes, or virtues that characterize an individual's nature and actions. While "Guna" can refer to the three fundamental qualities of nature (Sattva, Rajas, Tamas) in Samkhya philosophy, in the context of ethics and spiritual development, it often refers to a collection of essential virtues. The concept of "36 Gunas" symbolizes a comprehensive set of these positive qualities.
          </p>
          <p>
            Cultivating these Gunas is paramount for self-realization (Moksha), inner harmony, and righteous living (Dharma). They are not merely abstract ideals but practical principles for daily life, guiding our thoughts, speech, and actions. Sources like the <strong className="text-accent">Bhagavad Gita (especially Chapter 16 detailing divine and demonic qualities)</strong>, Mahabharata, Upanishads, and Puranas extensively discuss these virtues.
          </p>
          <p>
            By consciously developing these qualities, one can balance the mind and spirit, purify the heart, foster positive relationships, and progress on the path to spiritual enlightenment. They help transform an individual from a state of ignorance and bondage to one of wisdom and liberation.
          </p>
        </div>
      </section>

      <section className="mb-12 p-6 md:p-8 bg-card rounded-lg shadow-lg border border-border/50">
        <h2 className="text-3xl font-semibold text-accent mb-6 text-center md:text-left flex items-center">
          <BookOpen className="h-8 w-8 mr-3" /> Where Are Gunas Mentioned?
        </h2>
        <div className="space-y-3 text-base md:text-lg text-foreground/90 leading-relaxed">
          <p>
            The virtues (Gunas) listed are discussed and extolled across numerous Sanatana Dharma scriptures. The <strong className="text-primary">Bhagavad Gita</strong>, particularly in <strong className="text-accent">Chapter 16 (Daivasura Sampad Vibhaga Yoga - The Yoga of Divine and Demonic Natures)</strong>, provides a significant list of divine qualities (Daivi Sampad) that lead to liberation, contrasting them with demonic qualities.
          </p>
          <p>
            The <strong className="text-primary">Mahabharata</strong> (especially in sections like the Shanti Parva and Anushasana Parva, including Vidura Niti), the <strong className="text-primary">Upanishads</strong> (e.g., Taittiriya Upanishad discussing values for a student), various <strong className="text-primary">Puranas</strong>, and <strong className="text-primary">Dharma Shastras</strong> (like Manu Smriti) also elaborate on these ethical and spiritual principles. Patanjali's Yoga Sutras, with its Yamas and Niyamas, forms another crucial source for understanding core virtues.
          </p>
          <p className="text-sm text-muted-foreground">
            (Further specific verse references and links for deeper study will be added in future updates on individual Guna pages.)
          </p>
        </div>
      </section>

      <section className="py-10 text-center">
        <h2 className="text-3xl font-semibold text-primary mb-6">
          Living the Gunas
        </h2>
        <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed mb-6">
          Embracing and cultivating these Gunas is not merely an intellectual exercise but a lifelong practice. Integrating these virtues into daily thoughts, words, and actions transforms one's character, purifies the mind, and fosters a life of purpose, peace, and spiritual fulfillment. They are the guiding lights on the path to self-improvement and ultimate liberation.
        </p>
        <p className="text-md italic text-accent">
          "Be steadfast in the Gunas of Sattva, overcome Rajas and Tamas, and realize your divine nature." (Inspired thought)
        </p>
      </section>
    </div>
  );
}

