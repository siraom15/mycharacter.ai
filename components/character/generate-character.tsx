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
import { PlusCircleIcon } from "@heroicons/react/24/outline";
import { useState } from "react";
import { ButtonLoading } from "../story/button-loading";

export function GenerateCharacter() {
  const [prompt, setPrompt] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleGenerateCharacter = () => {
    setIsLoading(true);
    generateCharacter();
  };

  const generateCharacter = () => {
    // Implement your logic here
    // After the character is generated, set isLoading to false
    // Example:
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  };

  return (
    <div className="flex h-[450px] shrink-0 items-center justify-center rounded-md border border-dashed">
      <div className="mx-auto flex max-w-[420px] flex-col items-center justify-center text-center">
        <PlusCircleIcon className="h-10 w-10 text-muted-foreground" />

        <h3 className="mt-4 text-lg font-semibold">Generate Character</h3>
        <p className="mb-4 mt-2 text-sm text-muted-foreground">
          Start by Generate it into a story.
        </p>
        <Dialog>
          <DialogTrigger asChild>
            <Button size="sm" className="relative">
              Generate Character
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Generate Character</DialogTitle>
              <DialogDescription>
                Write a prompt to generate a new character.
                <br />
                Example prompt: "A character who is a detective and has a pet
                cat."
              </DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="grid gap-2">
                <Label htmlFor="url">Prompt</Label>
                <Input
                  id="url"
                  placeholder="Please input a prompt"
                  value={prompt}
                  onChange={(e) => setPrompt(e.target.value)}
                  disabled={isLoading}
                />
              </div>
            </div>
            <DialogFooter>
              <ButtonLoading
                onClick={handleGenerateCharacter}
                isLoading={isLoading}
              >
                Generate Character
              </ButtonLoading>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
}
