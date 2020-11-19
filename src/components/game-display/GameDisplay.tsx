import React from 'react';
import { connect, ConnectedProps } from 'react-redux';
import { bindActionCreators, Action, Dispatch } from 'redux';
import { RootState } from '../../redux/store';
import fetchFilmsDispatcher from '../../redux/actions-dispatcher/films';
import { getFilms } from '../../redux/reducers/films';
import { Planet } from '../../redux/types/planets';
import './GameDisplay.scss';

const mapStateToProps = (state: RootState) => ({
  films: getFilms(state)
});

const mapDispatchToProps = (dispatch: Dispatch<Action>) =>
  bindActionCreators({ fetchFilms: fetchFilmsDispatcher }, dispatch);

const connector = connect(mapStateToProps, mapDispatchToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;
interface GameDisplayProps extends PropsFromRedux {
  planet: Planet;
}

class GameDisplay extends React.Component<GameDisplayProps> {
  componentDidMount(): void {
    const { fetchFilms, planet } = this.props;

    fetchFilms(planet.films);
  }

  async componentDidUpdate(prevProps: GameDisplayProps) {
    const { fetchFilms, planet } = this.props;

    if (planet.films !== prevProps.planet.films) {
      await fetchFilms(planet.films);
    }
  }

  render(): JSX.Element {
    const { planet, films } = this.props;

    return (
      <div className="game-planet-container">
        <div className="name">{planet.name}</div>
        <div className="description">
          <div className="item">
            Population: <span className="planet-info">{planet.population}</span>
          </div>
          <div className="item">
            Climate: <span className="planet-info">{planet.climate}</span>
          </div>
          <div className="item">
            Terrain: <span className="planet-info">{planet.terrain}</span>
          </div>
          <div className="featured-item">
            Featured In:
            <div className="item films">
              {films.map((film) => {
                return (
                  <span className="planet-info" key={film.title}>
                    {film.title}
                  </span>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default connector(GameDisplay);
