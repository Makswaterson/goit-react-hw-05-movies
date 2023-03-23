import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

export const MovieList = ({ movies }) => {
  return (
    <ul>
      {movies.map(({ id, title, name }) => (
        <li key={id}>
          <Link to={`movies/${id}`}>
            <p>{title || name}</p>
          </Link>
        </li>
      ))}
    </ul>
  );
};

MovieList.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object),
};
