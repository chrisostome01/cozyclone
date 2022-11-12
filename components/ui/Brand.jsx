/* eslint-disable @next/next/no-img-element */
export default function Brand() {
    return (
        <div className="flex flex-col justify-center md:flex-row">
             <div className="flex flex-col items-center justify-center gap-10">
                <img className="w-[140px] h-[140px]" src="/cozy/clutch.webp" alt="brand" />
                <img className="w-[160px] h-[140px]" src="/cozy/diego_user.webp" alt="brand" />
                <img className="w-[140px] h-[140px]" src="/cozy/marketing.webp" alt="brand" />
                <img className="w-[140px] h-[140px]" src="/cozy/companies.webp" alt="brand" />
                
            </div>
            <div className="flex flex-col items-center justify-center gap-10">
                <div>
                    <img className="w-[140px] h-[140px]" src="/cozy/vector.svg" alt="brand" />
                    <p className=" text-cozy-brack-200 text-[14px] font-bold text-center font-opensans">BBB rating: A+</p>                
                </div>
                <img className="w-[140px] h-[140px]" src="/cozy/rate.webp" alt="brand" />
                <img className="w-[120px] h-[160px]" src="/cozy/vista-badge.png" alt="brand" />
                <img className="w-[140px] h-[140px]" src="/cozy/web-rate.png" alt="brand" />
                <img className="w-[150px] " src="/cozy/rush.webp" alt="brand" />
            </div>
        </div>
    )
}