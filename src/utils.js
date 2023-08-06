import axios from 'axios';
import { API_KEY } from './constants';

export const getCurrentWeather = ({ lat, long }) =>
  axios
    .get(
      `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${API_KEY}`
    )
    .then(({ data }) => data.main);

export const convertTemperature = (kelvin) => kelvin - 273;
