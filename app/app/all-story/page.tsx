"use client";

import useStories from "@/app/hooks/useStories";
import { StoryCard } from "@/components/story/story-card";
import { StoryEmptyPlaceholder } from "@/components/story/story-empty-placeholder";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";

export default function AllStory() {
  // fetch all stories
  const { data: stories, isLoading, isError } = useStories();

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
        <div className="grid grid-cols-6 gap-3">
          {stories &&
            stories.map((story) => (
              <Link href={`/app/story/${story.id}`} key={story.id}>
                <StoryCard
                  key={story.id}
                  story={story}
                  className="w-[150px]"
                  aspectRatio="square"
                  width={150}
                  height={150}
                />
              </Link>
            ))}
        </div>
        {/* <StoryEmptyPlaceholder /> */}
      </div>
    </div>
  );
}
