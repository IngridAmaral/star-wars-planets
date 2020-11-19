export enum FilmsActionTypes {
  FETCH_REQUEST = '@@films/FETCH_REQUEST',
  FETCH_SUCCESS = '@@films/FETCH_SUCCESS',
  FETCH_ERROR = '@@films/FETCH_ERROR'
}

export type Film = {
  title: string;
  episode_id: number;
  opening_crawl: string;
  director: string;
  producer: string;
  release_date: string;
  characters: string[];
};

// export type Films = {
//   count: number;
//   next: null;
//   previous: null;
//   results: Film[];
// };

export type FilmsState = {
  readonly loading: boolean;
  readonly data: Film[];
  readonly error: Error | null;
};
