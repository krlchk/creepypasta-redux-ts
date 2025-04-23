export interface ICreepypastaState {
  stories: IStorie[];
  tags: ITag[];
  filteredStories: IStorie[];
  isModalOpen: boolean;
  readStories: IStorie[];
  readStorie: IStorie | null | undefined;
  favStories: IStorie[];
  favStorie: IStorie | null | undefined;
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

export interface ITag {
  id: string;
  name: string;
}
