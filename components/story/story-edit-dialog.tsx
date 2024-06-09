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
import { ListBulletIcon, PencilSquareIcon } from "@heroicons/react/24/outline";
import { PlusCircledIcon, PlusIcon } from "@radix-ui/react-icons";
import { use, useEffect, useState } from "react";
import { ButtonLoading } from "../ui/button-loading";
import { updateStory } from "@/app/app/my-story/action";
import { useToast } from "../ui/use-toast";
import { useRouter } from "next/navigation";
import { Switch } from "../ui/switch";
import { Story } from "@/interface";

interface StoryCreationDialogProp extends React.HTMLAttributes<HTMLDivElement> {
  story: Story;
}

export function StoryEditDialog({
  story,
  className,
  ...props
}: StoryCreationDialogProp) {
  const [storyId, setStoryId] = useState<string>("");
  const [storyName, setStoryName] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [publicMode, setPublicMode] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [open, setOpen] = useState<boolean>(false);
  const { toast } = useToast();
  const router = useRouter();

  // set initial value
  useEffect(() => {
    if (story) {
      setStoryId(story.id);
      setStoryName(story.name);
      setDescription(story.description);
      setPublicMode(story.is_public);
    }
  }, [story]);

  const update = async () => {
    setIsLoading(true);
    if (!storyName || !description) {
      toast({
        title: "Fail to Create Story",
        description: "Please fill all fields.",
        variant: "destructive",
      });
      setIsLoading(false);
      return;
    }
    const { error, errorMessage } = await updateStory({
      id: storyId,
      name: storyName,
      description,
      is_public: publicMode,
    });
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
    }
    setIsLoading(false);
  };
  return (
    <Dialog open={open} onOpenChange={setOpen} {...props}>
      <DialogTrigger asChild>
        <Button className="bg-gradient-to-r hover:bg-gradient-to-tr from-red-500 to-orange-500">
          <PencilSquareIcon className="h-5 w-5" />
          Update
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Edit Story</DialogTitle>
          <DialogDescription>
            Update your story information.
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
          <div className="grid gap-2">
            <Label htmlFor="story">Description</Label>
            <Input
              id="description"
              name="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Eg. A story about wizard written by J.K. Rowling."
            />
          </div>
          <div className="flex gap-2 items-center">
            <Switch
              id="public"
              checked={publicMode}
              onCheckedChange={setPublicMode}
            />
            <Label htmlFor="public">Public Mode</Label>
          </div>
          <p className="text-sm text-gray-500">
            * If Public Mode is on, Everyone can see your story.{" "}
          </p>
        </div>
        <DialogFooter>
          <ButtonLoading isLoading={isLoading} onClick={update} className="bg-gradient-to-r hover:bg-gradient-to-tr from-red-500 to-orange-500">
            Update Story
          </ButtonLoading>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
