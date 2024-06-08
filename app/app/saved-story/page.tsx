import { StoryCard } from "@/components/story/story-card";
import { EmptyPlaceholder } from "@/components/ui/empty-placeholder";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";

const stories = [
  {
    id: 0,
    name: "Harry Potter: Order of the Phoenix",
    cover: "/img/harry-oop.jpeg",
    owner: "Aommie",
  },
  {
    id: 1,
    name: "The Story of the Story",
    cover: "/img/cover-1.png",
    owner: "Mark Zuckerberg",
  },
  {
    id: 2,
    name: "A lover of the Story",
    cover: "/img/cover-2.png",
    owner: "James Bond",
  },
  {
    id: 3,
    name: "The cat life",
    cover: "/img/cover-3.png",
    owner: "Cat",
  },
  {
    id: 4,
    name: "The Story of the Story",
    cover: "/img/cover-1.png",
    owner: "Mark Zuckerberg",
  },
  {
    id: 5,
    name: "The Story of the Story",
    cover: "/img/cover-2.png",
    owner: "Mark Zuckerberg",
  },
];

export default function SavedStory() {
  return (
    <div className="bg-white">
      <div className="p-4">
        <div className="flex items-center justify-between">
          <div className="space-y-1">
            <h2 className="text-2xl font-semibold tracking-tight">
              Saved Stories
            </h2>
            <p className="text-sm text-muted-foreground">
              Here you can see all the your stories in our website.
            </p>
          </div>
        </div>
        <Separator className="my-4" />
        <EmptyPlaceholder />
      </div>
    </div>
  );
}
