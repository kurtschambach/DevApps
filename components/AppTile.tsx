import { AppType } from "@/data/apps";

const AppTile = ({ app, setOpen }: { app: AppType; setOpen: () => void }) => {
  return (
    <div
      onClick={setOpen}
      className="bg-transparent backdrop-blur-xl border-2 border-amber-300 p-6 w-40 h-40 rounded-3xl flex flex-col items-center justify-center cursor-pointer"
    >
      <div>
        <img
          src={app.iconUrl}
          className="mb-2 p-1 bg-amber-400/20 w-24 h-24 rounded-xl"
        />
      </div>
      <div>
        <h2 className="text-md font-bold">{app.name}</h2>
      </div>
    </div>
  );
};

export default AppTile;
