
import Link from 'next/link';
import Image from 'next/image';
import type { Metadata } from 'next';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { NAV_ITEMS, APP_NAME } from "@/lib/constants";
import { ArrowRight, Goal } from 'lucide-react'; 
import { HeroConcepts } from '@/components/home/hero-concepts';

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000';

export const metadata: Metadata = {
  title: `Dashboard - Your Spiritual Hub | ${APP_NAME}`,
  description: `Welcome to the ${APP_NAME} dashboard. Begin your Purusartha Challenge, explore core Sanatan Dharma concepts (Karma, Dharma, Moksha), and discover a universe of Vedic wisdom, astrology, and rituals.`,
  keywords: ['Dashboard', 'Purusartha Challenge', 'Sanatan Dharma Concepts', 'Vedic Astrology', 'Hindu Philosophy', 'Hindu Rituals', 'Karma', 'Dharma', 'Moksha', APP_NAME],
  alternates: {
    canonical: `${BASE_URL}/`,
  },
  openGraph: {
    title: `Dashboard - Your Spiritual Hub | ${APP_NAME}`,
    description: `Begin your Purusartha Challenge and explore core Sanatan Dharma concepts like Karma, Dharma, and Moksha on ${APP_NAME}.`,
    url: `${BASE_URL}/`,
    siteName: APP_NAME,
    images: [
      {
        url: `${BASE_URL}/og-images/og-image-dashboard.png`, // Specific OG image for dashboard
        width: 1200,
        height: 630,
        alt: `${APP_NAME} Dashboard - Purusartha and Vedic Concepts`,
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: `Dashboard - Your Spiritual Hub | ${APP_NAME}`,
    description: `Begin your Purusartha Challenge and explore core Sanatan Dharma concepts on ${APP_NAME}.`,
    images: [`${BASE_URL}/og-images/og-image-dashboard.png`],
  },
};

// Filter out items that are not meant for the dashboard cards.
// Explore and Purusartha Challenge have dedicated hero sections.
// Contact, Settings, Profile are utility links, often in footer/header.
// Sacred Texts and Ask a Rishi were removed.
const featureCards = NAV_ITEMS.filter(item => 
  item.href !== '/' && 
  item.href !== '/explore' && 
  item.href !== '/purusartha-challenge' &&
  item.href !== '/contact' &&
  item.href !== '/settings' &&
  item.href !== '/profile' &&
  item.href !== '/sacred-texts' && // Ensure Sacred Texts is filtered out
  item.href !== '/ask-rishi'      // Ensure Ask a Rishi is filtered out
);

const placeholderImages = [
  // Order should match the filtered featureCards if all had unique images.
  // Kundli Compass, Astrology Courses, Cosmic Time, Hindu Calendar, Hindu Festivals, Nakshatras, Rashis (Zodiac), Navagraha, 
  // Shodasha Sanskars, Vastu, Spiritual Practices, 36 Gunas, Numerology Insights
  { hint: "astrology compass tool", url: "https://i.pinimg.com/736x/5a/f7/c7/5af7c709369ac86209429356880f01c8.jpg" }, // Kundli Compass Features
  { hint: "vedic astrology book", url: "https://i.pinimg.com/736x/b7/5f/88/b75f885e9863217732dd0a689bde41bf.jpg" }, // Astrology Courses
  { hint: "galaxy stars time", url: "https://i.pinimg.com/736x/1b/90/db/1b90dbaeb83ceb986ac39b4935de3fb6.jpg" }, // Cosmic Time
  { hint: "ancient calendar scripture", url: "https://i.pinimg.com/736x/13/1c/55/131c558ab81cb279ef62df810cffad34.jpg" }, // Hindu Calendar
  { hint: "joyful festival celebration", url: "https://i.pinimg.com/736x/ac/ee/84/acee84b614896ac3b4913f2640668813.jpg" }, // Hindu Festivals
  { hint: "lunar mansion chart", url: "https://i.pinimg.com/736x/fd/e4/71/fde4710c0484677e42a49bf961a25da7.jpg" }, // Nakshatras
  { hint: "zodiac signs wheel", url: "https://i.pinimg.com/736x/ee/32/e5/ee32e5926e939024fcff048c7a2bf09e.jpg" }, // Rashis (Zodiac)
  { hint: "celestial planets solar system", url: "https://i.pinimg.com/736x/a2/76/e3/a276e3cd620c8239b908b84a0697f58e.jpg" }, // Navagraha
  { hint: "sacred hindu rites", url: "https://i.pinimg.com/736x/fd/47/3a/fd473ae08ce664641b589118d000270d.jpg" }, // Shodasha Sanskars
  { hint: "home harmony design", url: "https://i.pinimg.com/736x/7b/f4/1c/7bf41c9af6fc88f17586b511a014d198.jpg" }, // Vastu Shastra Basics
  { hint: "meditation temple shrine", url: "https://i.pinimg.com/736x/a6/bb/42/a6bb429d256f019c210138d957483622.jpg" }, // Spiritual Practices
  { hint: "virtues ethics scroll", url: "https://i.pinimg.com/736x/ac/15/dc/ac15dceb25449a964ce7b97b5c2f8740.jpg" }, // 36 Gunas
  { hint: "number patterns charts", url: "https://i.pinimg.com/736x/4b/c2/68/4bc26861647c88ddd9bdfd223b13057d.jpg" }, // Numerology Insights
  // Other features in NAV_ITEMS if not covered by hero sections or utility links
  { hint: "planetary periods timeline", url: "https://placehold.co/600x400.png" }, // Dasha Analysis
  { hint: "birth chart creation", url: "https://placehold.co/600x400.png" }, // Kundli Generator
  { hint: "marriage compatibility astrology", url: "https://placehold.co/600x400.png" }, // Vedic Matchmaking
  { hint: "daily horoscope stars", url: "https://placehold.co/600x400.png" }, // Horoscope Forecasts
  { hint: "panchang almanac details", url: "https://placehold.co/600x400.png" }, // Panchang
  { hint: "planet movements sky", url: "https://placehold.co/600x400.png" }, // Transits
  { hint: "solar return chart", url: "https://placehold.co/600x400.png" }, // Varshphal
];


export default function DashboardPage() {
  return (
    <div className="flex flex-col space-y-12">
      <section className="py-16 bg-gradient-to-br from-primary/10 via-background to-accent/10 rounded-lg shadow-2xl border border-primary/20">
        <div className="container mx-auto px-4 text-center">
          <div className="inline-flex items-center justify-center p-4 bg-primary/20 rounded-full mb-6 mx-auto shadow-lg">
            <Goal className="h-20 w-20 text-primary" />
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-primary mb-6">
            Embark on Your Purusartha Journey
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-3xl mx-auto leading-relaxed">
            Discover and fulfill the four aims of human life: Dharma (Duty), Artha (Prosperity), Kama (Pleasure), and Moksha (Liberation), alongside cultivating daily well-being through Nitya Karma. Complete tasks, track your progress, and strive for a balanced and purposeful existence within {APP_NAME}.
          </p>
          <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 ease-in-out group">
            <Link href="/purusartha-challenge">
              Begin Your Full Journey <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
        </div>
      </section>

      <section className="py-12 bg-card rounded-lg shadow-xl border border-border/50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-primary mb-4 sm:text-4xl">
            Core Concepts of Sanatan Dharma
          </h2>
          <p className="text-lg text-muted-foreground mb-10 max-w-3xl mx-auto sm:text-xl">
            Delve into the foundational philosophical ideas that shape the Hindu worldview and spiritual practices.
          </p>
          <HeroConcepts />
        </div>
      </section>

      <section className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Explore Key Features
          </h2>
          <p className="mt-2 text-lg text-muted-foreground">
            Your guide to the universe of Sanatan Dharma. Discover, learn, and connect.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {featureCards.map((feature, index) => {
            const imageDetails = placeholderImages[index % placeholderImages.length]; 
            return (
            <Card key={feature.href} className="flex flex-col overflow-hidden shadow-lg hover:shadow-primary/20 transition-all duration-300 ease-in-out hover:scale-[1.02] focus-within:scale-[1.02] focus-within:shadow-primary/30">
              <CardHeader className="p-0">
                <Image
                  src={imageDetails.url} 
                  alt={feature.title}
                  width={600}
                  height={350} 
                  className="w-full h-48 object-cover"
                  data-ai-hint={imageDetails.hint} 
                  priority={index < 3} // Prioritize loading for first few images
                />
              </CardHeader>
              <CardContent className="p-6 flex-grow flex flex-col">
                <div className="flex items-center gap-3 mb-2">
                  <feature.icon className="h-8 w-8 text-primary" />
                  <CardTitle className="text-2xl">{feature.title}</CardTitle>
                </div>
                <CardDescription className="text-base mb-4 flex-grow line-clamp-3">
                  {getFeatureDescription(feature.title)}
                </CardDescription>
                <Button asChild variant="outline" className="mt-auto group hover:bg-primary hover:text-primary-foreground transition-colors duration-300">
                  <Link href={feature.href}>
                    Explore {feature.title}
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
            );
          })}
        </div>
      </section>
    </div>
  );
}

function getFeatureDescription(title: string): string {
  const navItem = NAV_ITEMS.find(item => item.title === title);
  if (navItem && navItem.description) {
    return navItem.description;
  }

  // Fallback descriptions, ensure these match the filtered featureCards titles
  switch (title) {
    case "Kundli Compass":
      return "Access all your advanced Vedic astrology tools and Kundli features from one central hub.";
    case "Astrology Courses":
      return "Learn Vedic Astrology through structured courses and get certified.";
    case "Cosmic Time":
      return "Explore the vast cosmic time cycles: Yugas, Kalpas, and Pralaya, and their significance in Sanatan Dharma.";
    case "Hindu Calendar":
      return "Stay updated with detailed, tithi-based festival data synced with the Panchang. Never miss an auspicious occasion.";
    case "Hindu Festivals":
      return "Explore the rich diversity of Hindu festivals, their stories, and rituals. Celebrate with knowledge and joy.";
    case "Nakshatras":
      return "Explore the 27 lunar mansions of Vedic astrology and their cosmic influence.";
    case "Rashis (Zodiac)":
      return "Explore the twelve zodiac signs (Rashis) and their significance in Vedic astrology, understanding their influence on personality and life paths.";
    case "Navagraha":
      return "Understand the nine celestial bodies in Vedic astrology and their influence on destiny and life events.";
    case "Shodasha Sanskars":
      return "Explore the 16 sacred rites of passage in Hindu tradition, from birth to last rites, shaping life's journey.";
    case "Vastu Shastra Basics":
      return "Learn the core principles of Vastu Shastra for harmonious living spaces.";
    case "Spiritual Practices":
      return "Dive deep into the meanings and methods of worship, sacrifice, and charity. Enrich your spiritual journey.";
    case "36 Gunas (Virtues)":
      return "Learn about the 36 essential virtues for righteous living and spiritual growth in Sanatan Dharma.";
    case "Numerology Insights":
      return "Uncover the mystical power of numbers in your life with your core numerological profile.";
    case "Panchang":
       return "Access daily Panchang details: Tithi, Nakshatra, Yoga, Karana, auspicious/inauspicious timings (Muhurta).";
    case "Kundli Generator":
        return "Generate accurate Vedic birth charts (Kundli/Horoscope) with planetary positions, divisional charts, and essential calculations.";
    case "Vedic Matchmaking":
        return "Detailed Kundli matching for marriage, including Ashtakoot Milan (36 Gunas), Manglik Dosha analysis, and compatibility insights.";
    case "Horoscope Forecasts":
        return "Receive daily, weekly, and monthly horoscope predictions tailored to your unique birth chart.";
    case "Dasha Analysis":
        return "Explore detailed Vimshottari Dasha and other Dasha system predictions to understand planetary period influences.";
    case "Transits":
        return "Track planetary transits and their impact on your natal chart with real-time updates and interpretations.";
    case "Varshphal":
        return "Generate detailed annual horoscope predictions (Tajika Varshphal) for a personalized outlook on the year ahead.";
    default:
      return "Explore this section to learn more about various aspects of Sanatan Dharma and Vedic wisdom.";
  }
}

