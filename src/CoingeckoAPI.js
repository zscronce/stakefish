const COINGECKO_URL = 'https://api.coingecko.com/api/v3';

function fetchJSON(url) {
    return fetch(url)
        .then(response => response.json());
}

export function fetchExchanges() {
    return fetchJSON(COINGECKO_URL + '/exchanges');
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
