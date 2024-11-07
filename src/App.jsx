// import React, { useState } from 'react';
// import useMovieSearch from './Hooks/UseMovieSearch';
// import useFavourites from './Hooks/UseFavourite';
// import SearchBar from './SearchBar';
// import MovieList from './Movielist';
// import FavouritesList from './FavouruteList';
import './App.css'

// const App = () => {
//     const [query, setQuery] = useState('');
//     const { movies, loading, error } = useMovieSearch(query);
//     const { favourites, addFavourite, removeFavourite } = useFavourites();

//     return (
//         <div className='movie-container'>
//            <div>
//            <h1 style={{fontSize:"50px",color:"lightcyan"}}>Movie Search</h1>
//            <SearchBar onSearch={setQuery} />
//             {loading && <h3 style={{color:"white"}}>Loading...</h3>}
//             {error && <p>{error}</p>}
//             <MovieList movies={movies} onAddFavourite={addFavourite} />
//            </div>
//             <div>
//             <h1 style={{color:"white"}}>Favourites</h1>
//             <FavouritesList favourites={favourites} onRemoveFavourite={removeFavourite} />
//             </div>
//         </div>
//     );
// };

// export default App;



import React from 'react';
import { MovieProvider } from './MovieApp/Useconetxt/Movieconetxt';
import MovieSearch from './MovieApp/Componets/Searchbar';
import Favorites from './MovieApp/Componets/FavouriteList';
import Navbar from './MovieApp/Componets/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MovieList from './MovieApp/Componets/MovieList';
import Footer from './MovieApp/Componets/Footer';

const App = () => {
  return (
      <div>
        {/* <h1 style={{textAlign:"center"}}>Movie Search App...</h1> */}
        <Navbar/>
        <hr style={{color:"white",margin:"50px"
          
        }}></hr>
        <br></br>
        <br></br>
        <br></br>
          <Routes>
          <Route path='/' element={<MovieSearch/>}  /> 
          <Route path='Card' element={<MovieList/>}  /> 
          <Route path='Favourite' element={<Favorites/>}  /> 
          </Routes>
        <hr style={{color:"white",margin:"50px"}}></hr>
          <Footer/>
        {/* <Favorites/> */}

   
    
      
        {/* <MovieSearch /> */}
        {/* <Favorites /> */}
      </div>
  );
};

export default App;


