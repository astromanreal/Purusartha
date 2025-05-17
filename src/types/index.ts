import type { LucideIcon } from 'lucide-react';

export type NavItem = {
  title: string;
  href: string;
  icon: LucideIcon;
  disabled?: boolean;
  external?: boolean;
  label?: string;
  description?: string;
};

export interface HinduFestival {
  id: string;
  name: string;
  description?: string;
  masaAmanta?: string;
  masaPurnimanta?: string;
  paksa?: string;
  tithi?: string;
}

export interface Verse {
  id: string;
  number?: string | number; // Renamed from verseNumber, can be string like "1.1" or number
  section?: string; // New field, e.g., "Namakam", "Chamakam"
  sanskrit: string;
  transliteration?: string;
  translation: string;
  meaning?: string;
}

export interface SacredText {
  id: string;
  title: string;
  type: 'Sukta' | 'Stuti' | 'Stotra'; // Type remains the same
  description: string;
  focus?: string; // Renamed from deityFocus
  source?: string; // New field
  verses: Verse[];
}

// Purusartha Challenge Types
export interface PurusarthaTask {
  id: string;
  title: string;
  description: string;
  category: 'Dharma' | 'Artha' | 'Kama' | 'Moksha' | 'NityaKarma'; // Added NityaKarma
  // completed status will be managed externally, typically via localStorage
}

export interface PurusarthaGoalData {
  id: 'Dharma' | 'Artha' | 'Kama' | 'Moksha' | 'NityaKarma'; // Added NityaKarma
  title: string;
  description: string;
  icon: LucideIcon;
  tasks: PurusarthaTask[];
}

export type PurusarthaCompletionStatus = {
  [taskId: string]: boolean;
};

// Rashi (Zodiac Signs) Types
export interface Rashi {
  rashi_name_english: string;
  rashi_name_hindi: string;
  symbol: string; // e.g., "Ram", "Bull". Consider using specific icon names if available or map to SVGs/Lucide icons.
  element: "Fire" | "Earth" | "Air" | "Water";
  planet: string; // Ruling planet, e.g., "Mars", "Venus"
  quality: "Cardinal" | "Fixed" | "Mutable";
  lucky_color: string;
  lucky_number: string; // Kept as string as per JSON
  key_traits: string[];
  ruling_deity: string;
  personality: string;
  ideal_match: string; // Comma-separated string, can be parsed into an array if needed
  gemstone: string; // Comma-separated string
}

// Navagraha Types
export interface Navagraha {
  name: string;
  englishName: string;
  deity: string;
  significance: string;
  day: string;
  direction: string;
  color: string;
  element: "Fire" | "Water" | "Earth" | "Air" | "Ether (Akasha)" | "Air/Shadow" | "Fire/Shadow";
  associatedNakshatras: string[];
  mantra: string; // Contains both Sanskrit and transliteration
  symbol: string; // Text description of symbol
  nature: "Benefic (generally)" | "Benefic" | "Malefic" | "Neutral (depends on associations)" | "Highly Benefic" | "Shadowy Malefic" | "Shadowy Malefic (Spiritually Benefic)";
  associatedDeity: string;
  description: string;
}

export interface NavagrahaData {
  navagrahas: Navagraha[];
}
