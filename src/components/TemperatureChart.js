import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  LabelList,
} from "recharts";

import { useState, useEffect } from "react";


export default function TemperatureChart() {

  const [data, setData] = useState(() => {
    const savedData = localStorage.getItem("temperatureData");
    return savedData
      ? JSON.parse(savedData)
      : [
          { Day: "Monday", Temperature: null },
          { Day: "Tuesday", Temperature: null },
          { Day: "Wednesday", Temperature: null },
          { Day: "Thursday", Temperature: null },
          { Day: "Friday", Temperature: null },
          { Day: "Saturday", Temperature: null },
          { Day: "Sunday", Temperature: null },
        ];
  });

  const getCurrentDay = () => {
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const today = new Date().getDay();
    return days[today];
  };

  const updateTemperature = (temperature) => {
    const currentDay = getCurrentDay();
    setData((prevData) => {
      const updatedData = prevData.map((item) =>
        item.Day === currentDay ? { ...item, Temperature: item.Temperature ?? temperature } : item
      );
      
      localStorage.setItem("temperatureData", JSON.stringify(updatedData));
      return updatedData;
    });
  };

  useEffect(() => {
    const interval = setInterval(() => {
      fetch("http://localhost:8081/api/iot/data?filter=temperature", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "X-API-KEY": process.env.REACT_APP_API_KEY
        }
      })
        .then((response) => response.json())
        .then((data) => {
          console.log("New temperature:", data.temperature);
          updateTemperature(data.temperature);
        })
        .catch((error) => console.error("Error fetching temperature:", error));
    }, 10000);

    return () => clearInterval(interval);
  }, []);


  return(
    <>
      <h1 className="flex justify-center pb-4 font-bold">
        Weekly Temperature Report 
      </h1>
      <ResponsiveContainer  width={"100%"} height={350}>
          <LineChart data={data} margin={{top: 20 }}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="Day" padding={{left: 30, right: 30}} />
            <YAxis dataKey="Temperature" padding={{left:30, right: 30}}/>
            <Tooltip />
            <Legend />
            <Line
              type="monotone"
              dataKey="Temperature"
              stroke="#8884d8"
              activeDot={{ r: 8 }}
            >
              <LabelList position="top" offset={10} />
            </Line>
          </LineChart>
      </ResponsiveContainer>
    </>
  )
}