import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const Nav = () => {
  const [openNav, setOpenNav] = useState(false);
  const showNav = () => {
    setOpenNav(!openNav);
  };

  return (
    <header className="fixed w-full z-30">
      <nav className={`wrapper relative mx-[15px] xl:mx-auto flex justify-between items-center ${openNav ? "border-0 sm:border": "border"} bg-header-bg border border-header_bg mt-5 rounded-lg px-4 py-2`}>
        <Link href="/">
          <a className="font-bold text-3xl z-30"> Oz. </a>
        </Link>
        <button
          className="relative w-12 h-12 sm:w-14 sm:h-14 focus:outline-none z-30 rounded-full bg-white text-black"
          onClick={showNav}
        >
          <div className="block w-7 absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <span
              aria-hidden="true"
              className={`block absolute h-0.5 w-7 bg-current transform transition duration-500 ease-in-out ${
                openNav ? "rotate-45" : "-translate-y-1.5"
              }`}
            ></span>
            <span
              aria-hidden="true"
              className={`block absolute h-0.5 w-7 bg-current transform transition duration-500 ease-in-out ${
                openNav && "opacity-0"
              }`}
            ></span>
            <span
              aria-hidden="true"
              className={`block absolute h-0.5 w-7 bg-current transform transition duration-500 ease-in-out ${
                openNav ? "-rotate-45" : "translate-y-1.5 "
              }`}
            ></span>
          </div>
        </button>

        <div
          className={`absolute transition-all bg-burger-bg right-0 px-4 py-2 top-0 h-96 w-full sm:w-1/3 lg:w-1/4 flex justify-start ${
            openNav ? "block" : "hidden"
          }`}
        >
          <div className="flex flex-col justify-center">
            <ul className="space-y-3 text-xl">
              <li className="hover:underline" onClick={showNav}>
                <Link href="/">
                  <a onClick={showNav}>Home</a>
                </Link>
              </li>
              <li className="hover:underline" onClick={showNav}>
                <Link href="/about">
                  <a onClick={showNav}>About Me</a>
                </Link>
              </li>
              <li className="hover:underline">
                <a
                  href="https://docs.google.com/document/d/10a6I0lJOP3cDdR3cy7X9NHNlZdXoE6nOC3xWAGGjds4/edit?usp=sharing"
                  target="blank"
                  onClick={showNav}
                >
                  Résumé
                </a>
              </li>
            </ul>

            <div className="mt-10">
              <p className="text-xl uppercase tracking-widest">Say hello:</p>

              <div className="flex items-center space-x-4 mt-4">
                <a
                  href="https://twitter.com/Obizim_"
                  target="blank"
                  className="text-xl flex items-center space-x-2 bg-header-bg p-3"
                  onClick={showNav}
                >
                  <Image
                    src="/images/twitter.svg"
                    alt="twiiter icon"
                    width="20px"
                    height="20px"
                  />
                </a>
                <a
                  href="https://www.linkedin.com/in/obizim/"
                  target="blank"
                  className="text-xl flex items-center space-x-2 bg-header-bg p-3"
                  onClick={showNav}
                >
                  <Image
                    src="/images/linkedin.svg"
                    alt="linkedin icon"
                    width="20px"
                    height="20px"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Nav;
