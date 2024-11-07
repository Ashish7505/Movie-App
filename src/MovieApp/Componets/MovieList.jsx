import React from 'react';
import { useMovieContext } from '../Useconetxt/Movieconetxt';

const MovieList = ({ movies}) => {
  const { addToFavourites,increment,decrement} = useMovieContext();

  return (
    <div>
    <div className='cardbox'>
      {movies.map(movie => (
        <div className='card' key={movie.imdbID}>
          <p style={{color:"white"}}>{movie.Title} ({movie.Year})</p>
          <img style={{height:"440px"}} src={movie.Poster} alt={movie.Title} />
          <br></br>
          <button onClick={() => addToFavourites(movie)}>Add to Favourites</button>
          {/* <p>{movie.Rating}</p> */}
        </div>
      ))}
    </div>
   <div style={{display:"flex",gap:"1300px"}}>
   <button style={{backgroundColor:"white",padding:"8px",borderRadius:"8px"}} onClick={()=>{decrement()}}>Prev page</button>
   <button style={{backgroundColor:"white",padding:"8px",borderRadius:"8px"}} onClick={()=>{increment()}}>Next page</button>
   </div>
    </div>
  );
};

export default MovieList;
