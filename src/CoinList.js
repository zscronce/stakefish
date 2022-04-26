export function CoinListItem(props) {
    const { coin } = props;
    return (
        <li className="collection-item avatar">
            <a href={'#' + coin.id}>
                <img className="circle" alt="" src={coin.image}/>
            </a>
            <span className="title">
                {coin.trust_score_rank + ' - '}
                <a href={'#' + coin.id}>
                    <strong>
                        {coin.name}
                    </strong>
                </a>
            </span>
            <p>
                <a href={coin.url}>{coin.url}</a> ({coin.country})
            </p>
        </li>
    );
}

export function CoinList(props) {
    return <>
        <h4 className="header">Coingecko Exchanges</h4>
        <h6>Listed by Trust Rank</h6>
        <ul className="collection">
            { props.coins.map(coin =>
                <CoinListItem key={coin.id} coin={coin}/>
            )}
        </ul>
    </>;
}

export default CoinList;
