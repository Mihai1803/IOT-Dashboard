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


export default function HumidityChart() {

  const [data, setData] = useState(() => {
    const savedData = localStorage.getItem("humidityData");
    return savedData
      ? JSON.parse(savedData)
      : [
          { Day: "Monday", Humidity: 0 },
          { Day: "Tuesday", Humidity: 0 },
          { Day: "Wednesday", Humidity: 0 },
          { Day: "Thursday", Humidity: 0 },
          { Day: "Friday", Humidity: 0 },
          { Day: "Saturday", Humidity: 0 },
          { Day: "Sunday", Humidity: 0 },
        ];
  });

  
    const getCurrentDay = () => {
      const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
      const today = new Date().getDay();
      return days[today];
    };


  
    const updateHumidity = (humidity) => {
      const currentDay = getCurrentDay();
      setData((prevData) => {
        const updatedData = prevData.map((item) =>
          item.Day === currentDay ? { ...item, Humidity: item.Humidity ?? humidity } : item
        );
        
        localStorage.setItem("humidityData", JSON.stringify(updatedData));
        return updatedData;
      });
    };
  
    useEffect(() => {
      const interval = setInterval(() => {
        fetch("http://localhost:8081/api/iot/data?filter=humidity", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            "X-API-KEY": process.env.REACT_APP_API_KEY
          }
        })
          .then((response) => response.json())
          .then((data) => {
            console.log("New humidity:", data.humidity);
            updateHumidity(data.humidity);
          })
          .catch((error) => console.error("Error fetching humidity:", error));
      }, 10000);
  
      return () => clearInterval(interval);
    }, []);
  


  return(
    <>
      <h1 className="flex justify-center pb-4 font-bold">
        Weekly Humidity Report 
      </h1>
      <ResponsiveContainer  width={"100%"} height={350}>
          <LineChart data={data} margin={{top: 20 }}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="Day" padding={{left: 30, right: 30}} />
            <YAxis dataKey="Humidity" padding={{left:30, right: 30}}/>
            <Tooltip />
            <Legend />
            <Line
              type="monotone"
              dataKey="Humidity"
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