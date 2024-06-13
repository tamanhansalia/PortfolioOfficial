import React from "react";
import { FaLinkedin } from "react-icons/fa";
import { VscGithub } from "react-icons/vsc";

const Hero = () => {
  return (
    <section id="home" className="h-full pt-32 pb-7 bg-slate-100">
      <div className="container mx-auto h-full lg:px-16">
        <div className="flex flex-col lg:flex-row items-center justify-around">
          <div className="left">
            <p className="py-3 ">Hi, I'm Taman Hansaliya.</p>
            <h1 className="flex">Front-End React </h1>
            <h1>Developer👋🏼</h1>
            <p className="py-3">
              I'm passionate about creating seamless web experiences.
            </p>
            <div className="flex pb-3 items-center">
              <a href="https://github.com/tamanhansalia">
                <VscGithub className="mx-2 text-[33px] cursor-pointer hover:text-blue-500" />
              </a>
              <a href="https://www.linkedin.com/in/taman-hansaliya">
                <FaLinkedin className="mx-2 text-[35px] cursor-pointer  hover:text-blue-500" />
              </a>
            </div>
            <button
              onClick={() =>
                window.open("https://sparkstechnology.co.in", "_blank")
              }
            >
              Resume
            </button>
          </div>
          <div className="right mt-12 md:mt-6 lg:mt-0">
            <div className="blob w-[300px] h-[300px] md:w-[400px] md:h-[400px]"></div>
          </div>
        </div>
      </div>
      <div>
        <div className="flex justify-center">
          <h3 className="text-xl text-center mt-24 border-b-2 border-gray-500 font-semibold">
            Tech Stack
          </h3>
        </div>
        <div className="flex flex-col md:flex-row items-center justify-center pt-5 pb-16">
          <div className="flex">
            <img
              className=" m-2 hover:duration-200 transform hover:scale-110 transition-all duration-300"
              src="https://skillicons.dev/icons?i=html,css"
            />
            <img
              className=" m-2 hover:duration-200 transform hover:scale-110 transition-all duration-300"
              src="https://skillicons.dev/icons?i=js,bootstrap"
            />
          </div>
          <div className="flex">
            <img
              className=" m-2 hover:duration-200 transform hover:scale-110 transition-all duration-300"
              src="https://skillicons.dev/icons?i=react,tailwind"
            />
            <img
              className="m-2 hover:duration-200 transform hover:scale-110 transition-all duration-300"
              src="https://skillicons.dev/icons?i=laravel,php"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
