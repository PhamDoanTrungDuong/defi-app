import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

const Navbar: React.FC = () => {
  const [nav, setNav] = useState(false);
  const handleNav = () => {
    setNav(!nav);
  };
  return (
    <div className="w-full h-[90px] bg-black">
      <div className="max-w-[1240px] mx-auto px-4 flex justify-between items-center h-full">
        <div>
          <h1 className="text-[#00d8ff]">DEFI.</h1>
        </div>
        <div className="hidden md:flex">
          <ul className="flex text-white items-center font-medium">
            <li>Platform</li>
            <li>Developers</li>
            <li>Community</li>
            <li>About</li>
            <button className="ml-4">Use Defi</button>
          </ul>
        </div>
        {/* Mobile Menu */}
        <div onClick={() => handleNav()} className="block md:hidden">
          {!nav ? (
            <AiOutlineMenu
              size={30}
              className="cursor-pointer duration-300 text-white"
            />
          ) : (
            <AiOutlineClose
              size={30}
              className="cursor-pointer duration-300 text-white"
            />
          )}
        </div>
        <div className={nav ? "fixed duration-300 top-[90px] left-0 bg-black h-screen w-full" : "fixed duration-300 top-[90px] left-[-100%] bg-black h-screen w-full"}>
          <ul className="text-white flex flex-col items-center">
            <li className="text-2xl py-5">Platform</li>
            <li className="text-2xl py-5">Developers</li>
            <li className="text-2xl py-5">Community</li>
            <li className="text-2xl py-5">About</li>
            <button className="m-8">Use Defi</button>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
