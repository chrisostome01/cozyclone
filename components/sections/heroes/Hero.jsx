/* eslint-disable @next/next/no-img-element */
import Button from "../../ui/Button";
import Wrapper from "../../ui/Wrapper";

export default function Hero(){
    return (
        <div className="lg:h-[1024px]  min-h-[720px] overflow-hidden bg-gradient-hero ">
            <Wrapper className={"h-full relative"}>
                <div className="flex flex-col md:flex-row mt-[48px] mb-[128px] px-2 lg:mb-0 ">
                    <div className="mb-[30px] lg:w-1/2  lg:mb-0 lg:pr-[60px]">
                        <h1 className="mt-[80px] py-[10px] mb-[20px] font-fraunces144 font-black leading-[1.1em] bg-[#d4ac8e] bg-hero text-[60px] md:text-[80px] bg-clip-text text-transparent ">
                            Your design team for the cost of a salary.
                        </h1>
                        <div className="my-[20px] leading-[1.3em] opacity-60 py-[10px] w-auto h-auto font-fraunces72  bg-hero bg-cozy-gray-100 text-cozy-gray-100 bg-clip-text text-transparent text-[36px] md:text-[39px] font-semibold  ">
                            Full-service design support that growing B2B and non-profit organizations need. Are you strained because you should have a design team but you don{"'"}t?
                        </div>  
                        <div className="hidden md:block">
                            <Button>
                                <span>
                                    See how we work & what we can do
                                </span>
                            </Button>
                        </div>                                   
                    </div>
                    <div className="block md:hidden">
                        <Button>
                            <span>
                                See how we work & what we can do
                            </span>
                        </Button>
                    </div>
                    <div className="-mb-[240px] mt-[80px] lg:w-1/2 lg:m-0">
                        <img className="min-w-[120%] h-full lg:top-0 lg:static lg:mt-[220px]" src="/getcozy.png" alt="get cozy" />
                    </div>
                </div>
            </Wrapper>
        </div>
    )
} 

