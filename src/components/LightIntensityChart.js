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


export default function LightIntensityChart() {
  const [data, setData] = useState(() => {
    const savedData = localStorage.getItem("lightData");
    return savedData
      ? JSON.parse(savedData)
      : [
          { Day: "Monday", LightIntensity: 0 },
          { Day: "Tuesday", LightIntensity: 0 },
          { Day: "Wednesday", LightIntensity: 0 },
          { Day: "Thursday", LightIntensity: 0 },
          { Day: "Friday", LightIntensity: 0 },
          { Day: "Saturday", LightIntensity: 0 },
          { Day: "Sunday", LightIntensity: 0 },
        ];
  });

  const getCurrentDay = () => {
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const today = new Date().getDay();
    return days[today];
  };

 
  

  


  const updateLightIntensity = (lightIntensity) => {
    const currentDay = getCurrentDay();
    setData((prevData) => {
      const updatedData = prevData.map((item) =>
        item.Day === currentDay ? { ...item, LightIntensity: item.LightIntensity ?? lightIntensity } : item
      );
      
      localStorage.setItem("lightData", JSON.stringify(updatedData));
      return updatedData;
    });
  };

  useEffect(() => {
    const interval = setInterval(() => {
      fetch("http://localhost:8081/api/iot/data?filter=lightIntensity", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "X-API-KEY": process.env.REACT_APP_API_KEY
        }
      })
        .then((response) => response.json())
        .then((data) => {
          console.log("New light intensity:", data.lightIntensity);
          updateLightIntensity(data.lightIntensity);
        })
        .catch((error) => console.error("Error fetching light intensity:", error));
    }, 10000);

    return () => clearInterval(interval);
  }, []);


  return(
    <>
      <h1 className="flex justify-center pb-4 font-bold">
        Weekly Light Intensity Report 
      </h1>
      <ResponsiveContainer  width={"100%"} height={350}>
          <LineChart data={data} margin={{top: 20 }}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="Day" padding={{left: 30, right: 30}} />
            <YAxis dataKey="LightIntensity" padding={{left:30, right: 30}}/>
            <Tooltip />
            <Legend />
            <Line
              type="monotone"
              dataKey="LightIntensity"
              name="Light Intensity"
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