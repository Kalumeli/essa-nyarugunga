import Illustration from "/assets/illustrations/1.svg"

export default function Globe({ flip }) {
    return (
        <>
            <div className={`absolute h-full w-[140px] ${!flip ? "left-[400px]" : "right-[300px] bottom-[-23px]"}`}>
                <img src={Illustration} className={`relative object-cover ${!flip ? "w-[50px] h-[50px]" : "w-[30px] h-[30px]"} opacity-70`} style={{ objectPosition: "100% 100%", borderRadius: "10px 0 0 10px" }} />
            </div>
        </>
    )
}
