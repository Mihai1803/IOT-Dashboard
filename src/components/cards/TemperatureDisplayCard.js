import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import { Switch } from '@mui/material';

import sun from '../../assets/sun.jpg'

export default function TemperatureDisplayCard() {


  return (
    <Card sx={{ width: 325  }}>
      <CardMedia
        sx={{ height: 110 }}
        image={sun}
        title="Temperature"
      />
      <CardContent>
        <Typography className='text-center' gutterBottom variant="h5" component="div">
          Temperature
        </Typography>
        <Typography className='text-center' variant="body2" sx={{ color: 'text.secondary' }}>
          25.30 C
        </Typography>
      </CardContent>
      <CardActions className='flex flex-col'>
        <Button size="small">See report</Button>
        <Switch />
      </CardActions>
    </Card>
  );
}
