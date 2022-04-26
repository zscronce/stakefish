import React from 'react';

import CoinList from './CoinList';
import CoinView from './Coin';
import Loader from './Loader';
import { fetchExchangesList } from './CoingeckoAPI';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  componentDidMount() {
    fetchExchangesList()
      .then(data => this.setState({ data }));
  }

  render() {
    if (!this.state.data) {
      return <Loader/>;
    }

    if (window.location.hash) {
      return <CoinView id={window.location.hash}/>;
    }

    return <CoinList coins={this.state.data}/>;
  }
}

export default App;
