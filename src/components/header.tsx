import { AuthContext } from '@/context/auth'
import { AppBar, Toolbar, Button } from '@mui/material'
import { useContext } from 'react'
import { useRouter } from 'next/router'

export default function Header() {
  const { user, handleLogout, isLoading } = useContext(AuthContext)
  const currentPath = useRouter().pathname

  const isMainLayout = currentPath === '/'
  const isAuthLayout = currentPath.includes('/auth')

  return (
    <AppBar position="absolute">
      <Toolbar
        sx={{
          justifyContent: user ? 'space-between' : 'flex-end',
        }}
      >
        {isLoading ? null : (
          <>
            {isMainLayout && (
              <>
                {user ? (
                  <>
                    <Button color="inherit" href="/favorites">
                      Favoritos
                    </Button>
                    <Button color="inherit" onClick={handleLogout} id="logout">
                      Logout
                    </Button>
                  </>
                ) : (
                  <>
                    <Button color="inherit" href="/auth/login" id="login">
                      Login
                    </Button>
                    <Button color="inherit" href="/auth/signup" id="signup">
                      Sign Up
                    </Button>
                  </>
                )}
              </>
            )}
            {isAuthLayout && (
              <Button color="inherit" href="/" id="back">
                Voltar
              </Button>
            )}
          </>
        )}
      </Toolbar>
    </AppBar>
  )
}
