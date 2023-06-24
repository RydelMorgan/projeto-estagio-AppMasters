import { fetchData } from '@/api/fetchData';
import { Game } from '@/types';
import { createContext, ReactNode, useState, useEffect } from 'react';

type GameContextProps = {
  children: ReactNode;
};

type GameContextType = {
    isLoading: boolean,
    games: Game[],
    error: Error | null,
    filteredGames: Game[],
    setFilteredGames: (games: Game[]) => void
};

export const GameContext = createContext<GameContextType>({} as GameContextType);

export const GameContextProvider = ({ children }: GameContextProps) => {
  const [isLoading, setIsLoading] = useState(true);
  const [games, setGames] = useState<Game[]>([]);
  const [error, setError] = useState(null);
  const [filteredGames, setFilteredGames] = useState<Game[]>([]);
  
  useEffect(() => {
  
    const fetchDataAndSetState = async () => {
      try {
        const data = await fetchData();
        setGames(data);
        setFilteredGames(data);
        setIsLoading(false);
      } catch (error: any) {
        setError(error);
        setIsLoading(false);
      }
    };
  
    fetchDataAndSetState();
  }, []);


  return (
    <GameContext.Provider
      value={{
        isLoading,
        games,
        error,
        filteredGames,
        setFilteredGames
      }}
    >
      {children}
    </GameContext.Provider>
  );
};








