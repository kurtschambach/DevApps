import { AppType } from "@/data/apps";
import Image from "next/image";

type AppTileProps = {
  app: AppType;
  setOpen: () => void;
};
export default function AppTile({ app, setOpen }: AppTileProps) {
  const iconUrl = app.iconUrl ? app.iconUrl : `${app.url}/favicon.ico`;
  return (
    <div
      onClick={setOpen}
      className="bg-primary/10 backdrop-blur-xl border-2 border-primary p-6 w-40 h-40 rounded-3xl flex flex-col items-center justify-center cursor-pointer"
    >
      <div>
        <Image
          src={iconUrl}
          alt={`${app.name} icon`}
          width="96"
          height="96"
          className="mb-2 p-1 bg-white/80 dark:bg-black/80 rounded-xl"
        />
      </div>
      <div>
        <h2 className="text-md font-bold">{app.name}</h2>
      </div>
    </div>
  );
}
