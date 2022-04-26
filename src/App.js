import React from 'react';

import CoinList from './CoinList';
import CoinView from './Coin';
import Loader from './Loader';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  componentDidMount() {
    fetch('https://api.coingecko.com/api/v3/exchanges/list')
      .then(response => response.json())
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
