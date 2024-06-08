"use client";

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
import { PlusCircledIcon, PlusIcon } from "@radix-ui/react-icons";
import { useState } from "react";
import { ButtonLoading } from "../ui/button-loading";
import { createStory } from "@/app/app/my-story/action";
import { useToast } from "../ui/use-toast";
import { useRouter } from "next/navigation";

interface StoryCreationDialogProp
  extends React.HTMLAttributes<HTMLDivElement> {}

export function StoryCreationDialog({
  className,
  ...props
}: StoryCreationDialogProp) {
  const [storyName, setStoryName] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [open, setOpen] = useState<boolean>(false);
  const { toast } = useToast();
  const router = useRouter();

  const create = async () => {
    const { error, errorMessage } = await createStory({ name: storyName });
    if (error) {
      toast({
        title: "Fail to Create Story",
        description: "Please try again later." + errorMessage,
        variant: "destructive",
      });
    } else {
      toast({
        title: "Create Story Success",
        description: "Story has been created",
        variant: "default",
      });
      setOpen(false);
      // refresh
      router.refresh();
    }
  };
  return (
    <div
      {...props}
      className={cn(
        className,
        "flex shrink-0 items-center justify-center rounded-md border border-dashed p-2",
      )}
    >
      <div className="mx-auto flex max-w-[420px] flex-col items-center justify-center text-center">
        <PlusCircledIcon className="w-12 h-12 text-gray-400" />

        <h3 className="mt-4 text-lg font-semibold">Add More Story</h3>
        <p className="mb-4 mt-2 text-sm text-muted-foreground">
          Create a story in this website.
        </p>
        <Dialog open={open} onOpenChange={setOpen}>
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
                  name="name"
                  value={storyName}
                  onChange={(e) => setStoryName(e.target.value)}
                  placeholder="Eg. Harry Potter, Lord of the rings, ..."
                />
              </div>
            </div>
            <DialogFooter>
              <ButtonLoading isLoading={isLoading} onClick={create}>
                Create Story
              </ButtonLoading>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
}
