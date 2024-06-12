import React, { useState, useEffect } from "react";
import { BsChatSquareDots } from "react-icons/bs";
import {
  FaFacebook,
  FaInstagram,
  FaGooglePlusG,
  FaTwitter,
  FaBars,
} from "react-icons/fa";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };
  return (
    <div className="w-full min-h-[20px] flex justify-between items-center px-10 py-3 absolute z-10 text-black bg-white-700/80 shadow-lg ">
      <div className="flex justify-between">
        <h2 className="text-3xl font-bold">Taman.dev</h2>
      </div>
      <ul className="hidden sm:flex gap-5 text-lg">
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#projects">Projects</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>

      <div onClick={handleNav} className="sm:hidden z-10">
        <FaBars size={20} className="mr-4 cursor-pointer" />
      </div>

      {/* mobile view */}
      <div
        onClick={handleNav}
        className={
          nav
            ? "overflow-y-hidden md:hidden ease-in-out duration-300 absolute text-black left-0 top-0 w-full h-screen bg-white px-4 py-7 flex flex-col"
            : "absolute top-0 h-screen left-[-100%] ease-in-out duration-500"
        }
      >
        <ul className="h-full w-full text-center pt-12 ">
          <li className="text-2xl py-8">
            <a href="/">Home</a>
          </li>
          <li className="text-2xl py-8">
            <a href="#about">About</a>
          </li>
          <li className="text-2xl py-8">
            <a href="#projects">Projects</a>
          </li>
          <li className="text-2xl py-8">
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
