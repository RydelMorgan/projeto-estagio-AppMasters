import { Container, CssBaseline } from '@mui/material';
import Title from '@/components/title';
import ContentRenderer from '@/components/contentRenderer';
import Header from '@/components/header';

export default function Home() {
  return (
    <Container maxWidth="lg">
      <Header />
      <CssBaseline />
      <Title />
      <ContentRenderer/>
    </Container>
  );
}
