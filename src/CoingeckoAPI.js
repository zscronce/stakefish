const COINGECKO_URL = 'https://api.coingecko.com/api/v3';
const DEFAULT_NUM_EXCHANGES = 10;

function fetchJSON(url) {
  return fetch(url).then(response => response.json());
}

export function fetchExchanges(count) {
  count = count || DEFAULT_NUM_EXCHANGES;
  return fetchJSON(COINGECKO_URL + '/exchanges?per_page=' + count);
}

export function fetchExchange(id) {
  return fetchJSON(COINGECKO_URL + '/exchanges/' + id);
}
