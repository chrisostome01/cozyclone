/* eslint-disable @next/next/no-img-element */
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import Icon from "./Icon";
import Wrapper from "./Wrapper";

export default function Footer() {
    return (
        <div className="">
            <div className="bg-[#223240]">
                <Wrapper className={"flex flex-col items-center justify-center"}>
                    <span className="font-normal text-[#d4ac8e] opacity-80 font-fraunces72 text-[30px] leading-[1.1em] tracking-[.4px] mx-auto mt-[60px]">
                        More than 150 happy clients
                    </span>
                    <div className="py-[32px] px-2 flex flex-wrap lg:flex-nowrap justify-center">
                        <div className="mx-4 my-[17px] px-3 py-2">
                            <img className="w-[93px] h-[32px]" src="/icons/npcalogo.svg" alt="brand logo" />
                        </div>
                        <div className="mx-4 my-[17px] px-3 py-2">
                            <img className="w-[93px] " src="/icons/funding.svg" alt="brand logo" />
                        </div>
                        <div className="mx-4 my-[17px] px-3 py-2">
                            <img className="w-[150px] " src="/icons/lightstream.svg" alt="brand logo" />
                        </div>
                        <div className="mx-4 my-[17px] px-3 py-2">
                            <img className="w-[93px] " src="/icons/sapient.svg" alt="brand logo" />
                        </div>
                        <div className="mx-4 my-[17px] px-3 py-2">
                            <img className="w-[93px] " src="/icons/thermofisher.svg" alt="brand logo" />
                        </div>
                        <div className="mx-4 my-[17px] px-3 py-2">
                            <img className="w-[93px] " src="/icons/sony.svg" alt="brand logo" />
                        </div>
                        <div className="mx-4 my-[17px] px-3 py-2">
                            <img className="w-[54px] " src="/icons/sdge.svg" alt="brand logo" />
                        </div>
                    </div>
                </Wrapper>
            </div>
            <div className="relative flex items-center justify-center w-full lg:h-[500px] overflow-hidden py-10 px-5">
                <video className="absolute top-0 right-0 object-cover w-full h-full -z-10" playsInline muted  autoPlay loop >
                    <source className="min-w-full" src="/video/overlay.mp4" />
                </video>                
                <div className="absolute top-0 right-0 z-30 w-full h-full py-1 bg-black/70 bg-25 "></div>
                <div className="z-40 flex flex-col items-center justify-center lg:flex-row">
                    <div className="w-[120px]">
                        <img src="/icons/lockup.svg" alt="ssdd logo" />
                    </div>
                    <div className="text-cozy-gray-100  lg:pl-[100px] px-[40px] ">
                        <div className="text-[48px] leading-[1.1em] mt-12 font-fraunces72 mb-6">
                            <em>Psst…</em> 
                            <br></br>
                            are you a designer?
                        </div>
                        <div className="lg:w-[720px]  font-fraunces72 text-[20px] leading-[1.6em] font-normal">
                            Consider joining our {" "}
                            <Link className="text-[#d90f54] font-fraunces72 text-[20px] leading-[1.6em] font-normal" href={"/"}>
                                San Diego Design Designers
                            </Link> {" "}
                            group. More than 700 people, 
                            we meet online via Slack and 
                            in person at social events 
                            around the city. It{"'"}s a 
                            great opportunity to share 
                            ideas, get inspired, find 
                            support, and celebrate great design.
                        </div>                       
                    </div>
                </div>
            </div>
            <div className="bg-[#b55730]">
                <Wrapper>
                    <p className="text-center py-14 px-[53px] text-[#d4ac8e] text-[48px] font-fraunces72 font-black">
                        🙋 How can we help?
                    </p>
                </Wrapper>
            </div>
            <div className="border border-t-[#e2e7fb] bg-cozy-gray-100 pt-[48px] pb-[24px]">
                <Wrapper>
                    <div className="flex flex-col items-center justify-center lg:flex-row">
                        <div className="py-5 px-[15px] mr-[56px] ml-[15px] ">
                            <img className="w-[72px]" src="/footerLogo.svg" alt="Footer logo" />
                        </div>
                        <div className="flex flex-col items-center justify-center text-center lg:justify-between lg:flex-grow lg:flex-row">
                            <ul className="flex flex-col lg:flex-row justify-center items-center text-[#b55730]">
                                <li className="mr-[20px] lg:mr-[32px] py-[4px] text-[11px] font-bold leading-[1.2rem]">
                                    <Link href={"/"}>
                                        About
                                    </Link>
                                </li>
                                <li className="mr-[20px] lg:mr-[32px] py-[4px] text-[11px] font-bold leading-[1.2rem]">
                                    <Link href={"/"}>
                                        Service
                                    </Link>
                                </li>
                                <li className="mr-[20px] lg:mr-[32px] py-[4px] text-[11px] font-bold leading-[1.2rem]">
                                    <Link href={"/"}>
                                        Work
                                    </Link>
                                </li>
                                <li className="mr-[20px] lg:mr-[32px] py-[4px] text-[11px] font-bold leading-[1.2rem]">
                                    <Link href={"/"}>
                                        Blog
                                    </Link>
                                </li>
                                <li className="mr-[20px] lg:mr-[32px] py-[4px] text-[11px] font-bold leading-[1.2rem]">
                                    <Link href={"/"}>
                                        Contact
                                    </Link>
                                </li>                      
                            </ul> 
                            <div className="text-[#d90f54] flex items-center flex-col lg:flex-row">
                                <div className="flex">
                                    <img className="w-[20px] h-[20px] lg:ml-[16px]" src="/icons/sddd.webp" alt="dash icon" />
                                    <span>San Diego Digital Designers</span>
                                </div>
                                <div className="lg:pl-[40px] flex">
                                    <Icon bg={"bg-[#1da1f2]"} icon="/twitter.svg"  />
                                    <Icon bg={"bg-[#2977c9]"} icon="/linkedin.svg"  />
                                    <Icon bg={"bg-[#4267b2]"} icon="/facebook.svg"  />
                                    <Icon bg={"bg-[#e4405f]"} icon="/instagram.svg"  />
                                    <Icon bg={"bg-[#c4302b]"} icon="/youtube.svg"  />
                                    <Icon bg={"bg-[#16313a]"} icon="/clutch.svg"  />
                                    <Icon bg={"bg-[#223240]"} icon="/envelope.svg"  />
                                </div>
                            </div>                       
                        </div>
                    </div>
                    <div className="border-[#d4ac8e] border-t-2 mt-[40px] px-[15px]  flex items-center justify-between flex-col lg:flex-row">
                        <div className="flex items-center justify-center lg:justify-start gap-[40px] flex-wrap">
                            <span>
                                <img className="w-[140px] h-[140px]" src="/cozy/vector.svg" alt="brand" />          
                            </span>
                            <span>
                                <img className="w-[140px] " src="/icons/bod-new.png" alt="brand" />          
                            </span>
                            <span className="w-[300px]">
                                
                            </span>
                        </div>
                        <div className="flex items-center gap-[40px] flex-col lg:flex-row">
                            <div className="lg:flex lg:gap-[3px]  lg:text-[13px]  text-[#223240] font-normal lg:mr-4 font-fraunces72">
                                <span>Made with </span> {" "}
                                <span className="">
                                    <FontAwesomeIcon icon={faHeart} className="block text-red-500 cursor-pointer  text-[12px]" />
                                </span>{" "}                                   
                                <span> in beautiful, sunny San Diego. ©2021</span>
                            </div>
                            <ul className="flex text-[#b55730]">
                                <li className="mr-[20px] lg:mr-[32px] py-[4px] text-[11px] font-bold leading-[1.2rem]">
                                    <Link href={"/"}>
                                        Privacy
                                    </Link>
                                </li>
                                <li className="mr-[20px] lg:mr-[32px] py-[4px] text-[11px] font-bold leading-[1.2rem]">
                                    <Link href={"/"}>
                                        Photo credit
                                    </Link>
                                </li>                      
                            </ul>                                 
                        </div>
                    </div>
                </Wrapper>
            </div>
        </div>
    )
}