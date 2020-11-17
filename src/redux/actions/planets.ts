import { PlanetsActionTypes, Planets } from '../types/planets';
import { IAction, IActionPayload, createAction } from '../helper/action';

export const fetchRequest = (): IAction<PlanetsActionTypes.FETCH_REQUEST> =>
  createAction(PlanetsActionTypes.FETCH_REQUEST);

export const fetchSuccess = (
  planets: Planets
): IActionPayload<PlanetsActionTypes.FETCH_SUCCESS, Planets> =>
  createAction(PlanetsActionTypes.FETCH_SUCCESS, planets);

export const fetchError = (error: Error): IActionPayload<PlanetsActionTypes.FETCH_ERROR, Error> =>
  createAction(PlanetsActionTypes.FETCH_ERROR, error);

export type Actions =
  | ReturnType<typeof fetchRequest>
  | ReturnType<typeof fetchSuccess>
  | ReturnType<typeof fetchError>;
