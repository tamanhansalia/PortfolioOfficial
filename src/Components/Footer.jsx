import React from "react";
import { FaLinkedin } from "react-icons/fa";
import { VscGithub } from "react-icons/vsc";
import { SiGmail } from "react-icons/si";

const Footer = () => {
  return (
    <div className="bg-slate-100 md:flex md:justify-between md:items-center p-10 text-center">
      <p>Copyright © All rights are reserved</p>
      <div className="flex justify-center items-center my-5 ">
        <a href="https://github.com/tamanhansalia">
          <VscGithub className=" mx-2 my-auto text-3xl cursor-pointer hover:text-blue-500" />
        </a>
        <a href="https://www.linkedin.com/in/taman-hansaliya">
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
