import React from "react";
import {
  CartesianGrid,
  Line,
  LineChart,
  ResponsiveContainer,
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
      <div className={styles.coloms}>
        <div><h2>Погода у графіку</h2>
      <p>Динаміка показників протягом 5 днів</p></div>
        <div> <h3>Параметр</h3>
      <select
        value={selectedParameter}
        onChange={(event) => {
          setSelectedParameter(event.target.value);
        }}
      >
        {Object.entries(parameters).map(([value, options]) => (
          <option key={value} value={value}>
            {options.label}
          </option>
        ))}
      </select></div>
      </div>
      
     
      <div className={styles.chart}>
        <h3>{parameter.title}</h3>
        {/* <ResponsiveContainer width="100%" height='100%'> */}
        <LineChart width="100%" height={400} data={chartData}>
          <XAxis dataKey="name" />
          <YAxis width="auto" unit={parameter.unit} />
          <Tooltip
            formatter={(v) => [`${v}${parameter.unit}`, parameter.label]}
          />
          <CartesianGrid strokeDasharray="5 5" stroke="#f5f5f5" />
          <Line
            type="monotone"
            dataKey={selectedParameter}
            name="max"
            stroke={parameter.color}
            strokeWidth={4}
          />
        </LineChart>
        {/* </ResponsiveContainer> */}
      </div>
    </section>
  );
};

export default WeatherCharts;
