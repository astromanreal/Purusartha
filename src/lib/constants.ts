import type { NavItem } from '@/types';
import { LayoutDashboard, Orbit, CalendarDays, Sparkles, MessageCircle, PartyPopper, BookText, LayoutGrid, Mail, Settings, User, Goal, Star, Globe } from 'lucide-react'; // Changed Zodiac to Star, Replaced Planet with Globe

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
    title: 'Purusartha Challenge', // New Item
    href: '/purusartha-challenge',
    icon: Goal,
    description: "Embark on a guided journey to fulfill life's four aims: Dharma, Artha, Kama, and Moksha.",
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
    title: 'Rashis (Zodiac)',
    href: '/rashis',
    icon: Star, 
    description: "Explore the twelve zodiac signs (Rashis) and their significance in Vedic astrology."
  },
  {
    title: 'Navagraha',
    href: '/navagraha',
    icon: Globe, // Replaced Planet with Globe
    description: "Understand the nine celestial bodies in Vedic astrology and their influence."
  },
  {
    title: 'Spiritual Practices',
    href: '/spiritual-practices',
    icon: Sparkles,
  },
  {
    title: 'Ask a Rishi',
    href: '/ask-rishi',
    icon: MessageCircle,
  },
  {
    title: 'Sacred Texts',
    href: '/sacred-texts',
    icon: BookText,
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
