import { useState, useEffect } from 'react';
import SearchBox from '../components/SearchBox/SearchBox';
import { Link, useLocation, useSearchParams } from 'react-router-dom';
import { getSearchMovies } from '../services/GetMovies';

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const location = useLocation();
  const [searchParams, setSearchParams] = useSearchParams();
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const value = searchParams.get('query') ?? '';
  useEffect(() => {
    if (value === null) {
      return;
    }
    setLoading(true);
    const searchFetch = async () => {
      try {
        const { results } = await getSearchMovies(value);
        setMovies(results);
        console.log(results);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };
    searchFetch();
  }, [value]);

  //   const visibleMovies = movies.filter(movie =>
  //     movie.name.toLowerCase().includes(value.toLowerCase())
  //   );
  const updateQueryString = query => {
    const nextParams = query !== '' ? { query } : {};
    setSearchParams(nextParams);
  };

  return (
    <section>
      <SearchBox value={value} onChange={updateQueryString} />
      <ul>
        {movies.map(({ id, title }) => (
          <li key={id}>
            <Link to={`${id}`} state={{ from: location }}>
              <p>{title}</p>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Movies;
