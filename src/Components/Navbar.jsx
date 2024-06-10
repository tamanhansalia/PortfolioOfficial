import React, { useState } from "react";
import { HiMenuAlt1 } from "react-icons/hi";
import { HiOutlineX } from "react-icons/hi";
import Hero from "./Hero";
import About from "./About";

function Navbar() {
  const [toggle, setToggle] = useState(false);
  const menuList = [
    {
      id: 1,
      name: "Home",
    },
    {
      id: 2,
      name: "About",
    },
    {
      id: 3,
      name: "Projects",
    },
    {
      id: 4,
      name: "Contact",
    },
  ];
  return (
    <div>
      <div
        className="fixed z-[200] top-0 flex w-full items-center justify-between px-5 py-5 bg-white drop-shadow-lg
      "
      >
        <h1 className="text-2xl font-bold">Taman.dev</h1>
        <ul className="md:flex md:ml-[30%] lg:flex lg:ml-[45%] hidden">
          {menuList.map((item) => (
            <li className="hover:text-blue-500 text-lg font-bold px-3 py-1 pb-2 rounded-full cursor-pointer">
              {item.name}
            </li>
          ))}
        </ul>
        <div className="md:hidden lg:hidden">
          {!toggle ? (
            <HiMenuAlt1
              className="text-2xl cursor-pointer "
              onClick={() => setToggle(!toggle)}
            />
          ) : (
            <HiOutlineX
              className="text-2xl mr-[-15px] cursor-pointer "
              onClick={() => setToggle(!toggle)}
            />
          )}

          {toggle ? (
            <ul className="flex flex-col gap-2 absolute ml-[-230px] mt-10 bg-gray-300 rounded-lg items-center">
              {menuList.map((item) => (
                <li className="hover:text-blue-500 text-5xl font-bold px-3 py-1 pb-2 rounded-full cursor-pointer">
                  {item.name}
                </li>
              ))}
            </ul>
          ) : null}
        </div>
      </div>
    </div>
  );
}

export default Navbar;
