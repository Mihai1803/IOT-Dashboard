import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import { Switch } from '@mui/material';

import { Link } from "react-router-dom";


export default function DisplayCard({item}) {

  return (      
    <Card sx={{ width: 325}}>
      <CardMedia
        component="img"
        sx={{ height: 200 }}
        image={item.image}
        title={item.name}
      />
      <CardContent>
        <Typography className="text-center" gutterBottom variant="h5" component="div">
          {item.name}
        </Typography>
        <Typography className="text-center" variant="body2" sx={{ color: 'text.secondary' }}>
          {item.value}
        </Typography>
      </CardContent>
      <CardActions className="flex flex-col">
        <Button size="small" component={Link} to={item.path}>See report</Button>
        <Switch />
      </CardActions>
    </Card>
  );
}
