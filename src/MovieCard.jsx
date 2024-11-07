import React from 'react';

const MovieCard = ({ movie, onAddFavourite }) => (
    
  
 <div style={{backgroundColor:"lightgrey",width:"400px",textAlign:"center",padding:"20px",borderRadius:"8px"}}>
  <img src={movie.Poster} alt={movie.Title} />
 <div >
 <h3 style={{color:"lightblack"}}>{movie.Title}</h3>
 <h3 style={{float:"right",color:"goldenrod"}}>{movie.Year}</h3>
 </div>
  {/* <button style={{fontSize:"20px",padding:"8px",backgroundColor:"cyan",color:"white"}} onClick={() => onAddFavourite(movie)}>Add to Favourites</button> */}
</div>
);

export default MovieCard;
