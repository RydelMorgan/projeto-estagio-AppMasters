import Header from '@/components/header'
import Authentication from '@/components/authentication'
import { Container, CssBaseline } from '@mui/material'

export default function signup() {
  return (
    <Container maxWidth="lg">
      <CssBaseline />
      <Header />
      <Authentication />
    </Container>
  )
}
