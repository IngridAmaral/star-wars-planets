import axios from 'axios';
import { Planets } from '../redux/types/planets';

const ROOT_URL = 'https://swapi.dev/api/planets/';
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
  const response = await api.get(`${ROOT_URL}`);
  return response.data;
};
