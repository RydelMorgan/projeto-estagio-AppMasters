import React, { useState } from 'react';
import { Button, TextField, Grid, Typography, Container } from '@mui/material';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import { firebaseConfig } from '../api/firebaseConfig';
import { useRouter } from 'next/router';

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

const SignUp = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();
  const [errorMessage, setErrorMessage] = useState('');

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleSignUp = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      await firebase.auth().createUserWithEmailAndPassword(email, password);
      router.push('/');
    } catch (error: any) {
      if (error.code === 'auth/email-already-in-use') {
        setErrorMessage('Email já encontrado no nosso servidor');
      } else if (error.code === 'auth/invalid-email') {
        setErrorMessage('Formato de email inválido');
      } else {
        setErrorMessage('Erro ao realizar o cadastro');
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
      <>
        <Typography component="h1" variant="h4">
          Sign Up
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
          onClick={handleSignUp}
          sx={{ m: 2 }}
        >
          Sign Up
        </Button>

        <Button
          type="submit"
          fullWidth
          color="primary"
          href="/auth/login"
          sx={{ m: 2 }}
        >
          Já tem uma conta?
        </Button>
      </>
    </Container>
  );
};

export default SignUp;
