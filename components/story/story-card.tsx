import Image from "next/image";
import {
  ArrowUpIcon,
  BookmarkIcon,
  PlusCircledIcon,
} from "@radix-ui/react-icons";

import { cn } from "@/lib/utils";
import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuSeparator,
  ContextMenuSub,
  ContextMenuSubContent,
  ContextMenuSubTrigger,
  ContextMenuTrigger,
} from "@/components/ui/context-menu";
import { EyeIcon, ShareIcon } from "@heroicons/react/24/outline";
import { Story, StoryWithProfile } from "@/interface";
import { SupabaseImage } from "../ui/supabase-image";

interface StoryCardProps extends React.HTMLAttributes<HTMLDivElement> {
  story: StoryWithProfile;
  aspectRatio?: "portrait" | "square";
  width: number;
  height: number;
}

export function StoryCard({
  story,
  aspectRatio = "portrait",
  width,
  height,
  className,
  ...props
}: StoryCardProps) {
  return (
    <div className={cn("space-y-3", className)} {...props}>
      <ContextMenu>
        <ContextMenuTrigger>
          <SupabaseImage
            url={story.cover}
            width={width}
            height={height}
            aspectRatio={aspectRatio}
          />
        </ContextMenuTrigger>
        <ContextMenuContent className="w-40">
          <ContextMenuItem>
            <EyeIcon className="mr-2 h-4 w-4" />
            View
          </ContextMenuItem>
          <ContextMenuSeparator />
          <ContextMenuItem>
            <BookmarkIcon className="mr-2 h-4 w-4" />
            Save
          </ContextMenuItem>
          <ContextMenuSeparator />
          <ContextMenuItem>
            <ArrowUpIcon className="mr-2 h-4 w-4" />
            Upvote
          </ContextMenuItem>
          <ContextMenuItem>
            <ShareIcon className="mr-2 h-4 w-4" />
            Share
          </ContextMenuItem>
        </ContextMenuContent>
      </ContextMenu>
      <div className="space-y-1 text-sm">
        <h3 className="font-medium leading-none">{story.name}</h3>
        <p className="flex gap-2 items-center text-xs text-muted-foreground">
          <EyeIcon className="h-4 w-4" /> {story.views.toLocaleString()}
        </p>
        <p className="text-xs text-muted-foreground">
          {story.profiles.username}
        </p>
      </div>
    </div>
  );
}
