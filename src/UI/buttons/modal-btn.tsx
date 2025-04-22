import { CheckIcon } from "../svg";

interface IModalBtn {
  children: string;
  onClick: () => void;
}

export const ModalBtn = ({ children, onClick }: IModalBtn) => {
  return (
    <button
      onClick={onClick}
      type="button"
      className="flex w-full justify-between border-b p-3 transition-colors hover:text-white/60"
    >
      <p>{children}</p>
      <CheckIcon />
    </button>
  );
};
