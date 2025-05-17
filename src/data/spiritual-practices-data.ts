
import type { LucideIcon } from 'lucide-react';
import { HandHeart, BrainCog, Palette, Leaf } from 'lucide-react'; // Leaf was Lotus, corrected

export interface PracticeItem {
  name: string;
  details?: string; // Added details field for dialog content
}

export interface PracticeCategory {
  id: string;
  title: string;
  icon: LucideIcon;
  items: PracticeItem[];
  description: string;
}

export const spiritualPracticesCategories: PracticeCategory[] = [
  {
    id: 'worship-sacrifice-charity',
    title: 'Worship, Sacrifice, and Charity',
    icon: HandHeart,
    description: 'Explore diverse forms of devotion, offerings, and selfless giving central to spiritual life.',
    items: [
      { name: 'Puja', details: 'Pūjā or Poojan is a worship ritual performed by Hindus, Buddhists and Jains to offer devotional homage and prayer to one or more deities, to host and honor a guest, or to spiritually celebrate an event. It may honor or celebrate the presence of special guest(s), or their memories after they die. The word "pūjā" is Sanskrit, and means reverence, honor, homage, adoration and worship.' },
      { name: 'Ārtī', details: 'Ārtī, also spelled arti, arati, arathi, aarthi is a Hindu religious ritual of worship, a part of puja, in which light from wicks soaked in ghee (purified butter) or camphor is offered to one or more deities. Ārtīs also refer to the songs sung in praise of the deity, when lamps are being offered.' },
      { name: 'Prarthana', details: 'Prarthana means prayer or supplication. It is a form of communication with the divine, expressing devotion, gratitude, or seeking guidance and blessings.' },
      { name: 'Śrauta', details: 'Śrauta rituals are a type of Vedic ritual, typically large public ceremonies involving multiple priests and precise chanting of Vedic mantras, often centered around fire offerings (Yajna).' },
      { name: 'Temple', details: 'A Hindu temple, or mandir in Sanskrit, is a house of worship, a spiritual destination for many Hindus, as well as a landmark feature of Hindu architecture. Temples are dedicated to various deities and serve as centers for religious and community activities.' },
      { name: 'Murti', details: 'A murti is an image, statue or idol of a deity or saint in Hindu tradition. Murtis are considered sacred and are used in worship to help devotees focus on the divine.' },
      { name: 'Bhakti', details: 'Bhakti means devotion, and Bhakti yoga is a spiritual path or spiritual practice within Hinduism focused on loving devotion towards any personal deity. It is one of the paths to moksha (liberation).' },
      { name: 'Japa', details: 'Japa is the meditative repetition of a mantra or a divine name. It is a common practice in Hinduism as a means of focusing the mind and connecting with the divine.' },
      { name: 'Bhajana', details: 'A bhajan is any type of Hindu devotional song. It has no fixed form: it may be as simple as a mantra or kirtan or as sophisticated as the dhrupad or kriti with music based on classical ragas and talas.' },
      { name: 'Kīrtana', details: 'Kirtan is a Sanskrit word that means "narrating, reciting, telling, describing" of an idea or story. It also refers to a genre of religious performance arts, connoting a musical form of narration or shared recitation, particularly of spiritual or religious ideas.' },
      { name: 'Yajna', details: 'Yajna, also known as yajña, is a ritual of offerings accompanied by chanting of Vedic mantras according to a prescribed procedure. It is typically performed before a sacred fire (Agni) and is a cornerstone of Vedic traditions.' },
      { name: 'Homa', details: 'Homa, also known as havan, is a fire ritual in Hinduism where offerings are made into a consecrated fire. It is a smaller, often private version of a Yajna.' },
      { name: 'Tarpana', details: 'Tarpana is a ritual of offering water to divine beings or ancestors (Pitr) to please them. It is an act of respect and remembrance.' },
      { name: 'Vrata', details: 'A Vrata is a religious vow, a spiritual observance, or a period of austerity voluntarily undertaken to achieve a specific spiritual or personal goal. It often involves fasting and specific rituals.' },
      { name: 'Prāyaścitta', details: 'Prāyaścitta refers to acts of penance or atonement for sins or wrongdoings. It is a means of purification and self-correction.' },
      { name: 'Tirtha', details: 'Tirtha are holy sites or pilgrimage destinations in Hinduism. Visiting tirthas is believed to purify the soul and bring spiritual merit.' },
      { name: 'Yatra', details: 'Yatra means pilgrimage or a journey to a sacred place. It is an important spiritual practice for many Hindus.' },
      { name: 'Tirthadana', details: 'Tirthadana refers to charitable acts performed at a pilgrimage site, such as offering food or resources to priests, the needy, or for the upkeep of the holy place.' },
      { name: 'Matha', details: 'A Matha is a monastic and spiritual center in Hinduism, often associated with a particular sampradaya (tradition or lineage). They serve as places of learning, meditation, and community service.' },
      { name: 'Nritta-Nritya', details: 'Nritta is pure, abstract dance focusing on rhythmic movements, while Nritya incorporates expressive elements to convey stories or emotions. Both are integral to classical Indian dance forms often performed in spiritual contexts.' },
      { name: 'Dāna', details: 'Dāna is the practice of cultivating generosity or giving. It is a form of charity and an important virtue in Hinduism.' },
      { name: 'Sevā', details: 'Seva in Hinduism is the concept of selfless service. It is performed without any expectation of result or reward for performing it. Such services can be performed to benefit other human beings or society.' },
      { name: 'Yoga (General)', details: 'Yoga, in a general sense, refers to a group of physical, mental, and spiritual practices or disciplines which originated in ancient India and aim to control (yoke) and still the mind, recognizing a detached witness-consciousness untouched by the mind (Chitta) and mundane suffering (Duḥkha).' },
      { name: 'Exorcism', details: 'While not a mainstream or universally accepted practice, certain folk traditions and specific Tantric schools within Hinduism may involve rituals aimed at dispelling negative energies or spirits. These are highly specialized and vary greatly by region and practitioner.' },
    ],
  },
  {
    id: 'meditation',
    title: 'Meditation',
    icon: BrainCog,
    description: 'Discover practices for mental discipline, focus, and profound inner contemplation.',
    items: [
      { name: 'Tapas', details: 'Tapas refers to ascetic practice, deep meditation, and disciplined effort undertaken for spiritual growth and purification. It involves self-discipline and austerity.' },
      { name: 'Dhyana', details: 'Dhyana means meditation or contemplation. It is a state of focused awareness, often practiced to calm the mind and achieve deeper spiritual insights.' },
      { name: 'Samādhāna', details: 'Samādhāna refers to mental concentration or one-pointedness of the mind, an essential aspect of meditative practices.' },
      { name: 'Nididhyāsana', details: 'Nididhyāsana is profound and repeated meditation on the Mahāvākyas (great sayings) of the Upanishads. It is a key practice in Jnana Yoga for realizing the identity of Atman and Brahman.' },
    ],
  },
  {
    id: 'yoga-specific',
    title: 'Yoga (Specific Paths & Concepts)',
    icon: Leaf,
    description: 'Delve into various yogic paths, postures, and concepts for holistic well-being.',
    items: [
      { name: 'Sadhu', details: 'A Sadhu is a religious ascetic, mendicant or any holy person in Hinduism and Jainism who has renounced the worldly life. Sadhus are dedicated to achieving moksha (liberation).' },
      { name: 'Yogi', details: 'A Yogi is a practitioner of Yoga, including a sannyasin or practitioner of meditation in Hindu, Buddhist and Jain traditions.' },
      { name: 'Yogini', details: 'A Yogini is a female master practitioner of Yoga, as well as a formal term of respect for female Hindu or Buddhist spiritual teachers in India, Nepal and Tibet.' },
      { name: 'Asana', details: 'An asana is a body posture, originally and still a general term for a sitting meditation pose, and later extended in hatha yoga and modern yoga as exercise, to any type of pose or position, adding reclining, standing, inverted, twisting, and balancing poses.' },
      { name: 'Sādhanā', details: 'Sādhanā is a generic term from the yogic tradition that refers to any spiritual exercise that is aimed at progressing the sādhaka towards the very ultimate expression of their life in this reality.' },
      { name: 'Hatha yoga', details: 'Hatha yoga is a branch of yoga that uses physical techniques to try to preserve and channel the vital force or energy. The Sanskrit word हठ haṭha literally means "force," alluding to a system of physical techniques.' },
      { name: 'Jnana yoga', details: 'Jnana yoga or Gnosis yoga is one of the three classical paths (margas) for moksha (liberation) in Hinduism, which emphasizes the "path of knowledge", also known as the "path of self-realization".' },
      { name: 'Bhakti yoga', details: 'Bhakti yoga, also called Bhakti marga, is a spiritual path or spiritual practice within Hinduism focused on loving devotion towards any personal deity.' },
      { name: 'Karma yoga', details: 'Karma yoga, or the "yoga of action," is a form of yoga based on the teachings of the Bhagavad Gita, a sacred Sanskrit scripture of Hinduism. Of the three paths to realization, karma yoga is the process of achieving perfection in selfless action.' },
      { name: 'Rāja yoga', details: 'Rāja yoga is a school of Hinduism that is referred to simply as "yoga" in the Yoga Sutras of Patanjali. It is concerned principally with the cultivation of the mind using meditation (dhyana) to further one\'s acquaintance with reality and finally achieve liberation.' },
      { name: 'Kundalini yoga', details: 'Kundalini yoga derives its name through a focus on awakening kundalini energy through regular practice of mantra, tantra, yantra, yoga, or meditation.' },
    ],
  },
  {
    id: 'arts',
    title: 'Spiritual & Performing Arts',
    icon: Palette,
    description: 'Experience the divine through traditional Indian dance, music, and dramatic arts.',
    items: [
      { name: 'Bharatanatyam', details: 'Bharatanatyam is a major genre of Indian classical dance that originated in Tamil Nadu. It is known for its grace, purity, tenderness, and sculpturesque poses. Lord Shiva is considered the god of this dance form.' },
      { name: 'Kathak', details: 'Kathak is one of the eight major forms of Indian classical dance. It is traditionally attributed to the traveling bards of ancient northern India known as Kathakars or storytellers.' },
      { name: 'Kathakali', details: 'Kathakali is a major form of classical Indian dance. It is a "story play" genre of art, but one distinguished by its elaborately colorful make-up, costumes and face masks that the traditionally male actor-dancers wear.' },
      { name: 'Kuchipudi', details: 'Kuchipudi is one of the eleven major Indian classical dances. It originated in a village named Kuchipudi in the Indian state of Andhra Pradesh.' },
      { name: 'Manipuri', details: 'Manipuri dance, also known as Jagoi, is one of the major Indian classical dance forms, named after the region of its origin – Manipur, a state in northeastern India. It is particularly known for its Hindu Vaishnavism themes, and exquisite performances of love-inspired dance drama of Radha-Krishna called Raslila.' },
      { name: 'Mohiniyattam', details: 'Mohiniyattam is an Indian classical dance form that evolved in the state of Kerala, India. It is a very graceful dance meant to be performed as solo recitals by women.' },
      { name: 'Odissi', details: 'Odissi, also referred to as Orissi in older literature, is a major ancient Indian classical dance that originated in the Hindu temples of Odisha – an eastern coastal state of India.' },
      { name: 'Sattriya', details: 'Sattriya is a major Indian classical dance. It is a dance-drama performance art with origins in the Krishna-centered Vaishnavism monasteries of Assam, and attributed to the 15th century Bhakti movement scholar and saint Mahapurush Srimanta Sankardev.' },
      { name: 'Bhagavata Mela', details: 'Bhagavata Mela is a classical Indian dance form that is performed by men, predominantly in the Thanjavur area of Tamil Nadu. The performance is a form of dance-drama, with a strong emphasis on bhakti.' },
      { name: 'Yakshagana', details: 'Yakshagana is a traditional Indian theatre form, developed in Dakshina Kannada, Udupi, Uttara Kannada, Shimoga and western parts of Chikmagalur districts, in the state of Karnataka and in Kasaragod district in Kerala that combines dance, music, dialogue, costume, make-up, and stage techniques with a unique style and form.' },
      { name: 'Dandiya Raas', details: 'Dandiya Raas is the socio-religious folk dance originating from Indian state of Gujarat and popularly performed in the festival of Navaratri. The dance is performed in the Marwar region of Rajasthan too.' },
      { name: 'Carnatic music', details: 'Carnatic music, known as Karnāṭaka saṃgīta or Karnāṭaka saṅgītam in the South Indian languages, is a system of music commonly associated with South India, including the modern Indian states of Karnataka, Andhra Pradesh, Telangana, Kerala and Tamil Nadu, and Sri Lanka.' },
      { name: 'Pandav Lila', details: 'Pandav Lila is a ritual re-enactment of episodes from the Mahabharata, performed in the Garhwal region of Uttarakhand. It is a vibrant folk theatre tradition that involves music, dance, and storytelling.' },
      { name: 'Kalaripayattu', details: 'Kalaripayattu is an Indian martial art and fighting system that originated in Kerala. While primarily a martial art, it has deep spiritual and disciplinary aspects, often linked with temple traditions.' },
      { name: 'Silambam', details: 'Silambam is a weapon-based Indian martial art originating in Tamil Nadu. It is also traditionally practiced in a spiritual context, emphasizing discipline and mental focus.' },
      { name: 'Adimurai', details: 'Adimurai is a traditional Indian martial art that originated in Kanyakumari, the southernmost region of India. It involves striking techniques and is often practiced with a spiritual discipline.' },
    ],
  },
];
