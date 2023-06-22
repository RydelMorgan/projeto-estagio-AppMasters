import * as React from 'react';
import Container from '@mui/material/Container';
import Header from '../src/components/header';
import { CssBaseline } from '@mui/material';
import Search from '../src/components/searchInput';

export default function Home() {
  return (
    
  <Container maxWidth="lg">
      <CssBaseline />
      <Header />
      <Search />
  </Container>
  )
}
