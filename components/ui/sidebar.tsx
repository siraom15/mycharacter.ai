import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { BookOpenIcon, FireIcon, HashtagIcon } from "@heroicons/react/16/solid";
import { BookmarkFilledIcon, ListBulletIcon } from "@radix-ui/react-icons";

export function Sidebar({ className }: any) {
  return (
    <div className={cn("pb-12", className)}>
      <div className="space-y-4 py-4">
        <div className="px-3 py-2">
          <h2 className="mb-2 px-4 text-lg font-semibold tracking-tight">
            Discover
          </h2>
          <div className="space-y-1">
            <Button variant="secondary" className="w-full justify-start">
              <BookOpenIcon className="mr-2 h-4 w-4" />
              All Stories
            </Button>
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
            <Button variant="ghost" className="w-full justify-start">
              <ListBulletIcon className="mr-2 h-4 w-4" />
              Your Stories
            </Button>
            <Button variant="ghost" className="w-full justify-start">
              <BookmarkFilledIcon className="mr-2 h-4 w-4" />
              Saved Stories
            </Button>
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
      </div>
    </div>
  );
}
