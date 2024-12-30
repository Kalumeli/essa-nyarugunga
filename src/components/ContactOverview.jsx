import Illustration from "/assets/illustrations/2.svg"

// icons
import Email from "/assets/icons/email.svg"
import Phone from "/assets/icons/phone.svg"
import Location from "/assets/icons/location.svg"
import Time from "/assets/icons/time.svg"
import Facebook from "/assets/icons/facebook.svg"
import Twitter from "/assets/icons/twitter.svg"
import LinkedIn from "/assets/icons/linkedin.svg"


export default function ContactOverview({ title, heading, details }) {
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
          <h1 className="text-[#191919] text-4xl font-bold leading-[62.40px]">{heading}</h1>
        </div>

        <div className="flex flex-col gap-[40px]">
          <p className="text-[#333333] font-semibold leading-[30px]">{details}</p>

          <div className="grid grid-cols-2 gap-[24px]">

            <div className="flex items-center gap-2 px-4 py-3 bg-[#fffbf9] rounded-xl border-2 border-neutral-800">
              <span className="h-10 p-2 bg-[#fff5ef] rounded-md border-2 border-neutral-800 justify-start items-start gap-2.5 inline-flex">
                <img src={Email} />
              </span>
              <p>Hellow@gmail.com</p>
            </div>

            <div className="flex items-center gap-2 px-4 py-3 bg-[#fffbf9] rounded-xl border-2 border-neutral-800">
              <span className="h-10 p-2 bg-[#fff5ef] rounded-md border-2 border-neutral-800 justify-start items-start gap-2.5 inline-flex">
                <img src={Phone} />
              </span>
              <p>+250 796 140 857</p>
            </div>

            <div className="flex items-center gap-2 px-4 py-3 bg-[#fffbf9] rounded-xl border-2 border-neutral-800">
              <span className="h-10 p-2 bg-[#fff5ef] rounded-md border-2 border-neutral-800 justify-start items-start gap-2.5 inline-flex">
                <img src={Location} />
              </span>
              <p>Kigali, Kanombe</p>
            </div>

            <div className="flex items-center gap-2 px-4 py-3 bg-[#fffbf9] rounded-xl border-2 border-neutral-800">
              <span className="h-10 p-2 bg-[#fff5ef] rounded-md border-2 border-neutral-800 justify-start items-start gap-2.5 inline-flex">
                <img src={Time} />
              </span>
              <p>Office Hours - 9am - 6pm</p>
            </div>

          </div>

        </div>
      </div>

    </div>
  )
}
