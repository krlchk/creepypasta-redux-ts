import { useAppDispatch, useAppSelector } from "../../../app/hooks";
import { ModalWindow } from "../../../UI/modal";

import { SettingsIcon } from "../../../UI/svg";
import { SearchIcon } from "../../../UI/svg/search";
import { fetchStories, fetchTags, openModalWindow, sortByName } from "../../store/slices";
import { StoryComponent } from "./components";
import { useEffect } from "react";

export const AllStoriesComponent = () => {
  const dispatch = useAppDispatch();
  const state = useAppSelector((state) => state.creepypasta);

  useEffect(() => {
    if (state.status === "idle") {
      dispatch(fetchStories());
      dispatch(fetchTags());
    }
  }, [dispatch, state.status]);

  if (state.status === "loading") return <p>Loading...</p>;
  if (state.status === "failed") return <p>Error {state.error}</p>;
  return (
    <div className="m-auto flex min-h-screen flex-col bg-neutral-900 p-9 font-body">
      <div
        onClick={() => {
          dispatch(openModalWindow());
        }}
        className="cursor-pointer self-end text-teal-600 transition-colors hover:text-teal-700"
      >
        <SettingsIcon />
      </div>
      <h1 className="mb-5 font-heading text-3xl font-bold text-teal-600">
        All stories
      </h1>
      <div className="flex items-center">
        <div className="rounded-bl-lg rounded-tl-lg bg-neutral-600 px-2 py-1 text-white">
          <SearchIcon />
        </div>
        <input
        value={state.searchText}
          onChange={(e) => {
            const text = e.target.value;
            dispatch(sortByName(text));
          }}
          placeholder="Enter the title of the story"
          className="text-md w-1/3 rounded-br-lg rounded-tr-lg bg-neutral-600 px-2 py-1 font-heading font-semibold text-white outline-none placeholder:text-white mobile:w-full"
        />
      </div>
      <div className="mt-10 flex flex-col gap-5">
        {state.filteredStories.map((story) => (
          <StoryComponent
            id={story.id}
            key={story.id}
            title={story.title}
            readTime={story.readTime}
            rating={story.rating}
          />
        ))}
      </div>
      <ModalWindow />
    </div>
  );
};
