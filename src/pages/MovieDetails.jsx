import { useState, useEffect, Suspense } from 'react';
import { useParams, NavLink, Outlet } from 'react-router-dom';
import { getMovieDetails } from '../services/GetMovies';
import MovieInfo from '../components/MovieItem/MovieItem';
import { Loader } from '../components/Loader/Loader';

const MovieDetails = () => {
  const [movie, setMovie] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const { moviesId } = useParams();

  useEffect(() => {
    setLoading(true);
    const movieDetailFetch = async () => {
      try {
        const response = await getMovieDetails(moviesId);
        setMovie(response);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };
    movieDetailFetch();
  }, [moviesId]);

  return (
    <>
      {error && <p>Sorry try another film</p>}
      {loading && <Loader />}
      <MovieInfo movie={movie} />
      <ul>
        <li>
          <NavLink to="cast">Cast</NavLink>
        </li>
        <li>
          <NavLink to="reviews">Reviews</NavLink>
        </li>
      </ul>
      <Suspense>
        <Outlet fallback={<Loader />} />
      </Suspense>
    </>
  );
};

export default MovieDetails;
