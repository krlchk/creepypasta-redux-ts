import { Link } from "react-router-dom";
import { useAppSelector } from "../../../app/hooks";

export const StatisticsComponent = () => {
  const state = useAppSelector((state) => state.creepypasta);
  const storiesRead = state.readStories.length;
  const storiesInFav = state.favStories.length;
  console.log(storiesRead);
  return (
    <div className="m-auto flex min-h-screen flex-col bg-neutral-900 p-9 font-body">
      <h1 className="mb-5 font-heading text-3xl font-bold text-teal-600">
        Statistics
      </h1>
      <p className="font-heading text-2xl font-semibold text-teal-600">
        Stories read: {storiesRead}{" "}
        <span className="text-xl text-white">/ 50</span>
      </p>
      <p className="font-heading text-2xl font-semibold text-teal-600">
        In Favourites: <span className="text-yellow-500">{storiesInFav}</span>
      </p>
      <Link
        to="/favStories"
        className="mt-5 flex cursor-pointer justify-between rounded-md border border-yellow-500 p-3 text-yellow-500 hover:border-yellow-600 hover:bg-neutral-800 hover:text-yellow-600 hover:transition-colors"
      >
        <div className="font-heading">
          <h1 className="text-2xl font-semibold">Favourites</h1>
        </div>
      </Link>
    </div>
  );
};
