import React from "react";
import { FaLinkedin } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";

const Hero = () => {
  return (
    <section id="home" className="h-full pt-28 pb-7 bg-slate-100">
      <div className="container mx-auto h-full lg:px-16">
        <div className="flex flex-col lg:flex-row items-center gap-10">
          <div className="left  text-center">
            <h1 className="flex">Front-End React Developer</h1>
            <p className="py-5 px-7">
              Hi, I'm Taman Hansaliya. A passionate Front-end React Developer
            </p>
            <div class="flex justify-center py-5">
              <a href="">
                <FiGithub className="mx-2 my-auto text-3xl cursor-pointer hover:text-blue-500" />
              </a>
              <a href="">
                <FaLinkedin className="mx-2 my-auto text-3xl cursor-pointer  hover:text-blue-500" />
              </a>
            </div>
          </div>
          <div className="right">
            <div class="blob w-[250px] h-[250px] md:w-[400px] md:h-[400px]"></div>
          </div>
        </div>
      </div>
      <div>
        <h3 className="text-center mt-10 underline font-semibold">
          Tech Stack
        </h3>
        <div className="flex flex-col md:flex-row items-center justify-center pt-10 pb-16">
          <div className="flex">
            <img
              className="m-2 cursor-pointer hover:duration-200 transform hover:scale-110 transition ease-in-out	"
              src="https://skillicons.dev/icons?i=html,css"
            />
            <img
              className="m-2 cursor-pointer hover:duration-200 transform hover:scale-110 transition ease-in-out"
              src="https://skillicons.dev/icons?i=js,bootstrap"
            />
          </div>
          <div className="flex">
            <img
              className="m-2 cursor-pointer hover:duration-200 transform hover:scale-110 transition ease-in-out"
              src="https://skillicons.dev/icons?i=react,tailwind"
            />
            <img
              className="m-2 cursor-pointer hover:duration-200 transform hover:scale-110 transition ease-in-out"
              src="https://skillicons.dev/icons?i=laravel,php"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
