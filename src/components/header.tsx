import { AppBar, Toolbar, Button } from '@mui/material'

export default function Header() {
  return (
    <AppBar position="fixed">
      <Toolbar sx={{ justifyContent: 'flex-end', '& > *': { marginRight: 5 } }}>
        <Button color="inherit">Login</Button>
        <Button color="inherit">Sign Up</Button>
      </Toolbar>
    </AppBar>
  )
}
