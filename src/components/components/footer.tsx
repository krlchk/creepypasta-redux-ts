import { BookIcon, StatisticIcon, TagIcon } from "../../UI/svg";

export const Footer = () => {
  return (
    <div className="sticky bottom-0 flex justify-around border-t border-neutral-500 bg-neutral-900 py-3 text-4xl text-white">
      <div className="flex cursor-pointer items-center text-teal-600 transition-colors hover:text-teal-700">
        <BookIcon />
      </div>
      <div className="flex cursor-pointer items-center text-teal-600 transition-colors hover:text-teal-700">
        <TagIcon />
      </div>
      <div className="flex cursor-pointer items-center text-teal-600 transition-colors hover:text-teal-700">
        <StatisticIcon />
      </div>
    </div>
  );
};
