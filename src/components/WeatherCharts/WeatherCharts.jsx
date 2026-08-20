import React from "react";
import {
  CartesianGrid,
  Line,
  LineChart,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import useWeatherCharts from "./useWeatherCharts";
import styles from "./WeatherCharts.module.scss";

const WeatherCharts = () => {
  const {
    chartData,
    error,
    isPending,
    selectedParameter,
    setSelectedParameter,
    parameter,
    parameters,
  } = useWeatherCharts();
  return (
    <section className={styles.chartSection}>
      <h2>Погода у графіку</h2>
      <p>Динаміка показників протягом 5 днів</p>
      {/* <select value={selectedParameter} onChange={(event)=>{setSelectedParameter(event.target.value)}}>{Object.entries(parameters)}</select> */}
      <div>
        <LineChart width="100%" height={400} data={chartData}>
          <XAxis dataKey="name" />
          <YAxis width="auto" />
          <Tooltip />
          <CartesianGrid strokeDasharray="5 5" stroke="#f5f5f5" />
          <Line
            type="monotone"
            dataKey={selectedParameter}
            name="max"
            stroke="#ff7300"
          />
        </LineChart>
      </div>
    </section>
  );
};

export default WeatherCharts;
