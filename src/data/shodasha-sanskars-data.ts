
import type { Sanskar, ScripturalReference, SanskarTiming, SanskarMultimediaResource } from '@/types';
import { HeartHandshake, ShieldCheck, Sparkles, Baby, Milestone, Sun, Utensils, Scissors, CircleDot, BookOpen, GraduationCap, School, Heart, MountainSnow, Sunrise, FlameKindling } from 'lucide-react'; // Added relevant icons

export const shodashaSanskarsData: Sanskar[] = [
  {
    id: 'garbhadhana',
    numericalId: 1,
    sanskritName: 'गर्भाधान (Garbhadhāna)',
    englishName: 'Conception Ritual',
    stageOfLife: 'Conception',
    category: 'Prenatal',
    iconName: 'HeartHandshake',
    briefExplanation: 'Garbhadhana is the first of the 16 Sanskaras (Shodasha Sanskaras) in Hindu tradition. It is performed before conception to spiritually purify the act of procreation, ensuring the birth of a virtuous, healthy, and spiritually aligned child.',
    detailedDescription: "Garbhadhana, the first Sanskar, is performed before conception to spiritually purify procreation. Its purpose is to sanctify the union and invoke divine blessings for a virtuous, healthy, and spiritually aligned child. Key related concepts include the Dharma of Grihastha Ashrama, Sattvic Parenting, and Spiritual Preparation for Parenthood. Modern adaptations include simplified home rituals or meditation-based intentions. The timing is crucial, often recommended after menstruation on auspicious days, avoiding inauspicious astrological conditions.",
    purpose: "To sanctify conception and invoke divine blessings for bringing a soul of high character into the family.",
    timing: {
      recommendedTime: "After menstruation, on an auspicious muhurta such as Shukla Paksha nights",
      astrologicalConditions: "Avoid Amavasya (new moon), eclipses, or inauspicious planetary alignments",
      idealNakshatras: ["Rohini", "Uttara Phalguni", "Hasta", "Anuradha"]
    },
    ritualSteps: [
      "Cleanse the body and environment (Preparation)",
      "Perform Sankalpa (intention-setting) (Preparation)",
      "Invoke family deities and ancestors (Pitrus) (Preparation)",
      "Recitation of Garbhadhana mantras by priest (Main Ritual)",
      "Offerings (Ahutis) to Agni (Fire) with ghee, herbs (Main Ritual)",
      "Blessing of the couple for righteous progeny (Main Ritual)",
      "Union of the couple in a spiritual mindset (Main Ritual)",
      "Chanting of specific Vedic verses by the couple (Post-Ritual)",
      "Observance of Brahmacharya (chastity) for a few days (Post-Ritual)",
      "Charitable acts and feeding of Brahmins (Post-Ritual)"
    ],
    symbolism: "Fire symbolizes divine witness and purifier of intentions. The union is seen as a sacred act of creation, not just physical but spiritual. Mantras invoke vibrational energy to attract a sattvic (pure) soul. Symbolic colors often include White (purity), Red (fertility), and Gold (divine blessings).",
    vedicSignificance: "According to Manu Smriti, 'प्रजनार्थं धर्मपत्नी’ – A wife is sacredly wedded for the purpose of progeny. The Grihya Sutras state, 'Garbhadhana is the duty of a householder, to be performed with full dharmic intention.' The Atharva Veda includes prayers like, 'May a noble soul enter your womb and bring glory to your lineage.' It emphasizes the sacredness of procreation and its role in continuing the family lineage and societal dharma.",
    scripturalReferences: [
      {
        text: "Manu Smriti",
        quote: "‘प्रजनार्थं धर्मपत्नी’ – A wife is sacredly wedded for the purpose of progeny."
      },
      {
        text: "Grihya Sutras",
        quote: "Garbhadhana is the duty of a householder, to be performed with full dharmic intention."
      },
      {
        text: "Atharva Veda",
        quote: "May a noble soul enter your womb and bring glory to your lineage."
      }
    ],
    mantraSnippet: 'त्वं ह्यग्ने प्रजाभ्यो गर्भं दातुं प्रचोदितः। (O Agni, you are invoked to bless this union with the seed of life for future generations.)',
    culturalSignificance: "It marks the spiritual beginning of family life. This Sanskar highlights that life begins before birth and parenting is a sacred responsibility. Regional variations: South India - often combined with Pumsavana and performed quietly. North India - may include rituals for ancestral blessings and community involvement.",
    practicalRelevance: "Encourages conscious parenting, spiritual preparation for childbirth, and mindful conception. Some families perform simplified home rituals or meditation-based intentions, focusing on the spiritual well-being of the future child.",
    relatedConcepts: [
      "Dharma of Grihastha Ashrama",
      "Sattvic Parenting",
      "Spiritual Preparation for Parenthood"
    ],
    multimediaResources: [
      { type: 'video', url: 'https://www.youtube.com/watch?v=sample_garbhadhana', caption: 'Garbhadhana Ceremony. Articles: https://vedicrituals.org/garbhadhana-ceremony, Books: Dharmashastra on Samskaras, Vedic Samskara by P.V. Kane' },
      { type: 'image', url: 'https://placehold.co/600x400.png', caption: 'Fire altar used in Garbhadhana', dataAiHint: 'fire altar yajna' },
      { type: 'image', url: 'https://placehold.co/600x400.png', caption: 'Couple performing Garbhadhana rituals', dataAiHint: 'couple ritual' },
      { type: 'image', url: 'https://placehold.co/600x400.png', caption: 'Sacred items for Garbhadhana ceremony', dataAiHint: 'ritual items' }
    ],
  },
  {
    id: 'pumsavana',
    numericalId: 2,
    sanskritName: 'पुम्सवाना (Pumsavana)',
    englishName: 'Fetus Protection and Gender Blessing Ritual',
    stageOfLife: 'Fetal Development (2nd-4th month)',
    category: 'Prenatal',
    iconName: 'ShieldCheck',
    briefExplanation: 'Pumsavana is the second of the sixteen Sanskars, performed during the third month of pregnancy. It is a sacred ritual aimed at ensuring the health and well-being of the fetus and is traditionally associated with invoking blessings for the birth of a male child, symbolizing strength and prosperity.',
    detailedDescription: "Pumsavana, the second Sanskar, is performed in the third month of pregnancy for the fetus's health and well-being. Its purpose is to protect the fetus, encourage healthy development, and seek blessings for a strong, virtuous child, traditionally with an inclination towards a male child for lineage and prosperity. Key related concepts include Prenatal Spiritual Care, Family Prosperity, and Protective Rituals. Modern adaptations include simplified rituals or meditative blessings respecting contemporary beliefs.",
    purpose: "To protect the fetus, promote its healthy development, and seek divine blessings for a strong and virtuous child.",
    timing: {
      recommendedTime: "Third month of pregnancy, usually on an auspicious day and muhurta",
      astrologicalConditions: "Avoid inauspicious timings such as eclipses or during certain planetary transits",
      idealNakshatras: ["Rohini", "Pushya", "Ashlesha"]
    },
    ritualSteps: [
      "Cleansing of the expectant mother and the ritual area (Preparation)",
      "Setting the altar with sacred items including Tulsi leaves, sesame seeds, and honey (Preparation)",
      "Invocation of deities and ancestors for protection (Preparation)",
      "Recitation of specific Pumsavana mantras by the priest (Main Ritual)",
      "Offering a mixture of honey, yogurt, and other auspicious substances to the expectant mother (Main Ritual)",
      "Blessing the mother and fetus for health and vitality (Main Ritual)",
      "Symbolic prayers for the birth of a male child (contextual and optional based on family beliefs) (Main Ritual)",
      "Consumption of blessed food by the mother (Post-Ritual)",
      "Chanting of protective hymns by family members (Post-Ritual)",
      "Observance of health and dietary guidelines (Post-Ritual)"
    ],
    symbolism: "Honey and yogurt represent nourishment, sweetness, and purity for the fetus. Prayers for a male child traditionally symbolize ensuring strength, lineage continuation, and prosperity. Protection rituals aim to ward off negative influences and safeguard fetal development. Symbolic colors often include Yellow (nourishment), Green (life and growth), and White (purity).",
    vedicSignificance: "The Grihya Sutras recommend Pumsavana for the well-being of the unborn child and lineage continuity. Manu Smriti emphasizes prenatal care and protective rituals. The Atharva Veda includes prayers to shield the fetus and bless the family. The Sanskar underscores the importance of spiritual and physical health for the unborn child.",
    scripturalReferences: [
      {
        text: "Grihya Sutras",
        quote: "Pumsavana is recommended to ensure the well-being of the unborn child and the continuity of the lineage."
      },
      {
        text: "Manu Smriti",
        quote: "The sanctity of prenatal care and rituals to protect the progeny is emphasized."
      },
      {
        text: "Atharva Veda",
        quote: "Protect the child within the womb from evil forces and bless the family with prosperity."
      }
    ],
    mantraSnippet: 'ॐ प्रजापते रक्षतु मे गर्भं। (Om, O Creator, protect my fetus and bless it with health.)',
    culturalSignificance: "This Sanskar highlights the importance of prenatal spiritual care, reflecting the deep reverence for new life and the desire for healthy offspring in Hindu tradition. Regional Variations: South India - Often performed privately at home with family participation. North India - May include community blessings and priest-led ceremonies in temples.",
    practicalRelevance: "Encourages mindful prenatal care, psychological bonding with the unborn child, and cultural continuity. Some families perform simplified rituals or meditative blessings respecting contemporary beliefs, focusing on the health and well-being of the child irrespective of gender.",
    relatedConcepts: [
      "Prenatal Spiritual Care",
      "Family Prosperity",
      "Protective Rituals"
    ],
    multimediaResources: [
      { type: 'video', url: 'https://www.youtube.com/watch?v=sample_pumsavana', caption: 'Pumsavana Ceremony. Articles: https://vedicrituals.org/pumsavana-ceremony, Books: Vedic Rituals for Parenthood, Samskaras and Life Cycles' },
      { type: 'image', url: 'https://placehold.co/600x400.png', caption: 'Honey jar symbolizing nourishment for Pumsavana', dataAiHint: 'honey jar ritual' },
      { type: 'image', url: 'https://placehold.co/600x400.png', caption: 'Pregnant woman in prayer for Pumsavana', dataAiHint: 'pregnant prayer ceremony' },
      { type: 'image', url: 'https://placehold.co/600x400.png', caption: 'Tulsi leaves for purity in Pumsavana', dataAiHint: 'tulsi leaves ritual' }
    ],
  },
  {
    id: 'simantonnayana',
    numericalId: 3,
    sanskritName: 'सीमन्तोन्नयन (Simantonnayana)',
    englishName: 'Parting of Hair / Prenatal Hair-Arrangement Ceremony',
    stageOfLife: 'Late Pregnancy (4th-5th month)',
    category: 'Prenatal',
    iconName: 'Sparkles',
    briefExplanation: 'Simantonnayana is the third Sanskar performed usually in the fourth or fifth month of pregnancy. This ritual involves parting the hair of the expectant mother, symbolizing the protection of both mother and unborn child from negative energies and promoting mental well-being and health.',
    detailedDescription: "Simantonnayana is the third Sanskar performed usually in the fourth or fifth month of pregnancy. This ritual involves parting the hair of the expectant mother, symbolizing the protection of both mother and unborn child from negative energies and promoting mental well-being and health. Its purpose is to safeguard the mother and fetus, reduce stress and mental anxiety during pregnancy, and invoke divine blessings for a smooth pregnancy and delivery. Key related concepts include Prenatal Mental Health, Protective Rituals, and Maternal Well-being. Modern adaptations include meditation and yoga for mothers alongside the ritual.",
    purpose: "To safeguard the mother and fetus, reduce stress and mental anxiety during pregnancy, and invoke divine blessings for a smooth pregnancy and delivery.",
    timing: {
      recommendedTime: "Fourth or fifth month of pregnancy on an auspicious day and muhurta",
      astrologicalConditions: "Avoid inauspicious timings such as eclipses or during malefic planetary positions",
      idealNakshatras: ["Pushya", "Anuradha", "Hasta"]
    },
    ritualSteps: [
      "Cleansing of the expectant mother and ritual area (Preparation)",
      "Setting up the altar with flowers, incense, and sacred items (Preparation)",
      "Invoking Lord Vishnu and other protective deities (Preparation)",
      "The priest or close family member parts the hair of the expectant mother (Main Ritual)",
      "Recitation of protective mantras (Main Ritual)",
      "Application of turmeric or sandalwood paste on the scalp (Main Ritual)",
      "Offering prayers for mental peace and healthy fetal development (Main Ritual)",
      "Blessing of the mother by elders (Post-Ritual)",
      "Serving prasadam (holy food) to family and guests (Post-Ritual)",
      "Advising the mother on rest and dietary practices (Post-Ritual)"
    ],
    symbolism: "Parting hair symbolizes clearing the path for the unborn child’s healthy growth. Turmeric and sandalwood represent purity, protection, and auspiciousness. Prayers and blessings invoke divine protection against negative energies. Symbolic colors often include Orange (energy), Yellow (purity), and Green (growth).",
    vedicSignificance: "The Grihya Sutras prescribe Simantonnayana to protect the mother and child from evil influences. The Atharva Veda notes that the ritual safeguards mental and physical well-being during pregnancy. This emphasizes mental and emotional health of the mother, acknowledging the importance of psychological well-being for the fetus.",
    scripturalReferences: [
      {
        text: "Grihya Sutras",
        quote: "Simantonnayana is prescribed to protect the mother and child from evil influences."
      },
      {
        text: "Atharva Veda",
        quote: "The ritual safeguards mental and physical well-being during pregnancy."
      }
    ],
    mantraSnippet: 'ॐ वसुदेवाय नमः। (Om, salutations to Lord Vasudeva for protection and peace.)',
    culturalSignificance: "This Sanskar emphasizes the mental and emotional health of the mother, acknowledging the importance of psychological well-being for the fetus. Regional Variations: South India - may involve singing traditional lullabies and community celebrations. North India - often a private ceremony with close family and priest.",
    practicalRelevance: "Highlights prenatal care and stress relief in pregnancy through spiritual practices. Some families incorporate meditation and yoga for mothers alongside the ritual, focusing on holistic maternal well-being.",
    relatedConcepts: [
      "Prenatal Mental Health",
      "Protective Rituals",
      "Maternal Well-being"
    ],
    multimediaResources: [
      { type: 'video', url: 'https://www.youtube.com/watch?v=sample_simantonnayana', caption: 'Simantonnayana Ceremony. Articles: https://vedicrituals.org/simantonnayana-ceremony, Books: Prenatal Sanskars and Maternal Care, Ancient Vedic Rituals for Pregnancy' },
      { type: 'image', url: 'https://placehold.co/600x400.png', caption: 'Parted hair, symbol of clearing the path', dataAiHint: 'parted hair ritual' },
      { type: 'image', url: 'https://placehold.co/600x400.png', caption: 'Pregnant mother adorned with flowers for Simantonnayana', dataAiHint: 'pregnant mother flowers' },
      { type: 'image', url: 'https://placehold.co/600x400.png', caption: 'Turmeric paste used in the ceremony', dataAiHint: 'turmeric paste ritual' }
    ],
  },
  {
    id: 'jatakarma',
    numericalId: 4,
    sanskritName: 'जातकर्म (Jatakarma)',
    englishName: 'Birth Ceremony / Newborn Welcoming Ritual',
    stageOfLife: 'Birth',
    category: 'Childhood',
    iconName: 'Baby',
    briefExplanation: 'Jatakarma is the ritual performed immediately after the birth of a child to welcome the newborn into the family and society. It marks the child\'s entry into the world with prayers for health, longevity, and spiritual growth.',
    purpose: "To purify the newborn, initiate the child into the spiritual fold, and bless the child with good health and intelligence.",
    timing: {
      recommendedTime: "Immediately or within the first few hours after birth",
      astrologicalConditions: "Performed preferably on an auspicious day and time to ensure positive cosmic influences"
    },
    detailedDescription: 'Jatakarma is the ritual performed immediately after the birth of a child to welcome the newborn into the family and society. It marks the child\'s entry into the world with prayers for health, longevity, and spiritual growth. The purpose is to purify the newborn, initiate the child into the spiritual fold, and bless the child with good health and intelligence. Related concepts include Newborn Care, Spiritual Initiation, and Family Blessings. Modern adaptations include newborn photography and celebrations alongside traditional rites.',
    ritualSteps: [
      'Cleaning and sanctifying the room where the baby is born (Preparation)',
      'Setting up the altar with sacred items such as holy water, rice, and flowers (Preparation)',
      'Father or priest whispers Vedic mantras into the newborn’s right ear (Main Ritual)',
      'Honey and ghee are applied to the baby’s lips (Main Ritual)',
      'Prayers are offered to invoke blessings from deities (Main Ritual)',
      'The baby is bathed with holy water and turmeric (Main Ritual)',
      'Blessings from family members (Post-Ritual)', 
      'Presentation of gifts and offerings (Post-Ritual)',
      'Celebration with family and community (Post-Ritual)'
    ],
    symbolism: 'Whispering mantras invokes divine protection and knowledge. Honey and ghee symbolize sweetness and nourishment for life. The holy bath signifies purification of body and soul. Symbolic colors often include White (purity), Yellow (auspiciousness), and Red (energy).',
    vedicSignificance: 'Grihya Sutras prescribe Jatakarma as a vital rite welcoming the child into the cosmic order. The Atharva Veda includes blessings for health and longevity offered through this sacred rite. It marks the formal entry of the individual into the family and community, invoking divine protection and auspicious beginnings.',
    scripturalReferences: [
      {
        text: "Grihya Sutras",
        quote: "Jatakarma is prescribed as a vital rite welcoming the child into the cosmic order."
      },
      {
        text: "Atharva Veda",
        quote: "Blessings for health and longevity are offered through this sacred rite."
      }
    ],
    mantraSnippet: 'ॐ जनमेदेहि जन्मेवेदुहि। (Om, grant the child life and give birth to life.)',
    culturalSignificance: 'This Sanskar marks the spiritual birth of the child, emphasizing the connection between the newborn and the cosmic energies. Regional Variations: South India - may include additional rites such as placing the baby on a swing decorated with flowers. North India - focuses on Vedic chants and family blessings.',
    practicalRelevance: 'Reinforces the importance of welcoming rituals and early spiritual nurturing. Many families incorporate newborn photography and modern celebrations alongside traditional rites, adapting the spirit of the Sanskar to contemporary life.',
    relatedConcepts: [
      "Newborn Care",
      "Spiritual Initiation",
      "Family Blessings"
    ],
    multimediaResources: [
      { type: 'video', url: 'https://www.youtube.com/watch?v=sample_jatakarma', caption: 'Jatakarma Ceremony. Articles: https://vedicrituals.org/jatakarma-ceremony, Books: Vedic Birth Rituals and Their Significance, Ancient Hindu Samskaras' },
      { type: 'image', url: 'https://placehold.co/600x400.png', caption: 'Newborn baby with ritual items', dataAiHint: 'newborn ritual' },
      { type: 'image', url: 'https://placehold.co/600x400.png', caption: 'Honey and ghee bowls for Jatakarma', dataAiHint: 'honey ghee ritual' },
      { type: 'image', url: 'https://placehold.co/600x400.png', caption: 'Sacred fire for Jatakarma ceremony', dataAiHint: 'sacred fire ceremony' }
    ],
  },
  {
    id: 'namakarana',
    numericalId: 5,
    sanskritName: 'नामकरण (Namakarana)',
    englishName: 'Naming Ceremony',
    stageOfLife: 'Early Infancy (10th-12th day)',
    category: 'Childhood',
    iconName: 'Milestone',
    briefExplanation: 'Namakarana is the sacred ritual of naming a newborn child, usually performed on the 11th, 12th, or 21st day after birth. It formally introduces the child to the world and the community with a meaningful and auspicious name.',
    purpose: "To give the child a name that reflects their identity, lineage, and auspicious qualities, and to seek blessings for a prosperous and righteous life.",
    timing: {
      recommendedTime: "Usually on the 11th, 12th, or 21st day after birth",
      astrologicalConditions: "The name is often chosen based on the child's Nakshatra (birth star) and other astrological considerations."
    },
    detailedDescription: 'Namakarana is the sacred ritual of naming a newborn child, usually performed on the 11th, 12th, or 21st day after birth. It formally introduces the child to the world and the community with a meaningful and auspicious name. The purpose is to give the child a name that reflects their identity, lineage, and auspicious qualities, and to seek blessings for a prosperous and righteous life. Related concepts include Child Identity, Astrological Naming, and Family Traditions. Modern adaptations involve parents incorporating modern name choices alongside traditional astrological naming methods.',
    ritualSteps: [
      'Cleaning and decorating the place of ceremony (Preparation)',
      'Arranging sacred items like rice, flowers, and holy water (Preparation)',
      'Invocation of deities through Vedic mantras (Main Ritual)',
      'Announcement of the chosen name by the father or priest (Main Ritual)',
      'Writing the name on rice grains or palm leaves (Main Ritual)',
      'Blessings and offerings to the child (Main Ritual)',
      'Feasting and celebration with family and friends (Post-Ritual)',
      'Giving gifts to the child and attendees (Post-Ritual)'
    ],
    symbolism: 'Naming establishes the child\'s unique identity and connection to family and culture. Writing the name symbolizes permanence and the power of the spoken and written word. Symbolic colors often include Yellow (auspiciousness), Red (energy), and White (purity).',
    vedicSignificance: 'The Grihya Sutras state that the naming ceremony is essential for the child\'s social and spiritual integration. Manu Smriti says a good name brings prosperity and happiness. Vedic belief underscores the power of sound and name (Nama-Rupa) to shape identity and destiny.',
    scripturalReferences: [
      {
        text: "Grihya Sutras",
        quote: "The naming ceremony is essential for the child's social and spiritual integration."
      },
      {
        text: "Manu Smriti",
        quote: "A good name brings prosperity and happiness to the individual."
      }
    ],
    mantraSnippet: 'ॐ नमो नमः (Om, I bow in reverence.)',
    culturalSignificance: 'Namakarana is a joyful occasion that marks the beginning of the child’s social life and honors the family’s traditions and heritage. Regional Variations: South India - sometimes performed with additional rituals like applying turmeric and sandalwood paste to the baby. North India - focuses on Vedic chants and selecting a name according to the Nakshatra.',
    practicalRelevance: 'The tradition continues to be an important family event, often combined with celebrations and gatherings. Parents may incorporate modern name choices alongside traditional astrological naming methods, maintaining the essence of the Sanskar.',
    relatedConcepts: [
      "Child Identity",
      "Astrological Naming",
      "Family Traditions"
    ],
    multimediaResources: [
      { type: 'video', url: 'https://www.youtube.com/watch?v=sample_namakarana', caption: 'Namakarana Ceremony. Articles: https://vedicrituals.org/namakarana-ceremony, Books: Hindu Naming Traditions, Sanskrit Rituals for Newborns' },
      { type: 'image', url: 'https://placehold.co/600x400.png', caption: 'Nameplate for Namakarana', dataAiHint: 'nameplate ceremony' },
      { type: 'image', url: 'https://placehold.co/600x400.png', caption: 'Rice grains used in Naming Ceremony', dataAiHint: 'rice grains ritual' },
      { type: 'image', url: 'https://placehold.co/600x400.png', caption: 'Flowers decorating Namakarana venue', dataAiHint: 'flowers ceremony' }
    ],
  },
  {
    id: 'nishkramana',
    numericalId: 6,
    sanskritName: 'निष्क्रमण (Nishkramana)',
    englishName: 'First Outing Ceremony',
    stageOfLife: 'Infancy (3rd-4th month)',
    category: 'Childhood',
    iconName: 'Sun',
    briefExplanation: 'Nishkramana is the sacred ritual of taking the infant outside the home for the first time, typically performed on the 3rd or 4th month after birth. It signifies the child\'s introduction to nature and the world beyond the home.',
    purpose: "To expose the child to sunlight and fresh air, symbolizing health, growth, and connection with nature. It also serves to seek divine blessings for the child’s well-being and prosperity.",
    timing: {
      recommendedTime: "Usually in the 3rd or 4th month after birth",
      astrologicalConditions: "The timing is often chosen on an auspicious day based on Panchang and Nakshatra."
    },
    detailedDescription: 'Nishkramana, the child\'s first outing, is performed in the 3rd or 4th month. The purpose is to introduce the child to sunlight, fresh air, and nature, symbolizing health, growth, and a connection to the broader world. Divine blessings for well-being are sought. Related concepts include Sun Worship, Child’s Growth, and Connection to Nature. Modern adaptations involve photo sessions or outdoor family gatherings.',
    ritualSteps: [
      'Cleaning and decorating the house and surroundings (Preparation)',
      'Preparing ceremonial items like flowers, fruits, and holy water (Preparation)',
      'Waking the child early in the morning (Main Ritual)',
      'Taking the child out to the courtyard or garden (Main Ritual)',
      'Offering prayers to the Sun God (Surya) and other deities (Main Ritual)',
      'Applying tilak on the child’s forehead (Main Ritual)',
      'Blessings from elders and relatives (Post-Ritual)',
      'Feeding the child special foods like honey and ghee (Post-Ritual)',
      'Celebration with family members (Post-Ritual)'
    ],
    symbolism: 'Sunlight represents vitality, energy, and divine blessings. The first outing marks the child’s first connection with the external world. Symbolic colors often include Orange (energy) and Yellow (auspiciousness).',
    vedicSignificance: 'Grihya Sutras state the child should be introduced to sunlight and nature for growth and health. Manu Smriti highlights that exposure to natural elements ensures balanced development. It acknowledges the interconnectedness of the individual with the universe and invokes divine protection.',
    scripturalReferences: [
      {
        text: "Grihya Sutras",
        quote: "The child should be introduced to the sunlight and nature for growth and health."
      },
      {
        text: "Manu Smriti",
        quote: "A child’s exposure to natural elements ensures balanced development."
      }
    ],
    mantraSnippet: 'ॐ भानवे नमः (Om, I bow to the radiant one (Sun God).)',
    culturalSignificance: 'Nishkramana is celebrated as an important milestone, emphasizing nature\'s role in nurturing. Regional Variations: South Indian variations may include local deity invocations and traditional lamps. North Indian versions focus on Surya Vandana and family blessings.',
    practicalRelevance: 'This tradition continues as a joyful event symbolizing health and prosperity. It aligns with modern understanding of the benefits of fresh air and sunlight for infant development.',
    relatedConcepts: [
      "Sun Worship",
      "Child’s Growth",
      "Connection to Nature"
    ],
    multimediaResources: [
      { type: 'video', url: 'https://www.youtube.com/watch?v=sample_nishkramana', caption: 'Nishkramana Ceremony. Articles: https://vedicrituals.org/nishkramana-ceremony, Books: Sacred Rites of Hindu Childhood, Hindu Rituals and Their Meanings.' },
      { type: 'image', url: 'https://placehold.co/600x400.png', caption: 'Baby\'s first outing to see the sun', dataAiHint: 'baby sun nature' },
      { type: 'image', url: 'https://placehold.co/600x400.png', caption: 'Flowers used in Nishkramana', dataAiHint: 'ceremony flowers' },
      { type: 'image', url: 'https://placehold.co/600x400.png', caption: 'Lamp lit during Nishkramana', dataAiHint: 'ritual lamp' }
    ],
  },
  {
    id: 'annaprashana',
    numericalId: 7,
    sanskritName: 'अन्नप्राशन (Annaprashana)',
    englishName: 'First Feeding Ceremony',
    stageOfLife: 'Infancy (6th month)',
    category: 'Childhood',
    iconName: 'Utensils',
    briefExplanation: 'Performed in the sixth month, this ritual marks the child\'s first intake of solid food, traditionally rice, symbolizing growth and nourishment.',
    purpose: "To introduce the child to solid nourishment and invoke blessings for health, growth, and longevity.",
    timing: {
      recommendedTime: "Usually performed on the 6th month of the child's life",
      astrologicalConditions: "An auspicious day is chosen based on Panchang and Nakshatra for performing the ceremony."
    },
    detailedDescription: 'Annaprashana marks the infant’s first intake of solid food in the sixth month. It aims to introduce solid nourishment and invoke blessings for health, growth, and longevity. Related concepts are Nourishment, Growth, and Goddess Annapurna. Modern adaptations may integrate nutritional advice with traditional rituals.',
    ritualSteps: [
      'Selecting an auspicious date and time (Preparation)',
      'Preparing the ceremonial food (often rice mixed with ghee and jaggery) (Preparation)',
      'Decorating the ceremonial place (Preparation)',
      'The infant is dressed in new clothes (Main Ritual)',
      'The father or maternal uncle feeds the first spoonful of solid food to the baby (Main Ritual)',
      'Mantras are chanted invoking blessings for health and prosperity (Main Ritual)',
      'Prayers offered to deities like Annapurna, goddess of nourishment (Main Ritual)',
      'Distribution of prasadam (holy food) to relatives and guests (Post-Ritual)',
      'Celebratory feast with family and friends (Post-Ritual)'
    ],
    symbolism: 'The first solid food represents the start of physical growth beyond mother\'s milk. Rice symbolizes prosperity and sustenance. Symbolic colors are Yellow (auspiciousness) and Red (energy).',
    vedicSignificance: 'Grihya Sutras state that solid food should be introduced on an auspicious day for strength and vitality. The Skanda Purana mentions invoking blessings from Annapurna. It emphasizes the sacredness of food (Anna).',
    scripturalReferences: [
      {
        text: "Grihya Sutras",
        quote: "The child should be fed solid food on an auspicious day to ensure strength and vitality."
      },
      {
        text: "Skanda Purana",
        quote: "The Annaprashana ritual invokes blessings from the goddess Annapurna."
      }
    ],
    mantraSnippet: 'ॐ अन्नपूर्णे सदापूर्णे शंकरप्राणवल्लभे। (Om Annapurne Sadaapurne Shankara Praana Vallabhe.)',
    culturalSignificance: 'Annaprashana is a joyous milestone celebrating child development and fostering social bonds. Regional Variations: South Indian variations use rice dishes like ‘anna’ or ‘pongal’. North Indian versions favor sweet rice with ghee and dry fruits. Often involves games where the child chooses symbolic objects.',
    practicalRelevance: 'Continues as a meaningful tradition marking infant growth and introducing cultural food habits. Aligns with modern pediatric advice on introducing complementary foods.',
    relatedConcepts: [
      "Nourishment",
      "Growth",
      "Goddess Annapurna"
    ],
    multimediaResources: [
      { type: 'video', url: 'https://www.youtube.com/watch?v=sample_annaprashana', caption: 'Annaprashana Ceremony. Articles: https://vedicrituals.org/annaprashana-ceremony, Books: Hindu Child Rites and Rituals, The Significance of Annaprashana.' },
      { type: 'image', url: 'https://placehold.co/600x400.png', caption: 'Rice bowl for Annaprashana', dataAiHint: 'rice bowl ceremony' },
      { type: 'image', url: 'https://placehold.co/600x400.png', caption: 'Baby being fed first solid food', dataAiHint: 'baby first food' },
      { type: 'image', url: 'https://placehold.co/600x400.png', caption: 'Flowers used in Annaprashana ceremony', dataAiHint: 'ceremony flowers food' }
    ],
  },
  {
    id: 'chudakarana',
    numericalId: 8,
    sanskritName: 'चूडाकर्म (Chudakarana)',
    englishName: 'Mundan (First Haircut Ceremony)',
    stageOfLife: 'Early Childhood (1st or 3rd year)',
    category: 'Childhood',
    iconName: 'Scissors',
    briefExplanation: 'Chudakarana is the sacred ceremony of the first haircut or shaving of the child’s head, symbolizing purification, the removal of past negative karmas, and the fostering of mental clarity.',
    purpose: "To purify the child by removing the hair associated with birth and offer it to sacred rivers or fire as a symbolic sacrifice.",
    timing: {
      recommendedTime: "Usually performed in the 1st, 3rd, or 5th year of the child's life",
      astrologicalConditions: "An auspicious date is chosen based on the Nakshatra and Tithi as per the Hindu calendar."
    },
    detailedDescription: 'Chudakarana, the Mundan ceremony, involves the first haircut of a child, usually in their first, third, or fifth year. Its purpose is purification, removing birth hair and past karmas, and promoting mental clarity. Related concepts include Purification, Karma Cleansing, and Mental Clarity. Modern adaptations often involve family gatherings and temple visits.',
    ritualSteps: [
      'Choosing an auspicious date and place (Preparation)',
      'Preparing offerings and items like ghee, flowers, new clothes (Preparation)',
      'Priests chant Vedic mantras and purify the area (Main Ritual)',
      'The child\'s head is partially or fully shaved with sanctity (Main Ritual)',
      'The hair is collected and either floated in a holy river or offered into the sacred fire (Main Ritual)',
      'Child is bathed and dressed in new clothes (Post-Ritual)',
      'Blessings are received from elders (Post-Ritual)',
      'A celebratory meal is served (Post-Ritual)'
    ],
    symbolism: 'Hair Removal symbolizes shedding of impurities and the past birth\'s karmas. Sacrifice to Fire/Water represents surrender and purification. Symbolic colors are White (purity) and Gold (auspiciousness).',
    vedicSignificance: 'Manusmriti states Chudakarana purifies the body and prepares the mind. Grihya Sutras mention it removes sin and promotes longevity and intellect. It is seen as a purificatory rite that prepares the child for further development.',
    scripturalReferences: [
      {
        text: "Manusmriti",
        quote: "A child should undergo Chudakarana to purify the body and prepare the mind."
      },
      {
        text: "Grihya Sutras",
        quote: "The first haircut removes sin and promotes longevity and intellect."
      }
    ],
    mantraSnippet: 'ॐ केशवाय नमः (Om Keshavaya Namah — Salutations to the Lord who purifies through the ritual)',
    culturalSignificance: 'Observed widely across India with variations; it is a significant community celebration and a milestone in a child\'s early years. Regional Variations: North India - Hair is offered in Ganga or Yamuna. South India - Takes place at temples like Tirupati or Palani with special rituals.',
    practicalRelevance: 'Still widely practiced; often combined with family gatherings and temple visits. It maintains symbolic values of purification, renewal, and seeking blessings for the child\'s well-being.',
    relatedConcepts: [
      "Purification",
      "Karma cleansing",
      "Mental clarity"
    ],
    multimediaResources: [
      { type: 'video', url: 'https://www.youtube.com/watch?v=mundan_ritual', caption: 'Mundan Ceremony. Articles: https://vedicrituals.org/chudakarana-ceremony, Books: Rites of Passage in Hinduism, Understanding Mundan Rituals' },
      { type: 'image', url: 'https://placehold.co/600x400.png', caption: 'Scissors or Razor used in Chudakarana', dataAiHint: 'mundan scissors' },
      { type: 'image', url: 'https://placehold.co/600x400.png', caption: 'Child undergoing Mundan ceremony', dataAiHint: 'child haircut ritual' },
      { type: 'image', url: 'https://placehold.co/600x400.png', caption: 'New clothes for the child after Mundan', dataAiHint: 'child new clothes' }
    ],
  },
  {
    id: 'karnavedha',
    numericalId: 9,
    sanskritName: 'कर्णवेध (Karnavedha)',
    englishName: 'Ear Piercing',
    stageOfLife: 'Childhood (3rd or 5th year)',
    category: 'Childhood',
    iconName: 'CircleDot',
    briefExplanation: 'Ear piercing of the child, often done alongside head shaving. It is believed to activate vital points for better health and intellect.',
    detailedDescription: 'Karnavedha involves the piercing of the child\'s earlobes, usually in the third or fifth year. The ritual is believed to enhance physical health by stimulating acupuncture points and to open the inner ears to sacred sounds, thereby improving intellect and spiritual receptivity. It is also thought to ward off evil influences.',
    purpose: "To improve health, enhance intellect, and protect the child from negative energies. It also holds cultural and aesthetic significance.",
    timing: {
        recommendedTime: "Typically in the 3rd or 5th year of age, or sometimes earlier.",
        astrologicalConditions: "An auspicious day and muhurta are chosen, often considering the child's Nakshatra."
    },
    ritualSteps: [
      'Selecting an auspicious day and time (Preparation).',
      'Purifying the area and instruments (Preparation).',
      'Invoking deities like Lord Surya (Sun God) for blessings (Preparation).',
      'The child’s earlobes are gently pierced by an experienced person, often with gold or silver wires/earrings (Main Ritual).',
      'Chanting of specific mantras for protection and well-being during the piercing (Main Ritual).',
      'Application of turmeric or healing herbs to the pierced ears (Main Ritual).',
      'Offering prayers for the child’s health and long life (Post-Ritual).',
      'Blessings from elders and family members (Post-Ritual).',
      'Distribution of sweets or a small feast (Post-Ritual).'
    ],
    symbolism: 'Piercing the ears is thought to open channels for receiving sacred sounds and wisdom. Ornaments worn in the ears (like gold) are believed to have therapeutic and protective qualities, balancing bodily energies. Symbolic colors include Gold (auspiciousness, health) and Yellow (purity).',
    vedicSignificance: 'Some ancient texts associate Karnavedha with activating specific marma points (vital energy points) related to brain function and sensory perception. It is considered a purificatory rite that contributes to the child\'s overall well-being.',
    scripturalReferences: [
        {
            text: "Sushruta Samhita (Ayurvedic Text)",
            quote: "Piercing specific points on the earlobe is mentioned for therapeutic benefits, such as preventing certain ailments."
        },
        {
            text: "Grihya Sutras",
            quote: "Karnavedha is listed among the essential Sanskaras for a child's development and protection."
        }
    ],
    mantraSnippet: 'भद्रं कर्णेभिः शृणुयाम देवाः । (Rigveda - May we hear what is auspicious with our ears, O Gods)',
    culturalSignificance: 'A common cultural practice for both boys and girls in many Hindu communities, often performed with festive elements and family gatherings. It is considered a mark of cultural identity and tradition.',
    practicalRelevance: 'While some health claims are traditional, the practice remains a significant cultural and aesthetic tradition. Ensuring hygienic methods and proper aftercare is crucial in modern observance.',
    relatedConcepts: ["Marma Therapy", "Sacred Sounds", "Purification", "Aesthetic Tradition"],
    multimediaResources: [
      { type: 'image', url: 'https://placehold.co/600x400.png', caption: 'Karnavedha (Ear Piercing) ceremony', dataAiHint: 'ear piercing child' },
      { type: 'image', url: 'https://placehold.co/600x400.png', caption: 'Gold earrings for Karnavedha', dataAiHint: 'gold earrings ritual' },
      { type: 'video', url: 'https://www.youtube.com/watch?v=placeholder_karnavedha', caption: 'Karnavedha Explained. Resources: Sushruta Samhita, Grihya Sutras' },
    ],
  },
  {
    id: 'vidyarambha',
    numericalId: 10,
    sanskritName: 'विद्यारंभ (Vidyarambha)',
    englishName: 'Initiation into Education',
    stageOfLife: 'Early Childhood (around 5th year)',
    category: 'Educational',
    iconName: 'BookOpen',
    briefExplanation: 'Vidyarambha is the sacred ritual of initiating a child into the world of formal learning and knowledge. It marks the beginning of their intellectual and spiritual education.',
    purpose: "To seek divine blessings from Goddess Saraswati and commence the child’s journey in education with purity, devotion, and guidance.",
    timing: {
      recommendedTime: "Traditionally performed at the age of 4 or 5. Auspicious occasions include Vasant Panchami and Vijayadashami (Dussehra).",
      astrologicalConditions: "Auspicious Nakshatra and Tithi are considered for the ceremony."
    },
    detailedDescription: 'Vidyarambha marks the formal beginning of a child’s education, usually around age five. It involves prayers to Goddess Saraswati for wisdom and knowledge. The purpose is to seek divine blessings and start the child’s educational journey with purity and devotion. Related concepts are Knowledge, Spiritual Learning, and Child Development. Modern adaptations include school-based ceremonies.',
    ritualSteps: [
      'Choose an auspicious day (Preparation)',
      'Set up a small altar with Saraswati idol or image (Preparation)',
      'Prepare rice, turmeric, and flowers (Preparation)',
      'Child is made to write the first letters (often \'ॐ\' or alphabets) on rice, a slate, or a sand tray (Main Ritual)',
      'Priest chants Saraswati mantras and invokes blessings (Main Ritual)',
      'Parents guide the child\'s hand in writing the first words (Main Ritual)',
      'Distribution of sweets and blessings from elders (Post-Ritual)',
      'Offering to Saraswati (Post-Ritual)',
      'Initiation of regular learning (school or home) (Post-Ritual)'
    ],
    symbolism: 'Writing on Rice symbolizes abundance and purity of knowledge. Saraswati Puja honors the Goddess of Wisdom and Learning. Symbolic colors are Yellow (learning) and White (purity).',
    vedicSignificance: 'Manusmriti states the child should be initiated into learning Vedas with sanctity. Smriti Chandrika mentions education should begin with the grace of Saraswati. It emphasizes the sanctity of knowledge.',
    scripturalReferences: [
      {
        text: "Manusmriti",
        quote: "Let the child be initiated into the learning of Vedas with sanctity and reverence."
      },
      {
        text: "Smriti Chandrika",
        quote: "Education should begin with the grace of the Divine Mother Saraswati."
      }
    ],
    mantraSnippet: 'या कुन्देन्दुतुषारहारधवला या शुभ्रवस्त्रावृता (O Goddess Saraswati, fair as the jasmine flower, garlanded with snow and moonlight—bless me with wisdom)',
    culturalSignificance: 'Widely celebrated across India, especially in Bengal, Kerala, and Tamil Nadu with regional variations like \'Aksharabhyasam\'. Regional Variations: Kerala - Children write first letters during Vidyarambham on Vijayadashami at temples. Bengal - Performed on Saraswati Puja day with chalk and slate.',
    practicalRelevance: 'Still observed in both traditional and modern formats. Schools may conduct group ceremonies on Saraswati Puja or Vasant Panchami, emphasizing the importance of early education.',
    relatedConcepts: [
      "Knowledge",
      "Spiritual learning",
      "Child development"
    ],
    multimediaResources: [
      { type: 'video', url: 'https://www.youtube.com/watch?v=vidyarambham_ritual', caption: 'Vidyarambham Ceremony. Articles: https://vedicrituals.org/vidyarambha, Books: Samskaras: Sacred Rites of Hinduism, Education in Ancient India' },
      { type: 'image', url: 'https://placehold.co/600x400.png', caption: 'Rice Plate used in Vidyarambha', dataAiHint: 'rice plate learning' },
      { type: 'image', url: 'https://placehold.co/600x400.png', caption: 'Child writing first letters on slate', dataAiHint: 'child writing slate' },
      { type: 'image', url: 'https://placehold.co/600x400.png', caption: 'Veena, symbol of Goddess Saraswati', dataAiHint: 'veena saraswati' }
    ],
  },
  {
    id: 'upanayana',
    numericalId: 11,
    sanskritName: 'उपनयन (Upanayana)',
    englishName: 'Sacred Thread Ceremony',
    stageOfLife: 'Childhood/Adolescence (typically 8th-12th year)',
    category: 'Educational',
    iconName: 'GraduationCap',
    briefExplanation: 'Upanayana marks the initiation of a child (usually a boy) into formal spiritual education, especially the study of the Vedas. It symbolizes the child’s second birth—one of knowledge and discipline.',
    purpose: "To initiate the Brahmacharya phase (student life), entrust the child to a Guru, and instill discipline, learning, and spiritual pursuit.",
    timing: {
      recommendedTime: "Between 8 and 16 years, depending on caste and capability. Auspicious occasions include Vasant Panchami, Guru Purnima.",
      astrologicalConditions: "Performed on an auspicious Nakshatra and Tithi"
    },
    detailedDescription: 'Upanayana marks the initiation of a child (traditionally a boy) into formal spiritual education, especially the study of the Vedas. It symbolizes the child’s second birth—one of knowledge and discipline. The purpose is to initiate the Brahmacharya phase (student life), entrust the child to a Guru, and instill discipline, learning, and spiritual pursuit. Related concepts include Brahmacharya, Vedic Learning, and Spiritual Rebirth. Modern adaptations sometimes include girls and focus on character development.',
    ritualSteps: [
      'Selection of a qualified Guru (teacher) (Preparation).',
      'Setting up the ceremonial altar with sacred fire (Preparation).',
      'Procurement of Yajnopavita (sacred thread) (Preparation).',
      'Boy receives the sacred thread (Yajnopavita) from Guru or priest (Main Ritual).',
      'Recitation of Gayatri Mantra for the first time (Main Ritual).',
      'Taking vows of celibacy, learning, and discipline (Main Ritual).',
      'Begging for alms (Bhiksha) from family members to cultivate humility (Main Ritual).',
      'Commencement of Vedic studies (Post-Ritual).',
      'Adoption of Brahmacharya lifestyle (Post-Ritual).',
      'Daily Sandhya Vandana (ritual prayer) (Post-Ritual).'
    ],
    symbolism: 'The Yajnopavita (sacred thread) represents spiritual rebirth and commitment to knowledge. The Gayatri Mantra symbolizes intellectual awakening and divine enlightenment. Begging alms (Bhiksha) teaches humility and reliance on community. Symbolic colors are White (purity) and Orange/Saffron (sacrifice and discipline).',
    vedicSignificance: 'A crucial rite traditionally for Brahmin, Kshatriya, and Vaishya varnas, making one eligible to study Vedas and perform Vedic rituals (Dvija - twice-born). It establishes the Guru-Shishya (teacher-disciple) relationship, central to Vedic learning.',
    scripturalReferences: [
      {
        text: "Manusmriti",
        quote: "The Upanayana ceremony is the second birth of the twice-born (Dvija)."
      },
      {
        text: "Taittiriya Brahmana",
        quote: "Let the child be guided by the Guru after receiving the sacred thread for Vedic study."
      },
      {
        text: "Grihya Sutras",
        quote: "Details the procedures for Upanayana, including the investiture of the sacred thread and initiation into the Gayatri Mantra."
      }
    ],
    mantraSnippet: 'ॐ भूर्भुवः स्वः। तत्सवितुर्वरेण्यं। भर्गो देवस्य धीमहि। धियो यो नः प्रचोदयात्॥ (Gayatri Mantra - We meditate upon the divine light of the Supreme Creator, who may enlighten our intellect.)',
    culturalSignificance: 'A deeply respected and significant coming-of-age ceremony in many Hindu communities, marking the transition to a life of disciplined learning and spiritual responsibility. Regional Variations: South India - Called \'Upanayanam\', often held with great ceremony at temples or community halls. North India - Involves an extended family gathering with Vedic chanting and specific community customs.',
    practicalRelevance: 'Still practiced among orthodox families and communities. Some modern adaptations exist, focusing on character development, ethical values, and commitment to learning. In some reform movements and communities, girls are also initiated through Upanayana.',
    relatedConcepts: [
      "Brahmacharya (Student Life/Celibacy)",
      "Vedic Learning & Shastras",
      "Spiritual Rebirth (Dvija)",
      "Guru-Shishya Parampara (Teacher-Disciple Tradition)",
      "Gayatri Mantra"
    ],
    multimediaResources: [
      { type: 'video', url: 'https://www.youtube.com/watch?v=upanayana_vidhi', caption: 'Upanayana Ceremony. Articles: https://vedicheritage.in/upanayana, Books: Samskara: A Treatise on Hindu Rituals by Rajbali Pandey, Vedic Student Life in Ancient India.' },
      { type: 'image', url: 'https://placehold.co/600x400.png', caption: 'Sacred Thread (Yajnopavita) for Upanayana', dataAiHint: 'sacred thread yajnopavita' },
      { type: 'image', url: 'https://placehold.co/600x400.png', caption: 'Boy receiving Gayatri Mantra from Guru', dataAiHint: 'upanayana guru shishya' },
      { type: 'image', url: 'https://placehold.co/600x400.png', caption: 'Items used in Upanayana: Kamandalu, Deer Skin, Staff', dataAiHint: 'upanayana ritual items' }
    ],
  },
  {
    id: 'vedarambha',
    numericalId: 12,
    sanskritName: 'वेदारंभ (Vedarambha)',
    englishName: 'Beginning of Vedic Study',
    stageOfLife: 'Adolescence (follows Upanayana)',
    category: 'Educational',
    iconName: 'BookOpen',
    briefExplanation: 'Performed after Upanayana, marking the formal beginning of studying the Vedas, scriptures, and spiritual texts under a teacher.',
    detailedDescription: 'Vedarambha marks the formal initiation into the study of the Vedas and sacred scriptures. It usually follows the Upanayana Sanskar and signifies the child\'s intellectual and spiritual journey guided by a Guru. The purpose is to commence Vedic education under a Guru\'s guidance, promoting disciplined learning, chanting, and deep study of scriptures. Related concepts include Brahmacharya, Guru-Shishya Parampara, and Vedic Chanting. Modern adaptations may involve online classes or blended academic studies.',
    purpose: "To commence Vedic education under a Guru's guidance, promoting disciplined learning, chanting, and deep study of scriptures.",
    timing: {
        recommendedTime: "After Upanayana, typically between 8 to 16 years. Auspicious occasions include Guru Purnima, Vasant Panchami.",
        astrologicalConditions: "Auspicious Nakshatra and Tithi preferred."
    },
    ritualSteps: [
      'Establishing the Guru–disciple relationship (Preparation).',
      'Setting up the learning environment with sacred texts and altar (Preparation).',
      'Guru initiates the disciple into chanting Vedic mantras (Main Ritual).',
      'First recitation of selected mantras or Sukta from the Rigveda or Yajurveda (Main Ritual).',
      'Offering Dakshina (respectful gift) to the Guru (Main Ritual).',
      'Instructions on rules of Brahmacharya and duties of a student (Main Ritual).',
      'Regular study sessions with memorization and explanation (Post-Ritual).',
      'Daily Sandhya Vandana and mantra practice (Post-Ritual).'
    ],
    symbolism: 'Mantra recitation symbolizes the opening of spiritual and intellectual insight. Guru Dakshina represents gratitude and respect toward the teacher. Scriptures embody the transmission of ancient knowledge and dharma. Symbolic colors include Saffron (knowledge, renunciation), White (purity), and Brown (earthiness, grounding).',
    vedicSignificance: 'Essential for preserving and transmitting Vedic knowledge, which forms the foundation of Sanatan Dharma. It emphasizes the oral tradition (Shruti) and the sanctity of Vedic hymns and philosophies. The Guru-Shishya Parampara ensures authentic learning.',
    scripturalReferences: [
      {
        text: "Taittiriya Upanishad",
        quote: "Acharya devo bhava — The teacher should be revered as God."
      },
      {
        text: "Rigveda",
        quote: "Let noble thoughts come to us from all directions. (आ नो भद्राः क्रतवो यन्तु विश्वतः)"
      },
      {
        text: "Manusmriti",
        quote: "The study of Vedas is the highest austerity for a Brahmana."
      }
    ],
    mantraSnippet: 'ॐ सह नाववतु। सह नौ भुनक्तु। सह वीर्यं करवावहै। तेजस्विनावधीतमस्तु मा विद्विषावहै॥ (Shanti Mantra - May He protect us both. May He nourish us both. May we work together with great energy. May our studies be vigorous and effective. May we not hate one another.)',
    culturalSignificance: 'This Sanskar instills reverence for learning and connects the student to the lineage of spiritual wisdom in Sanatan Dharma. It reinforces the importance of a qualified teacher for acquiring profound knowledge. Regional Variations: Maharashtra - Often combined with Upanayana and Sandhya Vandana training. Tamil Nadu - Involves recitation of Tamil Vedas (Thevarams) in some traditions.',
    practicalRelevance: 'Still followed in Vedic Gurukuls and traditional schools. Adapted in modern spiritual education through structured courses, workshops, and mentorship. The core principle of dedicated learning from a knowledgeable source remains relevant.',
    relatedConcepts: [
      "Brahmacharya (Student Life)",
      "Guru-Shishya Parampara (Teacher-Disciple Tradition)",
      "Vedic Chanting & Memorization (Patha)",
      "Shruti & Smriti (Revealed & Remembered Texts)",
      "Adhyayana (Self-Study)"
    ],
    multimediaResources: [
      { type: 'video', url: 'https://www.youtube.com/watch?v=vedic_learning', caption: 'Vedic Learning Process. Articles: https://vedicstudy.org/vedarambha, Books: Introduction to Vedic Studies by Swami Dayananda Saraswati, The Guru Tradition in India.' },
      { type: 'image', url: 'https://placehold.co/600x400.png', caption: 'Palm leaf scriptures symbol of Vedic study', dataAiHint: 'palm leaf manuscript' },
      { type: 'image', url: 'https://placehold.co/600x400.png', caption: 'Guru teaching disciple Vedas', dataAiHint: 'guru shishya vedas' },
      { type: 'image', url: 'https://placehold.co/600x400.png', caption: 'Sacred fire used in Vedarambha initiation', dataAiHint: 'vedarambha fire ritual' }
    ],
  },
  {
    id: 'samavartana',
    numericalId: 13,
    sanskritName: 'समावर्तन (Samavartana)',
    englishName: 'Graduation Ceremony',
    stageOfLife: 'End of Studentship/Graduation',
    category: 'Educational',
    iconName: 'School',
    briefExplanation: 'Samavartana marks the completion of Brahmacharya and Vedic education. It symbolizes the readiness of the student to re-enter worldly life and take on responsibilities while upholding dharma.',
    purpose: "To conclude the phase of disciplined student life and prepare for the duties of Grihastha (householder) or further spiritual practices.",
    timing: {
      recommendedTime: "After completion of Vedic studies. Auspicious occasions include before entering Grihastha Ashrama or after years of education.", // Adjusted from recommendedAge
      astrologicalConditions: "Auspicious Nakshatra and planetary positions are considered.",
      // Added from JSON
      auspiciousOccasions: ["Before entering Grihastha Ashrama", "After years of education"]
    },
    detailedDescription: 'Samavartana marks the completion of Brahmacharya and Vedic education. It symbolizes the readiness of the student to re-enter worldly life and take on responsibilities while upholding dharma. The purpose is to conclude the phase of disciplined student life and prepare for the duties of Grihastha (householder) or further spiritual practices. Related concepts include Brahmacharya Completion, Entry into Grihastha Ashram, and Guru-Shishya Tradition. Modern adaptations can be seen in academic graduation ceremonies.',
    ritualSteps: [
      'Guru declares the student ready to graduate (Preparation).',
      'Student performs purification rituals (Preparation).',
      'Snana (ceremonial bath) (Main Ritual).',
      'Recitation of key mantras and final instructions by the Guru (Main Ritual).',
      'Offering Guru Dakshina (gift of gratitude) (Main Ritual).',
      'Symbolic re-entry into society as a mature individual (Main Ritual).',
      'Blessings from elders and teachers (Post-Ritual).',
      'Contemplation of the next life phase — marriage or deeper spiritual pursuit (Post-Ritual).'
    ],
    symbolism: 'Ceremonial Bath symbolizes purification and transformation from student to responsible adult. Guru Dakshina represents expression of gratitude and completion of learning bond. New Clothes symbolize a new beginning and maturity. Symbolic colors often include White, Gold, and Saffron.',
    vedicSignificance: 'A crucial rite signifying the end of formal studentship. Acknowledges the student\'s mastery of knowledge and character development, making them eligible for the householder stage. The Guru imparts final wisdom for a dharmic life.',
    scripturalReferences: [
      {
        text: "Manusmriti",
        quote: "The student, having studied the Vedas with his teacher, shall take the Samavartana ceremony and enter the householder life."
      },
      {
        text: "Chandogya Upanishad",
        quote: "Having completed studies, let him now contemplate and live with purpose."
      }
    ],
    mantraSnippet: 'सत्यं वद। धर्मं चर। स्वाध्यायान्मा प्रमदः। (Speak the truth. Practice dharma. Do not neglect self-study.)',
    culturalSignificance: 'This Sanskar represents graduation in ancient Indian education and the beginning of worldly duties. It emphasizes lifelong learning and dharma. Regional Variations: North India - Often performed before marriage. South India - Some traditions combine it with wedding rituals.',
    practicalRelevance: 'Still practiced in traditional Gurukuls; symbolically adapted in modern academic graduations. Emphasizes applying learned knowledge and values in life, and responsibly transitioning to new roles and responsibilities.',
    relatedConcepts: [
      "Brahmacharya Completion",
      "Entry into Grihastha Ashram",
      "Guru-Shishya Tradition"
    ],
    multimediaResources: [
      { type: 'video', url: 'https://www.youtube.com/watch?v=samavartana_ritual', caption: 'Samavartana Ceremony. Articles: https://vedicrites.org/samavartana, Books: The Four Ashramas in Hindu Life, Vedic Student Rituals Explained.' },
      { type: 'image', url: 'https://placehold.co/600x400.png', caption: 'Water pot symbolizing purification in Samavartana', dataAiHint: 'water pot ritual' },
      { type: 'image', url: 'https://placehold.co/600x400.png', caption: 'Student receiving blessings during Samavartana', dataAiHint: 'graduation blessings' },
      { type: 'image', url: 'https://placehold.co/600x400.png', caption: 'New garments for the graduate in Samavartana', dataAiHint: 'graduation new clothes' }
    ],
  },
  {
    id: 'vivaha',
    numericalId: 14,
    sanskritName: 'विवाह (Vivaha)',
    englishName: 'Marriage Ceremony',
    stageOfLife: 'Adulthood',
    category: 'Marriage & Adulthood',
    iconName: 'Heart',
    briefExplanation: 'Vivaha is the sacred Hindu marriage ceremony that unites two individuals and their families, establishing the householder stage of life (Grihastha Ashrama). It is considered a vital Sanskar that sanctifies the couple\'s relationship under divine guidance.',
    purpose: "To solemnize the union of husband and wife, ensure progeny, and fulfill societal and spiritual duties together.",
    timing: {
      recommendedTime: "Typically after completion of education and Samavartana Sanskar. Auspicious Muhurta based on Kundali, Nakshatra, and Tithi are considered.", // Adjusted from recommendedAge
      astrologicalConditions: "Matchmaking (Kundali Milan) and auspicious timing for the ceremony are crucial.",
       // Added from JSON
      auspiciousOccasions: ["Auspicious Muhurta based on Kundali", "During favorable Nakshatra and Tithi"]
    },
    detailedDescription: 'Vivaha is the sacred Hindu marriage ceremony uniting two individuals and families, establishing the householder stage (Grihastha Ashrama). It sanctifies the relationship under divine guidance. The purpose is to solemnize the union, ensure progeny, and fulfill societal and spiritual duties together. Related concepts include Grihastha Ashrama, Kundali Matching, and Dharma in Marriage. Modern adaptations include diverse cultural customs alongside traditional rites.',
    ritualSteps: [
      'Invitation of relatives and priests (Preparation).',
      'Establishment of wedding altar (Mandap) (Preparation).',
      'Purification rituals and decoration (Preparation).',
      'Kanyadaan (Giving away of the bride) (Main Ritual).',
      'Panigrahana (Holding hands) (Main Ritual).',
      'Saptapadi (Seven steps around the sacred fire) (Main Ritual).',
      'Mangalsutra tying and Sindoor application (Main Ritual).',
      'Blessings from elders (Post-Ritual).',
      'Reception and celebrations (Post-Ritual).',
      'Grihapravesh (Bride\'s entry to husband\'s home) (Post-Ritual).'
    ],
    symbolism: 'Sacred Fire (Agni) acts as witness and purifier of the marriage vows. Seven Steps (Saptapadi) represent commitments made by the couple for their life together. Mangalsutra symbolizes marital status and protection. Symbolic colors are Red, Gold, and Orange.',
    vedicSignificance: 'Considered a sacrament (not just a contract) essential for social stability, procreation, and performing domestic rituals. It is a means for spiritual growth through shared responsibilities and devotion. Vivaha is a cornerstone of Grihastha Ashrama, enabling individuals to fulfill their dharma and contribute to society.',
    scripturalReferences: [
      {
        text: "Manusmriti",
        quote: "The marriage is the means of continuation of the family and performance of dharma."
      },
      {
        text: "Rigveda",
        quote: "May you live together happily, with mutual love and respect."
      }
    ],
    mantraSnippet: 'सप्तपदी व्रतम् (Saptapadi Vratam - The seven steps and associated vows to each other)',
    culturalSignificance: 'Vivaha is one of the most celebrated Sanskars, marking the beginning of family life and responsibilities. It strengthens social bonds and spiritual partnership. Regional Variations: North India - Incorporates rituals like Jaimala and Baraat. South India - Emphasizes rituals like Kanyadaan and Oonjal.',
    practicalRelevance: 'Marriage continues as a crucial social and spiritual institution with both traditional and contemporary practices. It fosters commitment, companionship, and shared life goals.',
    relatedConcepts: [
      "Grihastha Ashrama",
      "Kundali Matching",
      "Dharma and Artha in Marriage"
    ],
    multimediaResources: [
      { type: 'video', url: 'https://www.youtube.com/watch?v=vivaha_ritual', caption: 'Vivaha Ceremony. Articles: https://vedicrites.org/vivaha, Books: Hindu Wedding Rituals, Sacred Marriage Ceremonies in India.' },
      { type: 'image', url: 'https://placehold.co/600x400.png', caption: 'Sacred fire (Agni) at Vivaha ceremony', dataAiHint: 'hindu wedding fire' },
      { type: 'image', url: 'https://placehold.co/600x400.png', caption: 'Couple taking Saptapadi (seven steps)', dataAiHint: 'saptapadi ritual' },
      { type: 'image', url: 'https://placehold.co/600x400.png', caption: 'Mangalsutra and flower garlands in Vivaha', dataAiHint: 'mangalsutra garlands' }
    ],
  },
  {
    id: 'vanaprastha', // Matches JSON id 14
    numericalId: 14, // Sequence number
    sanskritName: 'वानप्रस्थ (Vanaprastha)',
    englishName: 'Retirement from Worldly Duties',
    stageOfLife: 'Retirement/Later Adulthood',
    category: 'Marriage & Adulthood', // Mapped for filter consistency
    iconName: 'MountainSnow',
    briefExplanation: 'Vanaprastha marks the transition from the householder stage (Grihastha) to a life of contemplation and spiritual practice. It involves gradually withdrawing from worldly responsibilities to focus on self-realization and preparing for Sannyasa (renunciation).',
    purpose: 'To detach from material life, reduce worldly attachments, and increase spiritual focus in the later stages of life.',
    timing: {
      recommendedTime: 'Typically after fulfillment of family duties, often around 50-60 years of age. When children are grown and self-sufficient.', // Combined recommendedAge and lifeConditions
      astrologicalConditions: 'Auspicious timing may be considered.', // General placeholder
    },
    detailedDescription: 'Vanaprastha marks the transition from the householder stage (Grihastha) to a life of contemplation and spiritual practice. It involves gradually withdrawing from worldly responsibilities to focus on self-realization and preparing for Sannyasa (renunciation). The purpose is to detach from material life, reduce worldly attachments, and increase spiritual focus. Related concepts include Grihastha Ashrama, Sannyasa, and Moksha. Modern adaptations often mean a symbolic shift towards spiritual focus while still engaged in society.',
    ritualSteps: [
      'Formal announcement of intention to retire (Preparation).',
      'Passing responsibilities to the next generation (Preparation).',
      'Symbolic leaving of the household (Main Ritual).',
      'Adoption of simpler clothing and lifestyle (Main Ritual).',
      'Living in seclusion or forest hermitage (Vanam) - traditionally (Main Ritual).',
      'Daily spiritual practices such as meditation, study of scriptures (Post-Ritual).',
      'Mentorship of younger family members (Post-Ritual).'
    ],
    symbolism: 'Forest Hermitage (Vanam) symbolizes detachment and spiritual focus. Simple Clothing represents renunciation of material excess. Passing of Responsibility signifies fulfillment of worldly duties. Symbolic colors often include Saffron and White.',
    vedicSignificance: 'An important stage in the Ashrama system for preparing for the final stage of life (Sannyasa) by cultivating dispassion, introspection, and deeper spiritual focus.',
    scripturalReferences: [
      {
        text: "Manusmriti",
        quote: "After fulfilling the householder’s duties, one should retire to the forest for spiritual pursuits."
      },
      {
        text: "Bhagavad Gita",
        quote: "Renunciation of desires leads to liberation."
      }
    ],
    mantraSnippet: 'वानप्रस्थ संस्कार मंत्र (Prayer for peaceful transition to spiritual life)',
    culturalSignificance: 'Vanaprastha is a respected stage signifying wisdom and preparation for liberation (Moksha). It reflects the natural progression of life emphasizing detachment and spiritual growth. Traditional variations involved actual physical withdrawal, while modern interpretations see a gradual simplification of life and increased spiritual study.',
    practicalRelevance: 'Encourages balance between worldly duties and spiritual development even in contemporary life. Many adopt this stage symbolically by reducing work commitments and practicing mindfulness.',
    relatedConcepts: [
      "Grihastha Ashrama",
      "Sannyasa (Renunciation)",
      "Moksha (Liberation)"
    ],
    multimediaResources: [
      { type: 'video', url: 'https://www.youtube.com/watch?v=vanaprastha_ritual', caption: 'Vanaprastha Explained. Articles: https://vedicrites.org/vanaprastha, Books: Stages of Life in Hinduism' },
      { type: 'image', url: 'https://placehold.co/600x400.png', caption: 'Forest hermitage symbol of Vanaprastha', dataAiHint: 'forest hermitage' },
      { type: 'image', url: 'https://placehold.co/600x400.png', caption: 'Elderly person in meditation for Vanaprastha', dataAiHint: 'elderly meditation' },
      { type: 'image', url: 'https://placehold.co/600x400.png', caption: 'Simple robes representing Vanaprastha lifestyle', dataAiHint: 'simple robes spiritual' }
    ],
  },
  {
    id: 'sannyasa', // Matches JSON id 15
    numericalId: 15, // Sequence number
    sanskritName: 'संन्यास (Sannyasa)',
    englishName: 'Renunciation',
    stageOfLife: 'Renunciation/Final Stage',
    category: 'Last Rites', // Mapped for filter consistency (represents a final stage)
    iconName: 'Sunrise', // For liberation theme
    briefExplanation: 'Sannyasa is the final stage of life in Hindu philosophy, where the individual renounces all worldly attachments and dedicates themselves entirely to spiritual liberation (Moksha). It involves leaving behind material possessions, social roles, and family ties to pursue self-realization and union with the divine.',
    purpose: 'To attain liberation by abandoning desires, ego, and attachments to the physical world.',
    timing: {
      recommendedTime: 'Typically after fulfilling all worldly and familial duties, often in later years of life. When one is ready to fully detach from worldly life and pursue spiritual liberation.', // Combined
      astrologicalConditions: 'Auspicious timing may be considered based on individual chart.', // General placeholder
    },
    detailedDescription: 'Sannyasa is the final stage of life, involving complete renunciation of worldly attachments to pursue Moksha (liberation). The purpose is to attain liberation by abandoning desires, ego, and attachments. Key concepts are Vanaprastha, Moksha, and the Guru. Modern adaptations can involve living a renunciate life within society.',
    ritualSteps: [
      'Formal renunciation of possessions and social identity (Preparation).',
      'Seeking blessings from family and spiritual teacher (Guru) (Preparation).',
      'Ceremony marking departure from worldly life (Main Ritual).',
      'Adoption of simple robes (usually saffron) (Main Ritual).',
      'Taking vows of celibacy, non-possession, and spiritual discipline (Main Ritual).',
      'Living as a wandering ascetic or in an ashram (Post-Ritual).',
      'Engaging in meditation, scriptural study, and teaching (Post-Ritual).'
    ],
    symbolism: 'Saffron Robes symbolize purity and renunciation. Walking Staff (Danda) represents authority and spiritual power. Begging Bowl signifies detachment from material wealth. Symbolic colors include Saffron and Orange.',
    vedicSignificance: 'The culmination of the Ashrama system, Sannyasa is dedicated entirely to the pursuit of Moksha, transcending worldly duties and identities for union with the Divine.',
    scripturalReferences: [
      {
        text: "Bhagavad Gita",
        quote: "One who has renounced all desires and dwells free of ego, content with the self, attains peace."
      },
      {
        text: "Upanishads",
        quote: "The renunciate walks the path of knowledge and liberation."
      }
    ],
    mantraSnippet: 'संन्यास संस्कार मंत्र (Invocation for renunciation and spiritual awakening)',
    culturalSignificance: 'Sannyasa marks the culmination of the spiritual journey in Hinduism. It is revered as the highest state of detachment and dedication to God. Traditionally involved becoming a wandering monk, modern practitioners may adopt renunciate ideals without full social withdrawal.',
    practicalRelevance: 'Sannyasa inspires spiritual seekers worldwide to prioritize inner growth over material success. The principles of detachment and focus on liberation are timeless.',
    relatedConcepts: [
      "Vanaprastha (Retirement)",
      "Moksha (Liberation)",
      "Guru (Spiritual Teacher)"
    ],
    multimediaResources: [
      { type: 'video', url: 'https://www.youtube.com/watch?v=sannyasa_ritual', caption: 'Sannyasa Initiation. Articles: https://vedicrites.org/sannyasa, Books: Path of Renunciation in Hinduism' },
      { type: 'image', url: 'https://placehold.co/600x400.png', caption: 'Sannyasi with saffron robes and Danda', dataAiHint: 'sannyasi monk' },
      { type: 'image', url: 'https://placehold.co/600x400.png', caption: 'Begging bowl symbolizing detachment', dataAiHint: 'begging bowl renunciation' },
      { type: 'image', url: 'https://placehold.co/600x400.png', caption: 'Sannyasi in deep meditation', dataAiHint: 'sannyasi meditation' }
    ],
  },
  {
    id: 'antyeshti', // Matches JSON id 16
    numericalId: 16, // Sequence number
    sanskritName: 'अन्त्येष्टि (Antyeshti)',
    englishName: 'Last Rites / Funeral Ceremony',
    stageOfLife: 'Death',
    category: 'Last Rites',
    iconName: 'FlameKindling',
    briefExplanation: 'Antyeshti is the final rite of passage in Hinduism, marking the cremation and ceremonial farewell of the deceased. It is a sacred ritual intended to purify the departed soul and facilitate its journey to the afterlife or rebirth.',
    purpose: 'To honor the dead, ensure the soul’s peaceful transition, and release it from the physical body.',
    timing: {
      recommendedTime: 'As soon as possible after death, typically within a day. Ceremony duration is usually completed within one day, followed by mourning period.', // Combined
      astrologicalConditions: 'Generally performed without delay, though some almanacs might suggest avoiding specific inauspicious moments if possible.', // General placeholder
    },
    detailedDescription: 'Antyeshti, the final rite, involves cremation and ceremonies to purify the departed soul and aid its journey. The purpose is to honor the dead and ensure peaceful transition. Key concepts include Shraddha, Pitru Paksha, and Moksha. Modern adaptations include eco-friendly cremations.',
    ritualSteps: [
      'Washing and dressing the body (Preparation).',
      'Placing the body on a wooden bier (Preparation).',
      'Family and community gathering (Preparation).',
      'Lighting the funeral pyre (usually by the eldest son) (Main Ritual).',
      'Recitation of mantras and prayers for the departed soul (Main Ritual).',
      'Performing rituals to liberate the soul (Pind Daan, Tarpan) (Main Ritual).',
      'Collecting ashes for immersion in holy rivers (Post-Ritual).',
      'Observing mourning period (Shraddha) and offerings to ancestors (Post-Ritual).'
    ],
    symbolism: 'Fire symbolizes purification and transformation of the physical body. Water aids in cleansing and the soul’s journey. Offerings help ancestors and the departed attain peace. Symbolic color is White (mourning).',
    vedicSignificance: 'Considered an essential duty (dharma) towards the deceased, aiding the soul in its passage and ensuring the well-being of the family lineage. It reaffirms the cyclical nature of life and death.',
    scripturalReferences: [
      {
        text: "Garuda Purana",
        quote: "Describes the rites for the dead and the soul’s journey."
      },
      {
        text: "Rigveda",
        quote: "Hymns recited during the funeral rituals for peace and liberation."
      }
    ],
    mantraSnippet: 'ॐ त्र्यम्बकं यजामहे सुगन्धिं पुष्टिवर्धनम् । उर्वारुकमिव बन्धनान्मृत्योर्मुक्षीय मामृतात् ॥ (Mahamrityunjaya Mantra - We worship the three-eyed One (Lord Shiva)... May He liberate us from death for the sake of immortality.)',
    culturalSignificance: 'Antyeshti reflects Hindu beliefs in rebirth and honors ancestors. Regional variations exist in rituals and mourning periods. It provides structured grieving and community support.',
    practicalRelevance: 'Funeral rites remain vital for emotional closure and spiritual peace. Modern adaptations include eco-friendly cremations and digital memorials.',
    relatedConcepts: [
      "Shraddha (Ancestor rites)",
      "Pitru Paksha",
      "Moksha (Liberation)"
    ],
    multimediaResources: [
      { type: 'video', url: 'https://www.youtube.com/watch?v=antyeshti_ritual', caption: 'Antyeshti Funeral Rites. Articles: https://vedicrites.org/antyeshti, Books: Garuda Purana and Death Rituals' },
      { type: 'image', url: 'https://placehold.co/600x400.png', caption: 'Funeral pyre for Antyeshti', dataAiHint: 'funeral pyre cremation' },
      { type: 'image', url: 'https://placehold.co/600x400.png', caption: 'Offerings made during Antyeshti', dataAiHint: 'funeral offerings' },
      { type: 'image', url: 'https://placehold.co/600x400.png', caption: 'Ashes immersion in a holy river', dataAiHint: 'ashes immersion river' }
    ],
  },
];

