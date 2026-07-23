import { WEEKDAYS } from "../../constants";

const DayWeather = (props) => {
  const { day , icon , label ,wind ,precipitation , tempMin ,tempMax} = props;

  return (
    <article>
      <p>{WEEKDAYS[new Date(day).getDay()]}</p>
      <h3>{day}</h3>
      <p>{icon}</p>
      <p>{label}</p>
      <p>Опади: {precipitation}</p>
      <p>Вітер: {wind}</p>
      <p>{tempMax} / {tempMin}</p>
    </article>
  );
};

export default DayWeather;
