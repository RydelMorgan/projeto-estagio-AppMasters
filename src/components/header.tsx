import * as React from 'react'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'

export default function Header() {
  return (
    <Box
      sx={{
        my: 9,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Typography variant="h3">App Masters</Typography>
      <Typography variant="h5">Jogos</Typography>
    </Box>
  )
}
