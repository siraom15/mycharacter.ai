"use client";

import { StoryWithProfile } from "@/interface";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { useState } from "react";
import { Loading } from "../ui/loading";
import { StoryCreationDialog } from "./story-creation-dialog";
import Link from "next/link";
import { StoryCard } from "./story-card";
import { EmptyPlaceholder } from "../ui/empty-placeholder";

interface StoryListProps {
  stories: StoryWithProfile[];
  isLoading: boolean;
  showCreateStory?: boolean;
}
export const StoryList = ({
  stories,
  isLoading,
  showCreateStory = true,
}: StoryListProps) => {
  const [search, setSearch] = useState<string>("");
  // Filter stories by search
  const filteredStories = stories.filter((story) =>
    story.name.toLowerCase().includes(search.toLowerCase()),
  );
  return (
    <>
      <div className="flex w-full justify-between items-center">
        <h2 className="text-2xl font-semibold tracking-tight bg-gradient-to-r from-violet-400 to-pink-400 text-transparent bg-clip-text">
          {filteredStories.length} Stories
        </h2>
        <div className="flex w-full max-w-sm items-center space-x-2 my-2">
          <Input
            type="text"
            placeholder="Story Name"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          {search && (
            <Button
              className=" bg-gradient-to-r from-violet-400 to-pink-400 hover:bg-gradient-to-tr"
              onClick={() => setSearch("")}
            >
              Clear
            </Button>
          )}
        </div>
      </div>
      {isLoading ? (
        <Loading type="dot" />
      ) : (
        <div className="grid grid-cols-6 gap-2">
          {!search && showCreateStory && (
            <StoryCreationDialog className="w-full min-h[150px]" />
          )}
          {filteredStories.length > 0 ? (
            filteredStories.map((story: StoryWithProfile) => (
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
            <EmptyPlaceholder
              className="col-span-6"
              title="No Story Founded"
              description="Start by creating a new story."
            />
          )}
        </div>
      )}
    </>
  );
};
