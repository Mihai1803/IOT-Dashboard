import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import AppBar from "@mui/material/AppBar";
import CssBaseline from "@mui/material/CssBaseline";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";

// Icons
import HomeIcon from "@mui/icons-material/Home";
import ThermostatIcon from "@mui/icons-material/Thermostat";
import WaterDropIcon from "@mui/icons-material/WaterDrop";
import LightModeIcon from "@mui/icons-material/LightMode";
import VoltageIcon from "@mui/icons-material/FlashOn";
import MenuBookIcon from "@mui/icons-material/MenuBook";



import { Grid2 } from "@mui/material";

import TemperatureDisplayCard from "./cards/TemperatureDisplayCard";
import HumidityDisplayCard from "./cards/HumidityDisplayCard";
import LightIntensityDisplayCard from "./cards/LightIntensityDisplayCard";
import GasVoltageDisplayCard from "./cards/GasVoltageDisplayCard";

import { Link } from "react-router-dom";

const drawerWidth = 240;


export default function Navigation() {
  const menuItems = [
    { text: "Home", icon: <HomeIcon />, path: "/" },
    { text: "Temperature Report", icon: <ThermostatIcon />, path: "/temperature" },
    { text: "Humidity Report", icon: <WaterDropIcon />, path: "/humidity" },
    { text: "Light Intensity Report", icon: <LightModeIcon />, path: "/light" },
    { text: "Gas Voltage Report", icon: <VoltageIcon />, path: "/gas" },
  ];

  const additionalItems = [
    { text: "Guide", icon: <MenuBookIcon /> },
  ];

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
      >
        <Toolbar>
          <Typography variant="h6" noWrap component="div">
            IoT Dashboard
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: {
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
      >
        <Toolbar />
        <Box sx={{ overflow: "auto" }}>
          <List>
            {menuItems.map((item, index) => (
              <ListItem key={item.text} disablePadding>
                <ListItemButton component={Link} to={item.path}>
                  <ListItemIcon>{item.icon}</ListItemIcon>
                  <ListItemText
                    primary={item.text}
                    slotProps={{
                      primary: {
                        sx: { fontSize: "0.875rem" },
                      },
                    }}
                  />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
          <Divider />
          <List>
            {additionalItems.map((item) => (
              <ListItem key={item.text} disablePadding>
                <ListItemButton>
                  <ListItemIcon>{item.icon}</ListItemIcon>
                  <ListItemText
                    primary={item.text}
                    slotProps={{
                      primary: {
                        sx: { fontSize: "0.875rem" },
                      },
                    }}
                  />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <Toolbar />
        <Box className="p-12 mt-12">
          <Grid2 container spacing={4} columns={32}>
            <Grid2 size={8} className="flex justify-center">
              <TemperatureDisplayCard />
            </Grid2>
            <Grid2 size={8} className="flex justify-center">
              <HumidityDisplayCard />
            </Grid2>
            <Grid2 size={8} className="flex justify-center">
              <LightIntensityDisplayCard />
            </Grid2>
            <Grid2 size={8} className="flex justify-center">
              <GasVoltageDisplayCard />
            </Grid2>
          </Grid2>
        </Box>
      </Box>
    </Box>
  );
}
