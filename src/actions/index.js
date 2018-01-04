import Axios from 'axios';
import API from './../../config';
const URL = `https://api.openweathermap.org/data/2.5/forecast?appid=${API.key}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {
  const url = `${URL}&q=${city},us`;
  const request = Axios.get(url);
  return {
    type: FETCH_WEATHER,
    payload: request
  }
};
