export interface ICreepypastaState {
  stories: IStorie[];
  filteredStories: IStorie[];
  readStories: IStorie[];
  isModalOpen: boolean;
  readStorie: IStorie | null |undefined;
  sortingCategory:
    | "byRatingDescending"
    | "byRatingAscending"
    | "byTimeDescending"
    | "byTimeAscending"
    | "fromAToZ";
  searchText: string;
  status: string;
  error: null | string;
}

export interface IStorie {
  id: string;
  title: string;
  text: string;
  rating: number;
  readTime: number;
  tags: string[];
}
