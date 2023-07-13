import React, {
  createContext,
  useEffect,
  useState,
  useMemo,
  useCallback,
} from 'react'
import {
  onAuthStateChanged,
  getAuth,
  signInWithEmailAndPassword,
  signOut,
  User,
  Auth,
  createUserWithEmailAndPassword,
} from 'firebase/auth'
import { firebaseApp } from '../api/firebaseConfig'

type AuthContextProps = {
  children: React.ReactNode
}

type AuthContextType = {
  isLoading: boolean
  user: User | null
  setIsLoading: (isLoading: boolean) => void
  handleSignUp: (email: string, password: string) => Promise<void>
  handleLogin: (email: string, password: string) => Promise<void>
  handleLogout: () => Promise<void>
  auth: Auth | null
}

export const AuthContext = createContext<AuthContextType>({} as AuthContextType)

export const AuthContextProvider = ({ children }: AuthContextProps) => {
  const [isLoading, setIsLoading] = useState(true)
  const [user, setUser] = useState<User | null>(null)
  const [auth, setAuth] = useState<Auth | null>(null)

  useEffect(() => {
    try {
      setAuth(getAuth(firebaseApp))
    } catch (e) {
      console.log(e)
    } finally {
      setIsLoading(false)
    }
  }, [])

  useEffect(() => {
    setIsLoading(true)
    if (auth) {
      const unsubscribe = onAuthStateChanged(auth, (user) => {
        if (user) {
          setUser(user)
        } else {
          setUser(null)
        }
        setIsLoading(false)
      })

      return () => unsubscribe()
    }
  }, [auth])

  const handleLogin = useCallback(
    async (email: string, password: string) => {
      try {
        if (auth) {
          const userCredential = await signInWithEmailAndPassword(
            auth,
            email,
            password
          )
          const user = userCredential.user
          if (user) {
            setUser(user)
          }
        }
      } catch (error) {
        console.error(error)
        throw error
      }
    },
    [auth]
  )

  const handleSignUp = useCallback(
    async (email: string, password: string) => {
      try {
        if (auth) {
          const userCredential = await createUserWithEmailAndPassword(
            auth,
            email,
            password
          )
          const user = userCredential.user
          if (user) {
            setUser(user)
          }
        }
      } catch (error) {
        console.error(error)
        throw error
      }
    },
    [auth]
  )

  const handleLogout = useCallback(async () => {
    try {
      if (auth) {
        await signOut(auth)
        setUser(null)
        window.location.reload()
      }
    } catch (error) {
      console.error(error)
      throw error
    }
  }, [auth])

  const contextValue = useMemo(
    () => ({
      user,
      handleLogin,
      handleSignUp,
      handleLogout,
      auth,
      isLoading,
      setIsLoading,
    }),
    [
      user,
      handleLogin,
      handleSignUp,
      handleLogout,
      auth,
      isLoading,
      setIsLoading,
    ]
  )

  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  )
}
