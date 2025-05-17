// src/data/themes.ts

export interface AccentColors {
  primary: string;
  primaryForeground: string;
  accent: string;
  accentForeground: string;
  ring: string;
  sidebarPrimary: string;
  sidebarPrimaryForeground: string;
  sidebarAccent: string; // Background for active/hover sidebar item
  sidebarAccentForeground: string; // Text color for active/hover sidebar item
  sidebarRing: string;
}

export interface AccentTheme {
  id: string;
  name: string;
  light: AccentColors;
  dark: AccentColors;
}

export const accentThemes: AccentTheme[] = [
  {
    id: "sanatan-gold",
    name: "Sanatan Gold",
    light: {
      primary: "51 90% 45%", // Gold
      primaryForeground: "0 0% 100%", // White
      accent: "51 90% 55%", // Lighter Gold
      accentForeground: "270 30% 10%", // Dark Purple/Black
      ring: "51 90% 45%", // Gold
      sidebarPrimary: "51 90% 45%",
      sidebarPrimaryForeground: "0 0% 100%",
      sidebarAccent: "45 40% 88%", // Light beige background for active
      sidebarAccentForeground: "51 90% 45%", // Gold text
      sidebarRing: "51 90% 45%",
    },
    dark: {
      primary: "51 100% 50%", // Brighter Gold
      primaryForeground: "270 30% 10%", // Dark Purple/Black
      accent: "51 100% 60%", // Even Brighter Gold
      accentForeground: "270 30% 10%", // Dark Purple/Black
      ring: "51 100% 50%", // Brighter Gold
      sidebarPrimary: "51 100% 50%",
      sidebarPrimaryForeground: "270 30% 10%",
      sidebarAccent: "270 30% 20%", // Darker purple background for active
      sidebarAccentForeground: "51 100% 50%", // Brighter Gold text
      sidebarRing: "51 100% 50%",
    },
  },
  {
    id: "divine-sapphire",
    name: "Divine Sapphire",
    light: {
      primary: "217 91% 60%", // Sapphire Blue
      primaryForeground: "0 0% 100%", // White
      accent: "217 91% 70%", // Lighter Sapphire
      accentForeground: "217 91% 15%", // Darker Blue
      ring: "217 91% 60%",
      sidebarPrimary: "217 91% 60%",
      sidebarPrimaryForeground: "0 0% 100%",
      sidebarAccent: "217 20% 90%", // Very Light Blue background
      sidebarAccentForeground: "217 91% 60%", // Sapphire text
      sidebarRing: "217 91% 60%",
    },
    dark: {
      primary: "217 91% 65%", // Brighter Sapphire
      primaryForeground: "0 0% 100%", // White
      accent: "217 91% 75%", // Even Lighter Sapphire
      accentForeground: "217 91% 10%", // Very Dark Blue
      ring: "217 91% 65%",
      sidebarPrimary: "217 91% 65%",
      sidebarPrimaryForeground: "0 0% 100%",
      sidebarAccent: "217 30% 20%", // Dark Blue background
      sidebarAccentForeground: "217 91% 65%", // Sapphire text
      sidebarRing: "217 91% 65%",
    },
  },
  {
    id: "serene-emerald",
    name: "Serene Emerald",
    light: {
      primary: "145 63% 42%", // Emerald Green
      primaryForeground: "0 0% 100%", // White
      accent: "145 63% 52%", // Lighter Emerald
      accentForeground: "145 63% 10%", // Darker Green
      ring: "145 63% 42%",
      sidebarPrimary: "145 63% 42%",
      sidebarPrimaryForeground: "0 0% 100%",
      sidebarAccent: "145 20% 90%", // Very Light Green background
      sidebarAccentForeground: "145 63% 42%", // Emerald text
      sidebarRing: "145 63% 42%",
    },
    dark: {
      primary: "145 63% 49%", // Brighter Emerald
      primaryForeground: "0 0% 100%", // White
      accent: "145 63% 59%", // Even Lighter Emerald
      accentForeground: "145 63% 10%", // Very Dark Green
      ring: "145 63% 49%",
      sidebarPrimary: "145 63% 49%",
      sidebarPrimaryForeground: "0 0% 100%",
      sidebarAccent: "145 30% 18%", // Dark Green background
      sidebarAccentForeground: "145 63% 49%", // Emerald text
      sidebarRing: "145 63% 49%",
    },
  },
  {
    id: "sacred-lotus",
    name: "Sacred Lotus",
    light: {
      primary: "330 80% 65%", // Lotus Pink/Purple
      primaryForeground: "0 0% 100%", // White
      accent: "330 80% 75%", // Lighter Lotus
      accentForeground: "330 80% 20%", // Darker Pink/Purple
      ring: "330 80% 65%",
      sidebarPrimary: "330 80% 65%",
      sidebarPrimaryForeground: "0 0% 100%",
      sidebarAccent: "330 30% 92%", // Very Light Pink/Purple background
      sidebarAccentForeground: "330 80% 65%", // Lotus text
      sidebarRing: "330 80% 65%",
    },
    dark: {
      primary: "330 80% 70%", // Brighter Lotus
      primaryForeground: "0 0% 100%", // White
      accent: "330 80% 80%", // Even Lighter Lotus
      accentForeground: "330 80% 15%", // Very Dark Pink/Purple
      ring: "330 80% 70%",
      sidebarPrimary: "330 80% 70%",
      sidebarPrimaryForeground: "0 0% 100%",
      sidebarAccent: "330 40% 22%", // Dark Pink/Purple background
      sidebarAccentForeground: "330 80% 70%", // Lotus text
      sidebarRing: "330 80% 70%",
    },
  },
  {
    id: "solar-agni",
    name: "Solar Agni",
    light: {
      primary: "35 100% 50%", // Fiery Orange
      primaryForeground: "0 0% 0%",   // Black
      accent: "35 100% 60%", // Lighter Orange
      accentForeground: "35 100% 10%", // Dark Brown/Black
      ring: "35 100% 50%",
      sidebarPrimary: "35 100% 50%",
      sidebarPrimaryForeground: "0 0% 0%",
      sidebarAccent: "35 30% 90%", // Very Light Orange background
      sidebarAccentForeground: "35 100% 50%", // Orange text
      sidebarRing: "35 100% 50%",
    },
    dark: {
      primary: "35 100% 55%", // Brighter Orange
      primaryForeground: "0 0% 100%", // White
      accent: "35 100% 65%", // Even Lighter Orange
      accentForeground: "0 0% 0%",   // Black
      ring: "35 100% 55%",
      sidebarPrimary: "35 100% 55%",
      sidebarPrimaryForeground: "0 0% 100%",
      sidebarAccent: "35 40% 18%", // Dark Orange/Brown background
      sidebarAccentForeground: "35 100% 55%", // Orange text
      sidebarRing: "35 100% 55%",
    },
  },
];

export const defaultAccentThemeId = "sanatan-gold";
