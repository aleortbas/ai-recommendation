import React from "react";
import {
  UserGroupIcon,
  HomeIcon,
  DocumentDuplicateIcon,
} from "@heroicons/react/24/outline";
import Image from "next/image";

const links = [
  { name: "Home", href: "/", icon: HomeIcon },
  {
    name: "About",
    href: "/about",
    icon: DocumentDuplicateIcon,
  },
  { name: "Pages", href: "/dashboard/customers", icon: UserGroupIcon },
];

const linkToSing = [
  { name: "Login", href: "/login" },
  { name: "Sign Up", href: "/login/signUp" },
];

export default function NavBar() {
  return (
    <>
      <nav className="bg-white dark:bg-[#111022] fixed w-full z-20 top-0 start-0 border-b border-gray-200 dark:border-gray-600">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <a
            href="https://flowbite.com/"
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <img
              src="https://flowbite.com/docs/images/logo.svg"
              className="h-8"
              alt="Flowbite Logo"
            />
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
              Flowbite
            </span>
          </a>
          <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
            <button
              type="button"
              className="text-white bg-inherit border-2 border-transparent transition duration-500 hover:border-[#fd7e14] hover:text-[#fd7e14] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center"
            >
              Login
            </button>
            <button
              type="button"
              className="text-white bg-inherit border-2 border-transparent transition duration-500 hover:border-[#fd7e14] hover:text-[#fd7e14] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center "
            >
              Sign Up
            </button>
          </div>
          <div
            className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
            id="navbar-sticky"
          >
            <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium rounded-lg  md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0  md:bg-white dark:bg-gray-800 md:dark:bg-[#111022] ">
              <li>
                {links.map((link) => {
                  return (
                    <a
                      href={link.href}
                      key={link.name}
                      className="group relative inline-block overflow-hidden rounded px-12 py-3 text-sm font-medium text-white  active:text-white"
                    >
                      <span className="ease absolute bottom-0 right-0 h-0 w-0 border-b-2 border-white transition-all duration-500 group-hover:w-full"></span>
                      {link.name}
                    </a>
                  );
                })}
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
