import React from "react";

import {
  AreaChart,
  Area,
  ResponsiveContainer,
  XAxis,
  YAxis,
  CartesianGrid,
} from "recharts";

const data = [
  {
    name: "12ص",
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: "1ص",
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: "2ص",
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: "3ص",
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: "4ص",
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: "5ص",
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: "6ص",
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
  {
    name: "7ص",
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: "8ص",
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: "9ص",
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: "10ص",
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: "11ص",
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: "12م",
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
];

const HumidityLevels = () => {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <AreaChart width={500} height={300} data={data}>
        {/* <YAxis /> */}
        <XAxis dataKey="name" />
        {/* <CartesianGrid strokeDasharray="3 3" /> */}
        <Area
          type="monotone"
          dataKey={"pv"}
          stroke="#82ca5d"
          fill="#82ca5d"
          stackId="1"
        />
        <Area
          type="monotone"
          dataKey={"uv"}
          stroke="#82ca9d"
          fill="#82ca9d"
          stackId="1"
        />
      </AreaChart>
    </ResponsiveContainer>
  );
};

export default HumidityLevels;
