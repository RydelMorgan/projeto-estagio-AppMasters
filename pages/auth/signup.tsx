import Header from '@/components/header'
import SignUp from '@/components/signUp'
import { Container, CssBaseline } from '@mui/material'

export default function signup() {
  return (
    <Container maxWidth="lg">
      <CssBaseline />
      <Header />
      <SignUp />
    </Container>
  )
}
