/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import Wrapper from "./wrapper/Wrapper";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {  faBars } from "@fortawesome/free-solid-svg-icons";

export default function NavBar() {
    return (
        <div className="fixed top-0 w-full bg-gradient-main">
            <Wrapper className={"!max-w-312 pr-6 pl-10 "}>
                <div className="flex items-center justify-center lg:justify-between">
                    <Link href={"/"}>
                        <img className="w-[100px] px-4 py-5" src="/logo.svg" alt="cozy logo"/>
                    </Link>    
                    <nav className="hidden md:flex text-cozy-gray-100">
                        <Link className="px-4 py-7" href={"/"}>
                            Get Cozy
                        </Link>
                        <Link className="px-4 py-7" href={"/"}>
                            What we do
                        </Link>
                        <Link className="px-4 py-7" href={"/"}>
                            Our work
                        </Link>
                        <Link className="px-4 py-7" href={"/"}>
                            The blog
                        </Link>
                        <Link className="px-4 py-7" href={"/"}>
                            Say hi
                        </Link>
                    </nav>
                    <FontAwesomeIcon icon={faBars} className="block text-cozy-gray-100 cursor-pointer md:!hidden" />
                </div>
            </Wrapper>            
        </div>
    )
}