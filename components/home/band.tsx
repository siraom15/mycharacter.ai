import Image from "next/image";
import Link from "next/link";
import { StoryWaveBottom } from "./story-wave-bottom";

export function Band() {
  return (
    <>
      <section className="mx-auto flex lg:flex-row flex-col items-center justify-center gap-10 align-middle w-2/3 mt-20">
        <div className="flex flex-1 flex-col">
          <p className="mt-6 lg:max-w-lg font-bold bg-gradient-to-r from-teal-800 to-yellow-800 text-transparent bg-clip-text">
            MyCharacter.AI
          </p>
          <h2 className="font-palanquin capitalize text-6xl lg:max-w-lg font-bold text-teal-950">
            Create your
            <br />
            <span className="relative text-5xl md:text-6xl md:leading-tight font-extrabold md:text-center leading-tight text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-yellow-200 mb-6">
              Imagine Character
            </span>
            <br />
            With AI Technology
          </h2>

          <p className="mt-6 lg:max-w-lg text-teal-950">
            You can create your own story and share it with other people. You
            can
            <span className="text-coral-red  bg-gradient-to-r from-cyan-300 to-violet-400 text-transparent bg-clip-text font-bold">
              {" "}
              explore{" "}
            </span>{" "}
            the character that has been created by other people.
          </p>
          <div className="mt-11">
            <div className="flex text-sm gap-2">
              <Link href="/app/all-story">
                <button className="flex justify-center items-center gap-2 px-7 py-4 text-lg leading-none text-teal-800 rounded-full bg-gradient-to-r from-teal-400 to-yellow-200 hover:bg-gradient-to-tr font-semibold">
                  Explore Now
                </button>
              </Link>
              <Link href="/app/all-story">
                <button className="flex justify-center items-center gap-2 px-7 py-4 text-lg leading-none text-teal-800 rounded-full bg-gradient-to-r from-teal-400 to-yellow-200 hover:bg-gradient-to-tr font-semibold">
                  Get Started
                </button>
              </Link>
            </div>
          </div>
        </div>

        <div className="relative flex-1 lg:flex justify-center items-center hidden">
          <div className="overflow-hidden rounded-full border-2 border-teal-400 shadow-teal-400 shadow-2xl bg-gradient-to-r from-teal-400 to-yellow-200">
            <Image
              width={1000}
              height={1000}
              alt="man image"
              src="/img/demo1.png"
              className="transition-all hover:scale-105 object-contain"
            />
          </div>

          <span className="absolute bg-white rounded-full p-5 text-teal-600 text-sm bottom-10">
            <span className="text-base font-bold">Marry</span> <br />A little
            girl, red hood blonde hair innocent looking short girl
          </span>
        </div>
      </section>
    </>
  );
}
