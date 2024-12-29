import HeroImg from "/assets/hero.jpg"

export default function HeroSection() {
  return (
    <div className="flex items-center h-screen gap-[55px]">
      {/* TODO: Add image borders in style✅ */}
      <div className="relative w-[100%] h-full bg-primary-75">

        {/* corners✅ */}
        <div className="absolute w-5 h-5 border-2 border-neutral-800 rounded-full bg-white top-[3px] left-[1px]"></div>
        <div className="absolute w-5 h-5 border-2 border-neutral-800 rounded-full bg-white bottom-[3px] left-[1px]"></div>
        <div className="absolute w-5 h-5 border-2 border-neutral-800 rounded-full bg-white top-[3px] right-[2px]"></div>
        <div className="absolute w-5 h-5 border-2 border-neutral-800 rounded-full bg-white bottom-[3px] right-[2px]"></div>


        <div className="w-full h-full p-2 overflow-hidden">
          <img src={HeroImg} className="w-full h-full border-2 border-black" alt="Students in computer Lab" />
        </div>
      </div>

      {/* Hero content✅ */}
      <div className="w-[100%] flex flex-col gap-[30px]">
        {/* Headings✅ */}
        <div>
          <p className="border-b-2 border-black w-fit">Welcome to ESSA Nyarugunga</p>
          <h2 className="text-[48px] mt-2 text-text-15 font-extrabold leading-[60px]">Where Young Minds Blossom and <span className="text-primary-65">Dreams Take Flight</span></h2>
        </div>

        {/* paragraphs✅ */}
        <p> Quia facere sapiente eius iure et of obcaecati rem voluptatum necessitatibus aperiam! Harum ad quisquam omnis praesentium, molestias, consequuntur voluptatem dolor ratione unde deleniti expedita dignissimos labore. Iure fugiat, aperiam sapiente itaque sunt mollitia facilis.</p>

        {/* Analytics✅ */}
        <div className="flex items-center justify-between border-2 border-neutral-800 gap-[15px] shadow-[8px_8px_0px_1px_rgba(255,190,153,1.00)] rounded-xl w-fit px-[50px] py-6">
          <div>
            <h1 className="self-stretch text-neutral-800 text-[44px] font-extrabold leading-[66px]">100k</h1>
            <span className="text-neutral-800 text-lg font-medium leading-[27px]">Students passed</span>
          </div>

          <div>
            <h1 className="self-stretch text-neutral-800 text-[44px] font-extrabold leading-[66px]">37</h1>
            <span className="text-neutral-800 text-lg font-medium leading-[27px]">Awards & Recognitions</span>
          </div>

          <div>
            <h1 className="self-stretch text-neutral-800 text-[44px] font-extrabold leading-[66px]">15</h1>
            <span className="text-neutral-800 text-lg font-medium leading-[27px]">Experienced Educators</span>
          </div>
        </div>

      </div>
    </div>
  )
}
