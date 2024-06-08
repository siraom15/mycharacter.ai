"use client";

import { useEffect, useState } from "react";
import { Separator } from "@/components/ui/separator";
import { createClient } from "@/utils/supabase/client";
import { StoryWithProfile } from "@/interface";
import { StoryList } from "@/components/story/story-list";

export default function AllStory() {
  const supabase = createClient();
  const [stories, setStories] = useState<StoryWithProfile[]>([]);
  const [error, setError] = useState<string>();
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchStories = async () => {
      setIsLoading(true);
      const { data: storiesData, error: storiesError } = await supabase
        .from("stories")
        .select(`*, profiles(id, username)`);

      if (storiesError) {
        setError(`Error fetching stories`);
      } else {
        setStories(storiesData);
      }
      setIsLoading(false);
    };

    fetchStories();
  }, [supabase]);

  if (error) {
    return <div className="p-4">{error}</div>;
  }

  return (
    <div className="p-4">
      <div className="flex items-center justify-between">
        <div className="space-y-1">
          <h2 className="text-2xl font-semibold tracking-tight bg-gradient-to-r from-violet-400 to-pink-400 text-transparent bg-clip-text">All Stories</h2>
          <p className="text-sm text-muted-foreground">
            Here you can see all the public stories on our website.
          </p>
        </div>
      </div>
      <Separator className="my-4" />
      <StoryList stories={stories} isLoading={isLoading} showCreateStory={false}/>
    </div>
  );
}
