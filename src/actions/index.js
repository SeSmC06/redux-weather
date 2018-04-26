import axios from 'axios';

const API_KEY = 'adcc2f96b9a42417e5c4fb6e05004965';

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {
  const url = `http://api.openweathermap.org/data/2.5/forecast?q=${city},us&appid=${API_KEY}`;
  const request = axios.get(url);
  console.log('Request =>', request);
  return {
    type: FETCH_WEATHER,
    payload: request
  };
}
