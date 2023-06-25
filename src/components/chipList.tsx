import React, { useContext, useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import Chip from '@mui/material/Chip';
import { GameContext } from '@/context';

export default function ChipList() {
  const { games, setFilteredGames, isFilteredByTitle } = useContext(GameContext);
  const distinctGenres = Array.from(new Set(games.map((game) => game.genre)));
  const [selectedGenres, setSelectedGenres] = useState<string[]>([]);

  const handleClick = (genre: string) => {
    setSelectedGenres((prevSelectedGenres: string[]) => {
      if (prevSelectedGenres.includes(genre)) {
        return prevSelectedGenres.filter((selectedGenre) => selectedGenre !== genre);
      } else {
        return [...prevSelectedGenres, genre];
      }
    });
  };

  useEffect(() => {
    if (!isFilteredByTitle){
      if (selectedGenres.length === 0) {
        setFilteredGames(games);
      } else {
        const filteredGames = games.filter((game) => selectedGenres.includes(game.genre));
        setFilteredGames(filteredGames);
      }
  }
  }, [selectedGenres,isFilteredByTitle]);

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
        <Chip
          id={"genero" + index}
          key={index}
          label={genre}
          onClick={() => handleClick(genre)}
          color={selectedGenres.includes(genre) ? 'primary' : 'default'}
        />
      ))}
    </Box>
  );
}
