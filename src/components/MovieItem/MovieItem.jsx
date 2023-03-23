import { Link, useLocation } from 'react-router-dom';
import { useRef } from 'react';
import PropTypes from 'prop-types';

const MovieInfo = ({
  movie: {
    poster_path,
    title,
    vote_average,
    release_date,
    overview,
    genres = [],
  },
}) => {
  const location = useLocation();
  const backLinkLocationRef = useRef(location.state?.from ?? '/movies');

  return (
    <div>
      <Link to={backLinkLocationRef.current}>
        <button type="button">Return back</button>
      </Link>

      <div>
        <img
          src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
          alt={title}
          width="200px"
        ></img>
      </div>
      <section>
        <h2>
          {title}({release_date})
        </h2>
        <span>User score:{Math.round(vote_average * 10)}%</span>
        <h3>Overview</h3>
        <p>{overview}</p>
        <h4>Genres</h4>
        <p>{genres.map(genre => genre.name).join(', ')}</p>
      </section>
    </div>
  );
};
export default MovieInfo;

MovieInfo.propTypes = {
  movie: PropTypes.shape({
    poster_path: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    vote_average: PropTypes.string.isRequired,
    release_date: PropTypes.string.isRequired,
    overview: PropTypes.string.isRequired,
    genres: PropTypes.array.isRequired,
  }),
};
