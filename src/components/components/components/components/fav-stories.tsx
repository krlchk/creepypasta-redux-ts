import { Link } from "react-router-dom";
import { useAppSelector } from "../../../../app/hooks";
import { StoryComponent } from "./story-component";
import { BackIcon } from "../../../../UI/svg";

export const FavStories = () => {
  const state = useAppSelector((state) => state.creepypasta);
  return (
    <div className="m-auto flex min-h-screen flex-col bg-neutral-900 p-9 font-body">
      <Link
        to="/statistic"
        className="mb-5 flex cursor-pointer items-center text-teal-600 transition-colors hover:text-teal-700"
      >
        <BackIcon />
      </Link>
      <h1 className="mb-5 font-heading text-3xl font-bold text-teal-600">
        Favourites
      </h1>
      <div className="mt-10 flex flex-col gap-5">
        {state.favStories.map((story) => (
          <StoryComponent
            id={story.id}
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
