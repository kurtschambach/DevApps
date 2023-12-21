"use client";

import AppTile from "@/components/AppTile";
import Topic from "@/components/Topic";
import Link from "next/link";
import React, { useState } from "react";
import { apps } from "./apps";
import { topics } from "./topics";

// TODO: add counter to topic, how any apps in one topic
// TODO: make a and / or switch for filter

const App = () => {
  const [selectedTopics, setSelectedTopics] = useState<number[]>([]);

  const filteredApps =
    selectedTopics.length === 0
      ? apps
      : apps.filter((app) =>
          selectedTopics.some((topicId) => app.topics.includes(topicId))
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

      <div className="sticky bottom-2 mt-10 text-center w-full dark:text-white text-black">
        <span className="bg-transparent rounded-xl p-2 px-4 backdrop-blur-xl ">
          Made with {"<3"} by{" "}
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
};

export default App;
