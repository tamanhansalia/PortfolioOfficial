import React from "react";
import { FaLinkedin } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";

const Footer = () => {
  return (
    <div className="bg-slate-100  px-24 py-12 ">
      <p>Copyright © 2024. All rights are reserved</p>
      <div class="flex justify-center">
        <a href="">
          <FiGithub className="mx-2 my-auto text-3xl cursor-pointer hover:text-blue-500" />
        </a>
        <a href="">
          <FaLinkedin className="mx-2 my-auto text-3xl cursor-pointer  hover:text-blue-500" />
        </a>
      </div>
    </div>
  );
};

export default Footer;
