"use client"

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
import {
  BookmarkFilledIcon,
  BookmarkIcon,
  ListBulletIcon,
} from "@radix-ui/react-icons";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface SidebarProps extends React.HTMLAttributes<HTMLElement> {

}

export function Sidebar({ className, ...props }: SidebarProps) {

  const pathname = usePathname()
  
  return (
    <div className={cn("pb-12", className)}>
      <div className="space-y-4 py-4">
        <div className="px-3 py-2">
          <h2 className="mb-2 px-4 text-lg font-semibold tracking-tight">
            Discover
          </h2>
          <div className="space-y-1">
            <Link href="/app/all-story">
              <Button variant="secondary" className="w-full justify-start">
                <BookOpenIcon className="mr-2 h-4 w-4" />
                All Stories
              </Button>
            </Link>
            <Button variant="ghost" className="w-full justify-start">
              <FireIcon className="mr-2 h-4 w-4 text-yellow-500" />
              Trending Story
            </Button>
            <Button variant="ghost" className="w-full justify-start">
              <FireIcon className="mr-2 h-4 w-4 text-red-500" />
              Trending Characters
            </Button>
          </div>
        </div>
        <div className="px-3 py-2">
          <h2 className="mb-2 px-4 text-lg font-semibold tracking-tight">
            Library
          </h2>
          <div className="space-y-1">
            <Link href="/app/my-story">
              <Button variant="ghost" className="w-full justify-start">
                <ListBulletIcon className="mr-2 h-4 w-4" />
                My Stories
              </Button>
            </Link>
            <Button variant="ghost" className="w-full justify-start">
              <BookmarkIcon className="mr-2 h-4 w-4" />
              Saved Stories
            </Button>
            <Link href="/app/generate-character">
              <Button variant="ghost" className="w-full justify-start">
                <BoltIcon className="mr-2 h-4 w-4" />
                Quick Generate Character
              </Button>
            </Link>
          </div>
        </div>

        <div className="px-3 py-2">
          <h2 className="mb-2 px-4 text-lg font-semibold tracking-tight">
            Pinned Stories
          </h2>
          <div className="space-y-1">
            <Button variant="ghost" className="w-full justify-start">
              <HashtagIcon className="mr-2 h-4 w-4" />
              Lover
            </Button>
            <Button variant="ghost" className="w-full justify-start">
              <HashtagIcon className="mr-2 h-4 w-4" />
              Sakura Love
            </Button>
          </div>
        </div>

        <div className="px-3 py-2">
          <h2 className="mb-2 px-4 text-lg font-semibold tracking-tight">
            Settings
          </h2>
          <div className="space-y-1">
            <Link href="/app/profile">
              <Button variant="ghost" className="w-full justify-start">
                <UserCircleIcon className="mr-2 h-4 w-4" />
                Profile
              </Button>
            </Link>
            <Button variant="ghost" className="w-full justify-start">
              <ArrowLeftStartOnRectangleIcon className="mr-2 h-4 w-4" />
              Signout
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
