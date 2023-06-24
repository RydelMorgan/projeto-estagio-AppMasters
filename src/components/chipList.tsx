import React from 'react';
import Box from '@mui/material/Box';
import Chip from '@mui/material/Chip';
import { Game } from '@/types';

export default function ChipList({ games }: { games: Game[] }) {
  const distinctGenres = Array.from(new Set(games.map((game) => game.genre)));

  return (
    <Box
      sx={{
        my: 2,
        mx: '10%',
        width: '80%',
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        alignItems: 'center',
        gap: '10px',
      }}
    > 
      {distinctGenres.map((genre, index) => (
        <Chip key={index} label={genre} color="secondary"/>
      ))}
    </Box>
  );
}
