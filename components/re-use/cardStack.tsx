"use client";
import { CardStack } from "../ui/card-stack";
import { cn } from "@/utils/cn";
export function CardStackDemo() {
  return (
    <div className=" flex items-center justify-center ">
      <CardStack items={CARDS} />
    </div>
  );
}

// Small utility to highlight the content of specific section of a testimonial content
export const Highlight = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <span
      className={cn(
        "font-bold bg-emerald-100 text-emerald-700 dark:bg-emerald-700/[0.2] dark:text-emerald-500 px-1 py-0.5",
        className
      )}
    >
      {children}
    </span>
  );
};

const CARDS = [
  {
    id: 0,
    name: "DUSHYANT KUMAR DEWANGAN",
    designation: "TechTalkies User",
    content: (
      <p>
        My Experience on the blogging website project was a great .{" "}
        <Highlight>His expertise in React and Tailwind</Highlight> ensured a
        smooth and efficient development process. His attention to detail and
        commitment to high-quality code are truly commendable.
      </p>
    ),
  },

  {
    id: 1,
    name: "Tammana",
    designation: "HR at Stealth Startup",
    content: (
      <p>
        Ankit was an exceptional Teaching Assistant Intern at Stealth Startup.{" "}
        <Highlight>He solved over 1050 student queries</Highlight> on the MERN
        stack and consistently received high ratings from students. His
        dedication to helping others and his deep understanding is remarkable.
      </p>
    ),
  },

  {
    id: 2,
    name: "Mayank Dagar",
    designation: "Freelance Client",
    content: (
      <p>
        Ankit's work on his personal portfolio website is a testament to his
        proficiency in React and Framer Motion.{" "}
        <Highlight>His ability to integrate various technologies</Highlight> and
        showcase his projects effectively demonstrates his technical acumen and
        creativity.
      </p>
    ),
  },
  {
    id: 3,
    name: "Rakesh Paulraj",
    designation: "PayU User",
    content: (
      <p>
        The smoothness of webiste & animations integrated in it are amazing.{" "}
        <Highlight>
          His skills in full-stack development and real-time authentication
        </Highlight>{" "}
        is amazing. I highly recommend him for any challenging software
        engineering tasks.
      </p>
    ),
  },
];
