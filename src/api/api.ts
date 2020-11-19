import axios, { AxiosResponse } from 'axios';
import { Planets } from '../redux/types/planets';
import { Film } from '../redux/types/films';

const ROOT_URL = 'https://swapi.dev/api/';
const makeAxiosInstance = () => {
  const instance = axios.create({ baseURL: ROOT_URL });

  instance.interceptors.request.use((config) => ({
    ...config,
    params: {
      ...config.params
    }
  }));

  return instance;
};
export const api = makeAxiosInstance();

export const fetchPlanets = async (): Promise<Planets> => {
  const response = await api.get<Planets>(`${ROOT_URL}planets/`);

  return response.data;
};

export const fetchFilms = async (films: string[]): Promise<Film[]> => {
  const filmsResponse = films.map((film) => api.get<Film>(film));
  const response = await Promise.all(filmsResponse);
  const data = response.map((resp) => resp.data);

  return data;
};
