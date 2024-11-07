import React from 'react';
import MovieCard from './MovieCard'

const MovieList = ({ movies, onAddFavourite }) => (
    <div className="movie-list">
        {movies.map((movie) => (
            <MovieCard key={movie.imdbID} movie={movie} onAddFavourite={onAddFavourite} />
        ))}
    </div>
);

export default MovieList;
