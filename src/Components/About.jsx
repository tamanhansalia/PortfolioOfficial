import React from "react";
import Navbar from "./Navbar";

const About = () => {
  return (
    <div id="about">
      <div className="container mx-auto h-full py-20 px-10 bg-white">
        <div className="flex flex-col lg:flex-row items-center gap-10 ">
          <div className="right ">
            <img
              className=" w-[500px] rounded-xl"
              src="https://static.vecteezy.com/system/resources/previews/029/846/795/large_2x/coffee-and-laptop-on-a-wooden-table-free-photo.jpg"
            />
          </div>
          <div className="left max-md:text-center">
            <h2 className="text-blue-500 font-bold py-2">Front-End Developer</h2>
            <h3 className="text-3xl font-bold pb-5">About Me</h3>
            <p>
              Hey, my name is Taman, I'm a Frontend Developer from India📍. 
              Creates and develop a clean UI/UX for my projects.
            </p>
            <br />
            <p>
              My main stack currently is React.js in combination with Tailwind for now
              CSS.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
