import * as React from 'react';
import Container from '@mui/material/Container';
import Header from '../src/components/header';
import { CssBaseline, Grid } from '@mui/material';
import Search from '../src/components/searchInput';
import Genre from '@/components/chipList';
import GameCard from '@/components/gameCard';

export default function Home() {
  return (
    
  <Container maxWidth="lg">
      <CssBaseline />
      <Header />
      <Search />
      <Genre />
      <Grid container spacing={2} columns={{xs:1 , sm:2 , md:2 , lg:3 , xl:3 }}
        sx={{
          my: 5,
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
      <Grid item xs={1}><GameCard /></Grid>
      </Grid>
  </Container>
  )
}
