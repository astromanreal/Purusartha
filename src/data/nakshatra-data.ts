
// src/data/nakshatra-data.ts
import type { LucideIcon } from 'lucide-react';
import { Sun, Moon, Shield, MessageSquare, GraduationCap, Heart, Hourglass, Orbit, Users, ShieldQuestion, Star, Annoyed, Bone, Gem, Anchor, Aperture, Axe, BadgeIndianRupee, Tent, CloudLightning, Palmtree, Flame, Sparkles, CircleDot, Infinity, Crown, Hotel, Gift, ShieldCheck, Hand, Wind, Network, Flower2, Handshake, Medal, TreeDeciduous, Zap, Fan, Waves, Ear, Drum, Sword, BedDouble } from 'lucide-react';
import type { Nakshatra } from '@/types';

export interface NakshatraData {
  nakshatras: Nakshatra[];
}

// Helper to map planet names to icons
export const getPlanetIcon = (planetName: string): LucideIcon | undefined => {
  switch (planetName.toLowerCase()) {
    case "sun": return Sun;
    case "moon": return Moon;
    case "mars": return Shield;
    case "mercury": return MessageSquare;
    case "jupiter": return GraduationCap;
    case "venus": return Heart;
    case "saturn": return Hourglass;
    case "rahu": return Orbit; // Using Orbit for Rahu
    case "ketu": return Orbit; // Using Orbit for Ketu (can be differentiated if specific icons are chosen later)
    default: return ShieldQuestion;
  }
};

export const nakshatraData: NakshatraData = {
  nakshatras: [
    {
      id: "ashwini",
      number: 1,
      name_sanskrit: "अश्विनी",
      name_english: "Ashwini",
      symbol_description: "Horse's Head",
      symbol_icon: Bone, // Placeholder, could be more specific if an icon for horse head exists
      deity: "Ashwini Kumaras (Divine Twin Horsemen, Physicians of the Gods)",
      deity_icon: Users,
      ruling_planet: "Ketu",
      zodiac_range: "00°00′ Aries - 13°20′ Aries",
      pada_ranges: [
        "Pada 1: 00°00′ - 03°20′ Aries",
        "Pada 2: 03°20′ - 06°40′ Aries",
        "Pada 3: 06°40′ - 10°00′ Aries",
        "Pada 4: 10°00′ - 13°20′ Aries"
      ],
      guna: "Sattva",
      dosha: "Vata",
      gender: "Male",
      nature: "Deva (Divine)",
      element: "Earth",
      animal_symbol: "Horse (Male)",
      mythological_story: "The Ashwini Kumars are the twin sons of the Sun God and are known for their swiftness and healing powers. They represent energy, vigor, and quick action. According to Vedic mythology, they were the physicians of the gods and performed miraculous healings and rescues.",
      spiritual_significance: "Ashwini represents the divine spark of life and healing. It symbolizes initiation, rebirth, and divine service, aligning the soul with vitality and purpose.",
      astrological_significance: "People born under Ashwini Nakshatra are often fast, enthusiastic, spontaneous, and healers by nature. They are pioneers, love challenges, and often take bold actions. They can also be restless and impulsive.",
      favorable_activities: [
        "Starting new ventures",
        "Travel and exploration",
        "Healing practices",
        "Initiating change",
        "Physical exercise or sports"
      ],
      unfavorable_activities: [
        "Long-term commitments without planning",
        "Repetitive or slow tasks",
        "Legal or bureaucratic processes"
      ],
      compatibility: {
        compatible_nakshatras: ["Ashwini", "Bharani", "Pushya", "Hasta"],
        incompatible_nakshatras: ["Mula", "Jyeshtha"]
      },
      associated_mantras: [
        "ॐ अश्विनीकुमाराय नमः",
        "Om Ashwinikumārāya Namah"
      ],
      yogic_or_spiritual_aspect: "Represents the spark of Kundalini rising; ideal for pranayama, dynamic asanas, or initiating sadhana.",
      additional_notes: "Ashwini is ideal for quick action and innovation. However, individuals may need grounding to avoid burnout due to their high energy and fast-paced nature.",
      keywords: ["ashwini", "ashvini", "ketu", "horse", "healing", "beginnings", "aries", "mesha", "ashvini kumaras", "physicians", "swift", "initiation", "quick", "pioneer"],
    },
    {
      id: "bharani",
      number: 2,
      name_sanskrit: "भरणी",
      name_english: "Bharani",
      symbol_description: "Yoni (Female reproductive organ), a boat",
      symbol_icon: Gem, // Yoni can be represented by a precious gem
      deity: "Yama (God of Death and Dharma)",
      deity_icon: Annoyed, // Yama is often depicted as stern
      ruling_planet: "Venus",
      zodiac_range: "13°20′ Aries - 26°40′ Aries",
      pada_ranges: [
        "Pada 1: 13°20′ - 16°40′ Aries",
        "Pada 2: 16°40′ - 20°00′ Aries",
        "Pada 3: 20°00′ - 23°20′ Aries",
        "Pada 4: 23°20′ - 26°40′ Aries"
      ],
      guna: "Rajas",
      dosha: "Pitta",
      gender: "Female",
      nature: "Manushya (Human)",
      element: "Earth",
      animal_symbol: "Elephant (Female)",
      mythological_story: "Bharani is ruled by Yama, the god of death, who is also the enforcer of dharma (cosmic law). This Nakshatra represents the cycle of life and death, transformation, and the passage of the soul. Yama's presence symbolizes the importance of moral responsibility and the inevitable consequences of actions.",
      spiritual_significance: "Bharani represents the sacred power of creation and the ability to endure transformation. It is connected with spiritual rebirth, letting go of past karmas, and fulfilling one's dharma.",
      astrological_significance: "Individuals born under Bharani are strong-willed, intense, passionate, and capable of handling responsibility. They may also experience internal struggle between indulgence and restraint. This nakshatra gives a mix of nurturing and discipline.",
      favorable_activities: [
        "Creative arts",
        "Transformative rituals",
        "Marriage and union",
        "Releasing negativity",
        "Justice or dharmic efforts"
      ],
      unfavorable_activities: [
        "Casual or superficial commitments",
        "Unethical actions",
        "Warfare or destruction"
      ],
      compatibility: {
        compatible_nakshatras: ["Bharani", "Ashwini", "Rohini", "Purva Phalguni"],
        incompatible_nakshatras: ["Magha", "Jyeshtha"]
      },
      associated_mantras: [
        "ॐ यमाय नमः",
        "Om Yamāya Namah"
      ],
      yogic_or_spiritual_aspect: "Represents the womb of transformation; ideal for shadow work, mantra sadhana, and kriya practices.",
      additional_notes: "Bharani natives often deal with themes of life, death, and morality. Their power lies in transformation and endurance, and they are deeply connected to karma and its resolution.",
      keywords: ["bharani", "venus", "shukra", "yama", "yoni", "boat", "transformation", "death", "renewal", "aries", "mesha", "elephant", "creation", "discipline", "intense", "passion"],
    },
    {
      id: "krittika",
      number: 3,
      name_sanskrit: "कृत्तिका",
      name_english: "Krittika",
      symbol_description: "Knife, flame, or a razor",
      symbol_icon: Axe, // Axe or knife
      deity: "Agni (God of Fire)",
      deity_icon: Flame,
      ruling_planet: "Sun",
      zodiac_range: "26°40′ Aries - 10°00′ Taurus",
      pada_ranges: [
        "Pada 1: 26°40′ Aries - 30°00′ Aries",
        "Pada 2: 00°00′ Taurus - 03°20′ Taurus",
        "Pada 3: 03°20′ Taurus - 06°40′ Taurus",
        "Pada 4: 06°40′ Taurus - 10°00′ Taurus"
      ],
      guna: "Rajas",
      dosha: "Pitta",
      gender: "Male",
      nature: "Rakshasa (Demonic)",
      element: "Fire",
      animal_symbol: "Female Sheep",
      mythological_story: "Krittika is associated with Agni, the god of fire and transformation, symbolizing purification and the power to cut through ignorance. The Nakshatra is named after the Krittikas, the six sisters who nurtured Lord Kartikeya (Skanda), the god of war and victory.",
      spiritual_significance: "Krittika symbolizes the burning away of impurities, spiritual cleansing, and inner strength. It encourages courage, discipline, and the pursuit of truth.",
      astrological_significance: "People born under Krittika are often ambitious, courageous, sharp-minded, and disciplined. They have a strong desire for success and are natural leaders. However, they may also be critical or impatient.",
      favorable_activities: [
        "Leadership roles",
        "Starting competitive ventures",
        "Discipline-based activities",
        "Spiritual cleansing rituals",
        "Fire ceremonies (Homas)"
      ],
      unfavorable_activities: [
        "Avoid laziness or procrastination",
        "Avoid impulsiveness without planning"
      ],
      compatibility: {
        compatible_nakshatras: ["Krittika", "Rohini", "Mrigashira", "Swati"],
        incompatible_nakshatras: ["Mula", "Ashlesha"]
      },
      associated_mantras: [
        "ॐ अग्नये नमः",
        "Om Agnaye Namah"
      ],
      yogic_or_spiritual_aspect: "Represents the purifying fire within; suited for tapas, heat-generating pranayama, and mantra chanting focused on Agni.",
      additional_notes: "Krittika natives are known for their strong will and leadership qualities but must learn patience and compassion to balance their fiery nature.",
      keywords: ["krittika", "sun", "surya", "agni", "knife", "flame", "razor", "purification", "aries", "taurus", "kartikeya", "leadership", "discipline", "pleiades", "mesha", "vrishabha", "sheep", "ambition", "courage"],
    },
    {
      id: "rohini",
      number: 4,
      name_sanskrit: "रोहिणी",
      name_english: "Rohini",
      symbol_description: "Chariot, Ox Cart, or a Banyan Tree",
      symbol_icon: Tent, // Chariot/Cart
      deity: "Brahma (The Creator)",
      deity_icon: Sparkles, // Brahma as creator
      ruling_planet: "Moon",
      zodiac_range: "10°00′ Taurus - 23°20′ Taurus",
      pada_ranges: [
        "Pada 1: 10°00′ - 13°20′ Taurus",
        "Pada 2: 13°20′ - 16°40′ Taurus",
        "Pada 3: 16°40′ - 20°00′ Taurus",
        "Pada 4: 20°00′ - 23°20′ Taurus"
      ],
      guna: "Sattva",
      dosha: "Kapha",
      gender: "Female",
      nature: "Deva (Divine)",
      element: "Earth",
      animal_symbol: "Serpent",
      mythological_story: "Rohini is the favorite consort of the Moon God (Chandra) and symbolizes fertility, growth, and creativity. It is associated with the nurturing aspect of nature and the creative power of Brahma, the creator of the universe.",
      spiritual_significance: "Rohini represents abundance, fertility, creativity, and artistic talents. It signifies nurturing of life and spiritual growth through creativity and beauty.",
      astrological_significance: "Individuals born under Rohini tend to be charming, creative, sensual, and emotionally expressive. They often possess artistic talents and a love for comfort and luxury.",
      favorable_activities: [
        "Artistic endeavors",
        "Farming and gardening",
        "Music and dance",
        "Social gatherings",
        "Starting family or nurturing relationships"
      ],
      unfavorable_activities: [
        "Risk-taking ventures",
        "Neglecting responsibilities",
        "Conflicts or confrontations"
      ],
      compatibility: {
        compatible_nakshatras: ["Rohini", "Mrigashira", "Pushya"],
        incompatible_nakshatras: ["Ashwini", "Hasta"]
      },
      associated_mantras: [
        "ॐ ब्रह्मणे नमः",
        "Om Brahmane Namah"
      ],
      yogic_or_spiritual_aspect: "Ideal for meditation on growth and abundance; supports gentle pranayama and restorative asanas.",
      additional_notes: "Rohini natives often have a magnetic charm and strong emotional nature. Their growth is nurtured by stable, harmonious surroundings.",
      keywords: ["rohini", "moon", "chandra", "brahma", "chariot", "ox cart", "banyan tree", "fertility", "growth", "taurus", "vrishabha", "serpent", "abundance", "creativity", "charming", "artistic"],
    },
    {
      id: "mrigashira",
      number: 5,
      name_sanskrit: "मृगशीर्ष",
      name_english: "Mrigashira",
      symbol_description: "Deer's Head or Antelope's Head",
      symbol_icon: Aperture, // Deer's head/Antlers
      deity: "Soma (Moon God)",
      deity_icon: Moon,
      ruling_planet: "Mars",
      zodiac_range: "23°20′ Taurus - 06°40′ Gemini",
      pada_ranges: [
        "Pada 1: 23°20′ - 26°40′ Taurus",
        "Pada 2: 26°40′ - 30°00′ Taurus",
        "Pada 3: 00°00′ - 03°20′ Gemini",
        "Pada 4: 03°20′ - 06°40′ Gemini"
      ],
      guna: "Rajas",
      dosha: "Vata",
      gender: "Neutral",
      nature: "Deva (Divine)",
      element: "Earth",
      animal_symbol: "Deer",
      mythological_story: "Mrigashira is ruled by Soma, the Moon God who represents the elixir of life and nourishment. This nakshatra symbolizes the restless search for knowledge, beauty, and spiritual truth, just like a deer searching for water.",
      spiritual_significance: "Mrigashira signifies curiosity, exploration, and the quest for spiritual and material knowledge. It encourages adaptability and seeking higher truth.",
      astrological_significance: "People born under Mrigashira are usually curious, adaptable, sociable, and sometimes restless. They love learning, exploration, and often have a gentle, charming nature.",
      favorable_activities: [
        "Learning and education",
        "Travel and exploration",
        "Spiritual quests",
        "Creative arts",
        "Communication and networking"
      ],
      unfavorable_activities: [
        "Restlessness leading to indecision",
        "Overcommitting or lack of focus"
      ],
      compatibility: {
        compatible_nakshatras: ["Mrigashira", "Rohini", "Ardra", "Punarvasu"],
        incompatible_nakshatras: ["Ashlesha", "Jyeshtha"]
      },
      associated_mantras: [
        "ॐ सोमाय नमः",
        "Om Somāya Namah"
      ],
      yogic_or_spiritual_aspect: "Ideal for meditation on openness and exploration; supports pranayama and asanas that promote flexibility and alertness.",
      additional_notes: "Mrigashira natives often have a dual nature — both gentle and restless. Cultivating focus and grounding helps balance their innate curiosity.",
      keywords: ["mrigashira", "mrigasira", "mars", "mangala", "soma", "moon", "deer's head", "antelope's head", "curiosity", "exploration", "taurus", "gemini", "vrishabha", "mithuna", "search", "knowledge", "adaptable", "gentle"],
    },
    {
      id: "ardra",
      number: 6,
      name_sanskrit: "आर्द्रा",
      name_english: "Ardra",
      symbol_description: "Tear Drop or Diamond",
      symbol_icon: Gem, // Diamond
      deity: "Rudra (Fierce Form of Shiva)",
      deity_icon: Zap, // Rudra - storm/fierce
      ruling_planet: "Rahu",
      zodiac_range: "06°40′ Gemini - 20°00′ Gemini",
      pada_ranges: [
        "Pada 1: 06°40′ - 10°00′ Gemini",
        "Pada 2: 10°00′ - 13°20′ Gemini",
        "Pada 3: 13°20′ - 16°40′ Gemini",
        "Pada 4: 16°40′ - 20°00′ Gemini"
      ],
      guna: "Tamas",
      dosha: "Vata",
      gender: "Male",
      nature: "Manushya (Human)",
      element: "Water",
      animal_symbol: "Dog",
      mythological_story: "Ardra is associated with Rudra, the fierce storm god and a form of Lord Shiva. It represents transformation, destruction of evil, and the cleansing power of storms.",
      spiritual_significance: "Symbolizes emotional purification, inner turmoil leading to transformation, and the release of negative patterns.",
      astrological_significance: "Ardra natives are intense, intelligent, and often go through emotional or life-altering transformations. They are investigative and drawn to the mysteries of life.",
      favorable_activities: [
        "Research and analysis",
        "Psychological or investigative work",
        "Breaking old habits",
        "Spiritual transformation practices"
      ],
      unfavorable_activities: [
        "Initiating sensitive discussions",
        "Long-term commitments",
        "Emotional decisions"
      ],
      compatibility: {
        compatible_nakshatras: ["Ashlesha", "Mrigashira", "Rohini"],
        incompatible_nakshatras: ["Magha", "Purva Bhadrapada"]
      },
      associated_mantras: [
        "ॐ नमः शिवाय",
        "Om Namah Shivaya"
      ],
      yogic_or_spiritual_aspect: "Encourages intense pranayama, self-inquiry, and meditation focused on release and transformation.",
      additional_notes: "Ardra is a powerful nakshatra for those who embrace transformation and seek truth, even through difficulty. It reflects the spiritual path of purification through storms.",
      keywords: ["ardra", "thiruvathirai", "rahu", "rudra", "shiva", "teardrop", "diamond", "gemini", "mithuna", "dog", "storm", "transformation", "purification", "intense", "investigative"],
    },
    {
      id: "punarvasu",
      number: 7,
      name_sanskrit: "पुनर्वसु",
      name_english: "Punarvasu",
      symbol_description: "Bow and Quiver",
      symbol_icon: Anchor, // Bow or quiver
      deity: "Aditi (Mother of the Gods)",
      deity_icon: BadgeIndianRupee, // Aditi as mother/abundance
      ruling_planet: "Jupiter",
      zodiac_range: "20°00′ Gemini - 03°20′ Cancer",
      pada_ranges: [
        "Pada 1: 20°00′ - 23°20′ Gemini",
        "Pada 2: 23°20′ - 26°40′ Gemini",
        "Pada 3: 26°40′ - 30°00′ Gemini",
        "Pada 4: 00°00′ - 03°20′ Cancer"
      ],
      guna: "Sattva",
      dosha: "Kapha",
      gender: "Female",
      nature: "Deva (Divine)",
      element: "Water",
      animal_symbol: "Cat",
      mythological_story: "Punarvasu is ruled by Aditi, the mother of gods, representing renewal, fertility, and endless blessings. The nakshatra symbolizes return, restoration, and rebirth after difficulties.",
      spiritual_significance: "This nakshatra signifies hope, rejuvenation, and new beginnings. It encourages forgiveness, compassion, and optimism.",
      astrological_significance: "People born under Punarvasu are usually optimistic, adaptable, nurturing, and have a strong spiritual inclination. They tend to bounce back from adversity and inspire others.",
      favorable_activities: [
        "Teaching and mentoring",
        "Healing and nurturing professions",
        "Starting new ventures",
        "Spiritual retreats and meditation"
      ],
      unfavorable_activities: [
        "Avoid stubbornness",
        "Avoid neglecting details"
      ],
      compatibility: {
        compatible_nakshatras: ["Punarvasu", "Pushya", "Ashlesha", "Uttara Phalguni"],
        incompatible_nakshatras: ["Ardra", "Magha"]
      },
      associated_mantras: [
        "ॐ आदित्याय नमः",
        "Om Adityāya Namah"
      ],
      yogic_or_spiritual_aspect: "Ideal for meditations on renewal and compassion; supports pranayama and asanas that encourage calmness and balance.",
      additional_notes: "Punarvasu natives possess a resilient spirit and a nurturing heart, often acting as healers or teachers.",
      keywords: ["punarvasu", "jupiter", "guru", "aditi", "bow", "quiver", "renewal", "gemini", "cancer", "mithuna", "karka", "cat", "hope", "rejuvenation", "optimistic", "nurturing"],
    },
    {
      id: "pushya",
      number: 8,
      name_sanskrit: "पुष्य",
      name_english: "Pushya",
      symbol_description: "Udder of a Cow, Flower, or Circle",
      symbol_icon: CircleDot, // Flower or circle
      deity: "Brihaspati (Guru of the Gods)",
      deity_icon: GraduationCap,
      ruling_planet: "Saturn",
      zodiac_range: "03°20′ Cancer - 16°40′ Cancer",
      pada_ranges: [
        "Pada 1: 03°20′ - 06°40′ Cancer",
        "Pada 2: 06°40′ - 10°00′ Cancer",
        "Pada 3: 10°00′ - 13°20′ Cancer",
        "Pada 4: 13°20′ - 16°40′ Cancer"
      ],
      guna: "Sattva",
      dosha: "Kapha",
      gender: "Male",
      nature: "Deva (Divine)",
      element: "Water",
      animal_symbol: "Goat",
      mythological_story: "Pushya is governed by Brihaspati, the divine teacher and priest of the gods, representing wisdom, nourishment, and divine blessings. The cow's udder symbolizes nourishing qualities, both physical and spiritual.",
      spiritual_significance: "Pushya represents spiritual growth, charity, and the nourishing of society through righteous actions and wisdom.",
      astrological_significance: "Natives of Pushya are disciplined, wise, caring, and dutiful. They are often drawn to service, teaching, and spiritual leadership.",
      favorable_activities: [
        "Teaching and advising",
        "Religious rituals and worship",
        "Charity and selfless service",
        "Starting long-term ventures",
        "Meditation and introspection"
      ],
      unfavorable_activities: [
        "Aggressive business competition",
        "Breaking commitments"
      ],
      compatibility: {
        compatible_nakshatras: ["Pushya", "Punarvasu", "Uttara Phalguni", "Hasta"],
        incompatible_nakshatras: ["Ardra", "Magha", "Bharani"]
      },
      associated_mantras: [
        "ॐ बृहस्पतये नमः",
        "Om Brihaspataye Namah"
      ],
      yogic_or_spiritual_aspect: "Excellent for seated meditation, Jnana Yoga (Path of Knowledge), and Karma Yoga (Path of Selfless Action). Promotes disciplined sadhana.",
      additional_notes: "Pushya is considered one of the most auspicious nakshatras for spiritual activities and beginning sacred rituals. Known as the 'Nourisher' of the zodiac.",
      keywords: ["pushya", "pushyami", "saturn", "shani", "brihaspati", "guru", "udder", "flower", "circle", "nourishment", "cancer", "karka", "goat", "wisdom", "charity", "spiritual growth", "auspicious"]
    },
    {
      id: "ashlesha",
      number: 9,
      name_sanskrit: "आश्लेषा",
      name_english: "Ashlesha",
      symbol_description: "Coiled Serpent",
      symbol_icon: Infinity, // Coiled serpent
      deity: "Nagas (Serpent Deities)",
      deity_icon: Users, // Nagas as a group
      ruling_planet: "Mercury",
      zodiac_range: "16°40′ Cancer - 30°00′ Cancer",
      pada_ranges: [
        "Pada 1: 16°40′ - 20°00′ Cancer",
        "Pada 2: 20°00′ - 23°20′ Cancer",
        "Pada 3: 23°20′ - 26°40′ Cancer",
        "Pada 4: 26°40′ - 30°00′ Cancer"
      ],
      guna: "Tamas",
      dosha: "Kapha",
      gender: "Female",
      nature: "Rakshasa (Demonic)",
      element: "Water",
      animal_symbol: "Cat",
      mythological_story: "Ashlesha is ruled by the Nagas — ancient serpent beings symbolizing occult wisdom, secrecy, and kundalini energy. This nakshatra is linked with transformation and hidden knowledge.",
      spiritual_significance: "Ashlesha represents the coiled power of kundalini and the inner serpent that guards spiritual secrets. It can be a gateway to mystical insight when handled with integrity.",
      astrological_significance: "People born under Ashlesha are often intuitive, mysterious, persuasive, and intellectually sharp. They may be prone to emotional intensity and deep psychological insight.",
      favorable_activities: [
        "Psychological research",
        "Occult studies and tantra",
        "Healing work and medicine",
        "Strategic planning and negotiations"
      ],
      unfavorable_activities: [
        "Dishonesty or manipulation",
        "Breaking trust or harming others emotionally"
      ],
      compatibility: {
        compatible_nakshatras: ["Ashlesha", "Revati", "Jyeshtha", "Anuradha"],
        incompatible_nakshatras: ["Pushya", "Uttara Ashadha"]
      },
      associated_mantras: [
        "ॐ नागाय नमः",
        "Om Nāgāya Namah"
      ],
      yogic_or_spiritual_aspect: "Powerful for kundalini yoga, inner transformation, deep meditation, and mantra sadhana. Promotes shedding of old patterns.",
      additional_notes: "Ashlesha natives often experience internal dualities. Their power lies in emotional control and self-mastery. This nakshatra is intense but spiritually potent.",
      keywords: ["ashlesha", "ayilyam", "mercury", "budha", "nagas", "serpent", "coiled serpent", "occult", "transformation", "cancer", "karka", "cat", "intuitive", "mysterious", "kundalini", "infinity coil"],
    },
    {
      id: "magha",
      number: 10,
      name_sanskrit: "मघा",
      name_english: "Magha",
      symbol_description: "Throne or Royal Chamber",
      symbol_icon: Crown, // Throne
      deity: "Pitrs (Ancestors)",
      deity_icon: Users, // Pitrs as a group
      ruling_planet: "Ketu",
      zodiac_range: "00°00′ Leo - 13°20′ Leo",
      pada_ranges: [
        "Pada 1: 00°00′ - 03°20′ Leo",
        "Pada 2: 03°20′ - 06°40′ Leo",
        "Pada 3: 06°40′ - 10°00′ Leo",
        "Pada 4: 10°00′ - 13°20′ Leo"
      ],
      guna: "Tamas",
      dosha: "Pitta",
      gender: "Male",
      nature: "Rakshasa (Demonic)",
      element: "Fire",
      animal_symbol: "Male Rat",
      mythological_story: "Magha is ruled by the Pitrs (ancestral spirits), symbolizing heritage, lineage, tradition, and pride in one’s roots. It represents the Kshatriya (royal) energy that sustains dharma.",
      spiritual_significance: "This nakshatra represents the importance of honoring ancestors, living with dignity, and carrying forward traditions. It empowers leadership guided by spiritual awareness.",
      astrological_significance: "Magha natives are regal, authoritative, tradition-bound, and ambitious. They often inherit ancestral wisdom and value social status, power, and cultural legacy.",
      favorable_activities: [
        "Performing ancestral rites",
        "Political and leadership roles",
        "Cultural ceremonies",
        "Family lineage research"
      ],
      unfavorable_activities: [
        "Rebellion against righteous authority",
        "Ignoring spiritual traditions"
      ],
      compatibility: {
        compatible_nakshatras: ["Magha", "Purva Phalguni", "Mula", "Ashwini"],
        incompatible_nakshatras: ["Pushya", "Ashlesha"]
      },
      associated_mantras: [
        "ॐ पितृभ्यो नमः",
        "Om Pitṛbhyo Namah"
      ],
      yogic_or_spiritual_aspect: "Ideal for ancestor worship, Karma Yoga, and meditative practices that focus on divine authority and surrender. Good for invoking the blessings of lineage.",
      additional_notes: "Magha signifies material success and spiritual responsibility. It grants power, but also demands reverence for dharma and ancestry.",
      keywords: ["magha", "makam", "ketu", "pitrs", "ancestors", "throne", "royal chamber", "leo", "simha", "rat", "regal", "authority", "tradition", "heritage", "leadership"]
    },
    {
      id: "purva-phalguni",
      number: 11,
      name_sanskrit: "पूर्व फाल्गुनी",
      name_english: "Purva Phalguni",
      symbol_description: "Hammock or Front Legs of a Bed",
      symbol_icon: Hotel, // Bed/Hammock
      deity: "Bhaga (God of Fortune and Marital Bliss)",
      deity_icon: Gift, // Bhaga as fortune/bliss
      ruling_planet: "Venus",
      zodiac_range: "13°20′ Leo - 26°40′ Leo",
      pada_ranges: [
        "Pada 1: 13°20′ - 16°40′ Leo",
        "Pada 2: 16°40′ - 20°00′ Leo",
        "Pada 3: 20°00′ - 23°20′ Leo",
        "Pada 4: 23°20′ - 26°40′ Leo"
      ],
      guna: "Rajas",
      dosha: "Pitta",
      gender: "Female",
      nature: "Manushya (Human)",
      element: "Fire",
      animal_symbol: "Female Rat",
      mythological_story: "Presided over by Bhaga, the deity of love, fortune, and sensual pleasures, Purva Phalguni is associated with luxury, relaxation, relationships, and celebration of life.",
      spiritual_significance: "Purva Phalguni encourages the enjoyment of life’s pleasures while maintaining a connection to divine love and inner harmony. It supports creativity, romance, and the arts.",
      astrological_significance: "Natives of this nakshatra are charismatic, romantic, sociable, and artistic. They value comfort, beauty, and joyful relationships, often excelling in performance or creative roles.",
      favorable_activities: [
        "Weddings and romantic unions",
        "Artistic performances and music",
        "Parties and social gatherings",
        "Leisure and relaxation",
        "Beautification and self-care"
      ],
      unfavorable_activities: [
        "Overindulgence",
        "Irresponsible financial behavior",
        "Avoiding duties or commitments"
      ],
      compatibility: {
        compatible_nakshatras: ["Uttara Phalguni", "Rohini", "Hasta", "Swati"],
        incompatible_nakshatras: ["Ashlesha", "Magha"]
      },
      associated_mantras: [
        "ॐ भगाय नमः",
        "Om Bhāgāya Namah"
      ],
      yogic_or_spiritual_aspect: "Supports Bhakti Yoga and aesthetic expressions of devotion. Excellent for mantra chanting, music meditation, and relationship healing practices.",
      additional_notes: "This nakshatra shines in matters of love, union, and the creative arts. It symbolizes the sweet beginning of relationships and life's pleasures before responsibility sets in.",
      keywords: ["purva phalguni", "pooradam", "pubba", "venus", "shukra", "bhaga", "hammock", "bed", "leo", "simha", "rat", "fortune", "love", "pleasure", "artistic", "romantic", "sociable"],
    },
    {
      id: "uttara-phalguni",
      number: 12,
      name_sanskrit: "उत्तर फाल्गुनी",
      name_english: "Uttara Phalguni",
      symbol_description: "Back Legs of a Bed or Hammock",
      symbol_icon: Hotel, // Bed/Hammock
      deity: "Aryaman (God of Contracts and Nobility)",
      deity_icon: ShieldCheck, // Aryaman as contracts/nobility
      ruling_planet: "Sun",
      zodiac_range: "26°40′ Leo - 10°00′ Virgo",
      pada_ranges: [
        "Pada 1: 26°40′ Leo - 30°00′ Leo",
        "Pada 2: 00°00′ Virgo - 03°20′ Virgo",
        "Pada 3: 03°20′ Virgo - 06°40′ Virgo",
        "Pada 4: 06°40′ Virgo - 10°00′ Virgo"
      ],
      guna: "Rajas",
      dosha: "Vata",
      gender: "Male",
      nature: "Manushya (Human)",
      element: "Earth",
      animal_symbol: "Male Cow",
      mythological_story: "Uttara Phalguni is ruled by Aryaman, a solar deity responsible for upholding societal contracts, marriage, friendships, and beneficent alliances. It continues the themes of joy and union started by Purva Phalguni, but with more responsibility.",
      spiritual_significance: "Symbolizes sacred partnerships, noble action, and social responsibility. It supports long-term stability through righteous deeds and mutual agreements.",
      astrological_significance: "Natives are generous, principled, and responsible. They make excellent leaders, healers, and counselors, with a strong sense of fairness and service.",
      favorable_activities: [
        "Signing agreements or partnerships",
        "Marriage ceremonies",
        "Starting long-term ventures",
        "Charity and social service",
        "Educational pursuits"
      ],
      unfavorable_activities: [
        "Breaking commitments",
        "Acting dishonorably or selfishly"
      ],
      compatibility: {
        compatible_nakshatras: ["Hasta", "Rohini", "Pushya", "Purva Phalguni"],
        incompatible_nakshatras: ["Bharani", "Ashlesha"]
      },
      associated_mantras: [
        "ॐ अर्यमणे नमः",
        "Om Aryamane Namah"
      ],
      yogic_or_spiritual_aspect: "Encourages Karma Yoga and Dharma-based relationships. Suitable for meditations focused on gratitude, commitment, and spiritual contracts.",
      additional_notes: "Uttara Phalguni balances love with duty, emphasizing responsible joy. It is auspicious for forging long-lasting, spiritually aligned partnerships.",
      keywords: ["uttara phalguni", "uthiram", "sun", "surya", "aryaman", "bed", "hammock", "leo", "virgo", "simha", "kanya", "cow", "contracts", "nobility", "responsibility", "generous", "principled"],
    },
    {
      id: "hasta",
      number: 13,
      name_sanskrit: "हस्त",
      name_english: "Hasta",
      symbol_description: "Hand or Fist",
      symbol_icon: Hand,
      deity: "Savitar (Form of the Sun God)",
      deity_icon: Sun,
      ruling_planet: "Moon",
      zodiac_range: "10°00′ Virgo - 23°20′ Virgo",
      pada_ranges: [
          "Pada 1: 10°00′ Virgo - 13°20′ Virgo",
          "Pada 2: 13°20′ Virgo - 16°40′ Virgo",
          "Pada 3: 16°40′ Virgo - 20°00′ Virgo",
          "Pada 4: 20°00′ Virgo - 23°20′ Virgo"
      ],
      guna: "Rajas",
      dosha: "Kapha", // Corrected from Vata based on some sources, Kapha seems more common. If Vata is preferred, it can be changed.
      gender: "Male",
      nature: "Deva (Divine)",
      element: "Earth",
      animal_symbol: "Female Buffalo",
      mythological_story: "Hasta is ruled by Savitar, the creative and benevolent solar deity associated with illumination, craftsmanship, and skillful use of the hands. It is linked to actions performed through precision and intellect.",
      spiritual_significance: "Symbolizes manifestation through the hands, divine blessings, and creative productivity. It supports practices involving mudras, rituals, and healing touch.",
      astrological_significance: "Natives are skillful, dexterous, clever, and helpful. They often succeed in occupations involving writing, healing, handiwork, or commerce. They have quick minds and active hands.",
      favorable_activities: [
        "Healing practices and hand-based work",
        "Craftsmanship and artistry",
        "Teaching and writing",
        "Business negotiations",
        "Mantra and spiritual sadhana"
      ],
      unfavorable_activities: [
        "Deceitful actions",
        "Unethical trade",
        "Overworking the body or mind"
      ],
      compatibility: {
        compatible_nakshatras: ["Uttara Phalguni", "Rohini", "Swati"],
        incompatible_nakshatras: ["Magha", "Ashlesha"]
      },
      associated_mantras: ["ॐ सवित्रे नमः", "Om Savitre Namah"],
      yogic_or_spiritual_aspect: "Excellent for karma yoga, hand-based spiritual practices, and detailed devotional work. Promotes meditation through mudras and precise breathing.",
      additional_notes: "Hasta embodies the power of manifestation, skilled effort, and divine blessings. It encourages using one's talents to uplift others while staying grounded and mindful.",
      keywords: ["hasta", "atham", "moon", "chandra", "savitar", "sun", "hand", "fist", "skill", "craftsmanship", "virgo", "kanya", "buffalo", "healing", "manifestation", "practical", "resourceful", "dexterous"],
    },
    {
      id: "chitra",
      number: 14,
      name_sanskrit: "चित्रा",
      name_english: "Chitra",
      symbol_description: "Bright Jewel or Pearl",
      symbol_icon: Gem,
      deity: "Tvashtar (Divine Architect and Craftsman)",
      deity_icon: Axe, // Tvashtar as craftsman
      ruling_planet: "Mars",
      zodiac_range: "23°20′ Virgo - 06°40′ Libra",
      pada_ranges: [
        "Pada 1: 23°20′ - 26°40′ Virgo",
        "Pada 2: 26°40′ - 30°00′ Virgo",
        "Pada 3: 00°00′ - 03°20′ Libra",
        "Pada 4: 03°20′ - 06°40′ Libra"
      ],
      guna: "Rajas", // Was Tamas, corrected to Rajas as more common
      dosha: "Pitta",
      gender: "Male", // Was Female, common sources point to Male or Neutral; keeping Male for now
      nature: "Rakshasa (Demonic)",
      element: "Fire", // Was Air, common sources point to Fire; keeping Fire
      animal_symbol: "Female Tiger",
      mythological_story: "Chitra is governed by Tvashtar, the celestial craftsman and architect who creates divine weapons and cosmic designs. This nakshatra embodies creativity, beauty, and transformative power.",
      spiritual_significance: "Represents the inner creative spark and the power to manifest beauty and order from chaos. Encourages artistic pursuits and self-transformation.",
      astrological_significance: "Natives are charismatic, creative, and strong-willed. They often have talents in arts, architecture, design, and leadership roles requiring innovation.",
      favorable_activities: [
        "Artistic creation and design",
        "Craftsmanship and innovation",
        "Leadership and strategic planning",
        "Physical training and martial arts"
      ],
      unfavorable_activities: [
        "Impulsiveness",
        "Aggression without control",
        "Neglecting spiritual growth"
      ],
      compatibility: {
        compatible_nakshatras: ["Swati", "Hasta", "Anuradha"],
        incompatible_nakshatras: ["Ashlesha", "Magha"]
      },
      associated_mantras: [
        "ॐ त्वष्ट्रे नमः",
        "Om Tvashtre Namah"
      ],
      yogic_or_spiritual_aspect: "Supports kriya yoga and creative meditation techniques. Useful for those working on transforming inner and outer realities through disciplined effort.",
      additional_notes: "Chitra is a powerful nakshatra for those seeking to express unique creativity combined with inner strength and resilience.",
      keywords: ["chitra", "chithirai", "mars", "mangala", "tvashtar", "vishwakarma", "jewel", "pearl", "virgo", "libra", "kanya", "tula", "tiger", "creativity", "architecture", "design", "craftsmanship", "beauty"],
    },
    {
      id: "swati",
      number: 15,
      name_sanskrit: "स्वाति",
      name_english: "Swati",
      symbol_description: "Young Plant Shoot or Coral",
      symbol_icon: Palmtree, // Plant shoot
      deity: "Vayu (God of Wind)",
      deity_icon: Wind,
      ruling_planet: "Rahu",
      zodiac_range: "06°40′ Libra - 20°00′ Libra",
      pada_ranges: [
        "Pada 1: 06°40′ - 10°00′ Libra",
        "Pada 2: 10°00′ - 13°20′ Libra",
        "Pada 3: 13°20′ - 16°40′ Libra",
        "Pada 4: 16°40′ - 20°00′ Libra"
      ],
      guna: "Rajas", // Was Tamas, corrected to Rajas
      dosha: "Vata", // Was Kapha, corrected to Vata
      gender: "Male", // Was Female, corrected to Male
      nature: "Deva (Divine)",
      element: "Air",
      animal_symbol: "Buffalo",
      mythological_story: "Swati is ruled by Vayu, the wind god, symbolizing freedom, movement, and independence. This nakshatra is associated with flexibility, adaptability, and the power of subtle forces.",
      spiritual_significance: "Represents the breath of life and the subtle energies that move the universe. Encourages detachment, balance, and spiritual freedom.",
      astrological_significance: "Natives are independent, diplomatic, intelligent, and adaptable. They excel in communication, travel, and spiritual pursuits that require flexibility.",
      favorable_activities: [
        "Travel and exploration",
        "Diplomatic and mediation roles",
        "Spiritual practices focusing on breath and prana",
        "Artistic and creative endeavors"
      ],
      unfavorable_activities: [
        "Restlessness",
        "Indecisiveness",
        "Over-dependence on others"
      ],
      compatibility: {
        compatible_nakshatras: ["Hasta", "Anuradha", "Purva Phalguni"],
        incompatible_nakshatras: ["Ashlesha", "Magha"]
      },
      associated_mantras: [
        "ॐ वायवे नमः",
        "Om Vāyave Namah"
      ],
      yogic_or_spiritual_aspect: "Excellent for pranayama, breath control, and meditation techniques that emphasize flow and movement of subtle energies.",
      additional_notes: "Swati symbolizes freedom and independence, urging individuals to find balance in movement and stillness both physically and spiritually.",
      keywords: ["swati", "rahu", "vayu", "wind", "plant shoot", "coral", "libra", "tula", "buffalo", "independence", "diplomacy", "flexibility", "balance", "freedom"],
    },
    {
      id: "vishakha",
      number: 16,
      name_sanskrit: "विशाखा",
      name_english: "Vishakha",
      symbol_description: "Triumphal Arch or Forked Branch",
      symbol_icon: Network, // Forked Branch/Arch
      deity: "Indra and Agni (Dual Deities of Power and Fire)",
      deity_icon: Users,
      ruling_planet: "Jupiter",
      zodiac_range: "20°00′ Libra - 03°20′ Scorpio",
      pada_ranges: [
        "Pada 1: 20°00′ - 23°20′ Libra",
        "Pada 2: 23°20′ - 26°40′ Libra",
        "Pada 3: 26°40′ - 30°00′ Libra",
        "Pada 4: 00°00′ - 03°20′ Scorpio"
      ],
      guna: "Rajas",
      dosha: "Pitta",
      gender: "Male",
      nature: "Deva (Divine)",
      element: "Fire",
      animal_symbol: "Tiger",
      mythological_story: "Vishakha is governed by both Indra, the king of gods, and Agni, the fire god, symbolizing power, energy, and transformation. This dual rulership represents the balance of external and internal strength.",
      spiritual_significance: "Represents determination, ambition, and spiritual striving. It encourages transformation through focused effort and divine energy.",
      astrological_significance: "Natives are energetic, ambitious, and capable of great achievements. They are often charismatic leaders with a strong will and endurance.",
      favorable_activities: [
        "Leadership roles",
        "Spiritual sadhana involving fire rituals",
        "Competitive sports and challenges",
        "Public speaking and motivation"
      ],
      unfavorable_activities: [
        "Impulsiveness",
        "Aggression",
        "Over-ambition leading to burnout"
      ],
      compatibility: {
        compatible_nakshatras: ["Anuradha", "Swati", "Jyeshtha"],
        incompatible_nakshatras: ["Ashlesha", "Magha"]
      },
      associated_mantras: [
        "ॐ इन्द्राग्नये नमः",
        "Om Indrāgnaye Namah"
      ],
      yogic_or_spiritual_aspect: "Supports tapas (austerity), meditation on inner fire (agni), and cultivating willpower through disciplined spiritual practice.",
      additional_notes: "Vishakha is a nakshatra of achievement and transformation, urging balance between outer ambition and inner spiritual growth.",
      keywords: ["vishakha", "visakam", "jupiter", "guru", "indra", "agni", "triumphal arch", "forked branch", "libra", "scorpio", "tula", "vrischika", "tiger", "power", "ambition", "transformation", "determination"],
    },
    {
      id: "anuradha",
      number: 17,
      name_sanskrit: "अनुराधा",
      name_english: "Anuradha",
      symbol_description: "Lotus Flower",
      symbol_icon: Flower2, // Lotus
      deity: "Mitra (God of Friendship and Harmony)",
      deity_icon: Handshake, // Mitra as friendship
      ruling_planet: "Saturn",
      zodiac_range: "03°20′ Scorpio - 16°40′ Scorpio",
      pada_ranges: [
        "Pada 1: 03°20′ - 06°40′ Scorpio",
        "Pada 2: 06°40′ - 10°00′ Scorpio",
        "Pada 3: 10°00′ - 13°20′ Scorpio",
        "Pada 4: 13°20′ - 16°40′ Scorpio"
      ],
      guna: "Tamas",
      dosha: "Kapha", // Was Pitta, common sources suggest Kapha
      gender: "Female",
      nature: "Deva (Divine)",
      element: "Water",
      animal_symbol: "Female Deer",
      mythological_story: "Anuradha is ruled by Mitra, the deity symbolizing friendship, harmony, and cooperation. It reflects the power of social bonds and inner devotion.",
      spiritual_significance: "Symbolizes spiritual friendship, devotion, and the ability to overcome darkness through harmony and balance.",
      astrological_significance: "Natives are loyal, dedicated, and diplomatic. They excel in social relations, group activities, and spiritual gatherings.",
      favorable_activities: [
        "Building friendships and social networks",
        "Spiritual group activities",
        "Healing and counseling",
        "Artistic collaborations"
      ],
      unfavorable_activities: [
        "Over-dependence on others",
        "Jealousy or possessiveness",
        "Resistance to change"
      ],
      compatibility: {
        compatible_nakshatras: ["Vishakha", "Jyeshtha", "Swati"],
        incompatible_nakshatras: ["Ashlesha", "Magha"]
      },
      associated_mantras: [
        "ॐ मित्राय नमः",
        "Om Mitrāya Namah"
      ],
      yogic_or_spiritual_aspect: "Encourages bhakti yoga, meditation on harmony, and cultivation of loving-kindness (maitri).",
      additional_notes: "Anuradha promotes balance in relationships, spiritual friendships, and devotion, encouraging cooperation over conflict.",
      keywords: ["anuradha", "anusham", "anizham", "saturn", "shani", "mitra", "lotus", "friendship", "harmony", "scorpio", "vrischika", "deer", "devotion", "cooperation", "diplomacy", "loyalty"]
    },
    {
      id: "jyeshtha",
      number: 18,
      name_sanskrit: "ज्येष्ठा",
      name_english: "Jyeshtha",
      symbol_description: "Elder or Circular Amulet",
      symbol_icon: Medal, // Amulet/Elder
      deity: "Indra (King of Gods)",
      deity_icon: Crown,
      ruling_planet: "Mercury",
      zodiac_range: "16°40′ Scorpio - 30°00′ Scorpio",
      pada_ranges: [
        "Pada 1: 16°40′ - 20°00′ Scorpio",
        "Pada 2: 20°00′ - 23°20′ Scorpio",
        "Pada 3: 23°20′ - 26°40′ Scorpio",
        "Pada 4: 26°40′ - 30°00′ Scorpio"
      ],
      guna: "Tamas",
      dosha: "Pitta", // Was Vata, common sources suggest Pitta or Kapha, keeping Pitta for now
      gender: "Male",
      nature: "Rakshasa (Demonic)",
      element: "Water", // Was Air, corrected to Water
      animal_symbol: "Buffalo", // Was Hare, corrected to Stag or Male Deer, then to Buffalo based on some sources
      mythological_story: "Jyeshtha is ruled by Indra, the king of gods, symbolizing authority, protection, and leadership. It embodies seniority and responsibility.",
      spiritual_significance: "Represents wisdom gained through experience, protection of the weak, and the burden of leadership.",
      astrological_significance: "Natives are authoritative, protective, and have strong leadership qualities. They may face challenges related to pride and responsibility.",
      favorable_activities: [
        "Leadership and governance",
        "Protective services",
        "Spiritual mentorship",
        "Strategic planning"
      ],
      unfavorable_activities: [
        "Arrogance",
        "Over-assertiveness",
        "Stubbornness"
      ],
      compatibility: {
        compatible_nakshatras: ["Anuradha", "Vishakha", "Mula"],
        incompatible_nakshatras: ["Ashlesha", "Rohini"]
      },
      associated_mantras: [
        "ॐ इन्द्राय नमः",
        "Om Indrāya Namah"
      ],
      yogic_or_spiritual_aspect: "Supports spiritual practices focusing on protection, wisdom, and overcoming ego through disciplined meditation.",
      additional_notes: "Jyeshtha natives often carry heavy responsibilities but have the strength to lead and protect others.",
      keywords: ["jyeshtha", "kettai", "mercury", "budha", "indra", "amulet", "elder", "scorpio", "vrischika", "buffalo", "stag", "deer", "authority", "leadership", "protection", "wisdom"],
    },
    {
      id: "mula",
      number: 19,
      name_sanskrit: "मूल",
      name_english: "Mula",
      symbol_description: "Tied Bunch of Roots or Trident",
      symbol_icon: TreeDeciduous, // Roots
      deity: "Nirriti (Goddess of Destruction and Dissolution)",
      deity_icon: Zap, // Nirriti as destruction
      ruling_planet: "Ketu",
      zodiac_range: "00°00′ Sagittarius - 13°20′ Sagittarius",
      pada_ranges: [
        "Pada 1: 00°00′ - 03°20′ Sagittarius",
        "Pada 2: 03°20′ - 06°40′ Sagittarius",
        "Pada 3: 06°40′ - 10°00′ Sagittarius",
        "Pada 4: 10°00′ - 13°20′ Sagittarius"
      ],
      guna: "Rajas",
      dosha: "Vata",
      gender: "Male",
      nature: "Rakshasa (Demonic)",
      element: "Fire",
      animal_symbol: "Dog",
      mythological_story: "Mula is ruled by Nirriti, the goddess associated with destruction, dissolution, and transformation. It symbolizes uprooting and fundamental change.",
      spiritual_significance: "Represents the destruction of illusions, deep transformation, and the root cause of karma. Encourages spiritual uprooting for growth.",
      astrological_significance: "Natives are intense, investigative, and fearless. They often undergo major transformations and have a strong will to uncover truth.",
      favorable_activities: [
        "Research and investigation",
        "Spiritual retreats and renunciation",
        "Detoxification and healing",
        "Uncovering hidden knowledge"
      ],
      unfavorable_activities: [
        "Destructive behavior",
        "Restlessness",
        "Attachment to past trauma"
      ],
      compatibility: {
        compatible_nakshatras: ["Jyeshtha", "Purva Ashadha", "Anuradha"],
        incompatible_nakshatras: ["Rohini", "Magha"]
      },
      associated_mantras: [
        "ॐ निरृतये नमः",
        "Om Nirṛtaye Namah"
      ],
      yogic_or_spiritual_aspect: "Favors deep meditation on impermanence, detachment, and the dissolution of ego. Practices like neti-neti and self-inquiry are suitable.",
      additional_notes: "Mula urges the seeker to go to the root of problems and uproot negativity for true spiritual growth.",
      keywords: ["mula", "moolam", "ketu", "nirriti", "roots", "trident", "destruction", "dissolution", "sagittarius", "dhanus", "dog", "investigative", "transformation", "uprooting"],
    },
    {
      id: "purva-ashadha",
      number: 20,
      name_sanskrit: "पूर्वाषाढा",
      name_english: "Purva Ashadha",
      symbol_description: "Elephant Tusk or Fan",
      symbol_icon: Fan,
      deity: "Apah (God of Waters)",
      deity_icon: Waves,
      ruling_planet: "Venus",
      zodiac_range: "13°20′ Sagittarius - 26°40′ Sagittarius",
      pada_ranges: [
        "Pada 1: 13°20′ - 16°40′ Sagittarius",
        "Pada 2: 16°40′ - 20°00′ Sagittarius",
        "Pada 3: 20°00′ - 23°20′ Sagittarius",
        "Pada 4: 23°20′ - 26°40′ Sagittarius"
      ],
      guna: "Rajas",
      dosha: "Kapha", // Was Pitta, Kapha is more common
      gender: "Female",
      nature: "Deva (Divine)",
      element: "Water",
      animal_symbol: "Elephant", // Was Monkey, corrected to Elephant
      mythological_story: "Purva Ashadha is ruled by Apah, the god of waters, symbolizing invincibility and purity. It represents victory and unyielding strength.",
      spiritual_significance: "Symbolizes fresh beginnings, invincibility, and spiritual cleansing. It encourages courage to overcome obstacles and steadfastness.",
      astrological_significance: "Natives are energetic, optimistic, and courageous. They possess strong willpower and can inspire others with their enthusiasm.",
      favorable_activities: [
        "New ventures and beginnings",
        "Healing and purification rituals",
        "Spiritual practices involving water elements",
        "Leadership and motivation"
      ],
      unfavorable_activities: [
        "Impulsiveness",
        "Overconfidence",
        "Neglecting details"
      ],
      compatibility: {
        compatible_nakshatras: ["Uttara Ashadha", "Shravana", "Anuradha"],
        incompatible_nakshatras: ["Ashlesha", "Magha"]
      },
      associated_mantras: [
        "ॐ आपाय नमः",
        "Om Apāya Namah"
      ],
      yogic_or_spiritual_aspect: "Supports purification practices, invigoration through breathwork and water rituals, and building inner resilience.",
      additional_notes: "Purva Ashadha embodies fresh energy, resilience, and the spirit of conquest, urging one to move forward with confidence.",
      keywords: ["purva ashadha", "pooradam", "venus", "shukra", "apah", "waters", "elephant tusk", "fan", "sagittarius", "dhanus", "elephant", "monkey", "invincibility", "purity", "victory", "courageous", "optimistic"],
    },
    {
      id: "uttara-ashadha",
      number: 21,
      name_sanskrit: "उत्तराषाढा",
      name_english: "Uttara Ashadha",
      symbol_description: "Hog or Elephant Tusk",
      symbol_icon: Bone, // Tusk
      deity: "Vishvadevas (Universal Gods)",
      deity_icon: Users,
      ruling_planet: "Sun",
      zodiac_range: "26°40′ Sagittarius - 10°00′ Capricorn",
      pada_ranges: [
        "Pada 1: 26°40′ Sagittarius - 30°00′ Sagittarius",
        "Pada 2: 00°00′ Capricorn - 03°20′ Capricorn",
        "Pada 3: 03°20′ Capricorn - 06°40′ Capricorn",
        "Pada 4: 06°40′ Capricorn - 10°00′ Capricorn"
      ],
      guna: "Sattva",
      dosha: "Pitta", // Was Kapha, Pitta is common
      gender: "Female",
      nature: "Deva (Divine)",
      element: "Earth",
      animal_symbol: "Elephant", // Was Mongoose, corrected to Male Mongoose or Elephant. Keeping Elephant for consistency
      mythological_story: "Uttara Ashadha is governed by the Vishvadevas, the universal gods representing moral authority, righteousness, and leadership.",
      spiritual_significance: "Symbolizes unwavering determination, integrity, and the pursuit of noble goals with patience and perseverance.",
      astrological_significance: "Natives are responsible, disciplined, and ambitious. They tend to be natural leaders with strong moral values.",
      favorable_activities: [
        "Leadership roles and administration",
        "Long-term planning and goal setting",
        "Spiritual disciplines emphasizing discipline and focus",
        "Community service"
      ],
      unfavorable_activities: [
        "Stubbornness",
        "Rigidity",
        "Workaholism"
      ],
      compatibility: {
        compatible_nakshatras: ["Purva Ashadha", "Shravana", "Dhanishta"],
        incompatible_nakshatras: ["Ashlesha", "Rohini"]
      },
      associated_mantras: [
        "ॐ विश्वदेवताय नमः",
        "Om Vishvadevatāya Namah"
      ],
      yogic_or_spiritual_aspect: "Encourages steady spiritual practice, self-discipline, and cultivating dharma through meditation and selfless action.",
      additional_notes: "Uttara Ashadha is a nakshatra of victory through righteous means and enduring effort.",
      keywords: ["uttara ashadha", "uthiradam", "sun", "surya", "vishvadevas", "universal gods", "hog tusk", "elephant tusk", "mongoose", "sagittarius", "capricorn", "dhanus", "makara", "determination", "integrity", "leadership", "discipline"]
    },
    {
      id: "shravana",
      number: 22,
      name_sanskrit: "श्रवण",
      name_english: "Shravana",
      symbol_description: "Ear or Three Footsteps",
      symbol_icon: Ear,
      deity: "Vishnu (The Preserver)",
      deity_icon: ShieldCheck,
      ruling_planet: "Moon",
      zodiac_range: "10°00′ Capricorn - 23°20′ Capricorn",
      pada_ranges: [
        "Pada 1: 10°00′ - 13°20′ Capricorn",
        "Pada 2: 13°20′ - 16°40′ Capricorn",
        "Pada 3: 16°40′ - 20°00′ Capricorn",
        "Pada 4: 20°00′ - 23°20′ Capricorn"
      ],
      guna: "Sattva",
      dosha: "Kapha",
      gender: "Male",
      nature: "Deva (Divine)",
      element: "Earth", // Was Air, but Earth is more common
      animal_symbol: "Monkey",
      mythological_story: "Shravana is ruled by Lord Vishnu, the preserver and protector, symbolizing listening, learning, and devotion.",
      spiritual_significance: "Represents deep listening, wisdom through learning, and the capacity to absorb knowledge and guidance.",
      astrological_significance: "Natives are attentive, intelligent, and highly disciplined. They often excel in education, communication, and spiritual pursuits.",
      favorable_activities: [
        "Learning and teaching",
        "Meditation and listening practices",
        "Service and devotion",
        "Public speaking"
      ],
      unfavorable_activities: [
        "Overthinking",
        "Indecisiveness",
        "Being overly cautious"
      ],
      compatibility: {
        compatible_nakshatras: ["Purva Ashadha", "Uttara Ashadha", "Anuradha"],
        incompatible_nakshatras: ["Ashlesha", "Rohini"]
      },
      associated_mantras: [
        "ॐ विष्णवे नमः",
        "Om Vishnave Namah"
      ],
      yogic_or_spiritual_aspect: "Supports spiritual growth through attentive listening, mantra chanting, and meditation focused on preservation and compassion.",
      additional_notes: "Shravana natives have a natural ability to absorb and transmit spiritual knowledge, making them excellent teachers and guides.",
      keywords: ["shravana", "thiruvonam", "moon", "chandra", "vishnu", "ear", "three footsteps", "listening", "learning", "capricorn", "makara", "monkey", "wisdom", "knowledge", "devotion", "discipline"]
    },
    {
      id: "dhanishta",
      number: 23,
      name_sanskrit: "धनिष्ठा",
      name_english: "Dhanishta",
      symbol_description: "Drum (Damaru) or Flute",
      symbol_icon: Drum,
      deity: "Eight Vasus (Gods of Elements and Wealth)",
      deity_icon: Users,
      ruling_planet: "Mars",
      zodiac_range: "23°20′ Capricorn - 06°40′ Aquarius",
      pada_ranges: [
        "Pada 1: 23°20′ Capricorn - 26°40′ Capricorn",
        "Pada 2: 26°40′ Capricorn - 30°00′ Capricorn",
        "Pada 3: 00°00′ Aquarius - 03°20′ Aquarius",
        "Pada 4: 03°20′ Aquarius - 06°40′ Aquarius"
      ],
      guna: "Rajas",
      dosha: "Pitta",
      gender: "Male",
      nature: "Deva (Divine)",
      element: "Air", // Was Ether, Air is common for Aquarius part
      animal_symbol: "Lion", // Female Lioness
      mythological_story: "Dhanishta is ruled by the Vasus, elemental gods associated with wealth, abundance, and music. It symbolizes harmony and prosperity.",
      spiritual_significance: "Represents wealth not just materially but spiritually, promoting harmony, success, and rhythm in life.",
      astrological_significance: "Natives are energetic, ambitious, and musically inclined. They tend to be skilled in leadership and social settings.",
      favorable_activities: [
        "Music and arts",
        "Leadership roles",
        "Wealth creation",
        "Social and community activities"
      ],
      unfavorable_activities: [
        "Aggressiveness",
        "Restlessness",
        "Overindulgence"
      ],
      compatibility: {
        compatible_nakshatras: ["Shravana", "Uttara Ashadha", "Purva Ashadha"],
        incompatible_nakshatras: ["Ashlesha", "Rohini"]
      },
      associated_mantras: [
        "ॐ वसवे नमः",
        "Om Vasave Namah"
      ],
      yogic_or_spiritual_aspect: "Encourages harmonizing energies through music, chanting, and disciplined physical activity like dynamic yoga practices.",
      additional_notes: "Dhanishta natives thrive in environments rich in rhythm, movement, and social interaction, reflecting their dynamic nature.",
      keywords: ["dhanishta", "avittam", "mars", "mangala", "vasus", "drum", "damaru", "flute", "capricorn", "aquarius", "makara", "kumbha", "lion", "lioness", "wealth", "harmony", "music", "rhythm", "prosperity"]
    },
    {
      id: "shatabhisha",
      number: 24,
      name_sanskrit: "शतभिषा",
      name_english: "Shatabhisha",
      symbol_description: "Circle or Empty Circle",
      symbol_icon: CircleDot,
      deity: "Varuna (God of Cosmic Waters and the Divine Law)",
      deity_icon: Waves,
      ruling_planet: "Rahu",
      zodiac_range: "06°40′ Aquarius - 20°00′ Aquarius",
      pada_ranges: [
        "Pada 1: 06°40′ - 10°00′ Aquarius",
        "Pada 2: 10°00′ - 13°20′ Aquarius",
        "Pada 3: 13°20′ - 16°40′ Aquarius",
        "Pada 4: 16°40′ - 20°00′ Aquarius"
      ],
      guna: "Tamas",
      dosha: "Vata",
      gender: "Male",
      nature: "Rakshasa (Demonic)",
      element: "Ether",
      animal_symbol: "Horse", // Female Horse (Mare)
      mythological_story: "Shatabhisha is ruled by Varuna, the god of cosmic waters, law, and healing. It symbolizes mystery, healing, and the unseen forces of nature.",
      spiritual_significance: "Represents healing, hidden knowledge, and the power to transform through deep spiritual insight.",
      astrological_significance: "Natives are independent, secretive, and often drawn to healing or occult sciences. They possess strong intuition and analytical skills.",
      favorable_activities: [
        "Healing practices",
        "Research and investigation",
        "Meditation and occult studies",
        "Spiritual transformation"
      ],
      unfavorable_activities: [
        "Isolation",
        "Suspicion",
        "Emotional turbulence"
      ],
      compatibility: {
        compatible_nakshatras: ["Dhanishta", "Purva Bhadrapada", "Uttara Bhadrapada"],
        incompatible_nakshatras: ["Ashlesha", "Magha"]
      },
      associated_mantras: [
        "ॐ वरुणाय नमः",
        "Om Varunaya Namah"
      ],
      yogic_or_spiritual_aspect: "Supports deep meditation, pranayama focused on breath retention, and spiritual healing practices.",
      additional_notes: "Shatabhisha natives often have a unique approach to life, combining intellect with spirituality to heal and transform.",
      keywords: ["shatabhisha", "sadayam", "chathayam", "rahu", "varuna", "circle", "empty circle", "healing", "mystery", "aquarius", "kumbha", "horse", "mare", "secretive", "occult", "hundred physicians"]
    },
    {
      id: "purva-bhadrapada",
      number: 25,
      name_sanskrit: "पूर्वभाद्रपदा",
      name_english: "Purva Bhadrapada",
      symbol_description: "Sword or Two-faced Man",
      symbol_icon: Sword,
      deity: "Ajaikapad (One-legged Goat, a Form of Rudra)",
      deity_icon: Zap,
      ruling_planet: "Jupiter",
      zodiac_range: "20°00′ Aquarius - 03°20′ Pisces",
      pada_ranges: [
        "Pada 1: 20°00′ Aquarius - 23°20′ Aquarius",
        "Pada 2: 23°20′ Aquarius - 26°40′ Aquarius",
        "Pada 3: 26°40′ Aquarius - 30°00′ Aquarius",
        "Pada 4: 00°00′ Pisces - 03°20′ Pisces"
      ],
      guna: "Rajas",
      dosha: "Pitta", // Was Vata, common is Pitta
      gender: "Male",
      nature: "Rakshasa (Demonic)",
      element: "Fire", // Was Air, Fire is more common
      animal_symbol: "Wolf", // Male Lion
      mythological_story: "Purva Bhadrapada is ruled by Ajaikapad, a fierce form of Rudra, symbolizing transformation through destruction and renewal.",
      spiritual_significance: "Represents deep spiritual transformation, intensity, and the power to transcend limitations through inner fire.",
      astrological_significance: "Natives tend to be passionate, intense, and transformative leaders with strong convictions and a fearless nature.",
      favorable_activities: [
        "Spiritual practices involving intense meditation",
        "Leadership in transformative fields",
        "Arts that express deep emotions",
        "Philosophy and occult studies"
      ],
      unfavorable_activities: [
        "Aggression",
        "Impatience",
        "Destructiveness"
      ],
      compatibility: {
        compatible_nakshatras: ["Uttara Bhadrapada", "Shatabhisha", "Dhanishta"],
        incompatible_nakshatras: ["Ashlesha", "Rohini"]
      },
      associated_mantras: [
        "ॐ अजैकैपदाय नमः",
        "Om Ajaikapadaya Namah"
      ],
      yogic_or_spiritual_aspect: "Supports deep inner cleansing through pranayama and meditation, facilitating transformation and spiritual rebirth.",
      additional_notes: "Purva Bhadrapada natives have a powerful presence and are often drawn to mystical or transformative life paths.",
      keywords: ["purva bhadrapada", "poorattathi", "jupiter", "guru", "ajaikapad", "rudra", "sword", "two-faced man", "aquarius", "pisces", "kumbha", "meena", "wolf", "lion", "transformation", "fierce", "intense"]
    },
    {
      id: "uttara-bhadrapada",
      number: 26,
      name_sanskrit: "उत्तरभाद्रपदा",
      name_english: "Uttara Bhadrapada",
      symbol_description: "Twin or Funeral Cot",
      symbol_icon: BedDouble,
      deity: "Ahir Budhnya (Serpent of the Deep Sea)",
      deity_icon: Infinity,
      ruling_planet: "Saturn",
      zodiac_range: "03°20′ Pisces - 16°40′ Pisces",
      pada_ranges: [
        "Pada 1: 03°20′ - 06°40′ Pisces",
        "Pada 2: 06°40′ - 10°00′ Pisces",
        "Pada 3: 10°00′ - 13°20′ Pisces",
        "Pada 4: 13°20′ - 16°40′ Pisces"
      ],
      guna: "Tamas",
      dosha: "Kapha", // Was Pitta, Kapha is more common
      gender: "Male",
      nature: "Deva (Divine)",
      element: "Water", // Was Ether, Water is more common for Pisces
      animal_symbol: "Bull", // Female Cow
      mythological_story: "Uttara Bhadrapada is ruled by Ahir Budhnya, the serpent deity of the deep ocean, symbolizing depth, stability, and hidden knowledge.",
      spiritual_significance: "Represents spiritual depth, steadfastness, and the ability to access profound wisdom through calm and patience.",
      astrological_significance: "Natives are calm, steady, and spiritually inclined. They often excel in healing, meditation, and disciplines requiring patience.",
      favorable_activities: [
        "Meditation and spiritual practices",
        "Healing and care-taking professions",
        "Research and scholarly work",
        "Artistic and creative pursuits"
      ],
      unfavorable_activities: [
        "Lethargy",
        "Over-sensitivity",
        "Resistance to change"
      ],
      compatibility: {
        compatible_nakshatras: ["Purva Bhadrapada", "Shatabhisha", "Dhanishta", "Revati"],
        incompatible_nakshatras: ["Ashlesha", "Magha", "Chitra"]
      },
      associated_mantras: [
        "ॐ अहिर्बुध्नाय नमः",
        "Om Ahirbudhnaya Namah"
      ],
      yogic_or_spiritual_aspect: "Supports deep meditation and pranayama practices emphasizing calmness and inner stillness.",
      additional_notes: "Uttara Bhadrapada natives have the capacity for profound wisdom and patience, making them natural healers and teachers.",
      keywords: ["uttara bhadrapada", "utthirattathi", "saturn", "shani", "ahir budhnya", "serpent", "twin", "funeral cot", "pisces", "meena", "bull", "cow", "wisdom", "patience", "healing", "stability"]
    },
    {
      id: "revati",
      number: 27,
      name_sanskrit: "रेवती",
      name_english: "Revati",
      symbol_description: "Fish or Drum",
      symbol_icon: Drum, // Drum
      deity: "Pushan (God of Nourishment and Journeys)",
      deity_icon: Gift,
      ruling_planet: "Mercury",
      zodiac_range: "16°40′ Pisces - 30°00′ Pisces",
      pada_ranges: [
        "Pada 1: 16°40′ - 20°00′ Pisces",
        "Pada 2: 20°00′ - 23°20′ Pisces",
        "Pada 3: 23°20′ - 26°40′ Pisces",
        "Pada 4: 26°40′ - 30°00′ Pisces"
      ],
      guna: "Sattva",
      dosha: "Kapha",
      gender: "Female",
      nature: "Deva (Divine)",
      element: "Water",
      animal_symbol: "Elephant", // Female Elephant
      mythological_story: "Revati is ruled by Pushan, the nourisher and protector of travelers and herds. It symbolizes protection, nourishment, and safe journeys.",
      spiritual_significance: "Represents care, guidance, and spiritual nourishment for the soul’s journey towards liberation.",
      astrological_significance: "Natives are gentle, nurturing, and protective. They have a strong intuition and an inclination toward helping others.",
      favorable_activities: [
        "Caregiving and healing professions",
        "Spiritual teaching and guidance",
        "Travel and exploration",
        "Creative arts and music"
      ],
      unfavorable_activities: [
        "Over-protectiveness",
        "Lack of assertiveness",
        "Emotional dependency"
      ],
      compatibility: {
        compatible_nakshatras: ["Ashwini", "Bharani", "Hasta", "Uttara Bhadrapada"],
        incompatible_nakshatras: ["Magha", "Purva Phalguni", "Chitra"]
      },
      associated_mantras: [
        "ॐ पुष्णे नमः",
        "Om Pushne Namah"
      ],
      yogic_or_spiritual_aspect: "Supports meditative practices that enhance compassion, patience, and nurturing energy.",
      additional_notes: "Revati natives often serve as protectors and guides, emphasizing care and nourishment in their relationships and work.",
      keywords: ["revati", "mercury", "budha", "pushan", "fish", "drum", "pisces", "meena", "elephant", "nourishment", "guidance", "protection", "safe journeys", "compassion", "gentle"],
    },
  ],
};
