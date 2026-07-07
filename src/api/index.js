import axios from "axios";
import queryString from "query-string";

const httpClient = axios.create({
  baseURL: "https://fakerapi.it/api/v2/",
});
const weatherClient = axios.create({
  baseURL: "https://api.open-meteo.com/v1/",
});

export const getAllBooks = (options) => {
  const allOptions = { ...options, _locale: "uk_UA" };
  const queryStr = queryString.stringify(allOptions);
  return httpClient.get(`/books?${queryStr}`);
};

// https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&daily=temperature_2m_max,temperature_2m_min,rain_sum&hourly=temperature_2m&current=temperature_2m,rain,cloud_cover,wind_speed_10m
export const getWeather = (options) => {
  const allOptions = {
    ...options,
    daily:
      "temperature_2m_max,temperature_2m_min,weather_code,precipitation_probability_max,wind_speed_10m_max",
    current: "temperature_2m,rain,wind_speed_10m,weather_code",
    timezone: 'auto',
    forecast_days: 5
  };
  const queryStr = queryString.stringify(allOptions);
  return weatherClient.get(`/forecast?${queryStr}`);
};
