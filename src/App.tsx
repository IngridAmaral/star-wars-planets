import React, { Fragment } from 'react';
import { connect, ConnectedProps } from 'react-redux';
import { bindActionCreators, Action, Dispatch } from 'redux';
import fetchPlanetsDispatcher from './redux/actions-dispatcher/planets';
import { RootState } from './redux/store';
import { getPlanets } from './redux/reducers/planets';
import Loading from './components/loading/Loading';
import Start from './components/start/Start';
import Button from './components/button/Button';
import GameDisplay from './components/game-display/GameDisplay';
import './App.scss';

const mapStateToProps = (state: RootState) => ({
  planets: getPlanets(state)
});

const mapDispatchToProps = (dispatch: Dispatch<Action>) =>
  bindActionCreators({ fetchPlanets: fetchPlanetsDispatcher }, dispatch);

const connector = connect(mapStateToProps, mapDispatchToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;
type AppProps = PropsFromRedux;
type AppState = { isStartPage: boolean; currentPlanetIndex: number };
class App extends React.Component<AppProps, AppState> {
  state = {
    isStartPage: true,
    currentPlanetIndex: 0
  };

  componentDidMount() {
    const { fetchPlanets } = this.props;
    fetchPlanets();
  }

  changePage = () => {
    this.setState((prevState) => ({ isStartPage: !prevState.isStartPage }));
  };

  nextPlanet = () => {
    const { planets } = this.props;
    const { results } = planets;

    this.setState((prevState) => ({
      currentPlanetIndex:
        results.length - 1 <= prevState.currentPlanetIndex ? 0 : prevState.currentPlanetIndex + 1
    }));
  };

  renderPage = () => {
    const { isStartPage, currentPlanetIndex } = this.state;
    const { planets } = this.props;
    const { results } = planets;
    const buttonFunction = isStartPage ? this.changePage : this.nextPlanet;
    const button = isStartPage ? 'start' : 'next';
    const pageContent = isStartPage ? (
      <Start />
    ) : (
      <GameDisplay planet={results[currentPlanetIndex]} />
    );

    return (
      <>
        <div className={`wrapper ${!isStartPage ? 'gameTransition' : 'tt'}`}>{pageContent}</div>
        <Button text={button} changePage={buttonFunction} />
      </>
    );
  };

  render() {
    const { planets } = this.props;

    !Object.keys(planets).length && <Loading />;

    return <div className="app-container">{this.renderPage()}</div>;
  }
}

export default connector(App);
