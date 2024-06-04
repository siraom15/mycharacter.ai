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
            <Image
              src={character.cover}
              alt={character.name}
              width={width}
              height={height}
              className={cn(
                "h-auto w-auto object-cover transition-all hover:scale-105",
                aspectRatio === "portrait" ? "aspect-[3/4]" : "aspect-square"
              )}
            />
          </div>
      <div className="space-y-1 text-sm">
        <h3 className="font-medium leading-none">{character.name}</h3>
        <p className="text-xs text-muted-foreground">{character.prompt.substring(0,100)+'...'}</p>
      </div>
    </div>
  );
}
