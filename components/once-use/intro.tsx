"use client";

import Link from "next/link";
import ButtonComp from "../re-use/button";
import TextComp from "../re-use/text";
import { TypewriterEffect } from "../ui/typewriter-effect";
import Follow from "./follow";

export default function Intro() {
  return (
    <div id="home">
      <div>
        <TextComp
          text="Bring your vision to real life website"
          className="text-center xsm:mb-8 xl:mb-12 text-white xsm:text-md md:text-lg xl:text-4xl"
        />

        {/* <Follow> */}
        <TypewriterEffect
          words={[
            {
              text: "Delivering",
              className:
                "text-purple-500 xsm:text-4xl sm:text-5xl md:text-5xl lg:text-7xl xl:text-8xl 2xl:text-9xl",
            },
            {
              text: "robust",
              className:
                "text-white xsm:text-4xl sm:text-5xl md:text-5xl lg:text-7xl xl:text-8xl 2xl:text-9xl",
            },
            {
              text: "And",
              className:
                "text-white xsm:text-4xl sm:text-5xl md:text-5xl lg:text-7xl xl:text-8xl 2xl:text-9xl",
            },
            {
              text: "scalable",
              className:
                "text-white xsm:text-4xl sm:text-5xl md:text-5xl lg:text-7xl xl:text-8xl 2xl:text-9xl",
            },
            {
              text: "websites",
              className:
                "text-purple-500 xsm:text-4xl sm:text-5xl md:text-5xl lg:text-7xl xl:text-8xl 2xl:text-9xl",
            },
          ]}
        />
        {/* </Follow> */}
        <TextComp
          text="I am Ankit Kashyap fullstack web developer"
          className="text-center xsm:mt-2 xl:mt-12 text-white xsm:text-sm md:text-lg xl:text-xl text-purple-400 text-bold"
        />

        <div className="xsm:mt-16 xl:mt-20 xl:mb-20">
          <Link
            href={"files/Ankit_Resume.pdf"}
            target="_blank"
            rel="noopener noreferre"
            download
          >
            <ButtonComp
              text="Download Cv"
              className="bg-purple-900 text-white xsm:text-md md:text-lg lg:text-xl h-12"
            />
          </Link>
        </div>
      </div>
    </div>
  );
}
