/* eslint-disable @next/next/no-img-element */
export default function Icon({ icon , bg }){
    return(
        <div className={` mx-1 ${bg} w-6 h-6 rounded-[3px] flex items-center justify-center`}>
            <img className="w-[12px] h-[12px]" src={`/icons/${icon}`} alt="twitter icons"  />
        </div>
    )
}