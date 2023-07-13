import { fetchData } from '@/api/fetchData'
import { Game } from '@/types'
import { createContext, ReactNode, useState, useEffect, useMemo } from 'react'

type GameContextProps = {
  children: ReactNode
}

type GameContextType = {
  isLoading: boolean
  games: Game[]
  error: Error | null
  filteredGames: Game[]
  isFilteredByTitle: boolean
  setIsFilteredByTitle: (value: boolean) => void
  setFilteredGames: (games: Game[]) => void
}

export const GameContext = createContext<GameContextType>({} as GameContextType)

export const GameContextProvider = ({ children }: GameContextProps) => {
  const [isLoading, setIsLoading] = useState(true)
  const [games, setGames] = useState<Game[]>([])
  const [error, setError] = useState<Error | null>(null)
  const [filteredGames, setFilteredGames] = useState<Game[]>([])
  const [isFilteredByTitle, setIsFilteredByTitle] = useState(false)

  useEffect(() => {
    const fetchDataAndSetState = async () => {
      try {
        const data = await fetchData()
        setGames(data)
        setFilteredGames(data)
      } catch (error: any) {
        setError(error)
      } finally {
        setIsLoading(false)
      }
    }

    fetchDataAndSetState()
  }, [])

  const contextValue = useMemo(
    () => ({
      isLoading,
      games,
      error,
      filteredGames,
      isFilteredByTitle,
      setIsFilteredByTitle,
      setFilteredGames,
    }),
    [isLoading, games, error, filteredGames, isFilteredByTitle]
  )

  return (
    <GameContext.Provider value={contextValue}>{children}</GameContext.Provider>
  )
}
