// src/context/theme-provider.tsx
"use client";

import type { ReactNode } from 'react';
import { createContext, useContext, useEffect, useState, useCallback } from 'react';
import { accentThemes, defaultAccentThemeId, type AccentTheme, type AccentColors } from '@/data/themes';

type Mode = 'light' | 'dark' | 'system';

interface ThemeProviderState {
  accentThemeId: string;
  setAccentThemeId: (id: string) => void;
  mode: Mode;
  setMode: (mode: Mode) => void;
  appliedMode: 'light' | 'dark'; // Actual mode being applied (system resolved)
  currentAccentThemeColors: AccentColors | undefined;
}

const initialState: ThemeProviderState = {
  accentThemeId: defaultAccentThemeId,
  setAccentThemeId: () => null,
  mode: 'system',
  setMode: () => null,
  appliedMode: 'dark', // Default to dark if system preference is unknown initially
  currentAccentThemeColors: accentThemes.find(t => t.id === defaultAccentThemeId)?.dark,
};

const ThemeProviderContext = createContext<ThemeProviderState>(initialState);

export function ThemeProvider({
  children,
  defaultAccentTheme = defaultAccentThemeId,
  defaultMode = 'dark', // Set initial default mode to dark to match layout.tsx
  storageKeyAccent = 'vite-ui-accent-theme',
  storageKeyMode = 'vite-ui-mode',
}: {
  children: ReactNode;
  defaultAccentTheme?: string;
  defaultMode?: Mode;
  storageKeyAccent?: string;
  storageKeyMode?: string;
}) {
  const [accentThemeId, setAccentThemeIdState] = useState<string>(() =>
    typeof window !== 'undefined' ? localStorage.getItem(storageKeyAccent) || defaultAccentTheme : defaultAccentTheme
  );
  const [mode, setModeState] = useState<Mode>(() =>
    typeof window !== 'undefined' ? (localStorage.getItem(storageKeyMode) as Mode) || defaultMode : defaultMode
  );
  const [appliedMode, setAppliedMode] = useState<'light' | 'dark'>(defaultMode === 'light' ? 'light' : 'dark');
  const [currentAccentThemeColors, setCurrentAccentThemeColors] = useState<AccentColors | undefined>(
    accentThemes.find(t => t.id === accentThemeId)?.[appliedMode]
  );


  const applyTheme = useCallback((newAccentThemeId: string, newMode: Mode) => {
    const root = window.document.documentElement;
    const theme = accentThemes.find((t) => t.id === newAccentThemeId) || accentThemes.find(t => t.id === defaultAccentThemeId);

    if (!theme) return;

    let resolvedMode: 'light' | 'dark' = newMode as 'light' | 'dark';
    if (newMode === 'system') {
      resolvedMode = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    }
    
    setAppliedMode(resolvedMode);
    root.classList.remove('light', 'dark');
    root.classList.add(resolvedMode);

    const colorsToApply = theme[resolvedMode];
    setCurrentAccentThemeColors(colorsToApply);

    Object.entries(colorsToApply).forEach(([key, value]) => {
      // Convert camelCase key to kebab-case for CSS variable name
      const cssVarName = `--${key.replace(/([A-Z])/g, '-$1').toLowerCase()}`;
      root.style.setProperty(cssVarName, value);
    });

  }, []);

  useEffect(() => {
    applyTheme(accentThemeId, mode);
  }, [accentThemeId, mode, applyTheme]);

  // Listener for system theme changes
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handleChange = () => {
      if (mode === 'system') {
        applyTheme(accentThemeId, 'system');
      }
    };
    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, [accentThemeId, mode, applyTheme]);


  const setAccentThemeId = (id: string) => {
    localStorage.setItem(storageKeyAccent, id);
    setAccentThemeIdState(id);
  };

  const setMode = (newMode: Mode) => {
    localStorage.setItem(storageKeyMode, newMode);
    setModeState(newMode);
  };

  const value = {
    accentThemeId,
    setAccentThemeId,
    mode,
    setMode,
    appliedMode,
    currentAccentThemeColors,
  };

  return (
    <ThemeProviderContext.Provider value={value}>
      {children}
    </ThemeProviderContext.Provider>
  );
}

export const useTheme = () => {
  const context = useContext(ThemeProviderContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};
