import React, { useState, useContext } from 'react';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Autocomplete from '@mui/material/Autocomplete';
import { GameContext } from '@/context';

export default function Search() {
  const { games, setFilteredGames, filteredGames, setIsFilteredByTitle } = useContext(GameContext);
  const [value, setValue] = useState<string | null>(null);
  const options = filteredGames.map((game) => game.title);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  const handleInput = (event: any, newValue: string | null) => {
    if(newValue){
      setIsFilteredByTitle(true)
      setFilteredGames(games.filter((game) => game.title === newValue));
    }else{
     setIsFilteredByTitle(false);
    }
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
            sx={{
              label: {
                color: 'white',
              },
            }}
          />
        )}
      />
    </Box>
  );
}
