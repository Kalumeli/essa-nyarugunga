import Illustration from "/assets/illustrations/2.svg"

export default function Overview({ title, heading, details }) {
  return (
    <div className="relative w-full px-[70px] py-[140px] bg-white rounded-xl shadow-[8px_8px_0px_1px_rgba(30,30,30,1.00)] border-2 border-neutral-800 justify-start items-center gap-[50px] inline-flex overflow-hidden">
      {/* illustration✅ */}
      <div className="absolute top-0 left-0 w-[150px] h-[150px]">
        <img src={Illustration} className="w-full h-full" />
      </div>

      {/* overview content✅ */}
      <div className="grid items-center grid-cols-2">
        <div>
          <div className="px-5 py-2.5 bg-white rounded-lg border-2 border-neutral-800 justify-start items-start gap-2.5 inline-flex overflow-hidden">
            <span className="text-center text-[#333333] text-lg font-medium leading-[27px]">{title}</span>
          </div>
          <h1 className="text-[#191919] text-5xl font-bold leading-[62.40px]">{heading}</h1>
        </div>

        <div>
          <p className="text-[#333333] font-semibold leading-[30px]">{details}</p>
        </div>
      </div>

    </div>
  )
}
