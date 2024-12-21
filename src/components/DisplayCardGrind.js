import { Grid2 } from "@mui/material";

import DisplayCard from "./DisplayCard";

import sun from '../assets/sun.jpg'
import temperature from '../assets/temperature.jpg'
import gas from '../assets/gas.jpg'
import humidity from '../assets/humidity.png'

export default function DisplayCardGrid() {

  const displayItems = [
    { name: "Temperature", value: "12", path: "/temperature", image:temperature},
    { name: "Humidity", value: "12", path: "/humidity", image:humidity},
    { name: "Light Intensity", value: "12", path: "/light", image:sun},
    { name: "Gas Voltage", value: "12", path: "/gas", image:gas }
  ];


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