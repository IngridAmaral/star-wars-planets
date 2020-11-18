import { Film, FilmsActionTypes } from '../types/films';
import { IAction, IActionPayload, createAction } from '../helper/action';

export const fetchRequest = (): IAction<FilmsActionTypes.FETCH_REQUEST> =>
  createAction(FilmsActionTypes.FETCH_REQUEST);

export const fetchSuccess = (
  films: Film[]
): IActionPayload<FilmsActionTypes.FETCH_SUCCESS, Film[]> =>
  createAction(FilmsActionTypes.FETCH_SUCCESS, films);

export const fetchError = (error: Error): IActionPayload<FilmsActionTypes.FETCH_ERROR, Error> =>
  createAction(FilmsActionTypes.FETCH_ERROR, error);

export type Actions =
  | ReturnType<typeof fetchRequest>
  | ReturnType<typeof fetchSuccess>
  | ReturnType<typeof fetchError>;
