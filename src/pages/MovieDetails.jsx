import { useState, useEffect, Suspense } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieDetails } from '../services/GetMovies';
import MovieInfo from '../components/MovieItem/MovieItem';

const MovieDetails = () => {
  const [movie, setMovie] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const { moviesId } = useParams();
  console.log(moviesId);

  useEffect(() => {
    setLoading(true);
    const movieDetailFetch = async () => {
      try {
        const response = await getMovieDetails(moviesId);
        setMovie(response);
        console.log(response);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };
    movieDetailFetch();
  }, [moviesId]);

  console.log(movie);
  return (
    <>
      <h2>hello moviedetails</h2>
      <MovieInfo movie={movie} />
    </>
  );
};

export default MovieDetails;
