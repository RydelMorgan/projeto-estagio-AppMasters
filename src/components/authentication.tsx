import React, { useContext, useEffect, useState } from 'react'
import { Button, TextField, Grid, Typography, Container } from '@mui/material'
import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'
import { firebaseConfig } from '../api/firebaseConfig'
import { useRouter } from 'next/router'
import { AuthContext } from '@/context/auth'
import ErrorMessage from './errorMessage'
import Loader from './loader'

export default function Authentication() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [errorMessage, setErrorMessage] = useState('')
  const router = useRouter()
  const {
    user,
    handleLogin,
    handleSignUp,
    handleLogout,
    auth,
    isLoading,
    setIsLoading,
  } = useContext(AuthContext)
  const isLoginRoute = router.pathname.includes('login')

  useEffect(() => {
    setIsLoading(true)
    try {
      if (!firebase.apps.length) {
        firebase.initializeApp(firebaseConfig)
      }
    } catch (e) {
      console.log(e)
    } finally {
      setIsLoading(false)
    }
  }, [])

  const text = isLoginRoute
    ? {
        title: 'Login',
        submitButton: 'Entrar',
        oppositeButton: 'Criar uma nova conta ➜',
        oppositeHref: '/auth/signup',
      }
    : {
        title: 'Cadastro',
        submitButton: 'Cadastrar',
        oppositeButton: 'Já tem uma conta?',
        oppositeHref: '/auth/login',
      }

  const handleAuthenticationError = (error: any) => {
    switch (error.code) {
      case 'auth/email-already-in-use':
        setErrorMessage('Email já encontrado no nosso servidor')
        break
      case 'auth/user-not-found':
        setErrorMessage('Não possui cadastro')
        break
      case 'auth/invalid-email':
        setErrorMessage('Formato de email inválido')
        break
      case 'auth/missing-password':
        setErrorMessage('Faltando a senha')
        break
      case 'auth/missing-email':
        setErrorMessage('Faltando o email')
        break
      case 'auth/wrong-password':
        setErrorMessage('Senha incorreta')
        break
      case 'auth/weak-password':
        setErrorMessage('Senha deve conter 6 caracteres')
        break
      default:
        setErrorMessage('Erro ao realizar o serviço')
    }
  }

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value)
  }

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value)
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    try {
      if (isLoginRoute) {
        await handleLogin(email, password)
      } else {
        await handleSignUp(email, password)
      }
      router.push('/')
    } catch (error: any) {
      handleAuthenticationError(error)
    }
  }

  return (
    <Container
      component="main"
      maxWidth="xs"
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
      }}
    >
      {isLoading ? (
        <Loader />
      ) : (
        <>
          {!isLoading && !auth ? (
            <ErrorMessage message="Não conseguimos conectar com o servidor" />
          ) : (
            <>
              {user ? (
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
                    {text.title}
                  </Typography>
                  <Grid
                    container
                    spacing={2}
                    sx={{ width: '100%', marginTop: 1 }}
                  >
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
                    id="submit"
                  >
                    {text.submitButton}
                  </Button>
                  <Button
                    fullWidth
                    color="primary"
                    href={text.oppositeHref}
                    sx={{ m: 2 }}
                    id="sign"
                  >
                    {text.oppositeButton}
                  </Button>
                </>
              )}
            </>
          )}
        </>
      )}
    </Container>
  )
}
