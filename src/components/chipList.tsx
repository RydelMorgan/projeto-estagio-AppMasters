import * as React from 'react';
import Box from '@mui/material/Box';
import Chip from '@mui/material/Chip';


export default function chipList() {
  return (
      <Box sx={{
        my: 2,
        mx: '10%',
        width: '80%',
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        alignItems: 'center',
        gap: '10px',
        }}>
        <Chip label="Clickable" />
      </Box>
  );
}