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
import { createCharacterToStory } from "@/app/app/story/[id]/action";

interface CharacterCreationDialogProp
  extends React.HTMLAttributes<HTMLDivElement> {
  storyId: string;
}

export function CharacterCreationDialog({
  storyId,
  className,
  ...props
}: CharacterCreationDialogProp) {
  const [name, setName] = useState<string>("");
  const [prompt, setPrompt] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [open, setOpen] = useState<boolean>(false);
  const { toast } = useToast();
  const router = useRouter();

  const create = async () => {
    setIsLoading(true);
    if(!name || !prompt) {
      toast({
        title: "Fail to Create Character",
        description: "Please fill all fields.",
        variant: "destructive",
      });
      return;
    }
    const { error, errorMessage } = await createCharacterToStory({
      name,
      prompt,
      storyId,
    });
    if (error) {
      toast({
        title: "Fail to Create Character",
        description: "Please try again later." + errorMessage,
        variant: "destructive",
      });
    } else {
      toast({
        title: "Create Character Success",
        description: "Character has been created",
        variant: "default",
      });
      setOpen(false);
      // refresh
      router.refresh();
    }
    setName("");
    setPrompt("");
    setIsLoading(false);
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

        <h3 className="mt-4 text-lg font-semibold">Add Character</h3>
        <p className="mb-4 mt-2 text-sm text-muted-foreground">
          Create a character to this story.
        </p>
        <Dialog open={open} onOpenChange={setOpen}>
          <DialogTrigger asChild>
            <Button size="sm" className="relative">
              Create Character
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Add Character</DialogTitle>
              <DialogDescription>
                Start creating your Character by adding a name and prompt.
              </DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="grid gap-2">
                <Label htmlFor="story">Character Name</Label>
                <Input
                  id="story"
                  name="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Eg. Harry Potter"
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="prompt">Prompt</Label>
                <Input
                  id="prompt"
                  name="prompt"
                  value={prompt}
                  onChange={(e) => setPrompt(e.target.value)}
                  placeholder="Eg. A young wizard."
                />
              </div>
            </div>
            <DialogFooter>
              <ButtonLoading isLoading={isLoading} onClick={create}>
                Create Character
              </ButtonLoading>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
}
