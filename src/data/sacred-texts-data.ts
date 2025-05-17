import type { SacredText } from '@/types';

export const sacredTextsData: SacredText[] = [
  {
    id: 'purusha-sukta',
    title: 'Purusha Sukta',
    type: 'Sukta',
    focus: 'Purusha (Cosmic Being)',
    source: 'Rigveda 10.90',
    description: 'Describes the spiritual unity of the cosmos and creation from the sacrifice of the Cosmic Being.',
    verses: [
      {
        id: 'purusha-sukta-v1',
        number: 1,
        sanskrit: 'ॐ सहस्रशीर्षा पुरुषः सहस्राक्षः सहस्रपात् ।',
        transliteration: 'oṃ sahasraśīrṣā puruṣaḥ sahasrākṣaḥ sahasrapāt |',
        translation: 'Om. The Purusha (Cosmic Being) has a thousand heads, a thousand eyes, and a thousand feet.',
        meaning: 'Represents the omnipresence of Purusha; thousand signifies infinite consciousness, perception, and action.'
      },
      {
        id: 'purusha-sukta-v2',
        number: 2,
        sanskrit: 'स भूमिं विश्वतो वृत्वात्यतिष्ठद्दशाङ्गुलम् ॥',
        transliteration: 'sa bhūmiṃ viśvato vṛtvātyatiṣṭhaddaśāṅgulam ||',
        translation: 'He enveloped the earth from all sides and transcended it by ten finger-widths.',
        meaning: 'Shows Purusha\'s transcendence beyond the physical universe; ten finger-widths symbolize metaphysical reality.'
      },
      {
        id: 'purusha-sukta-v3',
        number: 3,
        sanskrit: 'पुरुष एवेदं सर्वं यद्भूतं यच्च भव्यम् ।',
        transliteration: 'puruṣa evedaṃ sarvaṃ yadbhūtaṃ yacca bhavyam |',
        translation: 'The Purusha alone is all this – whatever has been and whatever is to be.',
        meaning: 'Emphasizes that everything, past, present, and future, is a manifestation of the Cosmic Being.'
      }
    ]
  },
  {
    id: 'shri-rudram-chamakam',
    title: 'Shri Rudram Chamakam',
    type: 'Stotra',
    focus: 'Lord Shiva (Rudra)',
    source: 'Krishna Yajurveda',
    description: 'Divided into Namakam (salutations) and Chamakam (prayers), praising Rudra\'s many forms and seeking blessings.',
    verses: [
      {
        id: 'shri-rudram-chamakam-namakam-1.1',
        section: 'Namakam',
        number: '1.1',
        sanskrit: 'ॐ नमो भगवते रुद्राय ॥',
        transliteration: 'oṃ namo bhagavate rudrāya ||',
        translation: 'Om. Salutations to the omnipresent Lord Rudra.',
        meaning: 'Recognizes Rudra as the divine being with all six divine attributes including glory and liberation.'
      },
      {
        id: 'shri-rudram-chamakam-chamakam-1.1',
        section: 'Chamakam',
        number: '1.1',
        sanskrit: 'वाजश्च मे प्रसवश्च मे प्रयतिश्च मे प्रसितिश्च मे धीतिश्च मे क्रतुश्च मे ।',
        transliteration: 'vājaśca me prasavaśca me prayatiśca me prasitiśca me dhītiśca me kratuśca me |',
        translation: 'May food, inspiration, effort, good attachment, thought, and sacrifice be granted to me.',
        meaning: 'Prayers for fulfillment of physical, mental, and spiritual needs.'
      }
    ]
  },
  {
    id: 'ganesha-pancharatnam',
    title: 'Ganesha Pancharatnam',
    type: 'Stotra',
    focus: 'Lord Ganesha',
    source: 'Composed by Adi Shankaracharya',
    description: 'Five-verse hymn in praise of Ganesha, symbolizing joy, wisdom, and spiritual power.',
    verses: [
      {
        id: 'ganesha-pancharatnam-v1',
        number: 1,
        sanskrit: 'मुदाकरात्तमोदकं सदा विमुक्तिसाधकं कलाधरावतंसकं विलासिलोकरञ्जनम् ।',
        transliteration: 'mudākarāttamodakaṃ sadā vimuktisādhakaṃ kalādharāvataṃsakaṃ vilāsilokarañjanam |',
        translation: 'He holds the sweet modaka, bestows liberation, wears the moon, and delights the worlds.',
        meaning: 'Ganesha as joyful, liberating, cosmically adorned, and playfully divine.'
      },
      {
        id: 'ganesha-pancharatnam-v2',
        number: 2,
        sanskrit: 'अनायकैकनायकं विनाशितेभदैत्यकं नताशुभाशुनाशकं नमामि तं विनायकम् ॥',
        transliteration: 'anāyakaikanāyakaṃ vināśitebhadaityakaṃ natāśubhāśunāśakaṃ namāmi taṃ vināyakam ||',
        translation: 'Leader of the leaderless, destroyer of Gajasura, remover of inauspiciousness — I bow to Him.',
        meaning: 'Shows Ganesha’s role as protector, slayer of negativity, and the first deity to be invoked.'
      }
    ]
  }
];
