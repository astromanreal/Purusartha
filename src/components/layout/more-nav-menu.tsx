
"use client";

import React from "react";
import Link from "next/link";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { NAV_ITEMS } from "@/lib/constants";
import { EllipsisVertical, ExternalLink, LayoutDashboard } from "lucide-react"; 
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

// Filter out items that are already directly in the header for md+ screens.
// Added /kundli-compass-features as it now has a dedicated icon.
const mainHeaderIconsHrefs = ['/explore', '/contact', '/settings', '/profile', '/kundli-compass-features'];
const dropdownMenuItems = NAV_ITEMS.filter(item => !mainHeaderIconsHrefs.includes(item.href));


export function MoreNavMenu() {
  const pathname = usePathname();
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon" aria-label="More navigation options"> 
          <EllipsisVertical className="h-5 w-5" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-56">
        
         <DropdownMenuItem asChild className={cn(
            (pathname === '/') && "bg-accent text-accent-foreground focus:bg-accent focus:text-accent-foreground",
             // Show Dashboard in dropdown if not represented by another main icon (it is via Logo).
             // This logic mainly affects scenarios where the main icon links might change.
            !mainHeaderIconsHrefs.includes('/') && "flex md:hidden" 
         )}>
              <Link href="/" className="flex items-center gap-2">
                <LayoutDashboard className="h-4 w-4" />
                <span>Dashboard</span>
              </Link>
         </DropdownMenuItem>
         {/* Separator if Dashboard was shown and there are more items */}
         {dropdownMenuItems.length > 0 && !mainHeaderIconsHrefs.includes('/') && <DropdownMenuSeparator className="md:hidden"/>}


        {dropdownMenuItems.map((item, index) => (
          // Only render items that are not the dashboard, as dashboard is handled above or via logo.
          item.href !== '/' && (
            <React.Fragment key={item.href}>
              <DropdownMenuItem asChild className={cn(
                (pathname === item.href || (item.href !== "/" && pathname.startsWith(item.href))) && "bg-accent text-accent-foreground focus:bg-accent focus:text-accent-foreground"
              )}>
                <Link href={item.href} className="flex items-center gap-2">
                  <item.icon className="h-4 w-4" />
                  <span>{item.title}</span>
                  {item.external && <ExternalLink className="ml-auto h-3 w-3" />}
                </Link>
              </DropdownMenuItem>
              {/* Separator logic: Example, add separator after "Sacred Texts" */}
              {(item.title === "Sacred Texts" && index < dropdownMenuItems.filter(i => i.href !== '/').length -1) && <DropdownMenuSeparator/>}
            </React.Fragment>
          )
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
