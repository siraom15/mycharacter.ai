import { GenerateCharacter } from "@/components/character/generate-character";
import { Separator } from "@/components/ui/separator";

export default function GenerateCharacterPage() {
  return (
    <div className="bg-white">
      <div className="p-4">
        <div className="flex items-center justify-between">
          <div className="space-y-1">
            <h2 className="text-2xl font-semibold tracking-tight">
              Generate Character
            </h2>
            <p className="text-sm text-muted-foreground">
              Generate a new character for your story.
            </p>
          </div>
        </div>
        <Separator className="my-4" />
        <GenerateCharacter />
      </div>
    </div>
  );
}
