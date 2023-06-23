import * as React from 'react';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Autocomplete, { createFilterOptions } from '@mui/material/Autocomplete';

const filter = createFilterOptions<string>();

export default function Search() {
  const [value, setValue] = React.useState<string | null>(null);

  return (
    <Box 
    sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
      >
    <Autocomplete
    
      value={value}
      onChange={(event, newValue) => {
          setValue(newValue);
      }}
      filterOptions={(options, params) => {
        const filtered = filter(options, params);
        return filtered;
      }}
      selectOnFocus
      clearOnBlur
      handleHomeEndKeys
      options={['Test']}
      sx={{ width: '80%' }}
      freeSolo
      renderInput={(params) => (
        <TextField {...params} label="Digite o título do jogo" />
        
      )}
    />
    </Box>
  );
}