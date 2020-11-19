import React from 'react';
import { connect, ConnectedProps } from 'react-redux';
import { bindActionCreators, Action, Dispatch } from 'redux';
import { RootState } from './redux/store';
import fetchPlanetsDispatcher from './redux/actions-dispatcher/planets';
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
type AppState = {
  isStartPage: boolean;
  currentPlanetIndex: number;
  shouldTransition: boolean;
};
class App extends React.Component<AppProps, AppState> {
  state = {
    isStartPage: true,
    currentPlanetIndex: 0,
    shouldTransition: false
  };

  async componentDidMount() {
    const { fetchPlanets } = this.props;

    fetchPlanets();
  }

  activateTransition = () => {
    this.setState((prevState) => ({ shouldTransition: !prevState.shouldTransition }));

    setTimeout(() => {
      this.setState((prevState) => ({ shouldTransition: !prevState.shouldTransition }));
    }, 500);
  };

  changePage = () => {
    this.setState((prevState) => ({ isStartPage: !prevState.isStartPage }));

    this.activateTransition();
  };

  nextPlanet = () => {
    const { planets } = this.props;
    const { results } = planets;

    this.setState((prevState) => ({
      currentPlanetIndex:
        results.length - 1 <= prevState.currentPlanetIndex ? 0 : prevState.currentPlanetIndex + 1
    }));

    this.activateTransition();
  };

  renderPage = () => {
    const { isStartPage, currentPlanetIndex, shouldTransition } = this.state;
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
        <div className={`wrapper ${shouldTransition ? 'transition' : 'stop-transition'}`}>
          {pageContent}
        </div>
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
