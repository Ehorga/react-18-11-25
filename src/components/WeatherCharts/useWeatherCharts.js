import { useState } from "react";
import { useSelector } from "react-redux";
const PARAMETERS = {
  max: {
    label: 'Максимальна температура',
    title: 'Максимальна температура, °C',
    unit: '°C',
    color: '#ef4444',
  },
  min: {
    label: 'Мінімальна температура',
    title: 'Мінімальна температура, °C',
    unit: '°C',
    color: '#3b82f6',
  },
  rain: {
    label: 'Ймовірність опадів',
    title: 'Ймовірність опадів, %',
    unit: '%',
    color: '#0ea5e9',
    domain: [0, 100],
  },
  wind: {
    label: 'Швидкість вітру',
    title: 'Швидкість вітру, км/год',
    unit: ' км/год',
    color: '#16a34a',
  },
};
function useWeatherCharts() {
  const [selectedParameter, setSelectedParameter] = useState("max");
  const { weather, isPending, error } = useSelector((state) => state.weather);
  const chartData = weather?.daily?.time?.map((date, index) => ({
    name: date.toString(),
    max: weather?.daily?.temperature_2m_max[index],
    min: weather?.daily?.temperature_2m_min[index],
    rain: weather?.daily?.precipitation_probability_max[index],
    wind: weather?.daily?.wind_speed_10m_max[index],
  }));
  return {
    chartData,
    isPending,
    error,
    selectedParameter,
    setSelectedParameter,
    parameter:PARAMETERS[selectedParameter],
    parameters:PARAMETERS
  };
}

export default useWeatherCharts;
