import React from 'react';

import ExchangeListView from './ExchangeListView';
import ExchangeView from './ExchangeView';
import Loader from './Loader';
import { fetchExchanges } from './CoingeckoAPI';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = { hash: window.location.hash };
  }

  componentDidMount() {
    fetchExchanges()
      .then(data => this.setState({ data }));
    
    this.updateHash = () => this.setState({ hash: window.location.hash });
    window.addEventListener('hashchange', this.updateHash);
  }

  componentWillUnmount() {
    window.removeEventListener('hashchange', this.updateHash);
    delete this.updateHash;
  }

  render() {
    if (this.state.hash) {
      return <ExchangeView coinId={this.state.hash}/>;
    }

    if (!this.state.data) {
      return <Loader/>;
    }

    return <ExchangeListView exchanges={this.state.data}/>;
  }
}

export default App;
