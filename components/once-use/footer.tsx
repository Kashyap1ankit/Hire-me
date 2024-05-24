"use client";

import Link from "next/link";
import ImageComp from "../re-use/image";
import TextComp from "../re-use/text";

export default function Footer() {
  return (
    <div>
      <hr />
      <div className="mt-0 flex justify-between items-center">
        <div className="flex mt-4 mb-4">
          <Link
            href="https://discord.com/channels/1222885370551861268"
            target="_blank"
          >
            <ImageComp className="ml-4 lg:size-12" src="icons/discord.svg" />
          </Link>

          <Link href="https://github.com/Kashyap1ankit" target="_blank">
            <ImageComp className="ml-4 lg:size-12" src="icons/github.svg" />
          </Link>

          <Link href="https://x.com/Ankitka38153827" target="_blank">
            <ImageComp className="ml-4 lg:size-12" src="icons/x.svg" />
          </Link>

          <Link
            href="https://www.linkedin.com/in/ankit-kashyap-coder/"
            target="_blank"
          >
            <ImageComp className="ml-4 lg:size-12" src="icons/linkedin.svg" />
          </Link>
        </div>

        <div className="mr-12">
          <Link href="/contact">
            <TextComp text="Connect" className="text-white xl:text-xl" />
          </Link>
        </div>
      </div>
    </div>
  );
}
