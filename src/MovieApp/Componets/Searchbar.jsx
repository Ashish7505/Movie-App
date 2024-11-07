import React, { useState } from 'react';
import useMovieSearch from '../Hooks/useMoviesSearch';
import MovieList from './MovieList';


const MovieSearch = () => {
    const [query, setQuery] = useState('');
    const { movies, loading, error } = useMovieSearch(query, 3000);
    return (
      <div className='inputs'>
        <input className='inputtext'
          type="text"
          placeholder="Search for a movie..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        {loading && <p>Loading...</p>}
        {error && <p>{error}</p>}
        {/* <h1>hello</h1> */}
      
        <div id="carouselExampleAutoplaying" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="https://www.bollywoodhungama.com/wp-content/uploads/2023/01/Pathaan-2-10.jpg" class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTy7XL1N0ROn67N6tZl_FCK3j3A8JaiEgFGtw&s"class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src="https://i.ytimg.com/vi/QN-Tyd4qR0c/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLCsbYtU0NFichAO4gN4gA2yobOfPw" class="d-block w-100" alt="..."/>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
        <MovieList movies={movies} />
      </div>
    );
  };

  


export default MovieSearch;
