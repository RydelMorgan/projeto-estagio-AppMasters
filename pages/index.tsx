import { Container, CssBaseline } from '@mui/material';
import Header from '@/components/header';
import ContentRenderer from '@/components/contentRenderer';

export default function Home() {


  return (
    <Container maxWidth="lg">
      <CssBaseline />
      <Header />
      <ContentRenderer/>
    </Container>
  );
}
