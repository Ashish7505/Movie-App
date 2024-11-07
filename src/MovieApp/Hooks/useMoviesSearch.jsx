import { useState, useEffect } from 'react';
import axios from 'axios';
import { useMovieContext } from '../Useconetxt/Movieconetxt';

// const API_KEY = "397282bd"; // Replace with your OMDb API Key

const useMovieSearch = (query, debounceDelay) => {
  const {count}=useMovieContext()
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!query) return;

    const fetchMovies = async () => {
      setLoading(true);
      setError(null);
      
      try { 
        console.log(count);
        const response = await fetch(`http://www.omdbapi.com/?s=${query}&page=${count}&apikey=397282bd`);
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
    const handler = setTimeout(() => {
      fetchMovies();
    }, debounceDelay);

    return () => {
      clearTimeout(handler);
    };
  }, [query, debounceDelay,count]);

  return { movies, loading, error };
};

export default useMovieSearch;
