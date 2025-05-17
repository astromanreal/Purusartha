"use client";

import Link from "next/link";
import { SidebarTrigger, useSidebar } from "@/components/ui/sidebar";
import { Button } from "@/components/ui/button";
import { APP_NAME } from "@/lib/constants";
import { Logo } from "@/components/icons/logo";
import { ThemeToggle } from "./theme-toggle";
import { MoreNavMenu } from "./more-nav-menu";
import { LayoutGrid, Settings, Mail, User } from "lucide-react";

export function SiteHeader() {
  const { isMobile } = useSidebar(); 

  return (
    <header className="sticky top-0 z-20 flex h-14 items-center gap-4 border-b bg-background/80 px-4 backdrop-blur-sm sm:px-6 md:px-8">
      <div className="flex items-center gap-2">
        {isMobile && <SidebarTrigger />} 
        <Link href="/" className="flex items-center gap-2" aria-label={`${APP_NAME} Home`}>
          <Logo className="w-7 h-7 text-primary" />
          <span className="text-xl font-semibold text-foreground hidden sm:inline-block">{APP_NAME}</span>
        </Link>
      </div>

      <div className="ml-auto flex items-center gap-2">
        <Button variant="ghost" size="icon" asChild className="hidden md:inline-flex">
          <Link href="/explore" aria-label="Explore features">
            <LayoutGrid className="h-5 w-5" />
          </Link>
        </Button>
        <Button variant="ghost" size="icon" asChild className="hidden md:inline-flex">
          <Link href="/contact" aria-label="Contact Us">
            <Mail className="h-5 w-5" />
          </Link>
        </Button>
        <Button variant="ghost" size="icon" asChild className="hidden md:inline-flex">
          <Link href="/settings" aria-label="Settings">
            <Settings className="h-5 w-5" />
          </Link>
        </Button>
         <Button variant="ghost" size="icon" asChild className="hidden md:inline-flex">
          <Link href="/profile" aria-label="User Profile">
            <User className="h-5 w-5" />
          </Link>
        </Button>
        <ThemeToggle />
        <MoreNavMenu />
      </div>
    </header>
  );
}
