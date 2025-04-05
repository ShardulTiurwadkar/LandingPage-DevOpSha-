"use client";
import { SparklesCore } from "@/components/ui/sparkles";

export default function SparklesPreview() {
  return (
    <div className="h-[50rem] w-full bg-black flex flex-col items-center justify-center overflow-hidden rounded-md">
      {/* image */}
      <div className="flex items-center justify-center bg-black">
        <img
          src="../../../assets/images/devopsha_logo_new.jpeg"
          alt="Logo"
          className="w-[100px] h-[100px] object-cover rounded-lg shadow-lg bg-black"
        />
      </div>
      <br /> {/* need to change TEMP*/}
      <h2 className="md:text-3xl h-[10%] text-1xl lg:text-4xl text-center bg-gradient-to-r from-blue-400 via-purple-400 to-pink-500 bg-clip-text text-transparent relative z-20">
        {" "}
        We ae Launching Soon!{" "}
      </h2>
      <br /> {/* need to change TEMP*/}
      <br /> {/* need to change TEMP*/}
      {/* heading */}
      <h1 className="md:text-9xl text-5xl lg:text-12xl font-bold text-center text-white relative z-20">
        DEVOPSHA
      </h1>
      {/* sparkles */}
      <div className="w-[250rem] h-40 relative">
        {/* Gradients */}
        {/* <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-3/4 blur-sm" />
        <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-3/4" />
        <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] w-1/4 blur-sm" />
        <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-1/4" /> */}

        {/* 1: Indigo blur line (thick) */}
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-[85%] h-[2px] bg-gradient-to-r from-transparent via-indigo-500 to-transparent blur-sm" />

        {/* 2: Indigo sharp line (thin) */}
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-[85%] h-px bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />

        {/* 3: Sky blur line (thick) */}
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-[35%] h-[5px] bg-gradient-to-r from-transparent via-sky-500 to-transparent blur-sm" />

        {/* 4: Sky sharp line (thin) */}
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-[35%] h-px bg-gradient-to-r from-transparent via-sky-500 to-transparent" />

        {/* Core component */}
        <SparklesCore
          background="transparent"
          minSize={0.4}
          maxSize={1.2}
          particleDensity={1400}
          className="w-full h-full"
          particleColor="#FFFFFF"
        />

        {/* Radial Gradient to prevent sharp edges */}
        <div className="absolute inset-0 w-full h-full bg-black [mask-image:radial-gradient(350px_200px_at_top,transparent_20%,white)]"></div>
      </div>
      {/* sub heading */}
      <h3 className="relative bottom-20 text-blue-500	md:text-1xl text-1xl lg:text-2xl text-center relative z-20">
        Level up your DevOps skills like never before
      </h3>
      <br /> {/* need to change TEMP*/}
      {/* text */}
      <h3 className="relative bottom-20 text-cyan-200	md:text-1xl text-1xl lg:text-2xl text-center relative z-20">
        Master DevOps with hands-on labs, real-world projects, and expert-led
        content. <br />
        Stay tuned for the revolution in DevOps education
      </h3>
    </div>
  );
}
