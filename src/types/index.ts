
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
  id:string;
  number?: string | number;
  section?: string;
  sanskrit: string;
  transliteration?: string;
  translation: string;
  meaning?: string;
}

export interface SacredText {
  id: string;
  title: string;
  type: 'Sukta' | 'Stuti' | 'Stotra';
  description: string;
  focus?: string;
  source?: string;
  verses: Verse[];
}

export interface PurusarthaTask {
  id: string;
  title: string;
  description: string;
  category: 'Dharma' | 'Artha' | 'Kama' | 'Moksha' | 'NityaKarma';
}

export interface PurusarthaGoalData {
  id: 'Dharma' | 'Artha' | 'Kama' | 'Moksha' | 'NityaKarma';
  title: string;
  description: string;
  icon: LucideIcon;
  tasks: PurusarthaTask[];
}

export type PurusarthaCompletionStatus = {
  [taskId: string]: boolean;
};

export interface Rashi {
  id: string;
  rashi_name_english: string;
  rashi_name_hindi: string;
  symbol: string;
  element: "Fire" | "Earth" | "Air" | "Water";
  quality: "Cardinal" | "Fixed" | "Mutable"; // Mapped from modality
  planet: string; // Mapped from rulingPlanet
  ruling_deity: string; // Mapped from deity
  lucky_color: string;
  lucky_number: string; // Changed to string to accommodate display
  gemstone: string; // Mapped from associatedGems, joined if array
  ideal_match: string; // Mapped from idealMatches, joined if array
  key_traits: string[];
  personality: string; // Mapped from personalityOverview
  strengths?: string[];
  weaknesses?: string[];
  healthConcerns?: string[];
  careerInclinations?: string[];
  mythological_significance?: string; // Mapped from mythologicalAssociation
  chakraAssociation?: {
    chakra: string;
    meaning: string;
  };
  compatibleSigns?: {
    highlyCompatible: string[];
    moderatelyCompatible: string[];
    leastCompatible: string[];
  };
  genderAssociation?: string;
  birthDateRange?: string;
  symbolImage?: string; // For emoji or simple image identifier
}


// Enhanced Navagraha types based on detailed Surya and Chandra JSON
export interface ZodiacInfluence {
  ownZodiac?: string | string[];
  houseSignificance?: number[];
  karakaOf?: string | string[];
}

export interface Iconography {
  mount?: string;
  weapon?: string | string[];
  hands?: number;
  appearance?: string;
}

export interface Symbolism {
  symbol?: string;
  meaning?: string;
  representations?: string[];
}

export interface SpiritualSignificance {
  roleInSanatanDharma?: string;
  associatedVedas?: string[];
  majorStotras?: string[];
}

export interface GemstoneUsage {
  gem: string;
  wornOn?: string;
  dayToWear?: string;
  metal?: string;
}

export interface HealingAndRemedies {
  fastingDay?: string;
  donations?: string[];
  spiritualRemedies?: string[];
  gemstoneUsage?: GemstoneUsage;
}

export interface HealthInfluence {
  bodyParts?: string[];
  imbalances?: string[];
  balancedEffects?: string[];
}

export interface PsychologicalInfluence {
  positiveTraits?: string[];
  negativeTraits?: string[];
}

export interface Temple {
  name: string;
  location: string;
  url?: string;
}
export interface CulturalAssociations {
  festivals?: string[];
  temples?: Temple[];
  symbolism?: string;
  representation?: string;
}

export interface MythologicalReferences {
  texts?: string[];
  stories?: string[];
  roleInScriptures?: string;
}

export interface AstroSignificance {
  vedicSignificance?: string;
  westernCorrelation?: string;
  importanceInChart?: string[];
  overview?: string;
  dashasDescription?: string;
  transitEffectDescription?: string;
}

export interface Navagraha {
  id: string;
  name: string;
  sanskritName?: string;
  englishName: string;
  type: "Navagraha" | "Planet (Graha)" | "Shadow Planet (Chhaya Graha)";
  gender?: "Male" | "Female" | "Neutral" | "Neutral/Eunuch" | "Neutral/Hermaphrodite" | "Feminine";
  element?: "Fire" | "Water" | "Earth" | "Air" | "Ether (Akasha)" | "Air/Shadow" | "Fire/Shadow" | "Air (Vayu)";
  deity: string;
  direction?: string;
  color?: string;
  mantra: string;
  beejMantra?: string;
  day?: string;
  metal?: string;
  gemstone?: string;
  associatedChakra?: string;
  nature?: "Pitta (Fiery)" | "Benefic" | "Malefic" | "Neutral (depends on associations)" | "Highly Benefic" | "Shadowy Malefic" | "Shadowy Malefic (Spiritually Benefic)";
  caste?: string;
  dosha?: "Pitta" | "Kapha/Vata" | "Vata" | "Kapha" | "Tridosha (Vata, Pitta, Kapha)" | "Pitta/Vata";
  friendlyPlanets?: string[];
  enemyPlanets?: string[];
  neutralPlanets?: string[];
  exaltedIn?: string | undefined;
  debilitatedIn?: string | undefined;
  ownSign?: string | string[] | undefined; // Allow undefined for Rahu/Ketu
  mooltrikonaSign?: string | undefined; // Allow undefined for Rahu/Ketu
  associatedNakshatras?: string[];
  zodiacInfluence?: ZodiacInfluence;
  durationInSign?: string;
  orbitDuration?: string;
  averageSpeed?: string;
  iconography?: Iconography;
  symbolism?: Symbolism;
  spiritualSignificance?: SpiritualSignificance;
  healingAndRemedies?: HealingAndRemedies;
  healthInfluence?: HealthInfluence;
  psychologicalInfluence?: PsychologicalInfluence;
  culturalAssociations?: CulturalAssociations;
  mythologicalReferences?: MythologicalReferences;
  astroSignificance?: AstroSignificance;
  significance: string;
  description: string;
  emojiIcon?: string;
  imageUrl?: string;
  audioMantraUrl?: string;
}


export interface NavagrahaData {
  navagrahas: Navagraha[];
}


export interface Nakshatra {
  id: string;
  number: number;
  name_sanskrit: string;
  name_english: string;
  symbol_description: string;
  symbol_icon?: LucideIcon;
  deity: string;
  deity_icon?: LucideIcon;
  ruling_planet: string;
  ruling_planet_icon?: LucideIcon;
  zodiac_range: string;
  pada_ranges?: string[];
  guna: "Sattva" | "Rajas" | "Tamas";
  dosha: "Vata" | "Pitta" | "Kapha";
  gender: "Male" | "Female" | "Neutral";
  nature: "Deva (Divine)" | "Manushya (Human)" | "Rakshasa (Demonic)";
  element: "Fire" | "Earth" | "Air" | "Water" | "Ether";
  animal_symbol: string;
  mythological_story?: string;
  spiritual_significance?: string;
  astrological_significance?: string;
  favorable_activities: string[];
  unfavorable_activities?: string[];
  compatibility?: {
    compatible_nakshatras: string[];
    incompatible_nakshatras: string[];
  };
  associated_mantras?: string[];
  yogic_or_spiritual_aspect?: string;
  additional_notes?: string;
  compatibility_insights?: string;
  keywords: string[];
  mythology_origin?: string;
  zodiac_range_vedic?: string;
}

export interface NakshatraData {
  nakshatras: Nakshatra[];
}

// Types for Personalized Horoscope Forecasts
export type ForecastPeriod = "daily" | "weekly" | "monthly";

export type ForecastCategoryType = "Career" | "Finance" | "Relationships" | "Health";

export interface ForecastItem {
  categoryType: ForecastCategoryType;
  prediction: string;
  remedy?: string; // Optional remedy
}

export interface ForecastOutput {
  userId: string;
  date: string; // ISO date string
  period: ForecastPeriod;
  overallHighlight?: string; // e.g., "Positive Day", "Caution Period"
  categories: ForecastItem[];
}

// Types for Panchang Feature
export interface PanchangTime {
  start: string; // "HH:MM"
  end: string;   // "HH:MM"
}

export interface PanchangElement {
  name: string;
  endsAt?: string; // "HH:MM" or full date for multi-day elements
  details?: string;
}

export interface PanchangOutput {
  date: string; // ISO date string for which Panchang is displayed
  location: string; // Location for which Panchang is calculated
  sunrise: string; // "HH:MM AM/PM"
  sunset: string; // "HH:MM AM/PM"
  moonrise: string; // "HH:MM AM/PM"
  moonset: string; // "HH:MM AM/PM"
  tithi: PanchangElement;
  nakshatra: PanchangElement;
  yoga: PanchangElement;
  karana: PanchangElement;
  paksha: "Shukla Paksha" | "Krishna Paksha";
  ritu?: string; // Season
  lunarMonthPurnimanta?: string;
  lunarMonthAmanta?: string;
  vikramSamvat?: number;
  shakaSamvat?: number;
  dayOfWeek?: string; // e.g., "Monday"
  rahukaal: PanchangTime;
  yamaganda: PanchangTime;
  gulikaKaal: PanchangTime;
  abhijitMuhurat?: PanchangTime;
  durMuhurat?: PanchangTime[];
  varjyam?: PanchangTime;
  amritaKalam?: PanchangTime;
  shubhMuhuratNotes?: string[]; // e.g., "Good for starting new ventures"
  asubhMuhuratNotes?: string[]; // e.g., "Avoid important decisions"
  moonPhaseVisual?: string; // Could be a descriptive string like "Waxing Crescent" or an SVG path
  dailyMantra?: string;
  additionalNotes?: string;
}

// Types for Vedic Matchmaking (Gun Milan)
export interface BirthDetailsInput {
  name: string;
  gender: "male" | "female" | "other";
  dateOfBirth: string; // ISO Date string
  timeOfBirth: string; // HH:MM
  placeOfBirth: string;
}

export interface MatchmakingInput {
  person1: BirthDetailsInput;
  person2: BirthDetailsInput;
}

export interface AshtakootItem {
  kootaName: "Varna" | "Vashya" | "Tara" | "Yoni" | "Graha Maitri" | "Gana" | "Bhakoot" | "Nadi";
  obtainedPoints: number;
  maxPoints: number;
  description?: string;
}

export interface ManglikResult {
  isManglik: boolean;
  hasCancellation?: boolean;
  details?: string;
}

export interface MatchmakingOutput {
  person1Name: string;
  person2Name: string;
  totalGunaPoints: number;
  maxGunaPoints: 36;
  ashtakootResults: AshtakootItem[];
  manglikStatusPerson1: ManglikResult;
  manglikStatusPerson2: ManglikResult;
  compatibilitySummary: {
    overall: string;
    emotionalBond?: string;
    communication?: string;
    longevity?: string;
    financialHarmony?: string;
  };
  remedialSuggestions?: string[];
}

// Types for Varshphal (Annual Forecast)
export interface VarshphalBirthDetailsInput {
  name: string;
  gender: "male" | "female" | "other";
  dateOfBirth: string;
  timeOfBirth: string;
  placeOfBirth: string;
}

export interface VarshphalInput extends VarshphalBirthDetailsInput {
  targetYear: number;
  currentLocation?: string; // Optional, for location-specific solar return
}

export interface VarshphalAreaPrediction {
  title: string; // e.g., "Career & Finances", "Relationships & Family"
  prediction: string;
  keyInfluences?: string; // e.g., "Muntha in 10th house, Jupiter aspecting Lagna"
}

export interface SahamPoint {
  name: string; // e.g., "Punya Saham", "Rajya Saham"
  longitude: string; // e.g., "15° Aries 20'"
  interpretation: string;
}

export interface VarshphalOutput {
  userName: string;
  forecastYear: number;
  solarReturnDate?: string; // Date of solar return
  varshLagna?: string; // Ascendant of the solar return chart
  munthaPosition?: string; // e.g., "5th House in Taurus"
  munthaLordEffect?: string;
  tajikaYogas?: string[]; // e.g., ["Ithasala Yoga formed by Sun and Mars"]
  overview: string;
  areaPredictions: VarshphalAreaPrediction[];
  importantPeriods: {
    favorableMonths: string[];
    cautionMonths: string[];
    milestones?: string[];
  };
  sahamPointsAnalysis?: SahamPoint[];
  remedialMeasures?: string[];
}

export interface VarshphalFormState {
  message: string | null;
  issues?: string[];
  fields?: Record<string, string>;
  data?: VarshphalOutput;
}

// Kundli Generation Types
export interface KundliInput {
  name: string;
  gender: "male" | "female" | "other";
  dateOfBirth: string; // ISO Date string
  timeOfBirth: string; // HH:MM
  placeOfBirth: string; // City, Country - will need conversion to lat/long/tz for API
}

export interface PlanetaryPosition {
  planet: string;
  sign: string;
  degrees: string; // e.g., "15°23'45""
  isRetrograde?: boolean;
  house?: number; // Which house the planet is in
}

export interface DashaInfo {
  mahadasha: string;
  mahadashaLord?: string;
  antardasha: string;
  antardashaLord?: string;
  pratyantardasha?: string;
  pratyantardashaLord?: string;
  startDate?: string; // e.g., "YYYY-MM-DD"
  endDate?: string; // e.g., "YYYY-MM-DD"
}

export interface ManglikAnalysis {
    isManglik: boolean;
    description: string;
    basedOn?: string; // e.g., "Lagna Chart", "Moon Chart"
}

export interface KundliOutput {
  name: string;
  dateOfBirth: string; // Formatted for display
  timeOfBirth: string; // Formatted for display
  placeOfBirth: string; // Displayed as entered, or enriched with lat/long
  lagna: string;
  lagnaLord?: string;
  rashi: string;
  rashiLord?: string;
  nakshatra: string;
  nakshatraPada: number;
  nakshatraLord?: string;
  tithi?: string;
  karana?: string;
  yoga?: string;
  sunrise?: string;
  sunset?: string;
  manglikAnalysis?: ManglikAnalysis;
  currentDasha: DashaInfo;
  planetaryPositions: PlanetaryPosition[];
  // Placeholders for SVG chart data or image URLs from API
  lagnaChartSVG?: string;
  moonChartSVG?: string;
  navamsaChartSVG?: string;
  // ... other Kundli details like ayanamsha, etc.
}

export interface KundliFormState {
  message: string | null;
  issues?: string[];
  fields?: Record<string, string>; // For pre-filling form on server validation error
  data?: KundliOutput | null; // To hold the fetched/mocked Kundli data
}


// Dasha Analysis Types
export type DashaLevel = 'Mahadasha' | 'Antardasha' | 'Pratyantardasha';
export type DashaSystem = "Vimshottari" | "Yogini" | "Ashtottari" | "Kalachakra";

export interface DashaPeriod {
  level: DashaLevel;
  planetName: string;
  startDate: string; // ISO Date string
  endDate: string;   // ISO Date string
  duration?: string;  // e.g., "7 Years, 0 Months, 0 Days"
  generalPrediction?: string;
  specificPredictions?: Array<{ category: string; prediction: string }>; // e.g., Career, Health
  remedies?: string[];
  subPeriods?: DashaPeriod[]; // For Antardashas or Pratyantardashas
}

export interface DashaAnalysisOutput {
  userName: string;
  dashaSystem: DashaSystem;
  periods: DashaPeriod[]; // Array of Mahadashas
  birthNakshatra?: string;
  moonLongitude?: string;
}

export interface DashaAnalysisFormState {
  message: string | null;
  issues?: string[];
  fields?: Record<string, string>;
  data?: DashaAnalysisOutput | null;
}

// Types for Real-Time Transit Predictions (Gochar)
export interface TransitBirthDetailsInput {
  name: string;
  gender: "male" | "female" | "other";
  dateOfBirth: string;
  timeOfBirth: string;
  placeOfBirth: string;
}

export interface TransitAnalysisInput extends TransitBirthDetailsInput {
  targetDate: string;
  period: ForecastPeriod;
}

export interface PlanetTransitInfo {
  planetName: string;
  transitingSign: string;
  transitingHouseNatal: string;
  interpretation: string;
  aspects?: string[];
  isRetrograde?: boolean;
  isCombust?: boolean;
}

export interface TransitPredictionOutput {
  userName: string;
  targetDate: string;
  period: ForecastPeriod;
  generalOverview?: string;
  planetTransits: PlanetTransitInfo[];
  highImpactPeriods?: Array<{ period: string; description: string }>;
  remedies?: string[];
}

export interface TransitFormState {
  message: string | null;
  issues?: string[];
  fields?: Record<string, string>;
  data?: TransitPredictionOutput | null;
}

// Types for Numerology Insights
export interface NumerologyInput {
  fullName: string;
  dateOfBirth: string; // ISO Date string
}

export type NumerologyNumberType = "Life Path" | "Destiny" | "Soul Urge" | "Personality";

export interface NumerologyResult {
  type: NumerologyNumberType;
  number: number | string; // Can be string for master numbers like "11", "22"
  interpretation: {
    general: string;
    personality?: string;
    strengths?: string[];
    weaknesses?: string[];
    career?: string;
    relationships?: string;
    spiritual?: string;
  };
}

export interface NumerologyOutput {
  userName: string;
  dateOfBirth: string;
  lifePath: NumerologyResult;
  destinyNumber: NumerologyResult;
  soulUrgeNumber: NumerologyResult;
  personalityNumber: NumerologyResult;
}

export interface NumerologyFormState {
  message: string | null;
  issues?: string[];
  fields?: Record<string, string>; // To prefill form on validation error
  data?: NumerologyOutput | null;
}


// Type for Gunas
export interface ScripturalReference {
  text: string;
  quote: string;
  explanation?: string;
}

export interface GunaDefinition {
  id: string;
  numericalId: number;
  sanskritName: string;
  englishMeaning: string;
  shortDescription: string;
  detailedDescription?: string;
  importance?: string;
  relatedConcepts?: string[];
  practiceMethods?: string[];
  scripturalReferences?: ScripturalReference[];
  effectsOfCultivation?: string[];
  commonMisunderstandings?: string[];
  modernRelevance?: string;
  examplesInDailyLife?: string[];
  icon?: string;
  category?: string;
  tags?: string[];
}

// Type for Shodasha Sanskaras
export type SanskarCategory = "Prenatal" | "Childhood" | "Educational" | "Marriage & Adulthood" | "Last Rites";

export interface SanskarTiming {
  recommendedTime: string; // Can combine age and life conditions here
  astrologicalConditions?: string;
  idealNakshatras?: string[];
  auspiciousOccasions?: string[]; // Added for flexibility
  ceremonyDuration?: string; // Added for Antyeshti
}

export interface SanskarMultimediaResource {
  type: 'image' | 'video';
  url: string;
  caption?: string;
  dataAiHint?: string;
}

export interface Sanskar {
  id: string;
  numericalId: number;
  sanskritName: string; // Format: "Sanskrit (Transliteration)"
  englishName: string;
  stageOfLife: string;
  category: SanskarCategory;
  briefExplanation: string;
  iconName: keyof typeof import('lucide-react');
  detailedDescription?: string;
  purpose?: string;
  timing?: SanskarTiming;
  ritualSteps?: string[];
  symbolism?: string;
  vedicSignificance?: string;
  scripturalReferences?: ScripturalReference[];
  mantraSnippet?: string;
  culturalSignificance?: string;
  practicalRelevance?: string;
  relatedConcepts?: string[];
  multimediaResources?: SanskarMultimediaResource[];
}


// Types for Astrology Courses
export type CourseLevel = "Beginner" | "Intermediate" | "Advanced" | "All Levels";
export type CourseCategory = string;

export type LessonItemType = 'lesson' | 'assignment' | 'quiz' | 'activity' | 'exercise' | 'capstone';

export interface LessonItem {
  id: string;
  title: string;
  summary?: string;
  type: LessonItemType;
  duration?: string;
  content?: string;
  videoUrl?: string;
  resources?: Array<{ name: string; url: string }>;
}
export interface CourseModule {
  id: string;
  week?: number;
  title: string;
  description?: string;
  lessons: LessonItem[];
  assignment?: string;
  quiz?: string;
  activity?: string;
  exercise?: string;
  finalAssignment?: string;
}

export interface InstructorProfile {
  id: string;
  name: string;
  bio: string;
  imageUrl?: string;
  qualifications?: string[];
}

export interface CourseReview {
  id: string;
  userId: string;
  userName: string;
  rating: number; // 1-5
  comment: string;
  date: string; // ISO Date string
}

export interface Course {
  id: string;
  title: string;
  subtitle?: string;
  level: CourseLevel;
  category: CourseCategory;
  duration: string;
  language?: string;
  imageUrl?: string;
  dataAiHint?: string;
  briefDescription: string;
  detailedDescription?: string;
  objectives?: string[];
  keyTopics?: string[];
  prerequisites?: string[];
  syllabus: CourseModule[];
  instructor?: InstructorProfile;
  benefits?: string[];
  certificationCriteria?: string[];
  certificationBadge?: string;
  reviews?: CourseReview[];
  price?: string;
  format?: {
    mode?: string;
    materials?: string[];
  };
  nextCourseRecommendation?: string;
}


export interface AstrologyCourseData {
  courses: Course[];
}


export interface RashiData { // Added this missing export
  rashis: Rashi[];
}

// Vastu Shastra Types
export interface VastuElement {
  name: string;
  sanskritName: string;
  description: string;
  vastuZones?: string;
  iconName: keyof typeof import('lucide-react');
}

export interface VastuDirection {
  name: string;
  sanskritName?: string;
  rulingPlanet?: string;
  rulingDeity?: string;
  bestSuitedFor: string[];
  energyCharacteristics: string;
  iconName: keyof typeof import('lucide-react');
  colorAssociation?: string;
}

export interface RoomGuideline {
  roomName: string;
  idealDirections: string[];
  keyConsiderations: string[];
  iconName: keyof typeof import('lucide-react');
  notes?: string;
}

export interface VastuDosha {
  doshaName: string;
  description: string;
  remedies: string[];
  iconName: keyof typeof import('lucide-react');
}

export interface VastuTip {
  tip: string;
  explanation: string;
  category: "Apartment" | "Multi-Story" | "General Modern" | "Workspace";
  iconName: keyof typeof import('lucide-react');
}

export interface VastuSectionData {
  introduction: string;
  panchaBhootas: VastuElement[];
  directionalScience: VastuDirection[];
  roomPlacementGuidelines: RoomGuideline[];
  vastuForWorkspaces: VastuTip[];
  commonVastuDoshas: VastuDosha[];
  modernVastuTips: VastuTip[];
}

export interface VastuShastraPageContent {
  pageTitle: string;
  pageDescription: string;
  heroIconName: keyof typeof import('lucide-react');
  sections: {
    introduction: { title: string; iconName: keyof typeof import('lucide-react'); content: string };
    panchaBhootas: { title: string; iconName: keyof typeof import('lucide-react'); content: VastuElement[]; description: string };
    directionalScience: { title: string; iconName: keyof typeof import('lucide-react'); content: VastuDirection[]; description: string };
    roomPlacementGuidelines: { title: string; iconName: keyof typeof import('lucide-react'); content: RoomGuideline[]; description: string };
    vastuForWorkspaces: { title: string; iconName: keyof typeof import('lucide-react'); content: VastuTip[]; description: string };
    commonVastuDoshas: { title: string; iconName: keyof typeof import('lucide-react'); content: VastuDosha[]; description: string };
    modernVastuTips: { title: string; iconName: keyof typeof import('lucide-react'); content: VastuTip[]; description: string };
  };
  cta: {
    text: string;
    href?: string;
    note?: string;
  };
}
