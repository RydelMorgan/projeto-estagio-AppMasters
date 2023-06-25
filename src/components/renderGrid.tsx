import React from 'react'
import { Grid } from '@mui/material'
import GameCard from '@/components/gameCard'
import { Game } from '@/types'

export default function renderGrid(games: Game[]) {
  return (
    <Grid
      container
      spacing={2}
      columns={{ xs: 1, sm: 2, md: 3, lg: 3, xl: 3 }}
      sx={{
        my: 5,
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      {games.map((game) => (
        <Grid item key={game.id} xs={1}>
          <GameCard game={game} />
        </Grid>
      ))}
    </Grid>
  )
}
