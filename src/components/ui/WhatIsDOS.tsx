import React from "react";
import { FocusCards } from "./FocusCard";

export default function whatisdos() {
  const cards = [
    {
      title: "Forest Adventure",
      desc: "Ab sfdhu hfdsa dsffds",
      src: "https://images.unsplash.com/photo-1518710843675-2540dd79065c",
    },
    {
      title: "Valley of life",
      desc: "Ab sfdhu hfdsa dsffds",
      src: "https://images.unsplash.com/photo-1600271772470-bd22a42787b3",
    },
    {
      title: "Sala behta hi jayega",
      desc: "Ab sfdhu hfdsa dsffds",
      src: "https://images.unsplash.com/photo-1505142468610-359e7d316be0",
    },
    {
      title: "Camping is for pros",
      desc: "Ab sfdhu hfdsa dsffds",
      src: "https://images.unsplash.com/photo-1486915309851-b0cc1f8a0084",
    },
    {
      title: "The road not taken",
      desc: "Ab sfdhu hfdsa dsffds",
      src: "https://images.unsplash.com/photo-1507041957456-9c397ce39c97",
    },
  ];
  return (
    <>
      <div className="h-[40rem] w-full bg-black flex flex-col items-center justify-center overflow-hidden rounded-md">
        <h2 className="absolute top-500 md:text-3xl text-1xl lg:text-4xl font-bold text-center text-white relative z-20">
          {" "}
          What is DevOpSha{" "}
        </h2>
        <br />
        <h6 className=" md:text-sm text-base lg:text-base text-center text-white relative z-20">
          {" "}
          The Future of DevOps Learning{" "}
        </h6>
        <br />
        <h6 className=" md:text-sm text-base lg:text-base text-center text-white relative z-20">
          {" "}
          Devopsha is an open-source DevOps education platform designed to
          provide high-quality, structured content for mastering modern DevOps
          practices{" "}
        </h6>
        <br />
        <br />
        <br />
        <FocusCards cards={cards} />
      </div>
    </>
  );
}
