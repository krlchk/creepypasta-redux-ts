import { Link } from "react-router-dom";

export const StoryComponent = ({
  id,
  title,
  readTime,
  rating,
}: {
  id: string;
  title: string;
  readTime: number;
  rating: number;
}) => {
  return (
    <Link
      to={`/allstories/story/${id}`}
      className="flex cursor-pointer justify-between rounded-md p-3 text-white hover:bg-neutral-800 hover:transition-colors"
    >
      <div className="font-heading">
        <h1 className="text-xl font-semibold text-teal-600">{title}</h1>
        <p>{readTime} min</p>
      </div>
      <p className="font-heading text-3xl text-teal-600">{rating}</p>
    </Link>
  );
};
