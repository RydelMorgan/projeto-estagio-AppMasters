import React from 'react'
import {
  onAuthStateChanged,
  getAuth,
  signInWithEmailAndPassword,
  signOut,
  User,
} from 'firebase/auth'
import { firebaseApp } from '../api/firebaseConfig'

const auth = getAuth(firebaseApp)

type AuthContextProps = {
  children: React.ReactNode
}

type AuthContextType = {
  user: User | null
  handleLogin: (email: string, password: string) => Promise<void>
  handleLogout: () => Promise<void>
}

export const AuthContext = React.createContext<AuthContextType>(
  {} as AuthContextType
)

export const AuthContextProvider = ({ children }: AuthContextProps) => {
  const [user, setUser] = React.useState<User | null>(null)

  React.useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user)
      } else {
        setUser(null)
      }
    })

    return () => unsubscribe()
  }, [])

  const handleLogin = async (email: string, password: string) => {
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      )
      const user = userCredential.user
      if (user) {
        setUser(user)
      }
    } catch (error) {
      console.error(error)
      throw new Error('Login failed')
    }
  }

  const handleLogout = async () => {
    try {
      await signOut(auth)
      setUser(null)
      window.location.reload()
    } catch (error) {
      console.error(error)
      throw new Error('Logout failed')
    }
  }

  return (
    <AuthContext.Provider value={{ user, handleLogin, handleLogout }}>
      {children}
    </AuthContext.Provider>
  )
}
