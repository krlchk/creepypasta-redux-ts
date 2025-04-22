import { Link, useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../../../app/hooks";
import { BackIcon, CheckIcon, ClockIcon } from "../../../../UI/svg";
import { toTheReadStorie } from "../../../store/slices";

export const StoryPage = () => {
  const dispatch = useAppDispatch();
  const state = useAppSelector((state) => state.creepypasta);
  const { id } = useParams<{ id: string }>();
  const story = state.stories.find(
    (story) => story.id.toString() === id,
  );
  const handleClick = () => {
    dispatch(toTheReadStorie(story));
  };

  if (!story) return <p>Story not found.</p>;
  return (
    <div className="m-auto flex min-h-screen flex-col bg-neutral-900 p-9 font-body text-white">
      <div className="flex justify-between">
        <Link
          to="/allstories"
          className="mb-5 flex cursor-pointer items-center text-teal-600 transition-colors hover:text-teal-700"
        >
          <BackIcon />
        </Link>
        <button
          onClick={handleClick}
          className="flex h-7 w-7 cursor-pointer items-center rounded-full text-teal-600 transition-colors hover:text-teal-700"
        >
          <CheckIcon />
        </button>
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
