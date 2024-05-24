"use client";
import { m, motion } from "framer-motion";
import TextComp from "../re-use/text";
import ButtonComp from "../re-use/button";

export default function Skills() {
  const tech = [
    { id: 0, name: "JavaScript", logo: "js.svg" },
    {
      id: 1,
      name: "TypeScript",
      logo: "type.svg",
    },
    {
      id: 2,
      name: "Reactjs",
      logo: "react.svg",
    },
    {
      id: 3,
      name: "Nextjs",
      logo: "next.svg",
    },
    {
      id: 4,
      name: "Nodejs",
      logo: "node.svg",
    },
    {
      id: 5,
      name: "Express",
      logo: "express.svg",
    },
    {
      id: 6,
      name: "Cloudflare",
      logo: "cloudflare.svg",
    },
    {
      id: 7,
      name: "Postgres",
      logo: "postgres.svg",
    },
    {
      id: 8,
      name: "MongoDB",
      logo: "mongodb.svg",
    },
    {
      id: 9,
      name: "Prisma",
      logo: "prisma.svg",
    },
    {
      id: 10,
      name: "Bootstrap",
      logo: "bootstrap.svg",
    },
    {
      id: 11,
      name: "Tailwind",
      logo: "tailwind.svg",
    },
    {
      id: 12,
      name: "Recoil",
      logo: "recoil.svg",
    },

    {
      id: 13,
      name: "Git",
      logo: "git.svg",
    },
    {
      id: 14,
      name: "Npm",
      logo: "npm.svg",
    },
    {
      id: 15,
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
        <div className="xsm:mx-2  grid xsm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {tech.map((e: { id: number; name: string; logo: string }) => {
            return (
              <motion.div
                whileInView={{
                  x: [50, 0],
                }}
                transition={{
                  duration: 1,
                }}
                key={e.id}
              >
                <ButtonComp
                  key={e.id}
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
