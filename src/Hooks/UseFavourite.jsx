import { useState, useEffect } from 'react';

const useFavourites = () => {
    const [favourites, setFavourites] = useState(() => {
        const savedFavourites = localStorage.getItem('favourites');
        return savedFavourites ? JSON.parse(savedFavourites) : [];
    });

    useEffect(() => {
        localStorage.setItem('favourites', JSON.stringify(favourites));
    }, [favourites]);

    const addFavourite = (movie) => {
        setFavourites((prevFavourites) => [...prevFavourites, movie]);
    };


    
    const removeFavourite = (movie) => {
        setFavourites((prevFavourites) => prevFavourites.filter(fav => fav.imdbID !== movie.imdbID));
    };

    return { favourites, addFavourite, removeFavourite };
};

export default useFavourites;
