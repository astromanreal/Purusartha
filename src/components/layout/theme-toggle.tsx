// src/components/layout/theme-toggle.tsx
"use client";

import * as React from "react";
import { Moon, Sun, Laptop } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTheme } from "@/context/theme-provider";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export function ThemeToggle() {
  const { mode, setMode, appliedMode } = useTheme();

  // Determine which icon to show based on the *applied* mode
  const CurrentIcon = appliedMode === 'dark' ? Moon : Sun;
  const nextMode = appliedMode === 'dark' ? 'light' : 'dark';


  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon" aria-label={`Switch to ${nextMode} mode`}>
           {mode === 'system' && appliedMode === 'dark' && <Moon className="h-5 w-5" />}
           {mode === 'system' && appliedMode === 'light' && <Sun className="h-5 w-5" />}
           {mode === 'dark' && <Moon className="h-5 w-5" />}
           {mode === 'light' && <Sun className="h-5 w-5" />}
           <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => setMode("light")}>
          <Sun className="mr-2 h-4 w-4" />
          Light
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setMode("dark")}>
          <Moon className="mr-2 h-4 w-4" />
          Dark
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setMode("system")}>
          <Laptop className="mr-2 h-4 w-4" />
          System
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
