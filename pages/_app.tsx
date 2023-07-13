import React from 'react'
import CssBaseline from '@mui/material/CssBaseline'
import { ThemeProvider } from '@mui/material/styles'
import { AppProps } from 'next/app'
import theme from '../src/theme'
import Head from 'next/head'
import { GameContextProvider } from '@/context'
import { AuthContextProvider } from '@/context/auth'

export default function MyApp(props: AppProps) {
  const { Component, pageProps } = props
  return (
    <>
      <Head>
        <title>App Masters</title>
        <link rel="icon" href="/favicon.png" />
      </Head>

      <ThemeProvider theme={theme}>
        <CssBaseline />
        <GameContextProvider>
          <AuthContextProvider>
            <Component {...pageProps} />
          </AuthContextProvider>
        </GameContextProvider>
      </ThemeProvider>
    </>
  )
}
