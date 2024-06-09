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
import { cn } from "@/lib/utils";
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
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(true);
  const [canEdit, setCanEdit] = useState<boolean>(false);
  const [saved, setSaved] = useState<boolean>(false);
  const [upvoted, setUpvoted] = useState<boolean>(false);
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

  const editStory = async (
    storyName: string,
    description: string,
    publicMode: boolean,
  ) => {
    try {
      const { data, error } = await supabase
        .from("stories")
        .update({
          name: storyName,
          description: description,
          is_public: publicMode,
        })
        .eq("id", storyId);
      if (error) {
        toast({
          variant: "destructive",
          title: "Error updating story",
          description: "Please try again later.," + error.message,
        });
        return;
      }
      toast({
        variant: "default",
        title: "Story updated",
        description: "The story has been updated successfully.",
      });
      await getStory();
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Error updating story",
        description: "Please try again later.",
      });
    }
  };

  const updateImage = async (newPath: string) => {
    try {
      const { data, error } = await supabase
        .from("stories")
        .update({
          cover: newPath,
        })
        .eq("id", storyId);
      if (error) {
        toast({
          variant: "destructive",
          title: "Error updating image",
          description: "Please try again later.," + error.message,
        });
        return;
      }
      toast({
        variant: "default",
        title: "Image updated",
        description: "The story image has been updated successfully.",
      });
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Error updating image",
        description: "Please try again later.",
      });
    }
  };

  const getStory = async () => {
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
      } else {
        toast({
          variant: "destructive",
          title: "Error fetching story",
          description: "Please try again later.",
        });
        router.push("/app/all-story");
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
  };

  useEffect(() => {
    getStory();
  }, []);

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        story && (
          <div>
            <div className="flex gap-3 justify-between p-5 items-center">
              <div className="space-y-1">
                <h2 className="text-6xl font-bold tracking-tight bg-gradient-to-r from-emerald-400 to-cyan-400 text-transparent bg-clip-text">
                  {story.name}
                </h2>
                <p className="text-sm">{story.description}</p>
                <div>
                  Story Creator:{" "}
                  <span className="hover:underline">
                    {story.profiles.username}
                  </span>
                  {canEdit && (
                    <Badge className="bg-gradient-to-r from-emerald-400 to-cyan-400 ml-2">
                      You
                    </Badge>
                  )}{" "}
                </div>
                <div>
                  Status:{" "}
                  <Badge className="bg-gradient-to-r from-emerald-400 to-cyan-400">
                    {story.is_public ? "Public" : "Private"}
                  </Badge>
                </div>
                <p className="flex gap-2 items-center">
                  <ChevronDoubleUpIcon className="h-5 w-5 text-emerald-400" />
                  Upvote: <CountUp end={story.likes} />
                </p>
                <p className="flex gap-2 items-center">
                  <EyeIcon className="h-5 w-5 text-emerald-400" />
                  Views: <CountUp end={story.views} />
                </p>
                <div className="flex gap-2">
                  {canEdit ? (
                    <StoryEditDialog story={story} editCallback={editStory} />
                  ) : (
                    <>
                      <Button
                        className={cn(
                          "bg-gradient-to-r hover:bg-gradient-to-tr",
                          upvoted
                            ? " from-emerald-400 to-cyan-400"
                            : "from-slate-300 to-slate-500",
                        )}
                        onClick={() => setUpvoted(!upvoted)}
                      >
                        <ChevronDoubleUpIcon className="h-5 w-5" />
                        {upvoted ? "Upvoted" : "Upvote"}
                      </Button>
                      <Button
                        className={cn(
                          "bg-gradient-to-r hover:bg-gradient-to-tr",
                          saved
                            ? " from-emerald-400 to-cyan-400"
                            : "from-slate-300 to-slate-500",
                        )}
                        onClick={() => setSaved(!saved)}
                      >
                        <BookmarkFilledIcon className="h-5 w-5" />
                        {saved ? "Saved" : "Save"}
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
                  canUpdate={canEdit}
                  updateCallback={updateImage}
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
