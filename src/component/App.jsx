import React from 'react';

import ExchangeListView from './ExchangeListView';
import ExchangeView from './ExchangeView';
import LoaderView from './LoaderView';
import { fetchExchanges } from '../CoingeckoAPI';

import './App.css';

function getAnchor() {
  return window.location.hash.substring(1);
}

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = { hash: getAnchor() };
  }

  componentDidMount() {
    fetchExchanges()
      .then(data => this.setState({ data }));
    
    this.updateHash = () => this.setState({ hash: getAnchor() });
    window.addEventListener('hashchange', this.updateHash);
  }

  componentWillUnmount() {
    window.removeEventListener('hashchange', this.updateHash);
    delete this.updateHash;
  }

  render() {
    if (this.state.hash) return <ExchangeView coinId={this.state.hash}/>;

    if (!this.state.data) return <LoaderView/>;

    return <ExchangeListView exchanges={this.state.data}/>;
  }
}

export default App;
