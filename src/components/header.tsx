import { AppBar, Toolbar, Button } from '@mui/material';

interface HeaderProps {
  variant: string;
}

export default function Header({ variant }: HeaderProps) {
  return (
    <AppBar position="fixed">
      <Toolbar
        sx={{
          justifyContent: variant === 'main' ? 'flex-end' : 'space-between',
          '& > *': { marginRight: 5 }
        }}
      >
        {variant === 'main' && (
          <>
            <Button color="inherit" href='/auth/login'>Login</Button>
            <Button color="inherit">Sign Up</Button>
          </>
        )}
        {variant === 'login' && (
          <Button color="inherit" href='/'>Voltar</Button>
        )}
        {variant === 'loggedIn' && (
          <>
            <Button color="inherit">Favoritos</Button>
            <Button color="inherit">Logout</Button>
          </>
        )}
      </Toolbar>
    </AppBar>
  );
}
