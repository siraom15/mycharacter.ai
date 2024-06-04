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
import { useMemo, useState } from "react";
import { ButtonLoading } from "../story/button-loading";
import Image from "next/image";
import { useToast } from "../ui/use-toast";
import { ToastAction } from "../ui/toast";

export function GenerateCharacter() {
  const [prompt, setPrompt] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [resultImageBase64, setResultImageBase64] = useState<string>("");
  const [copyPrompt, setCopyPrompt] = useState("");
  const { toast } = useToast();

  const parseBase64ToImage = (base64: string): string => {
    return base64 ? `data:image/png;base64,${base64}` : "";
  };

  const generateCharacter = async (e: Event) => {
    e.preventDefault();
    setIsLoading(true);
    const url = process.env.NEXT_PUBLIC_WIZMODEL_TXT2IMG_API_ENDPOINT || "";
    console.log("url", url);

    const data = {
      prompt: prompt,
      steps: 100,
    };

    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_WIZMODEL_TOKEN}`,
      },
      body: JSON.stringify(data),
    });

    const result = await response.json();
    console.log(result);
    const image = result.images[0];
    setResultImageBase64(image);
    setIsLoading(false);
    setCopyPrompt(prompt);
    setPrompt("");
  };

  const handleGenerateCharacter = (e: Event) => {
    if (!prompt) {
      console.log('show toast');
      
      toast({
        variant: "destructive",
        title: "Prompt is required",
        description: "Please input a prompt to generate a character.",
      })
      return;
    }
    setIsLoading(true);
    generateCharacter(e);
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
                {resultImageBase64 && (
                  <Image
                    src={parseBase64ToImage(resultImageBase64)}
                    alt="Generated Character"
                    className="w-96"
                    width={200}
                    height={200}
                  />
                )}
                {resultImageBase64 && copyPrompt}
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
