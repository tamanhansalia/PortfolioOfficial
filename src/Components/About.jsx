import React from "react";
import Navbar from "./Navbar";

const About = () => {
  return (
    <div id="about">
      <div className="container mx-auto h-full py-24 px-20 bg-white">
        <div className="flex flex-col lg:flex-row items-center md:gap-10">
          <div className="right ">
            <img
              className=" w-[500px] rounded-xl"
              src="https://static.vecteezy.com/system/resources/previews/029/846/795/large_2x/coffee-and-laptop-on-a-wooden-table-free-photo.jpg"
            />
          </div>
          <div className="left r mx-auto flex-col w-[500px]">
            <h1 className="my-5">About Me</h1>
            <p>
              Hello, My name is Taman Hansaliya from INDIA.📍
              <p className="my-2">My main stack is currently React. JS and tailwind CSS.</p>
              <p>
                Creating a clean and clear UI for my projects.
              </p>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
