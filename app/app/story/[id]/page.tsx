"use client";

import { CharacterCard } from "@/components/character/character-card";
import { CharacterList } from "@/components/character/character-list";
import { GenerateCharacter } from "@/components/character/generate-character";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Loading } from "@/components/ui/loading";
import { Separator } from "@/components/ui/separator";
import { useToast } from "@/components/ui/use-toast";
import { Character, StoryWithProfile } from "@/interface";
import { createClient } from "@/utils/supabase/client";
import {
  ChevronDoubleDownIcon,
  ChevronDoubleUpIcon,
  EyeIcon,
  HandThumbUpIcon,
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
      console.log(data, error, storyId);
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
        let currentView = data.views;
        await updateView(currentView + 1);
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
  }, [storyId, supabase, toast, router, updateView]);

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
            <div className="flex gap-3 justify-between p-5">
              <div className="space-y-1">
                <h2 className="text-3xl font-bold tracking-tight bg-gradient-to-r from-red-500 to-orange-500 text-transparent bg-clip-text">
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
                  <Button className="bg-gradient-to-r hover:bg-gradient-to-tr from-red-500 to-orange-500">
                    <ChevronDoubleUpIcon className="h-5 w-5" />
                    Upvote
                  </Button>
                  <Button className="bg-gradient-to-r hover:bg-gradient-to-tr from-teal-400 to-yellow-400">
                    <BookmarkFilledIcon className="h-5 w-5" />
                    Save
                  </Button>
                </div>
              </div>
              <Image
                src={story.cover}
                alt={story.name}
                width={300}
                height={300}
                className="h-auto w-44 object-cover transition-all hover:scale-105 rounded-sm shadow-white shadow border-2 border-white"
              />
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
