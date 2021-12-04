const Nav = () => {
  return (
    <header className="fixed w-full">
      <nav className="flex justify-between items-center xl:px-20 px-[15px] py-8 border-b border-gray-900">
        <h2 className="font-bold text-3xl">Oz.</h2>
        <div>
          <button className="flex justify-center items-center text-white w-12 h-12 sm:w-16 sm:h-16 relative focus:outline-none bg-white rounded-full p-4">
            <div className="relative w-full text-black">
              <span
                aria-hidden="true"
                className="block absolute -top-2 right-0 h-0.5 w-5 sm:w-7 bg-current transform transition duration-500 ease-in-out"
              ></span>
              <span
                aria-hidden="true"
                className="block absolute right-0 h-0.5 w-4 sm:w-5 bg-current transform transition duration-500 ease-in-out"
              ></span>
              <span
                aria-hidden="true"
                className="block absolute top-2 right-0 h-0.5 w-5 z bg-current transform  transition duration-500 ease-in-out"
              ></span>
            </div>
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Nav;
