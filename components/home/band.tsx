import Image from "next/image";
import Link from "next/link";

export function Band() {
  return (
    <>
      <section className="mx-auto flex flex-row items-center justify-center gap-10 align-middle w-2/3">
        <div className="flex flex-1 flex-col">
          <p className="mt-6 lg:max-w-lg font-bold bg-gradient-to-r from-cyan-300 to-violet-400 text-transparent bg-clip-text">MyCharacter.AI</p>
          <h2 className="font-palanquin capitalize text-6xl lg:max-w-lg font-bold text-custom-black">
            Create your
            <br />
            {/* <span className="bg-gradient-to-r from-rose-400 to-red-500 bg-clip-text inline-block text-transparent"> Imagine &nbsp;</span>
            <span className="bg-gradient-to-r from-rose-400 to-red-500 bg-clip-text inline-block text-transparent"> Character </span>  */}
            <span className="relative text-5xl md:text-6xl md:leading-tight font-extrabold md:text-center leading-tight text-transparent bg-clip-text bg-gradient-to-l from-rose-500 to-red-500 mb-6">
              Imagine Character
            </span>
            <br />
            With AI Technology
          </h2>
          {/* <p className="mt-4 lg:max-w-lg info-text">
            Imagmic is a website that can help you to create your own character.
            You can create your own character with AI technology.
          </p> */}
          <p className="mt-6 lg:max-w-lg">
            You can create your own story and share it with other people. You
            can
            <span className="text-coral-red  bg-gradient-to-r from-cyan-300 to-violet-400 text-transparent bg-clip-text"> explore </span> the character that
            has been created by other people.
          </p>
          <div className="mt-11">
            <div className="flex text-sm gap-2">
              <Link href="/app/all-story">
                <button className="flex justify-center items-center gap-2 px-7 py-4 border font-montserrat text-lg leading-none bg-coral-red text-white border-coral-red rounded-full hover:bg-coral-red-light hover:border-coral-red-light bg-gradient-to-r from-rose-400 to-red-500 hover:bg-gradient-to-l">
                  Explore Now
                </button>
              </Link>

              <button className="flex justify-center items-center gap-2 px-7 py-4 border font-montserrat text-lg leading-none bg-coral-red text-white border-coral-red rounded-full hover:bg-coral-red-light hover:border-coral-red-light bg-gradient-to-r from-rose-400 to-red-500 hover:bg-gradient-to-l">
                Try Now
              </button>
            </div>
          </div>
          <div className="mt-2">
            <div className="flex text-sm gap-2">
              <p>Try to generate character</p>
            </div>
          </div>
        </div>

        <div className="relative flex-1 flex justify-center items-center ">
          <div className="overflow-hidden rounded-full border-2 border-rose-400 shadow-rose-400 shadow-2xl bg-coral-red bg-gradient-to-r from-rose-400 to-red-500 ">
            <Image
              width={500}
              height={500}
              alt="man image"
              src="/img/man_remove_bg.png"
              className="transition-all hover:scale-105 object-contain h-1/2 w-96 "
            />
          </div>

          <span className="absolute bg-white rounded-full p-5 text-coral-red text-sm bottom-10">
            <span className="text-base font-bold">Alex</span> <br />A handsome
            guy wearing a glasses <br />
            black suit, his hand holding a necktie
          </span>
        </div>
      </section>
    </>
  );
}
