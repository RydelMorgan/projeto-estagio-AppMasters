import Header from '@/components/header';
import LoginPage from '@/components/login';
import SingUp from '@/components/singUp';
import { Container, CssBaseline } from '@mui/material';

export default function singUp() {
  return (
    <Container maxWidth="lg">
      <CssBaseline />
      <Header variant='login'/>
      <SingUp />
    </Container>
  );
}