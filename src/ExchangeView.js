import React from "react";
import { fetchExchange, fetchExchangeTickers, fetchExchangeVolumeChart } from "./CoingeckoAPI";
import Table from "./Table";

class ExchangeView extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            exchange: null,
            tickers: null,
            volume_chart: null,
        };
    }

    componentDidMount() {
        fetchExchange(this.props.coinId)
            .then(exchange => this.setState({ exchange }))
        fetchExchangeTickers(this.props.coinId)
            .then(tickers => this.setState({ tickers }));
        fetchExchangeVolumeChart(this.props.coinId)
            .then(volume_chart => this.setState({ volume_chart }));
    }

    render() {
        return <>
            <h4>Exchange</h4>
            <Table data={this.state.exchange}/>
            <h4>Tickers</h4>
            <Table data={this.state.tickers}/>
            <h4>Volume Chart</h4>
            <Table data={this.state.volume_chart}/>
        </>;
    }
}

export default ExchangeView;
