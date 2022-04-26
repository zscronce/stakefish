const COINGECKO_URL = 'https://api.coingecko.com/api/v3';
const DEFAULT_NUM_EXCHANGES = 10;

function fetchJSON(url) {
    return fetch(url)
        .then(response => response.json());
}

export function fetchExchanges(count) {
    count = count || DEFAULT_NUM_EXCHANGES;
    return fetchJSON(COINGECKO_URL + '/exchanges?per_page=' + count);
}

export function fetchExchangesList() {
    return fetchJSON(COINGECKO_URL + '/exchanges/list');
}

export function fetchExchange(id) {
    return fetchJSON(COINGECKO_URL + '/exchanges/' + id);
}

export function fetchExchangeTickers(id) {
    return fetchJSON(COINGECKO_URL + '/exchanges/' + id + '/tickers');
}

export function fetchExchangeVolumeChart(id) {
    return fetchJSON(COINGECKO_URL + '/exchanges/' + id + '/volume_chart');
}
