export type AppType = {
  id: number;
  name: string;
  url: string;
  topics: number[];
  description: string;
  iconUrl?: string;
};

// TODO: add a \n to <br /> changer?

export const apps: AppType[] = [
  {
    id: 0,
    name: "MonkeyType",
    url: "https://monkeytype.com",
    topics: [0],
    description: "An wonderfull app to improve and track typing speed",
  },
  {
    id: 1,
    name: "Ray.so",
    url: "https://ray.so",
    topics: [1],
    description: "App for displaying code with cool bg",
  },
  {
    id: 2,
    name: "Spotify API",
    url: "https://developer.spotify.com/",
    topics: [2],
    description: "API for song information",
  },
  {
    id: 3,
    name: "Dev Daily",
    url: "https://app.daily.dev/",
    topics: [3],
    description: "developer news",
  },
  {
    id: 4,
    name: "Heroicons",
    url: "https://heroicons.com",
    topics: [4],
    description: "great icons, wonderfull svg's",
  },
  {
    id: 5,
    name: "Figma",
    url: "https://www.figma.com/",
    topics: [5],
    description: "U propably know this one",
  },
  {
    id: 6,
    name: "Canva",
    url: "https://canva.com",
    topics: [5],
    description: "Great for easy and quick designs, many templates",
  },
  {
    id: 7,
    name: "Chess.com",
    url: "https://chess.com",
    topics: [6],
    description:
      "The name says everyting (think of a <br />) there is no going back (maybe you'll turn crazy, but it's worth a try)",
  },
  {
    id: 8,
    name: "PlantOrg",
    url: "https://plant-organizer.vercel.app",
    topics: [7, 0],
    description: "One of my apps, not useable yet :/ but im working on it",
  },
  {
    id: 9,
    name: "Django",
    url: "https://django.com",
    topics: [8],
    description: "sth just like flask, with great docs",
  },
  {
    id: 10,
    name: "Next.js",
    url: "https://next.org",
    topics: [8],
    description: "You should know this one",
  },
  {
    id: 11,
    name: "Lucide",
    url: "https://lucide.dev",
    topics: [4],
    description: "Wonderfull icons, easy integration to many frameworks",
  },
];
