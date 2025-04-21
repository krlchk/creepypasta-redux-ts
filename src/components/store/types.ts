export interface ICreepypastaState {
  stories: IStorie[];
  status: string;
  error: null | string;
}

export interface IStorie {
  id: 1;
  title: string;
  text: string;
  rating: number;
  readTime: number;
  tags: string[];
}
