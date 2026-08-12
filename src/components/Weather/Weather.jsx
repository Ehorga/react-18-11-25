import CODES from "./codes.json";
import CITIES from "./cities.json";
import DayWeather from "./DayWeather";
import styles from "./Weather.module.scss";
import useWeather from "./useWeather";

const Weather = () => {
  const {
    isPending,
    error,
    icon,
    label,
    codes,
    winds,
    precipitations,
    tempMins,
    tempMaxs,
    currentCity,
    setCurrentCity,
    time,
    temperature,
    rain,
    wind,
    times,
  } = useWeather();
  const showCity = (city) => (
    <option value={city.name} key={city.name}>
      {city.name}
    </option>
  );
  const showDayWeather = (day, index) => {
    const code = CODES[codes[index]]
    return(
    <DayWeather
      day={day}
      icon={code?.icon}
      label={code?.label}
      wind={winds[index]}
      precipitation={precipitations[index]}
      tempMin={tempMins[index]}
      tempMax={tempMaxs[index]}
      key={day}
    />
  )}
  if (isPending) {
    return <p>Loading</p>;
  }
  if (error) {
    return <p>На жаль, сервер тимчасово не доступний. Спробуйте пізніше.</p>;
  }
  return (
    <section className={styles.weather}>
      <div className={styles.parent}>
        <div>
          <h1>Погода</h1>
          <p>Актуальний прогноз від Open-Meteo для обласних центрів України.</p>
        </div>
        <label className={styles.label}>
          <span>Місто</span>
          <select
            value={currentCity}
            onChange={(event) => setCurrentCity(event.target.value)}
          >
            {CITIES.map(showCity)}
          </select>
        </label>
      </div>
      <div className={styles.parent}>
        <article className={styles.currentDay}>
          <h2>{currentCity}</h2>
          <p>Оновлено: {time}</p>
          <div className={styles.code}>
            <span className={styles.iconCode}>{icon}</span>
            <div>
              <h3>{temperature}°C</h3>
              <p>{label}</p>
            </div>
          </div>
          <div className={styles.parent}>
            <p>Опади {rain} мм</p>
            <p>Вітер {wind} км/год</p>
          </div>
        </article>

        <section className={styles.days}>
          <h2>Прогноз на 5 днів</h2>
          <div className={styles.parent}>{times?.map(showDayWeather)}</div>
        </section>
      </div>
    </section>
  );
};

export default Weather;
