import React from "react";
import { FaLinkedin } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";
import { SiGmail } from "react-icons/si";

const Footer = () => {
  return (
    <div className="bg-slate-100 md:flex md:justify-between md:items-center p-10 text-center">
      <p>Copyright © All rights are reserved</p>
      <div class="flex justify-center my-5 ">
        <a href="">
          <FiGithub className=" mx-2 my-auto text-3xl cursor-pointer hover:text-blue-500" />
        </a>
        <a href="">
          <FaLinkedin className=" mx-2 my-auto text-3xl cursor-pointer  hover:text-blue-500" />
        </a>
        <a href="mailto:taman.hansalia@gmail.com">
          <SiGmail className=" mx-2 my-auto text-3xl cursor-pointer  hover:text-blue-500" />
        </a>
      </div>
    </div>
  );
};

export default Footer;
