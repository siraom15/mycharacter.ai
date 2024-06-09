"use client";

import { Character } from "@/interface";
import React, { useState } from "react";
import { CharacterCard } from "./character-card";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { Loading } from "../ui/loading";
import { EmptyPlaceholder } from "../ui/empty-placeholder";
import { CharacterCreationDialog } from "./character-creation-dialog";

interface CharacterListProps extends React.HTMLAttributes<HTMLDivElement> {
  storyId: string;
  characters: Character[];
  isLoading: boolean;
  showCreateCharacter?: boolean;
}

export const CharacterList = ({
  storyId,
  characters,
  isLoading,
  showCreateCharacter,
}: CharacterListProps) => {
  const [search, setSearch] = useState<string>("");

  const filteredCharacters = characters.filter((character) =>
    character.name.toLowerCase().includes(search.toLowerCase()),
  );

  return (
    <>
      <div className="flex w-full justify-between items-center">
        <h2 className="text-2xl font-semibold tracking-tight bg-gradient-to-r from-red-500 to-orange-500 text-transparent bg-clip-text">
          {filteredCharacters.length} Characters
        </h2>
        <div className="flex w-full max-w-sm items-center space-x-2 my-2">
          <Input
            type="text"
            placeholder="Character Name"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          {search && (
            <Button
              className=" bg-gradient-to-r from-red-500 to-orange-500 hover:bg-gradient-to-tr"
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
          {!search && showCreateCharacter && (
            <CharacterCreationDialog
              className="w-full min-h[150px]"
              storyId={storyId}
            />
          )}
          {filteredCharacters.length > 0 ? (
            filteredCharacters.map((character: Character) => (
              <CharacterCard
                key={character.id}
                character={character}
                className="w-full min-h[150px]"
                aspectRatio="square"
                width={150}
                height={150}
              />
            ))
          ) : (
            <EmptyPlaceholder
              className="col-span-6"
              title="No Character Founded"
              description="Start by creating a new character."
            />
          )}
        </div>
      )}
    </>
  );
};
