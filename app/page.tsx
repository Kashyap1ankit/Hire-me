import "./globals.css";
import Navbar from "@/components/re-use/navbar";
import React from "react";
import { TypewriterEffect } from "@/components/ui/typewriter-effect";
import TextComp from "@/components/re-use/text";
import ButtonComp from "@/components/re-use/button";

export default function Home() {
  return (
    <div className="overflow-x-hidden">
      <div className="xsm:mb-32 md:mb-44 xl:mb-52">
        <Navbar />
      </div>
      <div>
        <TextComp
          text="Bring your vision to real life website"
          className="text-center xl:mb-12 text-white xsm:text-md md:text-lg xl:text-4xl"
        />
        <TypewriterEffect
          words={[
            {
              text: "Delivering ",
              className: "text-purple-500 xsm:text-xl md:text-7xl",
            },
            { text: "robust", className: "text-white xsm:text-xl md:text-7xl" },
            { text: "and ", className: "text-white xsm:text-xl md:text-7xl" },
            {
              text: "scalable",
              className: "text-white xsm:text-xl md:text-7xl",
            },
            {
              text: "websites",
              className: "text-purple-500 xsm:text-xl md:text-7xl",
            },
          ]}
        />
        <TextComp
          text="I am Ankit Kahsyap a fullstack web developer"
          className="text-center xl:mt-12 text-white xl:text-2xl text-purple-400 text-bold"
        />
      </div>

      <div className="xl:mt-28">
        <ButtonComp
          text="Get In Touch"
          className="bg-purple-900 text-white xl:text-xl "
        />
      </div>
    </div>
  );
}
