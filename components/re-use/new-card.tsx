import { CardContainer, CardItem } from "@/components/ui/card";
import Link from "next/link";
import ButtonComp from "./button";
import ImageComp from "./image";

export default function NewCard({
  title,
  description,
  logo,
  image,
  redirectLink,
}: {
  title: string;
  description: string;
  logo: string[];
  image: string;
  redirectLink: string;
}) {
  let id = 1;
  return (
    <div className="flex justify-center items-center h-fit py-7  w-full px-2 ">
      <div className="relative cursor-pointer animate-float  md:block ">
        <CardContainer className=" cursor-pointer">
          <div className="px-4 py-7 max-w-[600px] border-solid gap-5 bg-black flex flex-col justify-start item-center border-2  rounded-2xl">
            <CardItem>
              <img
                src={image}
                alt={"platform"}
                width={400}
                height={400}
                className="rounded-md w-fit"
              />
            </CardItem>

            <div className="px-4 flex flex-col justify-center items-start gap-5">
              <h1 className="text-4xl  text-white font-bold">{title}</h1>

              <h4 className="text-lg text-gray-400">{description}</h4>

              <div className="flex flex-col md:flex-row justify-between md:items-center mt-4 mb-4 w-full">
                <div className="flex w-2/3 ">
                  {logo.map((e) => {
                    return (
                      <ImageComp
                        key={id++}
                        src={e}
                        className="ml-2 xsm:size-6 sm:size-8"
                      />
                    );
                  })}
                </div>

                <div className="md:mt-0 w-full mt-4">
                  <Link href={redirectLink} target="_blank">
                    <ButtonComp
                      text="Visit"
                      icon="up-arrow.svg"
                      className="w-full bg-white text-black rounded-md"
                      btnClassName="font-bold py-2 "
                    />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </CardContainer>
      </div>
    </div>
  );
}
