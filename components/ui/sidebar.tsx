"use client";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  ArrowLeftStartOnRectangleIcon,
  BoltIcon,
  BookOpenIcon,
  FireIcon,
  HashtagIcon,
  UserCircleIcon,
} from "@heroicons/react/24/outline";
import { BookmarkIcon, ListBulletIcon } from "@radix-ui/react-icons";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

interface SidebarProps extends React.HTMLAttributes<HTMLElement> {}

interface NavItemProps {
  href?: string;
  icon: React.ElementType;
  text: string;
  variant?:
    | "default"
    | "destructive"
    | "outline"
    | "secondary"
    | "ghost"
    | "link";
  className?: string;
  type?: "button" | "submit" | "reset";
}

const NavItem = ({
  href,
  icon: Icon,
  text,
  variant = "ghost",
  className = "",
  type = "button",
  ...props
}: NavItemProps) => {
  const content = (
    <Button
      variant={variant}
      className={`w-full justify-start ${className}`}
      type={type}
      {...props}
    >
      <Icon className="mr-2 h-4 w-4" />
      {text}
    </Button>
  );

  return href ? <Link href={href}>{content}</Link> : content;
};

const Section = ({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) => (
  <div className="px-3 py-2">
    <h2 className="mb-2 px-4 text-lg font-semibold tracking-tight">{title}</h2>
    <div className="space-y-1">{children}</div>
  </div>
);

export function Sidebar({ className, ...props }: SidebarProps) {
  const pathname = usePathname();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const variant = (pn: string) => {
    return pathname === pn ? "secondary" : "ghost";
  };

  return (
    <div className={cn("pb-12", className)} {...props}>
      <div className="space-y-4 py-4">
        <Section title="Discover">
          <NavItem
            href="/app/all-story"
            icon={BookOpenIcon}
            text="All Stories"
            variant={variant("/app/all-story")}
          />
          <NavItem
            icon={FireIcon}
            text="Trending Story"
            variant={variant("/app/trending-story")}
          />
          <NavItem
            icon={FireIcon}
            text="Trending Characters"
            variant={variant("/app/trending-characters")}
          />
        </Section>

        <Section title="Library">
          <NavItem
            href="/app/my-story"
            icon={ListBulletIcon}
            text="My Stories"
            variant={variant("/app/my-story")}
          />
          <NavItem icon={BookmarkIcon} text="Saved Stories" />
          <NavItem
            href="/app/generate-character"
            icon={BoltIcon}
            text="Quick Generate Character"
            variant={variant("/app/generate-character")}
          />
        </Section>

        <Section title="Pinned Stories">
          <NavItem icon={HashtagIcon} text="Lover" />
          <NavItem icon={HashtagIcon} text="Sakura Love" />
        </Section>

        <Section title="Settings">
          <NavItem
            href="/app/profile"
            variant={variant("/app/profile")}
            icon={UserCircleIcon}
            text="Profile"
          />
          <form action="/auth/signout" method="post">
            <NavItem
              icon={ArrowLeftStartOnRectangleIcon}
              text="Signout"
              type="submit"
            />
          </form>
        </Section>
      </div>
    </div>
  );
}
