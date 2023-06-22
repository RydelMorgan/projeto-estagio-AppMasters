import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

export default function Header() {
    return(
    <Box
    sx={{
        my: 9,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
    <Typography variant="h4" >
        AppMasters
    </Typography>
    <Typography variant='h6'>
        Jogos
    </Typography>
    </Box>
    )
}