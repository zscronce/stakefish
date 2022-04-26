export function CoinListItem(props) {
    return (
        <li>
            <a href={'#' + props.id}>
                {props.name}
            </a>
        </li>
    );
}

export function CoinList(props) {
    return <>
        <h4>Coingecko Exchanges</h4>
        <ul>
            { props.coins.map(coin =>
                <CoinListItem key={coin.id} id={coin.id} name={coin.name}/>
            )}
        </ul>
    </>;
}

export default CoinList;
