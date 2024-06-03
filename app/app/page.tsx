import { StoryEmptyPlaceholder } from "@/components/story/story-empty-placeholder";
import { Separator } from "@/components/ui/separator";

export default function AllStory() {
  return (
    <div className="bg-white">
      <div className="p-4">
        <div className="flex items-center justify-between">
          <div className="space-y-1">
            <h2 className="text-2xl font-semibold tracking-tight">
              All Stories
            </h2>
            <p className="text-sm text-muted-foreground">
              Here you can see all the public stories in our website.
            </p>
          </div>
        </div>
        <Separator className="my-4" />
        <StoryEmptyPlaceholder />
      </div>
    </div>
  );
}
