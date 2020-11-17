import { Reducer } from 'redux';
import { PlanetsActionTypes, PlanetsState } from '../types/planets';
import { Actions } from '../actions/planets';
import { RootState } from '../store';

const initialState: PlanetsState = {
  data: {},
  error: null,
  loading: false
};

export const planetsReducer: Reducer<PlanetsState, Actions> = (state = initialState, action) => {
  switch (action.type) {
    case PlanetsActionTypes.FETCH_REQUEST: {
      return { ...state, loading: true };
    }
    case PlanetsActionTypes.FETCH_SUCCESS: {
      return { ...state, loading: false, data: action.payload };
    }
    case PlanetsActionTypes.FETCH_ERROR: {
      return { ...state, loading: false, errors: action.payload };
    }
    default: {
      return state;
    }
  }
};

export const getPlanets = (state: RootState): PlanetsState['data'] => state.planets.data;
