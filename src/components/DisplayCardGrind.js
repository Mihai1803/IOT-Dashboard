


import { Grid2 } from "@mui/material";

import DisplayCard from "./DisplayCard";



export default function DisplayCardGrid() {

  const displayItems = [
    { name: "Temperature", value: "12", path: "/temperature" },
    { name: "Humidity", value: "12", path: "/humidity" },
    { name: "Light Intensity", value: "12", path: "/light" },
    { name: "Gas Voltage", value: "12", path: "/gas" }
  ];


    return (
      <Grid2 container spacing={4} columns={32}>
      {displayItems.map((item, index) => (
        <Grid2 key={index} size={8} className="flex justify-center">
          <DisplayCard item={item} />
        </Grid2>
      ))}
    </Grid2>
    )
}