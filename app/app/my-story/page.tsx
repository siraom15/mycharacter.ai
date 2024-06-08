import { StoryCard } from "@/components/story/story-card";
import { StoryCreationDialog } from "@/components/story/story-creation";
import { StoryEmptyPlaceholder } from "@/components/story/story-empty-placeholder";
import { Separator } from "@/components/ui/separator";
import { StoryWithProfile } from "@/interface";
import { createClient } from "@/utils/supabase/server";
import Link from "next/link";

export default async function MyStory() {
  const supabase = createClient();

  // Fetch user information
  const { data: userData, error: userError } = await supabase.auth.getUser();
  if (userError) {
    return (
      <div className="bg-white p-4">
        Error fetching user data: {userError.message}
      </div>
    );
  }

  const userId = userData.user?.id;
  if (!userId) {
    return <div className="bg-white p-4">User not logged in.</div>;
  }

  // Fetch stories for the user
  const {
    data: stories,
    error: storiesError,
    status: storiesStatus,
  } = await supabase
    .from("stories")
    .select("*, profiles(*)")
    .eq("owner", userId);

  if (storiesError) {
    return (
      <div className="bg-white p-4">
        Error fetching stories: {storiesError.message}
      </div>
    );
  }

  if (storiesStatus !== 200) {
    return (
      <div className="bg-white p-4">
        Unexpected status code: {storiesStatus}
      </div>
    );
  }

  return (
    <div className="bg-white">
      <div className="p-4">
        <div className="flex items-center justify-between">
          <div className="space-y-1">
            <h2 className="text-2xl font-semibold tracking-tight">
              My Stories
            </h2>
            <p className="text-sm text-muted-foreground">
              Here you can see all your stories on our website.
            </p>
          </div>
        </div>
        <Separator className="my-4" />
        <div className="grid grid-cols-6 gap-2">
          {stories && stories.length > 0 ? (
            stories.map((story) => (
              <Link href={`/app/story/${story.id}`} key={story.id}>
                <StoryCard
                  key={story.id}
                  story={story}
                  className="w-full min-h[150px]"
                  aspectRatio="square"
                  width={150}
                  height={150}
                />
              </Link>
            ))
          ) : (
            <StoryEmptyPlaceholder className="col-span-5 " />
          )}
          <StoryCreationDialog className="w-full min-h[150px]" />
        </div>
      </div>
    </div>
  );
}
