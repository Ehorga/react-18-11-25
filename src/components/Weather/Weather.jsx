import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getWeatherThunk } from "./../../store/weatherSlice";
import CODES from "./codes.json";
import CITIES from "./cities.json";
import DayWeather from "./DayWeather";

const Weather = () => {
  const dispatch = useDispatch();
  const [currentCity, setCurrentCity] = useState(CITIES[0].name);
  const { weather, isPending, error } = useSelector((state) => state.weather);
  const cityGeoInfo = CITIES.find((city) => city.name === currentCity);
  useEffect(() => {
    dispatch(getWeatherThunk(cityGeoInfo));
  }, [dispatch, cityGeoInfo]);
  const getIcon = (code) => CODES[code]?.icon;
  const getLabel = (code) => CODES[code]?.label;
  const showCity = (city) => (
    <option value={city.name} key={city.name}>
      {city.name}
    </option>
  );
  const showDayWeather = (day, index) => (
    <DayWeather
      day={day}
      icon={CODES[weather?.daily?.weather_code[index]]?.icon}
      label={CODES[weather?.daily?.weather_code[index]]?.label}
      wind={weather?.daily?.wind_speed_10m_max[index]}
      precipitation={weather?.daily?.precipitation_probability_max[index]}
      tempMin={weather?.daily?.temperature_2m_min[index]}
      tempMax={weather?.daily?.temperature_2m_max[index]}
      key={day}
    />
  );
  if (isPending) {
    return <p>Loading</p>;
  }
  if (error) {
    return <p>На жаль, сервер тимчасово не доступний. Спробуйте пізніше.</p>;
  }
  return (
    <section>
      <div>
        <h1>Погода</h1>
        <p>Актуальний прогноз від Open-Meteo для обласних центрів України.</p>
      </div>
      <label>
        <span>Місто</span>
        <select
          value={currentCity}
          onChange={(event) => setCurrentCity(event.target.value)}
        >
          {CITIES.map(showCity)}
        </select>
      </label>
      <div>
        <article>
          <h2>{currentCity}</h2>
          <p>Оновлено: {weather?.current?.time}</p>
          <div>
            <span>{getIcon(weather?.current?.weather_code)}</span>
            <div>
              <h3>{weather?.current?.temperature_2m}°C</h3>
              <p>{getLabel(weather?.current?.weather_code)}</p>
            </div>
          </div>
          <div>
            <p>Опади {weather?.current?.rain} мм</p>
            <p>Вітер {weather?.current?.wind_speed_10m} км/год</p>
          </div>
        </article>
        <section>
          <h2>Прогноз на 5 днів</h2>
          <div>{weather?.daily?.time?.map(showDayWeather)}</div>
        </section>
      </div>
    </section>
  );
};

export default Weather;
