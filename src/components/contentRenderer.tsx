import React, { useContext } from 'react'
import Loader from '@/components/loader'
import renderGrid from '@/components/renderGrid'
import ChipList from './chipList'
import Search from './searchInput'
import { GameContext } from '@/context'
import ErrorMessage from './errorMessage'

export default function ContentRenderer() {
  const { isLoading, error, filteredGames } = useContext(GameContext)
  if (isLoading) {
    return <Loader />
  } else if (error) {
    return <ErrorMessage message={error.message} />
  }
  return (
    <>
      <Search />
      <ChipList />
      {renderGrid(filteredGames)}
    </>
  )
}
