"use client";
import { m, motion } from "framer-motion";
import TextComp from "../re-use/text";
import ButtonComp from "../re-use/button";

export default function Skills() {
  const tech = [
    {
      name: "JavaScript",
      logo: "js.svg",
    },
    {
      name: "TypeScript",
      logo: "type.svg",
    },
    {
      name: "Reactjs",
      logo: "react.svg",
    },
    {
      name: "Nextjs",
      logo: "next.svg",
    },
    {
      name: "Nodejs",
      logo: "node.svg",
    },
    {
      name: "Express",
      logo: "express.svg",
    },
    {
      name: "Cloudflare",
      logo: "cloudflare.svg",
    },
    {
      name: "Postgres",
      logo: "postgres.svg",
    },
    {
      name: "MongoDB",
      logo: "mongodb.svg",
    },
    {
      name: "Prisma",
      logo: "prisma.svg",
    },
    {
      name: "Bootstrap",
      logo: "bootstrap.svg",
    },
    {
      name: "Tailwind",
      logo: "tailwind.svg",
    },
    {
      name: "Recoil",
      logo: "recoil.svg",
    },

    {
      name: "Git",
      logo: "git.svg",
    },
    {
      name: "Npm",
      logo: "npm.svg",
    },
    {
      name: "More",
      logo: "more.svg",
    },
  ];

  const colors = ["zinc", "red", "amber", "lime", "violet", "purple", "rose"];

  console.log(Math.floor(Math.random() * 4 + 1));
  return (
    <div className="mb-4 xsm:mt-20 lg:mt-32" id="skills">
      <TextComp
        text="~ My Tech Stack ~"
        className="xsm:text-3xl md:text-4xl  lg:text-5xl text-white font-bold text-center xsm:mb-16 xl:mb-28"
      />

      <div className="w-full flex justify-center">
        {/* <CardStackDemo /> */}
        <div className="xsm:mx-2  grid xsm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {tech.map((e: { name: string; logo: string }) => {
            return (
              <motion.div
                whileInView={{
                  x: [50, 0],
                }}
                transition={{
                  duration: 1,
                }}
                drag
                dragConstraints={{
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                }}
              >
                <ButtonComp
                  text={e.name}
                  icon={e.logo}
                  className={`border-${
                    colors[Math.floor(Math.random() * colors.length + 1)]
                  }-500 text-white xsm:text-md md:text-lg lg:text-xl border-b-8 border-r-8 py-1 xsm:w-full xsm:mx-auto xl:w-full rounded-md bg-skillBtn px-2 font-bold hover:scale-110 duration-700`}
                />
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
