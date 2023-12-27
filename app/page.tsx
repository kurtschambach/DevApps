"use client";

import AppTile from "@/components/AppTile";
import Topic from "@/components/Topic";
import Link from "next/link";
import React, { useState } from "react";
import { apps } from "@/data/apps";
import { topics } from "@/data/topics";
import Info from "@/components/Info";
import { Github, Heart } from "lucide-react";

// TODO: add counter to topic, how any apps in one topic
// TODO: make a and / or switch for filter
// TODO: request apps button

export default function App() {
  const [selectedTopics, setSelectedTopics] = useState<number[]>([]);
  const [openApp, setOpenApp] = useState<null | number>(null);

  const filteredApps =
    selectedTopics.length === 0
      ? apps
      : apps.filter((app) =>
          selectedTopics.some((topicId) => app.topics.includes(topicId)),
        );

  return (
    <div className="h-full w-full">
      {openApp !== null && (
        <Info
          text={apps[openApp].description}
          url={apps[openApp].url}
          onHide={() => setOpenApp(null)}
        />
      )}
      <div className="z-20 mb-8 w-full flex flex-row items-center justify-between">
        <h1 className="text-2xl font-bold mb-4">Dev Apps</h1>
        <Link
          target="_blank"
          href="https://github.com/kurtschambach/devApps/"
          className="text-white/80 hover:text-white duration-150"
        >
          <Github />
        </Link>
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
          <AppTile key={app.id} app={app} setOpen={() => setOpenApp(app.id)} />
        ))}
      </div>

      <div className="fixed bottom-2 sm:bottom-4 mt-10 flex flex-col items-center justify-center w-full h-fit dark:text-white text-black">
        <span className="bg-transparent rounded-xl p-2 px-4 backdrop-blur-xl w-fit h-fit flex flex-row items-center justify-center gap-2">
          Made with <Heart className="w-5 h-5" /> by{" "}
          <Link
            className="dark:text-amber-200 text-amber-800 no-underline hover:underline decoration-amber-200"
            target="_blank"
            href="https://a3chron.vercel.app/"
          >
            a3chron
          </Link>
        </span>
      </div>
    </div>
  );
}
