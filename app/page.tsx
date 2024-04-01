"use client";

import AppTile from "@/components/AppTile";
import Topic from "@/components/Topic";
import Link from "next/link";
import React, { useState } from "react";
import { apps } from "@/data/apps";
import { topics } from "@/data/topics";
import Info from "@/components/Info";
import { Github, Heart } from "lucide-react";

// TODO: add counter to topic, how many apps in one topic
// TODO: make a and / or switch for filter
// TODO: a tiles switcher -> big icons with name, or name with small favicon
// TODO: request apps buttons

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
          title={apps[openApp].name}
          text={apps[openApp].description}
          url={apps[openApp].url}
          onHide={() => setOpenApp(null)}
        />
      )}
      <div className="z-20 mb-8 w-full flex flex-row items-center justify-between">
        <div className="flex flex-col items-center justify-center w-fit h-fit gap-0">
          <h2 className="text-bg-dark dark:text-primary text-lg font-bold pl-10">
            a3chron
          </h2>
          <h1 className="text-2xl font-bold mb-4 leading-5">Dev Apps</h1>
        </div>
        <Link
          target="_blank"
          href="https://github.com/kurtschambach/devApps/"
          className="text-black/80 hover:text-black dark:text-white/80 dark:hover:text-white duration-150"
        >
          <Github />
        </Link>
      </div>

      <div className="w-full flex flex-row flex-wrap items-center justify-center gap-6">
        {filteredApps.map((app) => (
          <AppTile key={app.id} app={app} setOpen={() => setOpenApp(app.id)} />
        ))}
      </div>

      <div className="fixed bottom-2 sm:bottom-4 mt-10 flex flex-col items-center justify-center w-full h-fit dark:text-white text-black">
        <span className="bg-transparent rounded-xl p-2 px-4 backdrop-blur-xl w-fit h-fit flex flex-row items-center justify-center gap-2">
          Made with{" "}
          <Heart
            className="w-5 h-5 text-black dark:text-primary"
            fill="currentColor"
          />{" "}
          by{" "}
          <Link
            className="dark:text-primary text-black no-underline hover:underline decoration-black dark:decoration-primary"
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
