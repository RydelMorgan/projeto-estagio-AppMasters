import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Chip } from '@mui/material';
import { Game } from '@/types';

interface GameCardProps{
  game: Game
}

export default function GameCard({ game }: GameCardProps ) {
  return (

    <Card sx={{
      borderRadius: 5
    }}>
      <CardMedia
        sx={{ height: 200 }}
        image={game.thumbnail}
        title={game.title}
      />
      <CardContent>
        <Typography variant="body2">
          {game.title}
        </Typography>
        <Typography variant="subtitle1">
          {game.publisher}
        </Typography>
      </CardContent>
      <CardActions sx={{ justifyContent: "space-between", paddingX: 2}}>
        <Typography variant="overline">
          {game.release_date}
        </Typography>
        <Chip label={game.genre} color="secondary"/>
      </CardActions>
    </Card>
    
  );
}
