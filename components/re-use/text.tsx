"use client";

import { motion } from "framer-motion";

interface propsType {
  text: string;
  className?: string;
  motion?: boolean;
}

export default function TextComp(props: propsType) {
  return (
    <div>
      {props.motion ? (
        <motion.div
          whileHover={{
            opacity: 1,
          }}
          transition={{
            duration: 0.5,
          }}
          className={props.className}
        >
          <p>{props.text}</p>
        </motion.div>
      ) : (
        <div className={props.className}>
          <p>{props.text}</p>
        </div>
      )}
    </div>
  );
}
