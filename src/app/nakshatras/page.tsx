
import NakshatrasClient from './nakshatras-client';
import type { Metadata } from 'next';
import { APP_NAME } from '@/lib/constants';
import { nakshatraData } from '@/data/nakshatra-data'; // For JSON-LD

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000';
const OG_IMAGE_NAKSHATRAS_LIST = `${BASE_URL}/og-images/og-image-nakshatras-list.png`; 

export const metadata: Metadata = {
  title: `The 27 Nakshatras - Vedic Lunar Mansions | ${APP_NAME}`,
  description: `Explore the 27 Nakshatras (Lunar Mansions) of Vedic astrology on ${APP_NAME}. Learn about their symbols, deities, ruling planets, characteristics, and their profound influence on destiny and personality according to Sanatan Dharma.`,
  keywords: ["Nakshatras", "27 Nakshatras", "Vedic Astrology", "Lunar Mansions", "Hindu Astrology", "Jyotish", "Celestial Bodies", "Ashwini", "Bharani", "Krittika", "Rohini", "Sanatan Dharma", APP_NAME],
  openGraph: {
    title: `The 27 Nakshatras - Vedic Lunar Mansions | ${APP_NAME}`,
    description: `Explore the 27 Nakshatras (Lunar Mansions) of Vedic astrology. Learn about their symbols, deities, ruling planets, characteristics, and their profound influence.`,
    url: `${BASE_URL}/nakshatras`,
    siteName: APP_NAME,
    images: [
      {
        url: OG_IMAGE_NAKSHATRAS_LIST,
        width: 1200,
        height: 630,
        alt: `The 27 Nakshatras - ${APP_NAME}`,
      },
    ],
    type: 'website', // This is a collection page
  },
  twitter: {
    card: 'summary_large_image',
    title: `The 27 Nakshatras - Vedic Lunar Mansions | ${APP_NAME}`,
    description: `Explore the 27 Nakshatras (Lunar Mansions) of Vedic astrology.`,
    images: [OG_IMAGE_NAKSHATRAS_LIST],
  },
  alternates: {
    canonical: `${BASE_URL}/nakshatras`,
  }
};

export default function NakshatrasPageWrapper() {
  const nakshatrasListJsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": metadata.title as string,
    "description": metadata.description as string,
    "url": `${BASE_URL}/nakshatras`,
    "mainEntity": {
      "@type": "ItemList",
      "itemListElement": nakshatraData.nakshatras.map((nakshatra, index) => ({
        "@type": "ListItem",
        "position": index + 1,
        "item": {
          "@type": "WebPage", // Each Nakshatra is a sub-page
          "name": `${nakshatra.name_english} (${nakshatra.name_sanskrit}) - Nakshatra #${nakshatra.number}`,
          "url": `${BASE_URL}/nakshatras/${nakshatra.id}`,
          "description": `Learn about ${nakshatra.name_english} Nakshatra: its deity ${nakshatra.deity}, ruling planet ${nakshatra.ruling_planet}, and symbol.`
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
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(nakshatrasListJsonLd) }}
      />
      <NakshatrasClient />
    </>
  );
}
    
