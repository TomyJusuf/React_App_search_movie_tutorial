import React, { useEffect, useState } from 'react'

import MovieCard from './MovieCard'
import SearchIcon from './search.svg'
import './App.css'

const API_URL = 'https://omdbapi.com?apikey=1fc11d78'

const App = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const [movies, setMovies] = useState([])

  useEffect(() => {
    searchMovies('Robin')
  }, [])

  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`)
    const data = await response.json()
    console.log(data)
    setMovies(data.Search)
  }

  return (
    <div className="app">
      <h1>MovieLand</h1>

      <div className="search">
        <input
          value={searchTerm}
          placeholder="Search for movies"
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <img
          src={SearchIcon}
          alt="search"
          onClick={() => searchMovies(searchTerm)}
        />
      </div>

      {movies?.length > 0 ? (
        <div className="container">
          {movies.map((movie) => (
            <MovieCard movie={movie} />
          ))}
        </div>
      ) : (
        <div className="empty">
          <h2>No movies found</h2>
        </div>
      )}
    </div>
  )
}

export default App
