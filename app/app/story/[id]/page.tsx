"use client";

import { CharacterCard } from "@/components/character/character-card";
import { CharacterEmptyPlaceholder } from "@/components/character/character-empty-placeholder";
import { GenerateCharacter } from "@/components/character/generate-character";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { EyeIcon, HandThumbUpIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import CountUp from "react-countup";

const characters = [
  {
    id: 1,
    name: "Harry Potter",
    cover: "/img/harry.png",
    prompt:
      "A young wizard who is famous for defeating the dark wizard Lord Voldemort when he was a baby. He is the only known survivor of the Killing Curse, and as a result, bears a lightning-shaped scar on his forehead.",
  },
  {
    id: 2,
    name: "Hermione Granger",
    cover: "/img/hermione.png",
    prompt:
      "A young witch who is one of Harry Potter's best friends. She is known for her intelligence and hard work, and is often the voice of reason in the trio of main characters. She is Muggle-born, meaning she was born to non-magical parents.",
  },
  {
    id: 3,
    name: "Ron Weasley",
    cover: "/img/ron.png",
    prompt:
      "A wizard, tall, thin and gangling, with freckles, big hands and feet, and a long nose, red brown hair, poorA wizard boy handsome tall thin and gangling with freckles, and a long nose red brown hair, poor",
  },
  {
    id: 4,
    name: "Albus Dumbledore",
    cover: "/img/albus.png",
    prompt:
      "a classic wizard; tall and thin, with long silver hair, that looks long enough to tuck into his belt and a long beard. He also has twinkling blue eyes.",
  },
  {
    id: 1,
    name: "Harry Potter",
    cover: "/img/harry.png",
    prompt:
      "A young wizard who is famous for defeating the dark wizard Lord Voldemort when he was a baby. He is the only known survivor of the Killing Curse, and as a result, bears a lightning-shaped scar on his forehead.",
  },
  {
    id: 1,
    name: "Harry Potter",
    cover: "/img/harry.png",
    prompt:
      "A young wizard who is famous for defeating the dark wizard Lord Voldemort when he was a baby. He is the only known survivor of the Killing Curse, and as a result, bears a lightning-shaped scar on his forehead.",
  },
];
export default function StoryPage({ params }: { params: { id: string } }) {
  return (
    <>
      <div className="flex gap-3 justify-between bg-yellow-400 p-5 text-yellow-800">
        <div className="space-y-1">
          <h2 className="text-3xl font-bold tracking-tight">
            Harry Potter: Order of the Phoenix
          </h2>
          <p className="text-sm text-white">By J.K. Rowling</p>
          <p>Creater: Aommie</p>
          <p className="flex gap-2 items-center">
            <HandThumbUpIcon className="h-5 w-5" />
            Like : <CountUp end={200} /> Likes
          </p>
          <p className="flex gap-2 items-center">
            <EyeIcon className="h-5 w-5" />
            View : <CountUp end={1900} /> Views{" "}
          </p>
          {/* <p>Created At: {Date()} </p> */}
          {/* <p>Update At: {Date()}</p> */}
        </div>
        <Image
          src="/img/harry-oop.jpeg"
          alt="Harry Potter: Order of the Phoenix"
          width={300}
          height={300}
          className="h-auto w-44 object-cover transition-all hover:scale-105 rounded-sm shadow-white shadow border-2 border-white"
        />
      </div>
      <div className="p-5 gap-3">
        <div className="flex w-full justify-end">
          <div className="flex w-full max-w-sm items-center space-x-2 my-2">
            <Input type="text" placeholder="Character Name" />
            <Button type="submit">Search</Button>
          </div>
        </div>

        <div className="grid grid-cols-5 gap-4 bg-white">
          {characters &&
            characters.map((character) => (
              <CharacterCard
                key={character.id}
                character={character}
                className="w-[150px]"
                // aspectRatio="square"
                width={300}
                height={300}
              />
            ))}
        </div>
      </div>
      {/* <GenerateCharacter /> */}
    </>
  );
}
