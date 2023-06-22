import * as React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { CssBaseline } from '@mui/material';

export default function Home() {
  return (
    
    <Container maxWidth="lg">
      <CssBaseline />
    <Box
      sx={{
        my: 4,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Typography variant="h1" component="h1">
        AppMasters
      </Typography>
    </Box>
  </Container>
  )
}
