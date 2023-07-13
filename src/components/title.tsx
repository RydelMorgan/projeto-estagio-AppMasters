import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'

export default function Title() {
  return (
    <Box
      sx={{
        marginTop: 15,
        marginBottom: 10,
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
