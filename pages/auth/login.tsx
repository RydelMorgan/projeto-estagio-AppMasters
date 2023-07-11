import LoginPage from '@/components/login';
import Header from '@/components/header';
import { Container, CssBaseline, ThemeProvider } from '@mui/material';
import theme from '@/theme';

export default function Login() {
  return (
    <ThemeProvider theme={theme}>
      <Container maxWidth="lg" >
        <CssBaseline />
        <Header variant='login'/>
        <LoginPage />
      </Container>
    </ThemeProvider>
  );
}
