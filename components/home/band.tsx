import Image from "next/image";
import { BandWave } from "./band-wave";

export function Band() {
  return (
    <>
      <section className="mx-auto flex flex-row items-center justify-center gap-10 align-middle w-2/3">
        <div className="flex flex-1 flex-col">
          <h2 className="font-palanquin capitalize text-4xl lg:max-w-lg font-bold">
            Create your
            <span className="text-coral-red"> Imagine </span>
            <span className="text-coral-red"> Character </span> With AI
            Technology
          </h2>
          <p className="mt-4 lg:max-w-lg info-text">
            Imagmic is a website that can help you to create your own character.
            You can create your own character with AI technology.
          </p>

          <p className="mt-6 lg:max-w-lg info-text">
            You can create your own story and share it with other people. You
            can
            <span className="text-coral-red"> explore </span> the character that
            has been created by other people.
          </p>
          <div className="mt-11">
            <div className="flex text-sm gap-2">
              <button className="flex justify-center items-center gap-2 px-7 py-4 border font-montserrat text-lg leading-none bg-coral-red text-white border-coral-red rounded-full">
                Explore Now
              </button>

              <button className="flex justify-center items-center gap-2 px-7 py-4 border font-montserrat text-lg leading-none bg-coral-red text-white border-coral-red rounded-full">
                Create your own
              </button>
            </div>
          </div>
          <div className="mt-2">
            <div className="flex text-sm gap-2">
              <p>Try to generate character</p>
            </div>
          </div>
        </div>

        <div className="relative flex-1 flex justify-center items-center">
          <img
            alt="man image"
            src="img/man_remove_bg.png"
            className="object-contain h-1/2 w-96 rounded-full border-2 border-coral-red shadow-coral-red shadow-lg"
          />
          <span className="absolute bg-coral-red rounded-full p-5 text-white text-sm bottom-10">
            <span className="text-base font-bold">Alex</span> <br />A handsome
            guy wearing a glasses <br />
            black suit, his hand holding a necktie
          </span>
        </div>
      </section>
    </>
  );
}
