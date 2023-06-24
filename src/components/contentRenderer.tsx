import React, { useContext } from 'react';
import Loader from '@/components/loader';
import renderGrid from '@/components/renderGrid';
import ChipList from './chipList';
import Search from './searchInput';
import Error from './error';
import { GameContext } from '@/context';


export default function ContentRenderer(){
  const {isLoading, games, error, filteredGames} = useContext(GameContext)
  if (isLoading) {
    return <Loader />;

  } else if (error){
      return <Error message={error.message} />;
    }
    return (
      <>
        <Search />
        <ChipList games={games} />
        {renderGrid(filteredGames)}
      </>
    );
  }
