import React from 'react';

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

  renderData() {
    return <p>{JSON.stringify(this.state.data)}</p>;
  }

  renderLoader() {
    return (
      <div className="progress">
        <div className="indeterminate"/>
      </div>
    );
  }

  render() {
    return this.state.data ? this.renderData() : this.renderLoader();
  }
}

export default App;
