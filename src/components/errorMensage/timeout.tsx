import * as React from 'react';
import Box from '@mui/material/Box';
import HourglassDisabledIcon from '@mui/icons-material/HourglassDisabled';
import { Typography } from '@mui/material';


export default function Timeout() {
    return(
    <Box
    sx={{
        display: 'flex',
        justifyContent: 'center',
        flexWrap: 'wrap',
      }}>
        <HourglassDisabledIcon sx={{ fontSize: 70, mx: 2}}/>
        <Typography variant="h5" sx={{ flexWrap: "wrap", width: 400}}>O servidor demorou para responder, tente mais tarde</Typography>
    </Box>
    )
}