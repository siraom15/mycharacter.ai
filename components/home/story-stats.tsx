"use client";
import { StoryWaveBottom } from "./story-wave-bottom";
import { StoryWaveTop } from "./story-wave-top";
import CountUp from "react-countup";

export function StoryStats() {
  return (
    <>
      <StoryWaveTop />
      <div className="mx-auto flex flex-row items-center justify-center gap-10 align-middle w-full bg-coral-red">
        <div className="flex flex-col justify-center items-center relative">
          <img
            src="/img/demo1.png"
            className="object-contain h-auto w-full rounded-full border-2 border-white shadow-white shadow-lg"
          />
          <span className="bg-white rounded-full p-5 text-coral-red text-sm absolute bottom-1 info-text">
            <span className="text-lg font-bold">Marry</span> <br />
            "little girl,red hood,blonde hair,innocent looking,short girl"
          </span>
        </div>

        <div className="relative xl:w-2/5 flex flex-col items-start h-full">
          <h1 className="mt-10 text-5xl font-bold">
            <span className="xl:whitespace-nowrap relative z-10 pr-10">
              Our
            </span>
            <br />
            <span className="text-white inline-block mt-3">Public </span>
            <br />
            Stories
          </h1>
          <p className="font-montserrat text-white text-lg leading-8 mt-6 mb-14 sm:max-w-sm dark:text-white">
            Discover stories from our community of creators.
          </p>
          <div className="flex justify-start items-start flex-wrap w-full gap-16">
            <div className="text-white">
              <p className="text-4xl font-palanquin font-bold">
                <CountUp end={200} />
              </p>
              <p className="leading-7 font-montserrat text-white">Stories</p>
            </div>
            <div className="text-white">
              <p className="text-4xl font-palanquin font-bold">
                <CountUp end={3999} />
              </p>
              <p className="leading-7 font-montserrat text-white">Character</p>
            </div>
            <div className="text-white">
              <p className="text-4xl font-palanquin font-bold">
                <CountUp end={842} />
              </p>
              <p className="leading-7 font-montserrat text-white">User</p>
            </div>
          </div>
        </div>
      </div>
      <StoryWaveBottom />
    </>
  );
}
