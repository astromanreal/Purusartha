import type { PurusarthaGoalData } from '@/types';
import { ShieldCheck, CircleDollarSign, Heart, Sunrise, Activity } from 'lucide-react'; // Added Activity

export const purusarthaGoalsData: PurusarthaGoalData[] = [
  {
    id: 'Dharma',
    title: 'Dharma (Duty & Righteousness)',
    description: 'Fulfilling one\'s duties, responsibilities, and living an ethical life.',
    icon: ShieldCheck,
    tasks: [
      {
        id: 'dharma_task_1',
        title: 'Practice Honesty for a Week',
        description: 'Make a conscious effort to be truthful in all your interactions for seven consecutive days.',
        category: 'Dharma',
      },
      {
        id: 'dharma_task_2',
        title: 'Volunteer for a Cause',
        description: 'Dedicate at least 3 hours to volunteering for a community service or a cause you believe in.',
        category: 'Dharma',
      },
      {
        id: 'dharma_task_3',
        title: 'Study a Dharmic Text',
        description: 'Read and reflect upon a chapter from a key dharmic scripture (e.g., Bhagavad Gita, Ramayana).',
        category: 'Dharma',
      },
    ],
  },
  {
    id: 'Artha',
    title: 'Artha (Prosperity & Meaning)',
    description: 'Achieving material prosperity, professional success, and finding meaning in one\'s work.',
    icon: CircleDollarSign,
    tasks: [
      {
        id: 'artha_task_1',
        title: 'Set a Financial Goal',
        description: 'Define a small, achievable financial goal for the next month and outline steps to reach it.',
        category: 'Artha',
      },
      {
        id: 'artha_task_2',
        title: 'Learn a New Skill',
        description: 'Dedicate time to learning a new skill that can contribute to your career or personal wealth.',
        category: 'Artha',
      },
      {
        id: 'artha_task_3',
        title: 'Review Your Spending',
        description: 'Track your expenses for a week and identify areas for potential savings or better resource management.',
        category: 'Artha',
      },
    ],
  },
  {
    id: 'Kama',
    title: 'Kama (Pleasure & Enjoyment)',
    description: 'Experiencing sensual pleasure, emotional fulfillment, and aesthetic enjoyment in a balanced way.',
    icon: Heart,
    tasks: [
      {
        id: 'kama_task_1',
        title: 'Engage in a Hobby',
        description: 'Spend at least 2 hours engaging in a hobby that brings you joy and relaxation.',
        category: 'Kama',
      },
      {
        id: 'kama_task_2',
        title: 'Connect with Loved Ones',
        description: 'Have a meaningful conversation or spend quality time with a family member or friend.',
        category: 'Kama',
      },
      {
        id: 'kama_task_3',
        title: 'Appreciate Art or Nature',
        description: 'Visit a museum, art gallery, or spend time in nature, consciously appreciating its beauty.',
        category: 'Kama',
      },
    ],
  },
  {
    id: 'Moksha',
    title: 'Moksha (Liberation & Spiritual Realization)',
    description: 'Seeking spiritual liberation, self-realization, and freedom from the cycle of rebirth.',
    icon: Sunrise,
    tasks: [
      {
        id: 'moksha_task_1',
        title: 'Daily Meditation Practice (Original)',
        description: 'Meditate for at least 10 minutes every day for a week.',
        category: 'Moksha',
      },
      {
        id: 'moksha_task_2',
        title: 'Practice Detachment',
        description: 'Identify one attachment (material or emotional) and consciously practice detachment from it for a day.',
        category: 'Moksha',
      },
      {
        id: 'moksha_task_3',
        title: 'Reflect on the Self',
        description: 'Spend 30 minutes in quiet reflection or journaling about your true nature and spiritual aspirations.',
        category: 'Moksha',
      },
    ],
  },
  {
    id: 'NityaKarma',
    title: 'Nitya Karma (Daily Well-being Practices)',
    description: 'Incorporate these essential daily practices for spiritual, mental, and physical well-being. Aim to complete them consistently to cultivate a balanced and harmonious life.',
    icon: Activity,
    tasks: [
      {
        id: 'nityakarma_task_1',
        title: 'Daily Meditation (15 mins)',
        description: 'Dedicate 15 minutes to silent meditation or a guided practice to calm the mind and enhance focus.',
        category: 'NityaKarma',
      },
      {
        id: 'nityakarma_task_2',
        title: 'Mantra Chanting',
        description: 'Chant a chosen mantra (e.g., Gayatri Mantra, Om Namah Shivaya) 11, 21, or 108 times with devotion.',
        category: 'NityaKarma',
      },
      {
        id: 'nityakarma_task_3',
        title: 'Surya Namaskar (5 rounds)',
        description: 'Perform 5 rounds of Sun Salutations to invigorate the body and express gratitude to the sun.',
        category: 'NityaKarma',
      },
      {
        id: 'nityakarma_task_4',
        title: 'Mindful Eating (One Meal)',
        description: 'Eat at least one meal mindfully, paying full attention to the taste, texture, and your body\'s response, without distractions.',
        category: 'NityaKarma',
      },
      {
        id: 'nityakarma_task_5',
        title: 'Gratitude Journaling',
        description: 'Write down three things you are grateful for today and reflect on why.',
        category: 'NityaKarma',
      },
    ],
  },
];
