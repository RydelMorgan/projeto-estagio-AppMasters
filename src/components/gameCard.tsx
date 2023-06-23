import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Chip, Grid } from '@mui/material';

export default function MediaCard() {
  return (

    <Card>
      <CardMedia
        sx={{ height: 200 }}
        image="https://media.discordapp.net/attachments/767103906995372123/1121602435778084884/17880645_617469218457821_7161590473747744356_o.png"
        title="green iguana"
      />
      <CardContent>
        <Typography variant="h5">
          Game Title
        </Typography>
        <Typography variant="subtitle1">
          Publisher
        </Typography>
      </CardContent>
      <CardActions sx={{ justifyContent: "space-between", paddingX: 2}}>
        <Typography variant="overline">
          10/05/1754
        </Typography>
        <Chip label="Genre"/>
      </CardActions>
    </Card>
    
  );
}
