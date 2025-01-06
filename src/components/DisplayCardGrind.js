import { Grid2 } from "@mui/material";

import DisplayCard from "./DisplayCard";

import sun from '../assets/sun.jpg'
import temperature from '../assets/temperature.jpg'
import gas from '../assets/gas.jpg'
import humidity from '../assets/humidity.png'

import { useEffect, useState } from "react"

export default function DisplayCardGrid() {


  const [displayItems, setDisplayItems] = useState([
    { name: "Temperature", value: "--", path: "/temperature", image: temperature },
    { name: "Humidity", value: "--", path: "/humidity", image: humidity },
    { name: "Light Intensity", value: "--", path: "/light", image: sun },
    { name: "Gas Voltage", value: "--", path: "/gas", image: gas }
  ]);

  useEffect(() => {
    fetch("http://localhost:8081/api/iot/data",{
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "X-API-KEY": process.env.REACT_APP_API_KEY
      }
    })
      .then((response) => response.json())
      .then((data) => {
        const updatedItems = [
          { name: "Temperature", value: data.temperature, path: "/temperature", image: temperature },
          { name: "Humidity", value: data.humidity, path: "/humidity", image: humidity },
          { name: "Light Intensity", value: data.lightIntensity, path: "/light", image: sun },
          { name: "Gas Voltage", value: data.gasVoltage, path: "/gas", image: gas }
        ];
        setDisplayItems(updatedItems);
      })
      .catch((error) => console.error("Error fetching sensor data:", error));
  }, []);



    return (
      <Grid2 container spacing={8} className="flex justify-center">
      {displayItems.map((item, index) => (
        <Grid2 key={index} xs={12} sm={6} md={4} lg={3} className="flex justify-center">
          <DisplayCard item={item} />
        </Grid2>
      ))}
    </Grid2>
    )
}