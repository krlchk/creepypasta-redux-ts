import { Link } from "react-router-dom";
import { useAppDispatch } from "../../../../app/hooks";
import { sortByTags } from "../../../store/slices";

export const TagComponent = ({ id, name }: { id: string; name: string }) => {
  const dispatch = useAppDispatch();
  return (
    <Link
      onClick={() => {
        dispatch(sortByTags(name));
      }}
      to={`/tags/${id}`}
      className="flex cursor-pointer justify-between rounded-md p-3 text-white hover:bg-neutral-800 hover:transition-colors"
    >
      <h1 className="font-heading text-xl font-semibold text-teal-600">
        {name}
      </h1>
    </Link>
  );
};
