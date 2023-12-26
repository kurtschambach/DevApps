import { TopicType } from "@/data/topics";

type TopicProps = {
  topic: TopicType;
  selectedTopics: number[];
  setSelectedTopics: React.Dispatch<React.SetStateAction<number[]>>;
};
export default function Topic({
  topic,
  selectedTopics,
  setSelectedTopics,
}: TopicProps) {
  return (
    <>
      <input
        type="checkbox"
        value={topic.id}
        id={`${topic.id}`}
        checked={selectedTopics.includes(topic.id)}
        onChange={() => {
          setSelectedTopics((prev) => {
            if (prev.includes(topic.id)) {
              return prev.filter((id) => id !== topic.id);
            } else {
              return [...prev, topic.id];
            }
          });
        }}
      />
      <label
        htmlFor={`${topic.id}`}
        className="flex items-center rounded-xl w-fit p-4 px-6 bg-amber-400 text-black font-bold font-plex"
      >
        <span className="ml-2">{topic.title}</span>
      </label>
    </>
  );
}
