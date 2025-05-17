
import Link from 'next/link';
import Image from 'next/image';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { NAV_ITEMS } from "@/lib/constants";
import { ArrowRight, Goal } from 'lucide-react'; 
import { HeroConcepts } from '@/components/home/hero-concepts';

const featureCards = NAV_ITEMS.filter(item => 
  item.href !== '/' && 
  item.href !== '/explore' && 
  item.href !== '/purusartha-challenge'
);


const placeholderImages = [
  { hint: "galaxy stars", url: "https://i.pinimg.com/736x/15/c0/ec/15c0ecbfaeebf9fbf12882d7a7848ef4.jpg" }, // Cosmic Time
  { hint: "ancient calendar", url: "https://i.pinimg.com/736x/72/37/e4/7237e42fbc524b8ff8203cd152e1ad38.jpg" }, // Hindu Calendar
  { hint: "joyful celebration", url: "https://i.pinimg.com/736x/ac/ee/84/acee84b614896ac3b4913f2640668813.jpg" }, // Hindu Festivals
  { hint: "zodiac chart", url: "https://i.pinimg.com/736x/ee/32/e5/ee32e5926e939024fcff048c7a2bf09e.jpg" }, // Rashis (Zodiac)
  { hint: "celestial planets", url: "https://i.pinimg.com/736x/a2/76/e3/a276e3cd620c8239b908b84a0697f58e.jpg" }, // Navagraha
  { hint: "meditation temple", url: "https://i.pinimg.com/736x/68/7e/71/687e7125097fd22a5e79ce7c7b4a2657.jpg" }, // Spiritual Practices
  { hint: "wise sage", url: "https://i.pinimg.com/736x/d7/79/58/d7795829afebb38a923fe6432d29b0a7.jpg" }, // Ask a Rishi
  { hint: "sacred scriptures", url: "https://i.pinimg.com/736x/1f/a6/c8/1fa6c81a9bee7a90074b8ccce45e24eb.jpg" }, // Sacred Texts
  { hint: "email envelope", url: "https://i.pinimg.com/736x/b2/9c/ed/b29ced4ef6587583707c4d4e2462dead.jpg" }, // Contact Us
  { hint: "settings gears", url: "https://i.pinimg.com/736x/7a/60/e7/7a60e785acfecad3be8530b241a8e95d.jpg" }, // Settings
  { hint: "user avatar", url: "https://i.pinimg.com/736x/19/e4/4d/19e44d410a646eb00b186915d465fd9f.jpg" }, // Profile
];

export default function DashboardPage() {
  return (
    <div className="flex flex-col space-y-12">
      {/* Existing Hero Section for Purusartha Challenge */}
      <section className="py-16 bg-gradient-to-br from-primary/10 via-background to-accent/10 rounded-lg shadow-2xl border border-primary/20">
        <div className="container mx-auto px-4 text-center">
          <div className="inline-flex items-center justify-center p-4 bg-primary/20 rounded-full mb-6 mx-auto shadow-lg">
            <Goal className="h-20 w-20 text-primary" />
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-primary mb-6">
            Embark on Your Purusartha Journey
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-3xl mx-auto leading-relaxed">
            Discover and fulfill the four aims of human life: Dharma (Duty), Artha (Prosperity), Kama (Pleasure), and Moksha (Liberation), alongside cultivating daily well-being through Nitya Karma. Complete tasks, track your progress, and strive for a balanced and purposeful existence within SanatanSphere.
          </p>
          <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 ease-in-out group">
            <Link href="/purusartha-challenge">
              Begin Your Full Journey <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
        </div>
      </section>

      {/* Existing Hero Section for Concepts */}
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

      {/* Feature Cards Section */}
      <section className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Explore Other Features
          </h2>
          <p className="mt-2 text-lg text-muted-foreground">
            Your guide to the universe of Sanatan Dharma. Discover, learn, and connect.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {featureCards.map((feature, index) => {
            const imageIndex = index % placeholderImages.length;
            const placeholderImage = placeholderImages[imageIndex];
            return (
            <Card key={feature.href} className="flex flex-col overflow-hidden shadow-lg hover:shadow-primary/20 transition-all duration-300 ease-in-out hover:scale-[1.02] focus-within:scale-[1.02] focus-within:shadow-primary/30">
              <CardHeader className="p-0">
                <Image
                  src={placeholderImage.url}
                  alt={feature.title}
                  width={600}
                  height={400}
                  className="w-full h-48 object-cover"
                  data-ai-hint={placeholderImage.hint}
                />
              </CardHeader>
              <CardContent className="p-6 flex-grow flex flex-col">
                <div className="flex items-center gap-3 mb-2">
                  <feature.icon className="h-8 w-8 text-primary" />
                  <CardTitle className="text-2xl">{feature.title}</CardTitle>
                </div>
                <CardDescription className="text-base mb-4 flex-grow">
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
  switch (title) {
    case "Cosmic Time":
      return "Discover dynamic planetary positions with live charts and ephemeris. Understand the cosmic influence on your life.";
    case "Hindu Calendar":
      return "Stay updated with detailed, tithi-based festival data synced with the Panchang. Never miss an auspicious occasion.";
    case "Hindu Festivals":
      return "Explore the rich diversity of Hindu festivals, their stories, and rituals. Celebrate with knowledge and joy.";
    case "Rashis (Zodiac)":
      return "Explore the twelve zodiac signs (Rashis) and their significance in Vedic astrology, understanding their influence on personality and life paths.";
    case "Navagraha":
      return "Understand the nine celestial bodies in Vedic astrology and their influence on destiny and life events.";
    case "Spiritual Practices":
      return "Dive deep into the meanings and methods of worship, sacrifice, and charity. Enrich your spiritual journey.";
    case "Ask a Rishi":
      return "Seek guidance from our AI-powered Rishi. Get answers to your spiritual questions through voice or text chat.";
    case "Sacred Texts":
      return "Engage with profound Suktas, Stutis, and Stotras. Explore translations and meanings of sacred verses.";
    case "Contact Us":
      return "Get in touch with us for any queries, feedback or support. We are here to help!";
    case "Settings":
      return "Customize your application settings and preferences for a personalized experience.";
    case "Profile":
      return "Manage your user profile, view your activity, track your Purusartha Journey, and set your preferences within SanatanSphere.";
    // Purusartha Challenge description is handled by the new hero section on homepage.
    // For Explore page, it might need its own entry.
    default:
      return "Explore this section to learn more.";
  }
}

