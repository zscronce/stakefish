import React from "react";
import { fetchExchange } from "../CoingeckoAPI";
import LoaderView from "./LoaderView";
import SocialLinkView from "./SocialLinkView";

import './ExchangeView.css'

class ExchangeView extends React.Component {
  constructor(props) {
    super(props);

    // null means "not loaded"
    this.state = { exchange: null };
  }

  componentDidMount() {
    fetchExchange(this.props.coinId)
      .then(exchange => this.setState({ exchange }));
  }

  render() {
    const { exchange } = this.state;

    if (exchange === null) {
      return <LoaderView/>;
    }

    return <div className="card">
      <div className="card-content">
        <div className="right">
          <SocialLinkView
            alt="facebook"
            linkUrl={exchange.facebook_url}
            iconUrl="https://simpleicons.org/icons/facebook.svg"
          />
          <SocialLinkView
            alt="reddit"
            linkUrl={exchange.reddit_url}
            iconUrl="https://simpleicons.org/icons/reddit.svg"
          />
          <SocialLinkView
            alt="slack"
            linkUrl={exchange.slack_url}
            iconUrl="https://simpleicons.org/icons/slack.svg"
          />
          <SocialLinkView
            alt="telegram"
            linkUrl={exchange.telegram_url}
            iconUrl="https://simpleicons.org/icons/telegram.svg"
          />
          <SocialLinkView
            alt="twitter"
            linkUrl={'https://twitter.com/' + exchange.twitter_handle}
            iconUrl="https://simpleicons.org/icons/twitter.svg"
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
