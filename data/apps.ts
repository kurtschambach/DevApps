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
    iconUrl: "https://monkeytype.com/images/favicon/apple-touch-icon.png",
  },
  {
    id: 1,
    name: "Ray.so",
    url: "https://ray.so",
    topics: [1],
    description: "App for displaying code with cool bg",
    iconUrl: "https://www.raycast.com/favicon-production.png",
  },
  {
    id: 2,
    name: "Spotify API",
    url: "https://developer.spotify.com/",
    topics: [2],
    description: "API for song information",
    iconUrl: "https://open.spotifycdn.com/cdn/images/favicon16.1c487bff.png",
  },
  {
    id: 3,
    name: "Dev Daily",
    url: "https://app.daily.dev/",
    topics: [3],
    description: "developer news",
    iconUrl: "https://app.daily.dev/apple-touch-icon.png",
  },
  {
    id: 4,
    name: "Heroicons",
    url: "https://heroicons.com",
    topics: [4],
    description: "great icons, wonderfull svg's",
    iconUrl:
      "https://heroicons.com/_next/static/media/apple-touch-icon.822687be.png",
  },
  {
    id: 5,
    name: "Figma",
    url: "https://www.figma.com/",
    topics: [5],
    description: "U propably know this one",
    iconUrl:
      "https://static.figma.com/uploads/1a667ef53b7c4837049399d0593ffca39e0bec9e",
  },
  {
    id: 6,
    name: "Canva",
    url: "https://canva.com",
    topics: [5],
    description: "Great for easy and quick designs, many templates",
    iconUrl: "https://static.canva.com/static/images/android-192x192-2.png",
  },
  {
    id: 7,
    name: "Chess.com",
    url: "https://chess.com",
    topics: [6],
    description:
      "The name says everyting, \n there is no going back (maybe you'll turn crazy, but it's worth a try)",
    iconUrl:
      "https://www.chess.com/bundles/web/favicons/apple-touch-icon.7aaa2d1f.png",
  },
  {
    id: 8,
    name: "PlantOrg",
    url: "https://plant-organizer.vercel.app",
    topics: [7, 0],
    description: "One of my apps, not useable yet :/ but im working on it",
    iconUrl: "https://plant-organizer.vercel.app/logo-round.png",
  },
  {
    id: 9,
    name: "Django",
    url: "https://www.djangoproject.com/",
    topics: [8],
    description: "sth just like flask, with great docs",
    iconUrl: "https://static.djangoproject.com/img/icon-touch.e4872c4da341.png",
  },
  {
    id: 10,
    name: "Next.js",
    url: "https://nextjs.org/",
    topics: [8],
    description: "You should know",
  },
  {
    id: 11,
    name: "Lucide",
    url: "https://lucide.dev",
    topics: [4],
    description: "Wonderfull icons, easy integration to many frameworks",
  },
  {
    id: 12,
    name: "Supabase",
    url: "https://supabase.com/",
    topics: [9],
    description: "good online DB, firebase alternative",
    iconUrl: "https://supabase.com/favicon/favicon-196x196.png",
  },
  {
    id: 13,
    name: "Vercel",
    url: "https://vercel.com",
    topics: [10],
    description: "good for quick deployments",
    iconUrl:
      "https://assets.vercel.com/image/upload/front/favicon/vercel/180x180.png",
  },
  {
    id: 14,
    name: "Tailwind CSS",
    url: "https://tailwindcss.com",
    topics: [0, 5, 8],
    description: "more efficient CSS",
    iconUrl: "https://tailwindcss.com/favicons/apple-touch-icon.png?v=3",
  },
  {
    id: 15,
    name: "HTTP Cats",
    url: "https://http.cat/",
    topics: [2, 6],
    description: "Cats for status codes",
    iconUrl: "https://http.cat/apple-touch-icon.png",
  },
];
