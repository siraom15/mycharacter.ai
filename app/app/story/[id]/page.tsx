"use client";

import { CharacterCard } from "@/components/character/character-card";
import { CharacterList } from "@/components/character/character-list";
import { GenerateCharacter } from "@/components/character/generate-character";
import { StoryEditDialog } from "@/components/story/story-edit-dialog";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Loading } from "@/components/ui/loading";
import { Separator } from "@/components/ui/separator";
import { SupabaseImage } from "@/components/ui/supabase-image";
import { useToast } from "@/components/ui/use-toast";
import { Character, StoryWithProfile } from "@/interface";
import { createClient } from "@/utils/supabase/client";
import {
  ChevronDoubleDownIcon,
  ChevronDoubleUpIcon,
  EyeIcon,
  HandThumbUpIcon,
  PencilSquareIcon,
} from "@heroicons/react/24/outline";
import { BookmarkFilledIcon } from "@radix-ui/react-icons";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useCallback, useEffect, useState } from "react";
import CountUp from "react-countup";

export default function StoryPage({ params }: { params: { id: string } }) {
  const storyId = params.id;
  const [story, setStory] = useState<StoryWithProfile>();
  const [characters, setCharacters] = useState<Character[]>();
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(true);
  const [canEdit, setCanEdit] = useState<boolean>(false);
  const router = useRouter();
  const supabase = createClient();

  const updateView = useCallback(
    async (toView: number) => {
      const { data, error } = await supabase
        .from("stories")
        .update({
          views: toView,
        })
        .eq("id", storyId);
    },
    [storyId, supabase],
  );

  const getStory = useCallback(async () => {
    try {
      setIsLoading(true);

      const { data, error, status } = await supabase
        .from("stories")
        .select(`*, profiles(id, username), characters(*)`)
        .eq("id", storyId)
        .single();

      if (error && status !== 406) {
        console.error(error);
        throw error;
      }
      if (data) {
        setStory(data);
        const { data: user } = await supabase.auth.getUser();
        if (user && user.user?.id === data.owner) {
          setCanEdit(true);
        }
      }
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Error fetching story",
        description: "Please try again later.",
      });
      router.push("/app/all-story");
    } finally {
      setIsLoading(false);
    }
  }, [storyId, supabase, toast, router]);

  useEffect(() => {
    getStory();
  }, [getStory]);

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        story && (
          <div>
            <div className="flex gap-3 justify-between p-5 items-center">
              <div className="space-y-1">
                <h2 className="text-6xl font-bold tracking-tight bg-gradient-to-r from-red-500 to-orange-500 text-transparent bg-clip-text">
                  {story.name}
                </h2>
                <p className="text-sm">{story.description}</p>
                <div>
                  Story Creator:{" "}
                  <span className="hover:underline">
                    {story.profiles.username}
                  </span>
                  {canEdit && (
                    <Badge className="bg-gradient-to-r from-red-500 to-orange-500 ml-2">
                      You
                    </Badge>
                  )}{" "}
                </div>
                <p className="flex gap-2 items-center">
                  <ChevronDoubleUpIcon className="h-5 w-5 text-blue-500" />
                  Upvote: <CountUp end={story.likes} />
                </p>
                <p className="flex gap-2 items-center">
                  <EyeIcon className="h-5 w-5 text-yellow-500" />
                  Views: <CountUp end={story.views} />
                </p>
                <div className="flex gap-2">
                  {canEdit ? (
                    <StoryEditDialog story={story} />
                  ) : (
                    <>
                      <Button className="bg-gradient-to-r hover:bg-gradient-to-tr from-red-500 to-orange-500">
                        <ChevronDoubleUpIcon className="h-5 w-5" />
                        Upvote
                      </Button>
                      <Button className="bg-gradient-to-r hover:bg-gradient-to-tr from-red-500 to-orange-500">
                        <BookmarkFilledIcon className="h-5 w-5" />
                        Save
                      </Button>
                    </>
                  )}
                </div>
              </div>
              <div className="w-1/3">
                <SupabaseImage
                  url={story.cover}
                  width={150}
                  height={150}
                  aspectRatio="square"
                />
              </div>
            </div>
            <div className="w-full">
              <ChevronDoubleDownIcon className="h-5 w-5 mx-auto text-gray-500 animate-bounce" />
            </div>
            <Separator className="my-4" />
            <div className="p-5">
              <CharacterList
                storyId={storyId}
                characters={story.characters}
                isLoading={isLoading}
                showCreateCharacter={canEdit}
              />
            </div>
          </div>
        )
      )}
    </>
  );
}
