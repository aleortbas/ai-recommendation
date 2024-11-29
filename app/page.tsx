import Link from "next/link";
import { IoMdAdd } from "react-icons/io";
import Image from "next/image";
import { MdOutlinePhoneIphone } from "react-icons/md";
import { FaMusic } from "react-icons/fa";
import { IoCarSportSharp, IoNewspaper } from "react-icons/io5";
import { GiWatch } from "react-icons/gi";
import { FaComputer } from "react-icons/fa6";
import Carousel from "./ui/dashboard/carousel";
import Cards from "./ui/dashboard/cards";
import React from "react";

const linkToSing = [
  { name: "Music", href: "/music", icon: <FaMusic /> },
  { name: "News", href: "/news", icon: <IoNewspaper /> },
  { name: "Watch", href: "/watch", icon: <GiWatch /> },
  { name: "Cars", href: "/cars", icon: <IoCarSportSharp /> },
  { name: "Phones", href: "/phones", icon: <MdOutlinePhoneIphone /> },
  { name: "PC", href: "/pc", icon: <FaComputer /> },
];

console.log("aqui");

export default function Page() {
  return (
    <>
      <div className="w-4/5 m-auto">
        <div className="grid justify-items-center text-white bg-inherit">
          <h1>Explore the Possibilities of</h1>
          <h1>
            AI with<span className="text-[#fd7e14]">FlowAI</span>
          </h1>
          <button className="bg-[#8F79FF] flex items-center justify-center rounded-md w-36 h-8">
            <IoMdAdd /> sapas
          </button>
        </div>
        <div className="container grid grid-cols-2 mt-3 m-auto bg-inherit md:w-full">
          {linkToSing.slice(0, 2).map((link) => {
            return (
              <a href={link.href}>
                <div className="border-solid border-2 border-red-600 w-full text-white">
                  {link.icon} {link.name}
                </div>
              </a>
            );
          })}
        </div>
        <div className="container grid grid-cols-3 m-auto h-auto bg-inherit md:w-full">
          {linkToSing.slice(2, 4).map((link) => {
            if (link.name === "Watch") {
              return (
                <>
                  <a href={link.href}>
                    <div className="border-solid border-2 h-full border-red-600 w-full text-white">
                      {link.icon} {link.name}
                    </div>
                  </a>
                  <div className="border-solid border-2 border-red-600 w-full">
                    <Image
                      src="/rb_3796.png"
                      width={1000}
                      height={760}
                      className="hidden md:block"
                      alt="Screenshots of the dashboard project showing desktop version"
                    />
                  </div>
                </>
              );
            }
            return (
              <a href={link.href}>
                <div className="border-solid border-2 h-full border-red-600 w-full text-white">
                  {link.icon} {link.name}
                </div>
              </a>
            );
          })}
        </div>
        <div className="container grid grid-cols-2 m-auto bg-inherit md:w-full">
          {linkToSing.slice(4, 6).map((link) => {
            return (
              <a href={link.href}>
                <div className="border-solid border-2 border-red-600 w-full text-white">
                  {link.icon} {link.name}
                </div>
              </a>
            );
          })}
        </div>
        <div className="grid justify-items-center text-white bg-inherit">
          <p className="text-[#fd7e14]">All AI Platform</p>
          <h1>All Possible Generative AI Solutions at One Place</h1>
        </div>
        <Carousel />
        <div className="grid justify-items-center text-white bg-inherit">
          <p className="text-[#fd7e14]">Frequently Asked Questions</p>
          <h1>Questions About our AI?</h1>
          <h1>We have answers!</h1>
        </div>
        <Cards />
      </div>
    </>
  );
}
