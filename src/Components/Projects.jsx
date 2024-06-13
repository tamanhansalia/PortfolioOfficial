import React from "react";

const Projects = () => {
  return (
    <div id="projects">
      <div className="text-center bg-slate-100 py-16">
        <p>Browse My Recent</p>
        <h1 className=" text-5xl font-semibold">Projects</h1>
        <div className=" service-items px-20 flex flex-col mt-16 gap-4  items-center justify-between text-center md:flex-row">
          <div className="border-2 border-black rounded-3xl">
            <div className="p-9">
              <img
                className=" w-[300px] rounded-3xl "
                src="{'../assets/pp.jpg'}"
                alt=""
              />
            </div>
            <h2 className="text-2xl mb-5">Sparks Technology</h2>
            <div className="flex justify-center gap-10 mb-5 ">
              <button onClick={() => window.open('https://github.com/tamanhansalia/SparksTechnology', '_blank')}>Github</button>
              <button onClick={() => window.open('https://sparkstechnology.co.in', '_blank')}>Live Demo</button>
            </div>
          </div>
          <div className="border-2 border-black rounded-3xl">
            <div className="p-9">
              <img
                className=" w-[300px] rounded-3xl "
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/66/SMPTE_Color_Bars.svg/200px-SMPTE_Color_Bars.svg.png"
                alt=""
              />
            </div>
            <h2 className="text-2xl mb-5">Weekaway</h2>
            <div className="flex justify-center gap-10 mb-5 ">
              <button className="">Github</button>
              <button className="">Live Demo</button>
            </div>
          </div>
          <div className="border-2 border-black rounded-3xl">
            <div className="p-9">
              <img
                className=" w-[300px] rounded-3xl "
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/66/SMPTE_Color_Bars.svg/200px-SMPTE_Color_Bars.svg.png"
                alt=""
              />
            </div>
            <h2 className="text-2xl mb-5">Project-3</h2>
            <div className="flex justify-center gap-10 mb-5 ">
              <button className="">Github</button>
              <button className="">Live Demo</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
