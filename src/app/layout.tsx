
import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import { SidebarProvider } from '@/components/ui/sidebar';
import { MobileNavSheet } from '@/components/layout/mobile-nav-sheet';
import { SiteHeader } from '@/components/layout/site-header';
import { Toaster } from "@/components/ui/toaster";
import { cn } from '@/lib/utils';
import { ThemeProvider } from '@/context/theme-provider';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'SanatanSphere',
  description: 'Explore the depths of Sanatan Dharma: Divine philosophies, spiritual practices, sacred rituals, and cultural heritage in a futuristic, AI-powered experience.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      {/*
        <head /> is implicitly managed by Next.js via the Metadata API.
        Ensure no whitespace or other elements are direct children of <html> besides <body>.
      */}
      <body className={cn(geistSans.variable, geistMono.variable, 'antialiased font-sans')}>
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
            </div>
          </SidebarProvider>
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
