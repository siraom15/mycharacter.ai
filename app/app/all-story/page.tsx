import { StoryCard } from "@/components/story/story-card";
import { StoryEmptyPlaceholder } from "@/components/story/story-empty-placeholder";
import { Separator } from "@/components/ui/separator";
import { createClient } from "@/utils/supabase/server";
import Link from "next/link";

export default async function AllStory() {
  const supabase = createClient();

  const { data: stories, error: storiesError, status: storiesStatus } = await supabase
    .from("stories")
    .select(`*, profiles(id, username)`);

  if (storiesError) {
    return <div className="p-4">Error fetching stories: {storiesError.message}</div>;
  }

  if (storiesStatus !== 200) {
    return <div className="p-4">Unexpected status code: {storiesStatus}</div>;
  }

  return (
    <div className="p-4">
      <div className="flex items-center justify-between">
        <div className="space-y-1">
          <h2 className="text-2xl font-semibold tracking-tight">All Stories</h2>
          <p className="text-sm text-muted-foreground">
            Here you can see all the public stories on our website.
          </p>
        </div>
      </div>
      <Separator className="my-4" />
      <div className="grid grid-cols-6 gap-2">
        {stories && stories.length > 0 ? (
          stories.map((story) => (
            <Link href={`/app/story/${story.id}`} key={story.id}>
              <StoryCard
                story={story}
                className="w-full min-h[150px]"
                aspectRatio="square"
                width={150}
                height={150}
              />
            </Link>
          ))
        ) : (
          <StoryEmptyPlaceholder className="col-span-6" />
        )}
      </div>
    </div>
  );
}
