export type AppType = {
  id: number;
  name: string;
  url: string;
  topics: number[];
  iconUrl?: string;
};

export const apps: AppType[] = [
  { id: 0, name: "MonkeyType", url: "https://monkeytype.com", topics: [0] },
  { id: 1, name: "Ray.so", url: "https://ray.so", topics: [1] },
  {
    id: 2,
    name: "Spotify API",
    url: "https://developer.spotify.com/",
    topics: [2],
  },
  { id: 3, name: "Dev Daily", url: "https://app.daily.dev/", topics: [3] },
  { id: 4, name: "Heroicons", url: "https://heroicons.com", topics: [4] },
  { id: 5, name: "Figma", url: "https://www.figma.com/", topics: [5] },
  { id: 6, name: "Canva", url: "https://canva.com", topics: [5] },
  { id: 7, name: "Chess.com", url: "https://chess.com", topics: [6] },
  {
    id: 8,
    name: "PlantOrg",
    url: "https://plant-organizer.vercel.app",
    topics: [7, 0],
  },
];
