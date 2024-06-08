"use client";

import { useEffect, useState } from "react";
import { Separator } from "@/components/ui/separator";
import { StoryWithProfile } from "@/interface";
import { createClient } from "@/utils/supabase/client";
import { StoryList } from "@/components/story/story-list";

export default function MyStory() {
  const supabase = createClient();
  const [stories, setStories] = useState<StoryWithProfile[]>([]);
  const [error, setError] = useState<string>("");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchStories = async () => {
      setIsLoading(true);
      const { data: userData, error: userError } =
        await supabase.auth.getUser();
      if (userError) {
      }
      const { data: storiesData, error: storiesError } = await supabase
        .from("stories")
        .select("*, profiles(*)")
        .eq("owner", userData.user?.id)
        .order("created_at", { ascending: true });

      if (storiesError) {
        setError(`Error fetching stories: ${storiesError.message}`);
      } else {
        setStories(storiesData);
      }
      setIsLoading(false);
    };

    fetchStories();
  }, [supabase]);

  if (error) {
    return <div className="bg-white p-4">{error}</div>;
  }

  return (
    <div className="bg-white">
      <div className="p-4">
        <div className="flex items-center justify-between">
          <div className="space-y-1">
            <h2 className="text-2xl font-semibold tracking-tight bg-gradient-to-r from-teal-400 to-yellow-400 text-transparent bg-clip-text">
              My Stories
            </h2>
            <p className="text-sm text-muted-foreground">
              Here you can see all your stories on our website.
            </p>
          </div>
        </div>
        <Separator className="my-4" />
        <StoryList stories={stories} isLoading={isLoading} />
      </div>
    </div>
  );
}
