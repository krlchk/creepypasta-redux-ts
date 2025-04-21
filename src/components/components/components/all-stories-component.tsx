import { useAppDispatch, useAppSelector } from "../../../app/hooks";
import { SettingsIcon } from "../../../UI/svg";
import { SearchIcon } from "../../../UI/svg/search";
import { fetchStories } from "../../store/slices";
import { StoryComponent } from "./components";
import { useEffect } from "react";

export const AllStoriesComponent = () => {
  const dispatch = useAppDispatch();
  const state = useAppSelector((state) => state.creepypasta);

  useEffect(() => {
    if (state.status === "idle") {
      dispatch(fetchStories());
    }
  }, [dispatch, state.status]);

  if (state.status === "loading") return <p>Loading...</p>;
  if (state.status === "failed") return <p>Error {state.error}</p>;
  return (
    <div className="font-body m-auto flex h-auto flex-col bg-neutral-900 p-9">
      <div className="cursor-pointer self-end text-teal-600 transition-colors hover:text-teal-700">
        <SettingsIcon />
      </div>
      <h1 className="font-heading mb-5 text-3xl font-bold text-teal-600">
        All stories
      </h1>
      <div className="flex items-center">
        <div className="bg-neutral-600 rounded-tl-lg rounded-bl-lg px-2 py-1 text-white">
          <SearchIcon />
        </div>
        <input
          placeholder="Enter the title of the story"
          className="font-heading text-md w-1/3 rounded-br-lg rounded-tr-lg bg-neutral-600 px-2 py-1 font-semibold text-white outline-none placeholder:text-white"
        />
      </div>
      <div className="mt-10 flex flex-col gap-5">
        {state.stories.map((story) => (
          <StoryComponent
            key={story.id}
            title={story.title}
            readTime={story.readTime}
            rating={story.rating}
          />
        ))}
      </div>
    </div>
  );
};
