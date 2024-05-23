"use client";
import React from "react";
import TextComp from "./text";
import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });
import Link from "next/link";

export default function Navbar({ className }: { className?: string }) {
  return (
    <div className="flex justify-evenly fixed top-4  bg-navPrimary p-4 rounded-md xsm:w-11/12 xsm:mx-4 md:w-fit md:inset-x-1/4 lg:inset-x-1/3 xl:w-fit xl:mx-28 z-50">
      <Link href={"#home"}>
        <TextComp
          text={"Home"}
          className="mr-8 cursor-pointer text-white opacity-75"
          motion={true}
        />
      </Link>

      <Link href={"#skills"}>
        <TextComp
          text={"Skills"}
          className="mr-8 cursor-pointer text-white opacity-75"
          motion={true}
        />
      </Link>

      <Link href={"#projects"}>
        <TextComp
          text={"Projects"}
          className={`mr-8 cursor-pointer text-white opacity-75 ${inter.className}`}
          motion={true}
        />
      </Link>

      <Link href={"/contact"}>
        <TextComp
          text={"Hire"}
          className="cursor-pointer text-white opacity-75"
          motion={true}
        />
      </Link>
    </div>
  );
}
