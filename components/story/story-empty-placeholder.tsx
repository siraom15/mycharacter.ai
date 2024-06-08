import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";
import { ListBulletIcon } from "@heroicons/react/24/outline";

interface StoryEmptyPlaceholderProp
  extends React.HTMLAttributes<HTMLDivElement> {}

export function StoryEmptyPlaceholder({
  className,
  ...props
}: StoryEmptyPlaceholderProp) {
  
  return (
    <div
      {...props}
      className={cn(
        className,
        "flex h-[450px] shrink-0 items-center justify-center rounded-md border border-dashed",
      )}
    >
      <div className="mx-auto flex max-w-[420px] flex-col items-center justify-center text-center">
        <ListBulletIcon className="w-12 h-12 text-gray-400" />

        <h3 className="mt-4 text-lg font-semibold">No story added</h3>
        <p className="mb-4 mt-2 text-sm text-muted-foreground">
          Start by create a story in this website.
        </p>
        <Dialog>
          <DialogTrigger asChild>
            <Button size="sm" className="relative">
              Create Story
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Add Story</DialogTitle>
              <DialogDescription>
                Start creating your story by adding a story name.
              </DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="grid gap-2">
                <Label htmlFor="story">Story Name</Label>
                <Input
                  id="story"
                  placeholder="Eg. Harry Potter, Lord of the rings, ..."
                />
              </div>
            </div>
            <DialogFooter>
              <Button>Create Story</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
}
