import { useAppSelector } from "../../../app/hooks";
import { TagComponent } from "./components";

export const TagsComponent = () => {
  const state = useAppSelector((state) => state.creepypasta);

  return (
    <div className="m-auto flex min-h-screen flex-col bg-neutral-900 p-9 font-body">
      <h1 className="mb-5 font-heading text-3xl font-bold text-teal-600">
        Categories
      </h1>
      <div className="mt-10 flex flex-col gap-5">
        {state.tags.map((tag) => (
          <TagComponent id={tag.id} key={tag.id} name={tag.name} />
        ))}
      </div>
    </div>
  );
};
