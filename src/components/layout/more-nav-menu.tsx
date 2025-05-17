"use client";

import React from "react"; // Added missing React import
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
const mainHeaderIconsHrefs = ['/explore', '/contact', '/settings', '/profile'];
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
             // Show Dashboard in dropdown on all screen sizes if not in main nav icons.
             // For mobile, it's already in NavSheet. This ensures consistency for desktop-like views on smaller screens.
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
            {/* Separator logic: Add separator after specific items if they are not the last one */}
            {/* Example: Add separator after "Sacred Texts" */}
            {(item.title === "Sacred Texts" && index < dropdownMenuItems.length -1) && <DropdownMenuSeparator/>}

          </React.Fragment>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
