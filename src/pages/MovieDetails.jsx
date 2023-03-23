import { useState, useEffect, Suspense } from 'react';
import { useParams, Outlet } from 'react-router-dom';
import { getMovieDetails } from '../services/GetMovies';
import MovieInfo from '../components/MovieItem/MovieItem';
import { Loader } from '../components/Loader/Loader';
import { NavLinks, List } from './MovieDetails.styled';

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
      <List>
        <li>
          <NavLinks to="cast">Cast</NavLinks>
        </li>
        <li>
          <NavLinks to="reviews">Reviews</NavLinks>
        </li>
      </List>
      <Suspense>
        <Outlet fallback={<Loader />} />
      </Suspense>
    </>
  );
};

export default MovieDetails;
