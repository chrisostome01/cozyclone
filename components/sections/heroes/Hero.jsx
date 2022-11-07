/* eslint-disable @next/next/no-img-element */
import Button from "../../ui/Button";
import Wrapper from "../wrapper/Wrapper";

export default function Hero(){
    return (
        <div className="bg-gradient-hero min-h-max">
            <Wrapper className={""}>
                <div className="flex flex-col md:flex-row">
                    <div className="mb-[30px]">
                        <h1 className="mt-[80px] py-[10px] mb-[20px] leading-[1.1em] bg-[#d4ac8e] bg-hero text-[80px] font-bold bg-clip-text text-transparent ">
                            Your design team for the cost of a salary.
                        </h1>
                        <span className="my-[20px] py-[10px] bg-hero-1 bg-[#e4ded5]  bg-clip-text text-transparent text-[39px] font-semibold  ">
                            Full-service design support that growing B2B and non-profit organizations need. Are you strained because you should have a design team but you don{"'"}t?
                        </span>  
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
                    <div>
                        <img src="/getcozy.png" alt="get cozy" />
                    </div>
                </div>
            </Wrapper>
        </div>
    )
} 

