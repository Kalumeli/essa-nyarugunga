import { NavLink } from "react-router-dom"
// import Logo from "../assets/Logo-lg.svg"
import Logo from "/assets/logo/Logo-lg.svg"
// import "./NavigationBar.module.css"
const NavigationBar = () => {
  return (

    // TODO: responsiveness
    <section className=" w-[98%] mx-auto">
      <nav className="flex items-center justify-between mt-4 border-2 border-black rounded-xl">

        {/* TODO: Logo here✅ */}
        <NavLink to="/" id="logo" className="h-20 bg-primary-65 border-l-2 border-r-2 border-neutral-800 justify-start items-center gap-2.5 inline-flex" style={{ borderRadius: "10px 0 0 10px" }}>
          <div className="flex items-center justify-center w-full h-full">
            <div className="relative flex items-center justify-center w-full h-10"><img src={Logo} alt="Logo" className="object-cover w-full h-full" /></div>
          </div>
        </NavLink>

        {/* links✅ */}
        <div className="flex items-center self-stretch justify-start">
          <NavLink to="/" className="self-stretch px-[24px] py-5  border-l-2 border-r-2 border-neutral-800 justify-start items-center gap-2.5 flex hover:bg-primary-90">
            <div className="text-neutral-800 text-xl font-medium font-mono leading-[30px]">Home</div>
          </NavLink>
          <NavLink to="/about" className="self-stretch px-[24px] py-5 border-r-2 border-neutral-800 justify-start items-center gap-2.5 flex hover:bg-primary-90">
            <div className="text-neutral-800 text-xl font-medium font-mono leading-[30px]">About Us</div>
          </NavLink>
          <NavLink to="/academics" className="self-stretch px-[24px] py-5 border-r-2 border-neutral-800 justify-start items-center gap-2.5 flex hover:bg-primary-90">
            <div className="text-neutral-800 text-xl font-medium font-mono leading-[30px]">Academics</div>
          </NavLink>
          <NavLink to="/admissions" className="self-stretch px-[24px] py-5 border-r-2 border-neutral-800 justify-start items-center gap-2.5 flex hover:bg-primary-90">
            <div className="text-neutral-800 text-xl font-medium font-mono leading-[30px]">Admissions</div>
          </NavLink>
          <NavLink to="/students" className="self-stretch px-[24px] py-5 border-r-2 border-neutral-800 justify-start items-center gap-2.5 flex hover:bg-primary-90">
            <div className="text-neutral-800 text-xl font-medium font-mono leading-[30px]">Student Life</div>
          </NavLink>
          <NavLink to="/contact" className="self-stretch px-[24px] py-5 bg-primary-70 border-neutral-800 justify-start items-center gap-2.5 flex" style={{ borderRadius: "0 10px 10px 0" }}>
            <div className="text-neutral-800 text-xl font-medium font-mono leading-[30px]">Contact</div>
          </NavLink>
        </div>
      </nav>
    </section>

  )
}

export default NavigationBar
