
// src/app/sitemap.ts
import type { MetadataRoute } from 'next';
import { nakshatraData } from '@/data/nakshatra-data';
import { NAV_ITEMS } from '@/lib/constants';
import { thirtySixGunasData } from '@/data/thirty-six-gunas-data'; 
import { shodashaSanskarsData } from '@/data/shodasha-sanskars-data'; 
import { astrologyCoursesData } from '@/data/astrology-courses-data';
import { navagrahaData } from '@/data/navagraha-data';
import { rashiData } from '@/data/rashi-data'; // Added Rashi data

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000';

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = NAV_ITEMS
    .filter(item => 
        !item.href.includes('[id]') && 
        !item.href.includes('[courseId]') && 
        !item.href.includes('[grahaId]') && 
        !item.href.includes('[rashiId]') && 
        item.href !== '/shodasha-sanskars/[id]' && 
        item.href !== '/thirty-six-gunas/[id]' && 
        item.href !== '/nakshatras/[id]' &&
        item.href !== '/astrology-courses/[courseId]' &&
        item.href !== '/navagraha/[grahaId]' &&
        item.href !== '/rashis/[rashiId]' &&
        !item.href.startsWith('http') 
    ) 
    .map((route) => ({
      url: `${BASE_URL}${route.href}`,
      lastModified: new Date().toISOString(),
      changeFrequency: route.href === '/' ? 'daily' : 'weekly' as 'daily' | 'weekly', 
      priority: route.href === '/' ? 1.0 : (route.href.startsWith('/explore') || route.href.startsWith('/nakshatras') || route.href.startsWith('/thirty-six-gunas') || route.href.startsWith('/shodasha-sanskars') || route.href.startsWith('/astrology-courses') || route.href.startsWith('/navagraha') || route.href.startsWith('/rashis') || route.href.startsWith('/numerology-insights') || route.href.startsWith('/vastu-shastra') ? 0.9 : 0.8),
    }));

  const nakshatraRoutes = nakshatraData.nakshatras.map((nakshatra) => ({
    url: `${BASE_URL}/nakshatras/${nakshatra.id}`,
    lastModified: new Date().toISOString(), 
    changeFrequency: 'monthly' as 'monthly',
    priority: 0.7,
  }));

  const gunaRoutes = thirtySixGunasData.map((guna) => ({
    url: `${BASE_URL}/thirty-six-gunas/${guna.id}`,
    lastModified: new Date().toISOString(),
    changeFrequency: 'monthly' as 'monthly',
    priority: 0.7,
  }));
  
  const sanskarRoutes = shodashaSanskarsData.map((sanskar) => ({
    url: `${BASE_URL}/shodasha-sanskars/${sanskar.id}`,
    lastModified: new Date().toISOString(),
    changeFrequency: 'monthly' as 'monthly',
    priority: 0.7,
  }));

  const courseDetailRoutes = astrologyCoursesData.courses.map((course) => ({
    url: `${BASE_URL}/astrology-courses/${course.id}`,
    lastModified: new Date().toISOString(),
    changeFrequency: 'monthly' as 'monthly',
    priority: 0.7,
  }));

  const navagrahaDetailRoutes = navagrahaData.navagrahas.map((graha) => ({
    url: `${BASE_URL}/navagraha/${graha.id}`,
    lastModified: new Date().toISOString(),
    changeFrequency: 'monthly' as 'monthly',
    priority: 0.7,
  }));

  const rashiDetailRoutes = rashiData.rashis.map((rashi) => ({ 
    url: `${BASE_URL}/rashis/${rashi.id}`,
    lastModified: new Date().toISOString(),
    changeFrequency: 'monthly' as 'monthly',
    priority: 0.7,
  }));
  
  return [
    ...staticRoutes,
    ...nakshatraRoutes,
    ...gunaRoutes,
    ...sanskarRoutes,
    ...courseDetailRoutes,
    ...navagrahaDetailRoutes,
    ...rashiDetailRoutes, 
  ];
}
