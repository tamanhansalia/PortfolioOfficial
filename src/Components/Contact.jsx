import { useState, useEffect } from "react";
// npm install react-hook-form @web3forms/react
import { useForm } from "react-hook-form";
import { SiGmail } from "react-icons/si";
import { FaLinkedin } from "react-icons/fa";

import useWeb3Forms from "@web3forms/react";
import React from "react";

export default function Contact() {
  const { register, reset, handleSubmit } = useForm();

  const [isSuccess, setIsSuccess] = useState(false);
  const [result, setResult] = useState(null);

  const accessKey = "4bd1ab74-76be-45ab-858b-2d1c176cf0ea";

  const { submit: onSubmit } = useWeb3Forms({
    access_key: accessKey,
    settings: {
      from_name: "Acme Inc",
      subject: "New Contact Message from your Website",
      // ... other settings
    },
    onSuccess: (msg, data) => {
      setIsSuccess(true);
      setResult(msg);
      reset();
    },
    onError: (msg, data) => {
      setIsSuccess(false);
      setResult(msg);
    },
  });

  return (
    <div className="my-20" id="contact">
      <div className="text-center">
        <h5 className="text-gray-500 py-2 text-lg">
          Don't be shy Just Smash it!
        </h5>
        <h1 className="pb-5">Contact Me</h1>
      </div>

      <div className="flex flex-col justify-evenly items-center font-medium">
        <div className="left flex flex-col md:w-[350px]">
          <button className="group flex justify-center items-center w-auto m-2">
            <a
              className="flex items-center "
              href="mailto:taman.hansalia@gmail.com"
              target="_blank"
            >
              <SiGmail className="icons mx-2 my-auto text-2xl cursor-pointer " />
              taman.hansalia@gmail.com
            </a>
          </button>
          <button className="flex group justify-center items-center w-auto m-2">
            <a
              className="flex  items-center"
              href="https://www.linkedin.com/in/taman-hansaliya/"
              target="_blank"
            >
              <FaLinkedin className="icons mx-2 my-auto text-2xl cursor-pointer " />
              TAMAN HANSALIYA
            </a>
          </button>
        </div>

        
      </div>
    </div>
  );
}
