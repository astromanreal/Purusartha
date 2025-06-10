
import type { VastuShastraPageContent } from '@/types';
import { Building, Zap, Compass, BedDouble, Briefcase, AlertTriangle, Lightbulb, Home, BookOpen, Layers, Mountain, Waves, Flame, Wind, Sun, Banknote, Sparkles, Sunrise, Archive, Sunset, ArrowUpCircle, ArrowDownCircle, DoorOpen, CookingPot, BedSingle, Sofa, Shower, BookUser, IterationCw, UserCog, Users, LineChart, Coffee, Presentation, ScreenShare, WashingMachine, Bed, Construction, PictureInPicture, Building2, Flower, Leaf, Lamp, SearchX as SearchXIcon, Sparkle } from 'lucide-react'; // Added Sparkle

export const vastuShastraPageData: VastuShastraPageContent = {
  pageTitle: "Vastu Shastra Basics",
  pageDescription: "Unlock the secrets of Vastu Shastra, the ancient Indian science of architecture and spatial harmony. Learn how to create balanced and positive living and working spaces.",
  heroIconName: "Home", 
  sections: {
    introduction: {
      title: "Introduction to Vastu Shastra",
      iconName: "BookOpen",
      content: "Vastu Shastra, originating from ancient Vedic scriptures like the Sthapatya Veda, is the traditional Indian system of architecture. It emphasizes designing buildings in harmony with natural laws and cosmic energies to promote well-being, prosperity, and spiritual growth for the inhabitants. Its principles are based on the interplay of directions, the five elements, and subtle energy fields."
    },
    panchaBhootas: {
      title: "The Five Elements (Pancha Bhoota)",
      iconName: "Layers",
      description: "Vastu integrates the five fundamental elements of nature. Balancing these elements in their respective zones is crucial for a harmonious environment.",
      content: [
        { name: "Earth", sanskritName: "पृथ्वी (Prithvi)", description: "Represents stability, patience, and strength. Governs the southwest direction. Imbalance can lead to lethargy or instability.", vastuZones: "Southwest", iconName: "Mountain" },
        { name: "Water", sanskritName: "जल (Jal)", description: "Represents flow, clarity, and health. Governs the northeast direction. Proper placement ensures peace and prosperity.", vastuZones: "Northeast", iconName: "Waves" },
        { name: "Fire", sanskritName: "अग्नि (Agni)", description: "Represents energy, passion, and transformation. Governs the southeast direction. Crucial for kitchen placement and vitality.", vastuZones: "Southeast", iconName: "Flame" },
        { name: "Air", sanskritName: "वायु (Vayu)", description: "Represents movement, communication, and relationships. Governs the northwest direction. Ensures good social connections and freshness.", vastuZones: "Northwest", iconName: "Wind" },
        { name: "Space", sanskritName: "आकाश (Akasha)", description: "Represents expansion, sound, and opportunities. Governs the central area (Brahmasthan). An open and uncluttered center promotes overall well-being.", vastuZones: "Center (Brahmasthan)", iconName: "Sun" }
      ]
    },
    directionalScience: {
      title: "Directional Science & Deities",
      iconName: "Compass",
      description: "Each direction is ruled by a specific deity and planet, influencing the energies of that zone. Understanding these helps in optimal room placement.",
      content: [
        { name: "North (Uttara)", rulingDeity: "Kubera (Wealth)", rulingPlanet: "Mercury (Budha)", bestSuitedFor: ["Entrance", "Living Room", "Office", "Cash Locker"], energyCharacteristics: "Prosperity, wealth, opportunities, intellect.", iconName: "Banknote", colorAssociation: "Green" },
        { name: "Northeast (Ishanya)", rulingDeity: "Ishana (Shiva/Consciousness)", rulingPlanet: "Jupiter (Guru)", bestSuitedFor: ["Pooja Room", "Meditation", "Study", "Water Source"], energyCharacteristics: "Spirituality, purity, wisdom, divine energy.", iconName: "Sparkles", colorAssociation: "Light Blue/Yellow" },
        { name: "East (Purva)", rulingDeity: "Indra (King of Gods/New Beginnings)", rulingPlanet: "Sun (Surya)", bestSuitedFor: ["Main Entrance", "Living Room", "Study", "Bathroom (without toilet)"], energyCharacteristics: "Health, vitality, new beginnings, intellect, leadership.", iconName: "Sunrise", colorAssociation: "Orange/White" },
        { name: "Southeast (Agneya)", rulingDeity: "Agni (Fire God)", rulingPlanet: "Venus (Shukra)", bestSuitedFor: ["Kitchen", "Electrical Appliances", "Generator"], energyCharacteristics: "Heat, energy, health, passion, transformation.", iconName: "Flame", colorAssociation: "Orange/Pink" },
        { name: "South (Dakshina)", rulingDeity: "Yama (God of Death/Dharma)", rulingPlanet: "Mars (Mangala)", bestSuitedFor: ["Master Bedroom (for head of family)", "Storeroom (heavy items)"], energyCharacteristics: "Strength, discipline, legal matters, stability.", iconName: "Shield", colorAssociation: "Red/Brown" },
        { name: "Southwest (Nairitya)", rulingDeity: "Nirriti (Goddess of Dissolution/Protection)", rulingPlanet: "Rahu", bestSuitedFor: ["Master Bedroom", "Wardrobes", "Heavy Storage"], energyCharacteristics: "Stability, strength, ancestral blessings, protection from negativity.", iconName: "Archive", colorAssociation: "Brown/Earthy Tones" },
        { name: "West (Paschima)", rulingDeity: "Varuna (God of Waters/Cosmic Order)", rulingPlanet: "Saturn (Shani)", bestSuitedFor: ["Dining Room", "Children's Bedroom", "Overhead Water Tank", "Toilet (not ideal, but better than other zones)"], energyCharacteristics: "Gains, stability, discipline, order.", iconName: "Sunset", colorAssociation: "Blue/Grey" },
        { name: "Northwest (Vayavya)", rulingDeity: "Vayu (Wind God)", rulingPlanet: "Moon (Chandra)", bestSuitedFor: ["Guest Room", "Girls' Bedroom", "Garage", "Finished Goods Storage"], energyCharacteristics: "Movement, change, communication, relationships, travel.", iconName: "Wind", colorAssociation: "White/Light Grey" },
        { name: "Zenith (Urdhva)", rulingDeity: "Brahma", bestSuitedFor: ["Open to Sky (OTS)", "Light structures"], energyCharacteristics: "Connection to cosmic energy, expansion.", iconName: "ArrowUpCircle", colorAssociation: "Sky Blue/White" },
        { name: "Nadir (Adho)", rulingDeity: "Ananta/Shesha Naga", bestSuitedFor: ["Foundation", "Underground water tank (carefully placed)"], energyCharacteristics: "Grounding, stability, foundation.", iconName: "ArrowDownCircle", colorAssociation: "Dark Blue/Black" }
      ]
    },
    roomPlacementGuidelines: {
      title: "Room Placement Guidelines",
      iconName: "LayoutGrid",
      description: "Optimal placement of rooms according to Vastu principles enhances positive energy flow.",
      content: [
        { roomName: "Main Entrance", idealDirections: ["North", "Northeast", "East"], keyConsiderations: ["Should be well-lit, largest door, and welcoming.", "Avoid obstructions directly in front.", "Door should open inwards clockwise."], iconName: "DoorOpen" },
        { roomName: "Pooja Room / Meditation Space", idealDirections: ["Northeast", "East", "North"], keyConsiderations: ["Keep clean and sacred.", "Deities should face West or East.", "Avoid under stairs or near toilets."], iconName: "Sparkles" },
        { roomName: "Kitchen", idealDirections: ["Southeast", "Northwest (alternative)"], keyConsiderations: ["Stove should be in SE corner of kitchen, person cooking face East.", "Avoid directly under a toilet or bedroom."], iconName: "CookingPot" },
        { roomName: "Master Bedroom", idealDirections: ["Southwest"], keyConsiderations: ["Head should be towards South or East while sleeping.", "Avoid beams over the bed."], iconName: "BedDouble" },
        { roomName: "Children's Bedroom", idealDirections: ["West", "Northwest", "East"], keyConsiderations: ["Study table should allow facing East or North.", "Avoid mirrors opposite the bed."], iconName: "BedSingle" },
        { roomName: "Living Room / Drawing Room", idealDirections: ["North", "East", "Northeast"], keyConsiderations: ["Seating arrangement should allow hosts to face East or North.", "Heavy furniture in SW or S."], iconName: "Sofa" },
        { roomName: "Toilets / Bathrooms", idealDirections: ["Northwest", "West (avoid NE, SW, Center)"], keyConsiderations: ["Toilet seat ideally North-South axis.", "Ensure good ventilation.", "Keep door closed."], iconName: "Shower" },
        { roomName: "Study Room", idealDirections: ["Northeast", "East", "North"], keyConsiderations: ["Student should face East or North while studying.", "Bookshelves on South or West walls."], iconName: "BookUser" },
        { roomName: "Staircase", idealDirections: ["South", "West", "Southwest (avoid center)"], keyConsiderations: ["Should be clockwise when ascending.", "Avoid directly opposite main door."], iconName: "IterationCw" }
      ]
    },
    vastuForWorkspaces: {
      title: "Vastu for Workspaces",
      iconName: "Briefcase",
      description: "Applying Vastu principles in offices and workspaces can enhance productivity, focus, and overall business success.",
      content: [
        { tip: "Owner/CEO Cabin", explanation: "Ideally in Southwest, owner should face North or East.", category: "Workspace", iconName: "UserCog" },
        { tip: "Staff Seating", explanation: "Staff should ideally face North or East for better concentration and output.", category: "Workspace", iconName: "Users" },
        { tip: "Marketing/Sales Team", explanation: "Northwest is good for teams requiring movement and interaction.", category: "Workspace", iconName: "LineChart" },
        { tip: "Accounts Department", explanation: "Southeast or North are suitable for financial dealings.", category: "Workspace", iconName: "Banknote" },
        { tip: "Reception Area", explanation: "Northeast or East for a welcoming and positive first impression.", category: "Workspace", iconName: "Building" },
        { tip: "Pantry/Canteen", explanation: "Southeast or Northwest, ensuring fire elements are in SE.", category: "Workspace", iconName: "Coffee" },
        { tip: "Conference Room", explanation: "Northwest or West for effective communication.", category: "Workspace", iconName: "Presentation" },
        { tip: "Desk Placement", explanation: "Avoid sitting with your back to the door. Solid wall behind is good.", category: "Workspace", iconName: "ScreenShare" }
      ]
    },
    commonVastuDoshas: {
      title: "Common Vastu Doshas & Remedies",
      iconName: "AlertTriangle",
      description: "Identifying and rectifying common Vastu defects (Doshas) can significantly improve the energy of a space.",
      content: [
        { doshaName: "Toilet in Northeast", description: "NE is sacred; toilet here pollutes divine energies, affecting health and prosperity.", remedies: ["Place Vastu pyramids.", "Keep sea salt in a bowl.", "Use light blue colors.", "Ensure it's always clean and door closed."], iconName: "WashingMachine" },
        { doshaName: "Kitchen in Northeast", description: "Fire element in water zone (NE) creates conflict, affecting peace and health.", remedies: ["Paint kitchen in light yellow/cream.", "Place a Vastu energy partition.", "Keep a bowl of sea salt."], iconName: "Flame" },
        { doshaName: "Main Door in South/Southwest", description: "Can bring struggles, financial issues, or health problems if not aligned well.", remedies: ["Place Hanumanji's image/sticker facing outwards.", "Use Vastu strips (metal/wood).", "Install a Vastu Dosh Nivaran Yantra."], iconName: "DoorClosed" },
        { doshaName: "Bedroom in Southeast", description: "Fire element zone, can cause aggression, restlessness, and disturbed sleep.", remedies: ["Use calming colors like light green or blue.", "Place a water element like a small fountain (if appropriate).", "Use Vastu crystals."], iconName: "Bed" },
        { doshaName: "Beam Over Bed", description: "Can cause stress, headaches, or interrupted sleep.", remedies: ["Conceal with a false ceiling.", "Shift the bed position.", "Hang two bamboo flutes on the beam."], iconName: "Construction" },
        { doshaName: "Mirror Opposite Bed", description: "Reflects body while sleeping, can cause restlessness or health issues.", remedies: ["Cover the mirror at night.", "Relocate the mirror."], iconName: "PictureInPicture" }
      ]
    },
    modernVastuTips: {
      title: "Modern Vastu Tips",
      iconName: "Lightbulb",
      description: "Applying Vastu in contemporary settings like apartments and multi-story buildings.",
      content: [
        { tip: "Apartment Main Door", explanation: "Focus on the internal Vastu of your apartment. Ensure the main door is clean, well-lit, and opens fully.", category: "Apartment", iconName: "Building2" },
        { tip: "Balcony Utilization", explanation: "Use North and East balconies for plants and relaxation. Avoid heavy storage.", category: "Apartment", iconName: "Flower" },
        { tip: "Multi-Story Buildings", explanation: "Higher floors generally receive more light and air (Vayu). Southwest part of the building should ideally be taller/heavier.", category: "Multi-Story", iconName: "Building" },
        { tip: "Clutter-Free Spaces", explanation: "Regularly declutter your home and workspace to allow free flow of positive energy (Prana).", category: "General Modern", iconName: "Sparkle" },
        { tip: "Use of Colors", explanation: "Use Vastu-compliant colors for different rooms to enhance specific energies (e.g., blue/green for study, light colors for bedrooms).", category: "General Modern", iconName: "Palette" },
        { tip: "Indoor Plants", explanation: "Place auspicious plants like Tulsi, Bamboo, or Money Plant in appropriate directions (North, East, NE) to purify air and attract positivity.", category: "General Modern", iconName: "Leaf" },
        { tip: "Lighting", explanation: "Ensure adequate natural light. Use bright lights in active zones and softer, calming lights in bedrooms.", category: "General Modern", iconName: "Lamp" }
      ]
    }
  },
  cta: {
    text: "Consult a Vastu Expert",
    href: "/contact",
    note: "For personalized Vastu analysis and complex situations, consulting a qualified Vastu expert is recommended."
  }
};


    