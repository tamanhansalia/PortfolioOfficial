import React from "react";
import brominglogo from "../assets/brominglogo.png"; // Tell webpack this JS file uses this image
import waveawaylogo from "../assets/waveawaylogo.png"; // Tell webpack this JS file uses this image
import sparkslogo from "../assets/sparkslogo.jpg"; // Tell webpack this JS file uses this image

const Projects = () => {
  return (
    <div id="projects">
      <div className="text-center bg-slate-100 py-16">
        <p>Browse My Recent</p>
        <h1 className=" text-5xl font-semibold">Projects</h1>
        <div className=" service-items px-20 flex flex-col mt-16 gap-10 items-center justify-center text-center md:flex-col lg:flex-row">
          <div className="border-2 border-black rounded-3xl">
            <div className="mt-5 mx-9">
              <img
                className=" w-[300px] h-[280px] rounded-3xl object-cover"
                src={sparkslogo}
                alt=""
              />
            </div>
            <h2 className="text-2xl m-4">Sparks Technology</h2>
            <div className="flex justify-center gap-10 mb-5 ">
              <button
                onClick={() =>
                  window.open(
                    "https://github.com/tamanhansalia/SparksTechnology",
                    "_blank"
                  )
                }
              >
                Github
              </button>
              <button
                onClick={() =>
                  window.open("https://sparkstechnology.co.in", "_blank")
                }
              >
                Live Demo
              </button>
            </div>
          </div>
          <div className="border-2 border-black rounded-3xl">
            <div className="mt-5 mx-9">
              <img
                className=" w-[300px] h-[280px] object-cover rounded-3xl "
                src="https://images.unsplash.com/photo-1573843981267-be1999ff37cd?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt=""
              />
            </div>
            <h2 className="text-2xl m-4">Waveaway</h2>
            <div className="flex justify-center gap-10 mb-5 ">
              <button
                onClick={() =>
                  window.open(
                    " https://github.com/tamanhansalia/WaveAway-react",
                    "_blank"
                  )
                }
              >
                Github
              </button>
              <button
                onClick={() =>
                  window.open("https://waveaway.vercel.app/", "_blank")
                }
              >
                Live Demo
              </button>
            </div>
          </div>
          <div className="border-2 border-black rounded-3xl">
            <div className="mt-5 mx-9">
              <img
                className=" w-[300px] h-[280px] object-cover border-2 rounded-3xl bg-gray-900 "
                src={brominglogo}
                alt=""
              />
            </div>
            <h2 className="text-2xl m-4">Broming</h2>
            <div className="flex justify-center gap-10 mb-5 ">
              <button
                onClick={() => window.open("https://github.com/tamanhansalia", "_blank")}
              >
                Github
              </button>
              <button
                onClick={() => window.open("https://broming.in", "_blank")}
              >
                Live Demo
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
