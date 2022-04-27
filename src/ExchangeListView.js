export function ExchangeListItemView(props) {
    const { exchange } = props;
    return (
        <li className="collection-item avatar">
            <a href={'#' + exchange.id}>
                <img className="circle" alt="" src={exchange.image}/>
            </a>
            <span className="title">
                {exchange.trust_score_rank + ' - '}
                <a href={'#' + exchange.id}>
                    <strong>
                        {exchange.name}
                    </strong>
                </a>
            </span>
            <p>
                <a href={exchange.url}>{exchange.url}</a> ({exchange.country})
            </p>
        </li>
    );
}

export function ExchangeListView(props) {
    return <>
        <h4 className="header">Exchangegecko Exchanges</h4>
        <h6>By most trusted</h6>
        <ul className="collection">
            { props.exchanges.map(exchange =>
                <ExchangeListItemView key={exchange.id} exchange={exchange}/>
            )}
        </ul>
    </>;
}

export default ExchangeListView;
