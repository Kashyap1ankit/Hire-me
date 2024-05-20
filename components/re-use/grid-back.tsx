"use client";
import React from "react";

export function GridBackgroundDemo() {
  return (
    <div className="fixed inset-0 -z-10 h-full w-full ] dark:bg-black bg-primary  dark:bg-grid-white/[0.2] bg-grid-white/[0.2] flex items-center justify-center z-[-100]">
      {/* Radial gradient for the container to give a faded look */}
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-primary [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
    </div>
  );
}
