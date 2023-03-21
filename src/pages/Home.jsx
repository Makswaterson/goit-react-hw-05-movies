import { useState, useEffect } from 'react';
import { getTrendingMovies } from '../services/GetMovies';
import { MovieList } from '../components/MovieList/MovieList';

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getPopularMovies = async () => {
      try {
        const response = getTrendingMovies();
        setMovies(response);
        console.log(response);
      } catch (error) {
        setError(error);
      }
    };

    getPopularMovies();
  }, []);
  return (
    <>
      <h1>Trending Today</h1>
      {movies && <MovieList movies={movies} />}
    </>
  );
};

export default Home;
