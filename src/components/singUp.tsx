import React, { useState } from 'react';
import {
  Button,
  TextField,
  Grid,
  Typography,
  Container
} from '@mui/material';

const SingUp = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  return (
    <Container component="main" maxWidth="xs" sx={{
      marginTop: 15,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    }}>
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
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
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

export default SingUp;
