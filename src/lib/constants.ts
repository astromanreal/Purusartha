
import type { NavItem } from '@/types';
import { LayoutDashboard, Orbit, CalendarDays, Sparkles, PartyPopper, BookText, LayoutGrid, Mail, Settings, User, Goal, Star, Globe, Stars, Compass, TrendingUp, HeartHandshake, Orbit as DashaIcon, Move, Sigma, ListChecks, ShieldCheck, BookOpenCheck, Home as HomeIcon } from 'lucide-react'; 

export const NAV_ITEMS: NavItem[] = [
  {
    title: 'Dashboard',
    href: '/',
    icon: LayoutDashboard,
  },
  {
    title: 'Explore',
    href: '/explore',
    icon: LayoutGrid,
  },
  {
    title: 'Purusartha Challenge',
    href: '/purusartha-challenge',
    icon: Goal,
    description: "Embark on a guided journey to fulfill life's four aims: Dharma, Artha, Kama, and Moksha.",
  },
  {
    title: 'Kundli Compass',
    href: '/kundli-compass-features',
    icon: Compass, 
    description: "Access all your advanced Vedic astrology tools and Kundli features from one central hub."
  },
  {
    title: 'Astrology Courses', // New Item
    href: '/astrology-courses',
    icon: BookOpenCheck, // Example Icon
    description: "Learn Vedic Astrology through structured courses and get certified."
  },
  {
    title: 'Cosmic Time',
    href: '/cosmic-time',
    icon: Orbit,
  },
  {
    title: 'Hindu Calendar',
    href: '/hindu-calendar',
    icon: CalendarDays,
  },
  {
    title: 'Hindu Festivals',
    href: '/hindu-festivals',
    icon: PartyPopper,
  },
  {
    title: 'Nakshatras',
    href: '/nakshatras',
    icon: Stars,
    description: "Explore the 27 lunar mansions of Vedic astrology and their cosmic influence."
  },
  {
    title: 'Rashis (Zodiac)',
    href: '/rashis',
    icon: Star,
    description: "Explore the twelve zodiac signs (Rashis) and their significance in Vedic astrology."
  },
  {
    title: 'Navagraha',
    href: '/navagraha',
    icon: Globe,
    description: "Understand the nine celestial bodies in Vedic astrology and their influence."
  },
  {
    title: 'Shodasha Sanskars', 
    href: '/shodasha-sanskars',
    icon: ShieldCheck, 
    description: "Explore the 16 sacred rites of passage in Hindu tradition."
  },
  {
    title: 'Vastu Shastra Basics',
    href: '/vastu-shastra',
    icon: HomeIcon, // Using HomeIcon for Vastu
    description: "Learn the core principles of Vastu Shastra for harmonious living spaces."
  },
  {
    title: 'Spiritual Practices',
    href: '/spiritual-practices',
    icon: Sparkles,
  },
  {
    title: '36 Gunas (Virtues)',
    href: '/thirty-six-gunas',
    icon: ListChecks,
    description: "Learn about the 36 essential virtues for righteous living and spiritual growth in Sanatan Dharma."
  },
  {
    title: 'Numerology Insights',
    href: '/numerology-insights',
    icon: Sigma, // Using Sigma for Numerology
    description: "Uncover the mystical power of numbers in your life with your core numerological profile."
  },
  {
    title: 'Contact Us',
    href: '/contact',
    icon: Mail,
  },
  {
    title: 'Settings',
    href: '/settings',
    icon: Settings,
  },
  {
    title: 'Profile',
    href: '/profile',
    icon: User,
  },
];

export const APP_NAME = "SanatanSphere";
