import * as React from 'react'
import Box from '@mui/material/Box'
import ErrorIcon from '@mui/icons-material/Error'
import { Typography } from '@mui/material'

interface ErrorProps {
  message: string
}

export default function ErrorMessage({ message }: ErrorProps) {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        flexWrap: 'wrap',
        minWidth: 600,
      }}
    >
      <ErrorIcon sx={{ fontSize: 70, mx: 2 }} />
      <Typography variant="h5" sx={{ flexWrap: 'wrap', width: 400 }}>
        {message}
      </Typography>
    </Box>
  )
}
