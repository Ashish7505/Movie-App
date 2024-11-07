import React from 'react';
import { useMovieContext } from '../Useconetxt/Movieconetxt';
import { NavLink } from 'react-router-dom';

const Favorites = () => {
  const { favourites, removeFromFavourites } = useMovieContext();

  return (
    <div>
      <h1>Favourite Movies....</h1>
    <div  style={{display:"grid",gridTemplateColumns:"auto auto auto",gap:"30px",marginTop:"40px"}} >
      {favourites.length === 0 ? (
        <p  style={{color:"white"}}>No favourites added yet.</p>
      ) : (
        favourites.map(movie => (
          <div className='card' key={movie.imdbID}>
            <h3 style={{color:"white"}}>{movie.Title} ({movie.Year})</h3>
          <img src={movie.Poster} alt={movie.Title} />
            <button onClick={() => removeFromFavourites(movie.imdbID)}>Remove</button>
          </div>
        ))
      )}
    </div>
    </div>
  );
};

export default Favorites;
