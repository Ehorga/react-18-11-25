import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getWeatherThunk } from "./../../store/weatherSlice";
import CODES from "./codes.json";
import CITIES from "./cities.json";

function useWeather() {
  const dispatch = useDispatch();
  const [currentCity, setCurrentCity] = useState(CITIES[0].name);
  const { weather, isPending, error } = useSelector((state) => state.weather);
  const cityGeoInfo = CITIES.find((city) => city.name === currentCity);
  useEffect(() => {
    dispatch(getWeatherThunk(cityGeoInfo));
  }, [dispatch, cityGeoInfo]);
  const getIcon = (code) => CODES[code]?.icon;
  const getLabel = (code) => CODES[code]?.label;
  const code = weather?.current?.weather_code
  return {
    isPending,
    error,
    icon:getIcon(code),
    label:getLabel(code),
    codes:weather?.daily?.weather_code,
    winds:weather?.daily?.wind_speed_10m_max,
    precipitations:weather?.daily?.precipitation_probability_max,
    tempMins:weather?.daily?.temperature_2m_min,
    tempMaxs:weather?.daily?.temperature_2m_max,
    currentCity,setCurrentCity, 
    time:weather?.current?.time,
    temperature:weather?.current?.temperature_2m,
    rain:weather?.current?.rain,
    wind:weather?.current?.wind_speed_10m,
    times:weather?.daily?.time,
  };
}

export default useWeather;
