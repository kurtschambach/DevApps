"use client";

import AppTile from "@/components/AppTile";
import Topic from "@/components/Topic";
import Link from "next/link";
import React, { useState } from "react";

export type TopicType = {
  id: number;
  title: string;
};

export type AppType = {
  id: number;
  name: string;
  url: string;
  topics: number[];
  iconUrl?: string;
};
// TODO: add counter to topic, how any apps in one topic

const topics: TopicType[] = [
  { id: 0, title: "Type Quicker" },
  { id: 1, title: "Display Code" },
  { id: 2, title: "API" },
  { id: 3, title: "News" },
  { id: 4, title: "Icons" },
];

const apps: AppType[] = [
  { id: 0, name: "MonkeyType", url: "https://monkeytype.com", topics: [0] },
  { id: 1, name: "Ray.so", url: "https://ray.so", topics: [1] },
  { id: 2, name: "Spotify API", url: "https://", topics: [2] },
  { id: 3, name: "Dev News", url: "https://", topics: [3] },
  { id: 4, name: "Heroicons", url: "https://heroicons.com", topics: [4] },
];

const App = () => {
  const [selectedTopics, setSelectedTopics] = useState<number[]>([]);

  const filteredApps = apps.filter((app) =>
    selectedTopics.every((topicId) => app.topics.includes(topicId))
  );

  return (
    <div className="h-full w-full">
      <div className="z-20 mb-8">
        <h1 className="text-2xl font-bold mb-4">Dev Apps</h1>
      </div>

      <div className="flex space-x-4 pb-8 border-b-2 border-b-amber-400 overflow-x-scroll">
        {topics.map((topic) => (
          <Topic
            key={`${topic.id}-${topic.title}`}
            topic={topic}
            selectedTopics={selectedTopics}
            setSelectedTopics={setSelectedTopics}
          />
        ))}
      </div>

      <div className="flex flex-row flex-wrap items-center justify-center gap-4 mt-10 overflow-y-auto">
        {filteredApps.map((app) => (
          <AppTile key={app.id} app={app} />
        ))}
      </div>

      <div className="sticky bg-black/30 p-2 px-3 backdrop-blur-xl bottom-2 mt-10 text-center w-full dark:text-amber-200 text-amber-800">
        Made with {"<3"} by{" "}
        <Link href="https://a3chron.vercel.app/">a3chron</Link>
      </div>
    </div>
  );
};

export default App;
