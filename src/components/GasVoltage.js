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

import { useEffect, useState } from "react";


export default function GasVoltageChart() {
  const [data, setData] = useState(() => {
    const savedData = localStorage.getItem("gasData");
    return savedData
      ? JSON.parse(savedData)
      : [
          { Day: "Monday", GasVoltage: null },
          { Day: "Tuesday", GasVoltage: null },
          { Day: "Wednesday", GasVoltage: null },
          { Day: "Thursday", GasVoltage: null },
          { Day: "Friday", GasVoltage: null },
          { Day: "Saturday", GasVoltage: null },
          { Day: "Sunday", GasVoltage: null },
        ];
  });


  const getCurrentDay = () => {
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const today = new Date().getDay();
    return days[today];
  };

  const updateGasVoltage = (gasVoltage) => {
    const currentDay = getCurrentDay();
    setData((prevData) => {
      const updatedData = prevData.map((item) =>
        item.Day === currentDay ? { ...item, GasVoltage: item.GasVoltage ?? gasVoltage } : item
      );
      
      localStorage.setItem("gasData", JSON.stringify(updatedData));
      return updatedData;
    });
  };


  useEffect(() => {
    const interval = setInterval(() => {
      fetch("http://localhost:8081/api/iot/data?filter=gasVoltage", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "X-API-KEY": process.env.REACT_APP_API_KEY
        }
      })
        .then((response) => response.json())
        .then((data) => {
          console.log("New gas voltage:", data.gasVoltage);
          updateGasVoltage(data.gasVoltage);
        })
        .catch((error) => console.error("Error fetching gas voltage:", error));
    }, 10000);

    return () => clearInterval(interval);
  }, []);



  return(
    <>
      <h1 className="flex justify-center pb-4 font-bold">
        Weekly Gas Voltage Report 
      </h1>
      <ResponsiveContainer  width={"100%"} height={350}>
          <LineChart data={data} margin={{top: 20 }}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="Day" padding={{left: 30, right: 30}} />
            <YAxis dataKey="GasVoltage" padding={{left:30, right: 30}}/>
            <Tooltip />
            <Legend />
            <Line
              type="monotone"
              dataKey="GasVoltage"
              name="Gas Voltage"
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