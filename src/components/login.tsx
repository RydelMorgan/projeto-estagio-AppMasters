import React, { useContext, useState } from 'react';
import { Button, TextField, Grid, Typography, Container } from '@mui/material';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import { firebaseConfig } from '../api/firebaseConfig';
import { useRouter } from 'next/router';
import { AuthContext } from '@/context/auth';

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [logIn, setLogIn] = useState(false);
  const router = useRouter();
  const { user, handleLogin, handleLogout } = useContext(AuthContext);

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      await handleLogin(email, password);
      setLogIn(true);
      router.push('/');
    } catch (error: any) {
      if (error.code === 'auth/user-not-found') {
        setErrorMessage('Não possui cadastro');
      } else {
        setErrorMessage('Erro ao realizar o Login');
      }
    }
  };

  return (
    <Container
      component="main"
      maxWidth="xs"
      sx={{
        marginTop: 15,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      {user && !logIn ? (
        <>
          <Typography component="h1" variant="h4">
            Você está logado.
          </Typography>
          <Button
            fullWidth
            variant="contained"
            color="primary"
            onClick={handleLogout}
            sx={{ m: 2 }}
          >
            Logout
          </Button>
        </>
      ) : (
        <>
          <Typography component="h1" variant="h4">
            Login
          </Typography>
          <Grid container spacing={2} sx={{ width: '100%', marginTop: 1 }}>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                fullWidth
                id="email"
                label="Email"
                name="email"
                autoComplete="email"
                value={email}
                onChange={handleEmailChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                fullWidth
                id="password"
                label="Senha"
                name="password"
                type="password"
                autoComplete="current-password"
                value={password}
                onChange={handlePasswordChange}
              />
            </Grid>
          </Grid>
          {errorMessage && (
            <Typography color="error" sx={{ mt: 2 }}>
              {errorMessage}
            </Typography>
          )}
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            onClick={handleSubmit}
            sx={{ m: 2 }}
          >
            Entrar
          </Button>
          <Button fullWidth color="primary" href="/auth/signup" sx={{ m: 2 }}>
            Criar uma nova conta ➜
          </Button>
        </>
      )}
    </Container>
  );
}
