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
import { SupabaseImage } from "../ui/supabase-image";

export function CharacterCard({
  character,
  aspectRatio = "portrait",
  width,
  height,
  className,
  ...props
}: any) {
  return (
    <div className={cn("space-y-3", className)} {...props}>
      <div className="overflow-hidden rounded-md">
        <SupabaseImage
          url={character.cover}
          width={width}
          height={height}
        />
      </div>
      <div className="space-y-1 text-sm">
        <h3 className="font-medium leading-none">{character.name}</h3>
        <p className="text-xs text-muted-foreground">
          {character.prompt.substring(0, 100) + "..."}
        </p>
      </div>
    </div>
  );
}
