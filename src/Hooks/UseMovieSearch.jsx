import { useState, useEffect } from 'react';

const useMovieSearch = (query) => {
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        if (!query) return;

        const fetchMovies = async () => {
            setLoading(true);
            setError(null);
            try {
                const response = await fetch(`http://www.omdbapi.com/?s=${query}&apikey=397282bd`);
                const data = await response.json();
                console.log(data);
                
                if (data.Response === 'True') { 
                    setMovies(data.Search);
                } else {
                    setMovies([]);
                    setError(data.Error);
                }
            } catch (err) {
                setError('Failed to fetch movies');
            } finally {
                setLoading(false);
            }
        };
        const debounce = setTimeout(() => {
            fetchMovies();
        }, 300);

        return () => clearTimeout(debounce);
    }, [query]);

    return { movies, loading, error };
};

export default useMovieSearch;
