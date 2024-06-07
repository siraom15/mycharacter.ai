"use client";
import { CharacterCard } from "@/components/character/character-card";
import { CharacterEmptyPlaceholder } from "@/components/character/character-empty-placeholder";
import { GenerateCharacter } from "@/components/character/generate-character";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Loading } from "@/components/ui/loading";
import { Separator } from "@/components/ui/separator";
import { useToast } from "@/components/ui/use-toast";
import { Character, StoryWithProfile } from "@/interface";
import { createClient } from "@/utils/supabase/client";
import {
  ChevronDoubleDownIcon,
  EyeIcon,
  HandThumbUpIcon,
} from "@heroicons/react/24/outline";
import { BookmarkFilledIcon } from "@radix-ui/react-icons";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useCallback, useEffect, useState } from "react";
import CountUp from "react-countup";

const renderCharacterCards = (characters: Character[]) => {
  return characters.map((character) => (
    <CharacterCard
      key={character.id}
      character={character}
      className="w-[150px]"
      width={300}
      height={300}
    />
  ));
};

export default function StoryPage({ params }: { params: { id: string } }) {
  // Fetch data from the server
  const storyId = params.id;
  const [story, setStory] = useState<StoryWithProfile>();
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter();
  const supabase = createClient();

  const getStory = useCallback(async () => {
    try {
      setIsLoading(true);

      const { data, error, status } = await supabase
        .from("stories")
        .select(`*, profiles(id, username)`)
        .eq("id", storyId)
        .single();

      if (error && status !== 406) {
        console.log(error);
        throw error;
      }

      if (data) {
        setStory(data);
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
  }, [supabase]);

  useEffect(() => {
    getStory();
  }, [getStory]);

  return (
    <>
      {isLoading && <Loading />}
      {story && (
        <div>
          <div className="">
            <div className="flex gap-3 justify-between p-5">
              <div className="space-y-1">
                <h2 className="text-3xl font-bold tracking-tight bg-gradient-to-r from-cyan-300 to-violet-400 text-transparent bg-clip-text">
                  {story.name}
                </h2>
                <p className="text-sm ">By J.K. Rowling</p>
                <p>Story Creater: {story.profiles.username}</p>
                <p className="flex gap-2 items-center">
                  <HandThumbUpIcon className="h-5 w-5 text-blue-500" />
                  Like : <CountUp end={story.likes} /> Likes
                </p>
                <p className="flex gap-2 items-center">
                  <EyeIcon className="h-5 w-5 text-yellow-500" />
                  View : <CountUp end={story.views} /> Views{" "}
                </p>

                {/* Like button */}
                <div className="flex gap-2">
                  <Button className="w-20">
                    <BookmarkFilledIcon className="h-5 w-5" />
                    Upvote
                  </Button>
                  <Button className="w-20">
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
          </div>

          <Separator className="my-4" />

          <div className="p-5 gap-3">
            <div className="flex w-full justify-between">
              <h2 className="text-2xl font-bold tracking-tight bg-gradient-to-r from-cyan-300 to-violet-400 text-transparent bg-clip-text">
                {story.characters?.length} &nbsp; Characters
              </h2>
              <div className="flex w-full max-w-sm items-center space-x-2 my-2">
                <Input type="text" placeholder="Character Name" />
                <Button type="submit">Search</Button>
              </div>
            </div>

            {story.characters?.length ? (
              <div className="grid grid-cols-5 gap-4 bg-white">
                {renderCharacterCards(story.characters)}
              </div>
            ) : (
              <GenerateCharacter />
            )}
          </div>
        </div>
      )}
    </>
  );
}
