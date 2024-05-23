"use client";

import React from "react";
import { InfiniteMovingCards } from "../ui/infinite-moving-cards";

export function InfiniteMovingCardsDemo() {
  return (
    <div className="mt-32 mb-12 rounded-md flex flex-col antialiased  items-center justify-center relative overflow-hidden">
      <InfiniteMovingCards
        items={testimonials}
        direction="right"
        speed="normal"
      />
    </div>
  );
}

const testimonials = [
  {
    quote:
      " My Experience on the blogging website project was a great .His expertise in React and Tailw  ensured a smooth and efficient development process. His attention to detail and commitment to high-quality code are truly commendable.",
    name: "DUSHYANT KUMAR DEWANGAN",
    title: "TechTalkies User",
  },
  {
    quote:
      "Ankit's work on his personal portfolio website is a testament to his proficiency in React and Framer Motion. His ability to integrate various technologiesand showcase his projects effectively demonstrates his technical acumen and creativity.",
    name: "Tarun Kumar",
    title: "Freelance Client",
  },
  {
    quote:
      "Ankit was an exceptional Teaching Assistant Intern at Stealth Startup. He solved over 1050 student queries on the MERN stack and consistently received high ratings from students. His dedication to helping others and his deep understanding is remarkable",
    name: "Tammana",
    title: "HR at Stealth Startup",
  },
  {
    quote:
      "The smoothness of webiste & animations integrated in it are amazing.His skills in full-stack development and real-time authentication is amazing. I highly recommend him for any challenging software engineering tasks.",
    name: "Rakesh Paulraj",
    title: "PayU User",
  },
];
