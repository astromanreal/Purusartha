"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetFooter,
} from "@/components/ui/sheet"; // Import Sheet components directly
import { ScrollArea } from "@/components/ui/scroll-area";
import { Button } from "@/components/ui/button";
import { NAV_ITEMS, APP_NAME } from "@/lib/constants";
import { Logo } from "@/components/icons/logo";
import { cn } from "@/lib/utils";
import { useSidebar } from "@/components/ui/sidebar"; // For context
import { ExternalLink } from "lucide-react";

export function MobileNavSheet() {
  const { isMobile, openMobile, setOpenMobile } = useSidebar();
  const pathname = usePathname();

  const handleLinkClick = () => {
    if (isMobile && openMobile) {
      setOpenMobile(false);
    }
  };

  if (!isMobile) {
    return null; // Don't render anything on desktop
  }

  return (
    <Sheet open={openMobile} onOpenChange={setOpenMobile}>
      <SheetContent side="left" className="w-[var(--sidebar-width-mobile)] p-0 flex flex-col bg-sidebar text-sidebar-foreground"
        style={{ "--sidebar-width-mobile": "18rem" } as React.CSSProperties}
      >
        <SheetHeader className="p-2 flex items-center gap-2 h-14 border-b border-sidebar-border">
          <Logo className="w-7 h-7 text-primary" />
          <SheetTitle className="text-lg font-semibold tracking-tight text-sidebar-foreground">{APP_NAME}</SheetTitle>
        </SheetHeader>
        <ScrollArea className="flex-1">
          <nav className="p-2">
            <ul className="flex w-full min-w-0 flex-col gap-1">
              {NAV_ITEMS.map((item) => (
                <li key={item.href} className="group/menu-item relative">
                  <Button
                    asChild
                    variant="ghost"
                    className={cn(
                      "w-full justify-start h-10 text-sm",
                      (pathname === item.href || (item.href !== "/" && pathname.startsWith(item.href)))
                        ? "bg-sidebar-accent text-sidebar-accent-foreground"
                        : "hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"
                    )}
                    onClick={handleLinkClick}
                  >
                    <Link href={item.href}>
                      <item.icon className="h-5 w-5 mr-2" />
                      <span>{item.title}</span>
                      {item.external && <ExternalLink className="ml-auto h-4 w-4" />}
                    </Link>
                  </Button>
                </li>
              ))}
            </ul>
          </nav>
        </ScrollArea>
        <SheetFooter className="p-2 border-t border-sidebar-border">
          <p className="text-xs text-muted-foreground text-center">
            &copy; {new Date().getFullYear()} {APP_NAME}
          </p>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}
