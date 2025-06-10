
// src/data/astrology-courses-data.ts
import type { Course, AstrologyCourseData, CourseModule, LessonItem } from '@/types';

export const astrologyCoursesData: AstrologyCourseData = {
  courses: [
    {
      id: 'introduction-to-vedic-astrology',
      title: 'Introduction to Vedic Astrology',
      subtitle: "Foundations of Jyotish Shastra – Understanding Planets, Signs, Houses & Charts",
      level: 'Beginner',
      category: 'Vedic Astrology',
      duration: '4 Weeks (20–25 hours total)',
      language: "English",
      imageUrl: 'https://placehold.co/600x400.png',
      dataAiHint: 'vedic astrology chart',
      briefDescription: 'Basics of planets, signs, houses, and charts.',
      detailedDescription: `Foundations of Jyotish Shastra – Understanding Planets, Signs, Houses & Charts.
This beginner-level course introduces the fundamental principles of Vedic astrology including the nature and influence of planets, zodiac signs, astrological houses, and how to read a basic Kundli (birth chart).
Format: Video lectures, readings, exercises, quizzes, and discussion forums.`,
      objectives: [
        "Understand the origins and foundations of Vedic astrology",
        "Learn the traits of all 9 planets and 12 zodiac signs",
        "Gain clarity on the meanings of the 12 astrological houses",
        "Interpret a basic birth chart using planetary placements"
      ],
      format: {
        mode: "Online",
        materials: ["Video lectures", "PDF notes", "Quizzes", "Assignments", "Live Discussion Forums"]
      },
      certificationCriteria: [
        "Score at least 60% on quizzes and complete final chart analysis assignment",
      ],
      certificationBadge: "Beginner Vedic Astrology Certified",
      syllabus: [
        {
          id: 'w1-intro-vedic',
          week: 1,
          title: 'Understanding the Cosmos',
          description: "This week lays the groundwork, exploring the philosophy and core components of Vedic Astrology.",
          lessons: [
            { id: 'l1-1-intro', title: 'What is Vedic Astrology?', summary: 'History, differences from Western astrology, purpose in Indian culture.', type: 'lesson', duration: "1 hour" },
            { id: 'l1-2-intro', title: 'Karma, Time, and Cosmic Order', summary: 'Role of karma and kala (time) in Jyotish.', type: 'lesson', duration: "1 hour" },
            { id: 'l1-3-intro', title: 'The Sidereal Zodiac & Nakshatras', summary: 'Introduction to star-based astrology (Nirayana system) and the 27 Nakshatras.', type: 'lesson', duration: "1.5 hours" },
            { id: 'a1-1-intro', title: 'Research Your Birth Details', summary: 'Collect your accurate date, time, and place of birth for future chart analysis.', type: 'assignment', duration: "30 mins" },
          ],
           assignment: "Research your own date/time of birth and prepare for chart analysis."
        },
        {
          id: 'w2-intro-vedic',
          week: 2,
          title: 'The Nine Planets (Navagrahas)',
          description: "Deep dive into the Navagrahas, their characteristics, and their influence in Jyotish.",
          lessons: [
            { id: 'l2-1-intro', title: 'The Grahas Explained', summary: 'Detailed study of Sun, Moon, Mars, Mercury, Jupiter, Venus, Saturn, Rahu, and Ketu – their mythology, symbolism, and astrological significance.', type: 'lesson', duration: "2 hours" },
            { id: 'l2-2-intro', title: 'Planetary Nature and Influence', summary: 'Understanding benefic/malefic classifications, natural friendships and enmities, and functional roles of planets.', type: 'lesson', duration: "1.5 hours" },
            { id: 'q2-1-intro', title: 'Planetary Attributes Quiz', summary: 'Test your knowledge on planets and their associated qualities (color, deity, element, etc.).', type: 'quiz', duration: "30 mins" },
            { id: 'ac2-1-intro', title: 'Graha Flashcards Activity', summary: 'Create visual flashcards for each Graha, noting key attributes. This will aid memorization.', type: 'activity', duration: "1 hour" },
          ],
          quiz: "Match planets to attributes (color, deity, element, qualities).",
          activity: "Create flashcards of each Graha."
        },
        {
          id: 'w3-intro-vedic',
          week: 3,
          title: '12 Signs & 12 Houses',
          description: "Explore the zodiac signs (Rashis) and astrological houses (Bhavas), and their interplay.",
          lessons: [
            { id: 'l3-1-intro', title: 'Understanding Rashis (Zodiac Signs)', summary: 'In-depth look at the traits of Aries to Pisces, their ruling planets, elements (Fire, Earth, Air, Water), and modalities (Cardinal, Fixed, Mutable).', type: 'lesson', duration: "2 hours" },
            { id: 'l3-2-intro', title: 'The Bhavas (Houses)', summary: 'Comprehensive understanding of what each of the 12 houses signifies—self, wealth, siblings, home, children, health, relationships, longevity, fortune, career, gains, and losses/spirituality.', type: 'lesson', duration: "2 hours" },
            { id: 'l3-3-intro', title: 'Planet in Sign Combinations (Intro)', summary: 'Introduction to how a planet\'s expression changes based on the sign it occupies. Basic effects of planets in different signs.', type: 'lesson', duration: "1 hour" },
            { id: 'ex3-1-intro', title: 'Sample Chart Exercise', summary: 'Using a sample Kundli, practice identifying the signs on house cusps and the planets placed in various signs and houses.', type: 'exercise', duration: "1 hour" },
          ],
          exercise: "Use a sample chart to identify signs and houses."
        },
        {
          id: 'w4-intro-vedic',
          week: 4,
          title: 'Birth Chart Fundamentals',
          description: "Learn to synthesize the knowledge of planets, signs, and houses to begin interpreting a birth chart.",
          lessons: [
            { id: 'l4-1-intro', title: 'Lagna (Ascendant) and Chart Types', summary: 'Understand the critical importance of the Ascendant (Lagna) and get introduced to different chart styles (North Indian, South Indian, East Indian/diamond).', type: 'lesson', duration: "1.5 hours" },
            { id: 'l4-2-intro', title: 'Reading a Basic Kundli', summary: 'A step-by-step approach to putting signs, houses, and planets together for a foundational interpretation of a birth chart. Identifying key strengths and challenges.', type: 'lesson', duration: "2 hours" },
            { id: 'ca4-1-intro', title: 'Capstone Assignment: Basic Chart Interpretation', summary: 'Interpret a provided beginner-level birth chart by analyzing planetary placements in signs and houses. Submit a short report.', type: 'capstone', duration: "2.5 hours" },
          ],
          finalAssignment: "Interpret a basic birth chart using signs, planets, and houses."
        },
      ],
      instructor: { id: 'inst-jyotishacharya', name: 'Acharya Jyotish', bio: 'Experienced Vedic Astrologer with over 10 years of teaching experience. Specializes in foundational Jyotish principles and making complex topics accessible to beginners.', qualifications: ['Jyotish Praveena', 'MA Sanskrit', 'Certified Vedic Counselor'] },
      price: '$49',
      benefits: [
        'Downloadable chart templates (North & South Indian styles)',
        'Comprehensive Graha and Rashi summary sheets',
        "Beginner’s Sanskrit-English glossary of astrological terms",
        "Access to a basic online Kundli generator tool (or link to a recommended free one)"
      ],
      reviews: [
        { id: 'rev1-intro', userId: 'user123', userName: 'Learner A', rating: 5, comment: 'Excellent introduction! Clearly explained complex concepts.', date: '2023-10-15' },
        { id: 'rev2-intro', userId: 'user456', userName: 'Student B', rating: 4, comment: 'Good pace for beginners. The assignments were helpful.', date: '2023-11-01' }
      ],
      nextCourseRecommendation: "Intermediate Level – Applied Chart Analysis & Yogas",
    },
    {
      id: 'understanding-12-zodiac-signs',
      title: 'Understanding the 12 Zodiac Signs',
      level: 'Beginner',
      category: 'Sign Interpretation',
      duration: '3 Weeks (6-8 Hours)',
      language: "English",
      imageUrl: 'https://placehold.co/600x400.png',
      dataAiHint: 'zodiac wheel symbols',
      briefDescription: 'Nature, traits, and significance of each Rashi.',
      detailedDescription: 'Dive deep into the twelve zodiac signs (Rashis) of Vedic astrology. This course explores the mythology, symbolism, elemental nature, ruling planets, and key characteristics associated with each sign, helping you understand their influence on personality and life events.',
      objectives: [
        "Identify and describe all 12 Rashis.",
        "Understand the elemental (Tattva) and modal (Chara, Sthira, Dvisvabhava) nature of signs.",
        "Learn the ruling planet for each sign and its implications.",
        "Recognize key personality traits associated with each Rashi."
      ],
      keyTopics: ['Aries to Pisces Detailed Study', 'Elements and Qualities of Signs', 'Sign Rulerships', 'Mythology behind Signs', 'Signs in Different Houses'],
      prerequisites: ['None, but "Introduction to Vedic Astrology" is beneficial.'],
      format: {mode: "Online", materials: ["Video modules", "Reading assignments", "Sign characteristic charts"]},
      certificationCriteria: ["Completion of all modules and a final quiz on sign attributes."],
      certificationBadge: "Rashi Foundations Certificate",
      syllabus: [
        {
          id: 'w1-zodiac-signs-intro',
          week: 1,
          title: 'Introduction to Rashis & Fiery Signs',
          description: "Understand the zodiac belt and begin with the energetic fire signs.",
          lessons: [
            {id:'l1-1-zodiac', title: 'The Rashi Chakra: The Zodiac Belt', summary: 'Overview of the 12 signs, their order, and importance in Jyotish.', type: 'lesson'},
            {id:'l1-2-zodiac', title: 'Aries (Mesha): The Pioneer', summary: 'Characteristics, ruling planet Mars, symbolism, and key traits of Aries.', type: 'lesson'},
            {id:'l1-3-zodiac', title: 'Leo (Simha): The Royal', summary: 'Characteristics, ruling planet Sun, symbolism, and key traits of Leo.', type: 'lesson'},
            {id:'l1-4-zodiac', title: 'Sagittarius (Dhanus): The Archer', summary: 'Characteristics, ruling planet Jupiter, symbolism, and key traits of Sagittarius.', type: 'lesson'},
            {id:'ex1-1-zodiac', title: 'Exercise: Fiery Traits Reflection', summary: 'Reflect on how fire sign traits manifest in people you know or public figures.', type: 'exercise'}
          ],
          assignment: "Write a short profile for one Fire sign."
        },
        {
          id: 'w2-zodiac-signs-earth-air',
          week: 2,
          title: 'Earthy & Airy Signs',
          description: "Exploring the practical Earth signs and communicative Air signs.",
          lessons: [
            {id:'l2-1-zodiac', title: 'Taurus (Vrishabha): The Anchor', summary: 'Characteristics, ruling planet Venus, symbolism, and key traits of Taurus.', type: 'lesson'},
            {id:'l2-2-zodiac', title: 'Virgo (Kanya): The Analyst', summary: 'Characteristics, ruling planet Mercury, symbolism, and key traits of Virgo.', type: 'lesson'},
            {id:'l2-3-zodiac', title: 'Capricorn (Makara): The Organizer', summary: 'Characteristics, ruling planet Saturn, symbolism, and key traits of Capricorn.', type: 'lesson'},
            {id:'l2-4-zodiac', title: 'Gemini (Mithuna): The Communicator', summary: 'Characteristics, ruling planet Mercury, symbolism, and key traits of Gemini.', type: 'lesson'},
            {id:'l2-5-zodiac', title: 'Libra (Tula): The Harmonizer', summary: 'Characteristics, ruling planet Venus, symbolism, and key traits of Libra.', type: 'lesson'},
            {id:'l2-6-zodiac', title: 'Aquarius (Kumbha): The Visionary', summary: 'Characteristics, ruling planet Saturn, symbolism, and key traits of Aquarius.', type: 'lesson'},
            {id:'quiz2-1-zodiac', title: 'Quiz: Earth & Air Sign Attributes', summary: 'Match characteristics to the correct Earth and Air signs.', type: 'quiz'}
          ],
           quiz: "Identify the ruling planets of Earth and Air signs."
        },
        {
          id: 'w3-zodiac-signs-water-synthesis',
          week: 3,
          title: 'Watery Signs & Synthesis',
          description: "Delving into the intuitive Water signs and synthesizing knowledge of all signs.",
          lessons: [
            {id:'l3-1-zodiac', title: 'Cancer (Karka): The Nurturer', summary: 'Characteristics, ruling planet Moon, symbolism, and key traits of Cancer.', type: 'lesson'},
            {id:'l3-2-zodiac', title: 'Scorpio (Vrischika): The Transformer', summary: 'Characteristics, ruling planet Mars, symbolism, and key traits of Scorpio.', type: 'lesson'},
            {id:'l3-3-zodiac', title: 'Pisces (Meena): The Dreamer', summary: 'Characteristics, ruling planet Jupiter, symbolism, and key traits of Pisces.', type: 'lesson'},
            {id:'l3-4-zodiac', title: 'Comparative Analysis of Signs', summary: 'Understanding similarities and differences across elements and modalities.', type: 'lesson'},
            {id:'capstone3-1-zodiac', title: 'Final Assignment: Sign Profile Creation', summary: 'Create a detailed profile for two zodiac signs, covering all aspects learned.', type: 'capstone'}
          ],
          finalAssignment: "Describe the key differences between a Fire sign and a Water sign."
        }
      ],
      instructor: { id: 'inst-rashiacharya', name: 'Rashi Acharya', bio: 'Specialist in Rashi and Nakshatra interpretation with 5 years of teaching.', qualifications: ['Jyotish Visharad'] },
      price: '$39',
      benefits: ["Downloadable Rashi characteristics chart", "Element and modality quick reference guide"],
      nextCourseRecommendation: "Basics of the 12 Houses"
    },
    {
      id: 'basics-of-12-houses',
      title: 'Basics of the 12 Houses',
      level: 'Beginner',
      category: 'Vedic Astrology',
      duration: '3 Weeks (6-8 Hours)',
      language: "English",
      imageUrl: 'https://placehold.co/600x400.png',
      dataAiHint: 'astrology houses chart',
      briefDescription: 'House meanings and life areas.',
      detailedDescription: 'Understand the significance of the twelve houses (Bhavas) in a Vedic horoscope. This course explains what each house represents, the areas of life it governs, and how planets placed in these houses influence an individual\'s experiences and destiny.',
      objectives: ["Identify the 12 houses in a birth chart.", "Understand the primary significations of each house.", "Learn about house classifications (Kendra, Trikona, etc.).", "Grasp the concept of house rulership."],
      keyTopics: ['Introduction to Bhavas', 'Meanings of Houses 1-12', 'Natural Significators (Karakas)', 'House Groupings (Kendras, Trikonas, etc.)', 'Interpreting Planets in Houses'],
      prerequisites: ['"Introduction to Vedic Astrology" or basic understanding of signs and planets.'],
      format: {mode: "Online", materials: ["Video lectures", "House signification tables", "Chart examples"]},
      certificationCriteria: ["Completion of all modules and a final quiz on house meanings."],
      certificationBadge: "Bhava Foundations Certificate",
      syllabus: [
        {
          id: 'w1-houses-foundations',
          week: 1,
          title: 'Introduction to Bhavas & Kendra Houses',
          description: "Understanding the concept of houses and the foundational Kendra houses.",
          lessons: [
            {id:'l1-1-houses', title: 'What are Bhavas (Houses)?', summary: 'The concept of houses in Jyotish and their importance in delineating life areas.', type: 'lesson'},
            {id:'l1-2-houses', title: 'The 1st House (Lagna/Tanu Bhava): Self', summary: 'Personality, physical body, vitality, and overall life path.', type: 'lesson'},
            {id:'l1-3-houses', title: 'The 4th House (Sukha Bhava): Home & Happiness', summary: 'Mother, home, property, vehicles, emotional peace, and inner happiness.', type: 'lesson'},
            {id:'l1-4-houses', title: 'The 7th House (Jaya/Kalatra Bhava): Partnerships', summary: 'Marriage, spouse, business partnerships, and significant others.', type: 'lesson'},
            {id:'l1-5-houses', title: 'The 10th House (Karma Bhava): Career', summary: 'Profession, public image, actions, status, and worldly achievements.', type: 'lesson'},
            {id:'ex1-1-houses', title: 'Exercise: Kendra House Identification', summary: 'Identify Kendra houses in sample charts and list their significations.', type: 'exercise'}
          ],
          assignment: "List three significations for each Kendra house."
        },
        {
          id: 'w2-houses-trikona-upachaya',
          week: 2,
          title: 'Trikona, Upachaya & Other Houses',
          description: "Exploring houses of fortune, growth, and other specific life areas.",
          lessons: [
            {id:'l2-1-houses', title: 'The 5th House (Putra Bhava): Creativity & Progeny', summary: 'Children, intellect, creativity, past life merits, speculation.', type: 'lesson'},
            {id:'l2-2-houses', title: 'The 9th House (Dharma/Bhagya Bhava): Fortune & Higher Learning', summary: 'Father, guru, higher education, luck, dharma, long journeys.', type: 'lesson'},
            {id:'l2-3-houses', title: 'Upachaya Houses (3, 6, 10, 11): Growth Over Time', summary: 'Understanding houses where malefic planets can give good results over time.', type: 'lesson'},
            {id:'l2-4-houses', title: 'The 3rd House (Sahaja Bhava): Siblings & Courage', summary: 'Younger siblings, courage, communication, short journeys, skills.', type: 'lesson'},
            {id:'l2-5-houses', title: 'The 6th House (Ari/Ripu Bhava): Obstacles & Service', summary: 'Enemies, debts, diseases, daily work, service, pets.', type: 'lesson'},
            {id:'l2-6-houses', title: 'The 11th House (Labha Bhava): Gains & Aspirations', summary: 'Income, gains, elder siblings, friends, fulfillment of desires.', type: 'lesson'},
            {id:'quiz2-1-houses', title: 'Quiz: Trikona & Upachaya Houses', summary: 'Match houses with their primary significations.', type: 'quiz'}
          ],
          quiz: "Which houses are Trikona houses? What do Upachaya houses generally indicate?"
        },
        {
          id: 'w3-houses-dusthana-maraka-synthesis',
          week: 3,
          title: 'Dusthana, Maraka Houses & Synthesis',
          description: "Understanding challenging houses and synthesizing house knowledge.",
          lessons: [
            {id:'l3-1-houses', title: 'Dusthana Houses (6, 8, 12): Challenges', summary: 'Understanding houses of difficulty, loss, and transformation.', type: 'lesson'},
            {id:'l3-2-houses', title: 'The 8th House (Randhra/Ayu Bhava): Longevity & Transformation', summary: 'Longevity, death, inheritance, occult, chronic illness, transformation.', type: 'lesson'},
            {id:'l3-3-houses', title: 'The 12th House (Vyaya Bhava): Loss & Liberation', summary: 'Expenses, losses, foreign travel, isolation, spirituality, liberation.', type: 'lesson'},
            {id:'l3-4-houses', title: 'The 2nd House (Dhana Bhava): Wealth & Family', summary: 'Wealth, family, speech, food intake, early education.', type: 'lesson'},
            {id:'l3-5-houses', title: 'Maraka Houses (2 & 7): End of Life Significators', summary: 'Introduction to houses indicating end of life or significant transitions.', type: 'lesson'},
            {id:'capstone3-1-houses', title: 'Final Assignment: House Analysis in a Chart', summary: 'Analyze the significations of 3 key houses in a sample chart.', type: 'capstone'}
          ],
          finalAssignment: "Briefly describe the general nature of Dusthana houses."
        }
      ],
      instructor: { id: 'inst-bhavaguru', name: 'Bhava Guru', bio: 'Expert in Bhava analysis and chart interpretation.', qualifications: ['Jyotish Acharya'] },
      price: '$39',
      benefits: ["Comprehensive Bhava signification PDF", "Chart templates for practice"],
      nextCourseRecommendation: "Nakshatra Foundations"
    },
    {
      id: 'nakshatra-foundations',
      title: 'Nakshatra Foundations',
      level: 'Beginner',
      category: 'Nakshatra Study',
      duration: '5 Weeks (10-12 Hours)',
      language: "English",
      imageUrl: 'https://placehold.co/600x400.png',
      dataAiHint: 'lunar mansions stars',
      briefDescription: 'Introduction to 27 Nakshatras and their symbolism.',
      detailedDescription: 'Discover the 27 lunar mansions (Nakshatras) that form a crucial layer of Vedic astrological interpretation. This course introduces each Nakshatra, its ruling deity, symbol, planetary ruler, and core characteristics, providing a foundation for deeper Nakshatra-based analysis.',
      objectives: [
        "Understand the concept and importance of Nakshatras in Vedic astrology.",
        "Identify all 27 Nakshatras and their span in the zodiac.",
        "Learn the ruling planet, deity, and symbol for each Nakshatra.",
        "Grasp basic personality traits associated with each Nakshatra."
      ],
      keyTopics: ['Concept of Nakshatras', 'The 27 Nakshatras Overview', 'Deities and Symbols', 'Ruling Planets', 'Basic Nakshatra Interpretations', 'Padas (Quarters) Introduction'],
      prerequisites: ['Basic understanding of planets and signs is helpful.'],
      format: {mode: "Online", materials: ["Video lectures", "Nakshatra summary tables", "Mythological stories"]},
      certificationCriteria: ["Completion of all modules and a final quiz on Nakshatra attributes."],
      certificationBadge: "Nakshatra Basics Certificate",
      syllabus: [
        {
          id: 'w1-nakshatra-intro',
          week: 1,
          title: 'Introduction to Nakshatras & Group 1 (Ashwini to Mrigashira)',
          description: "Understanding the Nakshatra system and the first set of lunar mansions.",
          lessons: [
            {id:'l1-1-nakshatra', title: 'What are Nakshatras? The Lunar Mansions', summary: 'Concept, calculation, and their significance beyond Rashis.', type: 'lesson'},
            {id:'l1-2-nakshatra', title: 'Ashwini: The Star of Beginnings', summary: 'Deity Ashwini Kumaras, ruling planet Ketu, symbolism, and traits.', type: 'lesson'},
            {id:'l1-3-nakshatra', title: 'Bharani: The Star of Restraint', summary: 'Deity Yama, ruling planet Venus, symbolism, and traits.', type: 'lesson'},
            {id:'l1-4-nakshatra', title: 'Krittika: The Star of Fire', summary: 'Deity Agni, ruling planet Sun, symbolism, and traits.', type: 'lesson'},
            {id:'l1-5-nakshatra', title: 'Rohini: The Star of Ascent', summary: 'Deity Brahma, ruling planet Moon, symbolism, and traits.', type: 'lesson'},
            {id:'l1-6-nakshatra', title: 'Mrigashira: The Searching Star', summary: 'Deity Soma, ruling planet Mars, symbolism, and traits.', type: 'lesson'},
            {id:'ex1-1-nakshatra', title: 'Exercise: Identify Your Birth Nakshatra', summary: 'Use an online tool to find your birth Nakshatra and note its ruler and deity.', type: 'exercise'}
          ],
          assignment: "Research and write a short note on the deity of your birth Nakshatra (or Ashwini if unknown)."
        },
        {
          id: 'w2-nakshatra-group2',
          week: 2,
          title: 'Nakshatras Group 2 (Ardra to Hasta)',
          description: "Continuing the exploration of Nakshatras.",
          lessons: [
            {id:'l2-1-nakshatra', title: 'Ardra: The Star of Sorrow/Achievement', summary: 'Deity Rudra, ruling planet Rahu, symbolism, and traits.', type: 'lesson'},
            {id:'l2-2-nakshatra', title: 'Punarvasu: The Star of Renewal', summary: 'Deity Aditi, ruling planet Jupiter, symbolism, and traits.', type: 'lesson'},
            {id:'l2-3-nakshatra', title: 'Pushya: The Star of Nourishment', summary: 'Deity Brihaspati, ruling planet Saturn, symbolism, and traits.', type: 'lesson'},
            {id:'l2-4-nakshatra', title: 'Ashlesha: The Clinging Star', summary: 'Deity Nagas/Sarpas, ruling planet Mercury, symbolism, and traits.', type: 'lesson'},
            {id:'l2-5-nakshatra', title: 'Magha: The Star of Power', summary: 'Deity Pitris, ruling planet Ketu, symbolism, and traits.', type: 'lesson'},
            {id:'l2-6-nakshatra', title: 'Purva Phalguni: The Star of Fortune', summary: 'Deity Bhaga, ruling planet Venus, symbolism, and traits.', type: 'lesson'},
            {id:'l2-7-nakshatra', title: 'Uttara Phalguni: The Star of Patronage', summary: 'Deity Aryaman, ruling planet Sun, symbolism, and traits.', type: 'lesson'},
            {id:'l2-8-nakshatra', title: 'Hasta: The Golden Handed Star', summary: 'Deity Savitar, ruling planet Moon, symbolism, and traits.', type: 'lesson'},
            {id:'act2-1-nakshatra', title: 'Activity: Nakshatra Symbol Drawing', summary: 'Draw or find images for the symbols of this week\'s Nakshatras.', type: 'activity'}
          ],
          activity: "List one positive and one challenging trait for Ardra and Pushya."
        },
        {
          id: 'w3-nakshatra-group3',
          week: 3,
          title: 'Nakshatras Group 3 (Chitra to Jyeshtha)',
          description: "Exploring the middle segment of the Nakshatra belt.",
          lessons: [
            {id:'l3-1-nakshatra', title: 'Chitra: The Star of Opportunity', summary: 'Deity Tvashtar/Vishwakarma, ruling planet Mars, symbolism, and traits.', type: 'lesson'},
            {id:'l3-2-nakshatra', title: 'Swati: The Self-Going Star', summary: 'Deity Vayu, ruling planet Rahu, symbolism, and traits.', type: 'lesson'},
            {id:'l3-3-nakshatra', title: 'Vishakha: The Star of Purpose', summary: 'Deities Indra & Agni, ruling planet Jupiter, symbolism, and traits.', type: 'lesson'},
            {id:'l3-4-nakshatra', title: 'Anuradha: The Star of Success', summary: 'Deity Mitra, ruling planet Saturn, symbolism, and traits.', type: 'lesson'},
            {id:'l3-5-nakshatra', title: 'Jyeshtha: The Chief or Elder Star', summary: 'Deity Indra, ruling planet Mercury, symbolism, and traits.', type: 'lesson'},
            {id:'quiz3-1-nakshatra', title: 'Quiz: Ruling Planets of Nakshatras', summary: 'Match Nakshatras from this group to their ruling planets.', type: 'quiz'}
          ],
          quiz: "What are the deities for Chitra and Jyeshtha?"
        },
        {
          id: 'w4-nakshatra-group4',
          week: 4,
          title: 'Nakshatras Group 4 (Mula to Revati)',
          description: "Covering the final set of Nakshatras and their unique energies.",
          lessons: [
            {id:'l4-1-nakshatra', title: 'Mula: The Root Star', summary: 'Deity Nirriti, ruling planet Ketu, symbolism, and traits.', type: 'lesson'},
            {id:'l4-2-nakshatra', title: 'Purva Ashadha: The Invincible Star', summary: 'Deity Apah, ruling planet Venus, symbolism, and traits.', type: 'lesson'},
            {id:'l4-3-nakshatra', title: 'Uttara Ashadha: The Universal Star', summary: 'Deity Vishvadevas, ruling planet Sun, symbolism, and traits.', type: 'lesson'},
            {id:'l4-4-nakshatra', title: 'Shravana: The Star of Learning', summary: 'Deity Vishnu, ruling planet Moon, symbolism, and traits.', type: 'lesson'},
            {id:'l4-5-nakshatra', title: 'Dhanishta: The Star of Symphony', summary: 'Deity Vasus, ruling planet Mars, symbolism, and traits.', type: 'lesson'},
            {id:'l4-6-nakshatra', title: 'Shatabhisha: The Veiling Star', summary: 'Deity Varuna, ruling planet Rahu, symbolism, and traits.', type: 'lesson'},
            {id:'l4-7-nakshatra', title: 'Purva Bhadrapada: The Burning Pair Star', summary: 'Deity Aja Ekapada, ruling planet Jupiter, symbolism, and traits.', type: 'lesson'},
            {id:'l4-8-nakshatra', title: 'Uttara Bhadrapada: The Warrior Star', summary: 'Deity Ahir Budhnya, ruling planet Saturn, symbolism, and traits.', type: 'lesson'},
            {id:'l4-9-nakshatra', title: 'Revati: The Wealthy Star', summary: 'Deity Pushan, ruling planet Mercury, symbolism, and traits.', type: 'lesson'},
            {id:'act4-1-nakshatra', title: 'Activity: Personal Nakshatra Reflection', summary: 'Reflect on the traits of your own birth Nakshatra and how they manifest in your life.', type: 'activity'}
          ],
           activity: "Choose one Nakshatra from this group and describe its symbolism."
        },
        {
          id: 'w5-nakshatra-synthesis-padas',
          week: 5,
          title: 'Nakshatra Padas & Synthesis',
          description: "Introduction to Nakshatra Padas and synthesizing Nakshatra knowledge.",
          lessons: [
            {id:'l5-1-nakshatra', title: 'Introduction to Nakshatra Padas', summary: 'Understanding the concept of the four quarters (Padas) of each Nakshatra and their basic significance.', type: 'lesson'},
            {id:'l5-2-nakshatra', title: 'Nakshatras in Chart Interpretation: An Overview', summary: 'How Nakshatras add depth to understanding planetary placements (Moon, Lagna, Sun).', type: 'lesson'},
            {id:'l5-3-nakshatra', title: 'Mythological Stories & Their Importance', summary: 'Connecting Nakshatra characteristics to their presiding deities and myths.', type: 'lesson'},
            {id:'capstone5-1-nakshatra', title: 'Final Assignment: Nakshatra Analysis Basics', summary: 'Analyze the Moon Nakshatra for 2-3 sample charts.', type: 'capstone'}
          ],
          finalAssignment: "Explain the concept of Nakshatra Padas."
        }
      ],
      instructor: { id: 'inst-nakshatragyani', name: 'Nakshatra Gyani', bio: 'Passionate about lunar mansions and their impact.', qualifications: ['Certificate in Nakshatra Astrology'] },
      price: '$59',
      benefits: ["Detailed PDF of all 27 Nakshatras", "Nakshatra deity and symbol chart"],
      nextCourseRecommendation: "Nakshatra-Based Predictions"
    },
    {
      id: 'introduction-to-panchang',
      title: 'Introduction to Panchang',
      level: 'Beginner',
      category: 'Panchang',
      duration: '2 Weeks (4-5 Hours)',
      language: "English",
      imageUrl: 'https://placehold.co/600x400.png',
      dataAiHint: 'hindu calendar panchang',
      briefDescription: 'Tithi, Yoga, Karana, Nakshatra, Vara.',
      detailedDescription: 'Learn the basics of the Panchang, the traditional Hindu almanac. This course covers the five essential limbs (Panch-anga): Tithi (lunar day), Vara (weekday), Nakshatra (lunar mansion), Yoga (lunisolar combination), and Karana (half lunar day), and their significance in daily life and Muhurta (electional astrology).',
      objectives: [
        "Understand the five limbs of the Panchang.",
        "Learn how to identify Tithi, Nakshatra, Yoga, Karana, and Vara for any given day.",
        "Grasp the basic auspicious and inauspicious implications of each element.",
        "Learn to use a basic Panchang for daily guidance."
      ],
      keyTopics: ['What is Panchang?', 'Tithi Calculation and Effects', 'Vara Significance', 'Nakshatra in Daily Life', 'Yoga and Karana Basics', 'Using Panchang for Auspicious Timings'],
      prerequisites: ['None'],
      format: {mode: "Online", materials: ["Video explainers", "Sample Panchang readings", "Calculation worksheets"]},
      certificationCriteria: ["Completion of weekly exercises and a final quiz on Panchang elements."],
      certificationBadge: "Panchang Basics Certificate",
      syllabus: [
        {
          id: 'w1-panchang-elements1',
          week: 1,
          title: 'Core Elements: Vara, Tithi, Nakshatra',
          description: "Understanding the foundational elements of the Hindu almanac.",
          lessons: [
            {id:'l1-1-panchang', title: 'What is Panchang? The Five Limbs', summary: 'Introduction to the five elements: Vara, Tithi, Nakshatra, Yoga, Karana.', type: 'lesson'},
            {id:'l1-2-panchang', title: 'Vara (Weekday): Planetary Influences', summary: 'Significance of each weekday and its ruling planet.', type: 'lesson'},
            {id:'l1-3-panchang', title: 'Tithi (Lunar Day): Phases of the Moon', summary: 'Understanding Shukla Paksha & Krishna Paksha Tithis, their calculation and general effects.', type: 'lesson'},
            {id:'l1-4-panchang', title: 'Nakshatra (Lunar Mansion): The Star of the Day', summary: 'Review of Nakshatras as daily indicators of energy.', type: 'lesson'},
            {id:'ex1-1-panchang', title: 'Exercise: Find Today\'s Vara, Tithi, Nakshatra', summary: 'Use an online Panchang to find the current day\'s core elements.', type: 'exercise'}
          ],
          assignment: "List the ruling planets for each Vara (weekday)."
        },
        {
          id: 'w2-panchang-elements2-application',
          week: 2,
          title: 'Yoga, Karana & Practical Application',
          description: "Exploring the remaining limbs and learning to use the Panchang.",
          lessons: [
            {id:'l2-1-panchang', title: 'Yoga (Lunisolar Combination): Auspiciousness', summary: 'The 27 Yogas, their calculation, and general auspicious/inauspicious nature.', type: 'lesson'},
            {id:'l2-2-panchang', title: 'Karana (Half Lunar Day): Detailed Timing', summary: 'The 11 Karanas, their calculation, and significance in Muhurta.', type: 'lesson'},
            {id:'l2-3-panchang', title: 'Basic Muhurta: Choosing Auspicious Times', summary: 'Introduction to using Panchang elements for finding favorable timings for daily activities.', type: 'lesson'},
            {id:'l2-4-panchang', title: 'Reading a Sample Panchang', summary: 'Walkthrough of a typical Panchang display and interpreting its information.', type: 'lesson'},
            {id:'capstone2-1-panchang', title: 'Assignment: Plan an Auspicious Day', summary: 'Based on a sample Panchang, suggest good and bad times for specific activities.', type: 'capstone'}
          ],
          finalAssignment: "Describe the difference between a Tithi and a Karana."
        }
      ],
      instructor: { id: 'inst-panchangvid', name: 'Panchang Vidwan', bio: 'Expert in traditional almanac calculations.', qualifications: ['MA Vedic Studies'] },
      price: '$29',
      benefits: ["Quick reference guide to Panchang elements", "Template for daily Panchang tracking"],
      nextCourseRecommendation: "Introduction to Vedic Astrology"
    },
    {
      id: 'sun-moon-sign-interpretation',
      title: 'Sun & Moon Sign Interpretation',
      level: 'Beginner',
      category: 'Sign Interpretation',
      duration: '2 Weeks (4-5 Hours)',
      language: "English",
      imageUrl: 'https://placehold.co/600x400.png',
      dataAiHint: 'sun moon astrology',
      briefDescription: 'How to read emotional vs ego traits.',
      detailedDescription: 'Understand the distinct roles of the Sun sign (representing ego, soul purpose) and the Moon sign (representing mind, emotions, and inner self) in Vedic astrology. This course teaches how to interpret these key placements to gain insights into personality and emotional nature.',
      objectives: [
        "Differentiate between the roles of the Sun and Moon in a natal chart.",
        "Understand how the Sun sign reflects core identity and vitality.",
        "Learn how the Moon sign reveals emotional nature and inner needs.",
        "Begin to synthesize Sun and Moon sign interpretations for a holistic view."
      ],
      keyTopics: ['Significance of Sun in Vedic Astrology', 'Significance of Moon in Vedic Astrology', 'Interpreting Sun Sign Traits', 'Interpreting Moon Sign Traits', 'Comparing Sun and Moon Influences', 'Impact on Personality'],
      prerequisites: ['Basic knowledge of the 12 Zodiac Signs is helpful.'],
      format: {mode: "Online", materials: ["Short video lectures", "Comparative analysis worksheets", "Case studies"]},
      certificationCriteria: ["Completion of interpretive exercises and a final reflection paper."],
      certificationBadge: "Luminaries Interpretation Certificate",
      syllabus: [
        {
          id: 'w1-sun-moon-basics',
          week: 1,
          title: 'The Sun: Soul & Ego',
          description: "Exploring the Sun's role as the significator of self, vitality, and outward expression.",
          lessons: [
            {id:'l1-1-sunmoon', title: 'The Sun (Surya) in Vedic Astrology', summary: 'Symbolism, significance, and representation of the soul, father, and authority.', type: 'lesson'},
            {id:'l1-2-sunmoon', title: 'Sun Through the 12 Signs', summary: 'How the Sun\'s expression changes in Aries through Pisces.', type: 'lesson'},
            {id:'l1-3-sunmoon', title: 'Identifying Your Sun Sign\'s Core Traits', summary: 'Practical examples and self-reflection on Sun sign characteristics.', type: 'lesson'},
            {id:'ex1-1-sunmoon', title: 'Exercise: Your Sun Sign Profile', summary: 'Write a brief profile based on your Sun sign and its general traits.', type: 'exercise'}
          ],
          assignment: "Describe the Sun's role in representing one's ego and vitality."
        },
        {
          id: 'w2-sun-moon-synthesis',
          week: 2,
          title: 'The Moon: Mind & Emotions',
          description: "Understanding the Moon's influence on emotions, mind, and inner world, and synthesizing with the Sun.",
          lessons: [
            {id:'l2-1-sunmoon', title: 'The Moon (Chandra) in Vedic Astrology', summary: 'Symbolism, significance, and representation of the mind, mother, and emotions.', type: 'lesson'},
            {id:'l2-2-sunmoon', title: 'Moon Through the 12 Signs', summary: 'How the Moon\'s emotional expression changes in Aries through Pisces.', type: 'lesson'},
            {id:'l2-3-sunmoon', title: 'Contrasting Sun & Moon: Ego vs. Emotion', summary: 'Understanding the interplay between outer self (Sun) and inner self (Moon).', type: 'lesson'},
            {id:'capstone2-1-sunmoon', title: 'Assignment: Sun & Moon Synthesis', summary: 'For a sample chart (or your own), describe the combined influence of the Sun and Moon signs.', type: 'capstone'}
          ],
          finalAssignment: "Explain how the Moon sign reflects one's emotional nature."
        }
      ],
      instructor: { id: 'inst-luminaryexpert', name: 'Luminari Devi', bio: 'Focuses on the impact of Sun and Moon in charts.', qualifications: ['Jyotish Praveena'] },
      price: '$29',
      benefits: ["Sun & Moon sign keywords PDF", "Worksheet for personal Sun/Moon analysis"],
      nextCourseRecommendation: "How to Read a Kundli (Birth Chart)"
    },
    {
      id: 'how-to-read-kundli',
      title: 'How to Read a Kundli (Birth Chart)',
      level: 'Beginner',
      category: 'Vedic Astrology',
      duration: '6 Weeks (12-15 Hours)',
      language: "English",
      imageUrl: 'https://placehold.co/600x400.png',
      dataAiHint: 'birth chart analysis',
      briefDescription: 'Step-by-step decoding.',
      detailedDescription: 'A practical, step-by-step guide to reading a Vedic birth chart (Kundli). This course will walk you through identifying key components like the Ascendant (Lagna), planetary placements in signs and houses, and basic interpretation techniques to understand the core indications of a horoscope.',
      objectives: [
        "Confidently identify Lagna, Rashi, and planetary positions in a birth chart.",
        "Understand different chart styles (North Indian, South Indian).",
        "Apply a systematic approach to basic chart interpretation.",
        "Begin to identify simple planetary strengths and weaknesses."
      ],
      keyTopics: ['Understanding the Birth Chart Layout', 'Identifying Lagna and Rashi', 'Planets in Signs and Houses - Initial Analysis', 'Basic Planetary Strengths', 'Introduction to Yogas', 'Putting It All Together: A Simple Chart Analysis'],
      prerequisites: ['"Introduction to Vedic Astrology"', '"Basics of 12 Signs"', '"Basics of 12 Houses" strongly recommended.'],
      format: {mode: "Online", materials: ["Video tutorials", "Numerous sample charts", "Interpretive worksheets", "Step-by-step guides"]},
      certificationCriteria: ["Successful analysis of multiple sample charts and a final interpretation project."],
      certificationBadge: "Kundli Reading Fundamentals Certificate",
      syllabus: [
        {
          id: 'w1-kundli-setup',
          week: 1,
          title: 'Setting Up the Chart & Lagna',
          description: "Understanding chart formats and the crucial role of the Ascendant.",
          lessons: [
            {id:'l1-1-kundli', title: 'Birth Chart Styles: North Indian & South Indian', summary: 'Recognizing and navigating different chart layouts.', type: 'lesson'},
            {id:'l1-2-kundli', title: 'The Lagna (Ascendant): The Anchor of the Chart', summary: 'Calculating/identifying the Lagna and its paramount importance.', type: 'lesson'},
            {id:'l1-3-kundli', title: 'Understanding House Numbering from Lagna', summary: 'How houses are counted from the Ascendant.', type: 'lesson'},
            {id:'ex1-1-kundli', title: 'Exercise: Lagna Identification in Multiple Charts', summary: 'Practice identifying the Lagna and first house in various chart styles.', type: 'exercise'}
          ],
          assignment: "Draw a North Indian and South Indian chart for a given set of planetary positions."
        },
        {
          id: 'w2-kundli-planets-signs',
          week: 2,
          title: 'Planets in Signs in the Kundli',
          description: "Analyzing how planets express themselves through different signs within the chart context.",
          lessons: [
            {id:'l2-1-kundli', title: 'Review: Planetary Significators (Karakas)', summary: 'Quick review of what each planet represents.', type: 'lesson'},
            {id:'l2-2-kundli', title: 'Planets in Signs: A Deeper Look in Chart Context', summary: 'Interpreting planets based on the sign they occupy in a specific chart.', type: 'lesson'},
            {id:'l2-3-kundli', title: 'Identifying the Moon Sign (Rashi) and Sun Sign', summary: 'Locating and understanding the significance of Chandra Rashi and Surya Rashi.', type: 'lesson'},
            {id:'act2-1-kundli', title: 'Activity: Planetary Placements Table', summary: 'For a sample chart, create a table listing each planet, its sign, and 1-2 keywords.', type: 'activity'}
          ],
          activity: "Analyze the Sun's placement in a sample chart."
        },
        {
          id: 'w3-kundli-planets-houses',
          week: 3,
          title: 'Planets in Houses in the Kundli',
          description: "Understanding the impact of planetary placements in various houses.",
          lessons: [
            {id:'l3-1-kundli', title: 'Review: House Significators (Bhavas)', summary: 'Quick review of what each house represents.', type: 'lesson'},
            {id:'l3-2-kundli', title: 'Planets in Houses: How Life Areas are Affected', summary: 'Interpreting planets based on the house they occupy.', type: 'lesson'},
            {id:'l3-3-kundli', title: 'Lagna Lord: Placement and Importance', summary: 'Analyzing the placement of the Ascendant lord.', type: 'lesson'},
            {id:'ex3-1-kundli', title: 'Exercise: House Analysis', summary: 'Analyze planets in the 1st, 7th, and 10th houses of a sample chart.', type: 'exercise'}
          ],
          exercise: "Describe the general effect of Jupiter in the 5th house."
        },
        {
          id: 'w4-kundli-strength-aspects-intro',
          week: 4,
          title: 'Basic Planetary Strength & Aspects (Intro)',
          description: "Introduction to assessing planetary strength and the concept of aspects.",
          lessons: [
            {id:'l4-1-kundli', title: 'Planetary States: Exaltation, Debilitation, Moolatrikona (Intro)', summary: 'Basic understanding of planetary dignity.', type: 'lesson'},
            {id:'l4-2-kundli', title: 'Benefics and Malefics: Natural & Functional (Intro)', summary: 'Identifying benefic/malefic planets for a given Lagna.', type: 'lesson'},
            {id:'l4-3-kundli', title: 'Introduction to Planetary Aspects (Drishti)', summary: 'Brief overview of how planets influence other houses/planets.', type: 'lesson'},
            {id:'quiz4-1-kundli', title: 'Quiz: Planetary Strengths Basics', summary: 'Identify exaltation/debilitation signs for key planets.', type: 'quiz'}
          ],
          quiz: "Which sign is the Sun exalted in?"
        },
        {
          id: 'w5-kundli-yogas-intro',
          week: 5,
          title: 'Introduction to Yogas (Planetary Combinations)',
          description: "Learning to spot simple and important Yogas.",
          lessons: [
            {id:'l5-1-kundli', title: 'What are Yogas?', summary: 'Understanding planetary combinations and their significance.', type: 'lesson'},
            {id:'l5-2-kundli', title: 'Simple Yogas: Sun-Moon, Sun-Mercury, Moon-Mars', summary: 'Identifying and interpreting common yogas.', type: 'lesson'},
            {id:'l5-3-kundli', title: 'Introduction to Kendra-Trikona Raja Yogas', summary: 'Brief overview of powerful wealth and status yogas.', type: 'lesson'},
            {id:'ex5-1-kundli', title: 'Exercise: Yoga Spotting', summary: 'Identify any simple yogas present in sample charts.', type: 'exercise'}
          ],
          assignment: "Define a Kendra-Trikona Raja Yoga."
        },
        {
          id: 'w6-kundli-synthesis-practice',
          week: 6,
          title: 'Synthesizing Information & Practice',
          description: "Bringing all learned concepts together for basic chart delineation.",
          lessons: [
            {id:'l6-1-kundli', title: 'Step-by-Step Chart Analysis Checklist', summary: 'A systematic approach to analyzing a birth chart for beginners.', type: 'lesson'},
            {id:'l6-2-kundli', title: 'Practice Chart Analysis 1 (Guided)', summary: 'Guided interpretation of a full sample chart.', type: 'lesson'},
            {id:'l6-3-kundli', title: 'Practice Chart Analysis 2 (Independent)', summary: 'Students attempt to interpret another sample chart with guidance.', type: 'lesson'},
            {id:'capstone6-1-kundli', title: 'Capstone: Basic Kundli Delineation', summary: 'Submit a written analysis of a new sample birth chart.', type: 'capstone'}
          ],
          finalAssignment: "Perform a basic analysis of a provided sample chart, focusing on Lagna, Moon, and Sun placements."
        }
      ],
      instructor: { id: 'inst-kundlimaster', name: 'Kundli Master Jyotish', bio: 'Specializes in teaching foundational chart reading skills.', qualifications: ['Jyotish Praveen', 'Vedic Counselor'] },
      price: '$69',
      benefits: ["Step-by-step Kundli analysis checklist PDF", "Collection of 10+ sample charts for practice", "Access to a community forum for discussion"],
      nextCourseRecommendation: "Planetary Aspects and Conjunctions"
    },
    // Intermediate Level - Placeholder Syllabi
    {
      id: 'ashtakoot-guna-milan',
      title: 'Ashtakoot Guna Milan (Matchmaking)',
      level: 'Intermediate',
      category: 'Matchmaking',
      duration: '4 Weeks (8-10 Hours)',
      language: "English",
      imageUrl: 'https://placehold.co/600x400.png',
      dataAiHint: 'marriage compatibility astrology',
      briefDescription: '36 Gunas and compatibility principles.',
      detailedDescription: 'Learn the traditional Vedic system of horoscope matching for marriage, known as Ashtakoot Guna Milan. This course covers the eight Kootas, their point system (36 Gunas), and how to assess compatibility based on these principles, including Manglik Dosha considerations.',
      objectives: ["Understand the 8 Kootas of Ashtakoot Milan.", "Calculate Guna scores for matchmaking.", "Analyze Manglik Dosha and its cancellations.", "Provide basic compatibility readings."],
      keyTopics: ['Introduction to Ashtakoot', 'Varna Koota', 'Vashya Koota', 'Tara Koota', 'Yoni Koota', 'Graha Maitri Koota', 'Gana Koota', 'Bhakoot Koota', 'Nadi Koota', 'Manglik Dosha Analysis', 'Interpreting Compatibility Scores'],
      prerequisites: ['"How to Read a Kundli"', '"Nakshatra Foundations"'],
      format: {mode: "Online", materials: ["Video lectures", "Guna Milan worksheets", "Case studies of matched/unmatched charts"]},
      certificationCriteria: ["Accurate Guna Milan calculation for sample charts and a case study analysis."],
      certificationBadge: "Ashtakoot Matchmaking Certificate",
      syllabus: [
        {
          id: 'w1-ashtakoot-intro',
          week: 1,
          title: 'Introduction to Ashtakoot & First Four Kootas',
          description: "Understanding the basics of Guna Milan and the initial Kootas.",
          lessons: [
            {id:'l1-1-ashtakoot', title: 'The Principle of Ashtakoot Milan', summary: 'Significance of compatibility analysis in Vedic tradition.', type: 'lesson'},
            {id:'l1-2-ashtakoot', title: 'Varna & Vashya Koota', summary: 'Calculation, interpretation, and impact on ego and mutual attraction.', type: 'lesson'},
            {id:'l1-3-ashtakoot', title: 'Tara & Yoni Koota', summary: 'Calculation, interpretation, and impact on destiny, health, and physical compatibility.', type: 'lesson'},
            {id:'ex1-1-ashtakoot', title: 'Exercise: Calculate Points for First Four Kootas', summary: 'Practice calculation for sample Nakshatras.', type: 'exercise'}
          ],
          assignment: "Research the mythological basis for Yoni Koota."
        },
        {
          id: 'w2-ashtakoot-next-kootas',
          week: 2,
          title: 'Graha Maitri, Gana, Bhakoot & Nadi Koota',
          description: "Detailed study of the remaining four Kootas.",
          lessons: [
            {id:'l2-1-ashtakoot', title: 'Graha Maitri & Gana Koota', summary: 'Planetary friendship, temperament matching, calculation, and interpretation.', type: 'lesson'},
            {id:'l2-2-ashtakoot', title: 'Bhakoot Koota', summary: 'Zodiacal compatibility, impact on family welfare, calculation, and dosha considerations.', type: 'lesson'},
            {id:'l2-3-ashtakoot', title: 'Nadi Koota: The Most Important Koota', summary: 'Physiological and genetic compatibility, calculation, Nadi Dosha and its implications.', type: 'lesson'},
            {id:'act2-1-ashtakoot', title: 'Activity: Koota Score Tally', summary: 'Calculate the total score for sample pairs based on all 8 Kootas.', type: 'activity'}
          ],
          activity: "Discuss the concept of Nadi Dosha with peers."
        },
        {
          id: 'w3-ashtakoot-manglik-synthesis',
          week: 3,
          title: 'Manglik Dosha & Synthesizing the Score',
          description: "Analyzing Manglik Dosha and interpreting the overall Guna Milan score.",
          lessons: [
            {id:'l3-1-ashtakoot', title: 'Understanding Manglik Dosha (Kuja Dosha)', summary: 'Causes, effects, and placements of Mars leading to Manglik Dosha.', type: 'lesson'},
            {id:'l3-2-ashtakoot', title: 'Cancellations & Remedies for Manglik Dosha', summary: 'Planetary conditions that nullify or reduce Manglik Dosha, and traditional remedies.', type: 'lesson'},
            {id:'l3-3-ashtakoot', title: 'Interpreting the Total Guna Score', summary: 'Understanding what different score ranges (e.g., <18, 18-25, >25) signify.', type: 'lesson'},
            {id:'quiz3-1-ashtakoot', title: 'Quiz: Manglik Dosha Identification', summary: 'Identify Manglik Dosha in sample charts.', type: 'quiz'}
          ],
          quiz: "List three planetary placements that cause Manglik Dosha."
        },
        {
          id: 'w4-ashtakoot-case-studies',
          week: 4,
          title: 'Case Studies & Advanced Considerations',
          description: "Applying knowledge to real-world examples and understanding nuances.",
          lessons: [
            {id:'l4-1-ashtakoot', title: 'Case Study Analysis 1: High Compatibility', summary: 'Analyzing a chart pair with a high Guna score.', type: 'lesson'},
            {id:'l4-2-ashtakoot', title: 'Case Study Analysis 2: Low Compatibility with Doshas', summary: 'Analyzing a challenging chart pair and discussing considerations.', type: 'lesson'},
            {id:'l4-3-ashtakoot', title: 'Beyond Guna Milan: Other Matching Factors', summary: 'Brief introduction to other compatibility factors (e.g., Dasha, individual chart strength).', type: 'lesson'},
            {id:'capstone4-1-ashtakoot', title: 'Capstone Assignment: Full Matchmaking Report', summary: 'Perform a full Ashtakoot and Manglik analysis for two provided charts and write a summary report.', type: 'capstone'}
          ],
          finalAssignment: "What factors, apart from Guna score, are important in matchmaking?"
        }
      ],
      instructor: { id: 'inst-matchmaker', name: 'Vivah Jyotishi', bio: 'Specializes in Vedic compatibility analysis.', qualifications: ['MA Astrology', 'Certified Matchmaking Expert'] },
      price: '$79',
      benefits: ["Guna Milan calculation template", "Manglik Dosha checklist", "Access to matchmaking case study library"],
      nextCourseRecommendation: "Planetary Aspects and Conjunctions"
    },
    {
      id: 'planetary-aspects-conjunctions',
      title: 'Planetary Aspects and Conjunctions',
      level: 'Intermediate',
      category: 'Planetary Studies',
      duration: '5 Weeks (10-12 Hours)',
      language: "English",
      imageUrl: 'https://placehold.co/600x400.png',
      dataAiHint: 'planets alignment chart',
      briefDescription: 'How grahas influence each other.',
      detailedDescription: 'Explore the dynamic interactions between planets in a birth chart through aspects (Drishti) and conjunctions (Yuti). This course teaches how these relationships modify planetary strengths and influence chart interpretations, leading to more nuanced predictions.',
      objectives: ["Understand the concept of planetary aspects (Drishti).", "Learn the specific aspects of each planet.", "Analyze the effects of planetary conjunctions (Yuti).", "Interpret how aspects and conjunctions modify planetary and house results."],
      keyTopics: ['Types of Planetary Aspects', 'Aspects of Each Planet', 'Interpreting Conjunctions of Two or More Planets', 'Mutual Receptions', 'Planetary War (Graha Yuddha)', 'Impact on House Significances'],
      prerequisites: ['"How to Read a Kundli"'],
      format: {mode: "Online", materials: ["Video lectures", "Aspect and conjunction tables", "Chart interpretation exercises"]},
      certificationCriteria: ["Completion of exercises on aspect/conjunction analysis in sample charts and a final case study."],
      certificationBadge: "Planetary Interactions Certificate",
      syllabus: [
        {
          id: 'w1-aspects-intro',
          week: 1,
          title: 'Introduction to Planetary Aspects (Drishti)',
          description: "Understanding the concept of how planets 'see' or influence other parts of the chart.",
          lessons: [
            {id:'l1-1-aspects', title: 'What are Planetary Aspects?', summary: 'The theory behind Drishti and its importance.', type: 'lesson'},
            {id:'l1-2-aspects', title: 'General Aspects: 7th House Aspect', summary: 'The universal 7th house aspect for all planets.', type: 'lesson'},
            {id:'l1-3-aspects', title: 'Special Aspects of Mars, Jupiter, Saturn', summary: 'Detailed look at the unique aspects of these outer planets.', type: 'lesson'},
            {id:'ex1-1-aspects', title: 'Exercise: Identifying Aspects in a Chart', summary: 'Practice identifying aspects of all planets in a sample chart.', type: 'exercise'}
          ],
          assignment: "List the special aspects of Jupiter and Saturn."
        },
        {
          id: 'w2-aspects-interpretation',
          week: 2,
          title: 'Interpreting Planetary Aspects',
          description: "Learning how to analyze the impact of aspects on planets and houses.",
          lessons: [
            {id:'l2-1-aspects', title: 'Nature of Aspects: Benefic vs. Malefic Aspects', summary: 'How the nature of the aspecting planet influences the aspected point.', type: 'lesson'},
            {id:'l2-2-aspects', title: 'Aspects on Houses vs. Aspects on Planets', summary: 'Differentiating the effects of aspects on Bhavas and Grahas.', type: 'lesson'},
            {id:'l2-3-aspects', title: 'Strengthening and Weakening Effects of Aspects', summary: 'How aspects can modify the results of a planet or house.', type: 'lesson'},
            {id:'act2-1-aspects', title: 'Activity: Aspect Analysis Worksheet', summary: 'Complete a worksheet analyzing aspects in a provided chart.', type: 'activity'}
          ],
          activity: "Discuss the impact of Saturn's aspect on the Moon."
        },
        {
          id: 'w3-conjunctions-yuti',
          week: 3,
          title: 'Planetary Conjunctions (Yuti)',
          description: "Understanding the combined energies of planets when they are together in the same sign/house.",
          lessons: [
            {id:'l3-1-conjunctions', title: 'What are Planetary Conjunctions?', summary: 'The concept of Yuti and its significance.', type: 'lesson'},
            {id:'l3-2-conjunctions', title: 'Interpreting Two-Planet Conjunctions', summary: 'Common conjunctions (e.g., Sun-Mercury, Moon-Venus) and their effects.', type: 'lesson'},
            {id:'l3-3-conjunctions', title: 'Interpreting Three or More Planet Conjunctions (Stelliums)', summary: 'Analyzing complex conjunctions.', type: 'lesson'},
            {id:'ex3-1-conjunctions', title: 'Exercise: Conjunction Identification', summary: 'Identify and list conjunctions in sample charts.', type: 'exercise'}
          ],
          exercise: "Describe the general effect of a Sun-Mercury conjunction."
        },
        {
          id: 'w4-advanced-interactions',
          week: 4,
          title: 'Advanced Planetary Interactions',
          description: "Exploring planetary war, mutual reception, and other subtle interactions.",
          lessons: [
            {id:'l4-1-interactions', title: 'Planetary War (Graha Yuddha)', summary: 'Conditions and interpretation of planetary war.', type: 'lesson'},
            {id:'l4-2-interactions', title: 'Mutual Reception (Parivartana Yoga)', summary: 'Understanding exchange of signs between planets.', type: 'lesson'},
            {id:'l4-3-interactions', title: 'The Role of Nakshatras in Aspects/Conjunctions (Brief)', summary: 'How Nakshatra placement can further refine interpretation.', type: 'lesson'},
            {id:'quiz4-1-interactions', title: 'Quiz: Advanced Interactions', summary: 'Test understanding of Graha Yuddha and Parivartana.', type: 'quiz'}
          ],
          quiz: "What is Graha Yuddha?"
        },
        {
          id: 'w5-aspects-conjunctions-synthesis',
          week: 5,
          title: 'Synthesis and Case Studies',
          description: "Applying all learned concepts of aspects and conjunctions in chart analysis.",
          lessons: [
            {id:'l5-1-synthesis', title: 'Integrating Aspects and Conjunctions in Chart Reading', summary: 'A holistic approach to incorporating these interactions.', type: 'lesson'},
            {id:'l5-2-synthesis', title: 'Case Study 1: Analyzing a Chart with Multiple Aspects', summary: 'Guided analysis of a complex chart focusing on aspects.', type: 'lesson'},
            {id:'l5-3-synthesis', title: 'Case Study 2: Analyzing a Chart with Key Conjunctions', summary: 'Guided analysis focusing on significant Yutis.', type: 'lesson'},
            {id:'capstone5-1-synthesis', title: 'Capstone: Interpretation of Planetary Interactions', summary: 'Analyze and interpret aspects and conjunctions in a new sample chart.', type: 'capstone'}
          ],
          finalAssignment: "Provide a brief interpretation of a 3-planet conjunction in a sample chart."
        }
      ],
      instructor: { id: 'inst-interactionguru', name: 'Drishti Acharya', bio: 'Expert in planetary dynamics and relationships.', qualifications: ['Jyotish Bhushan'] },
      price: '$89',
      benefits: ["Planetary aspect quick reference chart (Drishti table)", "Checklist for analyzing conjunctions"],
      nextCourseRecommendation: "Vimshottari Dasha System"
    },
    // ... (Continue for all other courses in a similar structured manner)
    {
      id: 'vimshottari-dasha-system',
      title: 'Vimshottari Dasha System',
      level: 'Intermediate',
      category: 'Dasha Analysis',
      duration: '6 Weeks (12-15 Hours)',
      language: "English",
      imageUrl: 'https://placehold.co/600x400.png',
      dataAiHint: 'planetary periods timeline',
      briefDescription: 'Life event timing through Mahadasha/Antardasha.',
      detailedDescription: 'Master the most widely used planetary period system, Vimshottari Dasha. This course covers the calculation, interpretation of Mahadashas (major periods) and Antardashas (sub-periods), and their application in timing significant life events and understanding life trends.',
      objectives: [
        "Understand the basis and calculation of Vimshottari Dasha.",
        "Learn to interpret Mahadasha and Antardasha results based on planet and house lordship.",
        "Use Dasha periods to identify potential life events and trends.",
        "Combine Dasha analysis with transits for more precise timing."
      ],
      keyTopics: ['Calculating Vimshottari Dasha', 'Significance of Dasha Lords', 'Interpreting Mahadashas', 'Interpreting Antardashas', 'Pratyantardashas Introduction', 'Using Dashas with Transits for Prediction'],
      prerequisites: ['"How to Read a Kundli"', '"Nakshatra Foundations"'],
      format: {mode: "Online", materials: ["Video lessons", "Dasha calculation guides", "Practice charts for Dasha analysis"]},
      certificationCriteria: ["Accurate Dasha calculation and interpretation for case studies."],
      certificationBadge: "Vimshottari Dasha Proficient",
      syllabus: [
        {
          id: 'w1-dasha-intro',
          week: 1,
          title: 'Introduction to Vimshottari Dasha',
          description: "Understanding the fundamentals of the Vimshottari Dasha system.",
          lessons: [
            {id:'l1-1-dasha', title: 'What is Dasha? Concept of Planetary Periods', summary: 'The role of Dashas in timing events in Vedic astrology.', type: 'lesson'},
            {id:'l1-2-dasha', title: 'Vimshottari Dasha: Basis and Calculation', summary: 'Based on Moon\'s Nakshatra, the sequence of planets, and their Dasha durations (120-year cycle).', type: 'lesson'},
            {id:'l1-3-dasha', title: 'Calculating the Starting Dasha and Balance', summary: 'Practical steps to find the initial Dasha at birth.', type: 'lesson'},
            {id:'ex1-1-dasha', title: 'Exercise: Calculate Starting Dasha for Sample Charts', summary: 'Practice calculating the balance of Dasha at birth.', type: 'exercise'}
          ],
          assignment: "List the sequence of planets in Vimshottari Dasha and their Mahadasha durations."
        },
        {
          id: 'w2-dasha-mahadasha',
          week: 2,
          title: 'Interpreting Mahadashas (Major Periods)',
          description: "Learning to analyze the results of major planetary periods.",
          lessons: [
            {id:'l2-1-dasha', title: 'General Principles of Mahadasha Interpretation', summary: 'Role of the Mahadasha lord: its nature, strength, house lordship, and placement.', type: 'lesson'},
            {id:'l2-2-dasha', title: 'Interpreting Mahadashas of Benefic Planets', summary: 'Likely results during periods of Jupiter, Venus, Mercury, Moon (well-placed).', type: 'lesson'},
            {id:'l2-3-dasha', title: 'Interpreting Mahadashas of Malefic Planets', summary: 'Likely results during periods of Saturn, Mars, Sun, Rahu, Ketu (well-placed or otherwise).', type: 'lesson'},
            {id:'act2-1-dasha', title: 'Activity: Mahadasha Keywords', summary: 'For each planet, list 3-5 keywords representing its Mahadasha themes.', type: 'activity'}
          ],
          activity: "Research the typical Mahadasha results of Saturn."
        },
        {
          id: 'w3-dasha-antardasha',
          week: 3,
          title: 'Interpreting Antardashas (Sub-Periods)',
          description: "Understanding the sub-periods within a Mahadasha.",
          lessons: [
            {id:'l3-1-dasha', title: 'Calculation and Sequence of Antardashas', summary: 'How sub-periods are derived within each Mahadasha.', type: 'lesson'},
            {id:'l3-2-dasha', title: 'Interpreting Antardasha Results', summary: 'Combined influence of Mahadasha lord and Antardasha lord. Their mutual relationship.', type: 'lesson'},
            {id:'l3-3-dasha', title: 'Analyzing Antardasha Lord\'s Placement from Mahadasha Lord', summary: 'A key technique for nuanced interpretation.', type: 'lesson'},
            {id:'ex3-1-dasha', title: 'Exercise: Antardasha Analysis', summary: 'Interpret the Antardasha of Venus within Jupiter Mahadasha for a sample chart.', type: 'exercise'}
          ],
          exercise: "What is the general principle if the Mahadasha lord and Antardasha lord are enemies?"
        },
        {
          id: 'w4-dasha-pratyantar',
          week: 4,
          title: 'Pratyantardasha & Finer Timings',
          description: "Brief introduction to sub-sub-periods for more precise timing.",
          lessons: [
            {id:'l4-1-dasha', title: 'Introduction to Pratyantardasha (Sub-Sub-Periods)', summary: 'Concept and calculation of these shorter periods.', type: 'lesson'},
            {id:'l4-2-dasha', title: 'Using Pratyantardasha for Finer Event Timing', summary: 'How these periods help narrow down event possibilities.', type: 'lesson'},
            {id:'l4-3-dasha', title: 'Limitations and Practical Use of Pratyantardasha', summary: 'Understanding when and how to effectively use these finer divisions.', type: 'lesson'},
            {id:'quiz4-1-dasha', title: 'Quiz: Dasha Hierarchy', summary: 'Arrange Mahadasha, Antardasha, Pratyantardasha in order.', type: 'quiz'}
          ],
          quiz: "How many levels deep can Dasha systems typically go (e.g., Sookshma, Prana)?"
        },
        {
          id: 'w5-dasha-transits',
          week: 5,
          title: 'Combining Dasha with Transits (Gochar)',
          description: "Integrating Dasha periods with current planetary transits for prediction.",
          lessons: [
            {id:'l5-1-dasha', title: 'The Interplay of Dasha and Transits', summary: 'Dashas indicate the promise, transits deliver the event.', type: 'lesson'},
            {id:'l5-2-dasha', title: 'Analyzing Transits of Dasha Lords', summary: 'How the transit of Mahadasha and Antardasha lords impacts their period results.', type: 'lesson'},
            {id:'l5-3-dasha', title: 'Double Transit Principle (Saturn & Jupiter)', summary: 'Using combined transits of Saturn and Jupiter over Dasha lord related houses/planets.', type: 'lesson'},
            {id:'ex5-1-dasha', title: 'Exercise: Dasha-Transit Correlation', summary: 'Analyze a past event using Dasha and relevant transits for a sample chart.', type: 'exercise'}
          ],
          assignment: "Explain the 'Dasha promise, Transit delivery' principle."
        },
        {
          id: 'w6-dasha-case-studies',
          week: 6,
          title: 'Dasha System Case Studies',
          description: "Applying Vimshottari Dasha analysis to real-life chart examples.",
          lessons: [
            {id:'l6-1-dasha', title: 'Case Study 1: Marriage Timing', summary: 'Using Dasha and transits to analyze marriage timing.', type: 'lesson'},
            {id:'l6-2-dasha', title: 'Case Study 2: Career Change', summary: 'Analyzing Dasha periods related to professional shifts.', type: 'lesson'},
            {id:'l6-3-dasha', title: 'Case Study 3: Health Issues', summary: 'Identifying Dasha periods potentially indicating health concerns.', type: 'lesson'},
            {id:'capstone6-1-dasha', title: 'Capstone: Vimshottari Dasha Analysis Project', summary: 'Perform a comprehensive Dasha analysis for a provided chart, predicting potential events for the current Dasha period.', type: 'capstone'}
          ],
          finalAssignment: "Analyze the current Mahadasha and one Antardasha for a given sample chart."
        }
      ],
      instructor: { id: 'inst-dashavisharad', name: 'Dasha Visharad', bio: 'Expert in Dasha systems and predictive astrology.', qualifications: ['PhD Vedic Astrology'] },
      price: '$99',
      benefits: ["Vimshottari Dasha calculation software/spreadsheet (template)", "Reference sheet of Dasha lord interpretations", "Access to a library of Dasha case studies"],
      nextCourseRecommendation: "Transit Analysis (Gochar)"
    },
    // ... (Syllabi for other Intermediate courses)
    {
      id: 'graha-doshas-remedies',
      title: 'Graha Doshas & Remedies',
      level: 'Intermediate',
      category: 'Dosha & Remedies',
      duration: '5 Weeks (10-12 Hours)',
      language: "English",
      imageUrl: 'https://placehold.co/600x400.png',
      dataAiHint: 'astrology remedies ritual',
      briefDescription: 'Manglik, Kaalsarpa, Pitra Dosha, and upayas.',
      detailedDescription: 'Learn to identify common astrological afflictions (Doshas) such as Manglik Dosha, Kaalsarpa Dosha, and Pitra Dosha in a birth chart. This course also introduces traditional Vedic remedies (Upayas) like mantras, gemstones, and rituals to mitigate negative planetary influences.',
      keyTopics: ['Understanding Doshas', 'Identifying Manglik Dosha', 'Kaalsarpa Dosha Analysis', 'Pitra Dosha and Ancestral Influences', 'Introduction to Vedic Remedies (Mantras, Gemstones, Yantras, Charity)', 'Ethical Considerations in Recommending Remedies'],
      prerequisites: ['"How to Read a Kundli"'],
      syllabus: [
        {
          id: 'w1-doshas-intro', week: 1, title: 'Understanding Astrological Doshas',
          lessons: [
            { id: 'l1', title: 'What are Doshas? Concept and Types', type: 'lesson' },
            { id: 'l2', title: 'Common Sources of Doshas (Planetary, House, Sign)', type: 'lesson' }
          ],
          assignment: 'Research one common Dosha not covered in week 1.'
        },
        {
          id: 'w2-manglik-kaalsarpa', week: 2, title: 'Manglik & Kaalsarpa Dosha',
          lessons: [
            { id: 'l1', title: 'In-depth: Manglik (Kuja) Dosha - Identification and Effects', type: 'lesson' },
            { id: 'l2', title: 'Cancellations and Remedies for Manglik Dosha', type: 'lesson' },
            { id: 'l3', title: 'Understanding Kaalsarpa Dosha - Types and Implications', type: 'lesson' }
          ],
          quiz: 'Identify Manglik Dosha in sample charts.'
        },
        {
          id: 'w3-pitra-other-doshas', week: 3, title: 'Pitra Dosha & Other Afflictions',
          lessons: [
            { id: 'l1', title: 'Pitra Dosha: Ancestral Afflictions and Their Impact', type: 'lesson' },
            { id: 'l2', title: 'Identifying Other Common Doshas (e.g., Kemadruma, Shrapit)', type: 'lesson' }
          ],
          activity: 'Analyze a chart for potential Pitra Dosha.'
        },
        {
          id: 'w4-remedies-upayas', week: 4, title: 'Introduction to Vedic Remedies (Upayas)',
          lessons: [
            { id: 'l1', title: 'Philosophy of Astrological Remedies', type: 'lesson' },
            { id: 'l2', title: 'Types of Upayas: Mantra, Yantra, Tantra, Gemstones, Charity, Rituals', type: 'lesson' },
            { id: 'l3', title: 'Selecting Appropriate Remedies for Specific Doshas', type: 'lesson' }
          ],
          exercise: 'Suggest a simple mantra remedy for a planetary affliction.'
        },
        {
          id: 'w5-ethics-remedies', week: 5, title: 'Ethical Considerations & Case Studies',
          lessons: [
            { id: 'l1', title: 'Ethical Guidelines for Recommending Remedies', type: 'lesson' },
            { id: 'l2', title: 'Case Studies: Analyzing Doshas and Suggesting Upayas', type: 'lesson' }
          ],
          finalAssignment: 'Prepare a brief report on Doshas and remedies for a sample chart.'
        },
      ],
      instructor: { id: 'inst-upayacharya', name: 'Upaya Acharya', bio: 'Specializes in astrological remedies and dosha analysis.', qualifications: ['Jyotish Ratna'] },
      price: '$89',
      benefits: ["Dosha identification checklist", "Common remedies quick reference guide"],
      nextCourseRecommendation: "Remedial Astrology (Upaya Shastra)"
    },
    {
      id: 'transit-analysis-gochar',
      title: 'Transit Analysis (Gochar)',
      level: 'Intermediate',
      category: 'Transit Analysis',
      duration: '6 Weeks (12-15 Hours)',
      language: "English",
      imageUrl: 'https://placehold.co/600x400.png',
      dataAiHint: 'planets moving sky',
      briefDescription: 'How planetary movements impact the chart.',
      detailedDescription: 'Understand the principles of Gochar (planetary transits) and how the current movement of planets impacts an individual\'s natal chart. This course teaches techniques to predict short-term trends, opportunities, and challenges based on transits of major and minor planets.',
      keyTopics: ['Principles of Transit Analysis', 'Transits of Major Planets (Saturn, Jupiter, Rahu/Ketu)', 'Transits of Inner Planets (Sun, Moon, Mars, Mercury, Venus)', 'Ashtakavarga and Transits', 'Double Transit Principle', 'Using Transits for Muhurta'],
      prerequisites: ['"How to Read a Kundli"', '"Vimshottari Dasha System" recommended'],
      syllabus: [
        {
          id: 'w1-gochar-basics', week: 1, title: 'Fundamentals of Gochar (Transits)',
          lessons: [
            { id: 'l1', title: 'What are Planetary Transits? Core Concepts', type: 'lesson' },
            { id: 'l2', title: 'Transits from Lagna, Moon, and Sun - Different Perspectives', type: 'lesson' }
          ],
          assignment: "Track the Moon's transit for one week."
        },
        {
          id: 'w2-major-planet-transits1', week: 2, title: 'Transits of Saturn & Jupiter',
          lessons: [
            { id: 'l1', title: 'Saturn\'s Transit (Sade Sati, Kantaka Shani, Ashtama Shani)', type: 'lesson' },
            { id: 'l2', title: 'Jupiter\'s Transit: Opportunities and Expansion', type: 'lesson' }
          ],
          activity: 'Research Sade Sati experiences.'
        },
        {
          id: 'w3-major-planet-transits2', week: 3, title: 'Transits of Rahu & Ketu',
          lessons: [
            { id: 'l1', title: 'Rahu\'s Transit: Karmic Events and Obsessions', type: 'lesson' },
            { id: 'l2', title: 'Ketu\'s Transit: Detachment and Spiritual Insights', type: 'lesson' }
          ],
          quiz: 'Key themes of Rahu/Ketu transits.'
        },
        {
          id: 'w4-inner-planet-transits', week: 4, title: 'Transits of Inner Planets',
          lessons: [
            { id: 'l1', title: 'Sun & Mars Transits: Energy and Action', type: 'lesson' },
            { id: 'l2', title: 'Moon, Mercury & Venus Transits: Daily & Short-term Influences', type: 'lesson' }
          ],
          exercise: "Analyze Mercury's current transit for your chart."
        },
        {
          id: 'w5-ashtakavarga-transits', week: 5, title: 'Ashtakavarga & Advanced Transit Techniques',
          lessons: [
            { id: 'l1', title: 'Introduction to Ashtakavarga in Transit Analysis', type: 'lesson' },
            { id: 'l2', title: 'The Double Transit Principle (Saturn & Jupiter)', type: 'lesson' }
          ],
          assignment: 'Calculate Sarvashtakavarga for a sample chart.'
        },
        {
          id: 'w6-gochar-synthesis', week: 6, title: 'Synthesizing Transits with Dashas',
          lessons: [
            { id: 'l1', title: 'Combining Dasha and Gochar for Prediction', type: 'lesson' },
            { id: 'l2', title: 'Case Studies: Timing Events with Transits and Dashas', type: 'lesson' }
          ],
          finalAssignment: 'Provide a transit analysis for a given month for a sample chart.'
        },
      ],
      instructor: { id: 'inst-gocharexpert', name: 'Gochar Expert', bio: 'Skilled in predictive techniques using transits.', qualifications: ['Jyotish Acharya'] },
      price: '$99',
      benefits: ["Transit calculation tables", "Ashtakavarga basics guide"],
      nextCourseRecommendation: "Predictive Astrology Techniques"
    },
    {
      id: 'basics-of-numerology',
      title: 'Basics of Numerology',
      level: 'Intermediate', // Or Beginner, depending on depth
      category: 'Numerology',
      duration: '4 Weeks (8-10 Hours)',
      language: "English",
      imageUrl: 'https://placehold.co/600x400.png',
      dataAiHint: 'numbers patterns geometry',
      briefDescription: 'Life Path, Destiny, and Name Numbers.',
      detailedDescription: 'Explore the fundamentals of numerology and its connection to astrology. This course introduces methods to calculate and interpret core numbers like Life Path Number, Destiny (Expression) Number, Soul Urge Number, and Personality Number, providing another layer of insight into an individual\'s character and life purpose.',
      keyTopics: ['Introduction to Numerology Systems (Pythagorean, Chaldean)', 'Calculating Life Path Number', 'Calculating Destiny/Expression Number', 'Understanding Soul Urge and Personality Numbers', 'Significance of Master Numbers', 'Basic Compatibility using Numerology'],
      prerequisites: ['None, but basic math skills helpful.'],
      syllabus: [
        {
          id: 'w1-numerology-intro', week: 1, title: 'Introduction to Numerology & Life Path Number',
          lessons: [
            { id: 'l1', title: 'What is Numerology? History and Systems', type: 'lesson' },
            { id: 'l2', title: 'Calculating and Interpreting Your Life Path Number', type: 'lesson' }
          ],
          assignment: "Calculate Life Path numbers for 3 family members."
        },
        {
          id: 'w2-destiny-soul-urge', week: 2, title: 'Destiny (Expression) & Soul Urge Numbers',
          lessons: [
            { id: 'l1', title: 'Calculating and Interpreting Your Destiny Number (from name)', type: 'lesson' },
            { id: 'l2', title: 'Calculating and Interpreting Your Soul Urge Number (from vowels)', type: 'lesson' }
          ],
          exercise: "Analyze the Destiny number of a famous person."
        },
        {
          id: 'w3-personality-master-numbers', week: 3, title: 'Personality Number & Master Numbers',
          lessons: [
            { id: 'l1', title: 'Calculating and Interpreting Your Personality Number (from consonants)', type: 'lesson' },
            { id: 'l2', title: 'Understanding Master Numbers (11, 22, 33)', type: 'lesson' }
          ],
          quiz: 'Meaning of numbers 1-9 and Master Numbers.'
        },
        {
          id: 'w4-numerology-synthesis', week: 4, title: 'Numerology Synthesis & Basic Applications',
          lessons: [
            { id: 'l1', title: 'Combining Core Numbers for a Profile', type: 'lesson' },
            { id: 'l2', title: 'Introduction to Numerology Compatibility and Yearly Cycles', type: 'lesson' }
          ],
          finalAssignment: 'Create a brief numerology profile for yourself or a sample person.'
        },
      ],
      instructor: { id: 'inst-numberguru', name: 'Number Guru', bio: 'Practitioner of Pythagorean and Chaldean numerology.', qualifications: ['Certified Numerologist'] },
      price: '$69',
      benefits: ["Numerology calculation worksheets", "Number meanings quick reference guide"],
      nextCourseRecommendation: "Nakshatra-Based Predictions" // Or a more specialized numerology course
    },
    {
      id: 'nakshatra-based-predictions',
      title: 'Nakshatra-Based Predictions',
      level: 'Intermediate',
      category: 'Nakshatra Study',
      duration: '7 Weeks (14-18 Hours)',
      language: "English",
      imageUrl: 'https://placehold.co/600x400.png',
      dataAiHint: 'moon constellation chart',
      briefDescription: 'How birth star refines chart analysis.',
      detailedDescription: 'Go beyond basic Nakshatra interpretations and learn advanced techniques for predictive astrology using the lunar mansions. This course covers Nakshatra Padas, Nakshatra Dashas (other than Vimshottari if applicable), Navatara Chakra, and using Nakshatras in Muhurta and transit analysis for more precise predictions.',
      keyTopics: ['Deep Dive into Nakshatra Padas', 'Nakshatra Deities and Their Meanings', 'Navatara Chakra and Its Uses', 'Nakshatras in Relationship Compatibility', 'Nakshatras for Muhurta Selection', 'Predictive Techniques using Nakshatras'],
      prerequisites: ['"Nakshatra Foundations"', '"How to Read a Kundli"'],
      syllabus: [
        {
          id: 'w1-nak-padas', week: 1, title: 'Nakshatra Padas In-Depth',
          lessons: [
            { id: 'l1', title: 'Understanding the Four Padas of Each Nakshatra', type: 'lesson' },
            { id: 'l2', title: 'Navamsa Connection and Pada Rulerships', type: 'lesson' }
          ],
          assignment: 'Analyze the Pada of the Moon in 3 sample charts.'
        },
        {
          id: 'w2-nak-deities-myths', week: 2, title: 'Nakshatra Deities & Mythology',
          lessons: [
            { id: 'l1', title: 'Detailed Study of Presiding Deities and Their Symbolism', type: 'lesson' },
            { id: 'l2', title: 'Connecting Mythology to Nakshatra Characteristics', type: 'lesson' }
          ],
          activity: 'Research and present the story of one Nakshatra deity.'
        },
        {
          id: 'w3-navatara-chakra', week: 3, title: 'Navatara Chakra & Tarabala',
          lessons: [
            { id: 'l1', title: 'Constructing and Interpreting the Navatara Chakra', type: 'lesson' },
            { id: 'l2', title: 'Understanding Tarabala for Daily and Event Muhurta', type: 'lesson' }
          ],
          exercise: 'Calculate Tarabala for a specific date.'
        },
        {
          id: 'w4-nakshatra-compatibility', week: 4, title: 'Nakshatras in Relationship Compatibility',
          lessons: [
            { id: 'l1', title: 'Beyond Yoni Koota: Nakshatra-Based Matching Techniques', type: 'lesson' },
            { id: 'l2', title: 'Stree-Purusha Nakshatras and Other Considerations', type: 'lesson' }
          ],
          quiz: 'Key compatibility principles based on Nakshatras.'
        },
        {
          id: 'w5-nakshatra-muhurta', week: 5, title: 'Nakshatras in Muhurta (Electional Astrology)',
          lessons: [
            { id: 'l1', title: 'Choosing Auspicious Nakshatras for Various Activities', type: 'lesson' },
            { id: 'l2', title: 'Panchaka Rahita and Other Muhurta Considerations', type: 'lesson' }
          ],
          assignment: 'Select an auspicious Nakshatra for starting a new project.'
        },
        {
          id: 'w6-nakshatra-dashas-transits', week: 6, title: 'Nakshatra Dashas & Transits',
          lessons: [
            { id: 'l1', title: 'Introduction to Nakshatra-Based Dasha Systems (e.g., Yogini, Kalachakra - overview)', type: 'lesson' },
            { id: 'l2', title: 'Using Nakshatra Transits for Fine-Tuning Predictions', type: 'lesson' }
          ],
          exercise: 'Track the transit of a planet through your Moon Nakshatra.'
        },
        {
          id: 'w7-nak-synthesis-predictions', week: 7, title: 'Synthesizing Nakshatra Knowledge for Predictions',
          lessons: [
            { id: 'l1', title: 'Integrating Nakshatra Insights into Overall Chart Analysis', type: 'lesson' },
            { id: 'l2', title: 'Case Studies: Nakshatra-Focused Predictions', type: 'lesson' }
          ],
          finalAssignment: 'Provide a detailed Nakshatra-based analysis for a significant planet in a sample chart.'
        },
      ],
      instructor: { id: 'inst-starseer', name: 'Tara Jyotish', bio: 'Expert in Nakshatra astrology and predictive methods.', qualifications: ['Jyotish Praveen', 'Nakshatra Researcher'] },
      price: '$119',
      benefits: ["Comprehensive Nakshatra Padas table", "Navatara Chakra calculation guide"],
      nextCourseRecommendation: "Predictive Astrology Techniques"
    },
    // Advanced Level - Placeholder Syllabi
    {
      id: 'tajika-varshphal',
      title: 'Tajika Varshphal (Annual Predictions)',
      level: 'Advanced',
      category: 'Predictive Astrology',
      duration: '8 Weeks (16-20 Hours)',
      language: "English",
      imageUrl: 'https://placehold.co/600x400.png',
      dataAiHint: 'solar return chart sun',
      briefDescription: 'Making yearly forecasts with solar returns.',
      detailedDescription: 'Learn the Tajika system of Vedic astrology for creating and interpreting annual horoscope charts (Varshphal or Solar Return charts). This course covers Muntha, year lord, Sahams, and other techniques to predict the trends and events for a specific year of life.',
      keyTopics: ['Introduction to Tajika Astrology', 'Calculating the Varshphal Chart', 'Muntha and Its Significance', 'Determining the Year Lord (Varsheshwara)', 'Sahams (Sensitive Points)', 'Tajika Yogas', 'Interpreting Annual Predictions', 'Month-by-Month Analysis using Mudda Dasha'],
      prerequisites: ['Intermediate Vedic Astrology knowledge', '"Transit Analysis (Gochar)"'],
      syllabus: [
        {
          id: 'w1-varshphal-intro', week: 1, title: 'Introduction to Tajika System & Chart Casting',
          lessons: [{id: 'l1', title: 'Principles of Tajika Astrology vs. Parashari', type: 'lesson'}, {id: 'l2', title: 'Calculating the Solar Return (Varshphal) Chart', type: 'lesson'}],
          assignment: 'Calculate Varshphal chart for your current year.'
        },
        {
          id: 'w2-yearlord-muntha', week: 2, title: 'Year Lord (Varsheshwara) & Muntha',
          lessons: [{id: 'l1', title: 'Determining and Interpreting the Year Lord', type: 'lesson'}, {id: 'l2', title: 'Muntha: Calculation and Significance', type: 'lesson'}],
          exercise: 'Identify Year Lord and Muntha in sample charts.'
        },
        {
          id: 'w3-tajika-yogas', week: 3, title: 'Tajika Yogas',
          lessons: [{id: 'l1', title: 'Introduction to Tajika Yogas (Ithasala, Ishrafa, etc.)', type: 'lesson'}, {id: 'l2', title: 'Interpreting Key Tajika Yogas', type: 'lesson'}],
          quiz: 'Identify common Tajika Yogas.'
        },
        {
          id: 'w4-sahams', week: 4, title: 'Sahams (Sensitive Points)',
          lessons: [{id: 'l1', title: 'Calculating and Interpreting Important Sahams', type: 'lesson'}, {id: 'l2', title: 'Using Sahams in Annual Predictions', type: 'lesson'}],
          activity: 'Calculate Punya Saham and Rajya Saham for a chart.'
        },
        {
          id: 'w5-mudda-dasha', week: 5, title: 'Mudda Dasha (Annual Dasha System)',
          lessons: [{id: 'l1', title: 'Calculating and Applying Mudda Dasha for Monthly Predictions', type: 'lesson'}, {id: 'l2', title: 'Integrating Mudda Dasha with Varshphal chart', type: 'lesson'}],
          assignment: 'Analyze one month using Mudda Dasha for a sample chart.'
        },
        {
          id: 'w6-varshphal-interpretation', week: 6, title: 'Comprehensive Varshphal Interpretation',
          lessons: [{id: 'l1', title: 'Synthesizing All Elements for Annual Forecast', type: 'lesson'}, {id: 'l2', title: 'Case Study: Detailed Varshphal Analysis', type: 'lesson'}],
          finalAssignment: 'Prepare a full Varshphal report for a given birth data and year.'
        },
      ],
      instructor: { id: 'inst-tajikaguru', name: 'Varsha Acharya', bio: 'Specialist in Tajika astrology and annual predictions.', qualifications: ['PhD in Jyotish', 'Tajika Expert'] },
      price: '$149',
      benefits: ["Varshphal calculation software/template", "Saham calculation guide"],
      nextCourseRecommendation: "Divisional Charts (Vargas) Deep Dive"
    },
    {
      id: 'divisional-charts-vargas',
      title: 'Divisional Charts (Vargas) Deep Dive',
      level: 'Advanced',
      category: 'Divisional Charts',
      duration: '10 Weeks (20-25 Hours)',
      language: "English",
      imageUrl: 'https://placehold.co/600x400.png',
      dataAiHint: 'multiple astrology charts',
      briefDescription: 'D-9 (Navamsha), D-10, D-7, etc.',
      detailedDescription: 'Unlock the deeper insights hidden in divisional charts (Vargas). This course provides a detailed examination of key Vargas like Navamsha (D-9 for spouse and dharma), Dashamsha (D-10 for career), Saptamsha (D-7 for progeny), and others, teaching their calculation and interpretation for specific areas of life.',
      keyTopics: ['Concept of Divisional Charts', 'Calculating Vargas', 'Navamsha (D-9): Marriage, Dharma, Skills', 'Dashamsha (D-10): Career and Achievements', 'Saptamsha (D-7): Children and Progeny', 'Drekkana (D-3): Siblings and Courage', 'Other Important Vargas (D-2, D-4, D-12, D-16, D-24, D-30, D-60)', 'Using Vargas in Prediction'],
      prerequisites: ['Intermediate Vedic Astrology knowledge', '"How to Read a Kundli"'],
      syllabus: [
        {
          id: 'w1-varga-intro', week: 1, title: 'Introduction to Divisional Charts',
          lessons: [{id: 'l1', title: 'Concept and Purpose of Vargas', type: 'lesson'}, {id: 'l2', title: 'Principles of Varga Calculation (Brief)', type: 'lesson'}],
          assignment: 'List the significations of the first 3 Vargas.'
        },
        {
          id: 'w2-navamsha-d9', week: 2, title: 'Navamsha (D-9): Marriage & Dharma',
          lessons: [{id: 'l1', title: 'Calculating and Analyzing the Navamsha Chart', type: 'lesson'}, {id: 'l2', title: 'Navamsha for Spouse, Dharma, and Inner Self', type: 'lesson'}],
          exercise: 'Analyze the Navamsha Lagna for sample charts.'
        },
        {
          id: 'w3-dashamsha-d10', week: 3, title: 'Dashamsha (D-10): Career & Achievements',
          lessons: [{id: 'l1', title: 'Calculating and Analyzing the Dashamsha Chart', type: 'lesson'}, {id: 'l2', title: 'D-10 for Profession, Status, and Public Image', type: 'lesson'}],
          activity: 'Compare D-1 and D-10 for career indications in a chart.'
        },
        {
          id: 'w4-saptamsha-d7', week: 4, title: 'Saptamsha (D-7): Progeny & Creativity',
          lessons: [{id: 'l1', title: 'Calculating and Analyzing the Saptamsha Chart', type: 'lesson'}, {id: 'l2', title: 'D-7 for Children, Grandchildren, and Creative Potential', type: 'lesson'}],
          quiz: 'Key significations of D-7.'
        },
        // Add more weeks for D-3, D-2, D-4, D-12, D-16, D-24, D-30, D-60 and synthesis
        {
          id: 'w5-other-vargas1', week: 5, title: 'Drekkana (D-3) & Hora (D-2)',
          lessons: [
            {id: 'l1', title: 'Drekkana: Siblings, Courage, Short Journeys', type: 'lesson'},
            {id: 'l2', title: 'Hora: Wealth, Masculine/Feminine Energies', type: 'lesson'}
          ],
          exercise: 'Analyze D-3 for sibling relationships in a sample chart.'
        },
        {
          id: 'w6-other-vargas2', week: 6, title: 'Chaturthamsha (D-4) & Dwadashamsha (D-12)',
          lessons: [
            {id: 'l1', title: 'Chaturthamsha: Property, Home, Inheritance', type: 'lesson'},
            {id: 'l2', title: 'Dwadashamsha: Parents, Ancestry, Past Life Karma', type: 'lesson'}
          ],
          activity: 'Research the link between D-12 and past life.'
        },
        {
          id: 'w7-shadvarga-overview', week: 7, title: 'Shadvarga & Other Important Vargas',
          lessons: [
            {id: 'l1', title: 'Concept of Shadvarga (Six Key Vargas)', type: 'lesson'},
            {id: 'l2', title: 'Brief Overview of D-16 (Vehicles), D-24 (Learning), D-30 (Evils), D-60 (Overall Destiny)', type: 'lesson'}
          ],
          quiz: 'Name the charts included in Shadvarga.'
        },
        {
          id: 'w8-varga-strength-dignity', week: 8, title: 'Planetary Strength in Vargas (Vimsopaka Bala - Intro)',
          lessons: [
            {id: 'l1', title: 'Assessing Planetary Strength Across Multiple Vargas', type: 'lesson'},
            {id: 'l2', title: 'Introduction to Vimsopaka Bala', type: 'lesson'}
          ],
          assignment: 'Analyze the strength of Jupiter across D-1, D-9, D-10 for a chart.'
        },
        {
          id: 'w9-varga-prediction', week: 9, title: 'Using Vargas in Prediction',
          lessons: [
            {id: 'l1', title: 'Correlating Rashi Chart with Varga Charts', type: 'lesson'},
            {id: 'l2', title: 'Timing Events Using Varga Transits and Dashas (Advanced)', type: 'lesson'}
          ],
          exercise: 'Predict a potential career event using D-10 and Dasha.'
        },
        {
          id: 'w10-varga-case-studies', week: 10, title: 'Varga Case Studies & Synthesis',
          lessons: [
            {id: 'l1', title: 'Comprehensive Case Study 1: Marriage and Relationships (D-9)', type: 'lesson'},
            {id: 'l2', title: 'Comprehensive Case Study 2: Career Trajectory (D-10)', type: 'lesson'}
          ],
          finalAssignment: 'Provide a multi-Varga analysis for a key life area (e.g., career or marriage) in a new sample chart.'
        },
      ],
      instructor: { id: 'inst-vargacharya', name: 'Varga Acharya', bio: 'Master of divisional chart interpretation.', qualifications: ['Jyotish Kovid', 'Varga Specialist'] },
      price: '$179',
      benefits: ["Divisional chart calculation guide", "Varga analysis checklist", "Access to Varga-specific case studies"],
      nextCourseRecommendation: "Predictive Astrology Techniques"
    },
    // ... (Syllabi for other Advanced courses)
    {
      id: 'predictive-astrology-techniques',
      title: 'Predictive Astrology Techniques',
      level: 'Advanced',
      category: 'Predictive Astrology',
      duration: '12 Weeks (24-30 Hours)',
      language: "English",
      imageUrl: 'https://placehold.co/600x400.png',
      dataAiHint: 'crystal ball future',
      briefDescription: 'Tools like Prashna, Chalit, KP Astrology basics.',
      detailedDescription: 'Expand your predictive toolkit with advanced techniques. This course explores Prashna (horary astrology), Chalit chart interpretation, an introduction to Krishnamurti Paddhati (KP System), and other methods used by experienced astrologers to answer specific queries and refine predictions.',
      keyTopics: ['Prashna Kundli (Horary Astrology)', 'Chalit Chart vs. Lagna Chart', 'Introduction to KP Astrology', 'Sarvashtakavarga and Bhinnashtakavarga', 'Advanced Yoga Analysis', 'Combining Multiple Predictive Tools'],
      prerequisites: ['Intermediate Vedic Astrology knowledge', '"Vimshottari Dasha System"', '"Transit Analysis (Gochar)"'],
      syllabus: [
        {
          id: 'w1-prashna-intro', week: 1, title: 'Introduction to Prashna (Horary Astrology)',
          lessons: [
            {id: 'l1', title: 'Principles and Applications of Prashna', type: 'lesson'},
            {id: 'l2', title: 'Casting and Interpreting a Prashna Chart (Basic)', type: 'lesson'}
          ],
          assignment: "Formulate 3 Prashna questions."
        },
        {
          id: 'w2-prashna-techniques', week: 2, title: 'Prashna Analysis Techniques',
          lessons: [
            {id: 'l1', title: 'Role of Lagna, Moon, and Karyesha in Prashna', type: 'lesson'},
            {id: 'l2', title: 'Tajika Aspects and Yogas in Prashna', type: 'lesson'}
          ],
          exercise: 'Analyze a simple Prashna chart for a yes/no question.'
        },
        {
          id: 'w3-chalit-chart', week: 3, title: 'Chalit Chart (Bhava Chalit)',
          lessons: [
            {id: 'l1', title: 'Understanding Bhava Madhya and Bhava Sandhi', type: 'lesson'},
            {id: 'l2', title: 'Interpreting Planetary Placements in Chalit Chart vs. Lagna Chart', type: 'lesson'}
          ],
          activity: 'Compare Lagna chart and Chalit chart for a sample case.'
        },
        {
          id: 'w4-kp-astrology-intro', week: 4, title: 'Introduction to Krishnamurti Paddhati (KP System)',
          lessons: [
            {id: 'l1', title: 'Core Principles of KP: Nakshatra Lord, Sub Lord, Cuspal Interlinks', type: 'lesson'},
            {id: 'l2', title: 'Basic House Groupings in KP for Events', type: 'lesson'}
          ],
          quiz: 'Key differences between KP and Parashari astrology.'
        },
        // Add more weeks for KP ruling planets, Ashtakavarga, advanced yogas, synthesis etc.
        {
          id: 'w5-kp-ruling-planets', week: 5, title: 'KP Ruling Planets & Event Timing',
          lessons: [
            {id: 'l1', title: 'Concept and Application of Ruling Planets in KP', type: 'lesson'},
            {id: 'l2', title: 'Using Ruling Planets for Fine-Tuning Event Predictions', type: 'lesson'}
          ],
          assignment: 'Determine ruling planets for a specific time and date.'
        },
        {
          id: 'w6-ashtakavarga-predictive', week: 6, title: 'Sarvashtakavarga & Bhinnashtakavarga in Prediction',
          lessons: [
            {id: 'l1', title: 'Using Ashtakavarga for Planetary Strength and Transit Results', type: 'lesson'},
            {id: 'l2', title: 'Bhinnashtakavarga of Planets and Their Predictive Use', type: 'lesson'}
          ],
          exercise: 'Analyze the Sarvashtakavarga chart of a sample horoscope.'
        },
        {
          id: 'w7-advanced-yogas1', week: 7, title: 'Advanced Yoga Analysis - Part 1',
          lessons: [
            {id: 'l1', title: 'Review of Raja Yogas, Dhana Yogas, Arishta Yogas', type: 'lesson'},
            {id: 'l2', title: 'Complex Yogas and Their Interpretation', type: 'lesson'}
          ],
          activity: 'Identify 5 important yogas in a celebrity chart.'
        },
        {
          id: 'w8-advanced-yogas2', week: 8, title: 'Advanced Yoga Analysis - Part 2',
          lessons: [
            {id: 'l1', title: 'Yogas from Chandra Lagna and Other Reference Points', type: 'lesson'},
            {id: 'l2', title: 'Understanding Yoga Bhanga (Cancellation of Yogas)', type: 'lesson'}
          ],
          quiz: 'Conditions for cancellation of a Raja Yoga.'
        },
        {
          id: 'w9-combining-tools1', week: 9, title: 'Combining Predictive Tools - Dasha, Transit, Yoga',
          lessons: [
            {id: 'l1', title: 'Holistic Approach: Integrating Dashas, Transits, and Yogas', type: 'lesson'},
            {id: 'l2', title: 'Practical Steps for Synthesizing Information', type: 'lesson'}
          ],
          assignment: 'Analyze a life event using at least three predictive tools.'
        },
        {
          id: 'w10-combining-tools2', week: 10, title: 'Combining Predictive Tools - Prashna, KP Insights',
          lessons: [
            {id: 'l1', title: 'Using Prashna for Specific Queries Alongside Natal Chart', type: 'lesson'},
            {id: 'l2', title: 'Incorporating KP Insights (Sub Lord Theory) for Confirmation', type: 'lesson'}
          ],
          exercise: 'Frame a Prashna question related to a natal chart prediction.'
        },
        {
          id: 'w11-case-studies-predictive', week: 11, title: 'Predictive Case Studies',
          lessons: [
            {id: 'l1', title: 'Case Study: Predicting Marriage Timing', type: 'lesson'},
            {id: 'l2', title: 'Case Study: Predicting Career Changes', type: 'lesson'}
          ],
          activity: 'Participate in a group discussion analyzing a complex case study.'
        },
        {
          id: 'w12-ethical-prediction', week: 12, title: 'Ethical Considerations in Prediction & Capstone',
          lessons: [
            {id: 'l1', title: 'Responsibility and Ethics in Making Predictions', type: 'lesson'},
            {id: 'l2', title: 'Communicating Predictions with Sensitivity', type: 'lesson'},
            {id: 'capstone', title: 'Capstone Project: Full Predictive Analysis of a Chart', type: 'capstone'}
          ],
          finalAssignment: 'Submit a detailed predictive analysis for a client case (simulated).'
        }
      ],
      instructor: { id: 'inst-predictorprime', name: 'Predictor Prime', bio: 'Master of diverse predictive systems in Jyotish.', qualifications: ['Jyotish Maharishi'] },
      price: '$199',
      benefits: ["Prashna chart template", "KP Astrology quick reference", "Ashtakavarga calculation sheets"],
      nextCourseRecommendation: "Career & Finance Prediction Techniques"
    },
    {
      id: 'career-finance-prediction',
      title: 'Career & Finance Prediction Techniques',
      level: 'Advanced',
      category: 'Applied Astrology',
      duration: '8 Weeks (16-20 Hours)',
      language: "English",
      imageUrl: 'https://placehold.co/600x400.png',
      dataAiHint: 'money graph success',
      briefDescription: 'Using Dashas, Yogas, and houses for career/finance.',
      detailedDescription: 'Specialize in predicting career paths, financial prospects, and periods of professional growth or challenges. This course focuses on analyzing relevant houses (2nd, 6th, 10th, 11th), planetary yogas for wealth and profession, and using Dasha and transit systems for timing career events.',
      keyTopics: ['Houses for Career and Finance', 'Planets Signifying Profession', 'Dhana Yogas (Wealth Combinations)', 'Career Yogas', 'Timing Career Changes with Dashas/Transits', 'Choosing Auspicious Times for Career Moves (Muhurta)', 'Analyzing Dashamsha (D-10) for Career'],
      prerequisites: ['Intermediate Vedic Astrology', '"Vimshottari Dasha System"', '"Divisional Charts (Vargas) Deep Dive" (D-10 focus recommended)'],
      syllabus: [
        {
          id: 'w1-career-houses', week: 1, title: 'Foundational Houses for Career & Finance',
          lessons: [
            {id: 'l1', title: 'The 10th House (Karma Bhava): Profession and Status', type: 'lesson'},
            {id: 'l2', title: 'The 2nd House (Dhana Bhava): Accumulated Wealth and Income Sources', type: 'lesson'},
            {id: 'l3', title: 'The 11th House (Labha Bhava): Gains, Income, and Aspirations', type: 'lesson'},
            {id: 'l4', title: 'The 6th House (Ari Bhava): Service, Competition, and Daily Work', type: 'lesson'}
          ],
          assignment: "Analyze the 10th lord's placement in 3 sample charts."
        },
        {
          id: 'w2-career-planets', week: 2, title: 'Planetary Significators for Profession & Wealth',
          lessons: [
            {id: 'l1', title: 'Sun & Mars: Authority, Leadership, Technical Fields', type: 'lesson'},
            {id: 'l2', title: 'Moon & Venus: Public Dealing, Arts, Luxury, Counselling', type: 'lesson'},
            {id: 'l3', title: 'Mercury & Jupiter: Communication, Teaching, Finance, Law', type: 'lesson'},
            {id: 'l4', title: 'Saturn, Rahu, Ketu: Service, Hard Work, Unconventional Careers, Research', type: 'lesson'}
          ],
          exercise: 'Identify the strongest planet influencing career in a sample chart.'
        },
        {
          id: 'w3-dhana-yogas', week: 3, title: 'Dhana Yogas (Wealth Combinations)',
          lessons: [
            {id: 'l1', title: 'Important Dhana Yogas Involving 2nd, 5th, 9th, 11th Lords', type: 'lesson'},
            {id: 'l2', title: 'Lakshmi Yoga, Vasumati Yoga, and Other Wealth Yogas', type: 'lesson'},
            {id: 'l3', title: 'Assessing the Strength and Fruition of Dhana Yogas', type: 'lesson'}
          ],
          activity: 'Spot Dhana Yogas in celebrity charts known for wealth.'
        },
        {
          id: 'w4-career-yogas', week: 4, title: 'Career Yogas & Professional Success',
          lessons: [
            {id: 'l1', title: 'Yogas for Specific Professions (e.g., Medical, Legal, Arts)', type: 'lesson'},
            {id: 'l2', title: 'Pancha Mahapurusha Yogas and Their Career Implications', type: 'lesson'},
            {id: 'l3', title: 'Yogas for Fame, Recognition, and Authority', type: 'lesson'}
          ],
          quiz: 'Name two Yogas indicating a career in teaching.'
        },
        {
          id: 'w5-d10-dashamsha', week: 5, title: 'Dashamsha (D-10) for Career Analysis',
          lessons: [
            {id: 'l1', title: 'Calculating and Interpreting the Dashamsha Chart', type: 'lesson'},
            {id: 'l2', title: 'Analyzing the D-10 Lagna, 10th House, and Key Planets', type: 'lesson'},
            {id: 'l3', title: 'Correlating D-10 with the Rashi Chart for Career Insights', type: 'lesson'}
          ],
          assignment: 'Provide a D-10 analysis for a sample chart.'
        },
        {
          id: 'w6-timing-career-events', week: 6, title: 'Timing Career Events with Dashas & Transits',
          lessons: [
            {id: 'l1', title: 'Using Vimshottari Dasha for Career Milestones (Job, Promotion, Change)', type: 'lesson'},
            {id: 'l2', title: 'Key Transits (Saturn, Jupiter, Rahu/Ketu) Influencing Career', type: 'lesson'},
            {id: 'l3', title: 'Combining Dasha and Transit for Career Predictions', type: 'lesson'}
          ],
          exercise: 'Analyze the Dasha/Transit for a known career change of a public figure.'
        },
        {
          id: 'w7-muhurta-career', week: 7, title: 'Muhurta for Career & Business',
          lessons: [
            {id: 'l1', title: 'Principles of Selecting Auspicious Times for Career Moves', type: 'lesson'},
            {id: 'l2', title: 'Choosing Muhurta for Starting a New Job, Business, or Important Projects', type: 'lesson'}
          ],
          activity: 'Select an auspicious Muhurta for launching a website.'
        },
        {
          id: 'w8-career-finance-casestudies', week: 8, title: 'Career & Finance Case Studies',
          lessons: [
            {id: 'l1', title: 'Case Study 1: Chart of a Successful Entrepreneur', type: 'lesson'},
            {id: 'l2', title: 'Case Study 2: Analyzing Financial Fluctuations in a Chart', type: 'lesson'},
            {id: 'capstone', title: 'Capstone: Career & Finance Astrological Report', type: 'capstone'}
          ],
          finalAssignment: 'Prepare a detailed career and financial forecast for a sample chart for the next 2 years.'
        }
      ],
      instructor: { id: 'inst-arthajyotishi', name: 'Artha Jyotishi', bio: 'Expert in financial astrology and career guidance.', qualifications: ['MBA Finance', 'Jyotish Visharad'] },
      price: '$159',
      benefits: ["Checklist for career & finance analysis", "D-10 interpretation guide", "Compilation of important Dhana Yogas"],
      nextCourseRecommendation: "Health Astrology"
    },
    {
      id: 'health-astrology',
      title: 'Health Astrology',
      level: 'Advanced',
      category: 'Applied Astrology',
      duration: '7 Weeks (14-18 Hours)',
      language: "English",
      imageUrl: 'https://placehold.co/600x400.png',
      dataAiHint: 'medical caduceus astrology',
      briefDescription: 'Reading diseases and longevity.',
      detailedDescription: 'Explore the principles of medical astrology according to Vedic texts. Learn to identify planetary influences on health, predispositions to certain ailments, timing of health issues, and assessing longevity from a birth chart. This course is for informational purposes and not a substitute for medical advice.',
      keyTopics: ['Houses and Body Parts', 'Planets and Diseases', 'Analyzing the 6th, 8th, and 12th Houses for Health', 'Role of Lagna Lord in Health', 'Timing of Illness using Dashas/Transits', 'Assessing Longevity (Ayurdaya) - Basic Principles', 'Astrological Remedies for Health (Traditional Perspective)'],
      prerequisites: ['Intermediate Vedic Astrology knowledge', '"Graha Doshas & Remedies" recommended'],
      syllabus: [
        {
          id: 'w1-health-intro', week: 1, title: 'Fundamentals of Medical Astrology',
          lessons: [
            {id: 'l1', title: 'Vedic Astrology and Health: Core Principles', type: 'lesson'},
            {id: 'l2', title: 'Significators: Houses, Planets, and Signs for Body Parts and Diseases', type: 'lesson'}
          ],
          assignment: 'Create a table matching planets to body systems they govern.'
        },
        {
          id: 'w2-health-houses', week: 2, title: 'Key Houses in Health Analysis',
          lessons: [
            {id: 'l1', title: 'The 6th House: Acute Illnesses, Injuries, and Enemies of Health', type: 'lesson'},
            {id: 'l2', title: 'The 8th House: Chronic Illnesses, Longevity, and Causes of Death', type: 'lesson'},
            {id: 'l3', title: 'The 12th House: Hospitalization, Hidden Ailments, and Loss of Vitality', type: 'lesson'},
            {id: 'l4', title: 'Role of Lagna and Lagna Lord in Overall Health and Vitality', type: 'lesson'}
          ],
          exercise: 'Analyze the 6th house of a sample chart for health indications.'
        },
        {
          id: 'w3-planets-diseases', week: 3, title: 'Planets as Significators of Diseases',
          lessons: [
            {id: 'l1', title: 'Sun & Moon: Vitality, Heart, Eyes, Mind', type: 'lesson'},
            {id: 'l2', title: 'Mars & Mercury: Blood, Nerves, Skin, Lungs, Communication Disorders', type: 'lesson'},
            {id: 'l3', title: 'Jupiter & Venus: Liver, Fat, Diabetes, Reproductive System', type: 'lesson'},
            {id: 'l4', title: 'Saturn, Rahu, Ketu: Chronic Ailments, Bones, Mysterious Illnesses, Psychic Issues', type: 'lesson'}
          ],
          activity: 'Research diseases associated with an afflicted Saturn.'
        },
        {
          id: 'w4-timing-illness', week: 4, title: 'Timing of Health Issues with Dashas & Transits',
          lessons: [
            {id: 'l1', title: 'Using Vimshottari Dasha to Identify Periods of Ill Health', type: 'lesson'},
            {id: 'l2', title: 'Role of Transits (especially Saturn, Mars, Rahu/Ketu) in Triggering Health Problems', type: 'lesson'},
            {id: 'l3', title: 'Analyzing Dasha-Transit Combinations for Specific Ailments', type: 'lesson'}
          ],
          quiz: 'Which Dasha lords are critical for health analysis?'
        },
        {
          id: 'w5-longevity-ayurdaya', week: 5, title: 'Introduction to Longevity Assessment (Ayurdaya)',
          lessons: [
            {id: 'l1', title: 'Basic Principles of Longevity Calculation (Short, Medium, Long Life)', type: 'lesson'},
            {id: 'l2', title: 'Role of 8th House, Lagna Lord, and Saturn in Longevity', type: 'lesson'},
            {id: 'l3', title: 'Ethical Considerations in Discussing Longevity', type: 'lesson'}
          ],
          assignment: 'Briefly explain three factors considered in longevity.'
        },
        {
          id: 'w6-health-remedies', week: 6, title: 'Astrological Remedies for Health (Traditional View)',
          lessons: [
            {id: 'l1', title: 'Mantra, Gemstones, and Yantras for Planetary Pacification', type: 'lesson'},
            {id: 'l2', title: 'Charity (Daana) and Rituals (Puja, Homa) for Health Improvement', type: 'lesson'},
            {id: 'l3', title: 'Concept of Medical Herbs (Aushadhi) in Jyotish (Brief)', type: 'lesson'}
          ],
          exercise: 'Suggest a gemstone remedy for a weak Sun (traditional view).'
        },
        {
          id: 'w7-health-casestudies', week: 7, title: 'Health Astrology Case Studies',
          lessons: [
            {id: 'l1', title: 'Case Study: Analyzing a Chart for Potential Diabetes', type: 'lesson'},
            {id: 'l2', title: 'Case Study: Timing a Surgery using Dasha/Transits', type: 'lesson'},
            {id: 'capstone', title: 'Capstone: Health Analysis Report for a Sample Chart', type: 'capstone'}
          ],
          finalAssignment: 'Prepare a basic health assessment for a sample chart, identifying potential vulnerabilities.'
        }
      ],
      instructor: { id: 'inst-vaidyajyotish', name: 'Vaidya Jyotish', bio: 'Combines knowledge of Ayurveda and Medical Astrology.', qualifications: ['BAMS', 'Jyotish Acharya'] },
      price: '$139',
      benefits: ["Chart of body parts and planetary rulerships", "List of diseases and their planetary indicators", "Ethical guidelines for health readings PDF"],
      nextCourseRecommendation: "Remedial Astrology (Upaya Shastra)"
    },
    {
      id: 'remedial-astrology-upaya',
      title: 'Remedial Astrology (Upaya Shastra)',
      level: 'Advanced',
      category: 'Remedial Astrology',
      duration: '9 Weeks (18-22 Hours)',
      language: "English",
      imageUrl: 'https://placehold.co/600x400.png',
      dataAiHint: 'gemstones mantra yantra',
      briefDescription: 'Mantras, gemstones, donations, fasts for planetary influences.',
      detailedDescription: 'Delve into the science of Vedic remedies (Upaya Shastra). This course covers the principles behind various remedial measures, including mantra chanting, gemstone therapy, yantras, donations (Daana), fasting (Vrata), and other traditional practices to mitigate negative planetary influences and enhance positive ones.',
      keyTopics: ['Philosophy of Astrological Remedies', 'Mantra Shastra and Their Application', 'Gemstone Recommendations (Ratna Shastra)', 'Yantras and Their Uses', 'Significance of Daana (Charity)', 'Vratas (Fasts) for Planetary Pacification', 'Other Traditional Upayas (Puja, Homa)', 'Ethical Guidelines for Recommending Remedies'],
      prerequisites: ['Intermediate Vedic Astrology knowledge', '"Graha Doshas & Remedies"'],
      syllabus: [
        {
          id: 'w1-upaya-philosophy', week: 1, title: 'Philosophy and Ethics of Astrological Remedies',
          lessons: [
            {id: 'l1', title: 'The Concept of Upayas in Vedic Tradition', type: 'lesson'},
            {id: 'l2', title: 'Karma, Free Will, and the Role of Remedies', type: 'lesson'},
            {id: 'l3', title: 'Ethical Considerations: When and How to Suggest Remedies', type: 'lesson'}
          ],
          assignment: 'Write a short essay on the ethics of suggesting remedies.'
        },
        {
          id: 'w2-mantra-shastra', week: 2, title: 'Mantra Shastra: The Science of Sacred Sounds',
          lessons: [
            {id: 'l1', title: 'Types of Mantras: Beeja, Navagraha, Deity Mantras', type: 'lesson'},
            {id: 'l2', title: 'Principles of Mantra Chanting (Japa) and Its Effects', type: 'lesson'},
            {id: 'l3', title: 'Prescribing Mantras for Specific Planetary Afflictions', type: 'lesson'}
          ],
          exercise: 'Learn to chant the Navagraha Stotram correctly.'
        },
        {
          id: 'w3-ratna-shastra', week: 3, title: 'Ratna Shastra: Gemstone Therapy',
          lessons: [
            {id: 'l1', title: 'Gemstones for Each Planet: Properties and Associations', type: 'lesson'},
            {id: 'l2', title: 'Principles of Recommending Gemstones: Weight, Metal, Finger', type: 'lesson'},
            {id: 'l3', title: 'Purification, Energization, and Wearing of Gemstones', type: 'lesson'},
            {id: 'l4', title: 'Contraindications and Alternatives to Gemstones', type: 'lesson'}
          ],
          activity: 'Research the properties of Ruby and Blue Sapphire.'
        },
        {
          id: 'w4-yantra-tantra', week: 4, title: 'Yantra & Basic Tantra in Remedies',
          lessons: [
            {id: 'l1', title: 'Introduction to Yantras: Sacred Geometry and Their Power', type: 'lesson'},
            {id: 'l2', title: 'Common Yantras (Sri Yantra, Navagraha Yantra) and Their Uses', type: 'lesson'},
            {id: 'l3', title: 'Basic Principles of Tantric Remedies (Conceptual Overview, Non-Harmful)', type: 'lesson'}
          ],
          quiz: 'Match planets to their corresponding Yantras.'
        },
        {
          id: 'w5-daana-vrata', week: 5, title: 'Daana (Charity) & Vrata (Fasting)',
          lessons: [
            {id: 'l1', title: 'The Significance of Daana: Types and Benefits', type: 'lesson'},
            {id: 'l2', title: 'Prescribing Charity Based on Afflicted Planets/Houses', type: 'lesson'},
            {id: 'l3', title: 'Vratas (Fasts): Purpose, Types, and Planetary Associations', type: 'lesson'}
          ],
          assignment: 'Suggest a suitable charity for Saturn affliction.'
        },
        {
          id: 'w6-puja-homa', week: 6, title: 'Puja (Worship) & Homa (Fire Rituals)',
          lessons: [
            {id: 'l1', title: 'Performing Simple Planetary Pujas', type: 'lesson'},
            {id: 'l2', title: 'Introduction to Homa/Havan as a Remedial Measure', type: 'lesson'},
            {id: 'l3', title: 'Key Deities and Their Role in Remedial Worship', type: 'lesson'}
          ],
          exercise: 'Outline the steps for a simple Ganesha Puja.'
        },
        {
          id: 'w7-other-remedies', week: 7, title: 'Other Traditional & Environmental Remedies',
          lessons: [
            {id: 'l1', title: 'Rudraksha Therapy: Types and Uses', type: 'lesson'},
            {id: 'l2', title: 'Remedies related to Trees, Animals, and Natural Elements', type: 'lesson'},
            {id: 'l3', title: 'Color Therapy and Sound Therapy (Basic Concepts)', type: 'lesson'}
          ],
          activity: 'Research the significance of the Peepal tree in remedies.'
        },
        {
          id: 'w8-remedy-selection', week: 8, title: 'Holistic Remedy Selection & Integration',
          lessons: [
            {id: 'l1', title: 'Assessing the Native\'s Capacity and Belief System', type: 'lesson'},
            {id: 'l2', title: 'Combining Multiple Remedies for Complex Issues', type: 'lesson'},
            {id: 'l3', title: 'Importance of Lifestyle Changes with Remedies', type: 'lesson'}
          ],
          assignment: 'For a given affliction, suggest a multi-faceted remedial approach.'
        },
        {
          id: 'w9-remedy-casestudies', week: 9, title: 'Remedial Astrology Case Studies',
          lessons: [
            {id: 'l1', title: 'Case Study 1: Remedies for Career Obstacles', type: 'lesson'},
            {id: 'l2', title: 'Case Study 2: Remedies for Marital Discord', type: 'lesson'},
            {id: 'capstone', title: 'Capstone: Remedial Prescription for a Complex Chart', type: 'capstone'}
          ],
          finalAssignment: 'Provide a detailed remedial plan for a sample chart with multiple afflictions.'
        }
      ],
      instructor: { id: 'inst-remedyguru', name: 'Upaya Shastri', bio: 'Expert in Vedic remedial measures and their application.', qualifications: ['Jyotish Acharya', 'Mantra Shastra Expert'] },
      price: '$169',
      benefits: ["Planetary remedy selection guide", "Gemstone recommendation chart (traditional)", "List of important mantras for Navagrahas"],
      nextCourseRecommendation: "Astrology Ethics & Counseling Skills"
    },
    {
      id: 'spiritual-progress-horoscope',
      title: 'Spiritual Progress in the Horoscope',
      level: 'Advanced',
      category: 'Vedic Astrology', // Or "Spiritual Astrology"
      duration: '7 Weeks (14-18 Hours)',
      language: "English",
      imageUrl: 'https://placehold.co/600x400.png',
      dataAiHint: 'meditation enlightenment aura',
      briefDescription: 'Moksha indicators, planetary yogas, karma.',
      detailedDescription: 'Learn to analyze a birth chart for indicators of spiritual inclination, progress, and potential for liberation (Moksha). This course explores specific planetary combinations (yogas), house significations (9th, 12th), and Dasha periods relevant to spiritual development and understanding karmic patterns.',
      keyTopics: ['Houses of Spirituality (5th, 9th, 12th)', 'Planets for Spirituality (Jupiter, Saturn, Ketu)', 'Moksha Trikona', 'Sanyasa Yogas (Renunciation Combinations)', 'Guru Chandala Yoga and Other Spiritual Yogas', 'Analyzing Past Life Karma through the Chart', 'Dasha Periods for Spiritual Awakening'],
      prerequisites: ['Intermediate Vedic Astrology knowledge', '"Vimshottari Dasha System"'],
      syllabus: [
        {
          id: 'w1-spiritual-intro', week: 1, title: 'Foundations of Spiritual Astrology',
          lessons: [
            {id: 'l1', title: 'Defining Spirituality in the Astrological Context', type: 'lesson'},
            {id: 'l2', title: 'Key Houses for Spiritual Pursuits: 5th, 9th, 12th Houses', type: 'lesson'}
          ],
          assignment: 'Analyze the 9th house and its lord in your own chart.'
        },
        {
          id: 'w2-spiritual-planets', week: 2, title: 'Planets Indicating Spiritual Inclinations',
          lessons: [
            {id: 'l1', title: 'Jupiter (Guru): Wisdom, Guidance, and Higher Knowledge', type: 'lesson'},
            {id: 'l2', title: 'Saturn (Shani): Discipline, Detachment, and Austerity', type: 'lesson'},
            {id: 'l3', title: 'Ketu: Moksha Karaka, Renunciation, and Past Life Influences', type: 'lesson'},
            {id: 'l4', title: 'Moon and Mercury in Spiritual Contexts', type: 'lesson'}
          ],
          exercise: 'Identify the placement of Jupiter and Saturn in a spiritual leader\'s chart.'
        },
        {
          id: 'w3-moksha-trikona-sanyasa-yogas', week: 3, title: 'Moksha Trikona & Sanyasa Yogas',
          lessons: [
            {id: 'l1', title: 'Understanding Moksha Trikona (4th, 8th, 12th Houses)', type: 'lesson'},
            {id: 'l2', title: 'Identifying Sanyasa Yogas (Combinations for Renunciation)', type: 'lesson'},
            {id: 'l3', title: 'Interpreting the Strength and Manifestation of Sanyasa Yogas', type: 'lesson'}
          ],
          activity: 'Find examples of Sanyasa Yogas in known charts.'
        },
        {
          id: 'w4-other-spiritual-yogas', week: 4, title: 'Other Significant Spiritual Yogas',
          lessons: [
            {id: 'l1', title: 'Guru-Chandala Yoga: Spiritual Challenges and Unconventional Paths', type: 'lesson'},
            {id: 'l2', title: 'Pravrajya Yogas (Combinations for Asceticism)', type: 'lesson'},
            {id: 'l3', title: 'Yogas involving the Atmakaraka Planet', type: 'lesson'}
          ],
          quiz: 'What planets form the Guru-Chandala Yoga?'
        },
        {
          id: 'w5-karma-pastlife', week: 5, title: 'Analyzing Past Life Karma & Spiritual Path',
          lessons: [
            {id: 'l1', title: 'Indicators of Past Life Karma in the Natal Chart (Rahu/Ketu axis, 5th/9th houses)', type: 'lesson'},
            {id: 'l2', title: 'Identifying the Soul\'s Purpose (Atmakaraka and Ishta Devata - Intro)', type: 'lesson'},
            {id: 'l3', title: 'Using Divisional Charts (D-9, D-60) for Spiritual Insights (Brief)', type: 'lesson'}
          ],
          assignment: 'Reflect on the Rahu/Ketu axis in your chart and its potential karmic lessons.'
        },
        {
          id: 'w6-dashas-spiritual-awakening', week: 6, title: 'Dasha Periods for Spiritual Awakening & Progress',
          lessons: [
            {id: 'l1', title: 'Identifying Dasha/Antardasha Periods of Jupiter, Saturn, Ketu', type: 'lesson'},
            {id: 'l2', title: 'Analyzing the Dashas of 9th and 12th Lords for Spiritual Events', type: 'lesson'},
            {id: 'l3', title: 'Correlating Dashas with Transits for Spiritual Turning Points', type: 'lesson'}
          ],
          exercise: 'Analyze the current Dasha period of a spiritual practitioner.'
        },
        {
          id: 'w7-spiritual-casestudies', week: 7, title: 'Spiritual Astrology Case Studies',
          lessons: [
            {id: 'l1', title: 'Case Study: Chart of a Monk/Renunciate', type: 'lesson'},
            {id: 'l2', title: 'Case Study: Chart of a Devotional Practitioner (Bhakta)', type: 'lesson'},
            {id: 'capstone', title: 'Capstone: Spiritual Potential Assessment of a Chart', type: 'capstone'}
          ],
          finalAssignment: 'Assess the spiritual inclinations and potential challenges in a sample chart.'
        }
      ],
      instructor: { id: 'inst-adhyatmaguru', name: 'Adhyatma Guru', bio: 'Focuses on the spiritual dimensions of Vedic astrology.', qualifications: ['PhD Philosophy', 'Jyotish Acharya'] },
      price: '$149',
      benefits: ["Checklist for identifying spiritual yogas", "Guide to understanding Atmakaraka", "Meditations for connecting with planetary energies"],
      nextCourseRecommendation: "Astrology Ethics & Counseling Skills"
    },
    // Optional Add-ons - Placeholder Syllabi
    {
      id: 'astrology-ethics-counseling',
      title: 'Astrology Ethics & Counseling Skills',
      level: 'Advanced', // Can be taken by Intermediate too
      category: 'Professional Development',
      duration: '4 Weeks (8-10 Hours)',
      language: "English",
      imageUrl: 'https://placehold.co/600x400.png',
      dataAiHint: 'compassionate counseling hands',
      briefDescription: 'Essential ethics and communication skills for practicing astrologers.',
      detailedDescription: 'This course focuses on the ethical responsibilities and effective counseling techniques for astrologers. Learn how to communicate sensitive information, maintain client confidentiality, set professional boundaries, and provide guidance that empowers rather than dictates.',
      keyTopics: ['Code of Ethics for Astrologers', 'Client Confidentiality', 'Effective Communication Skills', 'Handling Difficult Predictions', 'Empathetic Listening', 'Setting Boundaries', 'Avoiding Fatalism in Readings', 'Legal and Professional Considerations'],
      prerequisites: ['Intermediate or Advanced Vedic Astrology knowledge'],
      syllabus: [
        {
          id: 'w1-ethics-foundations', week: 1, title: 'Ethical Foundations for Astrologers',
          lessons: [
            {id: 'l1', title: 'The Astrologer\'s Code of Conduct: Responsibility and Integrity', type: 'lesson'},
            {id: 'l2', title: 'Understanding Client Confidentiality and Privacy', type: 'lesson'},
            {id: 'l3', title: 'Scope of Astrological Guidance: What to Advise and What to Avoid', type: 'lesson'}
          ],
          assignment: 'Draft your personal code of ethics as an astrologer.'
        },
        {
          id: 'w2-counseling-communication', week: 2, title: 'Effective Communication & Counseling Techniques',
          lessons: [
            {id: 'l1', title: 'Active and Empathetic Listening Skills', type: 'lesson'},
            {id: 'l2', title: 'Communicating Sensitive or Challenging Predictions', type: 'lesson'},
            {id: 'l3', title: 'Non-Verbal Communication and Building Rapport', type: 'lesson'}
          ],
          activity: 'Role-play a counseling session for delivering difficult news.'
        },
        {
          id: 'w3-counseling-boundaries', week: 3, title: 'Setting Boundaries & Managing Expectations',
          lessons: [
            {id: 'l1', title: 'Establishing Professional Boundaries with Clients', type: 'lesson'},
            {id: 'l2', title: 'Managing Client Expectations and Avoiding Fatalism', type: 'lesson'},
            {id: 'l3', title: 'Handling Difficult Clients or Ethical Dilemmas', type: 'lesson'}
          ],
          exercise: 'Develop strategies for responding to clients seeking guaranteed outcomes.'
        },
        {
          id: 'w4-ethics-professional-practice', week: 4, title: 'Professional Practice & Legal Considerations',
          lessons: [
            {id: 'l1', title: 'Legal and Liability Issues for Astrologers (Overview)', type: 'lesson'},
            {id: 'l2', title: 'Building a Sustainable and Ethical Astrological Practice', type: 'lesson'},
            {id: 'capstone', title: 'Capstone: Ethical Dilemma Case Study Analysis', type: 'capstone'}
          ],
          finalAssignment: 'Analyze a case study involving an ethical dilemma and propose a course of action.'
        }
      ],
      instructor: { id: 'inst-ethicscounselor', name: 'Dr. Niti Sharma', bio: 'Experienced counselor and ethics advisor for astrologers.', qualifications: ['PhD Psychology', 'Jyotish Acharya'] },
      price: '$99',
      benefits: ["Sample client intake forms and disclaimer templates", "Ethical guidelines checklist", "Resources on counseling skills"],
      nextCourseRecommendation: "Becoming a Certified Astrologer (Capstone)"
    },
    {
      id: 'business-astrology-muhurta',
      title: 'Business Astrology & Muhurta Selection',
      level: 'Advanced',
      category: 'Applied Astrology',
      duration: '6 Weeks (12-15 Hours)',
      language: "English",
      imageUrl: 'https://placehold.co/600x400.png',
      dataAiHint: 'business graph success time',
      briefDescription: 'Applying astrology for business success and choosing auspicious timings.',
      detailedDescription: 'Learn to apply Vedic astrological principles for business-related queries, including choosing auspicious times (Muhurta) for starting new ventures, partnerships, and important business decisions. Analyze charts for business success potential and identify favorable periods.',
      keyTopics: ['Planetary Influences on Business', 'Analyzing Horoscopes for Business Acumen', 'Muhurta for Business Initiation', 'Partnership Compatibility in Business', 'Astrology for Financial Planning in Business', 'Choosing Auspicious Names for Businesses', 'Remedies for Business Challenges'],
      prerequisites: ['Intermediate Vedic Astrology knowledge', '"Transit Analysis (Gochar)"'],
      syllabus: [
        {
          id: 'w1-business-astro-intro', week: 1, title: 'Foundations of Business Astrology',
          lessons: [
            {id: 'l1', title: 'Key Houses and Planets for Business Success (10th, 7th, 2nd, 11th)', type: 'lesson'},
            {id: 'l2', title: 'Assessing Business Acumen and Entrepreneurial Potential in a Chart', type: 'lesson'}
          ],
          assignment: 'Analyze the 10th house of a successful business person\'s chart.'
        },
        {
          id: 'w2-business-muhurta-basics', week: 2, title: 'Muhurta Basics for Business Activities',
          lessons: [
            {id: 'l1', title: 'Core Principles of Muhurta Selection (Panchang, Planetary Strength)', type: 'lesson'},
            {id: 'l2', title: 'Auspicious Nakshatras, Tithis, and Varas for Business Starts', type: 'lesson'}
          ],
          exercise: 'Find 3 auspicious Nakshatras for launching a new product.'
        },
        {
          id: 'w3-muhurta-specifics', week: 3, title: 'Specific Muhurtas for Business Ventures',
          lessons: [
            {id: 'l1', title: 'Choosing Muhurta for Company Registration and Opening', type: 'lesson'},
            {id: 'l2', title: 'Muhurta for Signing Contracts and Partnerships', type: 'lesson'},
            {id: 'l3', title: 'Muhurta for Financial Transactions and Investments', type: 'lesson'}
          ],
          activity: 'Select a Muhurta for signing a business agreement.'
        },
        {
          id: 'w4-partnership-name-astrology', week: 4, title: 'Partnership Compatibility & Business Naming',
          lessons: [
            {id: 'l1', title: 'Astrological Compatibility for Business Partners (Brief)', type: 'lesson'},
            {id: 'l2', title: 'Principles of Choosing an Auspicious Business Name (Numerology & Astrology Intro)', type: 'lesson'}
          ],
          quiz: 'Key factors for business partnership compatibility.'
        },
        {
          id: 'w5-business-remedies', week: 5, title: 'Astrological Remedies for Business Challenges',
          lessons: [
            {id: 'l1', title: 'Identifying Astrological Causes for Business Obstacles', type: 'lesson'},
            {id: 'l2', title: 'Traditional Upayas (Mantras, Yantras, Pujas) for Business Growth', type: 'lesson'}
          ],
          assignment: 'Suggest a remedy for financial blockages in a business.'
        },
        {
          id: 'w6-business-astro-casestudies', week: 6, title: 'Business Astrology Case Studies',
          lessons: [
            {id: 'l1', title: 'Case Study: Analyzing a Successful Business Chart', type: 'lesson'},
            {id: 'l2', title: 'Case Study: Selecting Muhurta for a New Venture', type: 'lesson'},
            {id: 'capstone', title: 'Capstone: Astrological Business Plan Review (Simulated)', type: 'capstone'}
          ],
          finalAssignment: 'Evaluate the astrological potential of a hypothetical business startup based on its launch chart.'
        }
      ],
      instructor: { id: 'inst-businessjyotish', name: 'Vyapar Jyotishi', bio: 'Consultant for business astrology and Muhurta.', qualifications: ['MBA', 'Jyotish Visharad'] },
      price: '$129',
      benefits: ["Muhurta selection checklist for business", "Guide to business-related Yogas", "Case studies of successful business horoscopes"],
      nextCourseRecommendation: "Becoming a Certified Astrologer (Capstone)"
    },
    {
      id: 'becoming-certified-astrologer',
      title: 'Becoming a Certified Astrologer (Capstone)',
      level: 'Advanced',
      category: 'Professional Development',
      duration: '10 Weeks (Project-Based)',
      language: "English",
      imageUrl: 'https://placehold.co/600x400.png',
      dataAiHint: 'astrology certificate graduation',
      briefDescription: 'A capstone project and examination to earn your certification.',
      detailedDescription: 'This capstone course consolidates your learning from previous advanced courses. It involves undertaking comprehensive chart analyses, a research project or case studies, and a final examination to demonstrate proficiency and earn a SanatanSphere Vedic Astrologer Certification.',
      keyTopics: ['Comprehensive Chart Analysis Project', 'Advanced Case Study Discussions', 'Research Methodology in Astrology', 'Presentation Skills for Astrologers', 'Final Certification Examination', 'Building a Professional Practice'],
      prerequisites: ['Completion of multiple Advanced Level courses (e.g., Predictive Techniques, Vargas, Upaya Shastra) or equivalent demonstrated knowledge.'],
      syllabus: [
        {
          id: 'w1-capstone-intro', week: 1, title: 'Capstone Project: Scope and Guidelines',
          lessons: [
            {id: 'l1', title: 'Overview of Certification Requirements and Capstone Project', type: 'lesson'},
            {id: 'l2', title: 'Choosing a Specialization Area for In-depth Analysis (Optional)', type: 'lesson'}
          ],
          assignment: 'Submit capstone project proposal.'
        },
        {
          id: 'w2-4-comprehensive-analysis', week: 2, title: 'Comprehensive Chart Analysis Techniques (Weeks 2-4)',
          description: "Focus on integrating all learned techniques for holistic chart reading.",
          lessons: [
            {id: 'l1', title: 'Methodology for Full Chart Delineation (Step-by-Step)', type: 'lesson'},
            {id: 'l2', title: 'Integrating Rashi, Vargas, Dashas, Transits, and Yogas', type: 'lesson'},
            {id: 'l3', title: 'Practical Application on Multiple Complex Charts (Guided)', type: 'lesson'}
          ],
          exercise: 'Submit interim analysis reports for peer review.'
        },
        {
          id: 'w5-research-methodology', week: 5, title: 'Astrological Research & Case Study Development',
          lessons: [
            {id: 'l1', title: 'Introduction to Research Methods in Astrology', type: 'lesson'},
            {id: 'l2', title: 'Developing and Presenting Astrological Case Studies', type: 'lesson'}
          ],
          activity: 'Develop a case study based on a chosen astrological principle.'
        },
        {
          id: 'w6-consultation-skills', week: 6, title: 'Advanced Consultation & Presentation Skills',
          lessons: [
            {id: 'l1', title: 'Structuring an Astrological Consultation Effectively', type: 'lesson'},
            {id: 'l2', title: 'Presenting Complex Astrological Information Clearly', type: 'lesson'}
          ],
          quiz: 'Principles of effective astrological communication.'
        },
        {
          id: 'w7-8-project-work', week: 7, title: 'Dedicated Capstone Project Work (Weeks 7-8)',
          description: "Independent work on the capstone project with mentor support.",
          lessons: [
            {id: 'l1', title: 'Individual Project Mentoring Sessions', type: 'lesson'},
            {id: 'l2', title: 'Peer Review and Feedback Sessions', type: 'lesson'}
          ],
          assignment: 'Submit draft of capstone project.'
        },
        {
          id: 'w9-exam-prep', week: 9, title: 'Final Examination Preparation',
          lessons: [
            {id: 'l1', title: 'Review of Key Advanced Concepts and Techniques', type: 'lesson'},
            {id: 'l2', title: 'Mock Examination and Q&A Session', type: 'lesson'}
          ],
          activity: 'Participate in study groups for exam preparation.'
        },
        {
          id: 'w10-final-submission-exam', week: 10, title: 'Final Project Submission & Certification Exam',
          lessons: [
            {id: 'l1', title: 'Submission of Final Capstone Project', type: 'lesson'},
            {id: 'l2', title: 'Online Proctored Certification Examination', type: 'lesson'}
          ],
          finalAssignment: 'Successful completion of capstone project and certification exam.'
        }
      ],
      instructor: { id: 'inst-certifyingboard', name: 'SanatanSphere Certification Board', bio: 'A panel of senior astrologers and educators.', qualifications: ['Various Jyotish Titles'] },
      price: '$299',
      benefits: ["Eligibility for SanatanSphere Certified Astrologer credential", "Portfolio development support", "Access to advanced astrologer community"],
      nextCourseRecommendation: "Continuous learning through workshops and advanced seminars."
    },
  ]
};
    
    
  