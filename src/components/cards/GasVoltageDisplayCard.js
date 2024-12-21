import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import sun from '../../assets/sun.jpg';
import { Switch } from '@mui/material';


export default function GasVoltageDisplayCard() {
  return (
    <Card sx={{ width: 325 }}>
      <CardMedia
        sx={{ height: 110 }}
        image={sun}
        title="Gas Voltage"
      />
      <CardContent>
        <Typography className='text-center' gutterBottom variant="h5" component="div">
          Gas Voltage
        </Typography>
        <Typography  className='text-center'variant="body2" sx={{ color: 'text.secondary' }}>
          120.20
        </Typography>
      </CardContent>
      <CardActions className='flex flex-col'>
        <Button size="small">See report</Button>
        <Switch/>
      </CardActions>
    </Card>
  );
}
