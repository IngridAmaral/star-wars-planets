export enum PlanetsActionTypes {
  FETCH_REQUEST = '@@planets/FETCH_REQUEST',
  FETCH_SUCCESS = '@@planets/FETCH_SUCCESS',
  FETCH_ERROR = '@@planets/FETCH_ERROR'
}

export type Planet = {
  name: string;
  rotation_period: string;
  orbital_period: string;
  diameter: string;
  climate: string;
  gravity: string;
  terrain: string;
  surface_water: string;
  population: string;
  residents: string[];
  films: string[];
  created: string;
  edited: string;
  url: string;
};

export type Planets = {
  count: number;
  next: string;
  previous: null;
  results: Planet[];
};

export type PlanetsState = {
  readonly loading: boolean;
  readonly data: Planets;
  readonly error: Error | null;
};
