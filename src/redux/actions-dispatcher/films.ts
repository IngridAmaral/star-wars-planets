import { ThunkAction } from 'redux-thunk';
import { RootState } from '../store';
import { fetchRequest, fetchSuccess, fetchError, Actions } from '../actions/films';
import { fetchFilms } from '../../api/api';

const fetchFilmsDispatcher = (
  urls: string[]
): ThunkAction<void, RootState, unknown, Actions> => async (dispatch) => {
  dispatch(fetchRequest());
  try {
    const films = await fetchFilms(urls);
    dispatch(fetchSuccess(films));
  } catch (error) {
    dispatch(fetchError(error));
  }
};

export default fetchFilmsDispatcher;
