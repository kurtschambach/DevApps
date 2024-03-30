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
      className="z-30 bg-zinc-800/20 w-[100vw] h-[100vh] fixed top-0 left-0 backdrop-blur-sm flex flex-col items-center justify-center gap-4"
    >
      <div className="bg-primary/20 dark:bg-primary/20 border-2 dark:border-primary border-primary backdrop-blur-2xl rounded-3xl w-full md:w-96 h-fit z-50">
        <p className="text-black font-bold dark:text-primary p-2 px-4 sm:p-10">
          {text}
        </p>
      </div>
      <div className="w-full md:w-96 h-fit z-50 flex flex-row items-center justify-center gap-4">
        <div
          onClick={onHide}
          className="group w-1/2 h-12 cursor-pointer border-2 border-black text-black dark:border-primary dark:text-primary bg-dark dark:bg-black/20 backdrop-blur-xl rounded-full flex items-center justify-center"
        >
          <X className="group-hover:-rotate-90 duration-300" />
        </div>
        <Link
          target="_blank"
          href={url}
          className="group w-full h-12 cursor-pointer border-2 border-black bg-primary dark:text-dark dark:border-black backdrop-blur-xl rounded-full flex items-center justify-center"
        >
          <ArrowUpRight className="rotate-45 group-hover:rotate-0 duration-300" />
        </Link>
      </div>
    </div>
  );
}
