import { useState, useEffect } from "react";
// npm install react-hook-form @web3forms/react
import { useForm } from "react-hook-form";
import { SiGmail } from "react-icons/si";

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
    <div id="contact">
      <div className="py-20 px-10 md:px-40 lg:px-72 font-medium">
        <div className="left text-center">
          <h5 className="text-gray-500 py-2 text-lg">
            Don't be shy Just Smash it!
          </h5>
          <h3 className="text-4xl font-semibold pb-5">Contact</h3>
        </div>
        <form className="flex flex-col " onSubmit={handleSubmit(onSubmit)}>
          <input
            className="border-2 my-3 p-3 border-gray-900 rounded-xl"
            type="text"
            placeholder="Name"
            {...register("name", { required: true })}
          ></input>
          <input
            className="border-2 my-3 p-3 border-gray-900 rounded-xl"
            type="email"
            placeholder="email"
            {...register("email", { required: true })}
          ></input>
          <textarea
            className="border-2 my-3 p-3 border-gray-900 rounded-xl"
            placeholder="message"
            {...register("message", { required: true })}
          ></textarea>
          <div className="flex flex-col md:flex items-center justify-center gap-5">
            <button
              className="  bg-blue-500 text-white font-bold hover:bg-blue-600"
              type="submit"
            >
              Submit
            </button>
              <button className="flex w-auto">
                <a href="mailto:taman.hansalia@gmail.com">
                  <SiGmail className="mx-2 my-auto text-2xl cursor-pointer  hover:text-blue-500" />
                </a>
                taman.hansalia@gmail.com
              </button>
          </div>
          <div id="hideDiv" className="font-bold text-center text-green-500">
            {result}
          </div>
        </form>
      </div>
    </div>
  );
}
