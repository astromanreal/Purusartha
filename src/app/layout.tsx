
import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import { SidebarProvider } from '@/components/ui/sidebar';
import { MobileNavSheet } from '@/components/layout/mobile-nav-sheet';
import { SiteHeader } from '@/components/layout/site-header';
import { Toaster } from "@/components/ui/toaster";
import { cn } from '@/lib/utils';
import { ThemeProvider } from '@/context/theme-provider';
import Link from 'next/link';
import { APP_NAME } from '@/lib/constants';
import { Logo } from '@/components/icons/logo';
import { Twitter, Instagram, Github, Mail } from 'lucide-react'; // Added social icons

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: {
    default: `${APP_NAME} - Your Gateway to Vedic Wisdom`,
    template: `%s | ${APP_NAME}`,
  },
  description: 'Explore the depths of Sanatan Dharma: Divine philosophies, spiritual practices, sacred rituals, and cultural heritage in a futuristic, AI-powered experience with SanatanSphere.',
  keywords: ['Vedic Wisdom', 'Sanatan Dharma', 'Hinduism', 'Astrology', 'Jyotisha', 'Festivals', 'Sacred Texts', 'Spiritual Practices', 'AI Assistant', 'Vedic Knowledge', 'Indian Culture', 'Kundli', 'Horoscope', 'Panchang', 'Nakshatras', 'Rashis', 'Navagraha', 'Purusartha'],
  openGraph: {
    title: `${APP_NAME} - Your Gateway to Vedic Wisdom`,
    description: 'Explore the depths of Sanatan Dharma: Divine philosophies, spiritual practices, sacred rituals, and cultural heritage.',
    type: 'website',
    locale: 'en_US',
    url: process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000',
    siteName: APP_NAME,
    images: [
      {
        url: `${process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000'}/og-image-default.png`, // Create a default OG image
        width: 1200,
        height: 630,
        alt: `${APP_NAME} - Vedic Wisdom Platform`,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${APP_NAME} - Your Gateway to Vedic Wisdom`,
    description: 'Explore Sanatan Dharma: philosophies, practices, rituals, and cultural heritage.',
    // images: [`${process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000'}/og-image-default.png`], // Add twitter image if needed
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: '/favicon.ico', // Ensure you have a favicon.ico in your public folder
    apple: '/apple-touch-icon.png', // Ensure you have an apple-touch-icon.png
  },
  manifest: '/site.webmanifest', // Add a manifest file for PWA capabilities
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const currentYear = new Date().getFullYear();
  const socialLinks = [
    { name: 'Email', href: 'mailto:astroman6569@gmail.com', icon: Mail },
    { name: 'Twitter', href: 'https://twitter.com/Sathyamsarthak', icon: Twitter },
    { name: 'Instagram', href: 'https://instagram.com/srishikharji', icon: Instagram },
    { name: 'GitHub', href: 'https://github.com/astromanreal', icon: Github },
  ];

  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn(geistSans.variable, geistMono.variable, 'antialiased font-sans flex flex-col min-h-screen')}>
        <ThemeProvider
          defaultMode="dark"
          defaultAccentTheme="sanatan-gold"
        >
          <SidebarProvider>
            <MobileNavSheet />
            <div className="flex flex-col flex-1">
               <SiteHeader />
              <main className="flex-1 p-4 md:p-6 lg:p-8">
                {children}
              </main>
              <footer className="py-6 md:px-8 md:py-0 border-t bg-background/80 backdrop-blur-sm">
                <div className="container flex flex-col items-center justify-between gap-4 md:h-20 md:flex-row">
                  <div className="flex items-center gap-2">
                    <Logo className="w-5 h-5 text-muted-foreground" />
                    <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
                      &copy; {currentYear} {APP_NAME}. All rights reserved.
                    </p>
                  </div>
                  <div className="flex items-center space-x-4">
                    {socialLinks.map((link) => (
                      <Link
                        key={link.name}
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`Connect via ${link.name}`}
                        className="text-muted-foreground hover:text-primary transition-colors"
                      >
                        <link.icon className="h-5 w-5" />
                      </Link>
                    ))}
                  </div>
                </div>
              </footer>
            </div>
          </SidebarProvider>
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
