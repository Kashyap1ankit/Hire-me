"use client";
import ProjectCard from "../re-use/projectCard";
import React from "react";
import { TracingBeam } from "../ui/tracing-beam";
import TextComp from "../re-use/text";

interface cardDetails {
  title: string;
  description: string;
  logo: string[];
  image: string;
  redirectLink: string;
}
export function TracingBeamDemo() {
  const data: cardDetails[] = [
    {
      title: "TechTalkies",
      description:
        "This is fullstack Blogging website where user can signup , login to create blogs . User can Read other person blogs. Can get help from ai to write their blogs Live. Aproper text editor is there to write blogs in a formatted way. User can update their details and can easily delete their account posts",
      logo: [
        "icons/react.svg",
        "icons/tailwind.svg",
        "icons/cloudflare.svg",
        "icons/postgres.svg",
        "icons/prisma.svg",
      ],
      image: "image/blog.png",
      redirectLink: "https://techtalkies.vercel.app/",
    },

    {
      title: "PayUsVia",
      description:
        "This is payment website . Here user can register. They can find all users on platform and can search for any user and send them money • Real time user authentication and authorization is done u the jwt and passwords are salted and hashed to ensure user details protection • User can see the transaction history and can delete account",
      logo: [
        "icons/react.svg",
        "icons/tailwind.svg",
        "icons/node.svg",
        "icons/express.svg",
        "icons/mongodb.svg",
        "icons/git.svg",
      ],
      image: "image/paytm.png",
      redirectLink:
        "https://paytm-frontend-git-main-ankits-projects-5c12be11.vercel.app/",
    },
  ];
  return (
    <div id="projects">
      <TextComp
        text="~ Projects ~"
        className="xsm:text-3xl md:text-4xl lg:text-5xl text-white font-bold text-center xl:mb-28 xsm:mt-20 xl:mt-28"
        mt-
      />

      <TracingBeam className="xsm:pl-8 xsm:pr-2 md:pl-8 md:pe-2">
        <div>
          {data.map((e: cardDetails) => {
            return (
              <ProjectCard
                title={e.title}
                description={e.description}
                logo={e.logo}
                image={e.image}
                redirectLink={e.redirectLink}
              />
            );
          })}
        </div>
      </TracingBeam>

      {/* see more  */}
      {/* <ButtonComp
        text="See More"
        className=" w-fit mx-auto mb-12 "
        btnClassName="py-3 px-2 bg-black text-white rounded-md"
      /> */}
    </div>
  );
}
