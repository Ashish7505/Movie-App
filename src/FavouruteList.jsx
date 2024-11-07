import React from 'react';

const FavouritesList = ({ favourites, onRemoveFavourite }) => (
    <div className="favourites-list">
        {favourites.map((movie) => (
            <div key={movie.imdbID}>
                <h4>{movie.Title}</h4>
                <button onClick={() => onRemoveFavourite(movie)}>Remove</button>
            </div>
        ))}
    </div>
);

export default FavouritesList;
