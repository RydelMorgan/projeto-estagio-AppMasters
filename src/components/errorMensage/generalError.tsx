import * as React from 'react';
import Box from '@mui/material/Box';
import ErrorIcon from '@mui/icons-material/Error';
import { Typography } from '@mui/material';


export default function GeneralError() {
    return(
    <Box
    sx={{
        display: 'flex',
        justifyContent: 'center',
        flexWrap: 'wrap',
      }}>
        <ErrorIcon sx={{ fontSize: 70, mx: 2}}/>
        <Typography variant="h5" sx={{ flexWrap: "wrap", width: 400}}>O servidor não conseguirá responder por agora, tente voltar novamente mais tarde</Typography>
    </Box>
    )
}