import React from "react";
import { fetchExchange, fetchExchangeTickers } from "../CoingeckoAPI";
import LoaderView from "./LoaderView";
import SocialLinkView from "./SocialLinkView";

import './ExchangeView.css'

class ExchangeView extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            exchange: null,
            tickers: null,
        };
    }

    componentDidMount() {
        fetchExchange(this.props.coinId)
            .then(exchange => this.setState({ exchange }));
        fetchExchangeTickers(this.props.coinId)
            .then(data => this.setState({ tickers: data.tickers }));
    }

    renderSocialLink(linkUrl, imgUrl, alt) {
        if (!linkUrl) {
            return null;
        }

        return <a href={linkUrl}>
            <img className="social-link" src={imgUrl} alt={alt}/>
        </a>;
    }

    render() {
        const { exchange, tickers } = this.state;

        if (exchange === null || tickers === null) {
            return <LoaderView/>;
        }

        return <div className="card">
            <div className="card-content">
                <div className="right">
                    <SocialLinkView
                        linkUrl={exchange.facebook_url}
                        iconUrl="https://simpleicons.org/icons/facebook.svg"
                        alt="facebook"
                    />
                    <SocialLinkView
                        linkUrl={exchange.reddit_url}
                        iconUrl="https://simpleicons.org/icons/reddit.svg"
                        alt="reddit"
                    />
                    <SocialLinkView
                        linkUrl={exchange.slack_url}
                        iconUrl="https://simpleicons.org/icons/slack.svg"
                        alt="slack"
                    />
                    <SocialLinkView
                        linkUrl={exchange.telegram_url}
                        iconUrl="https://simpleicons.org/icons/telegram.svg"
                        alt="telegram"
                    />
                    <SocialLinkView
                        linkUrl={'https://twitter.com/' + exchange.twitter_handle}
                        iconUrl="https://simpleicons.org/icons/twitter.svg"
                        alt="twitter"
                    />
                </div>
                <div className="card-title">
                    <div className="valign-wrapper">
                        <img className="circle responsive-img" alt="" src={exchange.image}/>
                        <h4 className="exchange-title">
                            {exchange.name}
                        </h4>
                    </div>
                </div>
                <p className="description">
                    {exchange.description}
                </p>
                <p className="description">
                    {exchange.public_notice}
                </p>
                <table>
                    <tbody>
                        <tr>
                            <th>Country</th>
                            <td>{exchange.country}</td>
                        </tr>
                        <tr>
                            <th>Trust Rank</th>
                            <td>{exchange.trust_score_rank}</td>
                        </tr>
                        <tr>
                            <th>Year Established</th>
                            <td>{exchange.year_established}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div className="card-action">
                <a href="/">Back To List</a>
            </div>
        </div>;
    }
}

export default ExchangeView;
