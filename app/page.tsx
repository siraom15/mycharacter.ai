import Image from "next/image";
import { Band } from "../components/home/band";
import { StoryStats } from "@/components/home/story-stats";

export default function Home() {
  return (
    <div className="mx-auto flex flex-col items-center justify-center w-full">
      <div className="w-full max-w-full flex flex-col items-center justify-center">
        <Band />
        <StoryStats/>
      </div>
    </div>
  );
}
