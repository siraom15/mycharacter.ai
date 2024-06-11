import { Navbar } from "@/components/ui/navbar";
import { Band } from "../components/home/band";
import { StoryStats } from "@/components/home/story-stats";
import { StoryWaveBottom } from "@/components/home/story-wave-bottom";

export default function Home() {
  return (
    <>
      <StoryWaveBottom className="absolute top-[0] z-[-1]" />
      <Navbar className="absolute top-[0] z-[1] w-full" isLoggedIn={false} />
      <div className="mx-auto flex flex-col items-center justify-center w-full">
        <div className="w-full max-w-full flex flex-col items-center justify-center">
          <Band />
          <StoryStats />
        </div>
      </div>
    </>
  );
}
