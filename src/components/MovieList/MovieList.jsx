import PropTypes from 'prop-types';
import { List, Links } from './MovieList.styled';

export const MovieList = ({ movies }) => {
  return (
    <List>
      {movies.map(({ id, title, name }) => (
        <li key={id}>
          <Links to={`movies/${id}`}>
            <p>{title || name}</p>
          </Links>
        </li>
      ))}
    </List>
  );
};

MovieList.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object),
};
