"use client";

import ButtonComp from "./button";
import ImageComp from "./image";
import TextComp from "./text";
import Link from "next/link";

export default function ProjectCard({
  title,
  description,
  logo,
  image,
  redirectLink,
}: {
  title: string;
  description: string;
  logo: string[];
  image: string;
  redirectLink: string;
}) {
  return (
    <div className="xsm:w-full md:w-3/4 lg:w-1/2 border-2 rounded-md mx-auto bg-black text-white mb-12 mt-12">
      <ImageComp src={image} className="w-full rounded-md" />

      <div className="px-4">
        <TextComp
          text={title}
          className="text-center mt-4 mb-6 xsm:text-2xl xl:text-3xl font-bold tracking-wider "
        />
        <TextComp
          text={description}
          className="xsm:text-sm md:text-md lg:text-lg text-zinc-400"
        />
      </div>

      {/* Bottom Section  */}
      <div className="flex justify-evenly mt-4 mb-4">
        <div className="flex w-2/3 ">
          {logo.map((e) => {
            return <ImageComp src={e} className="ml-2 xsm:size-6 sm:size-8" />;
          })}
        </div>

        <div className="w-1/4">
          <Link href={redirectLink} target="_blank">
            <ButtonComp
              text="Visit"
              icon="up-arrow.svg"
              className="w-full bg-white text-black rounded-md"
              btnClassName="font-bold py-2 "
            />
          </Link>
        </div>
      </div>
    </div>
  );
}
