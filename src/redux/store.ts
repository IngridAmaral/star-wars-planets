import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { planetsReducer } from './reducers/planets';
import { filmsReducer } from './reducers/films';

const rootReducer = combineReducers({
  planets: planetsReducer,
  films: filmsReducer
});

const middlewares = [thunk];

export const store = createStore(rootReducer, applyMiddleware(...middlewares));
export type RootState = ReturnType<typeof rootReducer>;
