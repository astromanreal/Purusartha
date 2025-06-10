
// src/app/settings/page.tsx
"use client";

import type { Metadata } from 'next';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { SettingsIcon, Palette, Sun, Moon, Laptop, Check, Bell, UserCog } from "lucide-react";
import { useTheme } from "@/context/theme-provider";
import { accentThemes } from "@/data/themes";
import { cn } from "@/lib/utils";
import { APP_NAME } from "@/lib/constants";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000';

export const metadataObject: Metadata = {
  title: `Settings - Customize Your Experience | ${APP_NAME}`,
  description: `Customize your ${APP_NAME} experience. Adjust appearance settings, including color themes (Sanatan Gold, Divine Sapphire, etc.) and light/dark mode preferences.`,
  keywords: ['Settings', 'Appearance Customization', 'Color Themes', 'Light Mode', 'Dark Mode', 'User Preferences', APP_NAME],
  alternates: {
    canonical: `${BASE_URL}/settings`,
  },
  openGraph: {
    title: `Settings - Customize Your Experience | ${APP_NAME}`,
    description: 'Adjust appearance settings, color themes, and light/dark mode preferences.',
    url: `${BASE_URL}/settings`,
  },
};

export default function SettingsPage() {
  const { accentThemeId, setAccentThemeId, mode, setMode } = useTheme();

  return (
    <div className="container mx-auto py-8">
      <Card className="max-w-3xl mx-auto shadow-xl border-primary/20">
        <CardHeader className="text-center">
          <div className="inline-flex items-center justify-center p-3 bg-primary/10 rounded-full mb-4 mx-auto">
            <SettingsIcon className="h-16 w-16 text-primary" />
          </div>
          <CardTitle className="text-3xl font-bold text-primary">Settings</CardTitle>
          <CardDescription className="text-lg text-muted-foreground mt-2">
            Customize your application experience.
          </CardDescription>
        </CardHeader>
        <CardContent className="mt-6 space-y-10">
          <section className="p-6 border border-primary/20 rounded-lg bg-card/50 shadow-md">
            <h2 className="text-2xl font-semibold text-accent mb-6 flex items-center">
              <Palette className="h-7 w-7 mr-3" />
              Appearance
            </h2>

            <div className="mb-8">
              <h3 className="text-xl font-medium text-foreground mb-4">Color Theme</h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {accentThemes.map((theme) => (
                  <Button
                    key={theme.id}
                    variant="outline"
                    className={cn(
                      "h-auto py-4 px-2 flex flex-col items-center justify-center space-y-2 transition-all duration-200 relative",
                      accentThemeId === theme.id && "ring-2 ring-primary border-primary shadow-lg",
                      "hover:shadow-md"
                    )}
                    onClick={() => setAccentThemeId(theme.id)}
                    style={{
                      '--theme-primary-preview': `hsl(${theme.light.primary})`,
                      '--theme-accent-preview': `hsl(${theme.light.accent})`,
                    } as React.CSSProperties}
                  >
                    <div className="flex items-center justify-center w-full mb-2">
                      <div 
                        className="w-8 h-8 rounded-full mr-2 border border-border"
                        style={{ backgroundColor: 'var(--theme-primary-preview)' }}
                        aria-label={`${theme.name} primary color preview`}
                      />
                      <div 
                        className="w-6 h-6 rounded-full border border-border"
                        style={{ backgroundColor: 'var(--theme-accent-preview)' }}
                        aria-label={`${theme.name} accent color preview`}
                       />
                    </div>
                    <span className="text-sm font-medium text-center">{theme.name}</span>
                    {accentThemeId === theme.id && <Check className="h-5 w-5 text-primary absolute top-2 right-2" />}
                  </Button>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-xl font-medium text-foreground mb-4">Mode</h3>
              <div className="flex flex-col sm:flex-row gap-3">
                {(['light', 'dark', 'system'] as const).map((m) => {
                  const Icon = m === 'light' ? Sun : m === 'dark' ? Moon : Laptop;
                  return (
                    <Button
                      key={m}
                      variant={mode === m ? "default" : "outline"}
                      onClick={() => setMode(m)}
                      className="flex-1 justify-center py-3 text-base capitalize"
                      aria-pressed={mode === m}
                    >
                      <Icon className="mr-2 h-5 w-5" />
                      {m}
                    </Button>
                  );
                })}
              </div>
            </div>
          </section>

          <section className="p-6 border border-dashed border-primary/30 rounded-lg bg-card/30">
            <h2 className="text-2xl font-semibold text-primary mb-3 flex items-center">
              <Bell className="h-7 w-7 mr-3 text-accent" />
              Notifications
            </h2>
            <p className="text-muted-foreground">
              Manage your notification preferences. 
              <TooltipProvider>
                  <Tooltip>
                      <TooltipTrigger asChild>
                          <Button variant="link" className="p-1 h-auto text-xs">(Coming Soon)</Button>
                      </TooltipTrigger>
                      <TooltipContent><p>Feature under development</p></TooltipContent>
                  </Tooltip>
              </TooltipProvider>
            </p>
            <div data-ai-hint="notification bell icon" className="mt-4 aspect-video bg-muted rounded-md flex items-center justify-center">
              <p className="text-muted-foreground">Placeholder for Notification Settings</p>
            </div>
          </section>

          <section className="p-6 border border-dashed border-primary/30 rounded-lg bg-card/30">
            <h2 className="text-2xl font-semibold text-primary mb-3 flex items-center">
              <UserCog className="h-7 w-7 mr-3 text-accent" />
              Account & Data
            </h2>
            <p className="text-muted-foreground">
              Manage account details and data preferences. 
              <TooltipProvider>
                  <Tooltip>
                      <TooltipTrigger asChild>
                          <Button variant="link" className="p-1 h-auto text-xs">(Coming Soon)</Button>
                      </TooltipTrigger>
                      <TooltipContent><p>Feature under development</p></TooltipContent>
                  </Tooltip>
              </TooltipProvider>
            </p>
            <div data-ai-hint="user data privacy lock" className="mt-4 aspect-video bg-muted rounded-md flex items-center justify-center">
              <p className="text-muted-foreground">Placeholder for Account Settings</p>
            </div>
          </section>
        </CardContent>
      </Card>
    </div>
  );
}


    