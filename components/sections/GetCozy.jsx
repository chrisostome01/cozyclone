import Brand from "../ui/Brand";
import Button from "../ui/Button";
import Wrapper from "../ui/Wrapper";

export default function GetCozy() {
    return (
        <div className="bg-cozy bg-cozy-gray-100 px-2 top-0 relative bg-dope">
            <Wrapper className={"px-0 pl-5 md:pl-5"}>           
                <div className="py-6.25 flex flex-col lg:flex-row ">
                    <div className="lg:pl-[10vh] lg:w-[800px]  2xl:pl-[20vh]">
                        <div className="flex flex-col">
                            <h2 className="text-3xl text-[#223240]  tracking-[0.125rem] mb-4">
                                🌴🐻🇺🇸
                            </h2>
                            <div className="text-[#223240] leading-[1.1em] font-fraunces72 text-[70px] font-semibold mt-[40px] mb-[10px]">
                                Get Cozy
                            </div>                    
                            <div className="text-[#c47d57] font-fraunces72 leading-[54px] text-[37px] font-normal">
                                Design & digital marketing
                                <br></br>
                                in San Diego, California
                            </div>
                            <div className="mt-[40px] opacity-90 mb-[25px] font-normal font-fraunces72 text-[22px] leading-[1.6em] text-[#223240]">
                                <p className="mb-[15px]">
                                    We{"'"}re an award-winning design shop based in South Park, San Diego.
                                    We efficiently combine the best parts of user experience (UX) with
                                    creative design and execution to create effective collateral that 
                                    connects with the human beings who interact with them. 🤯
                                    <br></br>
                                    
                                </p>
                                <p className="mb-[15px]">
                                    No epic quests for inspiration. Just pragmatic collaboration and 
                                    efficient results from big-agency graduates with decades of experience.
                                    <br></br>
                                </p>
                            </div>
                            <Button className={" !bg-none "}>
                                <span className="leading-[1em]">
                                    Why we do what <br className="md:hidden"></br> we do
                                </span>
                            </Button>                       
                        </div>
                    </div>
                    <div className="lg:w-[400px]">
                        <Brand />
                    </div>
                </div>
             </Wrapper>
        </div>
    )
}