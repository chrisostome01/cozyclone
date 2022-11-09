/* eslint-disable @next/next/no-img-element */
import Wrapper from "../ui/Wrapper";

export default function Client() {
    return (
        <div className="py-[140px] px-6 bg-cozy-gray-100">
            <Wrapper className={"max-w-[1200px]"}>
                <div className="flex flex-col items-center justify-center">
                    <span className="text-[61px] text-[#223240] text-center leading-[65px] mt-[60px] mb-[30px] font-fraunces72">
                        ❤️ from our clients
                    </span>
                    <div className=" w-[40px] h-[4px] bg-[#d4ac8e] mt-[20px] mb-6"></div>
                </div>
                <div className="relative w-5/6 mx-auto ">
                    {/* ===== first client row ====== */}
                    <div className="grid grid-cols-1 lg:grid-cols-2">
                        <div className="m-[15px] bg-hero bg-3.1 self-end py-20 px-10 bg-[#223240] flex flex-col rounded-client-one shadow-client-one">
                            {/* profile */}
                            <img className="w-20 h-20 mb-6 border-4 border-white rounded-[20px] self-center" src="/profile/susie.webp" alt="client profile" />                           
                            {/* title */}
                            <div className="text-[#d4ac8e] mt-6 font-fraunces72 font-semibold text-right">
                                “One of the top design professionals…”
                            </div>
                            {/* description */}
                            <div className="mb-[15px] text-cozy-gray-100 font-normal font-fraunces72 leading-[1.6em] text-[18px] text-right">
                                I connect with hundreds of talented folks
                                on a regular basis, and I can say with 
                                complete confidence that Lee is one of
                                the best UX designers in Aquent/Vitamin 
                                T{"'"}s global network.
                            </div>
                            {/* client info */}
                            <div className=" tracking-[4px] uppercase font-bold text-cozy-gray-100 text-right font-geomanist text[12px]">
                                Susie Pollasky
                            </div>
                            <div className=" font-geomanist text-cozy-gray-100 text-[12px] font-normal text-right">
                                Now: Leadership Recruiting @ Product Design 
                                <br></br>
                                at Facebook
                            </div>
                        </div>
                        <div className="lg:pr-[100px]">
                            <div className="m-[15px] bg-hero bg-3.1 py-20 px-10 bg-[#2d4850] flex flex-col rounded-client-two shadow-client-two">
                                {/* profile */}
                                <img className="w-20 h-20 mb-6 border-4 border-white rounded-[20px] self-center" src="/profile/susie.webp" alt="client profile" />                           
                                {/* title */}
                                <div className="text-[#d4ac8e] mt-6 font-fraunces72 font-semibold text-left">
                                “They{"'"}re a very well-rounded organization…”
                                </div>
                                {/* description */}
                                <div className="mb-[15px] text-cozy-gray-100 font-normal font-fraunces72 leading-[1.6em] text-[18px] text-left">
                                    Cost per conversion and all of those metrics have
                                    dropped significantly. We used to pay an average of
                                    $100 per lead that converts… now we have that  down
                                    to about $20. Sessions and contacts have also gone up
                                    astronomically, at least threefold. Organic search and 
                                    social media referrals have all continued to skyrocket.
                                    We{"'"}re really pleased.
                                </div>
                                {/* client info */}
                                <div className=" tracking-[4px] uppercase font-bold text-cozy-gray-100 text-left font-geomanist text[12px]">
                                    Martin Spritzer
                                </div>
                                <div className=" font-geomanist text-cozy-gray-100 text-[12px] font-normal text-left">
                                    General Manager @ iQuoteXpress
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* ===== second client row ===== */}
                    <div className="grid grid-cols-1 lg:grid-cols-2">
                        <div className="lg:pl-[100px]" >
                            <div className="m-[15px] bg-hero bg-3.1 py-20 px-10 bg-[#c47d57] flex flex-col rounded-client-three shadow-client-three">
                                {/* profile */}
                                <img className="w-20 h-20 mb-6 border-4 border-white rounded-[20px] self-end" src="/profile/beb.webp" alt="client profile" />                           
                                {/* title */}
                                <div className="mt-6 font-semibold text-right text-white font-fraunces72">
                                    “They{"'"}re just good people.”
                                </div>
                                {/* description */}
                                <div className="mb-[15px] text-cozy-gray-100 font-normal font-fraunces72 leading-[1.6em] text-[18px] text-right">
                                    They were a pleasure to work with and I{"'"}m really happy with the results. They pretty much nailed it.
                                </div>
                                {/* client info */}
                                <div className=" tracking-[4px] uppercase font-bold text-cozy-gray-100 text-right font-geomanist text[12px]">
                                    Eric weiss
                                </div>
                                <div className=" font-geomanist text-cozy-gray-100 text-[12px] font-normal text-right">
                                    Founder @ Full Cycle Product Development
                                </div>
                            </div>
                        </div>
                        <div className="m-[15px] bg-hero bg-3.1 py-20 px-10 bg-[#b55730] flex flex-col  rounded-client-four shadow-client-four">
                            {/* profile */}
                            <img className="w-20 h-20 mb-6 border-4 border-white rounded-[20px] self-start" src="/profile/michael.webp" alt="client profile" />                           
                            {/* title */}
                            <div className="text-[#d4ac8e] mt-6 font-fraunces72 font-semibold text-left">
                                “The project was successful”
                            </div>
                            {/* description */}
                            <div className="mb-[15px] text-cozy-gray-100 font-normal font-fraunces72 leading-[1.6em] text-[18px] text-left">
                                They strive to come up with good design, and 
                                they focus on all the right things. The quality
                                of their work is high, and all the deliverables 
                                are very well-organized and professional.
                            </div>
                            {/* client info */}
                            <div className=" tracking-[4px] uppercase font-bold text-cozy-gray-100 text-left font-geomanist text[12px]">
                                Michael Weisfeld
                            </div>
                            <div className=" font-geomanist text-cozy-gray-100 text-[12px] font-normal text-left">
                                Director of Digital Marketing @ National Funding
                            </div>
                        </div>
                    </div>
                    <div className="absolute left-0 right-0 z-40  m-auto -translate-y-1/2 top-[58%] w-28 h-28 border border-cozy-gray-100 rounded-full p-[1px] hidden lg:flex items-center justify-center shadow-circle">
                        <div className="flex items-center justify-center w-20 h-20 bg-cozy-gray-100 rounded-full shadow-circle">
                            <img src="/icons/chat-icon.svg" alt="chat icon" />
                        </div>
                    </div>
                </div>
            </Wrapper>
        </div>
    )
}