"use client";

import { HomeIcon } from "lucide-react";
import Link from "next/link";
import React from "react";

import { buttonVariants } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";
import { Dock, DockIcon } from "@/components/magicui/dock";

// Import your custom Icons object here (GitHub, LinkedIn, etc.)
import { Icons } from "@/components/icons"; 

const DATA = {
  navbar: [
    { href: "#home", icon: HomeIcon, label: "Home" }, // ✅ points to top
  ],
  contact: {
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/yourusername",
        icon: Icons.github,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://linkedin.com/in/yourusername",
        icon: Icons.linkedin,
      },
      X: {
        name: "X",
        url: "https://x.com/yourusername",
        icon: Icons.x,
      },
      email: {
        name: "Send Email",
        url: "mailto:your@email.com",
        icon: Icons.email,
      },
    },
  },
};

export function DockDemo() {
  return (
    <TooltipProvider>
      <Dock direction="middle">
        {DATA.navbar.map((item) => (
          <DockIcon key={item.label}>
            <Tooltip>
              <TooltipTrigger asChild>
                <Link
                  href={item.href}
                  aria-label={item.label}
                  className={cn(
                    buttonVariants({ variant: "ghost", size: "icon" }),
                    "size-12 rounded-full",
                  )}
                  scroll={true} // ✅ ensures scroll to top
                >
                  <item.icon className="size-4" />
                </Link>
              </TooltipTrigger>
              <TooltipContent>
                <p>{item.label}</p>
              </TooltipContent>
            </Tooltip>
          </DockIcon>
        ))}

        <Separator orientation="vertical" className="h-full" />

        {Object.entries(DATA.contact.social).map(([name, social]) => (
          <DockIcon key={name}>
            <Tooltip>
              <TooltipTrigger asChild>
                <Link
                  href={social.url}
                  aria-label={social.name}
                  className={cn(
                    buttonVariants({ variant: "ghost", size: "icon" }),
                    "size-12 rounded-full"
                  )}
                  target="_blank" // ✅ opens socials in new tab
                >
                  <social.icon className="size-4" />
                </Link>
              </TooltipTrigger>
              <TooltipContent>
                <p>{name}</p>
              </TooltipContent>
            </Tooltip>
          </DockIcon>
        ))}
      </Dock>
    </TooltipProvider>
  );
}
