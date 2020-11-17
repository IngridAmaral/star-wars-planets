import React from 'react';
import { connect, ConnectedProps } from 'react-redux';
import { bindActionCreators, Action, Dispatch } from 'redux';
import fetchPlanetsDispatcher from './redux/actions-dispatcher/planets';
import { RootState } from './redux/store';
import { getPlanets } from './redux/reducers/planets';
import './App.scss';

const mapStateToProps = (state: RootState) => ({
  planets: getPlanets(state)
});

const mapDispatchToProps = (dispatch: Dispatch<Action>) =>
  bindActionCreators({ fetchPlanets: fetchPlanetsDispatcher }, dispatch);

const connector = connect(mapStateToProps, mapDispatchToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;
type AppProps = PropsFromRedux;
class App extends React.Component<AppProps> {
  componentDidMount() {
    const { fetchPlanets } = this.props;
    fetchPlanets();
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">hello</header>
      </div>
    );
  }
}

export default connector(App);
