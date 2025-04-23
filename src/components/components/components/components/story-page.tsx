import { Link, useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../../../app/hooks";
import { BackIcon, CheckIcon, ClockIcon } from "../../../../UI/svg";
import { outOfTheFavStorie, outOfTheReadStorie, toTheFavStorie, toTheReadStorie } from "../../../store/slices";
import clsx from "clsx";
import { StarIcon } from "../../../../UI/svg/star";

export const StoryPage = () => {
  const dispatch = useAppDispatch();
  const state = useAppSelector((state) => state.creepypasta);
  const { id } = useParams<{ id: string }>();
  const story = state.stories.find((story) => story.id.toString() === id);
  const isRead = state.readStories.some((s) => s.id === id);
  const isInFav = state.favStories.some((s) => s.id === id);

  const handleReadClick = () => {
    const isIn = state.readStories.some((s) => s.id === id);
    if (isIn) {
      dispatch(outOfTheReadStorie(story));
    } else {
      dispatch(toTheReadStorie(story));
    }
  };

  const handleFavClick = () => {
    const isIn = state.favStories.some((s) => s.id === id);
    if (isIn) {
      dispatch(outOfTheFavStorie(story));
    } else {
      dispatch(toTheFavStorie(story));
    }
  };

  if (!story) return <p>Story not found.</p>;
  return (
    <div className="m-auto flex min-h-screen flex-col bg-neutral-900 p-9 font-body text-white">
      <div className="flex items-center justify-between pr-8">
        <Link
          to="/allstories"
          className="mb-5 flex cursor-pointer items-center text-teal-600 transition-colors hover:text-teal-700"
        >
          <BackIcon />
        </Link>
        <div className="flex gap-11">
          <button
            onClick={handleReadClick}
            className={clsx(
              "flex h-7 w-7 cursor-pointer items-center rounded-full transition-colors hover:text-teal-700",
              isRead
                ? "text-neutral-400 hover:text-neutral-500"
                : "text-teal-600",
            )}
          >
            <div className="flex flex-col items-center justify-center">
              <CheckIcon />
              <p className="text-xl">{isRead ? "Read" : "Unread"}</p>
            </div>
          </button>

          <button
            onClick={handleFavClick}
            className={clsx(
              "flex h-7 w-7 cursor-pointer items-center rounded-full transition-colors hover:text-neutral-500",
              isInFav
                ? "text-yellow-600 hover:text-yellow-700"
                : "text-neutral-400 hover:text-neutral-500",
            )}
          >
            <div className="flex flex-col items-center justify-center">
              <StarIcon />
              <p className="text-xl">{isInFav ? "InFav" : "ToFav"}</p>
            </div>
          </button>
        </div>
      </div>

      <h1 className="mb-5 font-heading text-3xl font-bold text-teal-600">
        {story.title}
      </h1>
      <div className="mb-4 flex items-center">
        <p className="mr-5 font-heading text-xl font-semibold text-teal-600">
          {story.rating}
          <span className="text-base text-white"> / 5</span>
        </p>
        <ClockIcon />
        <p className="ml-1 font-heading text-lg">{story.readTime} min</p>
      </div>
      <p className="whitespace-pre-line font-heading text-lg">{story.text}</p>
    </div>
  );
};
