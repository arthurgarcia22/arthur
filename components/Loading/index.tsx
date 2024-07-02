import Image from "next/image";
import React from "react";
import { Logo } from "../Icons";

const LoadingComponent = () => {
  return (
    <div className="flex items-center justify-center m-auto h-full bg-white text-black opacity-90">
      <div className="animate-bounce ">
        <Logo width={300} />
      </div>

      <div className="flex gap-2 justify-center items-center bg-white h-screen ml-2">
        <div className="h-4 w-4 bg-black rounded-full animate-bounce mt-5 [animation-delay:-0.3s]"></div>
        <div className="h-4 w-4 bg-black rounded-full animate-bounce mt-5 [animation-delay:-0.15s]"></div>
        <div className="h-4 w-4 bg-black  rounded-full animate-bounce mt-5"></div>
      </div>
    </div>
  );
};

export default LoadingComponent;
