import * as React from 'react';
import Box from '@mui/material/Box';
import CloudOffTwoToneIcon from '@mui/icons-material/CloudOffTwoTone';
import { Typography } from '@mui/material';


export default function Error500() {
    return(
    <Box
    sx={{
        display: 'flex',
        justifyContent: 'center',
        flexWrap: 'wrap',
      }}>
        <CloudOffTwoToneIcon sx={{ fontSize: 70, mx: 2}}/>
        <Typography variant="h5" sx={{ flexWrap: "wrap", width: 400}}>O servidor falhou em responder, tente recarregar a página</Typography>
    </Box>
    )
}