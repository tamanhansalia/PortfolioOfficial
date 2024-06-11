import { useState, useEffect } from "react";
// npm install react-hook-form @web3forms/react
import { useForm } from "react-hook-form";
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
      if (setIsSuccess(true)) {
        msg = className = "text-green-500";
      } else {
        msg = className = "text-red-500";
      }
    },
    onError: (msg, data) => {
      setIsSuccess(false);
      setResult(msg);
    },
  });

  return (
    <div id="contact">
      <div className="py-20 px-10 md:px-40 lg:px-72">
        <div className="left max-md:text-center">
          <h2 className="text-blue-500 font-bold py-2">Don't be shy Just Smash it!</h2>
          <h3 className="text-3xl font-bold pb-5">Contact</h3>
        </div>
        <form className="flex flex-col " onSubmit={handleSubmit(onSubmit)}>
          <input
            className="border-2 my-3 p-3 border-slate-400 rounded-lg"
            type="text"
            placeholder="Name"
            {...register("name", { required: true })}
          ></input>
          <input
            className="border-2 my-3 p-3 border-slate-400 rounded-lg"
            type="email"
            placeholder="email"
            {...register("email", { required: true })}
          ></input>
          <textarea
            className="border-2 my-3 p-3 border-slate-400 rounded-lg"
            placeholder="message"
            {...register("message", { required: true })}
          ></textarea>
          <button
            className="px-5 py-2 my-3 border-2 border-black rounded-lg mx-auto bg-blue-500 text-white font-bold hover:bg-blue-600"
            type="submit"
          >
            Submit
          </button>
          <div id="hideDiv" className="font-bold text-center">
            {result}
          </div>
        </form>
      </div>
    </div>
  );
}
