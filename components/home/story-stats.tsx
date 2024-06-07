"use client";
import Image from "next/image";
import { StoryWaveBottom } from "./story-wave-bottom";
import { StoryWaveTop } from "./story-wave-top";
import CountUp from "react-countup";

const stats = [
  { end: 200, label: "Stories" },
  { end: 3999, label: "Character" },
  { end: 842, label: "User" },
];

const Stat = ({ end, label }: { end: number; label: string }) => (
  <div className="">
    <p className="text-4xl font-palanquin font-bold">
      <CountUp end={end} />
    </p>
    <p className="leading-7 font-montserrat">{label}</p>
  </div>
);

const Band = () => (
  <div className="flex flex-col justify-center items-center relative">
    <Image
      src="/img/nerdcat.png"
      width={500}
      height={500}
      className="object-contain h-1/2 w-96 rounded-full border-2 border-white shadow-white shadow-lg"
      alt="Marry"
    />
    <span className="bg-white rounded-full p-5 text-sm absolute bottom-1 info-text">
      <span className="text-lg font-bold">Catie</span> <br />
      &quot;Nerd Cat&quot;
    </span>
  </div>
);

export function StoryStats() {
  return (
    <>
      <StoryWaveTop />
      <div className="mx-auto flex flex-row items-center justify-center gap-10 align-middle w-full bg-yellow-200 text-yellow-800 p-10">
        <Band />
        <div className="relative xl:w-2/5 flex flex-col items-start h-full">
          <h1 className="mt-10 text-5xl font-bold ">
            <span className="xl:whitespace-nowrap relative z-10 pr-10 e">
              Our
            </span>
            <br />
            <span className="inline-block mt-3">Public </span>
            <br />
            Stories
          </h1>
          <p className="font-montserrat text-lg leading-8 mt-6 mb-14 sm:max-w-sm">
            Discover stories from our community of creators.
          </p>
          <div className="flex justify-start items-start flex-wrap w-full gap-16">
            {stats.map((stat, index) => (
              <Stat key={index} end={stat.end} label={stat.label} />
            ))}
          </div>
        </div>
      </div>
      <StoryWaveBottom />
    </>
  );
}
