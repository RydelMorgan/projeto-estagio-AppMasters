import Authentication from '@/components/authentication'
import Header from '@/components/header'
import { Container, CssBaseline } from '@mui/material'

export default function Login() {
  return (
    <Container maxWidth="lg">
      <CssBaseline />
      <Header />
      <Authentication />
    </Container>
  )
}
