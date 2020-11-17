import { ThunkAction } from 'redux-thunk';
import { RootState } from '../store';
import { fetchRequest, fetchSuccess, fetchError, Actions } from '../actions/planets';
import { fetchPlanets } from '../../api/api';

const fetchPlanetsDispatcher = (): ThunkAction<void, RootState, unknown, Actions> => async (
  dispatch
) => {
  dispatch(fetchRequest());
  try {
    const planets = await fetchPlanets();
    dispatch(fetchSuccess(planets));
  } catch (error) {
    dispatch(fetchError(error));
  }
};

export default fetchPlanetsDispatcher;
