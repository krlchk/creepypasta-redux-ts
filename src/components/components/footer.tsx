import { Link } from "react-router-dom";
import { BookIcon, StatisticIcon, TagIcon } from "../../UI/svg";
import { useAppDispatch } from "../../app/hooks";
import { resetFilters } from "../store/slices";

export const Footer = () => {
  const dispatch = useAppDispatch();
  return (
    <div className="sticky bottom-0 flex justify-around border-t border-neutral-500 bg-neutral-900 py-3 text-4xl text-white">
      <Link
        onClick={() => {
          dispatch(resetFilters());
        }}
        to="/allstories"
        className="flex cursor-pointer items-center text-teal-600 transition-colors hover:text-teal-700"
      >
        <BookIcon />
      </Link>
      <Link
        onClick={() => {
          dispatch(resetFilters());
        }}
        to="/tags"
        className="flex cursor-pointer items-center text-teal-600 transition-colors hover:text-teal-700"
      >
        <TagIcon />
      </Link>
      <Link
        onClick={() => {
          dispatch(resetFilters());
        }}
        to="/statistic"
        className="flex cursor-pointer items-center text-teal-600 transition-colors hover:text-teal-700"
      >
        <StatisticIcon />
      </Link>
    </div>
  );
};
