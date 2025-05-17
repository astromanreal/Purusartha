
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
import { ArrowRight, LayoutGrid } from 'lucide-react';

// Filter out Dashboard and Explore itself for the feature cards on this page
const featureCards = NAV_ITEMS.filter(item => item.href !== '/' && item.href !== '/explore');

// Updated placeholder images to match homepage and specific Purusartha Challenge image
const placeholderImages = [
  { hint: "journey path", url: "https://i.pinimg.com/736x/fe/ac/6c/feac6c33ee83f31a84993bf7483e8c10.jpg" }, // Purusartha Challenge
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


function getFeatureDescription(title: string): string {
  const item = NAV_ITEMS.find(navItem => navItem.title === title);
  if (item && item.description) {
    return item.description;
  }

  // Fallback descriptions if not found in NAV_ITEMS constants
  switch (title) {
    case "Purusartha Challenge":
      return "Embark on a guided journey to fulfill life's four aims: Dharma, Artha, Kama, and Moksha. Complete tasks and track your progress toward a balanced life.";
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
    default:
      return "Explore this section to learn more about Sanatan Dharma.";
  }
}


export default function ExplorePage() {
  return (
    <div className="container mx-auto py-8">
      <header className="mb-12 text-center">
        <div className="inline-flex items-center justify-center p-3 bg-primary/10 rounded-full mb-4 mx-auto">
          <LayoutGrid className="h-16 w-16 text-primary" />
        </div>
        <h1 className="text-4xl font-bold tracking-tight text-primary sm:text-5xl">
          Explore SanatanSphere
        </h1>
        <p className="mt-2 text-xl text-muted-foreground max-w-2xl mx-auto">
          Navigate through the diverse features of SanatanSphere. Click on any card to delve deeper into each aspect.
        </p>
      </header>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {featureCards.map((feature, index) => {
          // Ensure placeholderImages array is long enough or loop correctly
          const imageIndex = index % placeholderImages.length; 
          const placeholderImage = placeholderImages[imageIndex];

          return (
            <Card 
              key={feature.href} 
              className="flex flex-col overflow-hidden shadow-xl hover:shadow-primary/30 transition-all duration-300 ease-in-out transform hover:scale-105 focus-within:scale-105 focus-within:shadow-primary/30 bg-card border border-border/50 rounded-lg"
            >
              <CardHeader className="p-0">
                <Image
                  src={placeholderImage.url}
                  alt={feature.title}
                  width={600}
                  height={350} 
                  className="w-full h-48 object-cover rounded-t-lg" 
                  data-ai-hint={placeholderImage.hint}
                />
              </CardHeader>
              <CardContent className="p-6 flex-grow flex flex-col">
                <div className="flex items-center gap-3 mb-3">
                  <feature.icon className="h-7 w-7 text-accent" />
                  <CardTitle className="text-2xl font-semibold text-primary">{feature.title}</CardTitle>
                </div>
                <CardDescription className="text-base text-muted-foreground mb-6 flex-grow">
                  {getFeatureDescription(feature.title)}
                </CardDescription>
                <Button 
                  asChild 
                  variant="default" 
                  className="mt-auto group w-full bg-primary hover:bg-primary/90 text-primary-foreground transition-colors duration-300"
                >
                  <Link href={feature.href}>
                    Discover {feature.title}
                    <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </div>
  );
}

