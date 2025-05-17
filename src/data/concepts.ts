// src/data/concepts.ts

export interface SanatanConcept {
  name: string;
  description?: string; // e.g., (meaning of life) for Puruṣārtha, Āśrama, or specific notes for concepts
  subPoints?: string[]; // For nested lists like under "Mokṣa-related topics"
}

export interface SanatanConceptCategory {
  categoryTitle: string;
  categoryDescription?: string; // e.g., (meaning of life)
  concepts: SanatanConcept[];
}

export const sanatanDharmaConceptsData: SanatanConceptCategory[] = [
  {
    categoryTitle: "Worldview",
    concepts: [
      { name: "Cosmology" },
      { name: "Mythology" },
    ],
  },
  {
    categoryTitle: "Ontology",
    concepts: [
      { name: "Tattvas" },
      { name: "Subtle elements" },
      { name: "Panchikarana" },
      { name: "Gross elements" },
      { name: "Guṇas" },
      { name: "Purusha" },
      { name: "Prakṛti" },
    ],
  },
  {
    categoryTitle: "Supreme reality",
    concepts: [
      { name: "Brahman Nirguna" },
      { name: "Saguna" },
      { name: "Om" },
      { name: "Saccidānanda" },
    ],
  },
  {
    categoryTitle: "God",
    concepts: [
      { name: "Ishvara" },
      { name: "Devas / Devi" },
      { name: "Devatas" },
      { name: "God in Hinduism" },
      { name: "God and gender" },
    ],
  },
  {
    categoryTitle: "Puruṣārtha",
    categoryDescription: "meaning of life",
    concepts: [
      { name: "Dharma" },
      { name: "Artha" },
      { name: "Kama" },
      { name: "Moksha" },
    ],
  },
  {
    categoryTitle: "Āśrama",
    categoryDescription: "stages of life",
    concepts: [
      { name: "Brahmacharya" },
      { name: "Gṛhastha" },
      { name: "Vānaprastha" },
      { name: "Sannyasa" },
    ],
  },
  {
    categoryTitle: "Three paths to liberation",
    concepts: [
      { name: "Bhakti yoga" },
      { name: "Jnana yoga" },
      { name: "Karma yoga" },
    ],
  },
  {
    categoryTitle: "Liberation",
    concepts: [
      {
        name: "Mokṣa-related topics:",
        subPoints: ["Paramātman", "Maya", "Karma", "Saṃsāra"],
      },
    ],
  },
];
