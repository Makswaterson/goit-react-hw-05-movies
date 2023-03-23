import { Link, useLocation } from 'react-router-dom';
import { useRef } from 'react';
import { Btn, ContainerList } from './MovieItem.styled';

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
        <Btn type="button">Return back</Btn>
      </Link>

      <ContainerList>
        <img
          src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
          alt={title}
          width="300px"
        ></img>

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
      </ContainerList>
    </div>
  );
};
export default MovieInfo;
