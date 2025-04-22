import { useAppDispatch, useAppSelector } from "../../app/hooks";
import {
  closeModalWindow,
  setSortByRatingAscending,
  setSortByRatingDescending,
  setSortByTimeAscending,
  setSortByTimeDescending,
  setSortFromAToZ
} from "../../components/store/slices";
import { ModalBtn } from "../buttons";

export const ModalWindow = () => {
  const dispatch = useAppDispatch();
  const state = useAppSelector((state) => state.creepypasta);
  return (
    <div
      onClick={() => dispatch(closeModalWindow())}
      className={`fixed inset-0 z-50 flex h-screen w-full items-center justify-center bg-black/60 backdrop-blur-sm ${state.isModalOpen ? "visible" : "invisible"}`}
    >
      <div
        onClick={(e) => {
          e.stopPropagation();
        }}
        className="flex w-2/3 max-w-lg flex-col items-center rounded-xl bg-neutral-600 p-6 font-heading text-white shadow-xl"
      >
        <h1 className="mb-10 text-2xl">Sorting and filtering</h1>
        <h1 className="mb-3 self-start text-xl">Sorting</h1>
        <form
          onSubmit={(e) => e.preventDefault()}
          className="flex w-full flex-col gap-2 text-xl"
        >
          <ModalBtn
            onClick={() => {
              dispatch(setSortByRatingDescending());
            }}
          >
            By rating descending
          </ModalBtn>
          <ModalBtn
            onClick={() => {
              dispatch(setSortByRatingAscending());
            }}
          >
            By rating ascending
          </ModalBtn>
          <ModalBtn
            onClick={() => {
              dispatch(setSortByTimeDescending());
            }}
          >
            By time descending
          </ModalBtn>
          <ModalBtn
            onClick={() => {
              dispatch(setSortByTimeAscending());
            }}
          >
            By time ascending
          </ModalBtn>
          <ModalBtn
            onClick={() => {
              dispatch(setSortFromAToZ());
            }}
          >
            From A to Z
          </ModalBtn>
        </form>
      </div>
    </div>
  );
};
