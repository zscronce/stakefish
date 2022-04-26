import React from 'react';

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
      return <Loader/>
    }

    return <p>{JSON.stringify(this.state.data)}</p>;
  }
}

export default App;
