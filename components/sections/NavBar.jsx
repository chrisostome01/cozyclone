/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import Wrapper from "../ui/Wrapper";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {  faBars } from "@fortawesome/free-solid-svg-icons";

export default function NavBar() {
    return (
        <div className="fixed top-0 z-50 w-full bg-gradient-main">
            <Wrapper className={"!max-w-312 pr-6 pl-10 "}>
                <div className="flex items-center justify-center lg:justify-between">
                    <div className="px-4 py-5">
                        <Link href={"/"}>
                            <img className="w-[130px] h-[68.6px] " src="/logo.svg" alt="cozy logo"/>
                        </Link>    
                    </div>
                    <nav className="hidden md:flex text-cozy-gray-100">
                        <Link className="px-4 py-7 font-fraunces72 text-[25px] leading-[25px] font-semibold transition-all hover:mt-[-2px]" href={"/"}>
                            Get Cozy
                        </Link>
                        <Link className="px-4 py-7 font-fraunces72 text-[25px] leading-[25px] font-semibold transition-all hover:mt-[-2px]" href={"/"}>
                            What we do
                        </Link>
                        <Link className="px-4 py-7 font-fraunces72 text-[25px] leading-[25px] font-semibold transition-all hover:mt-[-2px]" href={"/"}>
                            Our work
                        </Link>
                        <Link className="px-4 py-7 font-fraunces72 text-[25px] leading-[25px] font-semibold transition-all hover:mt-[-2px]" href={"/"}>
                            The blog
                        </Link>
                        <Link className="px-4 py-7 font-fraunces72 text-[25px] leading-[25px] font-semibold transition-all hover:mt-[-2px]" href={"/"}>
                            Say hi
                        </Link>
                    </nav>
                    <div className="p-[18px] ml-[16px] md:!hidden">
                        <FontAwesomeIcon icon={faBars} className="block text-cozy-gray-100 cursor-pointer  text-[30px]" />
                    </div>
                </div>
            </Wrapper>            
        </div>
    )
}