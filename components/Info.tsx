"use client";

import CloseButton from "./CloseButton";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const Info = ({
  text,
  url,
  onHide,
}: {
  text: string;
  url: string;
  onHide: () => void;
}) => {
  return (
    <div
      onClick={onHide}
      className="z-40 bg-zinc-800/20 w-[100vw] h-[100vh] fixed top-0 left-0 backdrop-blur-sm flex flex-col items-center justify-center"
    >
      <div className="bg-zinc-800/20 backdrop-blur-xl rounded-3xl w-full md:w-96 h-fit z-50">
        <CloseButton onClose={onHide} />
        <p className="text-black font-bold dark:text-white p-2 px-4 sm:p-10">
          {text}
        </p>
        <Link target="_blank" href={url}>
          <ArrowUpRight />
        </Link>
      </div>
    </div>
  );
};

export default Info;
