import React, { useState, useContext } from 'react';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Autocomplete from '@mui/material/Autocomplete';
import { GameContext } from '@/context';

export default function Search() {
  const { games, setFilteredGames } = useContext(GameContext);
  const [value, setValue] = useState<string | null>(null);
  const options = games.map((game) => game.title);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  const handleInput = (event: any, newValue: string | null) => {
    const filteredGames = newValue
      ? games.filter((game) => game.title === newValue)
      : games;

    setFilteredGames(filteredGames);
    setValue(newValue);
  };

  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <Autocomplete
        value={value}
        onInputChange={(_, newValue) => {
          setValue(newValue);
        }}
        onChange={handleInput}
        options={options}
        sx={{ width: '80%' }}
        renderInput={(params) => (
          <TextField
            {...params}
            label="Digite o título do jogo"
            onChange={handleChange}
          />
        )}
      />
    </Box>
  );
}
