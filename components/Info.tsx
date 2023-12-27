import Link from "next/link";
import { ArrowUpRight, X } from "lucide-react";

type InfoProps = {
  text: string;
  url: string;
  onHide: () => void;
};

export default function Info({ text, url, onHide }: InfoProps) {
  return (
    <div
      onClick={onHide}
      className="z-40 bg-zinc-800/20 w-[100vw] h-[100vh] fixed top-0 left-0 backdrop-blur-sm flex flex-col items-center justify-center gap-4"
    >
      <div className="bg-zinc-800/20 border-2 dark:border-white border-black backdrop-blur-xl rounded-3xl w-full md:w-96 h-fit z-50">
        <p className="text-black font-bold dark:text-white p-2 px-4 sm:p-10">
          {text}
        </p>
      </div>
      <div className="w-full md:w-96 h-fit z-50 flex flex-row items-center justify-center gap-4">
        <div onClick={onHide} className="w-full h-12 cursor-pointer border-2 border-black dark:border-white bg-transparent backdrop-blur-xl rounded-full flex items-center justify-center">
          <X />
        </div>
        <Link target="_blank" href={url} className="w-full h-12 cursor-pointer border-2 border-black dark:border-white bg-transparent backdrop-blur-xl rounded-full flex items-center justify-center">
          <ArrowUpRight />
        </Link>
      </div>
    </div>
  );
}