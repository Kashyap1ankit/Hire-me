import "./globals.css";
import Navbar from "@/components/re-use/navbar";
import React from "react";
import Intro from "@/components/once-use/intro";
export default function Home() {
  return (
    <div className="overflow-x-hidden">
      <div className="xsm:mb-32 md:mb-44 xl:mb-40">
        <Navbar />
      </div>
      <Intro />
    </div>
  );
}
