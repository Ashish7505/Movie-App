import React, { createContext, useState, useContext } from 'react';

const MovieContext = createContext();

export const MovieProvider = ({ children }) => {
  const[count,setCount]=useState(1)
  const [favourites, setFavourites] = useState(() => {
    const savedFavourites = localStorage.getItem('favourites');
    return savedFavourites ? JSON.parse(savedFavourites) : [];
  });

  const addToFavourites = (movie) => {
    setFavourites((prev) => {
      const updatedFavourites = [...prev, movie];
      localStorage.setItem('favourites', JSON.stringify(updatedFavourites));
      return updatedFavourites;
    });
  };
  const increment=()=>{
    setCount(count+1)
  }
  const decrement=()=>{
    setCount(count-1)
  }
  
  

  const removeFromFavourites = (movieId) => {
    setFavourites((prev) => {
      const updatedFavourites = prev.filter(movie => movie.imdbID !== movieId);
      localStorage.setItem('favourites', JSON.stringify(updatedFavourites));
      return updatedFavourites;
    });
  };

  return (
    <MovieContext.Provider value={{ favourites, addToFavourites, removeFromFavourites ,increment,count,decrement}}>
      {children}
    </MovieContext.Provider>
  );
};

export const useMovieContext = () => useContext(MovieContext);
