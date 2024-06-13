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
import { cn, parseBase64Image } from "@/lib/utils";
import { ListBulletIcon } from "@heroicons/react/24/outline";
import { PlusCircledIcon, PlusIcon } from "@radix-ui/react-icons";
import { useState } from "react";
import { ButtonLoading } from "../ui/button-loading";
import { createStory } from "@/app/app/my-story/action";
import { useToast } from "../ui/use-toast";
import { useRouter } from "next/navigation";
import { createCharacterToStory } from "@/app/app/story/[id]/action";
import Image from "next/image";
import { Separator } from "../ui/separator";

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
  const [disable, setDisable] = useState<boolean>(false);
  const [firstTime, setFirstTime] = useState<boolean>(true);
  const [generatedImage, setGeneratedImage] = useState<string>("");

  const { toast } = useToast();
  const router = useRouter();

  const resetState = () => {
    setName("");
    setPrompt("");
    setIsLoading(false);
  };

  const generateImage = async () => {
    if (!name || !prompt) {
      toast({
        title: "Fail to Create Character",
        description: "Please fill all fields.",
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);
    try {
      const response = await fetch("/api/generate-character", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ prompt }),
      });
      if (!response.ok) {
        throw new Error("Fail to generate character");
      }
      const { image } = await response.json();
      toast({
        title: "Generate Character Success",
        description: "Character has been generated",
        variant: "default",
      });
      setGeneratedImage(image);
      setFirstTime(false);
    } catch (error) {
      toast({
        title: "Fail to Generate Character",
        description: "Please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const create = async () => {
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
      router.push(`/app/story/${storyId}`);
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
            <Button
              size="sm"
              className="relative bg-gradient-to-r hover:bg-gradient-to-tr from-teal-400 to-yellow-400"
            >
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
                {generatedImage ? (
                  <Image
                    className="rounded-lg mx-auto w-full"
                    src={parseBase64Image(generatedImage)}
                    alt="generated image"
                    width={300}
                    height={300}
                  />
                ) : (
                  <div className="rounded-lg mx-auto w-full h-[300px] bg-gray-100 flex items-center align-middle"></div>
                )}
              </div>
              {/* <Separator /> */}
              <div className="grid gap-2">
                <Label htmlFor="story">Character Name</Label>
                <Input
                  id="story"
                  name="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Eg. Harry Potter"
                  disabled={disable}
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
                  disabled={disable}
                />
              </div>
            </div>
            <DialogFooter className="gap-2">
              <ButtonLoading
                className="bg-gradient-to-r hover:bg-gradient-to-tr from-teal-400 to-yellow-400"
                isLoading={isLoading}
                onClick={generateImage}
              >
                {isLoading
                  ? "Generating..."
                  : firstTime
                  ? "Create Character"
                  : "Regenerate"}
              </ButtonLoading>
              {!firstTime && !isLoading && (
                <ButtonLoading
                  className="bg-gradient-to-r hover:bg-gradient-to-tr from-teal-400 to-yellow-400"
                  // onClick={create}
                >
                  Select This Image
                </ButtonLoading>
              )}
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
}
