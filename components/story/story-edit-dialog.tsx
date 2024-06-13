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
  editCallback: (
    storyName: string,
    description: string,
    publicMode: boolean,
  ) => void;
}

export function StoryEditDialog({
  story,
  className,
  editCallback,
  ...props
}: StoryCreationDialogProp) {
  const [storyName, setStoryName] = useState<string>(story.name);
  const [description, setDescription] = useState<string>(story.description);
  const [publicMode, setPublicMode] = useState<boolean>(story.is_public);
  const [open, setOpen] = useState<boolean>(false);
  const { toast } = useToast();

  const edit = async () => {
    if (!storyName || !description) {
      toast({
        title: "Fail to Create Story",
        description: "Please fill all fields.",
        variant: "destructive",
      });
      return;
    }
    editCallback(storyName, description, publicMode);
    setStoryName("");
    setDescription("");
    setPublicMode(false);
    setOpen(false);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen} {...props}>
      <DialogTrigger asChild>
        <Button className="bg-gradient-to-r hover:bg-gradient-to-tr from-teal-400 to-yellow-400">
          <PencilSquareIcon className="h-5 w-5" />
          Update
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Edit Story</DialogTitle>
          <DialogDescription>Update your story information.</DialogDescription>
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
              className="data-[state=checked]:bg-teal-400"
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
          <ButtonLoading
            onClick={edit}
            className="bg-gradient-to-r hover:bg-gradient-to-tr from-teal-400 to-yellow-400"
          >
            Update Story
          </ButtonLoading>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
