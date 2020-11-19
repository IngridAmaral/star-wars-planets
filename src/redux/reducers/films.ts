import { Reducer } from 'redux';
import { FilmsActionTypes, FilmsState } from '../types/films';
import { Actions } from '../actions/films';
import { RootState } from '../store';

const initialState: FilmsState = {
  data: [
    {
      title: '',
      episode_id: 0,
      opening_crawl: '',
      director: '',
      producer: '',
      release_date: '',
      characters: []
    }
  ],
  error: null,
  loading: false
};

export const filmsReducer: Reducer<FilmsState, Actions> = (state = initialState, action) => {
  switch (action.type) {
    case FilmsActionTypes.FETCH_REQUEST: {
      return { ...state, loading: true };
    }
    case FilmsActionTypes.FETCH_SUCCESS: {
      return { ...state, loading: false, data: action.payload };
    }
    case FilmsActionTypes.FETCH_ERROR: {
      return { ...state, loading: false, errors: action.payload };
    }
    default: {
      return state;
    }
  }
};

export const getFilms = (state: RootState): FilmsState['data'] => state.films.data;
