import { useState } from "react";

const Nav = () => {
  const [openNav, setOpenNav] = useState(false)

  const showNav = () => {
    setOpenNav(!openNav)
  }

  return (
    <header className="fixed w-full">
      <nav className="wrapper mx-[15px] xl:mx-auto flex justify-between items-center bg-header-bg border border-header_bg mt-5 rounded-lg px-4 py-2">
        <h2 className="font-bold text-3xl">Oz.</h2>
          <button className="relative text-black w-12 h-12 sm:w-14 sm:h-14 focus:outline-none bg-white rounded-full" onClick={showNav}>
            <div className="block w-7 absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <span
                aria-hidden="true"
                className={`block absolute h-0.5 w-7 bg-current transform transition duration-500 ease-in-out ${openNav ? 'rotate-45' :  '-translate-y-1.5'}`}
              ></span>
              <span
                aria-hidden="true"
                className={`block absolute h-0.5 w-7 bg-current transform transition duration-500 ease-in-out ${openNav && 'opacity-0'}`}
              ></span>
              <span
                aria-hidden="true"
                className={`block absolute h-0.5 w-7 bg-current transform transition duration-500 ease-in-out ${openNav ? '-rotate-45' : 'translate-y-1.5 '}`}
              ></span>
            </div>
          </button>
      </nav>
    </header>
  );
};

export default Nav;
