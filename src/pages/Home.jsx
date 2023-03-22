import { useState, useEffect } from 'react';
import { getTrendingMovies } from '../services/GetMovies';
import { MovieList } from '../components/MovieList/MovieList';

function Home() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const getPopularMovies = async () => {
      try {
        const { results } = await getTrendingMovies();
        setMovies(results);
        console.log(results);
      } catch (error) {
        console.log(error);
      }
    };

    getPopularMovies();
  }, []);

  return (
    <>
      <h1>Trending Today</h1>
      <MovieList movies={movies} />
    </>
  );
}

export default Home;
