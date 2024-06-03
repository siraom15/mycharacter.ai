export function StoryStats() {
  return (
    <>
      <div className="mx-auto flex flex-row items-center justify-center gap-10 align-middle w-full mt-5">
        <div className="flex flex-col justify-center items-center relative">
          <img
            src="/img/demo1.png"
            className="object-contain h-auto w-full rounded-full"
          />
          <span className="bg-coral-red rounded-full p-5 text-white text-sm absolute bottom-1 info-text">
            <span className="text-base font-bold">Marry</span> <br />
            little girl,red hood,blonde hair,innocent looking,short girl
          </span>
        </div>

        <div className="relative xl:w-2/5 flex flex-col items-start h-full">
          <h1 className="mt-10 text-5xl font-bold">
            <span className="xl:whitespace-nowrap relative z-10 pr-10">
              Our
            </span>
            <br />
            <span className="text-coral-red inline-block mt-3">Public </span>
            <br />
            Stories
          </h1>
          <p className="font-montserrat text-slate-gray text-lg leading-8 mt-6 mb-14 sm:max-w-sm dark:text-white">
            Discover stories from our community of creators.
          </p>
          <div className="flex justify-start items-start flex-wrap w-full gap-16">
            <div>
              <p className="text-4xl font-palanquin font-bold">{0}</p>
              <p className="leading-7 font-montserrat">Stories</p>
            </div>
            <div>
              <p className="text-4xl font-palanquin font-bold">{0}</p>
              <p className="leading-7 font-montserrat">Character</p>
            </div>
            <div>
              <p className="text-4xl font-palanquin font-bold">{0}</p>
              <p className="leading-7 font-montserrat">User</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
